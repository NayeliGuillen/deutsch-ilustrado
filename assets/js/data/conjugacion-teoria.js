/* ============================================================
   data/conjugacion-teoria.js — Conjugación en presente, completa
   ------------------------------------------------------------
   Ampliación de "Verbos regulares": cambios de raíz, sein/haben,
   modales, posición del verbo y separables.
   ============================================================ */

DE.registrarLeccion({
  id: 'conjugacion-teoria',
  titulo: 'Conjugación: todas las reglas',
  icono: 'repetir',
  grupo: 'Verbos',
  color: 'verde',
  resumen: 'Terminaciones, verbos con cambio de vocal, sein/haben, modales y separables en una sola guía.',
  vista: 'infografia',

  datos: {
    titulo: 'Conjugación',
    subtitulo: 'presente, sin sorpresas',
    cinta: 'Raíz + terminación',
    resumen: 'Casi todo se resuelve con una tabla de terminaciones y cinco excepciones que se repiten una y otra vez.',

    tarjetas: [
      {
        n: 1, color: 'verde', icono: 'tabla', titulo: 'La tabla base', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'texto', texto: 'Infinitivo sin -en = raíz. Con la raíz de machen (mach-): ' },
          { tipo: 'tabla', encabezados: ['Persona', 'Terminación', 'machen'], filas: [
            ['ich', '-e', 'mache'],
            ['du', '-st', 'machst'],
            ['er / es / sie', '-t', 'macht'],
            ['wir', '-en', 'machen'],
            ['ihr', '-t', 'macht'],
            ['sie / Sie', '-en', 'machen']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Truco: wir, sie (ellos) y Sie (usted) son SIEMPRE iguales al infinitivo. Solo hay que aprender 4 formas.' }
        ]
      },
      {
        n: 2, color: 'azul', icono: 'alerta', titulo: 'Cuando la raíz termina raro', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'texto', texto: 'Algunas raíces no se pueden pronunciar con -st / -t pegadas. Se arreglan así:' },
          { tipo: 'tabla', encabezados: ['Raíz en…', 'Ejemplo'], filas: [
            ['-t / -d', 'arbeiten → du arbeitest, er arbeitet, ihr arbeitet'],
            ['-t / -d', 'finden → du findest, er findet, ihr findet'],
            ['-s / -ß / -z / -x', 'heißen → du heißt · tanzen → du tanzt · reisen → du reist']
          ]},
          { tipo: 'texto', texto: 'Con -t/-d (y consonante + m/n) se añade una e: du -est, er/ihr -et. Con -s/-ß/-z/-x, du solo añade -t.' },
          { tipo: 'aviso', icono: 'atencion', texto: 'Sin la e extra sería impronunciable: "du arbeitst". Con ella: "du arbeitest".' }
        ]
      },
      {
        n: 3, color: 'rojo', icono: 'rayo', titulo: 'Cambio de vocal (solo du y er/es/sie)', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'texto', texto: 'Hay verbos cuyas formas du y er/es/sie cambian la vocal de la raíz. Ich, wir, ihr y sie/Sie NO cambian. Imagina una "zona del medio" que se transforma:' },
          { tipo: 'tabla', encabezados: ['Cambio', 'Verbo', 'du', 'er / es / sie'], filas: [
            ['e → i', 'sprechen (hablar)', 'sprichst', 'spricht'],
            ['e → i', 'essen (comer)', 'isst', 'isst'],
            ['e → i', 'nehmen (tomar)', 'nimmst', 'nimmt'],
            ['e → i', 'helfen (ayudar)', 'hilfst', 'hilft'],
            ['e → ie', 'lesen (leer)', 'liest', 'liest'],
            ['e → ie', 'sehen (ver)', 'siehst', 'sieht'],
            ['a → ä', 'fahren (ir en vehículo)', 'fährst', 'fährt'],
            ['a → ä', 'schlafen (dormir)', 'schläfst', 'schläft'],
            ['au → äu', 'laufen (correr)', 'läufst', 'läuft']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Analogía: la "sala VIP" de la conjugación solo admite a du y er/es/sie. Ahí es donde la vocal se disfraza. Los demás pasan sin cambiarse.' }
        ]
      },
      {
        n: 4, color: 'morado', icono: 'estrella', titulo: 'sein y haben', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'tabla', encabezados: ['', 'sein (ser/estar)', 'haben (tener)'], filas: [
            ['ich', 'bin', 'habe'],
            ['du', 'bist', 'hast'],
            ['er / es / sie', 'ist', 'hat'],
            ['wir', 'sind', 'haben'],
            ['ihr', 'seid', 'habt'],
            ['sie / Sie', 'sind', 'haben']
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'sein no se parece a nada: hay que memorizarlo como una canción. haben solo pierde la b en du hast / er hat.' }
        ]
      },
      {
        n: 5, color: 'turquesa', icono: 'llave', titulo: 'Verbos modales', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'texto', texto: 'Ich y er/es/sie son IGUALES y no llevan terminación. El segundo verbo va en infinitivo al final de la oración.' },
          { tipo: 'tabla', encabezados: ['', 'können', 'müssen', 'wollen', 'möchten'], filas: [
            ['ich', 'kann', 'muss', 'will', 'möchte'],
            ['du', 'kannst', 'musst', 'willst', 'möchtest'],
            ['er/es/sie', 'kann', 'muss', 'will', 'möchte'],
            ['wir', 'können', 'müssen', 'wollen', 'möchten'],
            ['ihr', 'könnt', 'müsst', 'wollt', 'möchtet'],
            ['sie/Sie', 'können', 'müssen', 'wollen', 'möchten']
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Ich kann gut schwimmen.', es: 'Sé nadar bien. (nadar va al final)' },
            { de: 'Ich möchte einen Kaffee trinken.', es: 'Quisiera tomar un café.' }
          ]}
        ]
      },
      {
        n: 6, color: 'naranja', icono: 'orden', titulo: 'Posición del verbo', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'recuadro', clase: 'G', etiqueta: 'EXTRA', titulo: 'Gramática: el verbo siempre en 2ª posición', bloques: [
            { tipo: 'ejemplos', items: [
              { de: 'Ich lerne heute Deutsch.', es: 'Posición 1: ich · Posición 2: lerne' },
              { de: 'Heute lerne ich Deutsch.', es: 'Si empiezas con "heute", el verbo sigue en 2ª y ich pasa detrás.' },
              { de: 'Lernst du Deutsch?', es: 'Pregunta sí/no: el verbo va PRIMERO.' },
              { de: 'Was lernst du?', es: 'Pregunta con palabra interrogativa: pregunta primero, verbo segundo.' }
            ]}
          ]}
        ]
      },
      {
        n: 7, color: 'rosa', icono: 'tijeras', titulo: 'Verbos separables', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'texto', texto: 'El prefijo se separa y viaja al FINAL de la oración (como un vagón que se suelta del tren):' },
          { tipo: 'ejemplos', items: [
            { de: 'aufstehen → Ich stehe um sieben auf.', es: 'Me levanto a las siete.' },
            { de: 'einkaufen → Wir kaufen heute ein.', es: 'Hoy hacemos las compras.' },
            { de: 'ankommen → Der Zug kommt um acht an.', es: 'El tren llega a las ocho.' },
            { de: 'anrufen → Ich rufe dich an.', es: 'Te llamo.' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Con un modal NO se separa: Ich muss um sieben aufstehen (infinitivo completo al final).' }
        ]
      },
      {
        n: 8, color: 'amarillo', icono: 'prohibido', titulo: 'Errores típicos de hispanohablantes', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'lista', estilo: 'check', items: [
            'No omitas el pronombre: en alemán es obligatorio. "Wohne in Köln" ✗ → Ich wohne in Köln ✓.',
            'Ich wohne, du wohnst… pero ¡no digas "du wohnest"! Esa e solo aparece tras t/d.',
            'No confundas "ihr" (vosotros) con "sie" (ellos): ihr lernt / sie lernen.',
            'sein ≠ haben: "Ich bin Hunger" ✗ → Ich habe Hunger ✓. "Ich habe 20 Jahre" ✗ → Ich bin 20 Jahre alt ✓.',
            'Sie (usted) comparte forma con sie (ellos): Sie sprechen Deutsch = usted habla / ellos hablan. El contexto decide.'
          ]}
        ]
      }
    ]
  }
});
