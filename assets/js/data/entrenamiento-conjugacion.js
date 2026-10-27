/* ============================================================
   data/entrenamiento-conjugacion.js — Entrenamiento: conjugación
   ------------------------------------------------------------
   Siete niveles. Los automáticos se generan al azar con los
   verbos de "Verbos nuevos y conjugación" (formas siempre
   correctas); los manuales practican oraciones.
   ============================================================ */

(function () {
  'use strict';

  var regular = function (p) { return p.clase === 'regular'; };
  var cambio = function (p) {
    return p.clase === 'irregular' && p.irr && (p.irr.indexOf(1) > -1 || p.irr.indexOf(2) > -1) &&
      ['sein', 'haben', 'wissen'].indexOf(p.de) === -1;
  };
  var base = function (p) { return ['sein', 'haben', 'wissen'].indexOf(p.de) > -1 || p.clase === 'modal'; };
  var sinSep = function (p) { return p.clase !== 'separable'; };

  function elige(p, ops, ok, why) {
    return { t: 'opcion', fijo: false, p: p, ops: ops, ok: ops.indexOf(ok), why: why };
  }

  function ordenar(es, de, extra, why) {
    return { t: 'ordenar', p: es, ok: de, extra: extra || [], why: why };
  }

  DE.registrarLeccion({
    id: 'entrena-conjugacion',
    titulo: 'Entrenamiento: conjugación',
    icono: 'jugar',
    grupo: 'Verbos',
    color: 'verde',
    resumen: 'Siete niveles: de las terminaciones regulares a tablas completas y oraciones con separables y modales.',
    vista: 'entrenador',

    datos: {
      intro: 'Los ejercicios con verbo se generan al azar: cada vez que repites un nivel salen verbos y personas distintos. ' +
             'Supera cada nivel con 90 % o más a la primera.',

      niveles: [

        {
          id: 'n1', dificultad: 'Fácil', titulo: 'Terminaciones regulares',
          descripcion: 'Elige la forma correcta del verbo regular.',
          ejercicios: [
            elige('Ich ___ in Köln. (wohnen)', ['wohne', 'wohnst', 'wohnt', 'wohnen'], 'wohne', 'ich → -e: ich wohne.'),
            elige('Du ___ Deutsch. (lernen)', ['lerne', 'lernst', 'lernt', 'lernen'], 'lernst', 'du → -st: du lernst.'),
            elige('Sie ___ Kaffee. (trinken) [ella]', ['trinke', 'trinkst', 'trinkt', 'trinken'], 'trinkt', 'er/es/sie → -t.'),
            elige('Wir ___ Fußball. (spielen)', ['spiele', 'spielst', 'spielt', 'spielen'], 'spielen', 'wir → -en (igual que el infinitivo).'),
            elige('Ihr ___ gern. (tanzen)', ['tanze', 'tanzt', 'tanzen', 'tanzest'], 'tanzt', 'ihr → -t. Raíz en z: no lleva e extra.'),
            elige('Sie ___ in Berlin. (arbeiten) [ellos]', ['arbeite', 'arbeitst', 'arbeitet', 'arbeiten'], 'arbeiten', 'sie (ellos) → -en.')
          ],
          auto: { tipo: 'conj-opcion', n: 8, filtro: regular }
        },

        {
          id: 'n2', dificultad: 'Básico', titulo: 'Escribe la forma',
          descripcion: 'Teclea la forma conjugada. Cuidado con las raíces en t, d, s, ß y z.',
          ejercicios: [
            { t: 'clasificar', p: 'Clasifica cada verbo: ¿regular o irregular?',
              cajas: [{ etiqueta: 'regular', color: 'verde' }, { etiqueta: 'irregular', color: 'rojo' }],
              items: [
                { t: 'machen', c: 0 }, { t: 'lernen', c: 0 }, { t: 'wohnen', c: 0 }, { t: 'kochen', c: 0 },
                { t: 'sprechen', c: 1 }, { t: 'fahren', c: 1 }, { t: 'essen', c: 1 }, { t: 'lesen', c: 1 }
              ],
              why: 'Regulares: la raíz no cambia. Irregulares: cambian la vocal de la raíz en du y er (sprechen→spricht, fahren→fährt, essen→isst, lesen→liest).' }
          ],
          auto: { tipo: 'conj-escribir', n: 10, filtro: regular }
        },

        {
          id: 'n3', dificultad: 'Medio', titulo: 'Cambio de vocal',
          descripcion: 'e→i, e→ie, a→ä: solo en du y er/es/sie.',
          ejercicios: [
            { t: 'unir', p: 'Une el verbo con su forma de er/sie.',
              pares: [['sprechen', 'spricht'], ['fahren', 'fährt'], ['lesen', 'liest'], ['nehmen', 'nimmt'], ['schlafen', 'schläft']],
              why: 'e→i: spricht, nimmt · e→ie: liest · a→ä: fährt, schläft.' },
            elige('Ich ___ Deutsch. (sprechen)', ['spreche', 'sprichst', 'spricht', 'sprechen'], 'spreche', 'ich NO cambia la vocal: ich spreche.'),
            elige('Er ___ viel. (lesen)', ['lest', 'liest', 'lesst', 'lieset'], 'liest', 'e→ie en er: liest.')
          ],
          auto: { tipo: 'conj-escribir', n: 10, filtro: cambio }
        },

        {
          id: 'n4', dificultad: 'Medio', titulo: 'sein, haben y modales',
          descripcion: 'Los verbos que más se usan y los que más se confunden.',
          ejercicios: [
            elige('Ich ___ müde. (sein)', ['bin', 'bist', 'ist', 'habe'], 'bin', 'ich bin.'),
            elige('Wir ___ Hunger. (haben)', ['haben', 'sind', 'habt', 'hat'], 'haben', 'wir haben.'),
            elige('Ich ___ 20 Jahre alt. (sein)', ['bin', 'habe', 'werde', 'mache'], 'bin', 'En alemán la edad se dice con sein: ich bin 20 Jahre alt (no "ich habe").')
          ],
          auto: { tipo: 'conj-escribir', n: 12, filtro: base }
        },

        {
          id: 'n5', dificultad: 'Difícil', titulo: 'Frases con hueco',
          descripcion: 'Completa la oración con la forma correcta del verbo.',
          ejercicios: [
            { t: 'completar', p: 'Completa el diálogo con la forma correcta de heißen, sein y kommen.',
              partes: ['A: Wie ', { ok: ['heißt'], ancho: 8 }, ' du?\nB: Ich ', { ok: ['heiße'], ancho: 8 },
                ' Nayeli.\nA: ', { ok: ['Bist'], ancho: 6 }, ' du aus Spanien?\nB: Nein, ich ', { ok: ['komme'], ancho: 8 }, ' aus Honduras.'],
              sinMayus: true,
              why: 'wie heißt du / ich heiße (ß: du heißt) · bist du / ich komme.' }
          ],
          auto: { tipo: 'conj-frase', n: 10, filtro: sinSep }
        },

        {
          id: 'n6', dificultad: 'Difícil', titulo: 'Tablas completas',
          descripcion: 'Conjuga el verbo entero, de ich a sie/Sie.',
          ejercicios: [],
          auto: { tipo: 'conj-tabla', n: 6, filtro: sinSep }
        },

        {
          id: 'n7', dificultad: 'Experto', titulo: 'Oraciones completas',
          descripcion: 'Ordena oraciones con separables, modales y pregunta. Recuerda: el verbo, en 2ª posición.',
          ejercicios: [
            ordenar('Me levanto a las siete.', 'Ich stehe um sieben Uhr auf.', ['aufstehe', 'auf stehe'], 'Separable: el prefijo auf va al final.'),
            ordenar('El tren llega a las ocho.', 'Der Zug kommt um acht Uhr an.', ['ankommt', 'ab'], 'ankommen → kommt … an.'),
            ordenar('Hoy hacemos las compras.', 'Heute kaufen wir ein.', ['einkaufen', 'wir kaufen'], 'Con "heute" delante, el verbo sigue en 2ª posición y wir pasa detrás.'),
            ordenar('Tengo que trabajar.', 'Ich muss arbeiten.', ['arbeite', 'musst'], 'Modal conjugado en 2ª; el otro verbo en infinitivo al final.'),
            ordenar('¿Puedes ayudarme?', 'Kannst du mir helfen?', ['hilfst', 'kann'], 'Pregunta sí/no: el verbo conjugado va primero.'),
            ordenar('Ella lee un libro.', 'Sie liest ein Buch.', ['lesen', 'lest'], 'lesen: e→ie en er/sie: liest.'),
            ordenar('Quisiera un café.', 'Ich möchte einen Kaffee.', ['möchten', 'ein'], 'möchte: ich y er sin terminación. Café = der → einen.'),
            { t: 'escribir', p: 'Escribe en alemán: "Él duerme mucho."', ok: ['Er schläft viel'], why: 'schlafen: a→ä en er: schläft.' },
            { t: 'escribir', p: 'Escribe en alemán: "Nosotros vamos al cine."', ok: ['Wir gehen ins Kino'], why: 'wir gehen (igual que el infinitivo); ins = in + das.' }
          ],
          auto: { tipo: 'conj-escribir', n: 6, filtro: function (p) { return p.clase !== 'modal'; } }
        }
      ]
    }
  });
})();
