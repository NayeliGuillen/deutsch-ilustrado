/* ============================================================
   core/articulos.js — Artículos de colores en TODA la página
   ------------------------------------------------------------
   der = rojo · die = azul · das = verde · plural (die) = morado

   El color lo manda el SUSTANTIVO, no solo el artículo: "den Käse"
   y "einen Käse" salen rojos porque Käse es der; "die Hotels" sale
   morado porque Hotels es plural. Para saber el género se consulta
   el vocabulario de la guía; si la palabra no está, se usa el
   artículo como pista.

   Un observador vigila la página: todo lo que se dibuje (lecciones,
   ejercicios, resultados, diálogos) se colorea solo, sin tocar
   cada lección. Para evitarlo en un trozo: data-sin-color.
   ============================================================ */

DE.art = (function () {
  'use strict';

  var CLASES = { der: 'art-der', die: 'art-die', das: 'art-das', pl: 'art-pl' };

  var sing = null;   // "Käse" -> 'der'
  var plur = null;   // "Tomaten" -> true

  function limpiar(palabra) {
    return String(palabra || '').replace(/[^A-Za-zÄÖÜäöüß-]/g, '');
  }

  /** Construye el índice una sola vez con todo el vocabulario de las lecciones. */
  function construir() {
    sing = Object.create(null);
    plur = Object.create(null);
    DE.lecciones().forEach(function (l) {
      var cats = l.datos && l.datos.categorias;
      if (!Array.isArray(cats)) return;
      cats.forEach(function (c) {
        (c.palabras || []).forEach(function (p) { registrar(p); });
      });
    });
  }

  function registrar(p) {
    if (!p || !p.de) return;
    var m = /^(der|die|das)\s+(.+)$/.exec(p.de);
    if (m) {
      var n = limpiar(m[2]);
      if (p.soloPlural) plur[n] = true;
      else if (n && !sing[n]) sing[n] = m[1];
    }
    if (p.plural) {
      var q = String(p.plural).replace(/^die\s+/, '');
      q = limpiar(q);
      if (q) plur[q] = true;
    }
  }

  /** Género de una palabra suelta, para que otras vistas coloreen etiquetas. */
  function generoDe(palabra, art) {
    if (!sing) construir();
    var n = limpiar(palabra);
    if (art === 'die' || art === 'eine' || art === 'keine') {
      if (sing[n] === 'die') return 'die';
      if (plur[n] || (sing[n] && sing[n] !== 'die')) return 'pl';
      return 'die';
    }
    if (sing[n]) return sing[n];
    return null;
  }

  var ART = '(?:[Dd]er|[Dd]ie|[Dd]as|[Dd]en|[Dd]em|[Ee]inen|[Ee]ine|[Ee]in|[Kk]einen|[Kk]eine|[Kk]ein)';
  var RE = new RegExp('(^|[^A-Za-zÄÖÜäöüß])(' + ART + ')(\\s+)([A-ZÄÖÜ][A-Za-zÄÖÜäöüß-]*)', 'g');
  var RE_SOLO = /^\s*(der|die|das|Der|Die|Das)\s*$/;

  var BASE = {
    der: 'der', den: 'der', einen: 'der', keinen: 'der',
    die: 'die', eine: 'die', keine: 'die',
    das: 'das', dem: null, ein: null, kein: null
  };

  /** Color final (der|die|das|pl|null) para un artículo seguido de un sustantivo. */
  function colorDe(articulo, sustantivo) {
    if (!sing) construir();
    var a = articulo.toLowerCase();
    var n = limpiar(sustantivo);
    var g = sing[n] || null;
    var esPl = !!plur[n];

    if (a === 'die' || a === 'eine' || a === 'keine') {
      if (g === 'die') return 'die';
      if (esPl || (g && g !== 'die')) return 'pl';
      return 'die';
    }
    if (a === 'der') {
      if (g === 'die') return 'die';       // dativo/genitivo femenino
      return 'der';
    }
    if (a === 'das') return 'das';
    if (a === 'den') return esPl ? 'pl' : (g === 'das' ? 'das' : 'der');
    if (a === 'einen' || a === 'keinen') return 'der';
    // ein / kein / dem: los manda el sustantivo
    return g === 'der' || g === 'das' ? g : null;
  }

  var PROHIBIDOS = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, CODE: 1, KBD: 1, SVG: 1, SELECT: 1, OPTION: 1 };

  function omitir(nodo) {
    var p = nodo.parentNode;
    while (p && p.nodeType === 1) {
      if (PROHIBIDOS[p.nodeName.toUpperCase()]) return true;
      if (p.classList && (p.classList.contains('fonetica') || p.classList.contains('badge') ||
          p.classList.contains('art') || p.hasAttribute('data-sin-color'))) return true;
      p = p.parentNode;
    }
    return false;
  }

  function span(clase, texto) {
    var s = document.createElement('span');
    s.className = 'art ' + CLASES[clase];
    s.textContent = texto;
    return s;
  }

  /** Colorea un nodo de texto. Devuelve true si lo modificó. */
  function pintarTexto(nodo) {
    var t = nodo.nodeValue;
    if (!t || t.length < 3) return false;
    if (omitir(nodo)) return false;

    var solo = RE_SOLO.exec(t);
    if (solo) {
      var k = solo[1].toLowerCase();
      var padre = nodo.parentNode;
      if (padre.classList && padre.classList.contains('art')) return false;
      var envuelto = span(k, t.trim());
      var frag0 = document.createDocumentFragment();
      var ini = t.match(/^\s*/)[0], fin = t.match(/\s*$/)[0];
      if (ini) frag0.appendChild(document.createTextNode(ini));
      frag0.appendChild(envuelto);
      if (fin) frag0.appendChild(document.createTextNode(fin));
      padre.replaceChild(frag0, nodo);
      return true;
    }

    RE.lastIndex = 0;
    if (!RE.test(t)) return false;
    RE.lastIndex = 0;

    var frag = document.createDocumentFragment(), ultimo = 0, m, hubo = false;
    while ((m = RE.exec(t))) {
      var color = colorDe(m[2], m[4]);
      if (!color) continue;
      var inicioArt = m.index + m[1].length;
      frag.appendChild(document.createTextNode(t.slice(ultimo, inicioArt)));
      frag.appendChild(span(color, m[2]));
      ultimo = inicioArt + m[2].length;
      hubo = true;
    }
    if (!hubo) return false;
    frag.appendChild(document.createTextNode(t.slice(ultimo)));
    nodo.parentNode.replaceChild(frag, nodo);
    return true;
  }

  var ocupado = false;
  var observador = null;

  function pintar(raiz) {
    if (!raiz || !raiz.isConnected) return;
    var ant = ocupado;
    ocupado = true;
    try {
      if (raiz.nodeType === 3) { pintarTexto(raiz); return; }
      var w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, null);
      var nodos = [], n;
      while ((n = w.nextNode())) nodos.push(n);
      nodos.forEach(pintarTexto);
    } finally {
      ocupado = ant;
    }
  }

  var pendientes = [], programado = false;

  function vaciar() {
    programado = false;
    var lote = pendientes; pendientes = [];
    lote.forEach(pintar);
    if (observador) observador.takeRecords();
  }

  function iniciar() {
    if (observador || !window.MutationObserver) return;
    observador = new MutationObserver(function (registros) {
      if (ocupado) return;
      registros.forEach(function (r) {
        r.addedNodes.forEach(function (n) {
          if (n.nodeType === 1 || n.nodeType === 3) pendientes.push(n);
        });
        if (r.type === 'characterData') pendientes.push(r.target);
      });
      if (pendientes.length && !programado) {
        programado = true;
        (window.requestAnimationFrame || setTimeout)(vaciar);
      }
    });
    observador.observe(document.body, { childList: true, subtree: true });
    pintar(document.body);
    observador.takeRecords();
  }

  /** HTML de un artículo ya coloreado, para vistas que construyen texto a mano. */
  function html(clave, texto) {
    return '<span class="art ' + CLASES[clave] + '">' + DE.dom.esc(texto) + '</span>';
  }

  return {
    iniciar: iniciar,
    pintar: pintar,
    registrar: registrar,
    colorDe: colorDe,
    generoDe: generoDe,
    html: html,
    clase: function (clave) { return CLASES[clave] || ''; },
    leyenda: function () {
      return '<p class="leyenda-art" data-sin-color>' +
        '<span class="l-der">der</span><span class="l-die">die</span>' +
        '<span class="l-das">das</span><span class="l-pl">die (plural)</span></p>';
    },
    reiniciar: function () { sing = null; plur = null; }
  };
})();
