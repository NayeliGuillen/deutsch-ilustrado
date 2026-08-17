/* ============================================================
   data/generos.js — der, die, das
   ============================================================ */

DE.registrarLeccion({
  id: 'generos',
  titulo: 'Los tres géneros',
  icono: 'libro',
  grupo: 'Gramática esencial',
  color: 'azul',
  resumen: 'der, die, das: cómo saber el género de un sustantivo y qué artículo usar.',
  vista: 'infografia',

  datos: {
    titulo: 'Los tres géneros',
    subtitulo: 'der · die · das',
    cinta: 'Aprende el sustantivo CON su artículo',
    resumen: 'En alemán cada sustantivo tiene género gramatical: masculino, femenino o neutro. ' +
             'El artículo acompaña al sustantivo en todo el enunciado.',

    tarjetas: [
      {
        n: 1, color: 'morado', icono: 'idea', titulo: '¿Qué son?',
        bloques: [
          { tipo: 'texto', texto: 'Los sustantivos en alemán son masculinos, femeninos o neutros. El género no siempre coincide con el español: "el sol" es femenino en alemán y "la luna" masculino.' },
          { tipo: 'lista', estilo: 'corazon', items: [
            { de: 'der Mann', es: 'el hombre — masculino' },
            { de: 'die Blume', es: 'la flor — femenino' },
            { de: 'das Buch', es: 'el libro — neutro' }
          ]},
          { tipo: 'aviso', icono: 'lapiz', texto: 'Todos los sustantivos se escriben con mayúscula inicial, siempre y en cualquier posición de la frase.' }
        ]
      },
      {
        n: 2, color: 'verde', icono: 'documento', titulo: 'Artículos indefinidos',
        bloques: [
          { tipo: 'tabla', encabezados: ['Caso', 'Masculino', 'Femenino', 'Neutro'], filas: [
            ['Nominativo', 'ein Mann', 'eine Frau', 'ein Kind'],
            ['Acusativo', 'einen Mann', 'eine Frau', 'ein Kind'],
            ['Dativo', 'einem Mann', 'einer Frau', 'einem Kind']
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'Solo el masculino cambia entre nominativo y acusativo: ein → einen. Es la clave del 80 % de los errores.' }
        ]
      },
      {
        n: 3, color: 'azul', icono: 'estrella', titulo: 'Artículos definidos',
        bloques: [
          { tipo: 'tabla', encabezados: ['Caso', 'Masc.', 'Fem.', 'Neutro', 'Plural'], filas: [
            ['Nominativo', 'der', 'die', 'das', 'die'],
            ['Acusativo', 'den', 'die', 'das', 'die'],
            ['Dativo', 'dem', 'der', 'dem', 'den'],
            ['Genitivo', 'des', 'der', 'des', 'der']
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Der Hund bellt laut.', es: 'El perro ladra fuerte.' },
            { de: 'Ich sehe den Hund.', es: 'Veo al perro. (acusativo)' }
          ]}
        ]
      },
      {
        n: 4, color: 'rosa', icono: 'buscar', titulo: '¿Cómo identificar el género?',
        bloques: [
          { tipo: 'caja', titulo: 'Casi siempre DER', bloques: [
            { tipo: 'lista', items: [
              'Días, meses y estaciones: der Montag, der Mai, der Sommer.',
              'Puntos cardinales y el clima: der Norden, der Regen.',
              'Terminaciones -er, -ling, -ismus: der Lehrer, der Frühling.',
              'Seres vivos macho: der Vater, der Hund.'
            ]}
          ]},
          { tipo: 'caja', titulo: 'Casi siempre DIE', bloques: [
            { tipo: 'lista', items: [
              'Terminaciones -ung, -heit, -keit, -schaft, -tion, -ei: die Zeitung, die Freiheit.',
              'Terminación -in (profesiones femeninas): die Lehrerin.',
              'Números y cifras: die Eins.',
              'La mayoría de flores y árboles: die Rose.'
            ]}
          ]},
          { tipo: 'caja', titulo: 'Casi siempre DAS', bloques: [
            { tipo: 'lista', items: [
              'Diminutivos -chen y -lein: das Mädchen, das Brötchen.',
              'Infinitivos usados como sustantivo: das Essen, das Lernen.',
              'Terminaciones -ment, -um, -ma: das Dokument, das Zentrum.',
              'Metales e idiomas: das Gold, das Deutsch.'
            ]}
          ]},
          { tipo: 'aviso', icono: 'alerta', texto: '¡Siempre hay excepciones! das Mädchen (la chica) es neutro por ser diminutivo.' }
        ]
      },
      {
        n: 5, color: 'naranja', icono: 'mensaje', titulo: 'Ejemplos en oraciones',
        bloques: [
          { tipo: 'ejemplos', items: [
            { de: 'Der Hund bellt laut.', es: 'El perro ladra fuerte.' },
            { de: 'Die Katze schläft auf dem Sofa.', es: 'La gata duerme en el sofá.' },
            { de: 'Das Auto ist neu.', es: 'El auto es nuevo.' },
            { de: 'Ich sehe einen Film.', es: 'Veo una película.' },
            { de: 'Sie hat eine Idee.', es: 'Ella tiene una idea.' },
            { de: 'Wir brauchen ein Ticket.', es: 'Necesitamos un boleto.' }
          ]}
        ]
      },
      {
        n: 6, color: 'turquesa', icono: 'personas', titulo: 'El plural',
        bloques: [
          { tipo: 'texto', texto: 'En plural TODOS los sustantivos usan "die" (nominativo y acusativo). Lo difícil es la terminación del sustantivo: hay cinco patrones.' },
          { tipo: 'tabla', encabezados: ['Patrón', 'Singular', 'Plural'], filas: [
            ['-e', { de: 'der Tisch' }, { de: 'die Tische' }],
            ['-e + Umlaut', { de: 'der Stuhl' }, { de: 'die Stühle' }],
            ['-n / -en', { de: 'die Blume' }, { de: 'die Blumen' }],
            ['-er + Umlaut', { de: 'das Buch' }, { de: 'die Bücher' }],
            ['-s (préstamos)', { de: 'das Auto' }, { de: 'die Autos' }]
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Aprende el plural junto con el artículo: der Tisch, die Tische. Los diccionarios lo anotan así.' }
        ]
      },
      {
        n: 7, color: 'indigo', icono: 'mensaje', titulo: 'Expresiones útiles',
        bloques: [
          { tipo: 'ejemplos', items: [
            { de: 'Das ist mein Buch.', es: 'Este es mi libro.' },
            { de: 'Das sind meine Bücher.', es: 'Estos son mis libros.' },
            { de: 'Welches Buch ist das?', es: '¿Qué libro es ese?' },
            { de: 'Wie heißt das auf Deutsch?', es: '¿Cómo se dice eso en alemán?' },
            { de: 'Der, die oder das?', es: '¿Der, die o das?' }
          ]}
        ]
      },
      {
        n: 8, color: 'rojo', icono: 'alerta', titulo: '¡Atención!',
        bloques: [
          { tipo: 'lista', estilo: 'check', items: [
            'El género no siempre se deduce: hay que memorizarlo con cada palabra.',
            'El artículo y los adjetivos deben concordar con el género y el caso.',
            'Truco de color: apunta der en azul, die en rojo y das en verde. El cerebro lo recuerda mejor.',
            'En duda, consulta el diccionario: siempre indica el artículo.'
          ]}
        ]
      }
    ]
  }
});
