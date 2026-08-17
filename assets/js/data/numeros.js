/* ============================================================
   data/numeros.js — Números cardinales, ordinales, hora y fecha
   ============================================================ */

DE.registrarLeccion({
  id: 'numeros',
  titulo: 'Números, hora y fecha',
  icono: 'numeros',
  grupo: 'Gramática esencial',
  color: 'naranja',
  resumen: 'Contar, decir la hora, las fechas y los ordinales (der erste, der zweite…).',
  vista: 'infografia',

  datos: {
    titulo: 'Números',
    subtitulo: 'Zahlen · Uhrzeit · Datum',
    cinta: 'El orden también importa',
    resumen: 'Contar en alemán tiene una trampa: a partir del 21 se dice primero la unidad y luego la decena.',

    tarjetas: [
      {
        n: 1, color: 'morado', icono: 'personas', titulo: 'Del 0 al 12',
        bloques: [
          { tipo: 'ejemplos', items: [
            { de: 'null', es: '0' }, { de: 'eins', es: '1' }, { de: 'zwei', es: '2' },
            { de: 'drei', es: '3' }, { de: 'vier', es: '4' }, { de: 'fünf', es: '5' },
            { de: 'sechs', es: '6' }, { de: 'sieben', es: '7' }, { de: 'acht', es: '8' },
            { de: 'neun', es: '9' }, { de: 'zehn', es: '10' }, { de: 'elf', es: '11' },
            { de: 'zwölf', es: '12' }
          ]},
          { tipo: 'aviso', icono: 'telefono', texto: 'Al teléfono se dice "zwo" en vez de "zwei" para no confundirlo con "drei".' }
        ]
      },
      {
        n: 2, color: 'verde', icono: 'numeros', titulo: 'Del 13 al 19 y las decenas',
        bloques: [
          { tipo: 'texto', texto: 'Del 13 al 19: unidad + zehn.' },
          { tipo: 'ejemplos', items: [
            { de: 'dreizehn', es: '13' }, { de: 'vierzehn', es: '14' },
            { de: 'sechzehn', es: '16 — ¡pierde la s!' }, { de: 'siebzehn', es: '17 — ¡pierde el en!' }
          ]},
          { tipo: 'tabla', encabezados: ['Número', 'Alemán'], filas: [
            ['20', { de: 'zwanzig' }], ['30', { de: 'dreißig' }], ['40', { de: 'vierzig' }],
            ['50', { de: 'fünfzig' }], ['60', { de: 'sechzig' }], ['70', { de: 'siebzig' }],
            ['80', { de: 'achtzig' }], ['90', { de: 'neunzig' }], ['100', { de: 'hundert' }]
          ]},
          { tipo: 'aviso', icono: 'alerta', texto: '30 es "dreißig" con ß, no "dreizig". Es la única decena que no acaba en -zig.' }
        ]
      },
      {
        n: 3, color: 'azul', icono: 'repetir', titulo: 'La regla del revés',
        bloques: [
          { tipo: 'texto', texto: 'A partir del 21 se dice la UNIDAD + und + DECENA, todo junto en una sola palabra. Como en el español antiguo "veintiuno" pero llevado al extremo.' },
          { tipo: 'ejemplos', items: [
            { de: 'einundzwanzig', es: '21 — literalmente "uno y veinte"' },
            { de: 'zweiunddreißig', es: '32' },
            { de: 'siebenundvierzig', es: '47' },
            { de: 'neunundneunzig', es: '99' },
            { de: 'zweihundertfünfunddreißig', es: '235' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Se escribe todo junto, sin espacios. Por eso los alemanes leen los números "al revés" al dictarlos.' }
        ]
      },
      {
        n: 4, color: 'naranja', icono: 'premio', titulo: 'Ordinales',
        bloques: [
          { tipo: 'texto', texto: 'Del 1 al 19 se añade -te. Del 20 en adelante, -ste.' },
          { tipo: 'tabla', encabezados: ['Nº', 'Ordinal', 'Español'], filas: [
            ['1.', { de: 'erste' }, 'primero'],
            ['2.', { de: 'zweite' }, 'segundo'],
            ['3.', { de: 'dritte' }, 'tercero'],
            ['4.', { de: 'vierte' }, 'cuarto'],
            ['7.', { de: 'siebte' }, 'séptimo'],
            ['8.', { de: 'achte' }, 'octavo'],
            ['20.', { de: 'zwanzigste' }, 'vigésimo'],
            ['100.', { de: 'hundertste' }, 'centésimo']
          ]},
          { tipo: 'aviso', icono: 'alerta', texto: 'Irregulares: erste (no "einte"), dritte (no "dreite"), siebte (no "siebente"), achte (una sola t).' }
        ]
      },
      {
        n: 5, color: 'rosa', icono: 'calendario', titulo: 'Fechas',
        bloques: [
          { tipo: 'texto', texto: 'La fecha usa el ordinal declinado. Para "el día X" se usa "am + ordinal + -en".' },
          { tipo: 'ejemplos', items: [
            { de: 'Heute ist der erste Mai.', es: 'Hoy es 1 de mayo.' },
            { de: 'Am ersten Januar', es: 'El primero de enero' },
            { de: 'Am zwölften April', es: 'El doce de abril' },
            { de: 'Ich habe am dreißigsten Juni Geburtstag.', es: 'Cumplo años el 30 de junio.' }
          ]},
          { tipo: 'aviso', icono: 'lapiz', texto: 'Escrito se abrevia con punto: 1. Mai, 12.04.2026 (día.mes.año).' }
        ]
      },
      {
        n: 6, color: 'turquesa', icono: 'reloj', titulo: 'La hora',
        bloques: [
          { tipo: 'caja', titulo: 'Formal (horarios, trenes)', bloques: [
            { tipo: 'ejemplos', items: [
              { de: 'Es ist vierzehn Uhr dreißig.', es: 'Son las 14:30.' },
              { de: 'Der Zug fährt um acht Uhr fünfzehn.', es: 'El tren sale a las 8:15.' }
            ]}
          ]},
          { tipo: 'caja', titulo: 'Coloquial', bloques: [
            { tipo: 'ejemplos', items: [
              { de: 'Es ist Viertel nach drei.', es: 'Son las 3 y cuarto.' },
              { de: 'Es ist Viertel vor vier.', es: 'Son las 4 menos cuarto.' },
              { de: 'Es ist halb vier.', es: '¡Son las 3:30! (media PARA las cuatro)' }
            ]}
          ]},
          { tipo: 'aviso', icono: 'alerta', texto: 'La gran trampa: "halb vier" NO es las cuatro y media, es las tres y media. Se cuenta hacia la hora siguiente.' }
        ]
      },
      {
        n: 7, color: 'indigo', icono: 'pregunta', titulo: 'Preguntas útiles',
        bloques: [
          { tipo: 'ejemplos', items: [
            { de: 'Wie viel kostet das?', es: '¿Cuánto cuesta?' },
            { de: 'Wie spät ist es?', es: '¿Qué hora es?' },
            { de: 'Um wie viel Uhr?', es: '¿A qué hora?' },
            { de: 'Der wievielte ist heute?', es: '¿A qué día estamos?' },
            { de: 'Wie alt bist du?', es: '¿Cuántos años tienes?' },
            { de: 'In welchem Stock wohnst du?', es: '¿En qué piso vives?' }
          ]}
        ]
      },
      {
        n: 8, color: 'rojo', icono: 'moneda', titulo: 'Precios y cantidades',
        bloques: [
          { tipo: 'ejemplos', items: [
            { de: 'Das kostet drei Euro fünfzig.', es: 'Cuesta 3,50 €.' },
            { de: 'ein Kilo Äpfel', es: 'un kilo de manzanas' },
            { de: 'eine Flasche Wasser', es: 'una botella de agua' },
            { de: 'zwei Stück', es: 'dos unidades' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'En alemán la coma decimal se lee "Komma": 3,5 = drei Komma fünf. Y el separador de miles es el punto.' }
        ]
      },
      {
        n: 9, color: 'lima', icono: 'estrella', titulo: 'Expresiones de orden',
        bloques: [
          { tipo: 'ejemplos', items: [
            { de: 'an erster Stelle', es: 'en primer lugar' },
            { de: 'zuerst … dann … zuletzt', es: 'primero… luego… por último' },
            { de: 'zum ersten Mal', es: 'por primera vez' },
            { de: 'die Hälfte', es: 'la mitad' },
            { de: 'ein Drittel', es: 'un tercio' }
          ]}
        ]
      }
    ]
  }
});
