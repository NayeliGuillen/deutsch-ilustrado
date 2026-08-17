/* ============================================================
   dom.js — Ayudantes para construir HTML sin librerías
   ------------------------------------------------------------
   Regla del proyecto: TODO texto que venga de los datos pasa por
   `esc()` antes de insertarse. Así no rompemos el HTML con
   comillas ni introducimos inyecciones.
   ============================================================ */

DE.dom = (function () {
  'use strict';

  var mapaEscape = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

  function esc(texto) {
    return String(texto == null ? '' : texto).replace(/[&<>"']/g, function (c) {
      return mapaEscape[c];
    });
  }

  return {
    esc: esc,

    /** Convierte una cadena HTML en un elemento (o fragmento). */
    crear: function (html) {
      var t = document.createElement('template');
      t.innerHTML = String(html).trim();
      return t.content.childNodes.length === 1
        ? t.content.firstElementChild
        : t.content;
    },

    /** Botón de altavoz que pronuncia `texto`. */
    audio: function (texto, etiqueta) {
      return '<button type="button" class="btn-audio" data-hablar="' + esc(texto) +
        '" aria-label="Escuchar ' + esc(etiqueta || texto) + '">' +
        DE.icono('audio') + '</button>';
    },

    /** Palabra o frase en alemán: clicable + botón de audio. */
    de: function (texto, conBoton) {
      var span = '<span class="de" data-hablar="' + esc(texto) + '" role="button" tabindex="0">' +
        esc(texto) + '</span>';
      return conBoton === false ? span : span + this.audio(texto);
    },

    /** Línea "alemán — (español)" con audio, el formato de las láminas. */
    ejemplo: function (item) {
      var html = '<div class="info-ejemplo">' + this.de(item.de);
      if (item.fon) html += ' <span class="fonetica">(' + esc(item.fon) + ')</span>';
      if (item.es) html += '<span class="es">' + esc(item.es) + '</span>';
      return html + '</div>';
    },

    /** Tabla compacta para el interior de una tarjeta de infografía. */
    tablaInfo: function (encabezados, filas) {
      var html = '<table class="info-tabla"><thead><tr>';
      encabezados.forEach(function (h) { html += '<th>' + esc(h) + '</th>'; });
      html += '</tr></thead><tbody>';
      filas.forEach(function (fila) {
        html += '<tr>';
        fila.forEach(function (celda) {
          // Las celdas admiten HTML ya preparado si vienen como {html: '...'}
          html += '<td>' + (celda && celda.html ? celda.html : esc(celda)) + '</td>';
        });
        html += '</tr>';
      });
      return html + '</tbody></table>';
    },

    /** Vacía un contenedor de forma segura. */
    limpiar: function (nodo) {
      while (nodo.firstChild) nodo.removeChild(nodo.firstChild);
      return nodo;
    }
  };
})();
