/* ============================================================
   data/entrenamiento-kap3.js — Entrenamiento del capítulo 3
   ------------------------------------------------------------
   Ejercicios al estilo del libro (págs. 30–37): lugares, der/das/die,
   ein/kein, preguntar el camino, eventos, estaciones y vocales
   largas/cortas. Siete niveles, se superan con 90 % o más.
   ============================================================ */

(function () {
  'use strict';

  /** Opción múltiple; la correcta se escribe primero (el entrenador baraja). */
  function op(p, ok, otros, why, extra) {
    var e = { t: 'opcion', p: p, ops: [ok].concat(otros), ok: 0, why: why };
    if (extra) for (var k in extra) e[k] = extra[k];
    return e;
  }
  function art(sust, g, es, why) {
    return { t: 'opcion', fijo: true, p: '¿Qué artículo lleva "' + sust + '"?  (' + es + ')', ops: ['der', 'das', 'die'],
      ok: ['der', 'das', 'die'].indexOf(g), why: g + ' ' + sust + ' (' + es + ').' + (why ? ' ' + why : ''), audio: g + ' ' + sust };
  }
  function esc(p, ok, why) { return { t: 'escribir', p: p, ok: ok, why: why }; }
  function ord(p, de, extra, why) { return { t: 'ordenar', p: p, ok: de, extra: extra || [], why: why }; }

  DE.registrarLeccion({
    id: 'k3-entrenamiento',
    titulo: 'Kap. 3 · Entrenamiento',
    icono: 'jugar',
    grupo: 'Libro · Kapitel 3',
    color: 'turquesa',
    resumen: 'Siete niveles: lugares, der/das/die, ein/kein, caminos con plano, eventos, estaciones y vocales.',
    vista: 'entrenador',

    datos: {
      intro: 'Ejercicios inspirados en las actividades del libro (4a-c, 5a, 6c, 7c, 9, 10). ' +
             'Colores: der = rojo · die = azul · das = verde · plural = morado. Supera cada nivel con 90 % o más a la primera.',

      niveles: [

        {
          id: 'n1', dificultad: 'Fácil', titulo: 'Lugares y edificios',
          descripcion: 'Significado y artículo de las palabras de las págs. 30–31.',
          ejercicios: [
            op('¿Qué significa "der Bahnhof"?', 'la estación de tren', ['el aeropuerto', 'el puerto', 'el ayuntamiento'], 'Bahn = tren, Hof = edificio.', { visual: 'tren', foto: 'der Bahnhof', audio: 'der Bahnhof' }),
            op('¿Qué significa "der Hafen"?', 'el puerto', ['la estación', 'el puente', 'el río'], 'der Hafen, die Häfen.', { visual: 'barco', audio: 'der Hafen' }),
            op('¿Qué significa "der Fluss"?', 'el río', ['el lago', 'el mar', 'el puente'], 'der Fluss = río. der See = lago.', { visual: 'rio', audio: 'der Fluss' }),
            op('¿Qué significa "der See"?', 'el lago', ['el río', 'el mar', 'el parque'], 'der See = lago (die See = el mar).', { visual: 'lago', audio: 'der See' }),
            op('¿Qué significa "das Rathaus"?', 'el ayuntamiento', ['la casa de la ciudad', 'la iglesia', 'el hotel'], 'Rat = consejo + Haus = casa.', { visual: 'ayuntamiento', audio: 'das Rathaus' }),
            op('¿Qué significa "die Kirche"?', 'la iglesia', ['la cocina', 'el museo', 'el teatro'], 'die Kirche, die Kirchen.', { visual: 'iglesia', audio: 'die Kirche' }),
            op('¿Qué significa "die Brücke"?', 'el puente', ['la calle', 'la torre', 'el puerto'], 'die Brücke, die Brücken.', { visual: 'puente', audio: 'die Brücke' }),
            op('¿Qué significa "das Kino"?', 'el cine', ['el teatro', 'el museo', 'el concierto'], 'das Kino, die Kinos.', { visual: 'cine', audio: 'das Kino' }),
            op('¿Qué significa "der Turm"?', 'la torre', ['el puente', 'el parque', 'la casa'], 'der Turm, die Türme.', { visual: 'torre', audio: 'der Turm' }),
            op('¿Qué significa "die Straße"?', 'la calle', ['el camino de hierro', 'la plaza', 'el mercado'], 'die Straße, die Straßen. ß suena como "s".', { visual: 'semaforo', audio: 'die Straße' }),
            op('¿Cómo se dice "el hotel" en alemán?', 'das Hotel', ['der Hotel', 'die Hotel', 'das Hotell'], 'das Hotel, die Hotels.'),
            op('¿Cómo se dice "el museo" en alemán?', 'das Museum', ['der Museum', 'die Museum', 'das Musee'], 'das Museum, die Museen (cambio en el plural).'),
            op('¿Cómo se dice "la cafetería"?', 'das Café', ['der Café', 'die Café', 'das Kaffe'], 'das Café, die Cafés. No confundir con der Kaffee (la bebida).'),
            op('¿Cómo se dice "el teatro"?', 'das Theater', ['der Theater', 'die Theater', 'das Teatro'], 'das Theater, die Theater.'),
            { t: 'unir', p: 'Une cada lugar con su significado.',
              pares: [['der Hafen', 'el puerto'], ['der Fluss', 'el río'], ['der See', 'el lago'], ['die Kirche', 'la iglesia'], ['das Rathaus', 'el ayuntamiento'], ['die Brücke', 'el puente']],
              why: 'Hafen = puerto · Fluss = río · See = lago · Kirche = iglesia · Rathaus = ayuntamiento · Brücke = puente.' },
            { t: 'unir', p: 'Une cada palabra con su artículo y su color.',
              pares: [['Bahnhof', 'der'], ['Hotel', 'das'], ['Straße', 'die'], ['Fluss', 'der (río)'], ['Museum', 'das (museo)'], ['Brücke', 'die (puente)']],
              why: 'der Bahnhof · das Hotel · die Straße · der Fluss · das Museum · die Brücke.' }
          ]
        },

        {
          id: 'n2', dificultad: 'Básico', titulo: 'der, das o die (colores)',
          descripcion: 'Arrastra cada palabra a su caja de color.',
          ejercicios: [
            { t: 'clasificar', p: 'Arrastra cada lugar a su artículo: der (rojo) · die (azul) · das (verde).',
              cajas: [{ etiqueta: 'der', color: 'der' }, { etiqueta: 'die', color: 'die' }, { etiqueta: 'das', color: 'das' }],
              items: [
                { t: 'Bahnhof', c: 0 }, { t: 'Hafen', c: 0 }, { t: 'Fluss', c: 0 }, { t: 'See', c: 0 },
                { t: 'Kirche', c: 1 }, { t: 'Straße', c: 1 }, { t: 'Brücke', c: 1 }, { t: 'Kunsthalle', c: 1 },
                { t: 'Hotel', c: 2 }, { t: 'Rathaus', c: 2 }, { t: 'Kino', c: 2 }, { t: 'Museum', c: 2 }
              ],
              why: 'der: Bahnhof, Hafen, Fluss, See · die: Kirche, Straße, Brücke, Kunsthalle · das: Hotel, Rathaus, Kino, Museum.' },
            { t: 'clasificar', p: 'Transporte: ¿der, die o das?',
              cajas: [{ etiqueta: 'der', color: 'der' }, { etiqueta: 'die', color: 'die' }, { etiqueta: 'das', color: 'das' }],
              items: [
                { t: 'Bus', c: 0 }, { t: 'Test', c: 0 }, { t: 'U-Bahn', c: 1 }, { t: 'Fahrkarte', c: 1 },
                { t: 'Fahrrad', c: 2 }, { t: 'Auto', c: 2 }, { t: 'Glück', c: 2 }
              ],
              why: 'der Bus, der Test · die U-Bahn, die Fahrkarte · das Fahrrad, das Auto, das Glück.' },
            { t: 'clasificar', p: 'Eventos (p. 34): ¿der, die o das?',
              cajas: [{ etiqueta: 'der', color: 'der' }, { etiqueta: 'das', color: 'das' }],
              items: [
                { t: 'Chor', c: 0 }, { t: 'Film', c: 0 }, { t: 'Theater', c: 1 }, { t: 'Festival', c: 1 },
                { t: 'Orchester', c: 1 }, { t: 'Konzert', c: 1 }, { t: 'Publikum', c: 1 }
              ],
              why: 'Solo der Chor y der Film son "der". Todos los demás son "das".' },
            { t: 'clasificar', p: 'Singular o plural: ¿der/die/das o die (plural)?',
              cajas: [{ etiqueta: 'der', color: 'der' }, { etiqueta: 'die', color: 'die' }, { etiqueta: 'das', color: 'das' }, { etiqueta: 'die (plural)', color: 'pl' }],
              items: [
                { t: 'Hafen', c: 0 }, { t: 'Brücke', c: 1 }, { t: 'Hotel', c: 2 },
                { t: 'Schiffe', c: 3 }, { t: 'Häuser', c: 3 }, { t: 'Autos', c: 3 }
              ],
              why: 'Schiffe, Häuser y Autos están en plural: allí siempre "die". Singular: der Hafen, die Brücke, das Hotel.' },
            { t: 'completar', p: 'Completa con ein o eine (primera vez: "unbestimmt").',
              partes: ['Das ist ', { ok: ['ein'], ops: ['ein', 'eine', 'einen'] }, ' Hafen.\nDas ist ', { ok: ['ein'], ops: ['ein', 'eine', 'einen'] }, ' Hotel.\nDas ist ',
                { ok: ['eine'], ops: ['ein', 'eine', 'einer'] }, ' Straße.'],
              why: 'der Hafen → ein · das Hotel → ein · die Straße → eine.' },
            { t: 'completar', p: 'Completa con der, das o die (ya conocido: "bestimmt").',
              partes: [{ ok: ['Der'], ops: ['Der', 'Die', 'Das'] }, ' Bahnhof heißt Hamburg-Altona.\n', { ok: ['Die'], ops: ['Der', 'Die', 'Das'] }, ' Brücke heißt „Köhlbrandbrücke“.\n',
                { ok: ['Das'], ops: ['Der', 'Die', 'Das'] }, ' Theater heißt Thalia Theater.'],
              why: 'Bahnhof = der · Brücke = die · Theater = das.' },
            { t: 'completar', p: 'Plural: ¿qué falta?',
              partes: ['Das sind ', { ok: ['–', '-', 'x', 'nada'], ops: ['–', 'die', 'eine'], ancho: 5 }, ' Häuser.\n', { ok: ['Die'], ops: ['Die', 'Der', 'Das'] }, ' Häuser sind 400 Jahre alt.'],
              why: 'Con "unbestimmt" en plural no se pone nada (–). Con "bestimmt": die.' },
            op('"Das ist ___ Kirche." (primera vez que la mencionas)', 'eine', ['ein', 'die', 'der'], 'Kirche es femenino y es nueva información → eine.', { fijo: true }),
            op('"___ Fluss heißt Alster." (ya hablaste del río)', 'Der', ['Ein', 'Die', 'Das'], 'Fluss es masculino y ya es conocido → der.', { fijo: true }),
            op('"Das sind ___ Schiffe." (nuevo, plural)', '–', ['die', 'eine', 'ein'], 'Plural indefinido: sin artículo.', { fijo: true })
          ]
        },

        {
          id: 'n3', dificultad: 'Medio', titulo: 'Ist das …? Nein, kein …',
          descripcion: 'La negación con kein/keine (p. 32).',
          auto: { tipo: 'ein-kein', n: 8, neg: true },
          ejercicios: [
            op('"Ist das ein Bus?" – "Nein, das ist ___ Bus."', 'kein', ['keine', 'nicht', 'ein'], 'Bus es masculino: ein → kein.', { fijo: true }),
            op('"Ist das eine Kirche?" – "Nein, das ist ___ Kirche."', 'keine', ['kein', 'nicht', 'eine'], 'Kirche es femenino: eine → keine.', { fijo: true }),
            op('"Ist das ein Auto?" – "Nein, das ist ___ Auto."', 'kein', ['keine', 'nicht', 'ein'], 'Auto es neutro: ein → kein.', { fijo: true }),
            op('"Sind das Busse?" – "Nein, das sind ___ Busse."', 'keine', ['kein', 'nicht', 'die'], 'Plural: siempre keine.', { fijo: true }),
            op('"Oh nein! ___ Fahrkarte?!" (no tengo billete)', 'Keine', ['Kein', 'Nicht', 'Ein'], 'Fahrkarte es femenino → keine.', { fijo: true }),
            op('"Oje, ___ Fahrrad!" (no hay bici)', 'kein', ['keine', 'nicht', 'ein'], 'das Fahrrad → kein.', { fijo: true }),
            op('"Heute ___ Test!"', 'kein', ['keine', 'nicht', 'ein'], 'der Test → kein.', { fijo: true }),
            op('¿Cuál es la regla de kein?', 'kein = ein con una k delante', ['kein = nicht + ein', 'kein solo se usa con plural', 'kein no cambia nunca'], 'kein se declina igual que ein: kein / keine.'),
            esc('Escribe: "No es un autobús, es un metro." (das ist … / eine U-Bahn)', ['Das ist kein Bus, das ist eine U-Bahn.', 'Das ist kein Bus, das ist eine U-Bahn', 'Nein, das ist kein Bus, das ist eine U-Bahn.'], 'kein Bus (masculino) / eine U-Bahn (femenino).'),
            esc('Completa: Das ist ___ Kirche, das ist das Rathaus.', ['keine', 'Keine'], 'Kirche = femenino → keine.'),
            ord('Ordena: no es un lago, es un río.', 'Das ist kein See, das ist ein Fluss.', [], 'kein See (masc.), ein Fluss (masc.).'),
            ord('Ordena: ¿Es un hotel?', 'Ist das ein Hotel?', [], 'Pregunta sí/no: el verbo "ist" va primero.')
          ]
        },

        {
          id: 'n4', dificultad: 'Medio', titulo: 'Preguntar el camino',
          descripcion: 'Frases de la p. 33 y planos de ciudad.',
          auto: { tipo: 'mapa-azar', n: 4, min: 2, max: 3 },
          ejercicios: [
            op('¿Qué significa "geradeaus"?', 'todo recto', ['a la izquierda', 'a la derecha', 'atrás'], 'links ← geradeaus ↑ rechts →', { visual: 'arriba', audio: 'geradeaus' }),
            op('¿Qué significa "rechts"?', 'a la derecha', ['a la izquierda', 'todo recto', 'allí'], 'rechts →', { visual: 'derecha', audio: 'rechts' }),
            op('¿Qué significa "links"?', 'a la izquierda', ['a la derecha', 'todo recto', 'cerca'], 'links ←', { visual: 'izquierda', audio: 'links' }),
            op('Pides el camino con educación:', 'Entschuldigung, wo ist bitte der Bahnhof?', ['Wo Bahnhof ist?', 'Entschuldigung, wo bitte Bahnhof ist?', 'Der Bahnhof wo ist?'], 'Entschuldigung + wo ist + sujeto.', { audio: 'Entschuldigung, wo ist bitte der Bahnhof?' }),
            op('Alguien te explica el camino. ¿Qué dice?', 'Gehen Sie links!', ['Sie gehen links!', 'Links gehen Sie!', 'Gehst du links!'], 'Imperativ con Sie: verbo en posición 1 + Sie.', { audio: 'Gehen Sie links!' }),
            op('Imperativ de "fahren" con Sie (rechts):', 'Fahren Sie rechts!', ['Sie fahren rechts!', 'Fahre Sie rechts!', 'Fährst Sie rechts!'], 'Fahren Sie … (igual que el infinitivo + Sie).'),
            op('Respuesta cuando confirmas el camino:', 'Ja, genau.', ['Ja, Danke.', 'Nein, schön.', 'Gern, bitte.'], '"Ja, genau" = sí, exacto.'),
            op('Agradeces por el camino:', 'Vielen Dank!', ['Gern geschehen!', 'Wie bitte?', 'Auf Wiedersehen!'], 'Vielen Dank! → Bitte, gern.'),
            ord('Ordena: Vaya a la derecha y luego todo recto.', 'Gehen Sie rechts und dann geradeaus.', [], 'Imperativ + Sie, "und dann" une los dos pasos.'),
            ord('Ordena: Disculpe, ¿dónde está el parque?', 'Entschuldigung, wo ist der Park?', [], 'wo + ist + sujeto.'),
            ord('Ordena: Allí está el parque.', 'Da ist der Park.', [], 'da = allí; el verbo en 2ª posición.'),
            { t: 'completar', p: 'Completa el diálogo (p. 33).',
              partes: ['A: ', { ok: ['Entschuldigung'], ops: ['Entschuldigung', 'Tschüss', 'Hallo'] }, ', wo ist der Park?\nB: ', { ok: ['Gehen'], ops: ['Gehen', 'Gehe', 'Gehst'] }, ' Sie rechts und dann ',
                { ok: ['geradeaus'], ops: ['geradeaus', 'gerade', 'links aus'] }, '. Da ist der Park.\nA: Vielen ', { ok: ['Dank'], ops: ['Dank', 'Bitte', 'Gern'] }, '!'],
              why: 'Entschuldigung · Gehen Sie · geradeaus · Vielen Dank.' }
          ]
        },

        {
          id: 'n5', dificultad: 'Medio', titulo: 'Eventos y estaciones',
          descripcion: 'Palabras internacionales, meses y estaciones (págs. 34–35).',
          ejercicios: [
            { t: 'unir', p: 'Une el inglés con el alemán (p. 34).',
              pares: [['the theater', 'das Theater'], ['the choir', 'der Chor'], ['the concert', 'das Konzert'], ['the film', 'der Film'], ['the audience', 'das Publikum'], ['the orchestra', 'das Orchester']],
              why: 'Casi iguales; solo cuida el artículo: der Chor y der Film; el resto das.' },
            op('¿Quién dirige el concierto en el texto de Hamburgo?', 'Philippe Herreweghe', ['Fatih Akın', 'Mozart', 'Collegium Vocale'], 'Philippe Herreweghe dirigiert das Konzert.'),
            op('¿Qué presenta Fatih Akın?', 'su nueva película', ['un concierto de Mozart', 'una obra de teatro', 'un festival de cine'], 'Regisseur Fatih Akın präsentiert dem Publikum seinen neuen Film.'),
            op('¿Desde cuánto cuestan las entradas del festival de teatro?', 'desde 12,50 euros', ['desde 29 euros', 'desde 20 euros', 'son gratis'], 'Tickets gibt es … ab 12,50 Euro.'),
            op('¿A qué hora es el concierto de la orquesta?', 'a las 20:00', ['a las 12:50', 'a las 25:10', 'a las 6:10'], '20:00 Uhr, ab 29 Euro.'),
            { t: 'clasificar', p: 'Estaciones (según la rueda del libro): arrastra cada mes.',
              cajas: [{ etiqueta: 'Frühling', color: 'verde' }, { etiqueta: 'Sommer', color: 'naranja' }, { etiqueta: 'Herbst', color: 'rojo' }, { etiqueta: 'Winter', color: 'azul' }],
              items: [
                { t: 'März', c: 0 }, { t: 'Mai', c: 0 }, { t: 'Juni', c: 1 }, { t: 'August', c: 1 },
                { t: 'September', c: 2 }, { t: 'November', c: 2 }, { t: 'Dezember', c: 3 }, { t: 'Februar', c: 3 }
              ],
              why: 'Frühling: März–Mai · Sommer: Juni–August · Herbst: Sept.–Nov. · Winter: Dez.–Feb.' },
            op('¿Cuál es el mes 9?', 'September', ['Oktober', 'August', 'November'], '1 Januar … 9 September (así lo marca el libro).', { fijo: true }),
            op('¿En qué estación está "im Januar"?', 'im Winter', ['im Sommer', 'im Herbst', 'im Frühling'], 'Dezember–Februar = Winter.', { fijo: true }),
            esc('Escribe: "En verano" (con im)', ['im Sommer', 'Im Sommer'], 'im + estación: im Sommer.'),
            esc('Escribe: "En octubre" (con im)', ['im Oktober', 'Im Oktober'], 'im + mes: im Oktober.'),
            ord('Ordena: En verano nado en el lago.', 'Im Sommer schwimme ich im See.', [], 'Im Sommer en posición 1 → el verbo en 2ª: schwimme ich.'),
            ord('Ordena: En invierno voy al museo.', 'Im Winter gehe ich ins Museum.', [], 'ins = in + das; verbo en 2ª posición.'),
            op('Une: "ins Museum gehen" =', 'ir al museo', ['nadar', 'viajar', 'ir en bici'], 'ins Museum gehen.'),
            op('Une: "reisen" =', 'viajar', ['nadar', 'ir a pie', 'ir al museo'], 'reisen = viajar.'),
            op('Une: "schwimmen" =', 'nadar', ['viajar', 'bailar', 'correr'], 'schwimmen = nadar (sch = "sh").')
          ]
        },

        {
          id: 'n6', dificultad: 'Difícil', titulo: 'Múnich y frases completas',
          descripcion: 'Texto de la p. 36, imperativo y frases del taxi.',
          ejercicios: [
            op('"Der Englische Garten": ¿cuántas hectáreas tiene según el texto?', '375', ['25', '137', '1792'], 'Der Park ist sehr groß: 375 Hektar (confírmalo con la escena 6).'),
            op('¿Qué cifra encaja con "Bauzeit"?', '1969–1972', ['1792', '1901', '3,5'], 'Olympiastadion: Bauzeit 1969–1972.'),
            op('¿Qué encaja con "Das Bad gibt es seit …"?', '1901', ['1969–1972', '3,5', '25'], 'Müller’sches Volksbad seit 1901.'),
            op('"Der Chinesische Turm ist 25 m ___."', 'hoch', ['hoche', 'hohe', 'hochen'], 'Adjetivo con sein: no cambia → hoch.'),
            op('"Der Hafen ___ groß."', 'ist', ['sind', 'bin', 'bist'], 'Der Hafen = singular → ist.', { fijo: true }),
            op('"Die Häuser ___ 400 Jahre alt."', 'sind', ['ist', 'bin', 'seid'], 'Plural → sind.', { fijo: true }),
            op('En el taxi el pasajero pregunta por el río. El taxista responde:', 'Das ist kein See, das ist ein Fluss.', ['Das ist nicht See, das ist Fluss.', 'Das ist keine See, das ist ein Fluss.', 'Das nicht ist ein See.'], 'See = masculino (der See) → kein See.'),
            op('¿Cómo se llama la iglesia que el taxista llama "der Michel"?', 'die Michaeliskirche', ['das Rathaus', 'die Kunsthalle', 'der Bahnhof'], 'Das ist die Michaeliskirche. Wir sagen „der Michel“.'),
            op('Saludo típico del norte de Alemania:', 'Moin', ['Grüezi', 'Grüß Gott', 'Servus'], 'Moin = norte · Grüß Gott = sur/Austria · Grüezi = Suiza.'),
            op('Saludo típico de Suiza:', 'Grüezi', ['Moin', 'Grüß Gott', 'Tschüss'], 'Grüezi = Suiza.'),
            ord('Ordena: Vaya a la izquierda.', 'Gehen Sie links!', [], 'Verbo en posición 1.'),
            ord('Ordena: Siga todo recto hasta la estación.', 'Fahren Sie geradeaus bis zum Bahnhof.', [], '"bis zu" + dem → bis zum (Bahnhof es masculino).'),
            ord('Ordena: Allí está ya el hotel.', 'Da ist auch schon das Hotel.', ['Und'], 'Da ist …: verbo en 2ª posición.'),
            esc('Escribe en alemán: "La torre mide 112 metros de alto."', ['Der Turm ist 112 Meter hoch.', 'Der Turm ist 112 Meter hoch', 'Der Turm ist 112 m hoch.'], 'sein + medida + adjetivo hoch.'),
            esc('Escribe: "¿Es un museo?" (usa Museum)', ['Ist das ein Museum?'], 'das Museum → ein Museum.'),
            { t: 'completar', p: 'Completa la descripción de Hamburgo.',
              partes: ['Das ist ', { ok: ['der'], ops: ['der', 'die', 'das'] }, ' Bahnhof. Das ist ', { ok: ['das'], ops: ['der', 'die', 'das'] }, ' Rathaus. Das ist ', { ok: ['die'], ops: ['der', 'die', 'das'] },
                ' Kunsthalle. Das ist ', { ok: ['kein'], ops: ['kein', 'keine', 'nicht'] }, ' See, das ist ', { ok: ['ein'], ops: ['ein', 'eine', 'einen'] }, ' Fluss.'],
              why: 'der Bahnhof · das Rathaus · die Kunsthalle · kein See (der See) · ein Fluss (der Fluss).' }
          ]
        },

        {
          id: 'n7', dificultad: 'Medio', titulo: 'Vocales largas y cortas',
          descripcion: 'Ejercicio 5 de la p. 31: arrastra cada palabra a vocal larga o corta.',
          ejercicios: [
            { t: 'clasificar', p: 'Vocal A: ¿larga (_) o corta (.)? Pista: vocal + h o sola = larga; delante de 2 consonantes = corta.',
              cajas: [{ etiqueta: 'larga', color: 'azul' }, { etiqueta: 'corta', color: 'naranja' }],
              items: [{ t: 'Jahr', c: 0 }, { t: 'Hafen', c: 0 }, { t: 'fahren', c: 0 }, { t: 'alt', c: 1 }, { t: 'lang', c: 1 }, { t: 'man', c: 1 }],
              why: 'Jahr (h) y fahren (h) = larga; Hafen: Ha- sílaba abierta = larga. alt, lang, man: dos consonantes = corta.' },
            { t: 'clasificar', p: 'Vocal E: ¿larga o corta?',
              cajas: [{ etiqueta: 'larga', color: 'azul' }, { etiqueta: 'corta', color: 'naranja' }],
              items: [{ t: 'zehn', c: 0 }, { t: 'Weg', c: 0 }, { t: 'See', c: 0 }, { t: 'sehr', c: 0 }, { t: 'gern', c: 1 }, { t: 'elf', c: 1 }, { t: 'Herr', c: 1 }],
              why: 'zehn, sehr (h), See (ee), Weg = larga. gern, elf, Herr (rr) = corta.' },
            { t: 'clasificar', p: 'Vocal I: ¿larga o corta?',
              cajas: [{ etiqueta: 'larga', color: 'azul' }, { etiqueta: 'corta', color: 'naranja' }],
              items: [{ t: 'sieben', c: 0 }, { t: 'wie', c: 0 }, { t: 'hier', c: 0 }, { t: 'Schiff', c: 1 }, { t: 'Mitte', c: 1 }, { t: 'Kirche', c: 1 }, { t: 'bitte', c: 1 }],
              why: 'ie = i larga: sieben, wie, hier. Doble consonante: Schiff (ff), Mitte (tt), bitte (tt); Kirche (rch) = corta.' },
            { t: 'clasificar', p: 'Vocal O y U: ¿larga o corta?',
              cajas: [{ etiqueta: 'larga', color: 'azul' }, { etiqueta: 'corta', color: 'naranja' }],
              items: [{ t: 'hoch', c: 0 }, { t: 'gut', c: 0 }, { t: 'Zug', c: 0 }, { t: 'Buch', c: 0 }, { t: 'Fluss', c: 1 }, { t: 'Turm', c: 1 }, { t: 'Sonntag', c: 1 }, { t: 'von', c: 1 }],
              why: 'hoch, gut, Zug, Buch = larga (una consonante detrás). Fluss (ss), Turm (rm), Sonntag (nnt), von = corta.' },
            op('Regla del libro: delante de una consonante doble (ff, nn, ss…) la vocal es…', 'siempre corta', ['siempre larga', 'a veces muda', 'tónica'], 'Schiff, Fluss: vocal corta.'),
            op('¿Cuál lleva vocal larga?', 'Hafen', ['Schiff', 'Fluss', 'Mitte'], 'Hafen = HAA-fen.'),
            op('¿Cuál lleva vocal corta?', 'Fluss', ['Hafen', 'Jahr', 'See'], 'Fluss: ss doble → vocal corta.'),
            op('Bahn (tren) y Bann (hechizo) se distinguen sobre todo por…', 'la duración de la vocal', ['la r', 'el acento', 'la ü'], 'En alemán la duración de la vocal cambia el significado.')
          ]
        }

      ]
    }
  });
})();
