/* ============================================================
   data/entrenamiento-direcciones.js — Entrenamiento: direcciones
   ------------------------------------------------------------
   Seis niveles que suben de palabras sueltas a rutas de cinco
   pasos sobre un plano. Los planos se calculan con core/mapa.js,
   así que la respuesta correcta siempre coincide con el dibujo.
   ============================================================ */

(function () {
  'use strict';

  /** "¿Qué significa X?" con tres distractores. */
  function sig(de, es, otros, visual) {
    var ops = [es].concat(otros);
    return { t: 'opcion', p: '¿Qué significa "' + de + '"?', ops: ops, ok: 0,
      why: de + ' = ' + es + '.', visual: visual, audio: de };
  }

  /** "¿Cómo se dice X?" (español → alemán). */
  function dec(es, de, otros, why) {
    var ops = [de].concat(otros);
    return { t: 'opcion', p: '¿Cómo se dice "' + es + '" en alemán?', ops: ops, ok: 0,
      why: why || (es + ' = ' + de + '.'), audio: de };
  }

  var GEN = { Post: 'die', Bahnhof: 'der', Schule: 'die', Hotel: 'das', Apotheke: 'die',
              Supermarkt: 'der', Kino: 'das', Bank: 'die', Rathaus: 'das', Krankenhaus: 'das' };

  /** zum / zur. */
  function zum(n) {
    var g = GEN[n], ok = g === 'die' ? 'zur' : 'zum';
    return { t: 'opcion', fijo: true, p: 'Wie komme ich ___ ' + n + '?', ops: ['zum', 'zur'], ok: ok === 'zum' ? 0 : 1,
      why: g + ' ' + n + ' → ' + ok + (ok === 'zur' ? ' (zu + der: palabras die)' : ' (zu + dem: palabras der y das)') + '.',
      audio: 'Wie komme ich ' + ok + ' ' + n + '?' };
  }

  function mapa(m, c, r, dir, pasos, lado, modo) {
    return { t: 'mapa', mapa: m, inicio: [c, r], dir: dir, pasos: pasos, lado: lado, modo: modo || 'lugar' };
  }

  DE.registrarLeccion({
    id: 'entrena-direcciones',
    titulo: 'Entrenamiento: direcciones',
    icono: 'jugar',
    grupo: 'Domina el tema',
    color: 'turquesa',
    resumen: 'Seis niveles con planos de ciudad: de links y rechts a rutas de cinco pasos.',
    vista: 'entrenador',

    datos: {
      intro: 'En los niveles con plano, tú eres el punto naranja y la flecha indica hacia dónde miras. ' +
             'Cada palabra (links, rechts, geradeaus) es una calle hasta el siguiente cruce. ' +
             'Supera cada nivel con 90 % o más a la primera.',

      niveles: [

        /* ---------- Nivel 1 ---------- */
        {
          id: 'n1', dificultad: 'Fácil', titulo: 'Las palabras del camino',
          descripcion: 'Significado de las palabras clave, en los dos sentidos.',
          ejercicios: [
            sig('links', 'a la izquierda', ['a la derecha', 'todo recto', 'atrás'], 'izquierda'),
            sig('rechts', 'a la derecha', ['a la izquierda', 'todo recto', 'atrás'], 'derecha'),
            sig('geradeaus', 'todo recto', ['a la izquierda', 'a la derecha', 'atrás'], 'arriba'),
            sig('zurück', 'atrás, de vuelta', ['todo recto', 'allí', 'luego'], 'flechaIzq'),
            sig('dann', 'luego', ['ahora', 'siempre', 'allí']),
            sig('weit', 'lejos', ['cerca', 'enfrente', 'aquí'], 'km'),
            sig('nah', 'cerca', ['lejos', 'allí', 'luego']),
            sig('dort', 'allí', ['aquí', 'cerca', 'luego']),
            sig('gegenüber', 'enfrente', ['al lado de', 'detrás', 'lejos']),
            sig('die Kreuzung', 'el cruce', ['la esquina', 'el semáforo', 'la plaza']),
            sig('die Ampel', 'el semáforo', ['el cruce', 'la parada', 'el puente']),
            sig('die Haltestelle', 'la parada', ['la estación', 'la plaza', 'la esquina'], 'metro'),
            dec('todo recto', 'geradeaus', ['links', 'rechts', 'zurück']),
            dec('disculpe', 'Entschuldigung', ['Gern geschehen', 'Vielen Dank', 'Kein Problem']),
            dec('de nada', 'Gern geschehen', ['Entschuldigung', 'Vielen Dank', 'Noch einmal']),
            dec('a la izquierda', 'links', ['rechts', 'geradeaus', 'dort'])
          ]
        },

        /* ---------- Nivel 2 ---------- */
        {
          id: 'n2', dificultad: 'Básico', titulo: 'Tu primer plano',
          descripcion: 'Una sola calle. Camina un paso y toca el edificio que queda al lado indicado.',
          ejercicios: [
            mapa('A', 3, 1, 'W', 'g', 'r'),
            mapa('C', 0, 3, 'E', 'g', 'l'),
            mapa('C', 0, 0, 'E', 'r', 'l'),
            mapa('C', 3, 0, 'W', 'l', 'r'),
            mapa('A', 0, 2, 'E', 'g', 'r'),
            mapa('B', 3, 2, 'W', 'l', 'r')
          ]
        },

        /* ---------- Nivel 3 ---------- */
        {
          id: 'n3', dificultad: 'Medio', titulo: 'Construir las frases',
          descripcion: 'Del español al alemán: ordena y escribe preguntas e indicaciones completas.',
          ejercicios: [
            { t: 'ordenar', p: 'Vaya a la izquierda.', ok: 'Gehen Sie links.', extra: ['rechts', 'Sie gehen'],
              why: 'El verbo va primero y Sie detrás: Gehen Sie … (forma educada).' },
            { t: 'ordenar', p: 'Vaya todo recto.', ok: 'Gehen Sie geradeaus.', extra: ['gerade', 'aus'],
              why: 'geradeaus es una sola palabra.' },
            { t: 'ordenar', p: 'Vaya a la derecha, luego todo recto.', ok: 'Gehen Sie rechts, dann geradeaus.', extra: ['links', 'Sie gehen'],
              why: 'Cada paso se une con dann.' },
            { t: 'ordenar', p: 'Luego vaya a la izquierda.', ok: 'Dann gehen Sie links.', extra: ['rechts', 'gehe'],
              why: 'Con dann al principio, el verbo se queda en segundo lugar: Dann gehen Sie …' },
            { t: 'ordenar', p: 'Disculpe, ¿dónde está la estación?', ok: 'Entschuldigung, wo ist der Bahnhof?', extra: ['die', 'sind'],
              why: 'der Bahnhof lleva der. La pregunta Wo ist …? tiene el verbo ist en segundo lugar.' },
            { t: 'ordenar', p: '¿Cómo llego a la estación?', ok: 'Wie komme ich zum Bahnhof?', extra: ['zur', 'kommen'],
              why: 'der Bahnhof → zum (zu + dem).' },
            { t: 'ordenar', p: 'La estación está a la derecha.', ok: 'Der Bahnhof ist rechts.', extra: ['Die', 'links'],
              why: 'El destino lleva su artículo y el verbo ist: Der Bahnhof ist rechts.' },
            { t: 'ordenar', p: '¿Hay por aquí una farmacia?', ok: 'Gibt es hier eine Apotheke?', extra: ['ein', 'ist'],
              why: 'Gibt es hier …? = ¿Hay por aquí …? Con die Apotheke → eine.' },
            { t: 'ordenar', p: 'Vaya aquí a la izquierda y luego todo recto.', ok: 'Gehen Sie hier links und dann geradeaus.',
              extra: ['rechts', 'dort'], why: 'hier = aquí; und dann une los dos pasos.' },
            { t: 'escribir', p: 'Escribe en alemán: Vaya a la izquierda.', ok: ['Gehen Sie links.', 'Gehen Sie nach links.'],
              why: 'Gehen Sie + links. También es muy natural decir nach links.', audio: 'Gehen Sie links.' },
            { t: 'escribir', p: 'Escribe en alemán: Vaya todo recto.', ok: ['Gehen Sie geradeaus.'],
              why: 'geradeaus se escribe junto.', audio: 'Gehen Sie geradeaus.' },
            { t: 'escribir', p: 'Escribe en alemán: Vaya a la derecha, luego todo recto.',
              ok: ['Gehen Sie rechts, dann geradeaus.', 'Gehen Sie rechts und dann geradeaus.'],
              why: 'Gehen Sie rechts, dann geradeaus.', audio: 'Gehen Sie rechts, dann geradeaus.' }
          ]
        },

        /* ---------- Nivel 4 ---------- */
        {
          id: 'n4', dificultad: 'Medio', titulo: 'Planos de dos y tres pasos',
          descripcion: 'Rutas más largas. Gira con el cuerpo: links y rechts dependen de hacia dónde miras.',
          ejercicios: [
            mapa('A', 3, 1, 'W', 'grl', 'l'),
            mapa('C', 3, 2, 'W', 'rlr', 'l'),
            mapa('B', 2, 0, 'S', 'rlg', 'l'),
            mapa('B', 0, 3, 'N', 'rgl', 'l'),
            mapa('C', 0, 0, 'S', 'glg', 'r'),
            mapa('A', 3, 3, 'W', 'grl', 'l'),
            mapa('A', 3, 1, 'W', 'gr', 'r', 'describir'),
            mapa('C', 2, 3, 'N', 'gl', 'r', 'describir'),
            mapa('B', 2, 3, 'N', 'lr', 'l', 'describir'),
            mapa('A', 1, 0, 'S', 'gl', 'l', 'describir')
          ]
        },

        /* ---------- Nivel 5 ---------- */
        {
          id: 'n5', dificultad: 'Avanzado', titulo: 'Conversaciones reales',
          descripcion: 'zum o zur, cortesía, órdenes con Sie y du, frases de rescate.',
          ejercicios: [
            zum('Post'), zum('Bahnhof'), zum('Schule'), zum('Hotel'), zum('Apotheke'), zum('Supermarkt'),
            { t: 'opcion', p: 'Quieres preguntar por correos a un desconocido. ¿Cuál es la mejor forma?',
              ops: ['Entschuldigung, wo ist die Post?', 'Hallo, Post wo?', 'Wo die Post ist?'], ok: 0,
              why: 'Entschuldigung abre con educación y Wo ist …? lleva el verbo en segundo lugar.' },
            { t: 'opcion', p: 'Hablas con un amigo y quieres decirle que gire a la izquierda. ¿Cuál es la forma informal?',
              ops: ['Geh links.', 'Gehen Sie links.', 'Gehst du links.'], ok: 0,
              why: 'Con amigos (du) la orden es Geh … Gehen Sie … es la forma formal.' },
            { t: 'opcion', p: 'Alguien dice: "Gehen Sie links, dann geradeaus." ¿Qué entiendes?',
              ops: ['Vaya a la izquierda, luego todo recto.', 'Vaya recto, luego a la izquierda.', 'Vaya a la derecha, luego todo recto.'], ok: 0,
              why: 'links = izquierda, dann = luego, geradeaus = todo recto.' },
            { t: 'opcion', p: 'Alguien habla muy rápido y no entiendes. ¿Qué dices?',
              ops: ['Noch einmal, bitte?', 'Gern geschehen!', 'Vielen Dank!'], ok: 0,
              why: 'Noch einmal, bitte? = ¿Otra vez, por favor? Es la frase más útil.' },
            { t: 'opcion', p: 'Alguien te da las gracias por tu ayuda. ¿Qué respondes?',
              ops: ['Gern geschehen!', 'Vielen Dank!', 'Entschuldigung!'], ok: 0,
              why: 'Gern geschehen = de nada. También Bitte! o Kein Problem!' },
            { t: 'opcion', p: '"Also hier links?" significa…',
              ops: ['¿Entonces aquí a la izquierda?', '¿También aquí a la izquierda?', '¿Solo a la izquierda?'], ok: 0,
              why: 'also = entonces. Es un falso amigo del inglés also (también).' },
            { t: 'opcion', p: '¿Cuál es correcta?',
              ops: ['Dann gehen Sie rechts.', 'Dann Sie gehen rechts.', 'Dann rechts gehen Sie.'], ok: 0,
              why: 'El verbo siempre ocupa el segundo lugar de la frase: Dann (1) gehen (2) Sie rechts.' },
            { t: 'opcion', p: '¿Cuál se escribe bien?',
              ops: ['Gehen Sie gerade aus.', 'Gehen Sie geradeaus.', 'Gehen Sie gerade-aus.'], ok: 1,
              why: 'geradeaus se escribe como una sola palabra.' }
          ]
        },

        /* ---------- Nivel 6 ---------- */
        {
          id: 'n6', dificultad: 'Experto', titulo: 'Rutas largas y escribir la ruta',
          descripcion: 'Cuatro y cinco pasos, elegir la instrucción correcta y escribirla tú mismo.',
          ejercicios: [
            mapa('C', 0, 2, 'E', 'lrgl', 'r'),
            mapa('B', 3, 0, 'S', 'rlgl', 'r'),
            mapa('A', 3, 3, 'W', 'rlrr', 'r'),
            mapa('B', 2, 3, 'N', 'lrgrg', 'l'),
            mapa('C', 3, 3, 'N', 'glrll', 'l'),
            mapa('A', 0, 1, 'E', 'grgrr', 'r'),
            mapa('A', 3, 2, 'W', 'rlrrr', 'r', 'describir'),
            mapa('C', 0, 3, 'E', 'glrgl', 'l', 'describir'),
            mapa('B', 1, 3, 'N', 'rlgl', 'r', 'describir'),
            { t: 'escribir', p: 'Escribe la ruta: izquierda, todo recto, derecha.',
              ok: ['Gehen Sie links, dann geradeaus, dann rechts.', 'Gehen Sie links, geradeaus und dann rechts.'],
              why: 'Gehen Sie links, dann geradeaus, dann rechts.', audio: 'Gehen Sie links, dann geradeaus, dann rechts.' },
            { t: 'escribir', p: 'Escribe la ruta: derecha, derecha, todo recto.',
              ok: ['Gehen Sie rechts, dann rechts, dann geradeaus.'],
              why: 'Gehen Sie rechts, dann rechts, dann geradeaus.', audio: 'Gehen Sie rechts, dann rechts, dann geradeaus.' },
            { t: 'escribir', p: 'Escribe la pregunta: Disculpe, ¿dónde está el hotel?',
              ok: ['Entschuldigung, wo ist das Hotel?'],
              why: 'das Hotel → Wo ist das Hotel? Empieza con Entschuldigung.', audio: 'Entschuldigung, wo ist das Hotel?' },
            { t: 'escribir', p: 'Escribe la pregunta: ¿Cómo llego a correos?',
              ok: ['Wie komme ich zur Post?'],
              why: 'die Post → zur (zu + der).', audio: 'Wie komme ich zur Post?' }
          ]
        }
      ]
    }
  });
})();
