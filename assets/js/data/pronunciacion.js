/* ============================================================
   data/pronunciacion.js — Alfabeto y sonidos del alemán
   ------------------------------------------------------------
   La escritura fonética sigue la convención de "Alemán para
   Dummies": se lee como si fuera español, y la sílaba tónica
   va en MAYÚSCULAS. Las vocales largas se escriben dobles.
   ============================================================ */

DE.registrarLeccion({
  id: 'pronunciacion',
  titulo: 'Alfabeto y pronunciación',
  icono: 'tipografia',
  grupo: 'Primeros pasos',
  color: 'turquesa',
  resumen: 'Las 26 letras, los Umlaute, la ß y las combinaciones que suenan distinto.',
  vista: 'alfabeto',

  datos: {
    intro: 'Buenas noticias: el alemán se pronuncia casi siempre como se escribe. ' +
           'Una "u" siempre es "u". Aprende estas reglas y podrás leer en voz alta ' +
           'cualquier palabra, aunque no sepas qué significa. En cada tarjeta puedes ' +
           'escuchar dos cosas: el NOMBRE de la letra (como se recita el alfabeto) y ' +
           'una palabra de EJEMPLO que empieza por ella.',

    alfabeto: [
      { glifo: 'A a', son: 'aa',        ej: 'Apfel (manzana)',    hablar: 'Apfel' },
      { glifo: 'B b', son: 'bee',       ej: 'Buch (libro)',       hablar: 'Buch' },
      { glifo: 'C c', son: 'tsee',      ej: 'Computer',           hablar: 'Computer' },
      { glifo: 'D d', son: 'dee',       ej: 'Danke (gracias)',    hablar: 'Danke' },
      { glifo: 'E e', son: 'ee',        ej: 'Eis (helado)',       hablar: 'Eis' },
      { glifo: 'F f', son: 'ef',        ej: 'Frau (mujer)',       hablar: 'Frau' },
      { glifo: 'G g', son: 'guee',      ej: 'gut (bueno)',        hablar: 'gut' },
      { glifo: 'H h', son: 'jaa',       ej: 'Haus (casa)',        hablar: 'Haus' },
      { glifo: 'I i', son: 'ii',        ej: 'Insel (isla)',       hablar: 'Insel' },
      { glifo: 'J j', son: 'iot',       ej: 'Jahr (año)',         hablar: 'Jahr' },
      { glifo: 'K k', son: 'kaa',       ej: 'Kind (niño)',        hablar: 'Kind' },
      { glifo: 'L l', son: 'el',        ej: 'Liebe (amor)',       hablar: 'Liebe' },
      { glifo: 'M m', son: 'em',        ej: 'Mann (hombre)',      hablar: 'Mann' },
      { glifo: 'N n', son: 'en',        ej: 'Nacht (noche)',      hablar: 'Nacht' },
      { glifo: 'O o', son: 'oo',        ej: 'Obst (fruta)',       hablar: 'Obst' },
      { glifo: 'P p', son: 'pee',       ej: 'Pause (pausa)',      hablar: 'Pause' },
      { glifo: 'Q q', son: 'kuu',       ej: 'Quelle (fuente)',    hablar: 'Quelle' },
      { glifo: 'R r', son: 'er',        ej: 'rot (rojo)',         hablar: 'rot' },
      { glifo: 'S s', son: 'es',        ej: 'Sonne (sol)',        hablar: 'Sonne' },
      { glifo: 'T t', son: 'tee',       ej: 'Tag (día)',          hablar: 'Tag' },
      { glifo: 'U u', son: 'uu',        ej: 'Uhr (reloj)',        hablar: 'Uhr' },
      { glifo: 'V v', son: 'fau',       ej: 'Vater (padre)',      hablar: 'Vater' },
      { glifo: 'W w', son: 'vee',       ej: 'Wasser (agua)',      hablar: 'Wasser' },
      { glifo: 'X x', son: 'iks',       ej: 'Taxi',               hablar: 'Taxi' },
      { glifo: 'Y y', son: 'IUP-si-lon', ej: 'Yoga',              hablar: 'Yoga', letra: 'Ypsilon' },
      { glifo: 'Z z', son: 'tset',      ej: 'Zeit (tiempo)',      hablar: 'Zeit' }
    ],

    especiales: [
      { glifo: 'Ä ä', son: 'ae',     ej: 'Äpfel (manzanas)', hablar: 'Äpfel' },
      { glifo: 'Ö ö', son: 'oe',     ej: 'Öl (aceite)',      hablar: 'Öl' },
      { glifo: 'Ü ü', son: 'iu',     ej: 'Übung (ejercicio)', hablar: 'Übung' },
      { glifo: 'ß',   son: 'es-TSET', ej: 'Fuß (pie)',        hablar: 'Fuß', letra: 'Eszett' }
    ],

    /* Se dibuja con el mismo motor que las demás láminas. */
    infografia: {
      titulo: 'Suena el alemán',
      subtitulo: 'Aussprache',
      cinta: 'Se lee como se escribe',
      resumen: 'Seis reglas y ya lees en voz alta cualquier palabra alemana.',

      tarjetas: [
        {
          n: 1, color: 'morado', icono: 'idea', titulo: 'Vocales largas y cortas',
          bloques: [
            { tipo: 'texto', texto: 'La vocal es LARGA (se arrastra) cuando va seguida de "h", de una sola consonante, o cuando está doblada. Es CORTA cuando le siguen dos o más consonantes.' },
            { tipo: 'ejemplos', items: [
              { de: 'Stahl', fon: 'shtaal', es: 'acero — larga por la h' },
              { de: 'Tag', fon: 'taac', es: 'día — larga, una sola consonante' },
              { de: 'Aal', fon: 'aal', es: 'anguila — larga, vocal doble' },
              { de: 'Tanne', fon: 'TAN-ne', es: 'abeto — corta, dos consonantes' }
            ]},
            { tipo: 'aviso', icono: 'alerta', texto: 'En español no existen las vocales largas: alárgalas de verdad, cambian el significado (Stadt = ciudad / Staat = Estado).' }
          ]
        },
        {
          n: 2, color: 'verde', icono: 'diana', titulo: 'Los Umlaute: ä, ö, ü',
          bloques: [
            { tipo: 'tabla', encabezados: ['Letra', 'Suena', 'Como en'], filas: [
              ['ä', 'ae', 'caer'],
              ['ö', 'oe', 'bohemio'],
              ['ü', 'iu', 'diurno']
            ]},
            { tipo: 'ejemplos', items: [
              { de: 'nächste', fon: 'NAEJS-te', es: 'próximo' },
              { de: 'hören', fon: 'JOE-ren', es: 'oír' },
              { de: 'Tür', fon: 'tiur', es: 'puerta' }
            ]},
            { tipo: 'aviso', icono: 'estrella', texto: 'Truco: para la ü pon los labios como para decir "u" y di "i" sin moverlos.' }
          ]
        },
        {
          n: 3, color: 'azul', icono: 'enlace', titulo: 'Diptongos',
          bloques: [
            { tipo: 'tabla', encabezados: ['Escrito', 'Suena', 'Ejemplo'], filas: [
              ['ei', 'ai', { de: 'mein' }],
              ['ie', 'ii', { de: 'Liebe' }],
              ['eu / äu', 'oi', { de: 'Leute' }],
              ['au', 'au', { de: 'laut' }],
              ['ai', 'ai', { de: 'Mais' }]
            ]},
            { tipo: 'aviso', icono: 'alerta', texto: 'El error nº1 de los hispanohablantes: "ei" suena AI y "ie" suena II. Truco: se pronuncia la SEGUNDA letra. Bier = biir, nein = nain.' }
          ]
        },
        {
          n: 4, color: 'naranja', icono: 'mensaje', titulo: 'Consonantes que cambian',
          bloques: [
            { tipo: 'tabla', encabezados: ['Letra', 'Suena', 'Ejemplo'], filas: [
              ['v', 'f', { de: 'Vater' }],
              ['w', 'v', { de: 'Wasser' }],
              ['z', 'ts', { de: 'Zeit' }],
              ['j', 'i', { de: 'ja' }],
              ['h', 'j suave', { de: 'Haus' }],
              ['s + vocal', 's sonora', { de: 'Sonne' }],
              ['qu', 'cv', { de: 'Quelle' }],
              ['g final', 'c', { de: 'Tag' }]
            ]}
          ]
        },
        {
          n: 5, color: 'rosa', icono: 'auriculares', titulo: 'sch, ch, sp, st, tz',
          bloques: [
            { tipo: 'tabla', encabezados: ['Grupo', 'Suena', 'Ejemplo'], filas: [
              ['sch', 'sh (chsss)', { de: 'Tisch' }],
              ['ch', 'j', { de: 'ich' }],
              ['sp- inicial', 'shp', { de: 'spät' }],
              ['st- inicial', 'sht', { de: 'Stadt' }],
              ['tsch', 'ch', { de: 'Deutsch' }],
              ['tz / ck', 'ts / c', { de: 'Katze' }]
            ]},
            { tipo: 'aviso', icono: 'idea', texto: 'La "ch" tras a, o, u suena gutural (como la "j" de "jarra"): Buch. Tras i, e o consonante suena suave, casi como una "sh" susurrada: ich.' }
          ]
        },
        {
          n: 6, color: 'turquesa', icono: 'ubicacion', titulo: 'La ß y la r alemana',
          bloques: [
            { tipo: 'lista', estilo: 'estrella', items: [
              'ß (Eszett) = "s" fuerte. Va detrás de vocal LARGA: Fuß.',
              'Detrás de vocal corta se escribe "ss": Fass.',
              'En Suiza nunca se usa ß, siempre "ss".',
              'La r NO vibra: se produce en la garganta, casi como una "g" suave francesa.',
              'Las terminaciones -er y -ur suenan "ea" y "ua": Mutter = MUT-tea.'
            ]},
            { tipo: 'ejemplos', items: [
              { de: 'Fuß', fon: 'fuus', es: 'pie' },
              { de: 'Mutter', fon: 'MUT-tea', es: 'madre' },
              { de: 'rot', fon: 'root', es: 'rojo' }
            ]}
          ]
        },
        {
          n: 7, color: 'indigo', icono: 'musica', titulo: 'Acento y ritmo',
          bloques: [
            { tipo: 'lista', estilo: 'corazon', items: [
              'La mayoría de palabras alemanas acentúan la PRIMERA sílaba: ARbeiten, LEHrerin.',
              'Los verbos con prefijo separable acentúan el prefijo: AUFstehen.',
              'Los verbos con prefijo inseparable acentúan la raíz: verSTEhen.',
              'Los préstamos extranjeros conservan su acento: Restaurant, Computer.'
            ]},
            { tipo: 'aviso', icono: 'estrella', texto: 'En esta guía la sílaba tónica va en MAYÚSCULAS dentro de los paréntesis fonéticos.' }
          ]
        },
        {
          n: 8, color: 'rojo', icono: 'checkCirculo', titulo: 'Practica en voz alta',
          bloques: [
            { tipo: 'texto', texto: 'Trabalenguas cortos para calentar la boca. Escúchalos y repítelos tres veces.' },
            { tipo: 'ejemplos', items: [
              { de: 'Fischers Fritz fischt frische Fische.', es: 'Fritz el pescador pesca peces frescos.' },
              { de: 'Zehn zahme Ziegen ziehen zehn Zentner Zucker.', es: 'Diez cabras mansas tiran diez quintales de azúcar.' },
              { de: 'Blaukraut bleibt Blaukraut.', es: 'La lombarda sigue siendo lombarda.' }
            ]}
          ]
        }
      ]
    }
  }
});
