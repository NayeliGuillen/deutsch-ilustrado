/* ============================================================
   data/vocabulario-tiempo.js — Vocabulario del tiempo
   ------------------------------------------------------------
   Días, meses, estaciones, partes del día, la hora, frecuencia
   y ordinales: todo lo del examen, con audio y doble
   pronunciación.
   ============================================================ */

(function () {
  'use strict';

  /** W(de, es, gen, fon, fonFacil, visual, ejemplo[4], nota) */
  function W(de, es, gen, fon, ff, visual, ej, nota) {
    var p = { de: de, es: es, fon: fon, fonFacil: ff };
    if (gen) p.gen = gen; else p.tipo = 'palabra';
    if (visual) p.visual = visual;
    if (nota) p.nota = nota;
    if (ej) p.ejemplo = { de: ej[0], es: ej[1], fon: ej[2], fonFacil: ej[3] };
    return p;
  }

  DE.registrarLeccion({
    id: 'vocabulario-tiempo',
    titulo: 'Vocabulario: el tiempo',
    icono: 'calendario',
    grupo: 'Vocabulario y uso',
    color: 'naranja',
    resumen: 'Días, meses, estaciones, partes del día, hora y ordinales con audio y pronunciación fácil.',
    vista: 'vocabulario-pron',

    datos: {
      intro: 'Todo el vocabulario del examen de tiempo en un solo sitio. Pulsa el altavoz de cada palabra para oírla.',

      leyenda: [
        { titulo: 'Pronunciación', texto: 'La del curso: vocal larga = letra doble (taac), sílaba tónica en MAYÚSCULAS, j = ch suave, c = k.' },
        { titulo: 'Pronunciación fácil', texto: 'Sílabas separadas con guiones y, entre paréntesis, cómo sale cada sonido difícil.' }
      ],

      categorias: [

        {
          id: 'dias', titulo: 'Los días de la semana', icono: 'calendario', color: 'azul',
          descripcion: 'Todos son der. Con "am": am Montag. La semana empieza en lunes.',
          palabras: [
            W('der Montag', 'el lunes', 'der', 'MOON-taak', 'MON-tak (o larga; g final = "k")', 'calendario',
              ['Am Montag habe ich Deutschkurs.', 'El lunes tengo curso de alemán.', 'am MOON-taak JAA-be ij DOICH-kurs', 'am MON-tak HA-be ij DOICH-kurs (eu = "oi"; ch suave)']),
            W('der Dienstag', 'el martes', 'der', 'DIINS-taak', 'DINS-tak (ie = "i" larga)', 'calendario'),
            W('der Mittwoch', 'el miércoles', 'der', 'MIT-vooj', 'MIT-voch (w = "v"; ch áspera, como la j de "caja")', 'calendario',
              null, 'Mittwoch = "mitad de la semana". Mitte + Woche.'),
            W('der Donnerstag', 'el jueves', 'der', 'DO-nes-taak', 'DO-ners-tak (la r antes de consonante casi se pierde)', 'calendario'),
            W('der Freitag', 'el viernes', 'der', 'FRAI-taak', 'FRAI-tak (ei = "ai")', 'calendario',
              ['Am Freitag gehe ich ins Kino.', 'El viernes voy al cine.', 'am FRAI-taak GEE-e ij ins KII-no', 'am FRAI-tak GUE-e ij ins KI-no']),
            W('der Samstag', 'el sábado', 'der', 'SAMS-taak', 'SAMS-tak (s sonora al inicio)', 'calendario',
              null, 'En el norte y este también se dice Sonnabend.'),
            W('der Sonntag', 'el domingo', 'der', 'SON-taak', 'SON-tak', 'calendario'),
            W('das Wochenende', 'el fin de semana', 'das', 'VO-jen-en-de', 'VO-chen-en-de (w = "v"; ch áspera)', 'finde',
              ['Am Wochenende schlafe ich lange.', 'El fin de semana duermo hasta tarde.', 'am VO-jen-en-de SHLAA-fe ij LAN-gue', 'am VO-chen-EN-de SHLA-fe ij LAN-gue (sch = "sh")'])
          ]
        },

        {
          id: 'meses', titulo: 'Los meses', icono: 'calendario', color: 'verde',
          descripcion: 'Todos son der. Con "im": im Mai. (El año tiene 12.)',
          palabras: [
            W('der Januar', 'enero', 'der', 'YA-nu-aa', 'YA-nu-ar (j = "y")', 'nieve'),
            W('der Februar', 'febrero', 'der', 'FEE-bru-aa', 'FE-bru-ar', 'nieve'),
            W('der März', 'marzo', 'der', 'MERTS', 'MERTS (ä = "e" abierta; z = "ts")', 'flor'),
            W('der April', 'abril', 'der', 'a-PRIL', 'a-PRIL (acento al final)', 'flor'),
            W('der Mai', 'mayo', 'der', 'MAI', 'MAI (ei = "ai")', 'flor',
              ['Im Mai ist es schön.', 'En mayo hace bueno.', 'im MAI ist es shoen', 'im MAI ist es SHÖN (ö larga)']),
            W('der Juni', 'junio', 'der', 'YUU-ni', 'YU-ni (u larga)', 'sol'),
            W('der Juli', 'julio', 'der', 'YUU-li', 'YU-li', 'sol'),
            W('der August', 'agosto', 'der', 'au-GUST', 'au-GUST (au = "au"; acento al final)', 'sol'),
            W('der September', 'septiembre', 'der', 'sep-TEM-bea', 'sep-TEM-ba (-er final = "a")', 'hoja'),
            W('der Oktober', 'octubre', 'der', 'ok-TOO-bea', 'ok-TO-ba', 'hoja'),
            W('der November', 'noviembre', 'der', 'no-VEM-bea', 'no-VEM-ba (v = "v" suave)', 'hoja'),
            W('der Dezember', 'diciembre', 'der', 'de-TSEM-bea', 'de-TSEM-ba (z = "ts")', 'nieve')
          ]
        },

        {
          id: 'estaciones', titulo: 'Las estaciones', icono: 'sol', color: 'amarillo',
          descripcion: 'Con "im": im Sommer. Todas son der. (Como en el hemisferio norte: marzo-mayo = primavera.)',
          palabras: [
            W('der Frühling', 'la primavera', 'der', 'FRIU-ling', 'FRÜ-ling (ü larga; "i" con labios de "u")', 'flor',
              ['Im Frühling blühen die Blumen.', 'En primavera florecen las flores.', 'im FRIU-ling BLIU-en dii BLUU-men', 'im FRÜ-ling BLÜ-en di BLU-men'], 'Frühling = März, April, Mai.'),
            W('der Sommer', 'el verano', 'der', 'SO-mea', 'SO-ma (-er final = "a")', 'sombrilla',
              null, 'Sommer = Juni, Juli, August.'),
            W('der Herbst', 'el otoño', 'der', 'JERPST', 'HERBST (h aspirada; b antes de st suena "p")', 'hoja',
              null, 'Herbst = September, Oktober, November.'),
            W('der Winter', 'el invierno', 'der', 'VIN-tea', 'VIN-ta (w = "v")', 'nieve',
              null, 'Winter = Dezember, Januar, Februar.')
          ]
        },

        {
          id: 'dia', titulo: 'Partes del día y tiempo', icono: 'reloj', color: 'turquesa',
          descripcion: 'Con "am": am Morgen, am Abend. Excepción: in der Nacht (de noche).',
          palabras: [
            W('der Morgen', 'la mañana', 'der', 'MOR-guen', 'MOR-guen (g como en "gato")', 'sol'),
            W('der Vormittag', 'la media mañana', 'der', 'FOA-mi-taak', 'FOR-mi-tak (v = "f"; r tras vocal casi muda)', 'sol'),
            W('der Mittag', 'el mediodía', 'der', 'MI-taak', 'MI-tak', 'sol'),
            W('der Nachmittag', 'la tarde', 'der', 'NAAJ-mi-taak', 'NACH-mi-tak (a larga; ch áspera)', 'sol'),
            W('der Abend', 'la noche (temprana)', 'der', 'AA-bent', 'A-bent (d final = "t")', 'luna'),
            W('die Nacht', 'la noche', 'die', 'NAJT', 'NACHT (ch áspera)', 'luna'),
            W('heute', 'hoy', null, 'JOI-te', 'HOI-te (h aspirada; eu = "oi")', 'calendario',
              ['Heute ist Montag.', 'Hoy es lunes.', 'JOI-te ist MOON-taak', 'HOI-te ist MON-tak']),
            W('morgen', 'mañana (día siguiente)', null, 'MOR-guen', 'MOR-guen', 'calendario',
              null, 'Mismo sonido que der Morgen, pero en minúscula significa "mañana" (día siguiente).'),
            W('gestern', 'ayer', null, 'GUES-tean', 'GUES-tern (g como en "gato"; er = "ern")', 'calendario'),
            W('jetzt', 'ahora', null, 'YETST', 'YETST (j = "y")', 'reloj'),
            W('früh', 'temprano', null, 'FRIU', 'FRÜ (ü larga)', 'sol'),
            W('spät', 'tarde (hora)', null, 'SHPET', 'SHPET (sp = "shp"; ä = "e" larga)', 'luna',
              ['Wie spät ist es?', '¿Qué hora es?', 'vii shpet ist es', 'VI SHPET ist es (w = "v")'])
          ]
        },

        {
          id: 'hora', titulo: 'La hora', icono: 'reloj', color: 'azul',
          descripcion: 'Preguntas: Wie spät ist es? / Wie viel Uhr ist es? Para "a las": um.',
          palabras: [
            W('die Uhr', 'el reloj; la hora (Uhr)', 'die', 'UUA', 'UR (u larga; la r final suave)', 'reloj',
              ['Es ist drei Uhr.', 'Son las tres.', 'es ist drai UUA', 'es ist DRAI UR (ei = "ai")']),
            W('die Stunde', 'la hora (duración)', 'die', 'SHTUN-de', 'SHTUN-de (st = "sht")', 'reloj',
              null, 'Uhr = hora del reloj (drei Uhr). Stunde = duración (drei Stunden).'),
            W('die Minute', 'el minuto', 'die', 'mi-NUU-te', 'mi-NU-te (acento en -nu-)', 'reloj'),
            W('die Sekunde', 'el segundo', 'die', 'ze-KUN-de', 'ze-KUN-de (z como "s" sonora)', 'reloj'),
            W('halb', 'medio', null, 'JALP', 'HALB (h aspirada; b final = "p")', 'reloj',
              ['Es ist halb acht.', 'Son las siete y media.', 'es ist jalp ajt', 'es ist HALB acht (ach áspera)'],
              'halb acht = 7:30. Trampa: "halb" mira hacia la hora siguiente.'),
            W('das Viertel', 'el cuarto', 'das', 'FIR-tel', 'FIR-tel (v = "f"; i corta)', 'reloj',
              ['Es ist Viertel nach drei.', 'Son las tres y cuarto.', 'es ist FIR-tel naaj drai', 'es ist FIR-tel NACH drai']),
            W('vor', 'antes de (minutos para)', null, 'FOA', 'FOR (v = "f")', 'flecha',
              ['Zehn vor acht.', 'Las ocho menos diez.', 'tseen foa ajt', 'TSEN FOR acht']),
            W('nach', 'después de (minutos pasados)', null, 'NAAJ', 'NACH (ch áspera)', 'flecha',
              ['Zehn nach acht.', 'Las ocho y diez.', 'tseen naaj ajt', 'TSEN NACH acht'])
          ]
        },

        {
          id: 'frecuencia', titulo: 'Con qué frecuencia', icono: 'repetir', color: 'rosa',
          descripcion: 'Van después del verbo: Ich trinke immer Kaffee.',
          palabras: [
            W('immer', 'siempre', null, 'I-mea', 'I-ma (i corta; -er final = "a")', 'repetir',
              ['Ich trinke immer Kaffee.', 'Siempre bebo café.', 'ij TRIN-ke I-mea KA-fe', 'ij TRIN-ke I-ma KA-fe']),
            W('oft', 'a menudo', null, 'OFT', 'OFT (o corta)', 'repetir'),
            W('manchmal', 'a veces', null, 'MANJ-maal', 'MANCH-mal (ch áspera)', 'repetir',
              ['Manchmal gehe ich ins Kino.', 'A veces voy al cine.', 'MANJ-maal GEE-e ij ins KII-no', 'MANCH-mal GUE-e ij ins KI-no']),
            W('nie', 'nunca', null, 'NII', 'NI (ie = "i" larga)', 'prohibido',
              ['Ich trinke nie Bier.', 'Nunca bebo cerveza.', 'ij TRIN-ke nii BIIA', 'ij TRIN-ke NI BIR'])
          ]
        },

        {
          id: 'ordinales', titulo: 'Los ordinales', icono: 'numeros', color: 'morado',
          descripcion: 'Fechas: der erste Mai, am ersten Mai. 1–19 + -te · 20+ + -ste. Excepciones: erste, dritte, siebte, achte.',
          palabras: [
            W('erste', 'primero', null, 'EA-ste', 'ER-ste (er = "ea"; irregular)', 'numeros'),
            W('zweite', 'segundo', null, 'TSVAI-te', 'TSVAI-te (zw = "tsv")', 'numeros'),
            W('dritte', 'tercero', null, 'DRI-te', 'DRI-te (irregular: no "dreite")', 'numeros'),
            W('vierte', 'cuarto', null, 'FIA-te', 'FIR-te (v = "f")', 'numeros'),
            W('fünfte', 'quinto', null, 'FIUNF-te', 'FÜNF-te (ü corta)', 'numeros'),
            W('sechste', 'sexto', null, 'ZEKS-te', 'SEKS-te', 'numeros'),
            W('siebte', 'séptimo', null, 'SIIP-te', 'SIP-te (irregular: sin -en-)', 'numeros'),
            W('achte', 'octavo', null, 'AJ-te', 'ACH-te (irregular: solo -te)', 'numeros'),
            W('neunte', 'noveno', null, 'NOIN-te', 'NOIN-te (eu = "oi")', 'numeros'),
            W('zehnte', 'décimo', null, 'TSEEN-te', 'TSEN-te (e larga)', 'numeros'),
            W('zwölfte', 'duodécimo', null, 'TSVOELF-te', 'TSVÖLF-te (ö = "e" con labios de "o")', 'numeros'),
            W('zwanzigste', 'vigésimo', null, 'TSVAN-tsi-ste', 'TSVAN-tsig-ste (la -ig final suena como "ich"; desde 20: -ste)', 'numeros'),
            W('dreißigste', 'trigésimo', null, 'DRAI-si-ste', 'DRAI-sig-ste (ß = "s" sorda; -ig suena como "ich")', 'numeros')
          ]
        }
      ]
    }
  });
})();
