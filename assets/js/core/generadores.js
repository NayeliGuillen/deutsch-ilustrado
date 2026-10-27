/* ============================================================
   core/generadores.js — Ejercicios infinitos (siempre correctos)
   ------------------------------------------------------------
   Cada generador devuelve una lista de ejercicios para el motor
   del entrenador. Como las soluciones se CALCULAN (horas, números,
   fechas, conjugaciones), nunca hay erratas y cada intento es
   distinto.

   Uso en un nivel:   auto: { tipo: 'hora-leer', n: 10 }
   Mezcla de varios (la resuelve el entrenador): auto: { tipo: 'mixto', mezcla: [ {tipo:'hora-leer', n:5}, … ] }
   ============================================================ */

DE.gen = (function () {
  'use strict';

  var N = DE.num;
  var barajar = DE.barajar;

  function azar(lista) { return lista[Math.floor(Math.random() * lista.length)]; }
  function entre(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function unicos(l) { var v = Object.create(null); return l.filter(function (x) { if (v[x]) return false; v[x] = 1; return true; }); }

  /** Baraja las opciones y devuelve {ops, ok}. */
  function opciones(correcta, malas, cuantas) {
    var m = unicos(malas.filter(function (x) { return x !== correcta; }));
    var ops = barajar([correcta].concat(barajar(m).slice(0, (cuantas || 4) - 1)));
    return { ops: ops, ok: ops.indexOf(correcta) };
  }

  /* ==========================================================
     HORA
     ========================================================== */
  var MIN5 = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  function horaAzar(soloEnPunto) {
    return { h: entre(1, 23), m: soloEnPunto ? 0 : azar(MIN5) };
  }

  function normH(h) { return ((h % 24) + 24) % 24; }

  /** Por qué marca el reloj esa hora, con la regla que la produce. */
  function porQueHora(t) {
    var h = t.h, m = t.m, x = N.hora(h, m), sig = N.h12(normH(h + 1));
    var base = x.dig + ' → ' + x.inoff + '. ';
    if (m === 0) return base + 'Aguja larga arriba (12) = hora en punto: ' + N.h12(h, true) + ' Uhr.';
    if (m === 15) return base + 'Aguja larga en el 3 = Viertel nach (un cuarto después) + la hora que acaba de pasar.';
    if (m === 45) return base + 'Aguja larga en el 9 = Viertel vor (un cuarto antes) + la hora SIGUIENTE (' + sig + ').';
    if (m === 30) return base + '¡Ojo! halb + la hora SIGUIENTE: "halb ' + sig + '" es media hora ANTES de las ' + sig + ', o sea ' + x.dig.slice(-5) + '.';
    if (m === 25) return base + 'Faltan 5 minutos para la media: fünf vor halb + la hora SIGUIENTE (' + sig + ').';
    if (m === 35) return base + 'Cinco minutos después de la media: fünf nach halb + la hora SIGUIENTE (' + sig + ').';
    if (m < 30) return base + 'Hasta y con 20 minutos se dice "nach" + la hora que acaba de pasar (' + N.h12(h) + ').';
    return base + 'Desde 40 minutos se dice "vor" + la hora SIGUIENTE (' + sig + ').';
  }

  /** Frases inoficiales parecidas pero falsas (las trampas típicas). */
  function trampasHora(t) {
    var h = t.h, m = t.m, out = [];
    [[h, m + 5], [h, m - 5], [h + 1, m], [h - 1, m], [h, 60 - m]].forEach(function (c) {
      var mm = (c[1] + 60) % 60, hh = normH(c[0]);
      var f = N.hora(hh, mm).inoff;
      if (f) out.push(f);
    });
    if (m >= 25 && m <= 35) out.push('halb ' + N.h12(h)); // la trampa: halb + la hora actual
    if (m === 45) out.push('Viertel nach ' + N.h12(normH(h + 1)));
    if (m === 15) out.push('Viertel vor ' + N.h12(h));
    var correctas = N.hora(h, m).inoffTodas;
    return out.filter(function (x) { return correctas.indexOf(x) === -1; });
  }

  function leerReloj(n, cfg) {
    var res = [];
    while (res.length < n) {
      var t = horaAzar(cfg && cfg.enPunto), x = N.hora(t.h, t.m);
      var o = opciones(x.inoff, trampasHora(t));
      if (o.ops.length < 3) continue;
      res.push({ t: 'opcion', fijo: true, reloj: [t.h, t.m], p: '¿Qué hora marca el reloj? (forma inoficial, la de todos los días)',
        ops: o.ops, ok: o.ok, why: porQueHora(t), audio: x.inoff });
    }
    return res;
  }

  function elegirReloj(n) {
    var res = [];
    while (res.length < n) {
      var t = horaAzar(), x = N.hora(t.h, t.m), malos = [];
      [[t.h, 60 - t.m], [t.h + 1, t.m], [t.h - 1, t.m], [t.h, t.m + 5], [t.h + 6, t.m], [t.h, t.m + 30]].forEach(function (c) {
        malos.push(normH(c[0]) % 12 * 100 + (c[1] % 60));
      });
      var claveOk = (t.h % 12) * 100 + t.m;
      var vistas = {}, lista = [{ k: claveOk, h: t.h % 12, m: t.m, ok: true }];
      vistas[claveOk] = 1;
      barajar([[t.h, 60 - t.m], [t.h + 1, t.m], [t.h - 1, t.m], [t.h, (t.m + 5) % 60], [t.h + 6, t.m]]).forEach(function (c) {
        var hh = ((c[0] % 12) + 12) % 12, mm = ((c[1] % 60) + 60) % 60, k = hh * 100 + mm;
        if (!vistas[k] && lista.length < 4) { vistas[k] = 1; lista.push({ k: k, h: hh, m: mm, ok: false }); }
      });
      if (lista.length < 3) continue;
      lista = barajar(lista);
      res.push({ t: 'opcion', fijo: true, p: '¿Qué reloj marca "' + x.inoff + '"?',
        ops: lista.map(function (o) { return { html: DE.reloj.svg(o.h, o.m, { tam: 104 }), etiqueta: 'reloj' }; }),
        ok: lista.findIndex(function (o) { return o.ok; }),
        why: porQueHora(t), audio: x.inoff });
    }
    return res;
  }

  function escribirReloj(n) {
    var res = [];
    while (res.length < n) {
      var t = horaAzar(), x = N.hora(t.h, t.m);
      res.push({ t: 'escribir', sinMayus: true, reloj: [t.h, t.m],
        p: 'Escribe la hora en alemán (forma inoficial).', ok: x.inoffTodas, why: porQueHora(t),
        pista: 'Aguja larga: ¿hasta 20 → nach; 25–35 → halb; desde 40 → vor? Recuerda la hora SIGUIENTE con halb y vor.', audio: x.inoff });
    }
    return res;
  }

  function oficial(n) {
    var res = [];
    while (res.length < n) {
      var t = { h: entre(0, 23), m: entre(0, 11) * 5 + (Math.random() < 0.3 ? entre(1, 4) : 0) }, x = N.hora(t.h, t.m);
      res.push({ t: 'escribir', sinMayus: true, p: 'Hora oficial (como en la estación o la radio). Escríbela en palabras: ' + x.dig + ' Uhr',
        ok: [x.off], why: x.dig + ' → ' + x.off + '. En la forma oficial se dice la hora de 0 a 24, luego "Uhr" y luego los minutos: ' +
          N.menor100(t.h, false) + ' + Uhr' + (t.m ? ' + ' + N.menor100(t.m, true) : '') + '.',
        pista: 'Hora + Uhr + minutos. Ejemplo: 14:45 → vierzehn Uhr fünfundvierzig.', audio: x.off });
    }
    return res;
  }

  function convertirHora(n) {
    var res = [];
    while (res.length < n) {
      var t = horaAzar(), x = N.hora(t.h, t.m);
      var haciaOficial = Math.random() < 0.5;
      if (haciaOficial) {
        var malosO = [N.hora(normH(t.h + 12), t.m).off, N.hora(t.h, (t.m + 30) % 60).off, N.hora(normH(t.h + 1), t.m).off, N.hora(t.h, (t.m + 15) % 60).off];
        var o = opciones(x.off, malosO);
        if (o.ops.length < 3) continue;
        res.push({ t: 'opcion', fijo: true, p: 'Es ist ' + x.inoff + ' (es de la tarde/noche si pone ' + x.dig + '). ¿Cómo se dice en forma oficial?',
          ops: o.ops, ok: o.ok, why: x.inoff + ' = ' + x.dig + ' = ' + x.off + '.', audio: x.off });
      } else {
        var o2 = opciones(x.inoff, trampasHora(t));
        if (o2.ops.length < 3) continue;
        res.push({ t: 'opcion', fijo: true, p: 'Oficial: "' + x.off + '". ¿Cómo lo dirías en la calle (inoficial)?',
          ops: o2.ops, ok: o2.ok, why: x.off + ' = ' + x.dig + ' = ' + x.inoff + '. ' + porQueHora(t).split('. ').slice(1).join('. '), audio: x.inoff });
      }
    }
    return res;
  }

  function horaUm(n) {
    var eventos = [['der Film beginnt', 'Wann beginnt der Film?'], ['der Unterricht beginnt', 'Wann beginnt der Unterricht?'],
      ['du frühstückst', 'Wann frühstückst du?'], ['das Konzert beginnt', 'Wann beginnt das Konzert?'],
      ['der Zug fährt', 'Wann fährt der Zug?'], ['du gehst ins Büro', 'Wann gehst du ins Büro?'],
      ['der Supermarkt schließt', 'Wann schließt der Supermarkt?']];
    var res = [];
    while (res.length < n) {
      var t = horaAzar(), x = N.hora(t.h, t.m), e = azar(eventos);
      res.push({ t: 'escribir', sinMayus: true,
        p: e[1] + ' → (' + x.dig + ') Responde con "Um …" (forma inoficial).',
        ok: x.inoffTodas.map(function (f) { return 'Um ' + f; }),
        why: 'Para decir A QUÉ HORA pasa algo se usa "um": Um ' + x.inoff + '.', audio: 'Um ' + x.inoff });
    }
    return res;
  }

  /* ==========================================================
     NÚMEROS
     ========================================================== */
  function altCientos(txt) {
    var l = [txt];
    if (/^hundert/.test(txt)) l.push('ein' + txt);
    if (/^tausend/.test(txt)) l.push('ein' + txt);
    return l;
  }

  function desglose(n) {
    var partes = [];
    var miles = Math.floor(n / 1000), r = n % 1000, c = Math.floor(r / 100), d = r % 100;
    if (miles) partes.push(miles + '.000');
    if (c) partes.push(c * 100);
    if (d) partes.push(d);
    return n + ' = ' + partes.join(' + ') + '. En alemán se pega todo en una palabra y las unidades van ANTES de la decena: ' +
      (d > 20 ? (d % 10) + ' + und + ' + (Math.floor(d / 10) * 10) + ' → ' : '') + N.palabras(n) + '.';
  }

  function numEscribir(n, cfg) {
    var max = (cfg && cfg.max) || 100, min = (cfg && cfg.min) || 13, res = [];
    while (res.length < n) {
      var v = entre(min, max);
      res.push({ t: 'escribir', sinMayus: true, p: 'Escribe en palabras: ' + v, ok: altCientos(N.palabras(v)),
        why: desglose(v), pista: 'Se escribe todo junto, sin espacios. Unidad + und + decena (21 = einundzwanzig).', audio: N.palabras(v) });
    }
    return res;
  }

  function digitosInvertidos(v) {
    var s = String(v).split('').reverse().join('');
    return Number(s);
  }

  function numLeer(n, cfg) {
    var max = (cfg && cfg.max) || 100, min = (cfg && cfg.min) || 13, res = [];
    while (res.length < n) {
      var v = entre(min, max), txt = N.palabras(v);
      var malos = [digitosInvertidos(v), v + 10, v - 10, v + 1, v - 1, v + 100, entre(min, max)].filter(function (x) { return x > 0; }).map(String);
      var o = opciones(String(v), malos);
      if (o.ops.length < 4) continue;
      res.push({ t: 'opcion', fijo: true, p: '¿Qué número es "' + txt + '"?', ops: o.ops, ok: o.ok,
        why: txt + ' = ' + v + '. ' + (v > 20 && v % 10 ? 'Truco: la UNIDAD se dice primero. ' + (v % 10) + ' + und + ' + Math.floor(v / 10) * 10 + ' → ' + v + ', no ' + digitosInvertidos(v) + '.' : ''), audio: txt });
    }
    return res;
  }

  function numPrecio(n) {
    var res = [];
    while (res.length < n) {
      var eu = Math.random() < 0.2 ? 0 : entre(1, 49), ct = Math.random() < 0.15 ? 0 : entre(1, 99);
      if (!eu && !ct) continue;
      var txt = N.precio(eu, ct), cifra = (eu || 0) + ',' + (ct < 10 ? '0' : '') + ct + ' €';
      var alt = [txt];
      if (!eu) alt.push(N.menor100(ct, true));
      res.push({ t: 'escribir', sinMayus: true, p: 'Di el precio en alemán: ' + cifra, ok: alt,
        why: cifra + ' → ' + txt + '. En voz alta se omite la palabra "Cent" cuando hay euros: 2,20 € → zwei Euro zwanzig.',
        pista: 'Euro-Zahl + Euro + Cent-Zahl (sin decir "Cent"). Solo céntimos: … Cent.', audio: txt });
    }
    return res;
  }

  function numSuma(n) {
    var res = [];
    while (res.length < n) {
      var a = entre(11, 60), b = entre(11, 39), resta = Math.random() < 0.35, r;
      if (resta && a < b) { var t = a; a = b; b = t; }
      r = resta ? a - b : a + b;
      res.push({ t: 'escribir', sinMayus: true,
        p: 'Rechne: ' + N.palabras(a) + (resta ? ' minus ' : ' plus ') + N.palabras(b) + ' ist … (responde con palabras)',
        ok: altCientos(N.palabras(r)), why: a + (resta ? ' − ' : ' + ') + b + ' = ' + r + ' → ' + N.palabras(r) + '.',
        audio: N.palabras(a) + (resta ? ' minus ' : ' plus ') + N.palabras(b) });
    }
    return res;
  }

  function anios(n) {
    var res = [];
    while (res.length < n) {
      var v = Math.random() < 0.5 ? entre(1900, 1999) : entre(2000, 2030);
      res.push({ t: 'escribir', sinMayus: true, p: 'Escribe el año en palabras: ' + v, ok: [N.anio(v)],
        why: v + ' → ' + N.anio(v) + '. Los años hasta 1999 se dicen en "cientos" (19|hundert|…); desde 2000 con zweitausend.', audio: N.anio(v) });
    }
    return res;
  }

  /* ==========================================================
     MESES, ESTACIONES, DÍAS, ORDINALES, FECHAS
     ========================================================== */
  var NOTA_ESTACIONES = ' (En Alemania, Austria y Suiza: las estaciones del hemisferio norte.)';

  function mesEstacion(n) {
    var res = [];
    barajar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).concat(barajar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])).slice(0, n).forEach(function (mes) {
      var est = N.estacionDe(mes);
      res.push({ t: 'opcion', fijo: true, p: '¿En qué estación está el ' + N.MESES[mes - 1] + '? (' + N.MESES_ES[mes - 1] + ')',
        ops: ['der Frühling', 'der Sommer', 'der Herbst', 'der Winter'], ok: ['Frühling', 'Sommer', 'Herbst', 'Winter'].indexOf(est),
        why: N.MESES[mes - 1] + ' → im ' + est + '. Frühling: März–Mai · Sommer: Juni–August · Herbst: September–November · Winter: Dezember–Februar.' + NOTA_ESTACIONES });
    });
    return res;
  }

  function mesSiguiente(n) {
    var res = [];
    while (res.length < n) {
      var i = entre(0, 11), tipo = azar(['sig', 'ant', 'num']);
      if (tipo === 'sig') res.push({ t: 'escribir', sinMayus: true, p: '¿Qué mes viene DESPUÉS de ' + N.MESES[i] + '?', ok: [N.MESES[(i + 1) % 12]],
        why: 'Orden: ' + N.MESES.join(', ') + '.' });
      else if (tipo === 'ant') res.push({ t: 'escribir', sinMayus: true, p: '¿Qué mes viene ANTES de ' + N.MESES[i] + '?', ok: [N.MESES[(i + 11) % 12]],
        why: 'Orden: ' + N.MESES.join(', ') + '.' });
      else res.push({ t: 'escribir', sinMayus: true, p: 'El mes número ' + (i + 1) + ' del año se llama …', ok: [N.MESES[i]],
        why: 'Orden: ' + N.MESES.map(function (m, k) { return (k + 1) + ' ' + m; }).join(' · ') + '.' });
    }
    return res;
  }

  function diaSiguiente(n) {
    var res = [];
    while (res.length < n) {
      var i = entre(0, 6), tipo = azar(['sig', 'ant', 'num']);
      if (tipo === 'sig') res.push({ t: 'escribir', sinMayus: true, p: '¿Qué día viene DESPUÉS de ' + N.DIAS[i] + '?', ok: [N.DIAS[(i + 1) % 7]],
        why: 'Orden: ' + N.DIAS.join(', ') + '.' });
      else if (tipo === 'ant') res.push({ t: 'escribir', sinMayus: true, p: '¿Qué día viene ANTES de ' + N.DIAS[i] + '?', ok: [N.DIAS[(i + 6) % 7]],
        why: 'Orden: ' + N.DIAS.join(', ') + '.' });
      else res.push({ t: 'escribir', sinMayus: true, p: 'El día ' + (i + 1) + ' de la semana (empezando en lunes) se llama …', ok: [N.DIAS[i]],
        why: 'En Alemania la semana empieza en Montag: ' + N.DIAS.join(', ') + '.' });
    }
    return res;
  }

  function ordinalEscribir(n) {
    var res = [];
    while (res.length < n) {
      var d = azar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);
      var mes = entre(1, 12), f = N.fecha(d, mes), modo = azar(['nom', 'dat', 'ord']);
      var regla = d < 20 ? 'Hasta 19: número + -te (vierte, fünfzehnte). Excepciones: erste, dritte, siebte, achte.' : 'Desde 20: número + -ste (zwanzigste, einunddreißigste).';
      if (modo === 'nom') res.push({ t: 'escribir', sinMayus: true, p: 'Escribe la fecha en palabras: der ' + f.num, ok: [f.nom], why: f.nom + '. ' + regla });
      else if (modo === 'dat') res.push({ t: 'escribir', sinMayus: true, p: '¿Cuándo? Escribe en palabras: am ' + f.num, ok: [f.dat],
        why: f.dat + '. Con "am" el ordinal termina en -en (dativo): am dritten, am zwanzigsten. ' + regla, audio: f.dat });
      else res.push({ t: 'escribir', sinMayus: true, p: 'Escribe el ordinal (nominativo, como "der ___ Tag"): ' + d + '.', ok: [N.ordinal(d)], why: N.ordinal(d) + '. ' + regla });
    }
    return res;
  }

  function fechaLeer(n) {
    var res = [];
    while (res.length < n) {
      var d = entre(1, 31), mes = entre(1, 12);
      var f = N.fecha(d, mes);
      var malos = [N.fecha(d, (mes % 12) + 1).dat, N.fecha(d === 31 ? 30 : d + 1, mes).dat, N.fecha(d > 1 ? d - 1 : 2, mes).dat,
        'am ' + N.palabras(d) + ' ' + N.MESES[mes - 1], 'am ' + N.ordinal(d) + ' ' + N.MESES[mes - 1]];
      var o = opciones(f.dat, malos);
      if (o.ops.length < 4) continue;
      res.push({ t: 'opcion', fijo: true, p: '¿Cuál es la forma correcta de decir "' + f.num + '"? (Wann? → am …)', ops: o.ops, ok: o.ok,
        why: f.dat + '. Fecha = am + ordinal con -en + mes. No se usan los números normales (✗ am drei Mai) ni el ordinal sin -en (✗ am dritte Mai).', audio: f.dat });
    }
    return res;
  }

  /* ==========================================================
     ARTÍCULOS: ein/eine/kein/keine y Akkusativ (según el género real
     de cada palabra del vocabulario)
     cfg: { neg:true|false|'mixto', caso:'nom'|'akk' }
     ========================================================== */
  function nombresSingulares() {
    return nombres().filter(function (p) { return !p.soloPlural && sinArt(p).length <= 16 && p.de.indexOf(' ') === p.de.lastIndexOf(' '); });
  }

  var FORMA_EIN = {
    nom: { der: 'ein', die: 'eine', das: 'ein' },
    akk: { der: 'einen', die: 'eine', das: 'ein' }
  };

  function einKein(n, cfg) {
    cfg = cfg || {};
    var pool = nombresSingulares(), res = [];
    var ARTEF = { der: 'masculino', die: 'femenino', das: 'neutro' };
    while (res.length < n && pool.length) {
      var p = azar(pool), nom = sinArt(p), g = p.gen;
      var caso = cfg.caso || azar(['nom', 'akk']);
      var neg = cfg.neg === 'mixto' ? Math.random() < 0.5 : !!cfg.neg;
      var base = FORMA_EIN[caso][g], ok = neg ? 'k' + base : base;
      var frase = caso === 'nom'
        ? azar(['Hier ist ___ ' + nom + '.', 'Das ist ___ ' + nom + '.'])
        : azar(['Ich suche ___ ' + nom + '.', 'Ich sehe ___ ' + nom + '.', 'Ich brauche ___ ' + nom + '.']);
      var familia = neg ? ['kein', 'keine', 'keinen'] : ['ein', 'eine', 'einen'];
      var why = p.de + ' es ' + ARTEF[g] + ' (' + g + ')' +
        (caso === 'akk' ? '. Objeto directo = Akkusativ: solo el masculino cambia (ein → einen, kein → keinen).' : '. Nominativo: der/das → ein, die → eine.') +
        ' Resultado: ' + frase.replace('___', ok) + (neg ? ' (kein = negación de ein: lleva las mismas terminaciones)' : '');
      res.push({ t: 'opcion', fijo: true, p: frase + '   (' + p.es + ')', ops: familia, ok: familia.indexOf(ok), why: why, audio: frase.replace('___', ok) });
    }
    return res;
  }

  function artAkk(n) {
    var pool = nombresSingulares(), res = [];
    while (res.length < n && pool.length) {
      var p = azar(pool), nom = sinArt(p), g = p.gen;
      var ok = g === 'der' ? 'den' : g;
      var frase = azar(['Ich sehe ___ ' + nom + '.', 'Ich suche ___ ' + nom + '.', 'Wo ist ___ ' + nom + '?']);
      var nomin = frase.indexOf('Wo ist') === 0;      // "Wo ist ___" = nominativo
      if (nomin) ok = g;
      var ops = nomin ? ['der', 'die', 'das'] : ['den', 'die', 'das'];
      res.push({ t: 'opcion', fijo: true, p: frase + '   (' + p.es + ')', ops: ops, ok: ops.indexOf(ok),
        why: p.de + (nomin ? '. Con "ist" el sustantivo es sujeto = nominativo: se queda ' + p.gen + '.'
          : '. Objeto directo = Akkusativ: der → den; die y das no cambian.') + ' ' + frase.replace('___', ok), audio: frase.replace('___', ok) });
    }
    return res;
  }

  /* ==========================================================
     CLASIFICAR (cajas de colores)
     ========================================================== */
  function lexico() {
    var vistas = Object.create(null), salida = [];
    DE.lecciones().forEach(function (l) {
      if (!l.datos || !Array.isArray(l.datos.categorias)) return;
      l.datos.categorias.forEach(function (c) {
        (c.palabras || []).forEach(function (p) {
          if (!p.de || !p.es || vistas[p.de]) return;
          if (/[…?!\/]/.test(p.de) || p.de.length > 24 || p.es.length > 40) return;
          vistas[p.de] = true;
          salida.push(p);
        });
      });
    });
    return salida;
  }

  function sinArt(p) { return p.de.replace(/^(der|die|das)\s+/, ''); }

  var NO_CLASIFICAR = { Kranke: 1, Einer: 1, Zehner: 1, USA: 1, 'Kölner Dom': 1, Hohenzollernbrücke: 1 };

  function nombres() {
    return lexico().filter(function (p) { return p.gen && /^(der|die|das)\s/.test(p.de) && !NO_CLASIFICAR[sinArt(p)]; });
  }

  /** 4 cajas de colores: der / die / das / plural. `n` = palabras por caja (aprox). */
  function clasificarArticulos(n, cfg) {
    var porCaja = (cfg && cfg.porCaja) || 3, res = [];
    var pool = nombres().filter(function (p) { return sinArt(p).length <= 14 && !/ /.test(sinArt(p)); });
    for (var k = 0; k < n; k++) {
      var items = [], i;
      ['der', 'die', 'das'].forEach(function (g) {
        barajar(pool.filter(function (p) { return p.gen === g && !p.soloPlural; })).slice(0, porCaja).forEach(function (p) {
          items.push({ t: sinArt(p), c: ['der', 'die', 'das'].indexOf(g), es: p.es });
        });
      });
      var plurales = barajar(pool.filter(function (p) {
        return p.plural && sinArt(p) !== p.plural.replace(/^die\s+/, '') && p.plural.indexOf(' ') > 0 && p.plural.replace(/^die\s+/, '').indexOf(' ') === -1;
      })).slice(0, porCaja);
      plurales.forEach(function (p) { items.push({ t: p.plural.replace(/^die\s+/, ''), c: 3 }); });
      res.push({ t: 'clasificar', p: 'Arrastra cada palabra a su caja: der (rojo) · die (azul) · das (verde) · plural (morado).',
        cajas: [{ etiqueta: 'der', color: 'der' }, { etiqueta: 'die', color: 'die' }, { etiqueta: 'das', color: 'das' }, { etiqueta: 'die (plural)', color: 'pl' }],
        items: barajar(items), why: 'Cada sustantivo se aprende con su artículo. En plural, los tres géneros pasan a die.' });
    }
    return res;
  }

  function clasificarMeses(n) {
    var res = [];
    for (var k = 0; k < n; k++) {
      var items = [];
      ['Frühling', 'Sommer', 'Herbst', 'Winter'].forEach(function (est, ci) {
        var meses = N.MESES.filter(function (m, i) { return N.estacionDe(i + 1) === est; });
        barajar(meses).slice(0, 2).forEach(function (m) { items.push({ t: m, c: ci }); });
      });
      res.push({ t: 'clasificar', p: 'Clasifica los meses según su estación.',
        cajas: [{ etiqueta: 'der Frühling', color: 'verde' }, { etiqueta: 'der Sommer', color: 'naranja' },
          { etiqueta: 'der Herbst', color: 'rojo' }, { etiqueta: 'der Winter', color: 'azul' }],
        items: barajar(items), why: 'Frühling: März, April, Mai · Sommer: Juni, Juli, August · Herbst: September, Oktober, November · Winter: Dezember, Januar, Februar.' });
    }
    return res;
  }

  function ordenarMeses(n) {
    var res = [];
    for (var k = 0; k < n; k++) {
      var ini = entre(0, 8), largo = entre(4, 5), ms = [];
      for (var i = 0; i < largo; i++) ms.push(N.MESES[(ini + i) % 12]);
      res.push({ t: 'ordenar', piezas: ms, p: 'Ordena los meses, del primero al último del calendario (de izquierda a derecha).',
        ok: ms.join(' '), why: 'Orden del año: ' + N.MESES.join(' · ') + '.' });
    }
    return res;
  }

  /* ==========================================================
     VERBOS: conjugación
     ========================================================== */
  var PRON = ['ich', 'du', 'er/es/sie', 'wir', 'ihr', 'sie/Sie'];
  var PRON_UNO = ['ich', 'du', 'er', 'wir', 'ihr', 'sie'];

  function verbos(filtro) {
    return lexico().filter(function (p) { return Array.isArray(p.conj) && p.conj.length === 6 && (!filtro || filtro(p)); });
  }

  function formasVerbo(p) { return p.conj.map(function (f) { return String(f).split(' / ')[0]; }); }

  function conjugarEscribir(n, cfg) {
    var pool = verbos(cfg && cfg.filtro), res = [];
    if (!pool.length) return res;
    while (res.length < n) {
      var v = azar(pool), i = entre(0, 5), f = formasVerbo(v);
      var pr = PRON[i] === 'er/es/sie' ? azar(['er', 'es', 'sie']) : (PRON[i] === 'sie/Sie' ? azar(['sie (plural)', 'Sie']) : PRON[i]);
      res.push({ t: 'escribir', sinMayus: true, p: 'Conjuga "' + v.de + '" (' + v.es + '): ' + pr + ' …',
        ok: [f[i], pr.replace(' (plural)', '') + ' ' + f[i]], why: v.de + ' → ' + PRON[i] + ' ' + f[i] + '. ' + (v.nota || ''),
        pista: 'Quita -en del infinitivo y añade: -e, -st, -t, -en, -t, -en.', audio: PRON_UNO[i] + ' ' + f[i] });
    }
    return res;
  }

  function conjugarOpcion(n, cfg) {
    var pool = verbos(cfg && cfg.filtro), res = [];
    if (!pool.length) return res;
    while (res.length < n) {
      var v = azar(pool), i = entre(0, 5), f = formasVerbo(v);
      var malas = f.filter(function (x, k) { return k !== i && x !== f[i]; });
      var o = opciones(f[i], malas);
      if (o.ops.length < 3) continue;
      var pr = PRON[i] === 'er/es/sie' ? 'er' : (PRON[i] === 'sie/Sie' ? 'sie (plural)' : PRON[i]);
      res.push({ t: 'opcion', fijo: true, p: pr + ' ___  (' + v.de + ')', ops: o.ops, ok: o.ok,
        why: v.de + ': ' + f.map(function (x, k) { return PRON[k] + ' ' + x; }).join(' · ') + '. ' + (v.nota || '') });
    }
    return res;
  }

  /** Oración de ejemplo del verbo con el hueco en la forma conjugada. */
  function conjugarFrase(n, cfg) {
    var pool = verbos(cfg && cfg.filtro).filter(function (p) { return p.ejemplo && p.ejemplo.de; }), res = [], intentos = 0;
    while (res.length < n && pool.length && intentos++ < 400) {
      var v = azar(pool), f = formasVerbo(v), frase = v.ejemplo.de, hallada = null;
      f.forEach(function (x) {
        if (!hallada && new RegExp('(^|[^A-Za-zäöüß])' + x + '([^A-Za-zäöüß]|$)').test(frase)) hallada = x;
      });
      if (!hallada) continue;
      var hueco = frase.replace(new RegExp('(^|[^A-Za-zäöüß])' + hallada + '([^A-Za-zäöüß]|$)'), '$1___$2');
      res.push({ t: 'escribir', sinMayus: false, p: 'Completa con la forma correcta de "' + v.de + '":  ' + hueco + '   (' + v.ejemplo.es + ')',
        ok: [hallada], why: frase + ' · ' + v.ejemplo.es + '. ' + (v.nota || ''), audio: frase });
    }
    return res;
  }

  function conjugarTabla(n, cfg) {
    var pool = verbos(cfg && cfg.filtro), res = [];
    if (!pool.length) return res;
    barajar(pool).slice(0, n).forEach(function (v) {
      var f = formasVerbo(v), partes = [];
      PRON.forEach(function (pr, i) {
        partes.push((i ? '\n' : '') + pr + '  ');
        partes.push({ ok: [f[i]], ancho: 9 });
      });
      res.push({ t: 'completar', sinMayus: true, p: 'Completa toda la conjugación de "' + v.de + '" (' + v.es + ').', partes: partes,
        why: v.de + ': ' + f.map(function (x, k) { return PRON[k] + ' ' + x; }).join(' · ') + '. ' + (v.nota || '') });
    });
    return res;
  }

  /* ==========================================================
     DIRECCIONES: planos al azar (siempre con solución válida)
     cfg: { modo:'lugar'|'describir'|'mixto', min, max }  (longitud de la ruta)
     ========================================================== */
  function mapaAzar(n, cfg) {
    cfg = cfg || {};
    var min = cfg.min || 2, max = cfg.max || 4, res = [], intentos = 0, modos = cfg.modo === 'mixto' || !cfg.modo ? ['lugar', 'describir'] : [cfg.modo];
    while (res.length < n && intentos++ < 4000) {
      var largo = entre(min, max), pasos = '', k;
      for (k = 0; k < largo; k++) pasos += azar(['g', 'l', 'r', 'g', 'l', 'r']);
      var ex = { t: 'mapa', mapa: azar(['A', 'B', 'C']), inicio: [entre(0, 3), entre(0, 3)], dir: azar(['N', 'E', 'S', 'W']),
        pasos: pasos, lado: azar(['l', 'r']), modo: azar(modos) };
      var sim = DE.mapa.simular(ex);
      if (!sim.ok) continue;
      if (ex.modo === 'describir' && DE.entrenador.distractores(ex, sim).length < 2) continue;
      if (res.some(function (o) { return o.mapa === ex.mapa && o.inicio[0] === ex.inicio[0] && o.inicio[1] === ex.inicio[1] && o.pasos === ex.pasos; })) continue;
      res.push(ex);
    }
    return res;
  }

  /* ==========================================================
     Mezcla
     ========================================================== */
  var TIPOS = {
    'hora-leer': leerReloj, 'hora-reloj': elegirReloj, 'hora-escribir': escribirReloj, 'hora-oficial': oficial,
    'hora-convertir': convertirHora, 'hora-um': horaUm,
    'num-escribir': numEscribir, 'num-leer': numLeer, 'num-precio': numPrecio, 'num-suma': numSuma, 'num-anio': anios,
    'mes-estacion': mesEstacion, 'mes-vecino': mesSiguiente, 'dia-vecino': diaSiguiente,
    'ordinal': ordinalEscribir, 'fecha-leer': fechaLeer,
    'clasificar-articulos': clasificarArticulos, 'clasificar-meses': clasificarMeses, 'ordenar-meses': ordenarMeses,
    'conj-escribir': conjugarEscribir, 'conj-opcion': conjugarOpcion, 'conj-frase': conjugarFrase, 'conj-tabla': conjugarTabla,
    'mapa-azar': mapaAzar,
    'ein-kein': einKein, 'art-akk': artAkk
  };

  function generar(auto) {
    var fn = TIPOS[auto.tipo];
    return fn ? fn(auto.n || 10, auto) : null;
  }

  return { generar: generar, tipos: Object.keys(TIPOS), lexico: lexico, nombres: nombres, sinArt: sinArt, verbos: verbos, PRON: PRON };
})();
