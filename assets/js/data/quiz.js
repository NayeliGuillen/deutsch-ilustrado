/* ============================================================
   data/quiz.js — Banco de preguntas + lección de práctica
   ------------------------------------------------------------
   `correcta` es el índice (0-based) dentro de `opciones`.
   ============================================================ */

DE.registrarLeccion({
  id: 'practica',
  titulo: 'Practicar',
  icono: 'jugar',
  grupo: 'Practicar',
  color: 'rojo',
  resumen: 'Flashcards con audio y un quiz que baraja preguntas de toda la guía.',
  vista: 'practica',

  datos: {
    intro: 'Aquí se consolida todo. Las flashcards usan tu vocabulario (y las palabras que marques ' +
           'como favoritas); el quiz mezcla 10 preguntas al azar de todas las lecciones.',

    preguntasPorRonda: 10,

    preguntas: [
      { pregunta: '¿Qué artículo lleva "Buch" (libro)?',
        opciones: ['der', 'die', 'das'], correcta: 2,
        explicacion: 'das Buch. Y su plural es "die Bücher" (con Umlaut).' },

      { pregunta: '¿Qué artículo lleva "Blume" (flor)?',
        opciones: ['der', 'die', 'das'], correcta: 1,
        explicacion: 'die Blume. Casi todas las flores son femeninas.' },

      { pregunta: 'Las palabras acabadas en -ung son…',
        opciones: ['masculinas (der)', 'femeninas (die)', 'neutras (das)'], correcta: 1,
        explicacion: 'die Zeitung, die Wohnung, die Prüfung. Regla muy fiable.' },

      { pregunta: 'Los diminutivos en -chen son…',
        opciones: ['neutros (das)', 'femeninos (die)', 'depende de la palabra'], correcta: 0,
        explicacion: 'das Mädchen, das Brötchen. Por eso "la chica" es neutro en alemán.' },

      { pregunta: 'Completa: "Ich sehe ___ Mann."',
        opciones: ['der', 'den', 'dem'], correcta: 1,
        explicacion: 'Acusativo masculino: der → den. "sehen" pide objeto directo.' },

      { pregunta: 'Completa: "Ich helfe ___ Kind."',
        opciones: ['das', 'den', 'dem'], correcta: 2,
        explicacion: '"helfen" es uno de los verbos que SIEMPRE piden dativo: dem Kind.' },

      { pregunta: '¿Cuál es la pregunta del caso dativo?',
        opciones: ['Wer?', 'Wen?', 'Wem?'], correcta: 2,
        explicacion: 'Wer? = nominativo, Wen? = acusativo, Wem? = dativo, Wessen? = genitivo.' },

      { pregunta: 'Las preposiciones "durch, für, gegen, ohne, um" rigen…',
        opciones: ['acusativo', 'dativo', 'genitivo'], correcta: 0,
        explicacion: 'Siempre acusativo: für dich, ohne mich, um den Tisch.' },

      { pregunta: '"Ich gehe in ___ Schule" (movimiento) es…',
        opciones: ['der Schule', 'die Schule', 'den Schule'], correcta: 1,
        explicacion: 'Con movimiento (Wohin?), las preposiciones mixtas piden acusativo: in die Schule.' },

      { pregunta: 'Conjuga "lernen" con "du":',
        opciones: ['du lerne', 'du lernst', 'du lernt'], correcta: 1,
        explicacion: 'Raíz lern- + terminación -st = lernst.' },

      { pregunta: 'Conjuga "arbeiten" con "du":',
        opciones: ['du arbeitst', 'du arbeitest', 'du arbeitet'], correcta: 1,
        explicacion: 'La raíz acaba en -t, así que se añade una "e" de apoyo: du arbeitest.' },

      { pregunta: '¿Cuál es la forma correcta de "sein" con "ihr"?',
        opciones: ['ihr sind', 'ihr seid', 'ihr bist'], correcta: 1,
        explicacion: 'ich bin, du bist, er ist, wir sind, ihr seid, sie sind.' },

      { pregunta: '"aufstehen" en presente con "ich" es…',
        opciones: ['ich aufstehe', 'ich stehe auf', 'ich stehe aufe'], correcta: 1,
        explicacion: 'Es separable: el prefijo "auf" se va al final de la frase.' },

      { pregunta: '¿Cuál de estos prefijos NUNCA se separa?',
        opciones: ['auf-', 'mit-', 'ver-'], correcta: 2,
        explicacion: 'Los inseparables son be-, emp-, ent-, er-, ge-, ver-, zer-.' },

      { pregunta: 'El participio de "verstehen" es…',
        opciones: ['geverstanden', 'verstanden', 'verstehgt'], correcta: 1,
        explicacion: 'Los verbos con prefijo inseparable NO llevan "ge-" en el participio.' },

      { pregunta: 'El participio de "aufstehen" es…',
        opciones: ['aufgestanden', 'geaufstanden', 'aufstehen'], correcta: 0,
        explicacion: 'En los separables, el "ge-" se coloca EN MEDIO: auf + ge + standen.' },

      { pregunta: 'En una frase declarativa, el verbo conjugado va…',
        opciones: ['en primera posición', 'en segunda posición', 'al final'], correcta: 1,
        explicacion: 'Regla de oro del alemán: el verbo conjugado ocupa siempre el 2º lugar.' },

      { pregunta: '¿Cómo se dice 47 en alemán?',
        opciones: ['vierzigsieben', 'siebenundvierzig', 'siebzigvier'], correcta: 1,
        explicacion: 'Primero la unidad, luego "und" y luego la decena, todo junto.' },

      { pregunta: '"halb vier" significa…',
        opciones: ['las 4:30', 'las 3:30', 'las 4:15'], correcta: 1,
        explicacion: 'Se cuenta hacia la hora siguiente: media camino de las cuatro = 3:30.' },

      { pregunta: 'El ordinal de "drei" es…',
        opciones: ['dreite', 'dritte', 'dreiste'], correcta: 1,
        explicacion: 'Irregular: erste, dritte, siebte y achte se salen de la regla.' },

      { pregunta: 'Completa: "Das ist ___ Auto." (un coche nuevo, neutro)',
        opciones: ['ein neu Auto', 'ein neues Auto', 'ein neuer Auto'], correcta: 1,
        explicacion: 'Tras "ein" el adjetivo lleva la marca de neutro: -es.' },

      { pregunta: '¿Cómo se dice "más rápido que"?',
        opciones: ['schneller als', 'schneller wie', 'mehr schnell als'], correcta: 0,
        explicacion: 'Comparativo con "als". "wie" solo se usa en "so … wie" (tan… como).' },

      { pregunta: 'El superlativo de "gut" es…',
        opciones: ['am gutsten', 'am besten', 'am mehr gut'], correcta: 1,
        explicacion: 'Irregular: gut → besser → am besten.' },

      { pregunta: '¿Cómo suena la combinación "ei" en "mein"?',
        opciones: ['ei', 'ai', 'ii'], correcta: 1,
        explicacion: 'Se pronuncia la SEGUNDA letra: ei = "ai", ie = "ii".' },

      { pregunta: '¿Cómo suena la "w" en "Wasser"?',
        opciones: ['como una v española', 'como una u', 'muda'], correcta: 0,
        explicacion: 'La w alemana suena "v" (labiodental) y la v suena "f".' },

      { pregunta: 'La ß se usa después de…',
        opciones: ['vocal corta', 'vocal larga', 'cualquier consonante'], correcta: 1,
        explicacion: 'Tras vocal larga: Fuß. Tras vocal corta se escribe "ss": Fass.' },

      { pregunta: '¿Qué significa "Wie geht es dir?"',
        opciones: ['¿Cómo te llamas?', '¿Cómo estás?', '¿A dónde vas?'], correcta: 1,
        explicacion: 'Literalmente "¿cómo te va?". Respuesta típica: Mir geht es gut, danke.' },

      { pregunta: '"Die Rechnung, bitte" se usa para…',
        opciones: ['pedir la cuenta', 'pedir la carta', 'pedir ayuda'], correcta: 0,
        explicacion: 'die Rechnung = la cuenta. La carta es "die Speisekarte".' },

      { pregunta: '¿Qué significa "Entschuldigung"?',
        opciones: ['Gracias', 'Perdón / disculpe', 'De nada'], correcta: 1,
        explicacion: 'Sirve tanto para disculparse como para llamar la atención de alguien.' },

      { pregunta: 'En el plural dativo, el sustantivo añade…',
        opciones: ['-n', '-s', 'nada'], correcta: 0,
        explicacion: 'mit den Kindern, mit den Freunden. Salvo si ya acaba en -n o -s.' }
    ]
  }
});
