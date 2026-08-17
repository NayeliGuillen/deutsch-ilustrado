/* ============================================================
   voz.js — Pronunciación con la Web Speech API
   ------------------------------------------------------------
   No hace falta ningún archivo de audio: el navegador sintetiza
   el alemán con una voz de-DE instalada en el sistema.
   Chrome, Edge y Safari traen voces alemanas de serie.
   ============================================================ */

DE.voz = (function () {
  'use strict';

  var soportado = 'speechSynthesis' in window;
  var vozAlemana = null;
  var botonActivo = null;

  /* Se notifica solo cuando la voz elegida CAMBIA. Sin esta guarda,
     `estado()` → `elegirVoz()` → evento → repintar panel → `estado()`
     entraría en un bucle infinito si no hay voz alemana. */
  var ultimaNotificada;   // undefined = nunca notificado

  function notificarSiCambia() {
    var actual = vozAlemana ? vozAlemana.name : null;
    if (actual === ultimaNotificada) return;
    ultimaNotificada = actual;
    document.dispatchEvent(new CustomEvent('de:voces', { detail: vozAlemana }));
  }

  function elegirVoz() {
    if (!soportado) return null;
    var voces = window.speechSynthesis.getVoices();
    if (!voces.length) return null;

    // Prioridad: de-DE > de-AT / de-CH > cualquier voz que empiece por "de"
    vozAlemana =
      voces.find(function (v) { return v.lang === 'de-DE' || v.lang === 'de_DE'; }) ||
      voces.find(function (v) { return /^de[-_]/i.test(v.lang); }) ||
      voces.find(function (v) { return /^de/i.test(v.lang); }) ||
      null;

    // Las vistas que muestran el estado del audio se refrescan con esto.
    notificarSiCambia();

    return vozAlemana;
  }

  if (soportado) {
    elegirVoz();
    // Las voces se cargan de forma asíncrona en la mayoría de navegadores.
    window.speechSynthesis.addEventListener('voiceschanged', elegirVoz);
  }

  /* El aviso se repite como mucho una vez cada 8 s: sin esto, pulsar
     varias palabras seguidas encadenaría avisos sin parar. */
  var ultimoAviso = 0;
  function avisarSinVoz() {
    var ahora = Date.now();
    if (ahora - ultimoAviso < 8000) return;
    ultimoAviso = ahora;
    DE.toast('Sin voz alemana instalada: sonaría en inglés. Mira el recuadro de audio.');
  }

  function limpiar(texto) {
    // Quita la traducción entre paréntesis y las marcas de la ficha.
    return String(texto || '')
      .replace(/\([^)]*\)/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  return {
    disponible: function () { return soportado; },

    /** ¿Hay realmente una voz alemana disponible? */
    tieneVozAlemana: function () { return !!(vozAlemana || elegirVoz()); },

    /**
     * Diagnóstico del audio, para poder avisar al usuario en vez de
     * pronunciar alemán con acento inglés sin que se entere.
     * @returns {{nivel: 'ok'|'aviso'|'error', voz: string, red: boolean}}
     */
    estado: function () {
      if (!soportado) {
        return { nivel: 'error', voz: '', red: false };
      }
      var v = vozAlemana || elegirVoz();
      if (!v) {
        // Puede que las voces aún no hayan cargado: lo distinguimos.
        var cargadas = window.speechSynthesis.getVoices().length > 0;
        return { nivel: cargadas ? 'aviso' : 'cargando', voz: '', red: false };
      }
      return {
        nivel: 'ok',
        voz: v.name + ' (' + v.lang + ')',
        red: v.localService === false
      };
    },

    /**
     * Pronuncia un texto en alemán.
     * @param {string} texto
     * @param {HTMLElement} [boton] Botón que se anima mientras suena.
     */
    hablar: function (texto, boton) {
      if (!soportado) {
        DE.toast('Tu navegador no puede reproducir audio. Prueba con Chrome o Edge.');
        return;
      }

      var limpio = limpiar(texto);
      if (!limpio) return;

      /* Salvaguarda: sin voz alemana el navegador leería el alemán con
         una voz inglesa. Eso enseña una pronunciación falsa, así que no
         se reproduce salvo que se pida expresamente. */
      if (!(vozAlemana || elegirVoz()) && !DE.store.obtener('permitirVozAjena')) {
        avisarSinVoz();
        return;
      }

      window.speechSynthesis.cancel();
      if (botonActivo) botonActivo.classList.remove('sonando');

      var u = new SpeechSynthesisUtterance(limpio);
      u.lang = 'de-DE';
      u.rate = Number(DE.store.obtener('velocidadVoz')) || 0.9;
      u.pitch = 1;

      if (vozAlemana || elegirVoz()) u.voice = vozAlemana;

      if (boton) {
        botonActivo = boton;
        boton.classList.add('sonando');
        u.onend = u.onerror = function () {
          boton.classList.remove('sonando');
          if (botonActivo === boton) botonActivo = null;
        };
      }

      window.speechSynthesis.speak(u);
    },

    /** Deletrea una palabra letra por letra (útil en el alfabeto). */
    deletrear: function (palabra, boton) {
      this.hablar(String(palabra).split('').join(', '), boton);
    },

    detener: function () {
      if (soportado) window.speechSynthesis.cancel();
      if (botonActivo) { botonActivo.classList.remove('sonando'); botonActivo = null; }
    }
  };
})();
