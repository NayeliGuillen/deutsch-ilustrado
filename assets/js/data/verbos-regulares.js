/* ============================================================
   data/verbos-regulares.js — Presente de los verbos regulares
   ============================================================ */

DE.registrarLeccion({
  id: 'verbos-regulares',
  titulo: 'Verbos regulares en presente',
  icono: 'repetir',
  grupo: 'Gramática esencial',
  color: 'verde',
  resumen: 'La raíz no cambia: quita -en y añade la terminación de cada persona.',
  vista: 'infografia',

  datos: {
    titulo: 'Verbos regulares',
    subtitulo: 'en presente',
    cinta: 'Raíz + terminación',
    resumen: 'En alemán los verbos regulares se conjugan añadiendo terminaciones al infinitivo.',

    tarjetas: [
      {
        n: 1, color: 'morado', icono: 'idea', titulo: '¿Qué son?',
        bloques: [
          { tipo: 'texto', texto: 'Son verbos que forman su presente agregando terminaciones a la raíz (el infinitivo sin -en). La raíz NUNCA cambia.' },
          { tipo: 'ejemplos', items: [
            { de: 'machen', es: 'hacer → mach- + terminación' },
            { de: 'lernen', es: 'aprender → lern- + terminación' }
          ]}
        ]
      },
      {
        n: 2, color: 'verde', icono: 'documento', titulo: 'Terminaciones',
        bloques: [
          { tipo: 'tabla', encabezados: ['Persona', 'Terminación'], filas: [
            ['ich', '-e'],
            ['du', '-st'],
            ['er / sie / es', '-t'],
            ['wir', '-en'],
            ['ihr', '-t'],
            ['sie / Sie', '-en']
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'La 2ª y 3ª persona del singular son las que cambian: -st y -t. wir y sie/Sie siempre -en.' }
        ]
      },
      {
        n: 3, color: 'azul', icono: 'lapiz', titulo: 'Cómo conjugar',
        bloques: [
          { tipo: 'lista', estilo: 'check', items: [
            '1. Toma el infinitivo: lernen (aprender).',
            '2. Quita la terminación -en. Raíz: lern-',
            '3. Agrega la terminación según la persona: lern + e = lerne.'
          ]}
        ]
      },
      {
        n: 4, color: 'naranja', icono: 'libro', titulo: 'Ejemplo completo: lernen',
        bloques: [
          { tipo: 'tabla', encabezados: ['Persona', 'Conjugación', 'Español'], filas: [
            ['ich', { de: 'lerne' }, 'yo aprendo'],
            ['du', { de: 'lernst' }, 'tú aprendes'],
            ['er/sie/es', { de: 'lernt' }, 'él/ella aprende'],
            ['wir', { de: 'lernen' }, 'nosotros aprendemos'],
            ['ihr', { de: 'lernt' }, 'vosotros aprendéis'],
            ['sie/Sie', { de: 'lernen' }, 'ellos / usted aprende']
          ]}
        ]
      },
      {
        n: 5, color: 'rosa', icono: 'mas', titulo: 'Más ejemplos',
        bloques: [
          { tipo: 'caja', titulo: 'spielen (jugar)', bloques: [
            { tipo: 'ejemplos', items: [
              { de: 'ich spiele', es: 'yo juego' },
              { de: 'du spielst', es: 'tú juegas' },
              { de: 'er spielt', es: 'él juega' }
            ]}
          ]},
          { tipo: 'caja', titulo: 'wohnen (vivir)', bloques: [
            { tipo: 'ejemplos', items: [
              { de: 'ich wohne', es: 'yo vivo' },
              { de: 'du wohnst', es: 'tú vives' },
              { de: 'wir wohnen', es: 'nosotros vivimos' }
            ]}
          ]}
        ]
      },
      {
        n: 6, color: 'turquesa', icono: 'globo', titulo: 'Usos principales',
        bloques: [
          { tipo: 'lista', estilo: 'corazon', items: [
            { de: 'Ich lerne Deutsch.', es: 'Acciones habituales: aprendo alemán.' },
            { de: 'Er arbeitet jeden Tag.', es: 'Rutinas: él trabaja todos los días.' },
            { de: 'Wasser kocht bei 100 Grad.', es: 'Verdades generales: el agua hierve a 100 grados.' },
            { de: 'Morgen fahre ich nach Berlin.', es: 'Futuro cercano: mañana voy a Berlín.' }
          ]}
        ]
      },
      {
        n: 7, color: 'rojo', icono: 'calendario', titulo: 'Expresiones útiles',
        bloques: [
          { tipo: 'ejemplos', items: [
            { de: 'jeden Tag', es: 'cada día' },
            { de: 'oft', es: 'a menudo' },
            { de: 'manchmal', es: 'a veces' },
            { de: 'immer', es: 'siempre' },
            { de: 'nie', es: 'nunca' },
            { de: 'normalerweise', es: 'normalmente' }
          ]},
          { tipo: 'aviso', icono: 'mensaje', texto: '¡Úsalas para hablar de tus rutinas! Ich stehe immer um 7 Uhr auf.' }
        ]
      },
      {
        n: 8, color: 'indigo', icono: 'alerta', titulo: 'Consejos y trampas',
        bloques: [
          { tipo: 'lista', estilo: 'estrella', items: [
            'Si la raíz acaba en -t, -d, -n o -m se añade una "e" para poder pronunciar: du arbeitest, er arbeitet.',
            'Si la raíz acaba en -s, -ß, -z o -x, la "du" pierde la s: du heißt, du tanzt.',
            'Verbos irregulares frecuentes cambian la vocal en du/er: fahren → du fährst; sprechen → du sprichst; sehen → du siehst.',
            'sein y haben son irregulares totales: ich bin / du bist; ich habe / du hast.'
          ]},
          { tipo: 'aviso', icono: 'ubicacion', texto: 'En alemán no se puede omitir el pronombre: siempre "ich lerne", nunca solo "lerne".' }
        ]
      },
      {
        n: 9, color: 'lima', icono: 'idea', titulo: 'sein y haben (imprescindibles)',
        bloques: [
          { tipo: 'tabla', encabezados: ['Persona', 'sein (ser/estar)', 'haben (tener)'], filas: [
            ['ich', { de: 'bin' }, { de: 'habe' }],
            ['du', { de: 'bist' }, { de: 'hast' }],
            ['er/sie/es', { de: 'ist' }, { de: 'hat' }],
            ['wir', { de: 'sind' }, { de: 'haben' }],
            ['ihr', { de: 'seid' }, { de: 'habt' }],
            ['sie/Sie', { de: 'sind' }, { de: 'haben' }]
          ]}
        ]
      }
    ]
  }
});
