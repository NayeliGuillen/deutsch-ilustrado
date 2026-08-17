/* ============================================================
   views/frases.js — Frases hechas agrupadas por situación
   ============================================================ */

(function () {
  'use strict';

  var d = DE.dom;

  function frase(f) {
    return '<div class="frase">' +
      d.audio(f.de) +
      '<div class="frase-cuerpo">' +
        '<p class="frase-de" style="margin:0">' + d.esc(f.de) + '</p>' +
        (f.fon ? '<p class="frase-fon" style="margin:0">(' + d.esc(f.fon) + ')</p>' : '') +
        '<p class="frase-es" style="margin:0">' + d.esc(f.es) + '</p>' +
      '</div>' +
    '</div>';
  }

  function grupo(g) {
    return '<section class="tarjeta" data-grupo="' + d.esc(g.id) + '" style="margin-bottom:20px;' +
      'border-left:5px solid var(--c-' + d.esc(g.color) + ')">' +
      '<h2 class="titulo-icono" style="color:var(--c-' + d.esc(g.color) + ')">' +
        DE.icono(g.icono) + '<span>' + d.esc(g.titulo) + '</span></h2>' +
      '<div class="rejilla rejilla-2">' + g.frases.map(frase).join('') + '</div>' +
    '</section>';
  }

  DE.registrarVista('frases', function (leccion) {
    var datos = leccion.datos;
    var frag = document.createDocumentFragment();

    var total = datos.grupos.reduce(function (n, g) { return n + g.frases.length; }, 0);

    frag.appendChild(d.crear(
      '<header class="vista-encabezado">' +
        '<p class="migaja">' + d.esc(leccion.grupo) + '</p>' +
        '<h1>' + d.esc(leccion.titulo) + ' <small style="font-size:.5em;color:var(--txt-tenue)">' +
          total + ' frases</small></h1>' +
        '<p class="intro">' + d.esc(datos.intro) + '</p>' +
      '</header>'
    ));

    var chips = d.crear(
      '<div class="chips"><button type="button" class="chip activo" data-filtro="todos">Todas</button>' +
      datos.grupos.map(function (g) {
        return '<button type="button" class="chip" data-filtro="' + d.esc(g.id) + '">' +
          DE.icono(g.icono) + d.esc(g.titulo) + '</button>';
      }).join('') + '</div>'
    );
    frag.appendChild(chips);

    var contenido = d.crear('<div>' + datos.grupos.map(grupo).join('') + '</div>');
    frag.appendChild(contenido);

    chips.addEventListener('click', function (ev) {
      var chip = ev.target.closest('[data-filtro]');
      if (!chip) return;
      chips.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('activo'); });
      chip.classList.add('activo');
      var filtro = chip.getAttribute('data-filtro');
      contenido.querySelectorAll('[data-grupo]').forEach(function (sec) {
        sec.hidden = !(filtro === 'todos' || sec.getAttribute('data-grupo') === filtro);
      });
    });

    return frag;
  });
})();
