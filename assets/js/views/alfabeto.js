/* ============================================================
   views/alfabeto.js — Rejilla de letras + lámina de pronunciación
   ------------------------------------------------------------
   Cada tarjeta ofrece DOS audios distintos:
     · el nombre de la letra, como se recita el alfabeto (be, tse…)
     · una palabra de ejemplo que empieza por ella
   Son dos botones separados, no uno: oír "Buch" no enseña cómo se
   llama la letra B, y al revés tampoco.
   ============================================================ */

(function () {
  'use strict';

  var d = DE.dom;

  /* El nombre de la letra suele ser el propio carácter: la voz alemana
     lo recita correctamente. Solo Y y ß necesitan decirse con palabras
     (`letra` en los datos). */
  function nombreDeLetra(l) {
    return l.letra || l.glifo.trim().charAt(0);
  }

  function letra(l) {
    var nombre = nombreDeLetra(l);

    return '<div class="letra-card">' +

      '<button type="button" class="letra-sonido" data-hablar="' + d.esc(nombre) + '" ' +
        'aria-label="Escuchar el nombre de la letra ' + d.esc(l.glifo) + '">' +
        '<span class="glifo">' + d.esc(l.glifo) + '</span>' +
        '<span class="son">' + d.esc(l.son) + '</span>' +
        '<span class="letra-etiqueta">' + DE.icono('audio') + ' la letra</span>' +
      '</button>' +

      '<button type="button" class="letra-ejemplo" data-hablar="' + d.esc(l.hablar) + '" ' +
        'aria-label="Escuchar el ejemplo ' + d.esc(l.hablar) + '">' +
        DE.icono('audio') + '<span>' + d.esc(l.ej) + '</span>' +
      '</button>' +

    '</div>';
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
      '<p><strong>Cómo estudiar esta página:</strong> escucha primero el nombre de la letra, ' +
      'repítelo en voz alta y escucha después el ejemplo. Recitar el alfabeto entero sirve ' +
      'para deletrear por teléfono, algo que en Alemania se pide constantemente. Ajusta la ' +
      'velocidad de la voz con el control de sonido de la barra superior si va rápido.</p></div>'
    ));

    frag.appendChild(DE.construirInfografia(datos.infografia));

    return frag;
  });
})();
