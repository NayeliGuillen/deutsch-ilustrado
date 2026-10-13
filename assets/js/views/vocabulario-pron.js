/* ============================================================
   views/vocabulario-pron.js — Léxico con audio y doble pronunciación
   ------------------------------------------------------------
   Cada palabra muestra: alemán (con altavoz), traducción, plural,
   las dos pronunciaciones y, si existe, una nota breve.
   Los datos usan la misma forma que el vocabulario esencial
   (categorias → palabras), así el buscador global los encuentra.
   ============================================================ */

(function () {
  'use strict';

  var d = DE.dom;

  function insignia(p) {
    if (p.gen) return '<span class="badge badge-' + d.esc(p.gen) + '">' + d.esc(p.gen) + '</span>';
    return '<span class="badge badge-neutro">' + d.esc(p.tipo || 'palabra') + '</span>';
  }

  function entrada(p) {
    var plural = p.plural
      ? ' <span class="pron-plural">· plural: ' + d.de(p.plural, false) + '</span>'
      : '';

    return '<article class="pron-item">' +
      '<div class="pron-cabecera">' + insignia(p) +
        '<span class="pron-de">' + d.de(p.de) + '</span>' +
      '</div>' +
      '<p class="pron-es">' + d.esc(p.es) + plural + '</p>' +
      '<dl class="pron-lineas">' +
        '<div><dt>Pronunciación</dt><dd class="fonetica">' + d.esc(p.fon) + '</dd></div>' +
        '<div><dt>Pronunciación fácil</dt><dd class="fonetica">' + d.esc(p.fonFacil) + '</dd></div>' +
      '</dl>' +
      (p.nota ? '<p class="pron-nota">' + d.esc(p.nota) + '</p>' : '') +
    '</article>';
  }

  function seccion(cat) {
    return '<section class="tarjeta" data-categoria="' + d.esc(cat.id) + '" style="margin-bottom:20px">' +
      '<h2 class="titulo-icono" style="color:var(--c-' + d.esc(cat.color) + ')">' +
        DE.icono(cat.icono) + '<span>' + d.esc(cat.titulo) + '</span>' +
        '<small style="color:var(--txt-tenue);font-weight:400;font-size:.8rem">' +
        cat.palabras.length + '</small>' +
      '</h2>' +
      '<div class="rejilla rejilla-2">' + cat.palabras.map(entrada).join('') + '</div>' +
    '</section>';
  }

  DE.registrarVista('vocabulario-pron', function (leccion) {
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

    /* Cómo leer las dos pronunciaciones */
    if (datos.leyenda && datos.leyenda.length) {
      frag.appendChild(d.crear(
        '<div class="pron-leyenda">' +
          datos.leyenda.map(function (l) {
            return '<p><strong>' + d.esc(l.titulo) + ':</strong> ' + d.esc(l.texto) + '</p>';
          }).join('') +
        '</div>'
      ));
    }

    /* Filtros por categoría */
    var barra = d.crear(
      '<div class="chips"><button type="button" class="chip activo" data-filtro="todas">Todas</button>' +
      datos.categorias.map(function (c) {
        return '<button type="button" class="chip" data-filtro="' + d.esc(c.id) + '">' +
          DE.icono(c.icono) + d.esc(c.titulo) + '</button>';
      }).join('') + '</div>'
    );
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

    return frag;
  });
})();
