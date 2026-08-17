/* ============================================================
   views/alfabeto.js — Rejilla de letras + lámina de pronunciación
   ============================================================ */

(function () {
  'use strict';

  var d = DE.dom;

  function letra(l) {
    return '<button type="button" class="letra-card" data-hablar="' + d.esc(l.hablar || l.glifo) + '">' +
      '<span class="glifo">' + d.esc(l.glifo) + '</span>' +
      '<span class="son">' + d.esc(l.son) + '</span>' +
      '<span class="ej">' + d.esc(l.ej) + '</span>' +
    '</button>';
  }

  function rejilla(titulo, letras, columnas) {
    return '<h2>' + d.esc(titulo) + '</h2>' +
      '<div class="rejilla ' + (columnas || 'rejilla-4') + '" style="margin-bottom:26px">' +
        letras.map(letra).join('') +
      '</div>';
  }

  DE.registrarVista('alfabeto', function (leccion) {
    var datos = leccion.datos;
    var frag = document.createDocumentFragment();

    frag.appendChild(d.crear(
      '<header class="vista-encabezado">' +
        '<p class="migaja">' + d.esc(leccion.grupo) + '</p>' +
        '<h1>' + d.esc(leccion.titulo) + '</h1>' +
        '<p class="intro">' + d.esc(datos.intro) + '</p>' +
      '</header>'
    ));

    /* Qué voz está pronunciando realmente el alemán. */
    frag.appendChild(DE.panelVoz());

    frag.appendChild(d.crear('<section>' +
      rejilla('El alfabeto (das Alphabet)', datos.alfabeto) +
      rejilla('Letras propias del alemán', datos.especiales) +
    '</section>'));

    frag.appendChild(d.crear(
      '<div class="nota truco" style="margin:0 0 26px">' + DE.icono('auriculares') +
      '<p><strong>Cómo estudiar esta página:</strong> escucha la letra, repítela en voz alta ' +
      'y escucha después el ejemplo. Ajusta la velocidad de la voz con el control de sonido ' +
      'de la barra superior si va demasiado rápido.</p></div>'
    ));

    frag.appendChild(DE.construirInfografia(datos.infografia));

    return frag;
  });
})();
