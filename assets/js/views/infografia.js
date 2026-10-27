/* ============================================================
   views/infografia.js — Motor de láminas visuales
   ------------------------------------------------------------
   Convierte un objeto de datos en el "mapa mental" ilustrado.
   Todas las lecciones de gramática comparten este motor: para
   añadir una lámina nueva solo hay que escribir datos, no HTML.
   ============================================================ */

(function () {
  'use strict';

  var d = DE.dom;

  /* ---- Renderizado de un bloque ------------------------------
     Tipos admitidos: texto | lista | ejemplos | tabla | aviso | caja |
       recuadro  { clase:'G'|'!'|'dicho'|'frases', etiqueta?:'LIBRO'|'EXTRA', titulo?, bloques:[…] }
       lectura   { titulo, etiqueta?, modo:'dialogo'|'texto', lineas:[{q?,de,es}], glosario?:[{de,es}] }
                 diálogo o texto con botón "Ver traducción" (todo a la vez o línea a línea)
  ------------------------------------------------------------ */
  function bloque(b) {
    switch (b.tipo) {

      case 'texto':
        return caja(b, '<p>' + d.esc(b.texto) + '</p>');

      case 'lista':
        return caja(b, lista(b));

      case 'ejemplos':
        return caja(b, b.items.map(function (i) { return d.ejemplo(i); }).join(''));

      case 'tabla':
        return caja(b, d.tablaInfo(b.encabezados, normalizarFilas(b.filas)));

      case 'aviso':
        return '<div class="info-aviso"><span class="icono">' +
          DE.icono(b.icono || 'idea') + '</span><span>' + d.esc(b.texto) + '</span></div>';

      case 'caja':
        return caja(b, (b.bloques || []).map(interior).join(''));

      case 'recuadro':
        return recuadro(b);

      case 'lectura':
        return lectura(b);

      default:
        console.warn('[infografia] Tipo de bloque desconocido:', b.tipo);
        return '';
    }
  }

  /** Dentro de una caja no volvemos a envolver: solo el contenido. */
  function interior(b) {
    switch (b.tipo) {
      case 'texto':    return '<p>' + d.esc(b.texto) + '</p>';
      case 'lista':    return lista(b);
      case 'ejemplos': return b.items.map(function (i) { return d.ejemplo(i); }).join('');
      case 'tabla':    return d.tablaInfo(b.encabezados, normalizarFilas(b.filas));
      default:         return bloque(b);
    }
  }

  /* ---- Etiqueta de origen: [LIBRO] o [EXTRA] ---- */
  function etiqueta(t) {
    if (!t) return '';
    var clase = /^extra/i.test(t) ? 'etq-extra' : 'etq-libro';
    return '<span class="etq ' + clase + '">' + d.esc(t) + '</span>';
  }

  /* ---- Recuadros del libro: G (gramática), ! (importante), "Gut gesagt", frases ---- */
  var MARCAS = { 'G': 'G', '!': '!', dicho: '\u201C' };

  function recuadro(b) {
    var clase = b.clase || '!';
    var marca = clase === 'frases' ? DE.icono('mensaje') : d.esc(MARCAS[clase] || '!');
    return '<div class="info-rec rec-' + d.esc(clase === '!' ? 'imp' : clase) + '">' +
      '<span class="rec-marca" data-sin-color aria-hidden="true">' + marca + '</span>' +
      '<div class="rec-cuerpo">' +
        ((b.titulo || b.etiqueta) ? '<p class="rec-titulo">' + etiqueta(b.etiqueta) + (b.titulo ? d.esc(b.titulo) : '') + '</p>' : '') +
        (b.bloques || []).map(interior).join('') +
      '</div></div>';
  }

  /* ---- Lectura con traducción plegable ---- */
  function lectura(b) {
    var dialogo = b.modo === 'dialogo';
    var qs = [], lineas = (b.lineas || []).map(function (l) {
      var quien = '';
      if (dialogo) {
        var k = qs.indexOf(l.q);
        if (k === -1) { qs.push(l.q); k = qs.length - 1; }
        quien = ' q' + (k % 2);
      }
      return '<div class="lec-linea' + quien + '">' +
        (dialogo ? '<span class="lec-punto" aria-hidden="true"></span>' : '') +
        '<div class="lec-texto">' +
          ((dialogo && l.q && l.mostrarQ !== false && b.nombres) ? '<span class="lec-q">' + d.esc(l.q) + '</span>' : '') +
          '<p class="lec-de">' + d.de(l.de) + '</p>' +
          '<p class="lec-es">' + d.esc(l.es) + '</p>' +
        '</div>' +
        '<button type="button" class="lec-uno" aria-label="Ver la traducción de esta línea" aria-pressed="false">ES</button>' +
      '</div>';
    }).join('');

    var todo = (b.lineas || []).map(function (l) { return l.de; }).join(' ');
    return '<div class="info-lectura lec' + (dialogo ? ' lec-dialogo' : '') + '">' +
      '<div class="lec-cabecera">' +
        '<p class="lec-titulo">' + etiqueta(b.etiqueta) + (b.titulo ? d.esc(b.titulo) : '') + '</p>' +
        '<div class="lec-acciones">' +
          d.audio(todo, 'todo el texto') +
          '<button type="button" class="btn btn-sm btn-ghost lec-todo" aria-pressed="false">Ver traducción</button>' +
        '</div>' +
      '</div>' +
      (b.contexto ? '<p class="lec-contexto">' + d.esc(b.contexto) + '</p>' : '') +
      '<div class="lec-lineas">' + lineas + '</div>' +
      (b.glosario && b.glosario.length
        ? '<details class="lec-glosario"><summary>Palabras del texto</summary><ul>' +
          b.glosario.map(function (g) { return '<li>' + d.de(g.de) + ' <span class="es">— ' + d.esc(g.es) + '</span></li>'; }).join('') +
          '</ul></details>' : '') +
    '</div>';
  }

  function caja(b, contenido) {
    return '<div class="info-caja">' +
      (b.titulo ? '<p class="info-caja-titulo">' + d.esc(b.titulo) + '</p>' : '') +
      contenido +
      '</div>';
  }

  function lista(b) {
    var clase = 'info-lista' + (b.estilo ? ' ' + b.estilo : '');
    var items = b.items.map(function (item) {
      if (typeof item === 'string') return '<li>' + d.esc(item) + '</li>';
      // {de, es} → palabra alemana con audio + traducción
      return '<li>' + d.de(item.de) +
        (item.es ? ' <span class="es">— ' + d.esc(item.es) + '</span>' : '') + '</li>';
    }).join('');
    return '<ul class="' + clase + '">' + items + '</ul>';
  }

  /** Las celdas {de:'…'} se convierten en palabra alemana con audio. */
  function normalizarFilas(filas) {
    return filas.map(function (fila) {
      return fila.map(function (celda) {
        if (celda && typeof celda === 'object' && celda.de) {
          // nowrap: en una celda estrecha el altavoz no debe caer solo a otra línea.
          return { html: '<span class="nowrap">' + d.de(celda.de) + '</span>' };
        }
        return celda;
      });
    });
  }

  /* ---- Tarjeta numerada -------------------------------------- */
  function tarjeta(t) {
    return '<article class="info-card c-' + d.esc(t.color || 'morado') + '">' +
      '<header class="info-card-cabecera">' +
        '<span class="info-num">' + d.esc(t.n) + '</span>' +
        '<h3>' + (t.etiqueta ? etiqueta(t.etiqueta) : '') + d.esc(t.titulo) + '</h3>' +
        (t.icono ? '<span class="info-card-icono">' + DE.icono(t.icono) + '</span>' : '') +
      '</header>' +
      (t.bloques || []).map(bloque).join('') +
    '</article>';
  }

  /* ---- Lámina completa --------------------------------------- */
  function construir(datos) {
    var html =
      '<section class="infografia">' +
        '<div class="info-nucleo">' +
          '<h2 class="info-titulo">' + d.esc(datos.titulo) + '</h2>' +
          (datos.subtitulo ? '<p class="info-subtitulo">' + d.esc(datos.subtitulo) + '</p>' : '') +
          (datos.cinta ? '<p><span class="info-cinta">' + d.esc(datos.cinta) + '</span></p>' : '') +
          (datos.resumen ? '<p class="info-resumen">' + d.esc(datos.resumen) + '</p>' : '') +
        '</div>' +
        '<div class="info-rejilla">' +
          (datos.tarjetas || []).map(tarjeta).join('') +
        '</div>' +
      '</section>';

    var nodo = d.crear(html);
    activarLecturas(nodo);
    return nodo;
  }

  /** Botones "Ver traducción": todo el texto o línea por línea. */
  function activarLecturas(raiz) {
    raiz.addEventListener('click', function (ev) {
      var todo = ev.target.closest('.lec-todo');
      if (todo) {
        var cont = todo.closest('.lec');
        var ver = !cont.classList.contains('ver-es');
        cont.classList.toggle('ver-es', ver);
        cont.querySelectorAll('.lec-linea.es-uno').forEach(function (l) { l.classList.remove('es-uno'); });
        cont.querySelectorAll('.lec-uno').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        todo.setAttribute('aria-pressed', String(ver));
        todo.textContent = ver ? 'Ocultar traducción' : 'Ver traducción';
        return;
      }
      var uno = ev.target.closest('.lec-uno');
      if (uno) {
        var linea = uno.closest('.lec-linea');
        var abierta = linea.classList.toggle('es-uno');
        uno.setAttribute('aria-pressed', String(abierta));
      }
    });
  }

  /* Expuesto para que otras vistas (alfabeto) lo reutilicen. */
  DE.construirInfografia = construir;

  /* ---- Vista registrada -------------------------------------- */
  DE.registrarVista('infografia', function (leccion) {
    var cont = document.createDocumentFragment();

    cont.appendChild(d.crear(
      '<header class="vista-encabezado">' +
        '<p class="migaja">' + d.esc(leccion.grupo) + '</p>' +
        '<h1>' + d.esc(leccion.titulo) + '</h1>' +
        '<p class="intro">' + d.esc(leccion.resumen) + '</p>' +
      '</header>'
    ));

    cont.appendChild(construir(leccion.datos));
    return cont;
  });
})();
