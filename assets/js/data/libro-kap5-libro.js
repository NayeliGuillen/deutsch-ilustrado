/* ============================================================
   data/libro-kap5-libro.js — Netzwerk neu A1 · Kapitel 5 (libro)
   ------------------------------------------------------------
   Páginas 54, 55 y 56: el día de Kaan, "Und Ihr Tag?" y
   "Wie spät ist es?". Del resto del capítulo no hay fotos aún.
   [LIBRO] = transcrito de las fotos · [EXTRA] = ayuda añadida.
   ============================================================ */

DE.registrarLeccion({
  id: 'k5-libro',
  titulo: 'Kap. 5 · El libro paso a paso',
  icono: 'libro',
  grupo: 'Libro · Kapitel 5',
  color: 'morado',
  resumen: 'Alltag und Familie: el día y el domingo de Kaan, tu propio día y la hora (Wie spät ist es?).',
  vista: 'infografia',

  datos: {
    titulo: 'Kapitel 5',
    subtitulo: 'Alltag und Familie',
    cinta: 'Netzwerk neu A1 · págs. 54–56',
    resumen: 'Metas del capítulo (libro): entender y decir la hora · dar indicaciones de tiempo · hablar de la familia · quedar con alguien · acordar una cita por teléfono · disculparse por un retraso y reaccionar.',

    tarjetas: [

      /* ------------------------------------------------ p. 54-55 */
      {
        n: 1, color: 'morado', icono: 'personas', titulo: 'Der Tag von Kaan (pp. 54–55)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: '[LIBRO] 1a. Was macht Kaan? Ordnen Sie die Fotos den Sätzen zu. Siete frases, siete fotos (A–G):' },
          { tipo: 'lectura', modo: 'texto', etiqueta: 'LIBRO', titulo: 'Las siete frases del libro',
            lineas: [
              { de: '1. Kaan geht in die Mensa.', es: '1. Kaan va a la mensa (comedor universitario).' },
              { de: '2. Kaan trifft Marie.', es: '2. Kaan se encuentra con Marie.' },
              { de: '3. Er fährt in die Uni.', es: '3. Él va a la universidad (en vehículo/bici).' },
              { de: '4. Kaan duscht.', es: '4. Kaan se ducha.' },
              { de: '5. Er lernt in der Bibliothek.', es: '5. Él estudia en la biblioteca.' },
              { de: '6. Er besucht seine Oma.', es: '6. Él visita a su abuela.' },
              { de: '7. Kaan frühstückt und liest Nachrichten.', es: '7. Kaan desayuna y lee las noticias.' }
            ],
            glosario: [
              { de: 'die Mensa', es: 'el comedor universitario' },
              { de: 'treffen (er trifft)', es: 'encontrarse con' },
              { de: 'fahren (er fährt)', es: 'ir en vehículo' },
              { de: 'lesen (er liest)', es: 'leer' }
            ]
          },
          { tipo: 'tabla', encabezados: ['Foto', 'Qué se ve', 'Frase'], filas: [
            ['A', 'Kaan toma té y pastel con una señora mayor', '6. Er besucht seine Oma.'],
            ['B', 'Kaan en el mostrador de la mensa con un cocinero', '1. Kaan geht in die Mensa.'],
            ['C', 'Kaan en la mesa con el móvil y fruta', '7. Kaan frühstückt und liest Nachrichten.'],
            ['D', 'Kaan en un café con una chica', '2. Kaan trifft Marie.'],
            ['E', 'una ducha', '4. Kaan duscht.'],
            ['F', 'Kaan en bicicleta por la calle', '3. Er fährt in die Uni.'],
            ['G', 'Kaan ante el ordenador y un libro ("Lernen · Wissen")', '5. Er lernt in der Bibliothek.']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] La asignación foto ↔ frase la deduje de lo que muestran las fotos; el libro no da las soluciones. Compruébala con el audio (pistas 1.60–66).' },
          { tipo: 'texto', texto: '[LIBRO] 1b. Wann macht Kaan was? Escucha (1.60–66) y numera las fotos por orden. Después cuenta, con este modelo del libro:' },
          { tipo: 'ejemplos', items: [
            { de: 'Am Morgen duscht Kaan. Dann frühstückt er und liest …', es: 'Por la mañana Kaan se ducha. Luego desayuna y lee … (modelo del libro)' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] "Dann" = luego/después. Fíjate: tras "Dann" el verbo va en 2ª posición: Dann frühstückt er. (verbo, luego sujeto).' },
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'EXTRA', titulo: 'Verbos de rutina con cambio de vocal', bloques: [
            { tipo: 'tabla', encabezados: ['Infinitiv', 'ich', 'du', 'er/sie/es'], filas: [
              ['fahren', 'fahre', 'fährst', 'fährt'],
              ['lesen', 'lese', 'liest', 'liest'],
              ['treffen', 'treffe', 'triffst', 'trifft'],
              ['schlafen', 'schlafe', 'schläfst', 'schläft'],
              ['duschen', 'dusche', 'duschst', 'duscht'],
              ['lernen', 'lerne', 'lernst', 'lernt']
            ]},
            { tipo: 'aviso', icono: 'idea', texto: 'Solo cambian en du y er/sie/es (a → ä, e → ie, e → i). Los demás verbos (duschen, lernen) son regulares. Analogía: la vocal "se estira o se levanta" solo en las dos personas del medio.' }
          ]},
          { tipo: 'texto', texto: '[LIBRO] 2a. Was macht Kaan am Sonntag? Escucha la conversación (1.67) y marca las actividades del cuadro:' },
          { tipo: 'tabla', encabezados: ['', '', '', ''], filas: [
            ['Zeitung lesen', 'mit der Familie zu Mittag essen', 'lange schlafen', 'Fußball spielen'],
            ['Freunde treffen', 'lernen', 'Oma besuchen', 'Pizza essen'],
            ['Marie treffen', 'in den Supermarkt gehen', 'ins Kino gehen', 'am Computer arbeiten']
          ]},
          { tipo: 'texto', texto: '[LIBRO] 2b. Trabajen en pareja y hablen por turnos. Modelo del libro:' },
          { tipo: 'ejemplos', items: [
            { de: 'Am Sonntag schläft Kaan lange.', es: 'El domingo Kaan duerme hasta tarde. (Persona A)' },
            { de: 'Er …', es: 'Él … (Persona B continúa)' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Observa las tres formas de decir adónde: in die Mensa (die → die), in den Supermarkt (der → den), ins Kino (das → ins = in das). Con "wohin?" (dirección) in + Akkusativ: solo el masculino cambia.' },
          { tipo: 'texto', texto: '[LIBRO] 3a. Und Ihr Tag? Erzählen Sie. Die anderen raten: Ist das am Wochenende oder nicht? Modelo:' },
          { tipo: 'lectura', modo: 'dialogo', nombres: true, etiqueta: 'LIBRO', titulo: 'Modelo 3a',
            lineas: [
              { q: 'Persona A', de: 'Morgens trinke ich einen Kaffee und esse Müsli mit Obst. Dann gehe ich ins Büro …', es: 'Por la mañana bebo un café y como muesli con fruta. Luego voy a la oficina …' },
              { q: 'Persona B', de: 'Das ist nicht am Wochenende!', es: '¡Eso no es en el fin de semana!' }
            ]
          },
          { tipo: 'texto', texto: '[LIBRO] 3b. Montag, Dienstag, Mittwoch … Mein Tag. Haz cinco fotos de un día y escribe una frase por foto. Preséntalo en grupo. Modelo del libro:' },
          { tipo: 'ejemplos', items: [
            { de: 'Mein Samstag ist super: Ich frühstücke und …', es: 'Mi sábado es genial: desayuno y … (modelo del libro)' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Para tus cinco frases usa: Morgens / Vormittags / Mittags / Nachmittags / Abends + verbo + ich. Ejemplo: Abends lerne ich Deutsch.' }
        ]
      },

      /* ------------------------------------------------ p. 56 */
      {
        n: 2, color: 'turquesa', icono: 'reloj', titulo: 'Wie spät ist es? (p. 56)', etiqueta: 'LIBRO',
        bloques: [
          { tipo: 'texto', texto: 'Meta: entender y decir la hora.' },
          { tipo: 'texto', texto: '[LIBRO] 4a. Die Uhrzeiten. Escucha las conversaciones (1.68–71) y ordena los cuatro dibujos (A: corriendo al cine · B: en la estación · C: durmiendo con alguien en la puerta · D: en la oficina). C ya lleva el 1.' },
          { tipo: 'texto', texto: '[LIBRO] 4b. Ordena las horas a los dibujos. El libro ya pone: zwanzig vor acht → A.' },
          { tipo: 'tabla', encabezados: ['Hora', 'Cifras', 'Dibujo'], filas: [
            ['fünf vor zwei', '1:55', '?'],
            ['halb sieben', '6:30', '?'],
            ['zwanzig vor acht', '7:40', 'A (dado por el libro)'],
            ['zehn nach neun', '9:10', '?']
          ]},
          { tipo: 'recuadro', clase: 'frases', etiqueta: 'LIBRO', titulo: 'Wie spät ist es? / Wie viel Uhr ist es?', bloques: [
            { tipo: 'tabla', encabezados: ['', 'Ejemplo: 14:45 Uhr'], filas: [
              ['inoffiziell (hablado)', 'Es ist Viertel vor drei.'],
              ['offiziell (24 h)', 'Es ist vierzehn Uhr fünfundvierzig.'],
              ['Wann? (inoffiziell)', 'Um Viertel vor drei.'],
              ['Wann? (offiziell)', 'Um vierzehn Uhr fünfundvierzig.']
            ]}
          ]},
          { tipo: 'texto', texto: '[LIBRO] 5a. Wie spät ist es? Fragen und antworten Sie. El reloj grande del libro (con las agujas en las 7:00) tiene estas etiquetas alrededor:' },
          { tipo: 'tabla', encabezados: ['Etiqueta del libro', 'Cifras', 'Se escribe'], filas: [
            ['sieben', '7:00', 'sieben (Uhr)'],
            ['kurz nach sieben', '7:02', 'kurz nach sieben'],
            ['zehn nach sieben', '7:10', 'zehn nach sieben'],
            ['Viertel nach sieben', '7:15', 'Viertel nach sieben'],
            ['zwanzig nach sieben', '7:20', 'zwanzig nach sieben'],
            ['fünf vor halb acht', '7:25', 'fünf vor halb acht'],
            ['halb acht', '7:30', 'halb acht'],
            ['fünf nach halb acht', '7:35', 'fünf nach halb acht'],
            ['Viertel vor acht', '7:45', 'Viertel vor acht'],
            ['kurz vor sieben', '6:58', 'kurz vor sieben']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Las cifras ("7:02", "7:35"…) son la hora que corresponde a cada etiqueta (kurz = "un poquito"). El truco de halb: halb acht = media hora hacia las ocho = 7:30. Con "fünf vor halb" y "fünf nach halb" te mueves cinco minutos alrededor de la media.' },
          { tipo: 'texto', texto: '[LIBRO] 5a (cont.). Cuatro relojes (1–4) que debes leer en voz alta. [LIBRO] 5b. Uhrzeit offiziell. Wann? Escucha (1.72–76) y anota. El libro da el 1: um 13:10 → "um dreizehn Uhr zehn".' },
          { tipo: 'texto', texto: '[LIBRO] 5c. ¿Cómo se dicen las horas en tu idioma? Compara. (En español: "las dos menos cuarto"; en alemán: Viertel vor zwei — ¡se parece!)' },
          { tipo: 'texto', texto: '[LIBRO] 6. Wann …? – Um … Escribe cinco preguntas. Después pregunta y responde en pareja. Modelo del libro:' },
          { tipo: 'lectura', modo: 'dialogo', nombres: true, etiqueta: 'LIBRO', titulo: 'Modelo 6',
            lineas: [
              { q: 'A', de: 'Wann frühstückst du?', es: '¿Cuándo desayunas?' },
              { q: 'B', de: 'Um Viertel nach sieben. Wann fährst du ins Büro?', es: 'A las siete y cuarto. ¿Cuándo vas a la oficina?' },
              { q: 'A', de: 'Um …', es: 'A las … (continúa tú)' }
            ]
          },
          { tipo: 'aviso', icono: 'idea', texto: '[EXTRA] Si quieres entrenar la hora a fondo, tienes en el menú: "Vocabulario: el tiempo", "Examen: la hora" y los ejercicios con relojes al azar.' }
        ]
      }

    ]
  }
});
