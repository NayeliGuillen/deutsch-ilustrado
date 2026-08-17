/* ============================================================
   data/casos.js — Los 4 casos alemanes
   ============================================================ */

DE.registrarLeccion({
  id: 'casos',
  titulo: 'Los 4 casos',
  icono: 'diana',
  grupo: 'Gramática esencial',
  color: 'morado',
  resumen: 'Nominativ, Akkusativ, Dativ y Genitiv: quién hace qué a quién.',
  vista: 'infografia',

  datos: {
    titulo: 'Los 4 casos',
    subtitulo: 'die vier Fälle',
    cinta: 'El caso dice la FUNCIÓN de la palabra',
    resumen: 'Lo que más cuesta del alemán, explicado en una sola página. ' +
             'El caso no cambia el sustantivo: cambia el artículo que lo acompaña.',

    tarjetas: [
      {
        n: 1, color: 'morado', icono: 'idea', titulo: '¿Qué es un caso?',
        bloques: [
          { tipo: 'texto', texto: 'En español el orden de las palabras dice quién hace la acción. En alemán lo dice el CASO, marcado en el artículo. Por eso el orden puede cambiar sin perder el sentido.' },
          { tipo: 'ejemplos', items: [
            { de: 'Der Hund beißt den Mann.', es: 'El perro muerde al hombre.' },
            { de: 'Den Mann beißt der Hund.', es: 'Al hombre lo muerde el perro. (¡mismo significado!)' }
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'La pregunta clave: der = quien muerde; den = a quien muerden.' }
        ]
      },
      {
        n: 2, color: 'verde', icono: 'personas', titulo: 'Nominativ — el sujeto',
        bloques: [
          { tipo: 'texto', texto: 'Quien realiza la acción. Pregunta: Wer? (¿quién?) / Was? (¿qué?)' },
          { tipo: 'tabla', encabezados: ['Masc.', 'Fem.', 'Neutro', 'Plural'], filas: [
            ['der / ein', 'die / eine', 'das / ein', 'die / —']
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Der Lehrer erklärt die Regel.', es: 'El profesor explica la regla.' },
            { de: 'Das Kind spielt im Garten.', es: 'El niño juega en el jardín.' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Tras los verbos sein, werden y bleiben, el complemento también va en nominativo: Er ist ein guter Lehrer.' }
        ]
      },
      {
        n: 3, color: 'azul', icono: 'flechaDer', titulo: 'Akkusativ — objeto directo',
        bloques: [
          { tipo: 'texto', texto: 'Quien recibe la acción directamente. Pregunta: Wen? (¿a quién?) / Was? (¿qué?)' },
          { tipo: 'tabla', encabezados: ['Masc.', 'Fem.', 'Neutro', 'Plural'], filas: [
            ['den / einen', 'die / eine', 'das / ein', 'die / —']
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Ich sehe den Film.', es: 'Veo la película.' },
            { de: 'Sie kauft einen Apfel.', es: 'Ella compra una manzana.' }
          ]},
          { tipo: 'aviso', icono: 'alerta', texto: 'Solo cambia el masculino. Femenino, neutro y plural son idénticos al nominativo.' }
        ]
      },
      {
        n: 4, color: 'naranja', icono: 'regalo', titulo: 'Dativ — objeto indirecto',
        bloques: [
          { tipo: 'texto', texto: 'A quién beneficia o va dirigida la acción. Pregunta: Wem? (¿a quién?)' },
          { tipo: 'tabla', encabezados: ['Masc.', 'Fem.', 'Neutro', 'Plural'], filas: [
            ['dem / einem', 'der / einer', 'dem / einem', 'den + -n']
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Ich gebe dem Kind das Buch.', es: 'Le doy el libro al niño.' },
            { de: 'Sie hilft ihrer Mutter.', es: 'Ella ayuda a su madre.' }
          ]},
          { tipo: 'aviso', icono: 'ubicacion', texto: 'En el plural dativo el sustantivo añade -n: mit den Kindern, mit den Freunden.' }
        ]
      },
      {
        n: 5, color: 'rosa', icono: 'llave', titulo: 'Genitiv — posesión',
        bloques: [
          { tipo: 'texto', texto: 'Indica pertenencia (el "de" español). Pregunta: Wessen? (¿de quién?)' },
          { tipo: 'tabla', encabezados: ['Masc.', 'Fem.', 'Neutro', 'Plural'], filas: [
            ['des + -(e)s', 'der', 'des + -(e)s', 'der']
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Das ist das Auto des Mannes.', es: 'Ese es el coche del hombre.' },
            { de: 'Die Farbe der Blume ist rot.', es: 'El color de la flor es rojo.' }
          ]},
          { tipo: 'aviso', icono: 'mensaje', texto: 'En el habla cotidiana el genitivo se sustituye por "von + dativo": das Auto von dem Mann.' }
        ]
      },
      {
        n: 6, color: 'turquesa', icono: 'capas', titulo: 'Tabla maestra',
        bloques: [
          { tipo: 'tabla', encabezados: ['Caso', 'Masc.', 'Fem.', 'Neutro', 'Plural'], filas: [
            ['Nominativ', 'der', 'die', 'das', 'die'],
            ['Akkusativ', 'den', 'die', 'das', 'die'],
            ['Dativ', 'dem', 'der', 'dem', 'den'],
            ['Genitiv', 'des', 'der', 'des', 'der']
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'Memoriza esta tabla en columnas, no en filas: "der-den-dem-des" se canta solo.' }
        ]
      },
      {
        n: 7, color: 'indigo', icono: 'llave', titulo: 'Preposiciones que mandan',
        bloques: [
          { tipo: 'caja', titulo: 'Siempre acusativo', bloques: [
            { tipo: 'texto', texto: 'durch, für, gegen, ohne, um  →  "DOGFUM"' }
          ]},
          { tipo: 'caja', titulo: 'Siempre dativo', bloques: [
            { tipo: 'texto', texto: 'aus, bei, mit, nach, seit, von, zu, gegenüber' }
          ]},
          { tipo: 'caja', titulo: 'Mixtas (Wechselpräpositionen)', bloques: [
            { tipo: 'texto', texto: 'an, auf, hinter, in, neben, über, unter, vor, zwischen. Con movimiento (Wohin?) → acusativo. Sin movimiento (Wo?) → dativo.' }
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Ich gehe in die Schule.', es: '¿A dónde? → acusativo' },
            { de: 'Ich bin in der Schule.', es: '¿Dónde? → dativo' }
          ]}
        ]
      },
      {
        n: 8, color: 'rojo', icono: 'personas', titulo: 'Pronombres por caso',
        bloques: [
          { tipo: 'tabla', encabezados: ['Nom.', 'Akk.', 'Dat.'], filas: [
            ['ich', 'mich', 'mir'],
            ['du', 'dich', 'dir'],
            ['er', 'ihn', 'ihm'],
            ['sie', 'sie', 'ihr'],
            ['es', 'es', 'ihm'],
            ['wir', 'uns', 'uns'],
            ['ihr', 'euch', 'euch'],
            ['sie / Sie', 'sie / Sie', 'ihnen / Ihnen']
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Ich sehe ihn.', es: 'Lo veo a él.' },
            { de: 'Ich helfe ihm.', es: 'Le ayudo a él.' }
          ]}
        ]
      },
      {
        n: 9, color: 'lima', icono: 'checkCirculo', titulo: 'Método en 3 pasos',
        bloques: [
          { tipo: 'lista', estilo: 'check', items: [
            '1. Busca el verbo y pregunta "¿quién?" → ese es el nominativo.',
            '2. Pregunta "¿qué/a quién?" → acusativo.',
            '3. Pregunta "¿a quién le?" → dativo.',
            'Verbos que SIEMPRE piden dativo: helfen, danken, gefallen, gehören, antworten, folgen.'
          ]},
          { tipo: 'aviso', icono: 'premio', texto: 'Practícalo en la sección "Practicar": el quiz incluye preguntas de casos.' }
        ]
      }
    ]
  }
});
