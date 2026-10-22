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
    favoritas: [],           // palabras marcadas para repasar
    dominio: {}              // 'leccion:nivel' -> { mejor: %, intentos: n }
  };

  var estado = leer();

  function leer() {
    try {
      var crudo = localStorage.getItem(CLAVE);
      var base = Object.assign({}, predeterminado, { completadas: [], favoritas: [], dominio: {} });
      if (!crudo) return base;
      return Object.assign(base, JSON.parse(crudo));
    } catch (e) {
      console.warn('[DE.store] No se pudo leer el progreso guardado.', e);
      return Object.assign({}, predeterminado, { completadas: [], favoritas: [], dominio: {} });
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

    /* ---- Dominio por niveles (entrenador) ------------------ */

    dominio: function (clave) {
      return (estado.dominio && estado.dominio[clave]) || { mejor: 0, intentos: 0 };
    },

    registrarDominio: function (clave, porcentaje) {
      if (!estado.dominio) estado.dominio = {};
      var previo = estado.dominio[clave] || { mejor: 0, intentos: 0 };
      estado.dominio[clave] = {
        mejor: Math.max(previo.mejor, porcentaje),
        intentos: previo.intentos + 1
      };
      escribir();
      return estado.dominio[clave];
    },

    /* ---- Sincronización entre dispositivos -----------------
       Solo viaja el APRENDIZAJE. El tema, la velocidad de la voz
       y el permiso de voz no alemana dependen de cada aparato:
       importarlos estropearía los ajustes del destino.
       -------------------------------------------------------- */

    exportar: function () {
      return {
        formato: 'deutsch-ilustrado',
        version: 1,
        fecha: new Date().toISOString().slice(0, 10),
        completadas: estado.completadas.slice(),
        favoritas: estado.favoritas.slice(),
        mejorQuiz: estado.mejorQuiz,
        dominio: JSON.parse(JSON.stringify(estado.dominio || {}))
      };
    },

    /**
     * Incorpora un progreso exportado.
     * @param {Object} datos    Lo devuelto por `exportar()`.
     * @param {boolean} reemplazar  true = sustituir; false = fusionar.
     * @returns {{lecciones:number, palabras:number, quiz:number}} resumen
     *          de lo que hay DESPUÉS de importar.
     * @throws {Error} si los datos no tienen la forma esperada.
     */
    importar: function (datos, reemplazar) {
      if (!datos || typeof datos !== 'object') {
        throw new Error('El contenido no es un progreso válido.');
      }
      if (datos.formato !== 'deutsch-ilustrado') {
        throw new Error('Esto no parece un progreso de Deutsch Ilustrado.');
      }

      var textos = function (lista) {
        return Array.isArray(lista)
          ? lista.filter(function (x) { return typeof x === 'string' && x; })
          : [];
      };

      var entrantesCompletadas = textos(datos.completadas);
      var entrantesFavoritas = textos(datos.favoritas);
      var entranteQuiz = Number(datos.mejorQuiz) || 0;
      var entranteDominio = {};
      if (datos.dominio && typeof datos.dominio === 'object') {
        Object.keys(datos.dominio).forEach(function (k) {
          var v = datos.dominio[k];
          if (v && typeof v === 'object') {
            entranteDominio[k] = { mejor: Number(v.mejor) || 0, intentos: Number(v.intentos) || 0 };
          }
        });
      }

      if (reemplazar) {
        estado.completadas = entrantesCompletadas;
        estado.favoritas = entrantesFavoritas;
        estado.mejorQuiz = entranteQuiz;
        estado.dominio = entranteDominio;
      } else {
        // Fusionar: nunca se pierde lo que ya había en este dispositivo.
        var unir = function (a, b) {
          var vistos = Object.create(null), salida = [];
          a.concat(b).forEach(function (x) {
            if (!vistos[x]) { vistos[x] = true; salida.push(x); }
          });
          return salida;
        };
        estado.completadas = unir(estado.completadas, entrantesCompletadas);
        estado.favoritas = unir(estado.favoritas, entrantesFavoritas);
        estado.mejorQuiz = Math.max(estado.mejorQuiz, entranteQuiz);
        var actual = estado.dominio || {};
        Object.keys(entranteDominio).forEach(function (k) {
          var a = actual[k] || { mejor: 0, intentos: 0 }, b = entranteDominio[k];
          actual[k] = { mejor: Math.max(a.mejor, b.mejor), intentos: Math.max(a.intentos, b.intentos) };
        });
        estado.dominio = actual;
      }

      escribir();

      return {
        lecciones: estado.completadas.length,
        palabras: estado.favoritas.length,
        quiz: estado.mejorQuiz
      };
    },

    /* ---- Reinicio ----------------------------------------- */

    reiniciar: function () {
      var tema = estado.tema, velocidad = estado.velocidadVoz;
      estado = Object.assign({}, predeterminado, {
        tema: tema, velocidadVoz: velocidad, completadas: [], favoritas: [], dominio: {}
      });
      escribir();
    }
  };
})();
