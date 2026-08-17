/* ============================================================
   store.js — Persistencia en localStorage
   ------------------------------------------------------------
   Guarda progreso, tema y preferencias de voz. Todo el acceso
   a localStorage pasa por aquí (una sola fuente de verdad).
   ============================================================ */

DE.store = (function () {
  'use strict';

  var CLAVE = 'deutsch-ilustrado:v1';

  var predeterminado = {
    tema: null,              // 'claro' | 'oscuro' | null (según el sistema)
    velocidadVoz: 0.9,
    permitirVozAjena: false, // reproducir aunque no haya voz alemana

    completadas: [],         // ids de lecciones terminadas
    mejorQuiz: 0,            // % de acierto más alto
    favoritas: []            // palabras marcadas para repasar
  };

  var estado = leer();

  function leer() {
    try {
      var crudo = localStorage.getItem(CLAVE);
      if (!crudo) return Object.assign({}, predeterminado);
      return Object.assign({}, predeterminado, JSON.parse(crudo));
    } catch (e) {
      console.warn('[DE.store] No se pudo leer el progreso guardado.', e);
      return Object.assign({}, predeterminado);
    }
  }

  function escribir() {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(estado));
    } catch (e) {
      console.warn('[DE.store] No se pudo guardar el progreso.', e);
    }
    document.dispatchEvent(new CustomEvent('de:store-actualizado', { detail: estado }));
  }

  return {
    obtener: function (clave) { return estado[clave]; },

    fijar: function (clave, valor) {
      estado[clave] = valor;
      escribir();
    },

    /* ---- Progreso por lección ----------------------------- */

    estaCompletada: function (id) {
      return estado.completadas.indexOf(id) !== -1;
    },

    completar: function (id) {
      if (this.estaCompletada(id)) return false;
      estado.completadas.push(id);
      escribir();
      return true;
    },

    descompletar: function (id) {
      estado.completadas = estado.completadas.filter(function (x) { return x !== id; });
      escribir();
    },

    alternarCompletada: function (id) {
      if (this.estaCompletada(id)) { this.descompletar(id); return false; }
      this.completar(id); return true;
    },

    /* ---- Favoritas (repaso) ------------------------------- */

    esFavorita: function (palabra) {
      return estado.favoritas.indexOf(palabra) !== -1;
    },

    alternarFavorita: function (palabra) {
      var i = estado.favoritas.indexOf(palabra);
      if (i === -1) estado.favoritas.push(palabra);
      else estado.favoritas.splice(i, 1);
      escribir();
      return i === -1;
    },

    favoritas: function () { return estado.favoritas.slice(); },

    /* ---- Quiz --------------------------------------------- */

    registrarQuiz: function (porcentaje) {
      if (porcentaje > estado.mejorQuiz) {
        estado.mejorQuiz = porcentaje;
        escribir();
      }
      return estado.mejorQuiz;
    },

    /* ---- Reinicio ----------------------------------------- */

    reiniciar: function () {
      var tema = estado.tema, velocidad = estado.velocidadVoz;
      estado = Object.assign({}, predeterminado, { tema: tema, velocidadVoz: velocidad });
      escribir();
    }
  };
})();
