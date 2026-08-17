/* ============================================================
   views/buscador.js — Búsqueda global
   ------------------------------------------------------------
   Construye un índice plano recorriendo TODAS las lecciones
   registradas. Como los datos son declarativos, cualquier
   lección nueva entra en el buscador sin tocar este archivo.
   ============================================================ */

(function () {
  'use strict';

  var d = DE.dom;
  var indice = null;

  /** Recorre bloques de infografía extrayendo pares alemán/español. */
  function recorrerBloques(bloques, leccion, salida) {
    (bloques || []).forEach(function (b) {
      if (b.tipo === 'ejemplos') {
        b.items.forEach(function (i) { agregar(salida, i.de, i.es, leccion, 'ejemplo'); });
      } else if (b.tipo === 'lista') {
        b.items.forEach(function (i) {
          if (typeof i === 'object' && i.de) agregar(salida, i.de, i.es, leccion, 'ejemplo');
        });
      } else if (b.tipo === 'tabla') {
        b.filas.forEach(function (fila) {
          fila.forEach(function (celda) {
            if (celda && typeof celda === 'object' && celda.de) {
              agregar(salida, celda.de, b.titulo || '', leccion, 'tabla');
            }
          });
        });
      } else if (b.tipo === 'caja') {
        recorrerBloques(b.bloques, leccion, salida);
      }
    });
  }

  function agregar(salida, de, es, leccion, tipo) {
    if (!de) return;
    salida.push({
      de: de,
      es: es || '',
      leccion: leccion.titulo,
      id: leccion.id,
      tipo: tipo,
      clave: DE.normalizar(de + ' ' + (es || ''))
    });
  }

  function construirIndice() {
    var salida = [];

    DE.lecciones().forEach(function (l) {
      var datos = l.datos;
      if (!datos) return;

      // Vocabulario
      (datos.categorias || []).forEach(function (c) {
        c.palabras.forEach(function (p) { agregar(salida, p.de, p.es, l, 'palabra'); });
      });

      // Frases
      (datos.grupos || []).forEach(function (g) {
        g.frases.forEach(function (f) { agregar(salida, f.de, f.es, l, 'frase'); });
      });

      // Alfabeto
      (datos.alfabeto || []).concat(datos.especiales || []).forEach(function (le) {
        agregar(salida, le.hablar || le.glifo, le.ej, l, 'letra');
      });

      // Láminas (propias o anidadas dentro de otra lección)
      var lamina = datos.tarjetas ? datos : datos.infografia;
      if (lamina && lamina.tarjetas) {
        lamina.tarjetas.forEach(function (t) { recorrerBloques(t.bloques, l, salida); });
      }
    });

    return salida;
  }

  function buscar(texto) {
    if (!indice) indice = construirIndice();
    var q = DE.normalizar(texto);
    if (q.length < 2) return [];

    // Coincidencia exacta primero, luego parcial.
    var exactas = [], parciales = [];
    indice.forEach(function (e) {
      var pos = e.clave.indexOf(q);
      if (pos === 0) exactas.push(e);
      else if (pos > 0) parciales.push(e);
    });

    return exactas.concat(parciales).slice(0, 80);
  }

  function fila(r) {
    return '<div class="frase">' +
      d.audio(r.de) +
      '<div class="frase-cuerpo">' +
        '<p class="frase-de" style="margin:0">' + d.esc(r.de) + '</p>' +
        (r.es ? '<p class="frase-es" style="margin:0">' + d.esc(r.es) + '</p>' : '') +
        '<p style="margin:0;font-size:.74rem;color:var(--txt-tenue)">' +
          '<a href="#/' + d.esc(r.id) + '">' + d.esc(r.leccion) + '</a> · ' + d.esc(r.tipo) +
        '</p>' +
      '</div>' +
    '</div>';
  }

  DE.registrarVista('buscador', function () {
    var texto = DE.consultaBusqueda || '';
    var resultados = buscar(texto);
    var frag = document.createDocumentFragment();

    frag.appendChild(d.crear(
      '<header class="vista-encabezado">' +
        '<p class="migaja">Búsqueda</p>' +
        '<h1>' + (texto ? '“' + d.esc(texto) + '”' : 'Buscar') + '</h1>' +
        '<p class="intro">' + resultados.length + ' resultado(s) en toda la guía.</p>' +
      '</header>'
    ));

    if (!texto || texto.length < 2) {
      frag.appendChild(d.crear(
        '<div class="vacio">' + DE.icono('buscar', 'ico-vacio') +
        '<p>Escribe al menos dos letras en el buscador de arriba.</p></div>'
      ));
    } else if (!resultados.length) {
      frag.appendChild(d.crear(
        '<div class="vacio">' + DE.icono('info', 'ico-vacio') +
        '<h2>Nichts gefunden</h2>' +
        '<p>No hay coincidencias para <strong>' + d.esc(texto) + '</strong>.</p>' +
        '<p>Prueba con otra palabra, en alemán o en español.</p></div>'
      ));
    } else {
      frag.appendChild(d.crear(
        '<div class="rejilla rejilla-2">' + resultados.map(fila).join('') + '</div>'
      ));
    }

    return frag;
  });

  DE.registrarLeccion({
    id: 'buscar',
    titulo: 'Resultados de búsqueda',
    icono: 'buscar',
    grupo: 'Inicio',
    color: 'turquesa',
    resumen: 'Búsqueda global.',
    vista: 'buscador',
    enRuta: false,
    oculta: true
  });
})();
