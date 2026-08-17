/* ============================================================
   app.js — Espacio de nombres global y registro de lecciones
   ------------------------------------------------------------
   Todo el proyecto cuelga de un único objeto global: `DE`.
   Así funciona sin servidor (abriendo index.html directamente)
   sin contaminar `window` con decenas de variables.
   ============================================================ */

window.DE = (function () {
  'use strict';

  /** Lecciones registradas, en orden de aparición. */
  var lecciones = [];

  /** Índice id -> lección, para acceso directo. */
  var porId = Object.create(null);

  /** Vistas registradas: nombre -> función(leccion) => HTMLElement */
  var vistas = Object.create(null);

  return {
    version: '1.0.0',

    /* ---- Lecciones ---------------------------------------- */

    /**
     * Registra una lección en la ruta de aprendizaje.
     * @param {Object} leccion
     * @param {string} leccion.id      Identificador de la URL (#/id)
     * @param {string} leccion.titulo
     * @param {string} leccion.icono   Emoji para el menú
     * @param {string} leccion.grupo   Sección del menú
     * @param {string} leccion.resumen Descripción de una línea
     * @param {string} leccion.vista   Nombre de la vista que la dibuja
     * @param {Object} leccion.datos   Contenido propio de esa vista
     */
    registrarLeccion: function (leccion) {
      if (!leccion || !leccion.id) {
        throw new Error('[DE] Una lección necesita un "id".');
      }
      if (porId[leccion.id]) {
        throw new Error('[DE] Lección duplicada: ' + leccion.id);
      }
      porId[leccion.id] = leccion;
      lecciones.push(leccion);
      return leccion;
    },

    lecciones: function () { return lecciones.slice(); },

    leccion: function (id) { return porId[id] || null; },

    /** Lecciones que forman la ruta lineal (excluye inicio y buscador). */
    ruta: function () {
      return lecciones.filter(function (l) { return l.enRuta !== false; });
    },

    /** Lección anterior y siguiente, para la navegación del pie. */
    vecinas: function (id) {
      var ruta = this.ruta();
      var i = ruta.findIndex(function (l) { return l.id === id; });
      return {
        anterior: i > 0 ? ruta[i - 1] : null,
        siguiente: i >= 0 && i < ruta.length - 1 ? ruta[i + 1] : null
      };
    },

    /* ---- Vistas ------------------------------------------- */

    registrarVista: function (nombre, fn) { vistas[nombre] = fn; },

    vista: function (nombre) { return vistas[nombre] || null; },

    /* ---- Utilidades varias -------------------------------- */

    /** Mensaje flotante breve. */
    toast: (function () {
      var temporizador = null;
      return function (mensaje) {
        var el = document.getElementById('toast');
        if (!el) return;
        el.textContent = mensaje;
        el.hidden = false;
        // Forzar reflow para reiniciar la transición.
        void el.offsetWidth;
        el.classList.add('visible');
        clearTimeout(temporizador);
        temporizador = setTimeout(function () {
          el.classList.remove('visible');
          setTimeout(function () { el.hidden = true; }, 300);
        }, 2200);
      };
    })(),

    /** Baraja una copia del array (Fisher-Yates). */
    barajar: function (array) {
      var copia = array.slice();
      for (var i = copia.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = copia[i]; copia[i] = copia[j]; copia[j] = t;
      }
      return copia;
    },

    /** Quita tildes y pasa a minúsculas, para búsquedas tolerantes. */
    normalizar: function (texto) {
      return String(texto || '')
        .toLowerCase()
        .normalize('NFD')
        // U+0300–U+036F = marcas diacriticas combinantes (tildes, dieresis)
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ß/g, 'ss');
    }
  };
})();
