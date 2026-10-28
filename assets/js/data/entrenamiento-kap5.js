/* ============================================================
   data/entrenamiento-kap5.js — Entrenamiento del capítulo 5
   ------------------------------------------------------------
   El día de Kaan, verbos con cambio de vocal, in + Akkusativ
   y la hora (págs. 54–56). Seis niveles; 90 % o más.
   ============================================================ */

(function () {
  'use strict';

  function op(p, ok, otros, why, extra) {
    var e = { t: 'opcion', p: p, ops: [ok].concat(otros), ok: 0, why: why };
    if (extra) for (var k in extra) e[k] = extra[k];
    return e;
  }
  function sig(de, es, otros, visual) {
    return op('¿Qué significa "' + de + '"?', es, otros, de + ' = ' + es + '.', { visual: visual, audio: de });
  }
  function esc(p, ok, why) { return { t: 'escribir', p: p, ok: ok, why: why }; }
  function ord(p, de, extra, why) { return { t: 'ordenar', p: p, ok: de, extra: extra || [], why: why }; }

  DE.registrarLeccion({
    id: 'k5-entrenamiento',
    titulo: 'Kap. 5 · Entrenamiento',
    icono: 'jugar',
    grupo: 'Libro · Kapitel 5',
    color: 'morado',
    resumen: 'Doce niveles que se abren de uno en uno: rutina diaria, verbos con cambio de vocal, in + Akkusativ, la hora, Wann? – Um … y práctica ilimitada.',
    vista: 'entrenador',

    datos: {
      intro: 'Ejercicios sobre lo visto en las págs. 54–56. Los niveles de hora usan relojes al azar, así que cada intento es distinto. ' +
             'Supera cada nivel con 90 % o más a la primera.',

      niveles: [

        {
          id: 'n1', dificultad: 'Fácil', titulo: 'El día de Kaan',
          descripcion: 'Las siete frases del ejercicio 1a y los verbos clave.',
          auto: { tipo: 'mixto', n: 6, mezcla: [{ tipo: 'v-traducir', n: 6, fuente: ['k5-vocabulario'], categorias: ['tag'] }] },
          ejercicios: [
            sig('duschen', 'ducharse', ['desayunar', 'estudiar', 'dormir'], 'ducha'),
            sig('frühstücken', 'desayunar', ['cenar', 'cocinar', 'ducharse'], 'pan'),
            sig('lesen', 'leer', ['escribir', 'comer', 'correr'], 'libro'),
            sig('fahren', 'ir en vehículo', ['caminar', 'volar', 'nadar'], 'bici'),
            sig('lernen', 'estudiar, aprender', ['trabajar', 'enseñar', 'leer'], 'libro'),
            sig('besuchen', 'visitar', ['ayudar', 'buscar', 'comprar'], 'abuela'),
            sig('treffen', 'encontrarse con', ['mirar', 'tocar', 'invitar'], 'personas'),
            sig('die Nachrichten', 'las noticias', ['los mensajes', 'los trenes', 'las cartas'], 'periodico'),
            sig('die Oma', 'la abuela', ['la tía', 'la madre', 'la hermana'], 'abuela'),
            sig('die Bibliothek', 'la biblioteca', ['la librería', 'la escuela', 'la mensa'], 'libro'),
            sig('die Mensa', 'el comedor universitario', ['la biblioteca', 'la oficina', 'el supermercado'], 'plato'),
            sig('lange schlafen', 'dormir hasta tarde', ['dormir poco', 'acostarse', 'despertarse'], 'dormir'),
            { t: 'unir', p: 'Une cada frase del libro con su significado.',
              pares: [['Kaan geht in die Mensa.', 'Kaan va a la mensa.'], ['Kaan trifft Marie.', 'Kaan se encuentra con Marie.'], ['Er fährt in die Uni.', 'Él va a la universidad.'],
                ['Kaan duscht.', 'Kaan se ducha.'], ['Er lernt in der Bibliothek.', 'Él estudia en la biblioteca.'], ['Er besucht seine Oma.', 'Él visita a su abuela.']],
              why: 'Las frases 1a de la p. 54.' },
            { t: 'unir', p: 'Une cada foto del libro (A–G) con la frase.',
              pares: [['A · té y pastel con una señora', 'Er besucht seine Oma.'], ['B · mostrador de la mensa', 'Kaan geht in die Mensa.'], ['C · móvil y fruta en la mesa', 'Kaan frühstückt und liest Nachrichten.'],
                ['D · en un café con una chica', 'Kaan trifft Marie.'], ['E · una ducha', 'Kaan duscht.'], ['F · en bici por la calle', 'Er fährt in die Uni.'], ['G · ordenador y libro', 'Er lernt in der Bibliothek.']],
              why: 'Según las fotos de las págs. 54–55.' }
          ]
        },

        {
          id: 'n2', dificultad: 'Básico', titulo: 'El domingo de Kaan',
          descripcion: 'Las actividades del ejercicio 2a.',
          auto: { tipo: 'mixto', n: 7, mezcla: [{ tipo: 'v-frase-es', n: 4, fuente: ['k5-vocabulario'] }, { tipo: 'v-traducir', n: 3, fuente: ['k5-vocabulario'], categorias: ['sonntag', 'orte'] }] },
          ejercicios: [
            { t: 'unir', p: 'Une las actividades del domingo con su significado.',
              pares: [['Zeitung lesen', 'leer el periódico'], ['lange schlafen', 'dormir hasta tarde'], ['Fußball spielen', 'jugar al fútbol'], ['Freunde treffen', 'quedar con amigos'],
                ['Pizza essen', 'comer pizza'], ['ins Kino gehen', 'ir al cine']],
              why: 'Actividades del cuadro de la p. 54.' },
            { t: 'unir', p: 'Une más actividades.',
              pares: [['Oma besuchen', 'visitar a la abuela'], ['Marie treffen', 'quedar con Marie'], ['in den Supermarkt gehen', 'ir al supermercado'], ['am Computer arbeiten', 'trabajar en el ordenador'],
                ['mit der Familie zu Mittag essen', 'almorzar con la familia'], ['lernen', 'estudiar']],
              why: 'Las otras seis del cuadro.' },
            op('"Am Sonntag schläft Kaan lange." significa…', 'El domingo Kaan duerme hasta tarde.', ['El domingo Kaan se acuesta temprano.', 'Kaan duerme poco los domingos.', 'Kaan trabaja el domingo.'], 'schlafen = dormir; lange = mucho tiempo.'),
            ord('Ordena: El domingo Kaan duerme hasta tarde.', 'Am Sonntag schläft Kaan lange.', [], 'Am Sonntag (pos. 1) + schläft (pos. 2) + Kaan.'),
            ord('Ordena: Luego desayuna y lee noticias.', 'Dann frühstückt er und liest Nachrichten.', [], 'Dann (1) + frühstückt (2) + er.'),
            ord('Ordena: Por la mañana Kaan se ducha.', 'Am Morgen duscht Kaan.', [], 'Modelo del libro: Am Morgen duscht Kaan.'),
            ord('Ordena: Por la mañana bebo un café.', 'Morgens trinke ich einen Kaffee.', [], 'Morgens (1) + trinke (2) + ich.'),
            ord('Ordena: Mi sábado es genial.', 'Mein Samstag ist super.', [], 'Frase del libro (3b).'),
            esc('Escribe: "Kaan se ducha."', ['Kaan duscht.', 'Kaan duscht'], 'er/sie: duscht.'),
            esc('Escribe: "Kaan se encuentra con Marie."', ['Kaan trifft Marie.', 'Kaan trifft Marie'], 'treffen → trifft.'),
            op('¿Cuál es correcta?', 'Er fährt in die Uni.', ['Er fahrt in die Uni.', 'Er fahren in die Uni.', 'Er fahre in die Uni.'], 'fahren: er fährt (a → ä).')
          ]
        },

        {
          id: 'n3', dificultad: 'Medio', titulo: 'Cambio de vocal: fahren, lesen, treffen, schlafen',
          descripcion: 'du y er/sie/es cambian la vocal.',
          auto: { tipo: 'mixto', n: 6, mezcla: [{ tipo: 'v-completar', n: 3, fuente: ['k5-vocabulario'] }, { tipo: 'v-articulo', n: 3, fuente: ['k5-vocabulario'] }] },
          ejercicios: [
            op('fahren: du ___', 'fährst', ['fahrst', 'fahrt', 'fahren'], 'a → ä en du y er.', { fijo: true }),
            op('fahren: er ___', 'fährt', ['fahrt', 'fährst', 'fahre'], 'er fährt.', { fijo: true }),
            op('lesen: du ___', 'liest', ['lest', 'lesst', 'lesen'], 'e → ie: du liest.', { fijo: true }),
            op('lesen: er ___', 'liest', ['lest', 'lesst', 'lesen'], 'er liest.', { fijo: true }),
            op('lesen: ihr ___', 'lest', ['liest', 'lesen', 'lese'], 'ihr lest (sin cambio).', { fijo: true }),
            op('treffen: er ___', 'trifft', ['treffet', 'triff', 'trefft'], 'e → i: er trifft.', { fijo: true }),
            op('treffen: du ___', 'triffst', ['treffst', 'trifft', 'trefft'], 'du triffst.', { fijo: true }),
            op('schlafen: er ___', 'schläft', ['schlaft', 'schläfst', 'schlafe'], 'a → ä: er schläft.', { fijo: true }),
            op('schlafen: du ___', 'schläfst', ['schlafst', 'schläft', 'schlaft'], 'du schläfst.', { fijo: true }),
            op('schlafen: wir ___', 'schlafen', ['schläfen', 'schläft', 'schlafe'], 'wir schlafen: sin cambio.', { fijo: true }),
            op('duschen: er ___', 'duscht', ['düscht', 'dusht', 'duschet'], 'duschen es regular.', { fijo: true }),
            op('lernen: du ___', 'lernst', ['lernt', 'lernest', 'lernen'], 'regular: du lernst.', { fijo: true }),
            esc('Conjuga: "Kaan (fahren) in die Uni." → er …', ['fährt', 'Fährt'], 'er fährt.'),
            esc('Conjuga: "Kaan (lesen) Nachrichten." → er …', ['liest', 'Liest'], 'er liest.'),
            esc('Conjuga: "Am Sonntag (schlafen) Kaan lange." → …', ['schläft', 'Schläft'], 'er schläft.'),
            { t: 'completar', p: 'Completa con la forma correcta.',
              partes: ['Ich ', { ok: ['fahre'], ops: ['fahre', 'fährst', 'fährt'] }, ' ins Büro. Du ', { ok: ['liest'], ops: ['lese', 'liest', 'lest'] }, ' Nachrichten. Er ',
                { ok: ['trifft'], ops: ['treffe', 'triffst', 'trifft'] }, ' Marie. Wir ', { ok: ['schlafen'], ops: ['schlafen', 'schläft', 'schlaft'] }, ' lange.'],
              why: 'ich fahre · du liest · er trifft · wir schlafen.' }
          ]
        },

        {
          id: 'n4', dificultad: 'Medio', titulo: 'Adónde voy: in die, in den, ins',
          descripcion: 'Dirección (wohin?) con in + Akkusativ.',
          auto: { tipo: 'mixto', n: 4, mezcla: [{ tipo: 'v-ordenar', n: 4, fuente: ['k5-vocabulario'] }] },
          ejercicios: [
            op('"Kaan geht ___ Mensa."', 'in die', ['in den', 'ins', 'in der'], 'die Mensa → in die.', { fijo: true }),
            op('"Er fährt ___ Uni."', 'in die', ['in den', 'ins', 'in der'], 'die Uni → in die.', { fijo: true }),
            op('"Ich gehe ___ Supermarkt."', 'in den', ['in die', 'ins', 'im'], 'der Supermarkt → in den (Akkusativ masculino).', { fijo: true }),
            op('"Wir gehen ___ Kino."', 'ins', ['in die', 'in den', 'im'], 'das Kino → ins (= in das).', { fijo: true }),
            op('"Dann gehe ich ___ Büro."', 'ins', ['in die', 'in den', 'im'], 'das Büro → ins.', { fijo: true }),
            op('"Er lernt ___ Bibliothek." (¡sin movimiento!)', 'in der', ['in die', 'in den', 'ins'], 'Dónde (wo?) = dativo: in der Bibliothek. Adónde (wohin?) = Akkusativ: in die Bibliothek.', { fijo: true }),
            op('"Er arbeitet ___ Büro." (¿dónde?)', 'im', ['ins', 'in den', 'in die'], 'wo? → im Büro (in + dem).', { fijo: true }),
            { t: 'clasificar', p: '¿wo? (dónde) o ¿wohin? (adónde)?',
              cajas: [{ etiqueta: 'wo? (dónde, está)', color: 'azul' }, { etiqueta: 'wohin? (adónde, va)', color: 'naranja' }],
              items: [
                { t: 'Er lernt in der Bibliothek.', c: 0 }, { t: 'Er arbeitet im Büro.', c: 0 }, { t: 'Ich bin im Kino.', c: 0 },
                { t: 'Er geht in die Mensa.', c: 1 }, { t: 'Er fährt in die Uni.', c: 1 }, { t: 'Wir gehen ins Kino.', c: 1 }
              ],
              why: 'Con "gehen/fahren" (movimiento) → wohin: in + Akkusativ. Con lernen/arbeiten/sein (sin movimiento) → wo: in + Dativ (in der / im).' },
            ord('Ordena: Voy al cine.', 'Ich gehe ins Kino.', [], 'ins = in + das.'),
            ord('Ordena: Kaan va a la mensa.', 'Kaan geht in die Mensa.', [], 'Frase del libro.'),
            ord('Ordena: Vamos al supermercado.', 'Wir gehen in den Supermarkt.', [], 'Supermarkt es masculino: in den.'),
            esc('Escribe: "Él estudia en la biblioteca."', ['Er lernt in der Bibliothek.', 'Er lernt in der Bibliothek'], 'wo? → in der Bibliothek.'),
            esc('Escribe: "Ella va a la universidad en bici."', ['Sie fährt mit dem Fahrrad in die Uni.', 'Sie fährt mit dem Fahrrad in die Uni'], 'mit dem Fahrrad (Dativ) + in die Uni.')
          ]
        },

        {
          id: 'n5', dificultad: 'Medio', titulo: 'Leer la hora: Uhr, Viertel, halb',
          descripcion: 'Relojes al azar, hora inoficial y oficial (p. 56).',
          auto: { tipo: 'mixto', n: 14, mezcla: [{ tipo: 'hora-leer', n: 6 }, { tipo: 'hora-reloj', n: 4 }, { tipo: 'hora-oficial', n: 4 }] },
          ejercicios: [
            op('"Viertel vor drei" = …', '2:45', ['3:15', '2:15', '3:45'], 'Viertel vor drei = tres menos cuarto = 2:45.'),
            op('"Viertel nach sieben" = …', '7:15', ['6:45', '7:45', '7:30'], 'Viertel nach = y cuarto.'),
            op('"halb acht" = …', '7:30', ['8:30', '8:00', '7:00'], 'halb acht = media hora hacia las ocho = 7:30.'),
            op('"fünf vor halb acht" = …', '7:25', ['7:35', '7:55', '8:25'], 'cinco antes de la media (7:30) = 7:25.'),
            op('"fünf nach halb acht" = …', '7:35', ['7:25', '8:05', '7:05'], 'cinco después de la media = 7:35.'),
            op('"zwanzig vor acht" = …', '7:40', ['8:20', '7:20', '8:40'], 'vor = antes de: 8:00 − 20 min = 7:40.'),
            op('"zehn nach neun" = …', '9:10', ['8:50', '10:10', '9:50'], 'nach = después de.'),
            op('"fünf vor zwei" = …', '1:55', ['2:05', '1:05', '2:55'], '2:00 − 5 = 1:55.'),
            op('Oficial: 14:45 Uhr se dice…', 'vierzehn Uhr fünfundvierzig', ['vierzig Uhr vierzehn', 'Viertel vor vierzehn', 'zwei Uhr fünfundvierzig'], 'Oficial: hora de 24 h + Uhr + minutos (ejemplo del libro).'),
            op('Inoficial: 14:45 se dice…', 'Viertel vor drei', ['Viertel nach drei', 'dreiviertel zwei', 'drei vor viertel'], 'Es ist Viertel vor drei. (ejemplo del libro)'),
            op('"um dreizehn Uhr zehn" = …', '13:10', ['10:13', '12:10', '1:30'], 'El libro (5b): um 13:10.'),
            esc('Escribe en alemán (inoficial): 7:15', ['Viertel nach sieben', 'viertel nach sieben', 'Es ist Viertel nach sieben', 'Es ist Viertel nach sieben.'], 'Viertel nach sieben.'),
            esc('Escribe en alemán (inoficial): 7:30', ['halb acht', 'Halb acht', 'Es ist halb acht', 'Es ist halb acht.'], 'halb acht.'),
            esc('Escribe en alemán (inoficial): 7:45', ['Viertel vor acht', 'viertel vor acht', 'Es ist Viertel vor acht', 'Es ist Viertel vor acht.'], 'Viertel vor acht.')
          ]
        },

        {
          id: 'n6', dificultad: 'Difícil', titulo: 'Wann? – Um …  y tu día',
          descripcion: 'Preguntas y respuestas con hora y rutina (ejercicios 3 y 6).',
          auto: { tipo: 'mixto', n: 10, mezcla: [{ tipo: 'hora-um', n: 5 }, { tipo: 'hora-escribir', n: 3 }, { tipo: 'hora-convertir', n: 2 }] },
          ejercicios: [
            op('"Wann" significa…', '¿cuándo?', ['¿dónde?', '¿quién?', '¿cómo?'], 'Wann? = ¿cuándo? Wo? = ¿dónde? Wer? = ¿quién?'),
            op('Responder "Wann frühstückst du?"', 'Um Viertel nach sieben.', ['In Viertel nach sieben.', 'Bei sieben Uhr nach.', 'Am Viertel sieben.'], 'Wann? → Um + hora.'),
            op('"Um Viertel vor drei" responde a…', 'Wann?', ['Wo?', 'Wer?', 'Wie?'], 'Wann? → um + hora (ejemplo del libro).'),
            ord('Ordena: ¿Cuándo desayunas?', 'Wann frühstückst du?', [], 'Wann (pos. 1) + frühstückst (pos. 2) + du. Modelo del libro.'),
            ord('Ordena: A las siete y cuarto.', 'Um Viertel nach sieben.', [], 'Respuesta del libro.'),
            ord('Ordena: ¿Cuándo vas a la oficina?', 'Wann fährst du ins Büro?', [], 'Modelo del libro: Wann fährst du ins Büro?'),
            ord('Ordena: Eso no es en el fin de semana.', 'Das ist nicht am Wochenende!', [], 'Respuesta del libro (3a).'),
            esc('Escribe: "¿Cuándo estudias?" (lernen, tú)', ['Wann lernst du?', 'Wann lernst du'], 'Wann + lernst + du.'),
            esc('Escribe: "A las ocho." (inoficial)', ['Um acht Uhr.', 'Um acht.', 'Um acht Uhr', 'Um acht'], 'Um + hora.'),
            esc('Escribe: "A las siete y media." (inoficial, con halb)', ['Um halb acht.', 'Um halb acht', 'um halb acht'], 'halb acht = 7:30.'),
            { t: 'completar', p: 'Completa con Wann / Um / Wie.',
              partes: [{ ok: ['Wann'], ops: ['Wann', 'Wo', 'Wer'] }, ' fährst du ins Büro? – ', { ok: ['Um'], ops: ['Um', 'In', 'Am'] }, ' Viertel nach sieben. ', { ok: ['Wie'], ops: ['Wie', 'Wann', 'Wo'] }, ' spät ist es?'],
              why: 'Wann fährst du…? · Um Viertel nach sieben · Wie spät ist es?' }
          ]
        }

      ].concat(DE.nivelesVocab({ fuente: ['k5-vocabulario'], desde: 7, escala: 0.6, nombre: 'del capítulo 5', maestro: 'capítulo 5' }))
    }
  });
})();
