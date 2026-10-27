/* ============================================================
   data/examen-guia.js — Guía exprés para el examen
   ------------------------------------------------------------
   Una tarjeta por tema del examen: la regla mínima, los trucos
   y las trampas más comunes. Después, a practicar con los
   entrenadores de la sección "Examen de la semana".
   ============================================================ */

DE.registrarLeccion({
  id: 'examen-guia',
  titulo: 'Guía del examen',
  icono: 'diana',
  grupo: 'Examen de la semana',
  color: 'rojo',
  resumen: 'Lo esencial de hora, fechas, meses, estaciones, ordinales, números, artículos y direcciones, con las trampas típicas.',
  vista: 'infografia',

  datos: {
    titulo: 'Examen',
    subtitulo: 'lo que tienes que dominar',
    cinta: '8 temas · practica cada uno',
    resumen: 'Lee cada tarjeta una vez y pasa a los entrenadores: la práctica con error y explicación es lo que de verdad fija el tema.',

    tarjetas: [
      {
        n: 1, color: 'azul', icono: 'reloj', titulo: 'La hora', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'texto', texto: 'Preguntas: Wie spät ist es? / Wie viel Uhr ist es? · Um wie viel Uhr…? (¿a qué hora?)' },
          { tipo: 'tabla', encabezados: ['Minutos', 'Inoficial (calle)', 'Ejemplo 7:xx'], filas: [
            [':00', 'Uhr', 'sieben Uhr'],
            [':05 / :10', 'fünf / zehn nach', 'zehn nach sieben'],
            [':15', 'Viertel nach', 'Viertel nach sieben'],
            [':20', 'zwanzig nach', 'zwanzig nach sieben'],
            [':25', 'fünf vor halb + SIGUIENTE', 'fünf vor halb acht'],
            [':30', 'halb + SIGUIENTE', 'halb acht'],
            [':35', 'fünf nach halb + SIGUIENTE', 'fünf nach halb acht'],
            [':40', 'zwanzig vor + SIGUIENTE', 'zwanzig vor acht'],
            [':45', 'Viertel vor + SIGUIENTE', 'Viertel vor acht'],
            [':50 / :55', 'zehn / fünf vor + SIGUIENTE', 'zehn vor acht']
          ]},
          { tipo: 'aviso', icono: 'alerta', texto: 'TRAMPA nº 1: halb sieben = 6:30, no 7:30. "halb" mira hacia la hora que viene (media hora ANTES de las siete). Oficial: 6:30 = sechs Uhr dreißig.' },
          { tipo: 'aviso', icono: 'idea', texto: 'Oficial (radio, estación, 24 h): hora + Uhr + minutos. 14:45 = vierzehn Uhr fünfundvierzig. 13:00 = dreizehn Uhr. Con "ein Uhr" no se dice eins: ein Uhr; sin Uhr: Es ist eins.' }
        ]
      },
      {
        n: 2, color: 'naranja', icono: 'calendario', titulo: 'Fechas y ordinales', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'tabla', encabezados: ['Pregunta', 'Respuesta'], filas: [
            ['Der Wievielte ist heute?', 'Heute ist der dritte Mai. (3. Mai)'],
            ['Wann hast du Geburtstag?', 'Am dritten Mai. (am 3. Mai)'],
            ['Den Wievielten haben wir heute?', 'Heute haben wir den dritten Mai.']
          ]},
          { tipo: 'tabla', encabezados: ['Regla', 'Ordinal'], filas: [
            ['1–19: número + -te', 'vierte, fünfte, sechste, neunte, zwölfte…'],
            ['Excepciones', 'erste (1.) · dritte (3.) · siebte (7.) · achte (8.)'],
            ['20–31: número + -ste', 'zwanzigste, einundzwanzigste, dreißigste'],
            ['Con "am" (dativo): termina en -en', 'am ersten, am dritten, am zwanzigsten']
          ]},
          { tipo: 'aviso', icono: 'alerta', texto: 'TRAMPA: en la fecha escrita el punto significa "ordinal": 3. Mai = der dritte Mai. Y en alemán el día va ANTES del mes (3.5. = 3 de mayo).' }
        ]
      },
      {
        n: 3, color: 'verde', icono: 'sol', titulo: 'Meses, estaciones y días', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'tabla', encabezados: ['Estación', 'Meses', 'Con "im"'], filas: [
            ['der Frühling (primavera)', 'März · April · Mai', 'im Frühling'],
            ['der Sommer (verano)', 'Juni · Juli · August', 'im Sommer'],
            ['der Herbst (otoño)', 'September · Oktober · November', 'im Herbst'],
            ['der Winter (invierno)', 'Dezember · Januar · Februar', 'im Winter']
          ]},
          { tipo: 'texto', texto: 'Meses: Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember. Todos son der y se usan con im: im Mai.' },
          { tipo: 'texto', texto: 'Días: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag (o Sonnabend), Sonntag. Todos son der y se usan con am: am Montag. La semana empieza en lunes.' },
          { tipo: 'aviso', icono: 'idea', texto: 'Truco: im (meses y estaciones) · am (días y fechas) · um (horas). Tres preposiciones, tres usos.' }
        ]
      },
      {
        n: 4, color: 'morado', icono: 'numeros', titulo: 'Los números', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'lista', estilo: 'check', items: [
            '13–19: dreizehn, vierzehn, fünfzehn, SECHZEHN (sin s), SIEBZEHN (sin en), achtzehn, neunzehn.',
            'Decenas: zwanzig, DREIßIG (no dreizig), vierzig, fünfzig, SECHZIG (sin s), SIEBZIG (sin en), achtzig, neunzig.',
            '21–99: unidad + und + decena, al revés que en español: 24 = vierundzwanzig (cuatro-y-veinte). Todo junto.',
            '1 en la cadena = ein: einundzwanzig. Solo, eins: Ich habe eins.',
            '100 = hundert · 101 = hunderteins · 250 = zweihundertfünfzig · 1000 = tausend. Sin "und" tras hundert.',
            'Años: 1999 = neunzehnhundertneunundneunzig · 2024 = zweitausendvierundzwanzig.',
            'Precios: 2,50 € = zwei Euro fünfzig · 0,80 € = achtzig Cent.'
          ]},
          { tipo: 'aviso', icono: 'alerta', texto: 'TRAMPA: 16 y 60, 17 y 70 se escriben distinto (sechzehn/sechzig, siebzehn/siebzig) y 30 es dreißig con ß.' }
        ]
      },
      {
        n: 5, color: 'rojo', icono: 'libro', titulo: 'der · die · das · plural', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'tabla', encabezados: ['Género', 'Color', 'Ejemplo'], filas: [
            ['der (masculino)', 'rojo', 'der Bahnhof'],
            ['die (femenino)', 'azul', 'die Apotheke'],
            ['das (neutro)', 'verde', 'das Hotel'],
            ['die (plural)', 'morado', 'die Hotels']
          ]},
          { tipo: 'lista', estilo: 'check', items: [
            'El género hay que aprenderlo con la palabra: nunca "Bahnhof" sola, siempre der Bahnhof.',
            'Pistas: -ung, -heit, -keit, -ion, -tät, -e (a menudo) → die. -chen, -lein → das. -er (personas) → der.',
            'En plural no hay género: SIEMPRE die. Un plural se reconoce porque el verbo va en plural: die Hotels sind…'
          ]}
        ]
      },
      {
        n: 6, color: 'turquesa', icono: 'lista', titulo: 'ein · eine · kein · keine', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'tabla', encabezados: ['', 'der', 'die', 'das'], filas: [
            ['Nominativo (sujeto)', 'ein / kein', 'eine / keine', 'ein / kein'],
            ['Akkusativ (objeto)', 'EINEN / KEINEN', 'eine / keine', 'ein / kein'],
            ['Plural', '—', 'keine', '—']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Solo UNA casilla cambia: masculino en Akkusativ (der → den, ein → einen, kein → keinen). Es la que más cae en examen.' },
          { tipo: 'tabla', encabezados: ['Frase', 'Por qué'], filas: [
            ['Das ist ein Tisch. → Das ist kein Tisch.', 'kein niega a un sustantivo con ein (o sin artículo)'],
            ['Ich habe einen Bruder. → Ich habe keinen Bruder.', 'Bruder = der + objeto → einen/keinen'],
            ['Ich bin nicht müde.', 'nicht niega adjetivos y verbos, no sustantivos con ein']
          ]}
        ]
      },
      {
        n: 7, color: 'amarillo', icono: 'brujula', titulo: 'Direcciones', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'tabla', encabezados: ['Alemán', 'Español'], filas: [
            ['Wie komme ich zum Bahnhof / zur Post?', '¿Cómo llego a la estación / a correos?'],
            ['Gehen Sie geradeaus / links / rechts.', 'Siga recto / a la izquierda / a la derecha.'],
            ['die erste / zweite / dritte Straße rechts', 'la primera / segunda / tercera calle a la derecha'],
            ['an der Ampel / an der Kreuzung', 'en el semáforo / en el cruce'],
            ['Es ist gegenüber / neben / hinter…', 'Está enfrente / al lado / detrás…']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'zum = zu + dem (der y das) · zur = zu + der (die). zum Bahnhof, zum Hotel, zur Post, zur Apotheke.' },
          { tipo: 'aviso', icono: 'alerta', texto: 'Los ordinales aparecen aquí también: die zweite Straße (femenino → -e). Acuérdate de erste, dritte.' }
        ]
      },
      {
        n: 8, color: 'rosa', icono: 'check', titulo: 'Plan para la semana', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'lista', estilo: 'check', items: [
            'Día 1: hora (niveles 1–3) y números (1–3).',
            'Día 2: fechas, ordinales, meses y estaciones.',
            'Día 3: artículos de colores y ein/kein.',
            'Día 4: direcciones y repaso de lo que fallaste (la app te lo muestra al final de cada nivel).',
            'Día 5: dos simulacros completos. Meta: 90 % o más.',
            'Víspera: solo repasa los errores y duerme.'
          ]}
        ]
      }
    ]
  }
});
