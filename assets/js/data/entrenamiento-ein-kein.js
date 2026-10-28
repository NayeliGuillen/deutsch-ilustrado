/* ============================================================
   data/entrenamiento-ein-kein.js — Entrenamiento: ein, eine, kein, keine
   ------------------------------------------------------------
   Ocho niveles: de elegir entre dos formas a escribir frases
   completas sobre ciudades. Cada fallo viene con su porqué.
   ============================================================ */

(function () {
  'use strict';

  /* Género de cada sustantivo usado aquí (para explicar el porqué). */
  var G = {
    Hotel: 'das', Bahnhof: 'der', Auto: 'das', Park: 'der', Tisch: 'der', 'Café': 'das',
    Kino: 'das', Bus: 'der', Buch: 'das', Foto: 'das', Bank: 'die', Schule: 'die',
    Apotheke: 'die', Post: 'die', 'Straße': 'die', Kirche: 'die', Lampe: 'die', 'Brücke': 'die',
    Turm: 'der', Theater: 'das', Restaurant: 'das', 'Straßenbahn': 'die', Strand: 'der', Burg: 'die'
  };

  function porque(n, neg) {
    var g = G[n], f = neg ? { der: 'kein', das: 'kein', die: 'keine' } : { der: 'ein', das: 'ein', die: 'eine' };
    return g + ' ' + n + ' → ' + f[g] + '. ' + (g === 'die'
      ? 'Las palabras die usan la forma con -e.'
      : 'Las palabras ' + g + ' usan la forma sin -e.');
  }

  /** "Das ist ___ Hotel." con dos opciones. */
  function dos(n, neg) {
    var ok = neg ? (G[n] === 'die' ? 'keine' : 'kein') : (G[n] === 'die' ? 'eine' : 'ein');
    var ops = neg ? ['kein', 'keine'] : ['ein', 'eine'];
    return { t: 'opcion', fijo: true, p: 'Das ist ___ ' + n + '.', ops: ops, ok: ops.indexOf(ok),
      why: porque(n, neg), audio: 'Das ist ' + ok + ' ' + n + '.' };
  }

  /** Cuatro opciones con una pista en español. */
  function cuatro(n, neg, es) {
    var ok = neg ? (G[n] === 'die' ? 'keine' : 'kein') : (G[n] === 'die' ? 'eine' : 'ein');
    var ops = ['ein', 'eine', 'kein', 'keine'];
    return { t: 'opcion', fijo: true, p: es + '  →  Das ist ___ ' + n + '.', ops: ops, ok: ops.indexOf(ok),
      why: (neg ? 'Es una negación: ' : 'Es una afirmación: ') + porque(n, neg), audio: 'Das ist ' + ok + ' ' + n + '.' };
  }

  /** Transformar a negativo, escribiendo la frase completa. */
  function negar(frase, neg, why) {
    return { t: 'escribir', p: 'Escribe la frase en NEGATIVO: ' + frase, ok: [neg], why: why, audio: neg,
      pista: 'ein → kein; eine → keine; plural sin artículo → keine.' };
  }

  DE.registrarLeccion({
    id: 'entrena-ein-kein',
    titulo: 'Entrenamiento: ein, eine, kein, keine',
    icono: 'jugar',
    grupo: 'Domina el tema',
    color: 'verde',
    resumen: 'Diez niveles que se abren de uno en uno: elegir, negar, plural, ordenar, cazar errores y escribir frases.',
    vista: 'entrenador',

    datos: {
      intro: 'Antes de cada respuesta pregúntate dos cosas: ¿es singular o plural? y ¿qué artículo tiene la palabra? ' +
             'Con eso ya sabes si va ein, eine, kein o keine. Supera cada nivel con 90 % o más a la primera.',

      niveles: [

        /* ---------- Nivel 1 ---------- */
        {
          id: 'n1', dificultad: 'Fácil', titulo: 'ein o eine',
          descripcion: 'Solo afirmaciones. Decide por el artículo de la palabra: der y das → ein; die → eine.',
          ejercicios: [
            dos('Hotel'), dos('Bank'), dos('Bahnhof'), dos('Schule'), dos('Auto'), dos('Apotheke'),
            dos('Park'), dos('Post'), dos('Kino'), dos('Kirche'), dos('Tisch'), dos('Lampe'),
            dos('Bus'), dos('Brücke')
          ]
        },

        /* ---------- Nivel 2 ---------- */
        {
          id: 'n2', dificultad: 'Básico', titulo: 'kein o keine',
          descripcion: 'Lo mismo, pero en negativo: kein es ein con una k delante; keine es eine con una k.',
          ejercicios: [
            dos('Hotel', true), dos('Bank', true), dos('Bahnhof', true), dos('Schule', true), dos('Café', true),
            dos('Apotheke', true), dos('Park', true), dos('Post', true), dos('Theater', true), dos('Kirche', true),
            dos('Turm', true), dos('Straßenbahn', true), dos('Restaurant', true), dos('Burg', true)
          ]
        },

        /* ---------- Nivel 3 ---------- */
        {
          id: 'n3', dificultad: 'Medio', titulo: 'Las cuatro formas juntas',
          descripcion: 'Ahora hay cuatro opciones. La pista en español te dice si afirmas o niegas.',
          ejercicios: [
            cuatro('Hotel', false, 'Es un hotel'), cuatro('Schule', true, 'No es una escuela'),
            cuatro('Bahnhof', true, 'No es una estación'), cuatro('Bank', false, 'Es un banco'),
            cuatro('Turm', false, 'Es una torre'), cuatro('Theater', true, 'No es un teatro'),
            cuatro('Straßenbahn', true, 'No es un tranvía'), cuatro('Bus', false, 'Es un autobús'),
            cuatro('Kirche', false, 'Es una iglesia'), cuatro('Café', true, 'No es una cafetería'),
            cuatro('Apotheke', true, 'No es una farmacia'), cuatro('Park', false, 'Es un parque'),
            cuatro('Restaurant', false, 'Es un restaurante'), cuatro('Post', true, 'No es correos')
          ]
        },

        /* ---------- Nivel 4 ---------- */
        {
          id: 'n4', dificultad: 'Medio', titulo: 'Singular o plural: ist y sind',
          descripcion: 'Con plural no hay "ein": se deja sin artículo o se usa keine. Y el verbo debe coincidir.',
          ejercicios: [
            { t: 'opcion', fijo: true, p: 'Das sind ___ Autos.   (afirmación)', ops: ['ein', 'eine', 'keine', '(sin artículo)'], ok: 3,
              why: 'Autos es plural y afirmativo: no lleva artículo. Das sind Autos.' },
            { t: 'opcion', fijo: true, p: 'Das sind ___ Autos.   (no son coches)', ops: ['ein', 'eine', 'keine', '(sin artículo)'], ok: 2,
              why: 'Autos es plural y negativo: keine. Das sind keine Autos.' },
            { t: 'opcion', fijo: true, p: 'Das ___ ein Fahrrad.', ops: ['ist', 'sind'], ok: 0,
              why: 'Fahrrad es singular (ein Fahrrad), así que el verbo es ist.' },
            { t: 'opcion', fijo: true, p: 'Das ___ keine Bücher.', ops: ['ist', 'sind'], ok: 1,
              why: 'Bücher es plural, así que el verbo es sind.' },
            { t: 'opcion', fijo: true, p: 'Das sind ___ Fotos.   (no son fotos)', ops: ['kein', 'keine', 'eine', '(sin artículo)'], ok: 1,
              why: 'Fotos es plural y negativo: keine. Das sind keine Fotos.' },
            { t: 'opcion', fijo: true, p: 'Das ist ___ Foto.   (no es una foto)', ops: ['kein', 'keine', 'eine', '(sin artículo)'], ok: 0,
              why: 'Foto es singular y es una palabra das: kein Foto.' },
            { t: 'opcion', fijo: true, p: 'In Berlin sind ___ Parks.   (afirmación)', ops: ['ein', 'eine', 'keine', '(sin artículo)'], ok: 3,
              why: 'Parks es plural y afirmativo: sin artículo. In Berlin sind Parks.' },
            { t: 'opcion', fijo: true, p: 'In Köln ist ___ Burg.   (no hay castillo)', ops: ['kein', 'keine', 'eine', '(sin artículo)'], ok: 1,
              why: 'die Burg → keine Burg, y el verbo va en singular: ist.' },
            { t: 'opcion', fijo: true, p: 'Hier sind ___ Hotels, aber ___ Bahnhof.', ops: ['keine / kein', 'kein / keine', '(nada) / kein', '(nada) / keine'], ok: 2,
              why: 'Hotels es plural afirmativo: sin artículo. Bahnhof es der → kein.' },
            { t: 'opcion', fijo: true, p: 'Das ___ Autos.', ops: ['ist', 'sind'], ok: 1,
              why: 'Autos es plural: sind.' },
            { t: 'opcion', fijo: true, p: 'Das sind ___ Hotels.   (no son hoteles)', ops: ['kein', 'keine', 'nicht', '(sin artículo)'], ok: 1,
              why: 'Hotels es plural y negativo: keine.' },
            { t: 'opcion', fijo: true, p: 'In San Pedro Sula sind ___ Berge.   (no hay montañas)', ops: ['kein', 'keine', 'nicht', '(sin artículo)'], ok: 1,
              why: 'Berge es plural y negativo: keine Berge.' }
          ]
        },

        /* ---------- Nivel 5 ---------- */
        {
          id: 'n5', dificultad: 'Avanzado', titulo: 'Ordenar frases',
          descripcion: 'Forma la frase tocando las palabras en orden. Hay palabras que sobran.',
          ejercicios: [
            { t: 'ordenar', p: 'No es un restaurante, es una cafetería.', ok: 'Das ist kein Restaurant, das ist ein Café.',
              extra: ['keine', 'eine'], why: 'Restaurant y Café son palabras das: kein y ein. Se repite "das ist" después de la coma.' },
            { t: 'ordenar', p: 'No es un tranvía, es un autobús.', ok: 'Das ist keine Straßenbahn, das ist ein Bus.',
              extra: ['kein', 'eine'], why: 'die Straßenbahn → keine; der Bus → ein.' },
            { t: 'ordenar', p: 'No es una torre, es un puente.', ok: 'Das ist kein Turm, das ist eine Brücke.',
              extra: ['keine', 'ein'], why: 'der Turm → kein; die Brücke → eine.' },
            { t: 'ordenar', p: 'No son fotos, son libros.', ok: 'Das sind keine Fotos, das sind Bücher.',
              extra: ['ist', 'eine'], why: 'Plural: keine Fotos (negativo) y Bücher sin artículo (afirmativo), con sind.' },
            { t: 'ordenar', p: 'En Berlín hay un parque, pero no hay playa.', ok: 'In Berlin ist ein Park, aber kein Strand.',
              extra: ['keine', 'eine'], why: 'der Park → ein; der Strand → kein.' },
            { t: 'ordenar', p: 'En Colonia hay un puente, pero no hay castillo.', ok: 'In Köln ist eine Brücke, aber keine Burg.',
              extra: ['ein', 'kein'], why: 'die Brücke → eine; die Burg → keine.' },
            { t: 'ordenar', p: 'No es un teatro, es un cine.', ok: 'Das ist kein Theater, das ist ein Kino.',
              extra: ['keine', 'eine'], why: 'Theater y Kino son das: kein y ein.' },
            { t: 'ordenar', p: 'Son coches.', ok: 'Das sind Autos.', extra: ['ist', 'ein'],
              why: 'Plural afirmativo: sind y sin artículo.' },
            { t: 'ordenar', p: 'No tengo coche.', ok: 'Ich habe kein Auto.', extra: ['keine', 'nicht'],
              why: 'das Auto → kein. Se niega el sustantivo con kein, no con nicht.' },
            { t: 'ordenar', p: 'Aquí no hay banco, pero hay una farmacia.', ok: 'Hier ist keine Bank, aber hier ist eine Apotheke.',
              extra: ['kein', 'ein'], why: 'die Bank → keine; die Apotheke → eine.' }
          ]
        },

        /* ---------- Nivel 6 ---------- */
        {
          id: 'n6', dificultad: 'Avanzado', titulo: 'Caza el error',
          descripcion: 'Tres frases, una es correcta. Son los errores reales más habituales.',
          ejercicios: [
            { t: 'opcion', p: '¿Cuál es correcta? (No es un tranvía)',
              ops: ['Das ist kein Straßenbahn.', 'Das ist keine Straßenbahn.', 'Das ist nicht eine Straßenbahn.'], ok: 1,
              why: 'die Straßenbahn (manda Bahn, que es femenino) → keine. Y no se dice "nicht eine": se dice kein / keine.' },
            { t: 'opcion', p: '¿Cuál es correcta? (Es un autobús)',
              ops: ['Das ist eine Bus.', 'Das ist ein Bus.', 'Das sind ein Bus.'], ok: 1,
              why: 'der Bus → ein. Y Bus es singular, así que el verbo es ist.' },
            { t: 'opcion', p: '¿Cuál es correcta? (No es una torre)',
              ops: ['Das ist keine Turm.', 'Das ist kein Turm.', 'Das ist keiner Turm.'], ok: 1,
              why: 'der Turm → kein. "keiner" no existe en esta posición.' },
            { t: 'opcion', p: '¿Cuál es correcta? (No son fotos)',
              ops: ['Das sind keine Fotos.', 'Das sind kein Fotos.', 'Das ist keine Fotos.'], ok: 0,
              why: 'Fotos es plural: sind y keine.' },
            { t: 'opcion', p: '¿Cuál es correcta? (No es un teatro)',
              ops: ['Das ist keine Theater.', 'Das ist kein Theater.', 'Das ist nicht ein Theater.'], ok: 1,
              why: 'das Theater → kein.' },
            { t: 'opcion', p: '¿Cuál es correcta? (En Berlín hay un parque)',
              ops: ['In Berlin sind ein Park.', 'In Berlin ist ein Park.', 'In Berlin ist Parks.'], ok: 1,
              why: 'Park es singular: ist.' },
            { t: 'opcion', p: '¿Cuál es correcta? (Son hoteles)',
              ops: ['Das sind eine Hotels.', 'Das sind Hotels.', 'Das ist Hotels.'], ok: 1,
              why: 'Plural afirmativo: sind y sin artículo.' },
            { t: 'opcion', p: '¿Cuál es correcta? (No es una cafetería)',
              ops: ['Das ist kein Café.', 'Das ist keine Café.', 'Das ist nicht Café.'], ok: 0,
              why: 'das Café → kein.' },
            { t: 'opcion', p: '¿Cuál es correcta? (Aquí no hay banco)',
              ops: ['Hier ist kein Bank.', 'Hier ist keine Bank.', 'Hier ist nicht ein Bank.'], ok: 1,
              why: 'die Bank → keine.' },
            { t: 'opcion', p: '¿Cuál es correcta? (No son coches)',
              ops: ['Das sin keine Autos.', 'Das sind keine Autos.', 'Das sind keiner Autos.'], ok: 1,
              why: 'El verbo es sind, con d, y el plural negativo es keine.' }
          ]
        },

        /* ---------- Nivel 7 ---------- */
        {
          id: 'n7', dificultad: 'Experto', titulo: 'Negar escribiendo',
          descripcion: 'Convierte la frase afirmativa en negativa. Teclea la frase completa.',
          ejercicios: [
            negar('Das ist ein Hotel.', 'Das ist kein Hotel.', 'das Hotel → kein.'),
            negar('Das ist eine Bank.', 'Das ist keine Bank.', 'die Bank → keine.'),
            negar('Das ist ein Bus.', 'Das ist kein Bus.', 'der Bus → kein.'),
            negar('Das ist eine Straßenbahn.', 'Das ist keine Straßenbahn.', 'die Straßenbahn → keine.'),
            negar('Das sind Autos.', 'Das sind keine Autos.', 'Plural afirmativo sin artículo → plural negativo con keine.'),
            negar('Das ist ein Park.', 'Das ist kein Park.', 'der Park → kein.'),
            negar('Das ist ein Kino.', 'Das ist kein Kino.', 'das Kino → kein.'),
            negar('Das ist eine Schule.', 'Das ist keine Schule.', 'die Schule → keine.'),
            negar('Das sind Hotels.', 'Das sind keine Hotels.', 'Plural: sind keine.'),
            negar('Das ist ein Turm.', 'Das ist kein Turm.', 'der Turm → kein.'),
            { t: 'escribir', p: 'Traduce: No es un hotel.', ok: ['Das ist kein Hotel.'], why: 'das Hotel → kein Hotel.', audio: 'Das ist kein Hotel.' },
            { t: 'escribir', p: 'Traduce: No son coches.', ok: ['Das sind keine Autos.'], why: 'Plural negativo: sind keine.', audio: 'Das sind keine Autos.' }
          ]
        },

        /* ---------- Nivel 8 ---------- */
        {
          id: 'n8', dificultad: 'Maestro', titulo: 'Describe ciudades',
          descripcion: 'Frases completas con In … ist / sind …, aber kein / keine …. Se dan las palabras y su artículo.',
          ejercicios: [
            { t: 'escribir', p: 'Usa Park (der) y Strand (der): En Berlín hay un parque, pero no hay playa.',
              ok: ['In Berlin ist ein Park, aber kein Strand.'], why: 'der Park → ein; der Strand → kein.',
              pista: 'In Berlin ist … , aber …', audio: 'In Berlin ist ein Park, aber kein Strand.' },
            { t: 'escribir', p: 'Usa Hotel (das) y Berge (plural): En San Pedro Sula hay un hotel, pero no hay montañas.',
              ok: ['In San Pedro Sula ist ein Hotel, aber keine Berge.'], why: 'das Hotel → ein; Berge es plural y negativo → keine.',
              pista: 'In San Pedro Sula ist … , aber …', audio: 'In San Pedro Sula ist ein Hotel, aber keine Berge.' },
            { t: 'escribir', p: 'Usa Brücke (die) y Burg (die): En Colonia hay un puente, pero ningún castillo.',
              ok: ['In Köln ist eine Brücke, aber keine Burg.'], why: 'die Brücke → eine; die Burg → keine. Se acepta "Koeln".',
              pista: 'In Köln ist … , aber …', audio: 'In Köln ist eine Brücke, aber keine Burg.' },
            { t: 'escribir', p: 'Usa Restaurant (das) y Café (das): No es un restaurante, es una cafetería.',
              ok: ['Das ist kein Restaurant, das ist ein Café.'], why: 'Las dos son palabras das: kein y ein.',
              pista: 'Das ist … , das ist …', audio: 'Das ist kein Restaurant, das ist ein Café.' },
            { t: 'escribir', p: 'Usa Bahnhof (der) y Hotel (das): No es una estación, es un hotel.',
              ok: ['Das ist kein Bahnhof, das ist ein Hotel.'], why: 'der Bahnhof → kein; das Hotel → ein.',
              pista: 'Das ist … , das ist …', audio: 'Das ist kein Bahnhof, das ist ein Hotel.' },
            { t: 'escribir', p: 'Usa Foto (das) y Buch (Plural: Bücher): No son fotos, son libros.',
              ok: ['Das sind keine Fotos, das sind Bücher.'], why: 'Fotos plural negativo → keine; Bücher plural afirmativo → sin artículo.',
              pista: 'Das sind … , das sind …', audio: 'Das sind keine Fotos, das sind Bücher.' },
            { t: 'escribir', p: 'Usa Schule (die) y Kirche (die): Aquí no hay escuela, pero hay una iglesia.',
              ok: ['Hier ist keine Schule, aber hier ist eine Kirche.', 'Hier ist keine Schule, aber eine Kirche.'],
              why: 'die Schule → keine; die Kirche → eine.',
              pista: 'Hier ist … , aber …', audio: 'Hier ist keine Schule, aber hier ist eine Kirche.' },
            { t: 'escribir', p: 'Usa Turm (der) y Park (der): Aquí no hay torre, pero hay un parque.',
              ok: ['Hier ist kein Turm, aber hier ist ein Park.', 'Hier ist kein Turm, aber ein Park.'],
              why: 'der Turm → kein; der Park → ein.',
              pista: 'Hier ist … , aber …', audio: 'Hier ist kein Turm, aber hier ist ein Park.' }
          ]
        }
      ].concat([
          { id: 'n9', dificultad: 'Avanzado', titulo: 'Maratón: ein / kein',
            descripcion: 'Veinte frases al azar con ein, eine, kein, keine (Nominativ y Akkusativ).',
            auto: { tipo: 'ein-kein', n: 20, neg: 'mixto' } },
          { id: 'n10', dificultad: 'Experto', titulo: 'Maestro de ein y kein',
            descripcion: 'Más frases, más rápido, y también con Akkusativ (einen, keinen).',
            auto: { tipo: 'mixto', n: 24, mezcla: [{ tipo: 'ein-kein', n: 12, neg: 'mixto' }, { tipo: 'art-akk', n: 12 }] } }
      ])
    }
  });
})();
