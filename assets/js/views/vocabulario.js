/* ============================================================
   views/vocabulario.js — Léxico filtrable, con audio y favoritas
   ============================================================ */

(function () {
  'use strict';

  var d = DE.dom;

  function badge(gen) {
    if (!gen) return '<span class="badge badge-neutro">adj/verb</span>';
    return '<span class="badge badge-' + d.esc(gen) + '">' + d.esc(gen) + '</span>';
  }

  function palabra(p) {
    var fav = DE.store.esFavorita(p.de);
    // El artículo va bajo la palabra, no delante: así el término alemán
    // dispone de todo el ancho y no se parte en columnas estrechas.
    return '<div class="vocab-item">' +
      '<span class="vocab-texto">' +
        '<span class="vocab-de">' + d.esc(p.de) + '</span>' +
        '<span class="vocab-meta">' + badge(p.gen) +
          '<span class="vocab-es">' + d.esc(p.es) + '</span>' +
        '</span>' +
      '</span>' +
      d.audio(p.de) +
      '<button type="button" class="btn-favorita' + (fav ? ' activa' : '') + '" ' +
        'data-favorita="' + d.esc(p.de) + '" ' +
        'aria-pressed="' + (fav ? 'true' : 'false') + '" ' +
        'aria-label="Guardar para repasar">' + DE.icono('estrella') + '</button>' +
    '</div>';
  }

  function seccion(cat) {
    return '<section class="tarjeta" data-categoria="' + d.esc(cat.id) + '" style="margin-bottom:20px">' +
      '<h2 class="titulo-icono" style="color:var(--c-' + d.esc(cat.color) + ')">' +
        DE.icono(cat.icono) + '<span>' + d.esc(cat.titulo) + '</span>' +
        '<small style="color:var(--txt-tenue);font-weight:400;font-size:.8rem">' +
        cat.palabras.length + '</small>' +
      '</h2>' +
      '<div class="rejilla rejilla-3">' + cat.palabras.map(palabra).join('') + '</div>' +
    '</section>';
  }

  DE.registrarVista('vocabulario', function (leccion) {
    var datos = leccion.datos;
    var frag = document.createDocumentFragment();

    var total = datos.categorias.reduce(function (n, c) { return n + c.palabras.length; }, 0);

    frag.appendChild(d.crear(
      '<header class="vista-encabezado">' +
        '<p class="migaja">' + d.esc(leccion.grupo) + '</p>' +
        '<h1>' + d.esc(leccion.titulo) + ' <small style="font-size:.5em;color:var(--txt-tenue)">' +
          total + ' palabras</small></h1>' +
        '<p class="intro">' + d.esc(datos.intro) + '</p>' +
      '</header>'
    ));

    /* Filtros por categoría */
    var chips = '<div class="chips"><button type="button" class="chip activo" data-filtro="todas">Todas</button>' +
      datos.categorias.map(function (c) {
        return '<button type="button" class="chip" data-filtro="' + d.esc(c.id) + '">' +
          DE.icono(c.icono) + d.esc(c.titulo) + '</button>';
      }).join('') + '</div>';

    var barra = d.crear(chips);
    frag.appendChild(barra);

    var contenido = d.crear('<div>' + datos.categorias.map(seccion).join('') + '</div>');
    frag.appendChild(contenido);

    /* Filtrado en cliente (sin recargar la vista) */
    barra.addEventListener('click', function (ev) {
      var chip = ev.target.closest('[data-filtro]');
      if (!chip) return;

      barra.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('activo'); });
      chip.classList.add('activo');

      var filtro = chip.getAttribute('data-filtro');
      contenido.querySelectorAll('[data-categoria]').forEach(function (sec) {
        sec.hidden = !(filtro === 'todas' || sec.getAttribute('data-categoria') === filtro);
      });
    });

    /* Favoritas */
    contenido.addEventListener('click', function (ev) {
      var boton = ev.target.closest('[data-favorita]');
      if (!boton) return;
      var activa = DE.store.alternarFavorita(boton.getAttribute('data-favorita'));
      boton.classList.toggle('activa', activa);
      boton.setAttribute('aria-pressed', activa ? 'true' : 'false');
      DE.toast(activa ? 'Añadida a tu repaso' : 'Quitada del repaso');
    });

    return frag;
  });
})();
