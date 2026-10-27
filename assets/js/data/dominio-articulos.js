/* ============================================================
   data/dominio-articulos.js — der, die, das a fondo
   ------------------------------------------------------------
   Teoría completa y práctica guiada para dominar el género.
   Se estudia aquí y se entrena en "Entrenamiento: der, die, das".
   ============================================================ */

DE.registrarLeccion({
  id: 'dominio-articulos',
  titulo: 'der, die, das a fondo',
  icono: 'tipografia',
  grupo: 'Domina el tema',
  color: 'azul',
  resumen: 'Cómo funciona el género, cómo adivinarlo con pistas fiables y cómo memorizarlo sin sufrir.',
  vista: 'infografia',

  datos: {
    titulo: 'der · die · das',
    subtitulo: 'El género, paso a paso',
    cinta: 'Palabra + artículo = una sola cosa',
    resumen: 'Aquí está todo lo que necesitas para no volver a dudar entre der, die y das: ' +
             'la idea, las pistas que sí funcionan, el plural y los errores más típicos del español.',

    tarjetas: [
      {
        n: 1, color: 'morado', icono: 'idea', titulo: 'La idea: el artículo es el apellido',
        bloques: [
          { tipo: 'texto', texto: 'Piensa en el artículo como el apellido del sustantivo. Nadie te presenta a "Tisch" a secas: es "der Tisch", igual que no presentas a "Nayeli" sin más. Por eso se aprende siempre la pareja completa y nunca la palabra suelta.' },
          { tipo: 'tabla', encabezados: ['Género', 'Ejemplo', 'Significado'], filas: [
            ['Masculino · der', { de: 'der Tisch' }, 'la mesa'],
            ['Femenino · die', { de: 'die Lampe' }, 'la lámpara'],
            ['Neutro · das', { de: 'das Buch' }, 'el libro'],
            ['Plural · die', { de: 'die Bücher' }, 'los libros']
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'Regla de oro: en el plural los tres géneros se juntan en un solo artículo, die. Si la palabra está en plural, la duda desaparece.' }
        ]
      },
      {
        n: 2, color: 'rojo', icono: 'prohibido', titulo: 'Por qué no sirve el género del español',
        bloques: [
          { tipo: 'texto', texto: 'Comparo con el español porque es de ahí de donde viene tu intuición, y esa intuición falla más o menos una vez de cada tres. El género alemán no sigue al español.' },
          { tipo: 'tabla', encabezados: ['Español', 'Alemán', 'Se parece'], filas: [
            ['el sol (masc.)', { de: 'die Sonne' }, 'No: femenino'],
            ['la luna (fem.)', { de: 'der Mond' }, 'No: masculino'],
            ['la mesa (fem.)', { de: 'der Tisch' }, 'No: masculino'],
            ['el libro (masc.)', { de: 'das Buch' }, 'No: neutro'],
            ['la chica (fem.)', { de: 'das Mädchen' }, 'No: neutro'],
            ['el hombre (masc.)', { de: 'der Mann' }, 'Sí']
          ]},
          { tipo: 'aviso', icono: 'ojo', texto: 'Cuando la palabra es una persona, casi siempre coincide con el sexo (der Mann, die Frau). En las cosas no hay lógica que aplicar: hay pistas y hay memoria.' }
        ]
      },
      {
        n: 3, color: 'verde', icono: 'check', titulo: 'Pistas fiables: las terminaciones',
        bloques: [
          { tipo: 'texto', texto: 'Estas terminaciones casi nunca fallan. Con ellas aciertas el género de cientos de palabras sin haberlas visto antes.' },
          { tipo: 'tabla', encabezados: ['Terminación', 'Artículo', 'Ejemplos'], filas: [
            ['-ung', 'die', { de: 'die Zeitung, die Wohnung' }],
            ['-heit / -keit', 'die', { de: 'die Gesundheit, die Möglichkeit' }],
            ['-schaft', 'die', { de: 'die Freundschaft' }],
            ['-ion / -tät', 'die', { de: 'die Station, die Universität' }],
            ['-in (mujer)', 'die', { de: 'die Lehrerin, die Freundin' }],
            ['-ei', 'die', { de: 'die Bäckerei' }],
            ['-chen / -lein', 'das', { de: 'das Mädchen, das Brötchen' }],
            ['-um', 'das', { de: 'das Museum, das Zentrum' }],
            ['-ment', 'das', { de: 'das Dokument, das Instrument' }],
            ['-er (persona)', 'der', { de: 'der Lehrer, der Fahrer' }],
            ['-ling', 'der', { de: 'der Frühling, der Lehrling' }],
            ['-ismus', 'der', { de: 'der Tourismus' }]
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'Las palabras que terminan en -e son femeninas en su gran mayoría: die Straße, die Schule, die Lampe, die Banane. Excepciones muy usadas: der Name, der Käse, der Junge, das Ende.' }
        ]
      },
      {
        n: 4, color: 'naranja', icono: 'calendario', titulo: 'Pistas fiables: grupos de significado',
        bloques: [
          { tipo: 'tabla', encabezados: ['Grupo', 'Artículo', 'Ejemplos'], filas: [
            ['Días de la semana', 'der', { de: 'der Montag, der Freitag' }],
            ['Meses', 'der', { de: 'der Januar, der Mai' }],
            ['Estaciones', 'der', { de: 'der Sommer, der Winter' }],
            ['Puntos cardinales', 'der', { de: 'der Norden, der Süden' }],
            ['Marcas de coches', 'der', { de: 'der BMW, der Mercedes' }],
            ['Colores (como nombre)', 'das', { de: 'das Rot, das Blau' }],
            ['Metales', 'das', { de: 'das Gold, das Silber' }],
            ['Infinitivos como nombre', 'das', { de: 'das Essen, das Lernen' }],
            ['Números como nombre', 'die', { de: 'die Eins, die Zehn' }]
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Con das Essen verás algo curioso: el verbo essen (comer) se convierte en sustantivo neutro, "la comida". Funciona con cualquier verbo: das Lernen, das Leben.' }
        ]
      },
      {
        n: 5, color: 'turquesa', icono: 'libros', titulo: 'Palabras compuestas: manda la última',
        bloques: [
          { tipo: 'texto', texto: 'El alemán pega palabras como si fueran piezas de Lego. El género lo pone SIEMPRE la última pieza, la que está pegada a la derecha. Lo demás solo aporta el significado.' },
          { tipo: 'tabla', encabezados: ['Piezas', 'Resultado', 'Por qué'], filas: [
            ['die Straße + die Bahn', { de: 'die Straßenbahn' }, 'Bahn es femenino'],
            ['die Hand + das Tuch', { de: 'das Handtuch' }, 'Tuch es neutro'],
            ['die Bahn + der Hof', { de: 'der Bahnhof' }, 'Hof es masculino'],
            ['krank + das Haus', { de: 'das Krankenhaus' }, 'Haus es neutro'],
            ['die Haupt + die Straße', { de: 'die Hauptstraße' }, 'Straße es femenino'],
            ['der Schwimm + das Bad', { de: 'das Schwimmbad' }, 'Bad es neutro']
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'Truco práctico: cuando veas una palabra larguísima, ve directo al final. Esa última pieza casi siempre la conoces y te da el artículo.' }
        ]
      },
      {
        n: 6, color: 'rosa', icono: 'documento', titulo: 'El plural: siempre die',
        bloques: [
          { tipo: 'texto', texto: 'Una buena noticia: el artículo del plural es único, die. La parte difícil es la forma del sustantivo, que cambia de varias maneras. Estos son los patrones, de los más a los menos frecuentes.' },
          { tipo: 'tabla', encabezados: ['Cambio', 'Singular', 'Plural'], filas: [
            ['+ -n / -en', { de: 'die Frau' }, { de: 'die Frauen' }],
            ['+ -e', { de: 'der Tisch' }, { de: 'die Tische' }],
            ['+ Umlaut y -e', { de: 'der Sohn' }, { de: 'die Söhne' }],
            ['+ -er (con Umlaut)', { de: 'das Kind' }, { de: 'die Kinder' }],
            ['+ -er y Umlaut', { de: 'das Buch' }, { de: 'die Bücher' }],
            ['Sin cambio', { de: 'das Zimmer' }, { de: 'die Zimmer' }],
            ['+ -s (palabras extranjeras)', { de: 'das Hotel' }, { de: 'die Hotels' }]
          ]},
          { tipo: 'aviso', icono: 'lapiz', texto: 'Por eso el vocabulario siempre se guarda en tres piezas: artículo, palabra y plural. Mira el campo "plural" de cada tarjeta.' }
        ]
      },
      {
        n: 7, color: 'indigo', icono: 'mensaje', titulo: 'Indefinido o definido: ¿un o el?',
        bloques: [
          { tipo: 'texto', texto: 'Es como conocer a alguien: la primera vez dices "una amiga" (ein, eine) y, cuando ya sabes quién es, pasas a "la amiga" (der, die, das). Funciona igual que en español.' },
          { tipo: 'ejemplos', items: [
            { de: 'Das ist ein Hotel. Das Hotel ist groß.', es: 'Es un hotel. El hotel es grande.' },
            { de: 'Hier ist eine Bank. Die Bank ist neu.', es: 'Aquí hay un banco. El banco es nuevo.' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Das ist … significa "esto es …". Ahí das NO es el artículo, es la palabra "esto". Se escribe igual y por eso confunde al principio. Si después hay un sustantivo con su propio artículo, el primer das es "esto".' }
        ]
      },
      {
        n: 8, color: 'lima', icono: 'audio', titulo: 'Cómo suenan y cómo se escriben',
        bloques: [
          { tipo: 'tabla', encabezados: ['Palabra', 'Curso', 'Fácil'], filas: [
            ['der', 'dea', 'DEA (la r final casi no suena)'],
            ['die', 'dii', 'DI (i larga)'],
            ['das', 'das', 'DAS (a corta; s como en "sal")']
          ]},
          { tipo: 'aviso', icono: 'lapiz', texto: 'Todos los sustantivos se escriben con mayúscula: der Tisch, no "der tisch". El artículo va con minúscula, salvo al principio de la frase.' }
        ]
      },
      {
        n: 9, color: 'rojo', icono: 'ojo', titulo: 'Errores típicos de hispanohablantes',
        bloques: [
          { tipo: 'lista', estilo: 'corazon', items: [
            'Aplicar el género del español (die Sonne, der Mond: justo al revés de lo que esperas).',
            'Aprender la palabra sin el artículo y adivinar después. Mejor siempre la pareja completa.',
            'Escribir los sustantivos con minúscula.',
            'Mezclar das (artículo) con das (esto): "Das Buch" vs "Das ist ein Buch".',
            'Olvidar que las palabras compuestas toman el género de la última pieza.'
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'El mejor hábito: cada palabra nueva, en voz alta y con su artículo. "der Tisch, der Tisch, der Tisch" tres veces vale más que mirarla diez.' }
        ]
      },
      {
        n: 10, color: 'verde', icono: 'diana', titulo: 'Tu método de memoria (5 minutos al día)',
        bloques: [
          { tipo: 'lista', estilo: 'corazon', items: [
            'Color: der = rojo, die = azul, das = verde, plural (die) = morado. Imagina el objeto de ese color. Son los mismos colores de las etiquetas del vocabulario.',
            'Frase corta: una oración mínima con la palabra ("Das ist der Bahnhof") vale más que la lista.',
            'Voz alta: di el artículo y la palabra antes de mirar la respuesta.',
            'Repetición espaciada: repasa hoy, mañana, a los tres días y a la semana.',
            'Entrenamiento por niveles: usa la lección siguiente hasta que los niveles queden en 100 %.'
          ]}
        ]
      }
    ]
  }
});
