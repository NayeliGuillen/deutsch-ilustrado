/* ============================================================
   router.js — Enrutado por hash (#/leccion)
   ------------------------------------------------------------
   Sin dependencias y compatible con file://: la navegación
   ocurre en el fragmento de la URL, así se puede compartir el
   enlace de una lección concreta y usar atrás/adelante.
   ============================================================ */

DE.router = (function () {
  'use strict';

  var contenedor = null;
  var rutaActual = null;

  function rutaDesdeHash() {
    var hash = window.location.hash.replace(/^#\/?/, '').trim();
    return hash || 'inicio';
  }

  function pintarNoEncontrada(id) {
    contenedor.innerHTML =
      '<div class="vacio">' + DE.icono('brujula', 'ico-vacio') +
      '<h2>Esa lección no existe</h2>' +
      '<p>No encontramos <strong>' + DE.dom.esc(id) + '</strong>.</p>' +
      '<p><a class="btn" href="#/inicio">Volver al inicio</a></p></div>';
  }

  /** Pie con "anterior / marcar como aprendida / siguiente". */
  function pieDeLeccion(leccion) {
    var v = DE.vecinas(leccion.id);
    var hecha = DE.store.estaCompletada(leccion.id);

    var pie = DE.dom.crear(
      '<nav class="leccion-pie">' +
        (v.anterior
          ? '<a class="btn btn-ghost" href="#/' + v.anterior.id + '">' + DE.icono('flechaIzq') + DE.dom.esc(v.anterior.titulo) + '</a>'
          : '<span></span>') +
        '<button type="button" class="btn ' + (hecha ? 'btn-ok' : 'btn-ghost') + '" data-completar>' +
          (hecha ? DE.icono('check') + ' Aprendida' : 'Marcar como aprendida') +
        '</button>' +
        (v.siguiente
          ? '<a class="btn" href="#/' + v.siguiente.id + '">' + DE.dom.esc(v.siguiente.titulo) + DE.icono('flechaDer') + '</a>'
          : '<span></span>') +
      '</nav>'
    );

    pie.querySelector('[data-completar]').addEventListener('click', function () {
      var ahora = DE.store.alternarCompletada(leccion.id);
      this.classList.toggle('btn-ok', ahora);
      this.classList.toggle('btn-ghost', !ahora);
      this.innerHTML = ahora ? DE.icono('check') + ' Aprendida' : 'Marcar como aprendida';
      DE.toast(ahora ? '¡Sehr gut! Lección marcada como aprendida.' : 'Lección desmarcada.');
    });

    return pie;
  }

  function pintar() {
    var id = rutaDesdeHash();
    rutaActual = id;

    DE.voz.detener();
    DE.dom.limpiar(contenedor);

    var leccion = DE.leccion(id);
    if (!leccion) {
      pintarNoEncontrada(id);
      document.dispatchEvent(new CustomEvent('de:ruta', { detail: { id: id } }));
      return;
    }

    var vista = DE.vista(leccion.vista);
    if (!vista) {
      contenedor.innerHTML = '<div class="vacio">' + DE.icono('alerta', 'ico-vacio') +
        '<h2>Vista no registrada</h2><p>Falta la vista <code>' +
        DE.dom.esc(leccion.vista) + '</code>.</p></div>';
      return;
    }

    try {
      var nodo = vista(leccion);
      if (typeof nodo === 'string') nodo = DE.dom.crear(nodo);
      contenedor.appendChild(nodo);
    } catch (e) {
      console.error('[DE.router] Error al dibujar "' + id + '"', e);
      contenedor.innerHTML = '<div class="vacio">' + DE.icono('alerta', 'ico-vacio') +
        '<h2>Algo falló al mostrar esta lección</h2><p>Revisa la consola.</p></div>';
      return;
    }

    if (leccion.id !== 'inicio' && leccion.vista !== 'buscador') {
      contenedor.appendChild(pieDeLeccion(leccion));
    }

    document.title = leccion.titulo + ' · Deutsch Ilustrado';
    window.scrollTo(0, 0);

    document.dispatchEvent(new CustomEvent('de:ruta', { detail: { id: id, leccion: leccion } }));
  }

  return {
    iniciar: function (elemento) {
      contenedor = elemento;
      window.addEventListener('hashchange', pintar);
      pintar();
    },

    actual: function () { return rutaActual; },

    ir: function (id) {
      if (rutaDesdeHash() === id) pintar();
      else window.location.hash = '#/' + id;
    },

    refrescar: pintar
  };
})();
