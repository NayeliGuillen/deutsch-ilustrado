/* ============================================================
   data/examen-entrenamientos.js — Entrenadores del examen
   ------------------------------------------------------------
   Seis entrenadores (hora, fechas, números, artículos,
   direcciones, simulacro). Casi todo se genera al azar, así que
   puedes repetir cada nivel las veces que quieras y siempre habrá
   ejercicios nuevos. Los niveles suben de dificultad y se superan
   con 90 % o más a la primera.
   ============================================================ */

(function () {
  'use strict';

  function lecc(id, titulo, resumen, intro, niveles, color) {
    DE.registrarLeccion({
      id: id, titulo: titulo, icono: 'jugar', grupo: 'Examen de la semana', color: color || 'rojo',
      resumen: resumen, vista: 'entrenador', datos: { intro: intro, niveles: niveles }
    });
  }

  function nivel(id, dificultad, titulo, descripcion, auto, ejercicios) {
    var n = { id: id, dificultad: dificultad, titulo: titulo, descripcion: descripcion };
    if (auto) n.auto = auto;
    if (ejercicios) n.ejercicios = ejercicios;
    if (!ejercicios && !auto) n.ejercicios = [];
    return n;
  }

  function mixto(parts) {
    var total = parts.reduce(function (s, p) { return s + p.n; }, 0);
    return { tipo: 'mixto', n: total, mezcla: parts };
  }

  /* ---------- HORA ---------- */
  lecc('examen-hora', 'Examen: la hora', 'De la hora en punto a convertir entre oficial e inoficial, con relojes.',
    'Cada ejercicio es distinto cada vez. Recuerda: halb = media hora ANTES de la hora siguiente.',
    [
      nivel('n1', 'Fácil', 'Horas en punto y relojes', 'Lee y elige el reloj correcto.', mixto([
        { tipo: 'hora-leer', n: 6, enPunto: true }, { tipo: 'hora-reloj', n: 4 }
      ])),
      nivel('n2', 'Medio', 'Leer relojes', 'Cualquier hora de cinco en cinco minutos.', mixto([
        { tipo: 'hora-leer', n: 10 }, { tipo: 'hora-reloj', n: 6 }
      ])),
      nivel('n3', 'Difícil', 'Escribir la hora', 'Escribe en alemán la hora inoficial y la oficial.', mixto([
        { tipo: 'hora-escribir', n: 8 }, { tipo: 'hora-oficial', n: 6 }
      ])),
      nivel('n4', 'Experto', 'Convertir y situar', 'Oficial ⇄ inoficial y preguntas con "um".', mixto([
        { tipo: 'hora-convertir', n: 8 }, { tipo: 'hora-um', n: 8 }, { tipo: 'hora-escribir', n: 6 }
      ]))
    ], 'azul');

  /* ---------- FECHAS ---------- */
  lecc('examen-fechas', 'Examen: fechas, meses y estaciones', 'Ordinales, fechas con "am", meses, días y estaciones.',
    'Ordinales: 1–19 + -te, 20+ + -ste; excepciones erste, dritte, siebte, achte. Con "am" terminan en -en.',
    [
      nivel('n1', 'Fácil', 'Meses y estaciones', 'Clasifica los meses y ordena el calendario.', mixto([
        { tipo: 'clasificar-meses', n: 2 }, { tipo: 'ordenar-meses', n: 2 }, { tipo: 'mes-estacion', n: 6 }
      ])),
      nivel('n2', 'Básico', 'Antes y después', 'Mes y día anterior y siguiente, sin mirar.', mixto([
        { tipo: 'mes-vecino', n: 8 }, { tipo: 'dia-vecino', n: 8 }
      ])),
      nivel('n3', 'Medio', 'Ordinales y fechas', 'Escribe los ordinales y reconoce la forma correcta de la fecha.', mixto([
        { tipo: 'ordinal', n: 10 }, { tipo: 'fecha-leer', n: 8 }
      ])),
      nivel('n4', 'Difícil', 'Todo el tema, mezclado', 'Sin pistas: de todo un poco.', mixto([
        { tipo: 'ordinal', n: 8 }, { tipo: 'fecha-leer', n: 6 }, { tipo: 'mes-estacion', n: 4 },
        { tipo: 'mes-vecino', n: 4 }, { tipo: 'dia-vecino', n: 4 }
      ]))
    ], 'naranja');

  /* ---------- NÚMEROS ---------- */
  lecc('examen-numeros', 'Examen: números', 'De 13 a 999, años, precios y operaciones, leyendo y escribiendo.',
    'Unidad + und + decena (24 = vierundzwanzig). Todo junto. Ojo con sechzehn/sechzig, siebzehn/siebzig y dreißig.',
    [
      nivel('n1', 'Fácil', '13 a 100: leer', 'Elige la cifra correcta.', { tipo: 'num-leer', n: 12, min: 13, max: 100 }),
      nivel('n2', 'Básico', '13 a 100: escribir', 'Escribe el número en palabras.', { tipo: 'num-escribir', n: 12, min: 13, max: 100 }),
      nivel('n3', 'Medio', 'Hasta 999', 'Centenas y decenas: dreihundertsiebenundvierzig.', mixto([
        { tipo: 'num-leer', n: 6, min: 101, max: 999 }, { tipo: 'num-escribir', n: 8, min: 101, max: 999 }
      ])),
      nivel('n4', 'Difícil', 'Precios y años', 'Euro, Cent y años en palabras.', mixto([
        { tipo: 'num-precio', n: 8 }, { tipo: 'num-anio', n: 8 }
      ])),
      nivel('n5', 'Experto', 'Calcular en alemán', 'Suma y resta en palabras, más todo lo anterior.', mixto([
        { tipo: 'num-suma', n: 8 }, { tipo: 'num-escribir', n: 6, min: 101, max: 999 }, { tipo: 'num-precio', n: 4 }
      ]))
    ], 'morado');

  /* ---------- ARTÍCULOS ---------- */
  lecc('examen-articulos', 'Examen: der, die, das, ein, kein', 'Género con cajas de colores, ein/eine, kein/keine y Akkusativ.',
    'Colores: der rojo · die azul · das verde · plural morado. En Akkusativ solo el masculino cambia (den, einen, keinen).',
    [
      nivel('n1', 'Fácil', 'Cajas de colores', 'Arrastra cada palabra a su artículo.', { tipo: 'clasificar-articulos', n: 4, porCaja: 3 }),
      nivel('n2', 'Básico', 'ein o eine', 'Elige según el género real de cada palabra.', { tipo: 'ein-kein', n: 12, caso: 'nom', neg: false }),
      nivel('n3', 'Medio', 'kein o keine', 'La negación lleva las mismas terminaciones.', { tipo: 'ein-kein', n: 12, caso: 'nom', neg: true }),
      nivel('n4', 'Difícil', 'Akkusativ: einen, den', 'Con objeto directo, el masculino cambia.', mixto([
        { tipo: 'ein-kein', n: 8, caso: 'akk', neg: 'mixto' }, { tipo: 'art-akk', n: 8 }
      ])),
      nivel('n5', 'Experto', 'Todo mezclado', 'Cajas, ein/kein, nominativo y Akkusativo.', mixto([
        { tipo: 'clasificar-articulos', n: 2, porCaja: 4 }, { tipo: 'ein-kein', n: 10, neg: 'mixto' }, { tipo: 'art-akk', n: 6 },
        { tipo: 'articulo', n: 6 }
      ]))
    ], 'rojo');

  /* ---------- DIRECCIONES ---------- */
  var zumzur = [
    ['Post', 'zur'], ['Bahnhof', 'zum'], ['Apotheke', 'zur'], ['Hotel', 'zum'], ['Schule', 'zur'], ['Supermarkt', 'zum'],
    ['Bank', 'zur'], ['Kino', 'zum'], ['Rathaus', 'zum'], ['Krankenhaus', 'zum']
  ].map(function (x) {
    var g = x[1] === 'zur' ? 'die' : (['Hotel', 'Kino', 'Rathaus', 'Krankenhaus'].indexOf(x[0]) > -1 ? 'das' : 'der');
    return { t: 'opcion', fijo: true, p: 'Wie komme ich ___ ' + x[0] + '?', ops: ['zum', 'zur'], ok: x[1] === 'zum' ? 0 : 1,
      why: g + ' ' + x[0] + ' → ' + x[1] + (x[1] === 'zur' ? ' (zu + der: palabras die)' : ' (zu + dem: palabras der y das)') + '.' };
  });

  var ordRutas = [
    { t: 'ordenar', p: 'Tome la primera calle a la derecha.', ok: 'Nehmen Sie die erste Straße rechts.', extra: ['erster', 'links'],
      why: 'Straße es die → erste (+ -e). Sin artículo masculino: "den ersten Weg".' },
    { t: 'ordenar', p: 'Tome la segunda calle a la izquierda.', ok: 'Nehmen Sie die zweite Straße links.', extra: ['dritte', 'rechts'],
      why: 'zweite: zwei + -te. Con die Straße: terminación -e.' },
    { t: 'ordenar', p: 'La tercera calle a la derecha.', ok: 'Die dritte Straße rechts.', extra: ['drite', 'links'],
      why: 'dritte es una excepción (no "dreite").' },
    { t: 'escribir', p: 'Escribe en alemán: "a la izquierda"', ok: ['links'], why: 'links = izquierda · rechts = derecha.' },
    { t: 'escribir', p: 'Escribe en alemán: "todo recto"', ok: ['geradeaus'], why: 'geradeaus, todo junto.' },
    { t: 'opcion', fijo: false, p: '¿Cómo preguntas "¿Dónde está la estación?"', ops: ['Wo ist der Bahnhof?', 'Wo ist die Bahnhof?', 'Wo ist das Bahnhof?', 'Wo bist der Bahnhof?'], ok: 0,
      why: 'Bahnhof es der. Con ist (no bist) para cosas.' }
  ];

  lecc('examen-direcciones', 'Examen: direcciones', 'Planos al azar, zum/zur, ordinales en la calle y preguntar el camino.',
    'En los planos eres el punto naranja y la flecha marca hacia dónde miras. Cada palabra (links, rechts, geradeaus) es una calle hasta el siguiente cruce.',
    [
      nivel('n1', 'Fácil', 'zum o zur', 'Preposición + lugar según el género.', null, zumzur.slice(0, 8)),
      nivel('n2', 'Básico', 'Planos cortos', 'Rutas de dos o tres pasos: encuentra el edificio.', { tipo: 'mapa-azar', n: 8, modo: 'lugar', min: 2, max: 3 }),
      nivel('n3', 'Medio', 'Describe el camino', 'Elige la descripción que lleva al edificio marcado.', { tipo: 'mapa-azar', n: 8, modo: 'describir', min: 2, max: 3 }),
      nivel('n4', 'Difícil', 'Calles y ordinales', 'Frases para ordenar y escribir.', null, ordRutas.concat(zumzur.slice(8))),
      nivel('n5', 'Experto', 'Rutas largas', 'Cuatro o cinco pasos, de las dos formas.', { tipo: 'mapa-azar', n: 12, modo: 'mixto', min: 4, max: 5 })
    ], 'turquesa');

  /* ---------- SIMULACRO ---------- */
  function simulacro(extraHora) {
    return mixto([
      { tipo: 'hora-leer', n: 4 }, { tipo: 'hora-escribir', n: 3 }, { tipo: 'hora-oficial', n: 3 },
      { tipo: 'ordinal', n: 4 }, { tipo: 'fecha-leer', n: 3 }, { tipo: 'mes-estacion', n: 3 }, { tipo: 'mes-vecino', n: 2 },
      { tipo: 'num-escribir', n: 4, min: 13, max: 999 }, { tipo: 'num-leer', n: 3, min: 13, max: 999 }, { tipo: 'num-precio', n: 2 },
      { tipo: 'ein-kein', n: 5, neg: 'mixto' }, { tipo: 'art-akk', n: 3 }, { tipo: 'clasificar-articulos', n: 1, porCaja: 3 },
      { tipo: 'mapa-azar', n: 4, modo: 'mixto', min: 2, max: 4 }
    ].concat(extraHora || []));
  }

  lecc('examen-simulacro', 'Simulacro de examen', 'Mezcla de todos los temas, sin pistas: hora, fechas, números, artículos y direcciones.',
    'Cada intento es distinto. Hazlo como si fuera el examen: sin apuntes y sin pausas. Objetivo: 90 % o más.',
    [
      nivel('n1', 'Experto', 'Simulacro A', '44 ejercicios de todos los temas.', simulacro()),
      nivel('n2', 'Experto', 'Simulacro B', 'Otra tanda distinta, un poco más larga.', simulacro([{ tipo: 'hora-convertir', n: 3 }, { tipo: 'dia-vecino', n: 3 }])),
      nivel('n3', 'Experto', 'Simulacro C', 'La tercera: si superas las tres, estás listo.', simulacro([{ tipo: 'num-anio', n: 3 }, { tipo: 'hora-um', n: 3 }]))
    ], 'rojo');
})();
