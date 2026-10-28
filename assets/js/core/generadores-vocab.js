/* ============================================================
   core/generadores-vocab.js — Ejercicios infinitos desde el vocabulario
   ------------------------------------------------------------
   Cada tipo toma las palabras (y sus frases de ejemplo) de las
   lecciones de vocabulario y fabrica ejercicios nuevos en cada
   intento. Se pueden limitar a un capítulo con `fuente`.

   Uso en un nivel:
     auto: { tipo: 'v-completar', n: 10, fuente: ['k3-vocabulario'] }
     auto: { tipo: 'mixto', n: 20, mezcla: [ { tipo: 'v-plural', n: 6, fuente: […] }, … ] }

   Tipos:
     v-traducir   de→es y es→de (opción múltiple)       modo: 'de-es' | 'es-de' | 'mixto'
     v-articulo   der / die / das                         modo: 'opcion' | 'escribir' | 'mixto'
     v-plural     plural de un sustantivo                 modo: 'escribir' | 'opcion' | 'mixto'
     v-completar  hueco en la frase de ejemplo            modo: 'escribir' | 'opcion' | 'mixto'
     v-ordenar    ordenar la frase de ejemplo
     v-escuchar   escuchar y escribir / ordenar           modo: 'palabra' | 'frase' | 'mixto'
     v-unir       emparejar alemán ↔ español (5 pares)
     v-frase-es   elegir la traducción de una frase de ejemplo
     v-clasificar cajas de colores der / die / das / plural
   ============================================================ */

(function () {
  'use strict';

  var barajar = DE.barajar;

  function unicos(l) { var v = Object.create(null); return l.filter(function (x) { if (v[x]) return false; v[x] = 1; return true; }); }

  /** Palabras de las lecciones de vocabulario indicadas (o de todas). */
  function palabras(fuente, categorias) {
    var vistas = Object.create(null), salida = [];
    DE.lecciones().forEach(function (l) {
      if (!l.datos || !Array.isArray(l.datos.categorias)) return;
      if (fuente && fuente.length && fuente.indexOf(l.id) === -1) return;
      l.datos.categorias.forEach(function (c) {
        if (categorias && categorias.length && categorias.indexOf(c.id) === -1) return;
        (c.palabras || []).forEach(function (p) {
          if (!p.de || !p.es || vistas[p.de]) return;
          if (/[…?!\/]/.test(p.de) || p.de.length > 30 || p.es.length > 44) return;
          vistas[p.de] = true;
          salida.push(p);
        });
      });
    });
    return salida;
  }

  function esSust(p) { return !!p.gen && /^(der|die|das)\s/.test(p.de); }
  function sinArt(p) { return esSust(p) ? p.de.replace(/^(der|die|das)\s+/, '') : p.de; }

  /** Palabras cuyo significado no se repite (para no preguntar algo ambiguo). */
  function claras(pool) {
    var cuenta = Object.create(null);
    pool.forEach(function (q) { cuenta[q.es] = (cuenta[q.es] || 0) + 1; });
    return pool.filter(function (q) { return cuenta[q.es] === 1; });
  }

  function conEjemplo(pool) { return pool.filter(function (p) { return p.ejemplo && p.ejemplo.de && p.ejemplo.es; }); }

  function opciones(correcta, malas, cuantas) {
    var m = unicos(malas.filter(function (x) { return x !== correcta; }));
    var ops = barajar([correcta].concat(barajar(m).slice(0, (cuantas || 4) - 1)));
    return { ops: ops, ok: ops.indexOf(correcta) };
  }

  function mitad(modos, i) { return modos[i % modos.length]; }

  /* ---------------------------------------------------------- */
  function traducir(n, cfg) {
    var pool = claras(palabras(cfg.fuente, cfg.categorias)), res = [];
    var modo = cfg.modo || 'mixto';
    barajar(pool).slice(0, n).forEach(function (p, i) {
      var m = modo === 'mixto' ? mitad(['de-es', 'es-de'], i) : modo;
      var otras = barajar(pool.filter(function (q) { return q.de !== p.de; }));
      if (m === 'de-es') {
        var o = opciones(p.es, otras.map(function (q) { return q.es; }));
        res.push({ t: 'opcion', p: '¿Qué significa «' + p.de + '»?', ops: o.ops, ok: o.ok,
          why: p.de + ' = ' + p.es + (p.nota ? '. ' + p.nota : '.'), visual: p.visual, foto: p.de, audio: p.de });
      } else {
        var o2 = opciones(p.de, otras.map(function (q) { return q.de; }));
        res.push({ t: 'opcion', p: '¿Cómo se dice «' + p.es + '» en alemán?', ops: o2.ops, ok: o2.ok,
          why: p.es + ' = ' + p.de + (p.nota ? '. ' + p.nota : '.'), visual: p.visual, audio: p.de });
      }
    });
    return res;
  }

  /* ---------------------------------------------------------- */
  function articulo(n, cfg) {
    var pool = palabras(cfg.fuente, cfg.categorias).filter(function (p) { return esSust(p) && !p.soloPlural; }), res = [];
    var modo = cfg.modo || 'mixto';
    barajar(pool).slice(0, n).forEach(function (p, i) {
      var m = modo === 'mixto' ? mitad(['opcion', 'escribir'], i) : modo;
      var why = p.de + ' = ' + p.es + (p.plural ? '  (plural: ' + p.plural + ')' : '') + '. Aprende cada sustantivo con su artículo.';
      if (m === 'opcion') {
        res.push({ t: 'opcion', fijo: true, p: '¿Qué artículo lleva «' + sinArt(p) + '»? (' + p.es + ')', ops: ['der', 'die', 'das'],
          ok: ['der', 'die', 'das'].indexOf(p.gen), why: why, visual: p.visual, foto: p.de, audio: p.de });
      } else {
        res.push({ t: 'escribir', p: 'Escribe SOLO el artículo (der, die o das) de: ' + sinArt(p) + ' (' + p.es + ')',
          ok: [p.gen], why: why, visual: p.visual, foto: p.de, audio: p.de });
      }
    });
    return res;
  }

  /* ---------------------------------------------------------- */
  function pluralSimple(p) {
    return p.plural && !p.soloPlural && /^die [A-ZÄÖÜ][^\s\/(]*$/.test(p.plural) ? p.plural : null;
  }

  /** Plurales falsos pero con pinta de posibles, según cómo termina la palabra. */
  function malosPlurales(base, correcto) {
    var raiz = base.replace(/^(der|die|das)\s+/, ''), sinPl = correcto.replace(/^die\s+/, '');
    var um = raiz.replace(/a(?=[^aeiouäöü]*$)/, 'ä').replace(/o(?=[^aeiouäöü]*$)/, 'ö').replace(/u(?=[^aeiouäöü]*$)/, 'ü');
    var c;
    if (/(ei|ie|in|ung|heit|keit|schaft|ion|tät)$/.test(raiz)) c = [raiz + 'en', raiz + 'e', raiz + 's', raiz, raiz + 'er'];
    else if (/[aeiouäöü]$/.test(raiz) && !/e$/.test(raiz)) c = [raiz + 's', raiz, raiz + 'n', raiz + 'e'];
    else if (/e$/.test(raiz)) c = [raiz + 'n', raiz, raiz + 's', raiz.slice(0, -1) + 'er'];
    else c = [raiz + 'e', raiz + 'en', raiz + 'er', raiz + 's', raiz, um + 'e', um + 'er', um];
    return unicos(c).filter(function (x) { return x !== sinPl; }).map(function (x) { return 'die ' + x; });
  }

  function plural(n, cfg) {
    var pool = palabras(cfg.fuente, cfg.categorias).filter(function (p) { return esSust(p) && pluralSimple(p); }), res = [];
    var modo = cfg.modo || 'mixto';
    barajar(pool).slice(0, n).forEach(function (p, i) {
      var m = modo === 'mixto' ? mitad(['escribir', 'opcion'], i) : modo;
      if (/(en|er|el|chen|lein)$/.test(sinArt(p))) m = 'escribir';   // plural casi siempre igual: no se inventan falsos
      var why = 'Plural de ' + p.de + ': ' + p.plural + '. En plural siempre lleva «die», sea cual sea el género.';
      if (m === 'escribir') {
        res.push({ t: 'escribir', p: 'Escribe el plural, con artículo, de: ' + p.de + ' (' + p.es + ')',
          ok: [p.plural, p.plural.replace(/^die\s+/, '')], why: why, pista: 'Empieza por «die»… (aunque hay sustantivos que no cambian).',
          visual: p.visual, audio: p.de });
      } else {
        var o = opciones(p.plural, malosPlurales(p.de, p.plural));
        if (o.ops.length < 3) return;
        res.push({ t: 'opcion', p: '¿Cuál es el plural de «' + p.de + '»? (' + p.es + ')', ops: o.ops, ok: o.ok, why: why, visual: p.visual, audio: p.plural });
      }
    });
    return res;
  }

  /* ---------------------------------------------------------- */
  function hueco(p) {
    var frase = p.ejemplo.de, obj = sinArt(p), formas = [obj];
    var plur = pluralSimple(p);
    if (plur) formas.push(plur.replace(/^die\s+/, ''));
    var sust = esSust(p);
    if (!sust && /\s/.test(obj)) return null;
    for (var i = 0; i < formas.length; i++) {
      var f = formas[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      var re = new RegExp('(^|[^A-Za-zÄÖÜäöüß])(' + f + ')(?=[^A-Za-zÄÖÜäöüß]|$)', sust ? '' : 'i');
      var m = re.exec(frase);
      if (m) {
        var ini = m.index + m[1].length;
        return { texto: frase.slice(0, ini) + '___' + frase.slice(ini + m[2].length), ok: m[2] };
      }
    }
    return null;
  }

  function completar(n, cfg) {
    var pool = [], todas = palabras(cfg.fuente, cfg.categorias), res = [];
    conEjemplo(todas).forEach(function (p) {
      var h = hueco(p);
      if (h && h.texto.indexOf('___') !== -1 && h.texto.split('___').length === 2) pool.push({ p: p, h: h });
    });
    var modo = cfg.modo || 'mixto';
    barajar(pool).slice(0, n).forEach(function (x, i) {
      var m = modo === 'mixto' ? mitad(['escribir', 'opcion'], i) : modo;
      var p = x.p, h = x.h;
      var why = p.ejemplo.de + ' = ' + p.ejemplo.es + ' · ' + p.de + ' = ' + p.es + '.';
      var base = 'Completa la frase: «' + h.texto + '»  (' + p.ejemplo.es + ')';
      if (m === 'escribir') {
        res.push({ t: 'escribir', p: base, ok: [h.ok], why: why, pista: 'Es «' + p.es + '». Si es un sustantivo, con mayúscula.' });
      } else {
        var otras = pool.filter(function (y) { return y.h.ok !== h.ok && (!esSust(p) || esSust(y.p)); }).map(function (y) { return y.h.ok; });
        var o = opciones(h.ok, otras);
        if (o.ops.length < 3) return;
        res.push({ t: 'opcion', p: base, ops: o.ops, ok: o.ok, why: why });
      }
    });
    return res;
  }

  /* ---------------------------------------------------------- */
  function fichasFrase(f) { return f.replace(/[,.?!¿¡]/g, ' ').split(/\s+/).filter(Boolean); }

  /** Frases cuyo orden no admite variantes obvias (sin listas con "und/oder"). */
  function frasesOrdenables(pool, escuchando) {
    return conEjemplo(pool).filter(function (p) {
      var f = fichasFrase(p.ejemplo.de), bajas = f.map(function (x) { return x.toLowerCase(); });
      if (!(f.length >= 3 && f.length <= 9 && unicos(bajas).length === bajas.length && !/[–—\-]\s/.test(p.ejemplo.de))) return false;
      if (!escuchando && (/\b(und|oder|aber)\b/i.test(p.ejemplo.de) || f.length < 4)) return false;
      return true;
    });
  }

  function ordenar(n, cfg) {
    return barajar(frasesOrdenables(palabras(cfg.fuente, cfg.categorias))).slice(0, n).map(function (p) {
      var f = fichasFrase(p.ejemplo.de);
      return { t: 'ordenar', p: 'Ordena la frase: «' + p.ejemplo.es + '»  (empieza con «' + f[0] + '»)', ok: p.ejemplo.de.replace(/[.!?]+$/, ''),
        why: p.ejemplo.de + ' = ' + p.ejemplo.es + '. El verbo conjugado va en la posición 2.', audio: p.ejemplo.de };
    });
  }

  /* ---------------------------------------------------------- */
  function escuchar(n, cfg) {
    var todas = palabras(cfg.fuente, cfg.categorias), res = [];
    var modo = cfg.modo || 'mixto';
    var simples = todas.filter(function (p) { return p.de.split(' ').length <= 3; });
    var frases = frasesOrdenables(todas, true);
    var pares = [];
    barajar(simples).forEach(function (p, i) { pares.push({ k: 'palabra', p: p }); });
    barajar(frases).forEach(function (p) { pares.push({ k: 'frase', p: p }); });
    var lista = [];
    if (modo === 'palabra') lista = pares.filter(function (x) { return x.k === 'palabra'; });
    else if (modo === 'frase') lista = pares.filter(function (x) { return x.k === 'frase'; });
    else {
      var a = barajar(pares.filter(function (x) { return x.k === 'palabra'; })), b = barajar(pares.filter(function (x) { return x.k === 'frase'; }));
      for (var i = 0; lista.length < n && (a.length || b.length); i++) {
        var x = i % 2 === 0 ? (a.shift() || b.shift()) : (b.shift() || a.shift());
        if (x) lista.push(x);
      }
    }
    lista.slice(0, n).forEach(function (x) {
      var p = x.p;
      if (x.k === 'palabra') {
        res.push({ t: 'escribir', p: 'Escucha y escribe lo que oyes (los sustantivos, con su artículo).', ok: [p.de], audio: p.de,
          why: p.de + ' = ' + p.es + '. Pronunciación: ' + (p.fon || '') + '.', pista: 'Significa «' + p.es + '».' });
      } else {
        res.push({ t: 'ordenar', p: 'Escucha la frase y ordena las palabras.', ok: p.ejemplo.de.replace(/[.!?]+$/, ''), audio: p.ejemplo.de,
          why: p.ejemplo.de + ' = ' + p.ejemplo.es + '.' });
      }
    });
    return res;
  }

  /* ---------------------------------------------------------- */
  function unir(n, cfg) {
    var pool = claras(palabras(cfg.fuente, cfg.categorias)).filter(function (p) { return p.es.length <= 28; });
    var res = [], k;
    var barajado = barajar(pool);
    for (k = 0; k < n && (k + 1) * 5 <= barajado.length; k++) {
      var grupo = barajado.slice(k * 5, k * 5 + 5);
      res.push({ t: 'unir', p: 'Une cada palabra con su significado.',
        pares: grupo.map(function (p) { return [p.de, p.es]; }),
        why: grupo.map(function (p) { return p.de + ' = ' + p.es; }).join(' · ') + '.' });
    }
    return res;
  }

  /* ---------------------------------------------------------- */
  function fraseEs(n, cfg) {
    var pool = conEjemplo(palabras(cfg.fuente, cfg.categorias)), res = [];
    var traducciones = unicos(pool.map(function (p) { return p.ejemplo.es; }));
    barajar(pool).slice(0, n).forEach(function (p) {
      var o = opciones(p.ejemplo.es, traducciones);
      if (o.ops.length < 3) return;
      res.push({ t: 'opcion', p: 'Elige la traducción de: «' + p.ejemplo.de + '»', ops: o.ops, ok: o.ok,
        why: p.ejemplo.de + ' = ' + p.ejemplo.es + '. (' + p.de + ' = ' + p.es + ')', audio: p.ejemplo.de });
    });
    return res;
  }

  /* ---------------------------------------------------------- */
  function clasificar(n, cfg) {
    var pool = palabras(cfg.fuente, cfg.categorias).filter(function (p) { return esSust(p) && sinArt(p).indexOf(' ') === -1 && sinArt(p).length <= 16; });
    var res = [], porCaja = cfg.porCaja || 3, intento;
    var GEN = ['der', 'die', 'das'];
    for (intento = 0; intento < n; intento++) {
      var cajas = [], items = [];
      GEN.forEach(function (g) {
        var lista = barajar(pool.filter(function (p) { return p.gen === g && !p.soloPlural; })).slice(0, porCaja);
        if (lista.length < 2) return;
        var ci = cajas.length;
        cajas.push({ etiqueta: g, color: g });
        lista.forEach(function (p) { items.push({ t: sinArt(p), c: ci, es: p.es }); });
      });
      var pls = barajar(pool.filter(function (p) {
        var pl = pluralSimple(p);
        return pl && pl.replace(/^die\s+/, '') !== sinArt(p);
      })).slice(0, porCaja);
      if (pls.length >= 2) {
        var cp = cajas.length;
        cajas.push({ etiqueta: 'die (plural)', color: 'pl' });
        pls.forEach(function (p) { items.push({ t: pluralSimple(p).replace(/^die\s+/, ''), c: cp, es: p.es }); });
      }
      if (cajas.length < 2) return res;
      res.push({ t: 'clasificar', p: 'Arrastra cada palabra a su caja: der (rojo) · die (azul) · das (verde) · plural (morado).',
        cajas: cajas, items: barajar(items), why: 'Cada sustantivo se aprende con su artículo. En plural, los tres géneros pasan a die.' });
    }
    return res;
  }

  DE.gen.registrar('v-traducir', traducir);
  DE.gen.registrar('v-articulo', articulo);
  DE.gen.registrar('v-plural', plural);
  DE.gen.registrar('v-completar', completar);
  DE.gen.registrar('v-ordenar', ordenar);
  DE.gen.registrar('v-escuchar', escuchar);
  DE.gen.registrar('v-unir', unir);
  DE.gen.registrar('v-frase-es', fraseEs);
  DE.gen.registrar('v-clasificar', clasificar);

  /**
   * Seis niveles de práctica ilimitada para un capítulo o tema.
   *   DE.nivelesVocab({ fuente: ['k3-vocabulario'], desde: 8, escala: 1 })
   * `desde` = número del primer nivel nuevo (para los ids n8, n9…).
   * `escala` reduce las cantidades cuando el vocabulario es corto.
   */
  DE.nivelesVocab = function (o) {
    var f = o.fuente, e = o.escala || 1, k = o.desde || 1;
    function m(t, n, extra) {
      var esc = (t === 'v-traducir' || t === 'v-escuchar') ? 1 : e;   // con vocabulario corto solo se reducen los tipos que dependen de frases
      var x = { tipo: t, n: Math.max(1, Math.round(n * esc)), fuente: f };
      if (extra) for (var q in extra) x[q] = extra[q];
      return x;
    }
    function mix(lista) {
      return { tipo: 'mixto', n: lista.reduce(function (a, x) { return a + x.n; }, 0), mezcla: lista };
    }
    var nombre = o.nombre || 'del capítulo';
    return [
      { id: 'n' + (k), dificultad: 'Básico', titulo: 'Más práctica: palabras',
        descripcion: 'Significado y artículo de las palabras ' + nombre + '. Ejercicios nuevos en cada intento.',
        auto: mix([m('v-traducir', 10), m('v-articulo', 8), m('v-unir', 2)]) },
      { id: 'n' + (k + 1), dificultad: 'Medio', titulo: 'Colores y plurales',
        descripcion: 'der rojo · die azul · das verde · plural morado: arrastra, elige y escribe el plural.',
        auto: mix([m('v-clasificar', 3), m('v-plural', 8), m('v-articulo', 5)]) },
      { id: 'n' + (k + 2), dificultad: 'Medio', titulo: 'Frases con huecos',
        descripcion: 'Completa frases de ejemplo con la palabra que falta y elige la traducción (te damos pistas).',
        auto: mix([m('v-completar', 12), m('v-frase-es', 5)]) },
      { id: 'n' + (k + 3), dificultad: 'Medio', titulo: 'Escucha y escribe',
        descripcion: 'Oye la palabra o la frase y escríbela u ordénala. Entrena el oído.',
        auto: m('v-escuchar', 12) },
      { id: 'n' + (k + 4), dificultad: 'Difícil', titulo: 'Arma las frases',
        descripcion: 'Ordena frases enteras y elige su traducción. El verbo siempre en posición 2.',
        auto: mix([m('v-ordenar', 8), m('v-frase-es', 6)]) },
      { id: 'n' + (k + 5), dificultad: 'Experto', titulo: 'Maestro del ' + (o.maestro || 'capítulo'),
        descripcion: 'Un poco de todo, sin ayudas. Si lo dominas, el tema es tuyo.',
        auto: mix([m('v-traducir', 4), m('v-articulo', 4), m('v-plural', 4), m('v-completar', 5), m('v-ordenar', 4), m('v-escuchar', 4), m('v-frase-es', 4), m('v-clasificar', 1)]) }
    ];
  };

  /** Para las pruebas: cuántos ejercicios de cada tipo da una fuente. */
  DE.gen.capacidad = function (fuente) {
    var r = {};
    ['v-traducir', 'v-articulo', 'v-plural', 'v-completar', 'v-ordenar', 'v-escuchar', 'v-unir', 'v-frase-es', 'v-clasificar'].forEach(function (t) {
      r[t] = DE.gen.generar({ tipo: t, n: 999, fuente: fuente }).length;
    });
    return r;
  };
})();
