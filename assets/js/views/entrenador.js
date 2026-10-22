/* ============================================================
   views/entrenador.js — Entrenamiento por niveles
   ------------------------------------------------------------
   Convierte un banco de ejercicios en una escalera de niveles,
   de fácil a experto. Cada nivel se supera con un 90 % o más
   a la PRIMERA; los fallos se repasan al final, explicados.

   Tipos de ejercicio:
     opcion    { p, ops[], ok, why, visual?, audio? }
     escribir  { p, ok[], why, pista?, visual?, audio? }
     ordenar   { p, ok, alt?[], extra?[], why }
     mapa      { mapa, inicio[c,r], dir, pasos, lado, modo:'lugar'|'describir' }

   Niveles automáticos (se generan al azar con TODO el vocabulario):
     nivel.auto = { tipo, n }
       tipo: articulo | articulo-escribir | de-es | es-de | escribir-de

   El progreso se guarda por nivel: DE.store.dominio(leccion:nivel).
   ============================================================ */

(function () {
  'use strict';

  var d = DE.dom;
  var UMBRAL = 90;

  /* ==========================================================
     Utilidades
     ========================================================== */

  function barajar(lista) {
    var a = lista.slice(), i, j, t;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function mayusInicial(t) { return t.charAt(0).toUpperCase() + t.slice(1); }

  /** Comparación tolerante: ß = ss, ä = ae, ö = oe, ü = ue y sin puntuación final. */
  function normalizar(t, respetarMayus) {
    var s = String(t == null ? '' : t).replace(/,/g, ' ').trim().replace(/\s+/g, ' ').replace(/[.!?¿¡]+$/g, '').trim();
    if (!respetarMayus) s = s.toLowerCase();
    return s.replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
            .replace(/Ä/g, 'Ae').replace(/Ö/g, 'Oe').replace(/Ü/g, 'Ue');
  }

  /**
   * @returns {'ok'|'mayus'|'mal'}  'mayus' = idéntica salvo mayúsculas.
   */
  function comparar(ex, dado) {
    var lista = Array.isArray(ex.ok) ? ex.ok : [ex.ok];
    var exige = lista.some(function (o) { return /\s/.test(o) || /^[A-ZÄÖÜ]/.test(o); });
    var i;
    for (i = 0; i < lista.length; i++) {
      if (normalizar(dado, exige) === normalizar(lista[i], exige)) return 'ok';
    }
    if (exige) {
      for (i = 0; i < lista.length; i++) {
        if (normalizar(dado, false) === normalizar(lista[i], false)) return 'mayus';
      }
    }
    return 'mal';
  }

  function fichas(frase) {
    return frase.replace(/[,.?!¿¡]/g, ' ').split(/\s+/).filter(Boolean);
  }

  /** Texto con huecos "___" resaltados. */
  function conHuecos(t) {
    return d.esc(t).replace(/___/g, '<span class="hueco">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');
  }

  /* ==========================================================
     Validación de un ejercicio (la usan las pruebas)
     ========================================================== */
  function validar(ex) {
    if (!ex || !ex.t) return 'sin tipo';
    var i;
    switch (ex.t) {
      case 'opcion':
        if (!ex.p || !Array.isArray(ex.ops) || ex.ops.length < 2) return 'opcion: faltan datos';
        if (typeof ex.ok !== 'number' || ex.ok < 0 || ex.ok >= ex.ops.length) return 'opcion: ok fuera de rango';
        if (new Set(ex.ops).size !== ex.ops.length) return 'opcion: opciones repetidas';
        if (!ex.why) return 'opcion: sin explicación';
        return null;
      case 'escribir':
        if (!ex.p || !ex.ok || (Array.isArray(ex.ok) && !ex.ok.length)) return 'escribir: faltan datos';
        if (!ex.why) return 'escribir: sin explicación';
        return null;
      case 'ordenar':
        if (!ex.p || typeof ex.ok !== 'string') return 'ordenar: faltan datos';
        if (fichas(ex.ok).length < 2) return 'ordenar: frase muy corta';
        if (!ex.why) return 'ordenar: sin explicación';
        (ex.extra || []).forEach(function () {});
        for (i = 0; i < (ex.alt || []).length; i++) {
          if (fichas(ex.alt[i]).slice().sort().join('|') !== fichas(ex.ok).slice().sort().join('|')) {
            return 'ordenar: la alternativa usa otras palabras';
          }
        }
        return null;
      case 'mapa':
        var r = DE.mapa.simular(ex);
        if (!r.ok) return 'mapa: ' + r.error;
        if (ex.modo !== 'lugar' && ex.modo !== 'describir') return 'mapa: modo inválido';
        return null;
      default:
        return 'tipo desconocido: ' + ex.t;
    }
  }

  /* ==========================================================
     Niveles automáticos desde el vocabulario
     ========================================================== */
  function reunirPalabras() {
    var vistas = Object.create(null), salida = [];
    DE.lecciones().forEach(function (l) {
      if (!l.datos || !Array.isArray(l.datos.categorias)) return;
      l.datos.categorias.forEach(function (c) {
        (c.palabras || []).forEach(function (p) {
          if (!p.de || !p.es || vistas[p.de]) return;
          if (/[…?!\/]/.test(p.de) || p.de.length > 26 || p.es.length > 40) return;
          vistas[p.de] = true;
          salida.push(p);
        });
      });
    });
    return salida;
  }

  function sustantivo(p) { return p.gen && p.de.indexOf(p.gen + ' ') === 0; }
  function sinArticulo(p) { return p.de.slice(p.gen.length + 1); }

  function unicos(lista) {
    var v = Object.create(null);
    return lista.filter(function (x) { if (v[x]) return false; v[x] = true; return true; });
  }

  function generar(auto) {
    var pool = reunirPalabras(), n = auto.n || 15, elegidas, out;

    /* Si dos palabras distintas significan lo mismo ("el metro"), preguntar
       el español → alemán sería injusto: se descartan las dos. */
    var conteo = Object.create(null);
    pool.forEach(function (q) { conteo[q.es] = (conteo[q.es] || 0) + 1; });
    var clara = function (q) { return conteo[q.es] === 1; };

    if (auto.tipo === 'articulo' || auto.tipo === 'articulo-escribir') {
      elegidas = barajar(pool.filter(sustantivo)).slice(0, n);
      return elegidas.map(function (p) {
        var why = p.de + ' = ' + p.es + (p.plural ? '  (plural: ' + p.plural + ')' : '') +
          '. Aprende cada sustantivo con su artículo.';
        if (auto.tipo === 'articulo') {
          return { t: 'opcion', p: '¿Qué artículo lleva "' + sinArticulo(p) + '"? (' + p.es + ')',
            ops: ['der', 'die', 'das'], ok: ['der', 'die', 'das'].indexOf(p.gen), why: why,
            visual: p.visual, audio: p.de };
        }
        return { t: 'escribir', p: 'Escribe SOLO el artículo (der, die o das) de: ' + sinArticulo(p) +
          ' (' + p.es + ')', ok: [p.gen], why: why, visual: p.visual, audio: p.de };
      });
    }

    if (auto.tipo === 'de-es') {
      elegidas = barajar(pool).slice(0, n);
      out = elegidas.map(function (p) {
        var otras = unicos(barajar(pool).filter(function (q) { return q.es !== p.es; })
          .map(function (q) { return q.es; })).slice(0, 3);
        var ops = barajar([p.es].concat(otras));
        return { t: 'opcion', p: '¿Qué significa "' + p.de + '"?', ops: ops, ok: ops.indexOf(p.es),
          why: p.de + ' = ' + p.es + '.', visual: p.visual, audio: p.de };
      });
      return out;
    }

    if (auto.tipo === 'es-de') {
      elegidas = barajar(pool.filter(function (q) { return sustantivo(q) && clara(q); })).slice(0, n);
      return elegidas.map(function (p) {
        var mismo = barajar(pool.filter(function (q) { return sustantivo(q) && q.de !== p.de; }));
        var otras = unicos(mismo.map(function (q) { return q.de; })).slice(0, 3);
        var ops = barajar([p.de].concat(otras));
        return { t: 'opcion', p: '¿Cómo se dice "' + p.es + '" en alemán, con su artículo?',
          ops: ops, ok: ops.indexOf(p.de), why: p.es + ' = ' + p.de + '.', visual: p.visual, audio: p.de };
      });
    }

    if (auto.tipo === 'escribir-de') {
      elegidas = barajar(pool.filter(function (q) { return sustantivo(q) && clara(q); })).slice(0, n);
      return elegidas.map(function (p) {
        return { t: 'escribir', p: 'Escribe en alemán, con su artículo: ' + p.es,
          ok: [p.de], why: p.es + ' = ' + p.de + '. Con mayúscula inicial en el sustantivo.',
          pista: 'Empieza por ' + p.gen + '…', visual: p.visual, audio: p.de };
      });
    }

    return [];
  }

  /* ==========================================================
     Explicación automática de un recorrido
     ========================================================== */
  var DIR_ES = { N: 'arriba', S: 'abajo', E: 'a la derecha', W: 'a la izquierda' };
  var PASO_ES = {
    g: 'geradeaus: sigues recto hasta el siguiente cruce',
    l: 'links: giras a la izquierda y caminas una calle',
    r: 'rechts: giras a la derecha y caminas una calle'
  };

  function explicarMapa(ex, sim) {
    var pasos = ex.pasos.split('').map(function (p, i) {
      return (i + 1) + '. ' + PASO_ES[p];
    }).join(' · ');
    return 'Empiezas en el punto con la flecha, mirando ' + DIR_ES[ex.dir] + '. ' + pasos +
      '. Al final, en la última calle, ' + sim.nombre + ' queda ' +
      (ex.lado === 'l' ? 'a tu izquierda (links)' : 'a tu derecha (rechts)') + '.';
  }

  /** Dos distractores creíbles para "elige la instrucción". */
  function distractores(ex, sim) {
    var correcta = sim.texto, salida = [], intentos = 0;
    var cambio = { g: ['l', 'r'], l: ['r', 'g'], r: ['l', 'g'] };
    var nombres = [], r, c;
    for (r = 0; r < 3; r++) for (c = 0; c < 3; c++) {
      var nm = DE.mapa.nombre(ex.mapa, c, r);
      if (nm !== sim.nombre) nombres.push(nm);
    }
    while (salida.length < 2 && intentos < 60) {
      intentos++;
      var pasos = ex.pasos.split('');
      var k = Math.floor(Math.random() * pasos.length);
      var opciones = cambio[pasos[k]];
      pasos[k] = opciones[Math.floor(Math.random() * 2)];
      var lado = Math.random() < 0.3 ? (ex.lado === 'l' ? 'r' : 'l') : ex.lado;
      var texto = DE.mapa.texto(pasos.join(''), lado, sim.nombre);
      if (Math.random() < 0.35) {
        texto = DE.mapa.texto(pasos.join(''), lado, nombres[Math.floor(Math.random() * nombres.length)]);
      }
      if (texto !== correcta && salida.indexOf(texto) === -1) salida.push(texto);
    }
    return salida;
  }

  /* ==========================================================
     Vista
     ========================================================== */
  DE.registrarVista('entrenador', function (leccion) {
    var datos = leccion.datos;
    var raiz = document.createElement('div');
    raiz.className = 'ent';

    function clave(nivel) { return leccion.id + ':' + nivel.id; }
    function mejor(nivel) { return DE.store.dominio(clave(nivel)).mejor; }
    function dominado(nivel) { return mejor(nivel) >= UMBRAL; }

    /* ---------------- Pantalla de niveles ------------------ */
    function pantallaNiveles() {
      var hechos = datos.niveles.filter(dominado).length;
      var total = datos.niveles.length;
      var pct = Math.round(hechos / total * 100);

      raiz.innerHTML =
        '<header class="vista-encabezado">' +
          '<p class="migaja">' + d.esc(leccion.grupo) + '</p>' +
          '<h1>' + d.esc(leccion.titulo) + '</h1>' +
          '<p class="intro">' + d.esc(datos.intro) + '</p>' +
        '</header>' +
        '<div class="ent-resumen">' +
          '<div><strong>' + hechos + ' de ' + total + '</strong> niveles dominados' +
          '<span class="ent-regla"> · Se domina con ' + UMBRAL + ' % o más, a la primera</span></div>' +
          '<div class="quiz-barra"><span style="width:' + pct + '%"></span></div>' +
        '</div>' +
        '<div class="ent-niveles">' + datos.niveles.map(tarjetaNivel).join('') + '</div>';

      raiz.querySelectorAll('[data-nivel]').forEach(function (b) {
        b.addEventListener('click', function () {
          var nivel = datos.niveles.find(function (n) { return n.id === b.getAttribute('data-nivel'); });
          empezar(nivel);
        });
      });
      window.scrollTo(0, 0);
    }

    function tarjetaNivel(n, i) {
      var m = mejor(n), intentos = DE.store.dominio(clave(n)).intentos;
      var estado = m >= 100 ? 'perfecto' : (m >= UMBRAL ? 'dominado' : (intentos ? 'practicando' : 'nuevo'));
      var etiqueta = { perfecto: 'Perfecto', dominado: 'Dominado', practicando: 'Sigue practicando', nuevo: 'Sin empezar' }[estado];
      var cuantos = n.auto ? (n.auto.n || 15) : n.ejercicios.length;
      return '<article class="ent-nivel ' + estado + '">' +
        '<div class="ent-nivel-num">' + (i + 1) + '</div>' +
        '<div class="ent-nivel-cuerpo">' +
          '<p class="ent-nivel-dif">' + d.esc(n.dificultad || '') + '</p>' +
          '<h3>' + d.esc(n.titulo) + '</h3>' +
          '<p class="ent-nivel-desc">' + d.esc(n.descripcion) + '</p>' +
          '<p class="ent-nivel-meta">' + cuantos + ' ejercicios' + (n.auto ? ' · distintos cada vez' : '') +
            (intentos ? ' · mejor: <strong>' + m + ' %</strong>' : '') + '</p>' +
        '</div>' +
        '<div class="ent-nivel-lado">' +
          '<span class="ent-sello">' + etiqueta + '</span>' +
          '<button type="button" class="btn btn-sm" data-nivel="' + d.esc(n.id) + '">' +
            (intentos ? 'Repetir' : 'Empezar') + '</button>' +
        '</div>' +
      '</article>';
    }

    /* ---------------- Una partida de un nivel -------------- */
    function empezar(nivel) {
      var lista = nivel.auto ? generar(nivel.auto) : barajar(nivel.ejercicios);
      var run = { nivel: nivel, items: lista, i: 0, fallos: [], primeros: 0, repaso: false };
      pregunta(run);
    }

    function cabecera(run) {
      var total = run.items.length;
      return '<div class="ent-barra-sup">' +
        '<button type="button" class="btn btn-ghost btn-sm" data-salir>' + DE.icono('flechaIzq') + ' Niveles</button>' +
        '<span class="ent-cuenta">' + d.esc(run.nivel.titulo) + (run.repaso ? ' · repaso de fallos' : '') +
          ' · ' + (run.i + 1) + ' / ' + total + '</span>' +
      '</div>' +
      '<div class="quiz-barra"><span style="width:' + Math.round(run.i / total * 100) + '%"></span></div>';
    }

    function pregunta(run) {
      var ex = run.items[run.i];
      var marco = document.createElement('div');
      marco.className = 'quiz ent-pregunta';
      marco.innerHTML = cabecera(run);
      var zona = document.createElement('div');
      marco.appendChild(zona);

      raiz.innerHTML = '';
      raiz.appendChild(marco);
      marco.querySelector('[data-salir]').addEventListener('click', pantallaNiveles);

      var finalizar = function (acierto, contenidoFeedback, extra) {
        if (!run.repaso) {
          if (acierto) run.primeros++;
          else run.fallos.push(ex);
        }
        feedback(run, marco, acierto, contenidoFeedback, extra);
      };

      var dibujar = {
        opcion: dibujarOpcion, escribir: dibujarEscribir,
        ordenar: dibujarOrdenar, mapa: dibujarMapa
      }[ex.t];
      dibujar(zona, ex, finalizar);
      window.scrollTo(0, 0);
    }

    function enunciado(ex, texto) {
      var v = ex.visual && DE.pic ? '<div class="ent-visual">' + DE.pic(ex.visual) + '</div>' : '';
      var oir = ex.audio ? ' ' + d.audio(ex.audio) : '';
      return '<div class="ent-enunciado">' + v + '<p class="quiz-pregunta">' + texto + oir + '</p></div>' +
        (ex.pista ? '<details class="ent-pista"><summary>Pista</summary><p>' + d.esc(ex.pista) + '</p></details>' : '');
    }

    /* ---- opcion ---- */
    function dibujarOpcion(zona, ex, fin) {
      var ops = ex.ops.map(function (t, i) { return { t: t, ok: i === ex.ok }; });
      if (!ex.fijo) ops = barajar(ops);
      zona.innerHTML = enunciado(ex, conHuecos(ex.p)) +
        '<div class="quiz-opciones">' + ops.map(function (o, i) {
          return '<button type="button" class="quiz-opcion" data-i="' + i + '">' +
            '<span class="letra">' + 'ABCDEF'.charAt(i) + '</span><span>' + d.esc(o.t) + '</span></button>';
        }).join('') + '</div>';
      var botones = zona.querySelectorAll('.quiz-opcion');
      botones.forEach(function (b) {
        b.addEventListener('click', function () {
          var i = Number(b.getAttribute('data-i'));
          botones.forEach(function (x, k) {
            x.disabled = true;
            if (ops[k].ok) x.classList.add('correcta');
          });
          if (!ops[i].ok) b.classList.add('incorrecta');
          fin(ops[i].ok, null, { respuesta: ex.ops[ex.ok] });
        });
      });
    }

    /* ---- escribir ---- */
    function dibujarEscribir(zona, ex, fin) {
      zona.innerHTML = enunciado(ex, conHuecos(ex.p)) +
        '<div class="ent-escribir"><input type="text" class="ent-input" autocomplete="off" autocapitalize="off" ' +
          'autocorrect="off" spellcheck="false" aria-label="Tu respuesta" placeholder="Escribe aquí">' +
          '<button type="button" class="btn">Comprobar</button></div>' +
        '<p class="ent-nota">Puedes usar ae, oe, ue en lugar de ä, ö, ü, y ss en lugar de ß.</p>';
      var inp = zona.querySelector('input'), btn = zona.querySelector('.btn');
      var hecho = false;
      var comprobar = function () {
        if (hecho || !inp.value.trim()) return;
        hecho = true;
        var r = comparar(ex, inp.value);
        inp.disabled = true; btn.disabled = true;
        inp.classList.add(r === 'ok' ? 'correcta' : 'incorrecta');
        var lista = Array.isArray(ex.ok) ? ex.ok : [ex.ok];
        fin(r === 'ok', null, {
          respuesta: lista[0],
          aviso: r === 'mayus' ? 'Casi: la respuesta es la misma, pero en alemán los sustantivos y el inicio de la frase llevan mayúscula.' : ''
        });
      };
      btn.addEventListener('click', comprobar);
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') comprobar(); });
      inp.focus({ preventScroll: true });
    }

    /* ---- ordenar ---- */
    function dibujarOrdenar(zona, ex, fin) {
      var correctas = fichas(ex.ok);
      var todas = barajar(correctas.concat(ex.extra || []).map(function (t, i) { return { t: t, id: i }; }));
      var elegidas = [];
      zona.innerHTML = enunciado(ex, d.esc(ex.p)) +
        '<div class="ord-respuesta" aria-label="Tu frase"></div>' +
        '<div class="ord-banco" aria-label="Palabras disponibles"></div>' +
        '<div class="ent-escribir"><button type="button" class="btn" disabled>Comprobar</button>' +
        '<button type="button" class="btn btn-ghost" data-borrar>Borrar</button></div>';
      var areaR = zona.querySelector('.ord-respuesta'), areaB = zona.querySelector('.ord-banco');
      var btn = zona.querySelector('.btn'), borrar = zona.querySelector('[data-borrar]');
      var hecho = false;

      function pintar() {
        areaR.innerHTML = elegidas.map(function (f) {
          return '<button type="button" class="ord-ficha" data-id="' + f.id + '">' + d.esc(f.t) + '</button>';
        }).join('');
        areaB.innerHTML = todas.filter(function (f) { return elegidas.indexOf(f) === -1; }).map(function (f) {
          return '<button type="button" class="ord-ficha" data-id="' + f.id + '">' + d.esc(f.t) + '</button>';
        }).join('');
        btn.disabled = !elegidas.length || hecho;
      }
      function alternar(e) {
        if (hecho) return;
        var b = e.target.closest('.ord-ficha');
        if (!b) return;
        var id = Number(b.getAttribute('data-id'));
        var f = todas.find(function (x) { return x.id === id; });
        var k = elegidas.indexOf(f);
        if (k === -1) elegidas.push(f); else elegidas.splice(k, 1);
        pintar();
      }
      areaR.addEventListener('click', alternar);
      areaB.addEventListener('click', alternar);
      borrar.addEventListener('click', function () { if (!hecho) { elegidas = []; pintar(); } });
      btn.addEventListener('click', function () {
        hecho = true;
        var dado = elegidas.map(function (f) { return f.t; });
        var validas = [ex.ok].concat(ex.alt || []).map(fichas);
        var ok = validas.some(function (v) { return v.join(' ') === dado.join(' '); });
        areaR.classList.add(ok ? 'correcta' : 'incorrecta');
        pintar(); btn.disabled = true; borrar.disabled = true;
        fin(ok, null, { respuesta: ex.ok, hablar: ex.ok });
      });
      pintar();
    }

    /* ---- mapa ---- */
    function dibujarMapa(zona, ex, fin) {
      var sim = DE.mapa.simular(ex);
      if (ex.modo === 'lugar') {
        zona.innerHTML =
          '<p class="quiz-pregunta">Escucha o lee la instrucción y toca el edificio al que llegas.</p>' +
          '<div class="mapa-instruccion">' + d.de(DE.mapa.textoRuta(ex.pasos).replace(/\.$/, '') + '.') +
            '<span class="mapa-instr-fin">¿Y el edificio? Tócalo en el plano.</span></div>' +
          '<div class="mapa-caja">' + DE.mapa.svg(ex.mapa, { inicio: ex.inicio, dir: ex.dir, interactivo: true }) + '</div>' +
          '<p class="ent-nota">El punto naranja eres tú; la flecha indica hacia dónde miras. Cada paso recorre una calle hasta el siguiente cruce. ' +
          'Edificio buscado: el que queda <strong>' + (ex.lado === 'l' ? 'links (a tu izquierda)' : 'rechts (a tu derecha)') +
          '</strong> en la última calle.</p>';
        var hecho = false;
        var alt = function (g) {
          if (hecho) return;
          hecho = true;
          var c = Number(g.getAttribute('data-c')), r = Number(g.getAttribute('data-r'));
          var ok = c === sim.celda[0] && r === sim.celda[1];
          var marcar = [{ c: sim.celda[0], r: sim.celda[1], clase: 'ok' }];
          if (!ok) marcar.push({ c: c, r: r, clase: 'mal' });
          zona.querySelector('.mapa-caja').innerHTML = DE.mapa.svg(ex.mapa, {
            inicio: ex.inicio, dir: ex.dir, ruta: sim.ruta, marcar: marcar
          });
          fin(ok, null, { respuesta: sim.nombre, hablar: sim.texto, explicacion: explicarMapa(ex, sim) });
        };
        zona.querySelectorAll('.mapa-celda').forEach(function (g) {
          g.addEventListener('click', function () { alt(g); });
          g.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); alt(g); }
          });
        });
        return;
      }

      /* describir: ver el recorrido y elegir la instrucción */
      var ops = barajar([{ t: sim.texto, ok: true }].concat(distractores(ex, sim).map(function (t) {
        return { t: t, ok: false };
      })));
      zona.innerHTML =
        '<p class="quiz-pregunta">Mira el recorrido (línea con flecha) y el edificio verde. ¿Qué instrucción lo describe?</p>' +
        '<div class="mapa-caja">' + DE.mapa.svg(ex.mapa, {
          inicio: ex.inicio, dir: ex.dir, ruta: sim.ruta,
          marcar: [{ c: sim.celda[0], r: sim.celda[1], clase: 'destino' }]
        }) + '</div>' +
        '<div class="quiz-opciones">' + ops.map(function (o, i) {
          return '<button type="button" class="quiz-opcion" data-i="' + i + '"><span class="letra">' +
            'ABCDEF'.charAt(i) + '</span><span>' + d.esc(o.t) + '</span></button>';
        }).join('') + '</div>';
      var botones = zona.querySelectorAll('.quiz-opcion');
      botones.forEach(function (b) {
        b.addEventListener('click', function () {
          var i = Number(b.getAttribute('data-i'));
          botones.forEach(function (x, k) { x.disabled = true; if (ops[k].ok) x.classList.add('correcta'); });
          if (!ops[i].ok) b.classList.add('incorrecta');
          fin(ops[i].ok, null, { respuesta: sim.texto, hablar: sim.texto, explicacion: explicarMapa(ex, sim) });
        });
      });
    }

    /* ---------------- Retroalimentación -------------------- */
    function feedback(run, marco, acierto, _x, extra) {
      extra = extra || {};
      var ex = run.items[run.i];
      var porque = extra.explicacion || ex.why || '';
      var hablar = extra.hablar || ex.audio || '';
      var ultimo = run.i === run.items.length - 1;

      var caja = document.createElement('div');
      caja.className = 'ent-feedback ' + (acierto ? 'bien' : 'mal');
      caja.setAttribute('role', 'status');
      caja.innerHTML =
        '<p class="ent-veredicto">' + DE.icono(acierto ? 'checkCirculo' : 'prohibido') +
          '<span>' + (acierto ? 'Richtig. ¡Correcto!' : 'Todavía no.') + '</span></p>' +
        (!acierto && extra.respuesta ? '<p class="ent-respuesta">Respuesta correcta: <strong>' +
          d.esc(extra.respuesta) + '</strong>' + (hablar ? ' ' + d.audio(hablar) : '') + '</p>' : '') +
        (acierto && hablar ? '<p class="ent-respuesta">' + d.de(hablar) + '</p>' : '') +
        (extra.aviso ? '<p class="ent-porque">' + d.esc(extra.aviso) + '</p>' : '') +
        (porque ? '<p class="ent-porque"><strong>Por qué:</strong> ' + d.esc(porque) + '</p>' : '') +
        '<button type="button" class="btn" data-sig>' + (ultimo ? 'Ver resultado' : 'Siguiente') + '</button>';
      marco.appendChild(caja);

      var sig = caja.querySelector('[data-sig]');
      sig.addEventListener('click', function () {
        run.i++;
        if (run.i < run.items.length) pregunta(run);
        else resultado(run);
      });
      sig.focus({ preventScroll: true });
      caja.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    /* ---------------- Resultado ---------------------------- */
    function resultado(run) {
      if (run.repaso) {
        raiz.innerHTML = '<div class="quiz"><div class="tarjeta quiz-resultado">' +
          '<h2>Repaso terminado</h2><p>Estos ejercicios no cuentan para tu nota, pero son los que más te enseñan. ' +
          'Repite el nivel para comprobar que ya los dominas.</p>' +
          '<div class="ent-acciones"><button type="button" class="btn" data-repetir>Repetir el nivel</button>' +
          '<button type="button" class="btn btn-ghost" data-niveles>Volver a los niveles</button></div></div></div>';
        raiz.querySelector('[data-repetir]').addEventListener('click', function () { empezar(run.nivel); });
        raiz.querySelector('[data-niveles]').addEventListener('click', pantallaNiveles);
        return;
      }

      var total = run.items.length;
      var pct = Math.round(run.primeros / total * 100);
      var previo = mejor(run.nivel);
      DE.store.registrarDominio(clave(run.nivel), pct);

      var todos = datos.niveles.every(dominado);
      if (todos && DE.store.completar(leccion.id)) DE.toast('Tema dominado. Lección marcada como aprendida.');

      var veredicto = pct >= 100 ? 'Perfecto. Cero errores: este nivel es tuyo.'
        : pct >= UMBRAL ? 'Nivel dominado. Repásalo hasta llegar al 100 %.'
        : pct >= 70 ? 'Casi. Lee las explicaciones de los fallos y repite el nivel.'
        : 'Aún no. Vuelve a la teoría de este tema y repite el nivel; es normal al empezar.';

      var idx = datos.niveles.indexOf(run.nivel);
      var siguiente = pct >= UMBRAL && idx < datos.niveles.length - 1 ? datos.niveles[idx + 1] : null;

      raiz.innerHTML =
        '<div class="quiz"><div class="tarjeta quiz-resultado">' +
          '<p class="ent-nivel-dif">' + d.esc(run.nivel.titulo) + '</p>' +
          '<div class="quiz-nota">' + pct + ' %</div>' +
          '<p><strong>' + run.primeros + ' de ' + total + '</strong> a la primera' +
            (previo > pct ? ' · tu mejor marca sigue siendo ' + previo + ' %' : '') + '</p>' +
          '<p>' + veredicto + '</p>' +
          '<div class="ent-acciones">' +
            (run.fallos.length ? '<button type="button" class="btn" data-fallos>Repasar mis ' + run.fallos.length + ' fallos</button>' : '') +
            '<button type="button" class="btn btn-ghost" data-repetir>Repetir el nivel</button>' +
            (siguiente ? '<button type="button" class="btn btn-ok" data-sig>Siguiente nivel</button>' : '') +
            '<button type="button" class="btn btn-ghost" data-niveles>Todos los niveles</button>' +
          '</div>' +
        '</div></div>';

      var q = function (s) { return raiz.querySelector(s); };
      if (q('[data-fallos]')) q('[data-fallos]').addEventListener('click', function () {
        pregunta({ nivel: run.nivel, items: run.fallos, i: 0, fallos: [], primeros: 0, repaso: true });
      });
      q('[data-repetir]').addEventListener('click', function () { empezar(run.nivel); });
      if (q('[data-sig]')) q('[data-sig]').addEventListener('click', function () { empezar(siguiente); });
      q('[data-niveles]').addEventListener('click', pantallaNiveles);
      window.scrollTo(0, 0);
    }

    pantallaNiveles();
    return raiz;
  });

  DE.entrenador = {
    umbral: UMBRAL,
    normalizar: normalizar,
    comparar: comparar,
    fichas: fichas,
    validar: validar,
    generar: generar,
    distractores: distractores
  };
})();
