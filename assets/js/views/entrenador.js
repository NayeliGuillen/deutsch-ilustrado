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
     clasificar{ p, cajas:[{etiqueta,color}], items:[{t,c,es?}], why }   arrastrar a cajas de colores
     unir      { p, pares:[[izq,der],…], why }                           emparejar columnas
     completar { p, partes:['texto',{ok:[..],ops?:[..]},…], why }        huecos dentro de un texto
   Extras de cualquier ejercicio: reloj:[h,m] · texto · textoEs · sinMayus · foto · visual · audio
   ordenar admite piezas:[…] (líneas completas, p. ej. un diálogo) en vez de ok.

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
    var exige = !ex.sinMayus && lista.some(function (o) { return /\s/.test(o) || /^[A-ZÄÖÜ]/.test(o); });
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
        if (new Set(ex.ops.map(function (o) { return typeof o === 'object' ? o.html : o; })).size !== ex.ops.length) return 'opcion: opciones repetidas';
        if (!ex.why) return 'opcion: sin explicación';
        return null;
      case 'escribir':
        if (!ex.p || !ex.ok || (Array.isArray(ex.ok) && !ex.ok.length)) return 'escribir: faltan datos';
        if (!ex.why) return 'escribir: sin explicación';
        return null;
      case 'ordenar':
        if (Array.isArray(ex.piezas)) {
          if (ex.piezas.length < 2 || !ex.p || !ex.why) return 'ordenar: piezas insuficientes';
          if (new Set(ex.piezas).size !== ex.piezas.length) return 'ordenar: piezas repetidas';
          return null;
        }
        if (!ex.p || typeof ex.ok !== 'string') return 'ordenar: faltan datos';
        if (fichas(ex.ok).length < 2) return 'ordenar: frase muy corta';
        if (!ex.why) return 'ordenar: sin explicación';
        (ex.extra || []).forEach(function () {});
        for (i = 0; i < (ex.alt || []).length; i++) {
          if (fichas(ex.alt[i].toLowerCase()).slice().sort().join('|') !== fichas(ex.ok.toLowerCase()).slice().sort().join('|')) {
            return 'ordenar: la alternativa usa otras palabras';
          }
        }
        return null;
      case 'clasificar':
        if (!ex.p || !Array.isArray(ex.cajas) || ex.cajas.length < 2 || !Array.isArray(ex.items) || ex.items.length < 2) return 'clasificar: faltan datos';
        if (!ex.why) return 'clasificar: sin explicación';
        for (i = 0; i < ex.items.length; i++) {
          if (!ex.items[i].t || typeof ex.items[i].c !== 'number' || ex.items[i].c < 0 || ex.items[i].c >= ex.cajas.length) return 'clasificar: item inválido ' + i;
        }
        return null;
      case 'unir':
        if (!ex.p || !Array.isArray(ex.pares) || ex.pares.length < 2 || !ex.why) return 'unir: faltan datos';
        for (i = 0; i < ex.pares.length; i++) if (!ex.pares[i][0] || !ex.pares[i][1]) return 'unir: par vacío ' + i;
        if (new Set(ex.pares.map(function (q) { return q[1]; })).size !== ex.pares.length) return 'unir: derechas repetidas';
        if (new Set(ex.pares.map(function (q) { return q[0]; })).size !== ex.pares.length) return 'unir: izquierdas repetidas';
        return null;
      case 'completar':
        if (!ex.p || !Array.isArray(ex.partes) || !ex.why) return 'completar: faltan datos';
        var huecos = ex.partes.filter(function (q) { return typeof q === 'object'; });
        if (!huecos.length) return 'completar: sin huecos';
        for (i = 0; i < huecos.length; i++) {
          if (!huecos[i].ok || !huecos[i].ok.length) return 'completar: hueco sin respuesta ' + i;
          if (huecos[i].ops && huecos[i].ops.indexOf(huecos[i].ok[0]) === -1) return 'completar: la respuesta no está en las opciones ' + i;
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
    if (auto.tipo === 'mixto') {
      var todos = [];
      (auto.mezcla || []).forEach(function (m) { todos = todos.concat(generar(m)); });
      return barajar(todos);
    }
    var propio = DE.gen && DE.gen.generar(auto);
    if (propio) return propio;

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
            visual: p.visual, foto: p.de, audio: p.de };
        }
        return { t: 'escribir', p: 'Escribe SOLO el artículo (der, die o das) de: ' + sinArticulo(p) +
          ' (' + p.es + ')', ok: [p.gen], why: why, visual: p.visual, foto: p.de, audio: p.de };
      });
    }

    if (auto.tipo === 'de-es') {
      elegidas = barajar(pool).slice(0, n);
      out = elegidas.map(function (p) {
        var otras = unicos(barajar(pool).filter(function (q) { return q.es !== p.es; })
          .map(function (q) { return q.es; })).slice(0, 3);
        var ops = barajar([p.es].concat(otras));
        return { t: 'opcion', p: '¿Qué significa "' + p.de + '"?', ops: ops, ok: ops.indexOf(p.es),
          why: p.de + ' = ' + p.es + '.', visual: p.visual, foto: p.de, audio: p.de };
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
          ops: ops, ok: ops.indexOf(p.de), why: p.es + ' = ' + p.de + '.', visual: p.visual, foto: p.de, audio: p.de };
      });
    }

    if (auto.tipo === 'escribir-de') {
      elegidas = barajar(pool.filter(function (q) { return sustantivo(q) && clara(q); })).slice(0, n);
      return elegidas.map(function (p) {
        return { t: 'escribir', p: 'Escribe en alemán, con su artículo: ' + p.es,
          ok: [p.de], why: p.es + ' = ' + p.de + '. Con mayúscula inicial en el sustantivo.',
          pista: 'Empieza por ' + p.gen + '…', visual: p.visual, foto: p.de, audio: p.de };
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
      var cuantos = (n.ejercicios ? n.ejercicios.length : 0) + (n.auto ? (n.auto.n || 15) : 0);
      return '<article class="ent-nivel ' + estado + '">' +
        '<div class="ent-nivel-num">' + (i + 1) + '</div>' +
        '<div class="ent-nivel-cuerpo">' +
          '<p class="ent-nivel-dif">' + d.esc(n.dificultad || '') + '</p>' +
          '<h3>' + d.esc(n.titulo) + '</h3>' +
          '<p class="ent-nivel-desc">' + d.esc(n.descripcion) + '</p>' +
          '<p class="ent-nivel-meta">' + cuantos + ' ejercicios' + (n.auto ? ' · ' + (n.ejercicios ? 'algunos' : 'todos') + ' distintos cada vez' : '') +
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
      var lista = barajar((nivel.ejercicios || []).concat(nivel.auto ? generar(nivel.auto) : []));
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
      DE.entrenador.actual = ex;   // gancho para las pruebas automáticas
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
        ordenar: dibujarOrdenar, mapa: dibujarMapa,
        clasificar: dibujarClasificar, unir: dibujarUnir, completar: dibujarCompletar
      }[ex.t];
      dibujar(zona, ex, finalizar);
      DE.fotos.aplicar(marco);
      window.scrollTo(0, 0);
    }

    function enunciado(ex, texto) {
      var dib = ex.visual && DE.pic ? DE.pic(ex.visual) : '';
      if (ex.reloj) dib = '<div class="ent-reloj">' + DE.reloj.svg(ex.reloj[0], ex.reloj[1], { tam: 150 }) + '</div>';
      var v = (dib || ex.foto)
        ? '<div class="ent-visual' + (ex.reloj ? ' es-reloj' : '') + '"' + (ex.foto && !ex.reloj ? ' data-foto="' + d.esc(ex.foto) + '"' : '') + '>' + dib + '</div>'
        : '';
      var oir = ex.audio ? ' ' + d.audio(ex.audio) : '';
      return textoLectura(ex) +
        '<div class="ent-enunciado">' + v + '<p class="quiz-pregunta">' + texto + oir + '</p></div>' +
        (ex.pista ? '<details class="ent-pista"><summary>Pista</summary><p>' + d.esc(ex.pista) + '</p></details>' : '');
    }

    /** Texto de lectura que acompaña a la pregunta (con traducción plegable). */
    function textoLectura(ex) {
      if (!ex.texto) return '';
      var parr = Array.isArray(ex.texto) ? ex.texto : [ex.texto];
      var es = ex.textoEs ? (Array.isArray(ex.textoEs) ? ex.textoEs : [ex.textoEs]) : null;
      return '<details class="ent-texto" open><summary>Texto</summary>' +
        parr.map(function (t) { return '<p>' + d.de(t, false) + '</p>'; }).join('') +
        (es ? '<details class="ent-texto-es"><summary>Ver traducción al español</summary>' +
          es.map(function (t) { return '<p>' + d.esc(t) + '</p>'; }).join('') + '</details>' : '') +
      '</details>';
    }

    /* ---- opcion ---- */
    function dibujarOpcion(zona, ex, fin) {
      var ops = ex.ops.map(function (t, i) { return { t: t, ok: i === ex.ok }; });
      if (!ex.fijo) ops = barajar(ops);
      zona.innerHTML = enunciado(ex, conHuecos(ex.p)) +
        '<div class="quiz-opciones">' + ops.map(function (o, i) {
          var graf = typeof o.t === 'object';
          return '<button type="button" class="quiz-opcion' + (graf ? ' con-grafico' : '') + '" data-i="' + i + '">' +
            '<span class="letra">' + 'ABCDEF'.charAt(i) + '</span><span>' + (graf ? o.t.html : d.esc(o.t)) + '</span></button>';
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
          var textoOk = ex.ops[ex.ok];
          fin(ops[i].ok, null, { respuesta: typeof textoOk === 'object'
            ? 'la opción ' + 'ABCDEF'.charAt(ops.findIndex(function (o) { return o.ok; })) : textoOk });
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
      var piezas = Array.isArray(ex.piezas);
      var correctas = piezas ? ex.piezas : fichas(ex.ok);
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
        var validas = piezas ? [ex.piezas] : [ex.ok].concat(ex.alt || []).map(fichas);
        var ok = validas.some(function (v) { return v.join('|').toLowerCase() === dado.join('|').toLowerCase(); });
        areaR.classList.add(ok ? 'correcta' : 'incorrecta');
        pintar(); btn.disabled = true; borrar.disabled = true;
        fin(ok, null, { respuesta: piezas ? ex.piezas.join(' → ') : ex.ok, hablar: piezas ? ex.piezas.join('. ') : ex.ok });
      });
      pintar();
    }

    /* ---- clasificar: arrastrar palabras a cajas de colores ---- */
    var COLOR_CAJA = { der: 'der', die: 'die', das: 'das', pl: 'pl' };

    function dibujarClasificar(zona, ex, fin) {
      var items = barajar(ex.items.map(function (it, i) {
        return { t: it.t, c: it.c, es: it.es, id: i, caja: null, mal: false };
      }));
      var sel = null, hecho = false;

      zona.innerHTML = enunciado(ex, d.esc(ex.p)) +
        '<div class="cls-banco" data-zona="banco" aria-label="Palabras por clasificar"></div>' +
        '<div class="cls-cajas">' + ex.cajas.map(function (c, i) {
          return '<div class="cls-caja cls-' + d.esc(c.color || 'azul') + '" data-zona="' + i + '">' +
            '<p class="cls-caja-t" data-sin-color>' + d.esc(c.etiqueta) + '</p><div class="cls-caja-in"></div></div>';
        }).join('') + '</div>' +
        '<div class="ent-escribir"><button type="button" class="btn" data-comprobar disabled>Comprobar</button>' +
        '<button type="button" class="btn btn-ghost" data-borrar>Borrar todo</button></div>' +
        '<p class="ent-nota">Arrastra cada palabra a su caja. En el móvil también puedes tocar la palabra y luego la caja. ' +
        'Toca una palabra ya colocada para devolverla.</p>';

      var banco = zona.querySelector('.cls-banco');
      var cajas = zona.querySelectorAll('.cls-caja');
      var btn = zona.querySelector('[data-comprobar]');
      var borrar = zona.querySelector('[data-borrar]');

      function ficha(it) {
        var cl = 'cls-ficha' + (sel === it ? ' sel' : '') + (it.estado ? ' ' + it.estado : '');
        return '<button type="button" class="' + cl + '" data-id="' + it.id + '">' + d.esc(it.t) +
          (it.es && !ex.sinEs ? '<small>' + d.esc(it.es) + '</small>' : '') +
          (it.nota ? '<em>' + d.esc(it.nota) + '</em>' : '') + '</button>';
      }

      function pintar() {
        banco.innerHTML = items.filter(function (it) { return it.caja === null; }).map(ficha).join('') ||
          '<span class="cls-vacio">Todas colocadas</span>';
        cajas.forEach(function (cj, k) {
          cj.querySelector('.cls-caja-in').innerHTML = items.filter(function (it) { return it.caja === k; }).map(ficha).join('');
        });
        btn.disabled = hecho || items.some(function (it) { return it.caja === null; });
      }

      function mover(it, destino) { if (hecho) return; it.caja = destino; sel = null; pintar(); }

      function zonaEn(x, y) {
        var el = document.elementFromPoint(x, y);
        var z = el && el.closest && el.closest('[data-zona]');
        return z && zona.contains(z) ? z : null;
      }
      function idZona(z) { var v = z.getAttribute('data-zona'); return v === 'banco' ? null : Number(v); }

      /* Arrastre con puntero (ratón y dedo), más "toca y toca". */
      var arrastre = null;
      zona.addEventListener('pointerdown', function (e) {
        var f = e.target.closest('.cls-ficha');
        if (!f || hecho || e.button > 0) return;
        arrastre = { it: items.find(function (x) { return x.id === Number(f.getAttribute('data-id')); }),
          x: e.clientX, y: e.clientY, fantasma: null, origen: f, id: e.pointerId };
        try { f.setPointerCapture(e.pointerId); } catch (_) { /* sin captura: sigue valiendo */ }
      });
      zona.addEventListener('pointermove', function (e) {
        if (!arrastre || e.pointerId !== arrastre.id) return;
        var dx = e.clientX - arrastre.x, dy = e.clientY - arrastre.y;
        if (!arrastre.fantasma && Math.hypot(dx, dy) > 7) {
          var g = arrastre.origen.cloneNode(true);
          g.classList.add('cls-fantasma');
          document.body.appendChild(g);
          arrastre.fantasma = g;
          arrastre.origen.classList.add('arrastrando');
        }
        if (arrastre.fantasma) {
          arrastre.px = e.clientX; arrastre.py = e.clientY;
          marcar(e.clientX, e.clientY);
          autoDesplazar();
        }
      });

      /* Cerca del borde de la pantalla, la página se desplaza sola mientras arrastras. */
      function marcar(x, y) {
        if (!arrastre || !arrastre.fantasma) return;
        arrastre.fantasma.style.left = x + 'px';
        arrastre.fantasma.style.top = y + 'px';
        var z = zonaEn(x, y);
        zona.querySelectorAll('.sobre').forEach(function (n) { n.classList.remove('sobre'); });
        if (z) z.classList.add('sobre');
      }
      function autoDesplazar() {
        if (!arrastre || arrastre.auto) return;
        arrastre.auto = true;
        (function paso() {
          if (!arrastre || !arrastre.fantasma) return;
          var y = arrastre.py, h = window.innerHeight, v = 0;
          if (y > h - 70) v = Math.min(18, (y - (h - 70)) / 3 + 4);
          else if (y < 70) v = -Math.min(18, (70 - y) / 3 + 4);
          if (v) { window.scrollBy(0, v); marcar(arrastre.px, arrastre.py); }
          (window.requestAnimationFrame || setTimeout)(paso);
        })();
      }
      function soltar(e) {
        if (!arrastre || e.pointerId !== arrastre.id) return;
        var a = arrastre; arrastre = null;
        zona.querySelectorAll('.sobre').forEach(function (n) { n.classList.remove('sobre'); });
        if (a.fantasma) {
          a.fantasma.remove();
          if (e.type === 'pointerup') {
            var z = zonaEn(e.clientX, e.clientY);
            if (z) mover(a.it, idZona(z)); else pintar();
          } else pintar();
          return;
        }
        if (e.type !== 'pointerup') return;
        /* Toque simple: devolver al banco, o seleccionar */
        if (a.it.caja !== null) mover(a.it, null);
        else { sel = sel === a.it ? null : a.it; pintar(); }
      }
      zona.addEventListener('pointerup', soltar);
      zona.addEventListener('pointercancel', soltar);

      /* Toque en una caja con una palabra seleccionada */
      zona.addEventListener('click', function (e) {
        if (hecho || !sel || e.target.closest('.cls-ficha')) return;
        var z = e.target.closest('[data-zona]');
        if (z) mover(sel, idZona(z));
      });

      borrar.addEventListener('click', function () {
        if (hecho) return;
        items.forEach(function (it) { it.caja = null; });
        sel = null; pintar();
      });

      btn.addEventListener('click', function () {
        hecho = true;
        var fallos = 0;
        items.forEach(function (it) {
          if (it.caja === it.c) it.estado = 'correcta';
          else {
            fallos++;
            it.estado = 'incorrecta';
            it.nota = 'iba en: ' + ex.cajas[it.c].etiqueta;
            it.caja = it.c;
          }
        });
        sel = null; pintar(); borrar.disabled = true;
        zona.querySelector('.cls-cajas').classList.add(fallos ? 'con-fallos' : 'todo-bien');
        var resumen = ex.cajas.map(function (c, k) {
          return c.etiqueta + ': ' + items.filter(function (it) { return it.c === k; }).map(function (it) { return it.t; }).join(', ');
        }).join(' · ');
        fin(!fallos, null, { respuesta: fallos ? resumen : '', explicacion: ex.why + (fallos ? ' Mal colocadas: ' + fallos + '.' : '') });
      });

      pintar();
    }

    /* ---- unir: emparejar dos columnas ---- */
    function dibujarUnir(zona, ex, fin) {
      var izq = ex.pares.map(function (p, i) { return { t: p[0], id: i }; });
      var der = barajar(ex.pares.map(function (p, i) { return { t: p[1], id: i }; }));
      var enlace = Object.create(null);      // id izquierdo -> id derecho
      var sel = null, hecho = false;

      zona.innerHTML = enunciado(ex, d.esc(ex.p)) +
        '<div class="unir"><div class="unir-col" data-lado="i"></div><div class="unir-col" data-lado="d"></div></div>' +
        '<div class="ent-escribir"><button type="button" class="btn" data-comprobar disabled>Comprobar</button>' +
        '<button type="button" class="btn btn-ghost" data-borrar>Borrar uniones</button></div>' +
        '<p class="ent-nota">Toca una palabra de un lado y luego su pareja del otro. Toca una unión para deshacerla.</p>';
      var colI = zona.querySelector('[data-lado="i"]'), colD = zona.querySelector('[data-lado="d"]');
      var btn = zona.querySelector('[data-comprobar]'), borrar = zona.querySelector('[data-borrar]');

      function numeroDe(lado, id) {
        var k = 0, idx = -1;
        Object.keys(enlace).forEach(function (li) {
          k++;
          if ((lado === 'i' && Number(li) === id) || (lado === 'd' && enlace[li] === id)) idx = k;
        });
        return idx;
      }
      function pintar() {
        function f(it, lado) {
          var par = lado === 'i' ? enlace[it.id] !== undefined : Object.keys(enlace).some(function (k) { return enlace[k] === it.id; });
          var n = par ? numeroDe(lado, it.id) : 0;
          var cl = 'unir-ficha' + (par ? ' unida u' + ((n - 1) % 8) : '') + (sel && sel.lado === lado && sel.id === it.id ? ' sel' : '') +
            (it.estado ? ' ' + it.estado : '');
          return '<button type="button" class="' + cl + '" data-lado="' + lado + '" data-id="' + it.id + '">' +
            (par ? '<b>' + n + '</b>' : '') + '<span>' + d.esc(it.t) + '</span></button>';
        }
        colI.innerHTML = izq.map(function (it) { return f(it, 'i'); }).join('');
        colD.innerHTML = der.map(function (it) { return f(it, 'd'); }).join('');
        btn.disabled = hecho || Object.keys(enlace).length < izq.length;
      }
      function desunirDerecha(id) {
        Object.keys(enlace).forEach(function (k) { if (enlace[k] === id) delete enlace[k]; });
      }
      zona.addEventListener('click', function (e) {
        if (hecho) return;
        var b = e.target.closest('.unir-ficha');
        if (!b) return;
        var lado = b.getAttribute('data-lado'), id = Number(b.getAttribute('data-id'));
        var unida = lado === 'i' ? enlace[id] !== undefined : Object.keys(enlace).some(function (k) { return enlace[k] === id; });
        if (unida) {
          if (lado === 'i') delete enlace[id]; else desunirDerecha(id);
          sel = null; pintar(); return;
        }
        if (sel && sel.lado !== lado) {
          var li = lado === 'i' ? id : sel.id, ri = lado === 'd' ? id : sel.id;
          enlace[li] = ri; sel = null;
        } else sel = (sel && sel.lado === lado && sel.id === id) ? null : { lado: lado, id: id };
        pintar();
      });
      borrar.addEventListener('click', function () {
        if (hecho) return;
        Object.keys(enlace).forEach(function (k) { delete enlace[k]; });
        sel = null; pintar();
      });
      btn.addEventListener('click', function () {
        hecho = true;
        var fallos = 0;
        izq.forEach(function (it) {
          var ok = enlace[it.id] === it.id;
          it.estado = ok ? 'correcta' : 'incorrecta';
          if (!ok) fallos++;
        });
        der.forEach(function (it) {
          var li = Object.keys(enlace).find(function (k) { return enlace[k] === it.id; });
          it.estado = li !== undefined && Number(li) === it.id ? 'correcta' : 'incorrecta';
        });
        pintar(); btn.disabled = true; borrar.disabled = true;
        fin(!fallos, null, { respuesta: fallos ? ex.pares.map(function (p) { return p[0] + ' = ' + p[1]; }).join(' · ') : '' });
      });
      pintar();
    }

    /* ---- completar: huecos dentro de un texto ---- */
    function dibujarCompletar(zona, ex, fin) {
      var huecos = [];
      var cuerpo = ex.partes.map(function (p) {
        if (typeof p === 'string') return '<span class="cmp-txt">' + d.esc(p).replace(/\n/g, '<br>') + '</span>';
        var i = huecos.push(p) - 1;
        if (p.ops) {
          return '<select class="cmp-sel" data-i="' + i + '" aria-label="Hueco ' + (i + 1) + '"><option value="">…</option>' +
            p.ops.map(function (o) { return '<option value="' + d.esc(o) + '">' + d.esc(o) + '</option>'; }).join('') + '</select>';
        }
        var ancho = p.ancho || Math.max(4, String(p.ok[0]).length + 1);
        return '<input class="cmp-in" data-i="' + i + '" size="' + ancho + '" type="text" autocomplete="off" autocapitalize="off" ' +
          'autocorrect="off" spellcheck="false" aria-label="Hueco ' + (i + 1) + '">';
      }).join('');

      zona.innerHTML = enunciado(ex, d.esc(ex.p)) +
        '<div class="cmp">' + cuerpo + '</div>' +
        '<div class="ent-escribir"><button type="button" class="btn" data-comprobar>Comprobar</button></div>' +
        '<p class="ent-nota">Puedes usar ae, oe, ue en lugar de ä, ö, ü, y ss en lugar de ß.</p>';

      var campos = zona.querySelectorAll('[data-i]');
      var btn = zona.querySelector('[data-comprobar]');
      var hecho = false;

      function comprobar() {
        if (hecho) return;
        var vacio = Array.prototype.some.call(campos, function (c) { return !c.value.trim(); });
        if (vacio) { DE.toast('Completa todos los huecos.'); return; }
        hecho = true;
        var fallos = 0;
        campos.forEach(function (c) {
          var h = huecos[Number(c.getAttribute('data-i'))];
          var r = comparar({ ok: h.ok, sinMayus: ex.sinMayus }, c.value);
          var ok = r === 'ok';
          if (!ok) fallos++;
          c.classList.add(ok ? 'correcta' : 'incorrecta');
          c.disabled = true;
        });
        btn.disabled = true;
        var k = 0;
        var completo = ex.partes.map(function (p) { return typeof p === 'string' ? p : huecos[k++].ok[0]; }).join('');
        fin(!fallos, null, {
          respuesta: fallos ? completo.replace(/\n/g, ' · ').replace(/\s+/g, ' ').trim() : '',
          hablar: ex.hablar === false ? '' : completo.replace(/\n/g, '. ')
        });
      }
      btn.addEventListener('click', comprobar);
      campos.forEach(function (c, i) {
        c.addEventListener('keydown', function (e) {
          if (e.key !== 'Enter') return;
          e.preventDefault();
          if (i < campos.length - 1) campos[i + 1].focus(); else comprobar();
        });
      });
      if (campos[0] && campos[0].focus) campos[0].focus({ preventScroll: true });
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
