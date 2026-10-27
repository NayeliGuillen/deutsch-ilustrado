/* ============================================================
   views/vocabulario-pron.js — Léxico con audio y doble pronunciación
   ------------------------------------------------------------
   Cada palabra muestra: dibujo (opcional), alemán con altavoz,
   traducción, plural, las dos pronunciaciones y, si existen,
   una nota breve y una oración de ejemplo con su traducción y
   sus dos pronunciaciones.

   Campos de cada palabra (categorias → palabras):
     de, es, gen | tipo, plural?, fon, fonFacil, nota?,
     visual?   → nombre para DE.pic() ('koffer', 'flag:at', 'lang:EN'…)
     ejemplo?  → { de, es, fon, fonFacil }
   Los datos usan la misma forma que el vocabulario esencial, así
   el buscador global los encuentra.
   ============================================================ */

(function () {
  'use strict';

  var d = DE.dom;

  function insignia(p) {
    if (p.soloPlural) return '<span class="badge badge-pl">die · plural</span>';
    if (p.gen) return '<span class="badge badge-' + d.esc(p.gen) + '">' + d.esc(p.gen) + '</span>';
    return '<span class="badge badge-neutro">' + d.esc(p.tipo || 'palabra') + '</span>';
  }

  /** Dibujo de la palabra; si no tiene, el icono de su categoría. */
  function dibujo(p, cat) {
    var svg = DE.pic ? DE.pic(p.visual) : '';
    if (!svg && !p.visual) svg = DE.icono(cat.icono, 'ico-pic');
    if (!svg) svg = DE.icono(cat.icono, 'ico-pic');
    return '<div class="pron-visual-caja">' +
      '<div class="pron-visual" data-foto="' + d.esc(p.de) + '">' + svg + '</div>' +
      (p.tipo === 'frase' ? '' :
        '<button type="button" class="foto-btn" data-foto-abrir="' + d.esc(p.de) + '" data-foto-es="' + d.esc(p.es) + '" ' +
        'aria-label="Añadir una foto a ' + d.esc(p.de) + '">' + DE.icono('camara') + '</button>') +
    '</div>';
  }

  /** Bloque con las dos pronunciaciones (palabra u oración). */
  function lineas(o) {
    return '<dl class="pron-lineas">' +
      '<div><dt>Pronunciación</dt><dd class="fonetica">' + d.esc(o.fon) + '</dd></div>' +
      '<div><dt>Pronunciación fácil</dt><dd class="fonetica">' + d.esc(o.fonFacil) + '</dd></div>' +
    '</dl>';
  }

  function ejemplo(ej) {
    if (!ej) return '';
    return '<div class="pron-ejemplo">' +
      '<p class="pron-ej-titulo">Ejemplo</p>' +
      '<p class="pron-ej-de">' + d.de(ej.de) + '</p>' +
      '<p class="pron-ej-es">' + d.esc(ej.es) + '</p>' +
      lineas(ej) +
    '</div>';
  }

  var PRONOMBRES = ['ich', 'du', 'er / es / sie', 'wir', 'ihr', 'sie / Sie'];
  var PRON_ES = ['yo', 'tú', 'él / ella / ello', 'nosotros', 'vosotros / ustedes', 'ellos / usted'];
  var CLASES = { regular: 'regular', irregular: 'irregular', separable: 'separable', modal: 'modal' };

  /** Tabla desplegable con las seis formas; las irregulares van en rojo. */
  function conjugacion(p) {
    if (!Array.isArray(p.conj)) return '';
    var irr = p.irr || [];
    var filas = p.conj.map(function (f, i) {
      var pr = PRONOMBRES[i].split(' / ')[0];
      var oir = (i === 2 ? 'er' : i === 5 ? 'sie' : pr) + ' ' + f;
      return '<tr><th scope="row">' + d.esc(PRONOMBRES[i]) + '</th>' +
        '<td class="' + (irr.indexOf(i) > -1 ? 'conj-irr' : '') + '">' + d.esc(f) + '</td>' +
        '<td class="conj-es">' + d.esc(PRON_ES[i]) + '</td>' +
        '<td>' + d.audio(oir, 'Oír ' + oir) + '</td></tr>';
    }).join('');
    return '<details class="conj"><summary>Ver conjugación</summary>' +
      '<div class="tabla-envoltura"><table class="tabla conj-tabla"><tbody>' + filas + '</tbody></table></div>' +
      (irr.length ? '<p class="conj-aviso">En rojo: lo que cambia respecto a la regla.</p>' : '') +
    '</details>';
  }

  function entrada(p, cat) {
    var plural = p.plural
      ? ' <span class="pron-plural">· plural: ' + d.de(p.plural, false) + '</span>'
      : '';

    return '<article class="pron-item con-visual" style="--cat:var(--c-' + d.esc(cat.color || 'azul') + ')">' +
      dibujo(p, cat) +
      '<div class="pron-cuerpo">' +
        '<div class="pron-cabecera">' + insignia(p) +
          '<span class="pron-de">' + d.de(p.de) + '</span>' +
          (p.clase ? '<span class="badge badge-clase clase-' + d.esc(p.clase) + '">' + d.esc(CLASES[p.clase] || p.clase) + '</span>' : '') +
        '</div>' +
        '<p class="pron-es">' + d.esc(p.es) + plural + '</p>' +
        lineas(p) +
        (p.nota ? '<p class="pron-nota">' + d.esc(p.nota) + '</p>' : '') +
        conjugacion(p) +
        ejemplo(p.ejemplo) +
      '</div>' +
    '</article>';
  }

  function seccion(cat) {
    return '<section class="tarjeta" data-categoria="' + d.esc(cat.id) + '" style="margin-bottom:20px">' +
      '<h2 class="titulo-icono" style="color:var(--c-' + d.esc(cat.color) + ')">' +
        DE.icono(cat.icono) + '<span>' + d.esc(cat.titulo) + '</span>' +
        '<small style="color:var(--txt-tenue);font-weight:400;font-size:.8rem">' +
        cat.palabras.length + '</small>' +
      '</h2>' +
      (cat.descripcion ? '<p class="pron-cat-desc">' + d.esc(cat.descripcion) + '</p>' : '') +
      '<div class="rejilla rejilla-2">' +
        cat.palabras.map(function (p) { return entrada(p, cat); }).join('') +
      '</div>' +
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

    if (total && datos.categorias.some(function (c) { return c.palabras.some(function (p) { return p.gen || p.soloPlural; }); })) {
      frag.appendChild(d.crear(DE.art.leyenda()));
    }

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

    /* Fotos propias: cargar una carpeta y cómo nombrarlas */
    var fotos = d.crear(
      '<details class="fotos-barra">' +
        '<summary>' + DE.icono('camara') + ' Fotos propias: pon tu imagen en cada palabra</summary>' +
        '<div class="fotos-barra-cuerpo">' +
          '<p>Pulsa el icono de cámara de cualquier palabra para pegar, subir o buscar una foto. Para muchas de una vez, ' +
          'nombra cada archivo como la palabra <strong>sin artículo y en minúsculas</strong> ' +
          '(<code>handtuch.jpg</code>, <code>strasse.jpg</code>, <code>u-bahn.jpg</code>; ä → ae, ö → oe, ü → ue, ß → ss) y cárgalos juntos:</p>' +
          '<div class="foto-botones">' +
            '<button type="button" class="btn btn-sm" data-carpeta>' + DE.icono('subir') + ' Cargar carpeta de fotos</button>' +
          '</div>' +
          '<input type="file" accept="image/*" multiple webkitdirectory hidden data-in-carpeta>' +
          '<p class="foto-ayuda" data-carpeta-estado role="status" aria-live="polite"></p>' +
          '<p class="foto-ayuda">Para que se vean en todos tus dispositivos, sube esos archivos a la carpeta ' +
          '<code>' + d.esc(DE.fotos.carpeta) + '</code> del proyecto (formato .jpg).</p>' +
        '</div>' +
      '</details>'
    );
    frag.appendChild(fotos);
    fotos.querySelector('[data-carpeta]').addEventListener('click', function () {
      fotos.querySelector('[data-in-carpeta]').click();
    });
    fotos.querySelector('[data-in-carpeta]').addEventListener('change', function (ev) {
      var estado = fotos.querySelector('[data-carpeta-estado]');
      var archivos = ev.target.files;
      if (!archivos.length) return;
      estado.textContent = 'Preparando ' + archivos.length + ' archivos…';
      DE.fotos.cargarCarpeta(archivos).then(function (r) {
        estado.textContent = r.hechas + ' fotos guardadas' + (r.falladas ? ' · ' + r.falladas + ' no se pudieron leer' : '') + '.';
        ev.target.value = '';
      });
    });

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

    contenido.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-foto-abrir]');
      if (b) DE.fotos.abrir(b.getAttribute('data-foto-abrir'), b.getAttribute('data-foto-es'));
    });
    DE.fotos.aplicar(contenido);

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
