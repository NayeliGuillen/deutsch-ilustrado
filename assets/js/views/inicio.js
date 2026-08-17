/* ============================================================
   views/inicio.js — Portada: por dónde empezar y cómo va todo
   ============================================================ */

(function () {
  'use strict';

  var d = DE.dom;

  var FRASES_DEL_DIA = [
    { de: 'Übung macht den Meister.', es: 'La práctica hace al maestro.' },
    { de: 'Aller Anfang ist schwer.', es: 'Todo comienzo es difícil.' },
    { de: 'Wer nicht wagt, der nicht gewinnt.', es: 'Quien no arriesga, no gana.' },
    { de: 'Morgenstund hat Gold im Mund.', es: 'A quien madruga, Dios le ayuda.' },
    { de: 'Ohne Fleiß kein Preis.', es: 'Sin esfuerzo no hay recompensa.' },
    { de: 'Es ist noch kein Meister vom Himmel gefallen.', es: 'Nadie nace enseñado.' },
    { de: 'Schritt für Schritt.', es: 'Paso a paso.' }
  ];

  function fraseDelDia() {
    // Determinista: la misma frase durante todo el día.
    var dia = Math.floor(Date.now() / 86400000);
    return FRASES_DEL_DIA[dia % FRASES_DEL_DIA.length];
  }

  function tarjetaLeccion(l) {
    var hecha = DE.store.estaCompletada(l.id);
    return '<a class="leccion-card" href="#/' + d.esc(l.id) + '" ' +
      'style="--acento: var(--c-' + d.esc(l.color || 'morado') + ')">' +
      (hecha ? '<span class="hecha" title="Aprendida">' + DE.icono('checkCirculo') + '</span>' : '') +
      '<span class="icono">' + DE.icono(l.icono, 'ico-xl') + '</span>' +
      '<h3>' + d.esc(l.titulo) + '</h3>' +
      '<p>' + d.esc(l.resumen) + '</p>' +
    '</a>';
  }

  DE.registrarVista('inicio', function () {
    var frag = document.createDocumentFragment();
    var ruta = DE.ruta();
    var hechas = ruta.filter(function (l) { return DE.store.estaCompletada(l.id); }).length;
    var frase = fraseDelDia();

    frag.appendChild(d.crear(
      '<header class="vista-encabezado">' +
        '<p class="migaja">Willkommen · Bienvenida</p>' +
        '<h1>Aprende alemán con mapas visuales</h1>' +
        '<p class="intro">Una guía completa de nivel A1–A2: gramática en láminas ilustradas, ' +
        'vocabulario con audio, frases reales y práctica. Todo funciona sin conexión ' +
        'y tu progreso se guarda en este navegador.</p>' +
      '</header>'
    ));

    /* Panel superior: progreso, frase del día y acceso rápido */
    frag.appendChild(d.crear(
      '<div class="rejilla rejilla-3" style="margin-bottom:28px">' +
        '<div class="tarjeta" style="border-left:5px solid var(--c-verde)">' +
          '<p style="font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;' +
            'color:var(--txt-tenue);font-weight:700;margin-bottom:4px">Tu progreso</p>' +
          '<p style="font-family:var(--f-titulo);font-size:2.4rem;font-weight:800;margin:0;' +
            'color:var(--c-verde)">' + hechas + '<span style="font-size:1rem;color:var(--txt-tenue)">' +
            ' / ' + ruta.length + '</span></p>' +
          '<p style="margin:0;font-size:.85rem;color:var(--txt-suave)">lecciones aprendidas</p>' +
        '</div>' +

        '<div class="tarjeta" style="border-left:5px solid var(--c-naranja)">' +
          '<p style="font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;' +
            'color:var(--txt-tenue);font-weight:700;margin-bottom:4px">Frase del día</p>' +
          '<p style="margin:0 0 4px">' + d.de(frase.de) + '</p>' +
          '<p style="margin:0;font-size:.85rem;color:var(--txt-suave)">' + d.esc(frase.es) + '</p>' +
        '</div>' +

        '<div class="tarjeta" style="border-left:5px solid var(--c-rojo)">' +
          '<p style="font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;' +
            'color:var(--txt-tenue);font-weight:700;margin-bottom:4px">Mejor marca en el quiz</p>' +
          '<p style="font-family:var(--f-titulo);font-size:2.4rem;font-weight:800;margin:0;' +
            'color:var(--c-rojo)">' + DE.store.obtener('mejorQuiz') + '%</p>' +
          '<p style="margin:0"><a href="#/practica">Jugar una ronda →</a></p>' +
        '</div>' +
      '</div>'
    ));

    /* El problema / la solución, como en la lámina de referencia */
    frag.appendChild(d.crear(
      '<div class="rejilla rejilla-2" style="margin-bottom:32px">' +
        '<div class="nota ojo">' + DE.icono('prohibido') + '<p><strong>El problema de siempre:</strong> ' +
          'intentas aprender alemán pero te pierdes entre los géneros, los casos y las reglas ' +
          'sin contexto — y lo olvidas todo en días.</p></div>' +
        '<div class="nota truco">' + DE.icono('checkCirculo') + '<p><strong>La solución:</strong> mapas mentales ' +
          'visuales que organizan el alemán en imágenes y colores, con audio para que el oído ' +
          'aprenda a la vez que la vista.</p></div>' +
      '</div>'
    ));

    /* Rejilla de lecciones agrupadas */
    var grupos = [];
    ruta.forEach(function (l) {
      var g = grupos.find(function (x) { return x.titulo === l.grupo; });
      if (!g) { g = { titulo: l.grupo, lecciones: [] }; grupos.push(g); }
      g.lecciones.push(l);
    });

    frag.appendChild(d.crear(
      '<div>' + grupos.map(function (g) {
        return '<section style="margin-bottom:30px">' +
          '<h2>' + d.esc(g.titulo) + '</h2>' +
          '<div class="rejilla rejilla-3">' + g.lecciones.map(tarjetaLeccion).join('') + '</div>' +
        '</section>';
      }).join('') + '</div>'
    ));

    /* Cómo usar la guía */
    frag.appendChild(d.crear(
      '<section class="tarjeta">' +
        '<h2 class="titulo-icono">' + DE.icono('brujula') + '<span>Cómo sacarle partido</span></h2>' +
        '<ul class="info-lista corazon" style="--c: var(--marca)">' +
          '<li>Empieza por <a href="#/pronunciacion">Alfabeto y pronunciación</a>: sin oído, el resto no cuaja.</li>' +
          '<li>Haz <strong>una lámina al día</strong> y márcala como aprendida al terminar.</li>' +
          '<li>Pulsa el altavoz de cualquier palabra alemana para escucharla; repite en voz alta.</li>' +
          '<li>Marca palabras con la estrella en Vocabulario: se convierten en tu mazo de flashcards.</li>' +
          '<li>Cierra cada sesión con una ronda de quiz. Cinco minutos bastan.</li>' +
          '<li>Usa <kbd>Ctrl</kbd>+<kbd>P</kbd> en una lámina para imprimirla y colgarla en la pared.</li>' +
        '</ul>' +
      '</section>'
    ));

    return frag;
  });

  /* La portada también es una "lección", pero fuera de la ruta lineal. */
  DE.registrarLeccion({
    id: 'inicio',
    titulo: 'Inicio',
    icono: 'inicio',
    grupo: 'Inicio',
    color: 'marca',
    resumen: 'Portada y progreso.',
    vista: 'inicio',
    enRuta: false
  });
})();
