/* ============================================================
   views/infografia.js — Motor de láminas visuales
   ------------------------------------------------------------
   Convierte un objeto de datos en el "mapa mental" ilustrado.
   Todas las lecciones de gramática comparten este motor: para
   añadir una lámina nueva solo hay que escribir datos, no HTML.
   ============================================================ */

(function () {
  'use strict';

  var d = DE.dom;

  /* ---- Renderizado de un bloque ------------------------------
     Tipos admitidos: texto | lista | ejemplos | tabla | aviso | caja
  ------------------------------------------------------------ */
  function bloque(b) {
    switch (b.tipo) {

      case 'texto':
        return caja(b, '<p>' + d.esc(b.texto) + '</p>');

      case 'lista':
        return caja(b, lista(b));

      case 'ejemplos':
        return caja(b, b.items.map(function (i) { return d.ejemplo(i); }).join(''));

      case 'tabla':
        return caja(b, d.tablaInfo(b.encabezados, normalizarFilas(b.filas)));

      case 'aviso':
        return '<div class="info-aviso"><span class="icono">' +
          DE.icono(b.icono || 'idea') + '</span><span>' + d.esc(b.texto) + '</span></div>';

      case 'caja':
        return caja(b, (b.bloques || []).map(interior).join(''));

      default:
        console.warn('[infografia] Tipo de bloque desconocido:', b.tipo);
        return '';
    }
  }

  /** Dentro de una caja no volvemos a envolver: solo el contenido. */
  function interior(b) {
    switch (b.tipo) {
      case 'texto':    return '<p>' + d.esc(b.texto) + '</p>';
      case 'lista':    return lista(b);
      case 'ejemplos': return b.items.map(function (i) { return d.ejemplo(i); }).join('');
      case 'tabla':    return d.tablaInfo(b.encabezados, normalizarFilas(b.filas));
      default:         return bloque(b);
    }
  }

  function caja(b, contenido) {
    return '<div class="info-caja">' +
      (b.titulo ? '<p class="info-caja-titulo">' + d.esc(b.titulo) + '</p>' : '') +
      contenido +
      '</div>';
  }

  function lista(b) {
    var clase = 'info-lista' + (b.estilo ? ' ' + b.estilo : '');
    var items = b.items.map(function (item) {
      if (typeof item === 'string') return '<li>' + d.esc(item) + '</li>';
      // {de, es} → palabra alemana con audio + traducción
      return '<li>' + d.de(item.de) +
        (item.es ? ' <span class="es">— ' + d.esc(item.es) + '</span>' : '') + '</li>';
    }).join('');
    return '<ul class="' + clase + '">' + items + '</ul>';
  }

  /** Las celdas {de:'…'} se convierten en palabra alemana con audio. */
  function normalizarFilas(filas) {
    return filas.map(function (fila) {
      return fila.map(function (celda) {
        if (celda && typeof celda === 'object' && celda.de) {
          // nowrap: en una celda estrecha el altavoz no debe caer solo a otra línea.
          return { html: '<span class="nowrap">' + d.de(celda.de) + '</span>' };
        }
        return celda;
      });
    });
  }

  /* ---- Tarjeta numerada -------------------------------------- */
  function tarjeta(t) {
    return '<article class="info-card c-' + d.esc(t.color || 'morado') + '">' +
      '<header class="info-card-cabecera">' +
        '<span class="info-num">' + d.esc(t.n) + '</span>' +
        '<h3>' + d.esc(t.titulo) + '</h3>' +
        (t.icono ? '<span class="info-card-icono">' + DE.icono(t.icono) + '</span>' : '') +
      '</header>' +
      (t.bloques || []).map(bloque).join('') +
    '</article>';
  }

  /* ---- Lámina completa --------------------------------------- */
  function construir(datos) {
    var html =
      '<section class="infografia">' +
        '<div class="info-nucleo">' +
          '<h2 class="info-titulo">' + d.esc(datos.titulo) + '</h2>' +
          (datos.subtitulo ? '<p class="info-subtitulo">' + d.esc(datos.subtitulo) + '</p>' : '') +
          (datos.cinta ? '<p><span class="info-cinta">' + d.esc(datos.cinta) + '</span></p>' : '') +
          (datos.resumen ? '<p class="info-resumen">' + d.esc(datos.resumen) + '</p>' : '') +
        '</div>' +
        '<div class="info-rejilla">' +
          (datos.tarjetas || []).map(tarjeta).join('') +
        '</div>' +
      '</section>';

    return d.crear(html);
  }

  /* Expuesto para que otras vistas (alfabeto) lo reutilicen. */
  DE.construirInfografia = construir;

  /* ---- Vista registrada -------------------------------------- */
  DE.registrarVista('infografia', function (leccion) {
    var cont = document.createDocumentFragment();

    cont.appendChild(d.crear(
      '<header class="vista-encabezado">' +
        '<p class="migaja">' + d.esc(leccion.grupo) + '</p>' +
        '<h1>' + d.esc(leccion.titulo) + '</h1>' +
        '<p class="intro">' + d.esc(leccion.resumen) + '</p>' +
      '</header>'
    ));

    cont.appendChild(construir(leccion.datos));
    return cont;
  });
})();
