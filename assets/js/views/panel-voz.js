/* ============================================================
   views/panel-voz.js — Estado del audio
   ------------------------------------------------------------
   Pieza compartida: informa de QUÉ voz está pronunciando el
   alemán. Importa porque, si el sistema no tiene voz alemana,
   el navegador lee el alemán con una voz inglesa o española y
   la pronunciación que se aprende es falsa.

   Se autoactualiza: las voces cargan de forma asíncrona.
   ============================================================ */

DE.panelVoz = (function () {
  'use strict';

  var d = DE.dom;

  var PASOS_WINDOWS =
    '<ol style="margin:8px 0 0;padding-left:20px;font-size:.86rem">' +
      '<li><strong>Windows 10:</strong> Configuración → <strong>Hora e idioma</strong> → ' +
        '<strong>Voz</strong> → <em>Administrar voces</em> → <strong>Agregar voces</strong> → ' +
        'elige <strong>Alemán (Alemania)</strong>.<br>' +
        '<strong>Windows 11:</strong> Configuración → Hora e idioma → Idioma y región → ' +
        'Agregar idioma → <strong>Deutsch (Deutschland)</strong>, marcando <em>Voz</em>.</li>' +
      '<li>Espera a que termine la descarga (unos 50 MB).</li>' +
      '<li><strong>Cierra el navegador por completo</strong> y vuelve a abrirlo: las voces ' +
        'solo se detectan al arrancar.</li>' +
      '<li>Vuelve a esta página; el recuadro debería ponerse en verde.</li>' +
    '</ol>';

  function contenido() {
    var e = DE.voz.estado();

    if (e.nivel === 'error') {
      return {
        clase: 'ojo', icono: 'audio-off',
        html: '<p><strong>Tu navegador no puede reproducir voz.</strong> Abre la guía en ' +
              'Chrome, Edge o Safari para escuchar la pronunciación.</p>'
      };
    }

    if (e.nivel === 'cargando') {
      return {
        clase: '', icono: 'audio',
        html: '<p>Cargando las voces del sistema…</p>'
      };
    }

    if (e.nivel === 'aviso') {
      var forzado = DE.store.obtener('permitirVozAjena');
      return {
        clase: 'ojo', icono: 'alerta',
        html: '<p><strong>No hay ninguna voz alemana disponible en este navegador.</strong> ' +
              'Si sonara, el alemán se leería con una voz inglesa y aprenderías una ' +
              'pronunciación falsa, así que <strong>el audio está desactivado</strong>. ' +
              'Mientras tanto, guíate por la transcripción fonética en español que ' +
              'acompaña a cada palabra y frase.</p>' +

              '<p style="margin:10px 0 4px"><strong>Opción 1 — instalar la voz alemana</strong> ' +
              '(la mejor: funciona en cualquier navegador y sin conexión):</p>' +
              PASOS_WINDOWS +

              '<p style="margin:12px 0 0"><strong>Opción 2 — abrir la guía en Chrome o Edge ' +
              'con internet.</strong> Añaden la voz de red <em>Google Deutsch</em> sin instalar ' +
              'nada. <em>Brave no sirve para esto:</em> bloquea las voces de red de Google por ' +
              'privacidad, así que solo usa las voces instaladas en Windows.</p>' +

              '<p style="margin:12px 0 0">' +
                '<button type="button" class="btn btn-sm ' + (forzado ? 'btn-ok' : 'btn-ghost') +
                '" data-forzar>' +
                  (forzado
                    ? 'Audio forzado: sonando en inglés — desactivar'
                    : 'Reproducir igualmente (sonará en inglés)') +
                '</button>' +
              '</p>'
      };
    }

    // nivel === 'ok'
    if (e.red) {
      return {
        clase: 'truco', icono: 'audio',
        html: '<p><strong>Pronunciación en alemán activa</strong> con la voz ' +
              '<code>' + d.esc(e.voz) + '</code>.</p>' +
              '<p style="margin:6px 0 0;font-size:.86rem">Es una voz <strong>de red</strong>: ' +
              'necesita conexión a internet. Si quieres audio también sin conexión, instala ' +
              'la voz alemana de Windows:</p>' + PASOS_WINDOWS
      };
    }

    return {
      clase: 'truco', icono: 'audio',
      html: '<p><strong>Pronunciación en alemán activa</strong> con la voz ' +
            '<code>' + d.esc(e.voz) + '</code>, instalada en el sistema. ' +
            'Funciona también sin conexión.</p>'
    };
  }

  function pintar(caja) {
    var c = contenido();
    caja.className = 'nota ' + c.clase;
    caja.innerHTML = DE.icono(c.icono) + '<div>' + c.html + '</div>';

    var boton = caja.querySelector('[data-forzar]');
    if (boton) {
      boton.addEventListener('click', function () {
        var nuevo = !DE.store.obtener('permitirVozAjena');
        DE.store.fijar('permitirVozAjena', nuevo);
        pintar(caja);
        DE.toast(nuevo
          ? 'Audio activado con voz no alemana. Fíjate en la fonética, no en el sonido.'
          : 'Audio desactivado hasta que haya voz alemana.');
      });
    }
  }

  /**
   * Devuelve el recuadro de estado, ya suscrito a los cambios de voz.
   * @returns {HTMLElement}
   */
  return function panelVoz() {
    var caja = d.crear('<div class="nota" style="margin-bottom:22px"></div>');
    pintar(caja);

    // Las voces del navegador llegan tarde; hay que repintar cuando lleguen.
    document.addEventListener('de:voces', function () { pintar(caja); });

    return caja;
  };
})();
