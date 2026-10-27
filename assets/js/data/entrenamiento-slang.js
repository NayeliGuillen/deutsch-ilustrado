/* ============================================================
   data/entrenamiento-slang.js — Entrenamiento: alemán real
   ------------------------------------------------------------
   Registro (formal/informal), regiones, reacciones, forma
   hablada y diálogos para ordenar.
   ============================================================ */

(function () {
  'use strict';

  function opc(p, ops, why) { return { t: 'opcion', fijo: false, p: p, ops: ops, ok: 0, why: why }; }
  function dialogo(titulo, piezas, why) {
    return { t: 'ordenar', piezas: piezas, ok: piezas.join(' '), p: 'Ordena el diálogo: ' + titulo, why: why };
  }

  DE.registrarLeccion({
    id: 'entrena-slang',
    titulo: 'Entrenamiento: alemán real',
    icono: 'jugar',
    grupo: 'Hablar y escribir',
    color: 'rosa',
    resumen: 'Registro, regiones, reacciones, forma hablada y diálogos: practica lo que de verdad se dice.',
    vista: 'entrenador',

    datos: {
      intro: 'Aquí practicas a entender y elegir el registro correcto: ¿con amigos o con alguien a quien dices Sie?',

      niveles: [

        {
          id: 'n1', dificultad: 'Fácil', titulo: 'Une expresión y significado',
          descripcion: 'Reacciones y palabras de todos los días.',
          ejercicios: [
            { t: 'unir', p: 'Une cada reacción con su significado.',
              pares: [['Echt?', '¿en serio?'], ['Krass!', '¡brutal!'], ['Na klar!', '¡claro!'], ['Quatsch!', '¡tonterías!'], ['Stimmt!', '¡es verdad!']],
              why: 'Echt = en serio · krass = brutal/increíble · klar = claro · Quatsch = tonterías · stimmt = es verdad.' },
            { t: 'unir', p: 'Une cada saludo o despedida con su significado.',
              pares: [['Moin', 'hola (norte)'], ['Servus', 'hola/adiós (Baviera, Austria)'], ['Grüezi', 'hola (Suiza)'], ['Tschö', 'adiós coloquial'], ['Bis dann', 'hasta luego']],
              why: 'Moin = norte · Servus = Baviera y Austria · Grüezi = Suiza · Tschö = coloquial · Bis dann = hasta luego.' },
            { t: 'unir', p: 'Une cada palabra con su significado.',
              pares: [['der Kumpel', 'el colega'], ['der Kollege', 'compañero de trabajo'], ['Alter', 'tío (colega)'], ['die Leute', 'la gente'], ['der Typ', 'el tipo']],
              why: 'Alter no es "viejo": es "tío/colega" entre amigos.' },
            opc('¿Qué significa "Hast du Bock auf Kino?"', ['¿Tienes ganas de ir al cine?', '¿Tienes entradas de cine?', '¿Conoces el cine?', '¿Dónde está el cine?'], 'Bock haben auf = tener ganas de. (¡No tiene que ver con los bocks!)'),
            opc('"Muss ja." como respuesta a "Wie geht\'s?" significa…', ['Tirando, ya ves.', 'Muy bien.', 'Mal, muy mal.', 'No entiendo.'], 'Respuesta típica, algo irónica: "Pues aquí, tirando."')
          ]
        },

        {
          id: 'n2', dificultad: 'Básico', titulo: 'Formal o informal; norte o sur',
          descripcion: 'Arrastra cada expresión a su caja.',
          ejercicios: [
            { t: 'clasificar', p: '¿Formal (con Sie) o informal (amigos, du)?',
              cajas: [{ etiqueta: 'formal', color: 'azul' }, { etiqueta: 'informal', color: 'naranja' }],
              items: [
                { t: 'Guten Tag', c: 0 }, { t: 'Auf Wiedersehen', c: 0 }, { t: 'Wie geht es Ihnen?', c: 0 }, { t: 'Vielen Dank', c: 0 },
                { t: 'Hey', c: 1 }, { t: 'Tschö', c: 1 }, { t: 'Wie geht\'s?', c: 1 }, { t: 'Krass!', c: 1 }
              ], why: 'Guten Tag, Auf Wiedersehen, Wie geht es Ihnen?, Vielen Dank = formales. Hey, Tschö, Wie geht\'s?, Krass = amigos.' },
            { t: 'clasificar', p: '¿Dónde se dice?',
              cajas: [{ etiqueta: 'Norte', color: 'azul' }, { etiqueta: 'Baviera / Austria', color: 'rojo' }, { etiqueta: 'Suiza', color: 'verde' }],
              items: [
                { t: 'Moin', c: 0 }, { t: 'Moin Moin', c: 0 }, { t: 'Servus', c: 1 }, { t: 'Grüß Gott', c: 1 }, { t: 'Grüezi', c: 2 }
              ], why: 'Moin = norte · Servus y Grüß Gott = Baviera y Austria · Grüezi = Suiza.' },
            { t: 'clasificar', p: 'Respuestas a "Wie geht\'s?": ¿bien o regular?',
              cajas: [{ etiqueta: 'bien', color: 'verde' }, { etiqueta: 'así así', color: 'naranja' }],
              items: [{ t: 'Läuft.', c: 0 }, { t: 'Alles gut.', c: 0 }, { t: 'Super!', c: 0 }, { t: 'Geht so.', c: 1 }, { t: 'Muss ja.', c: 1 }, { t: 'Na ja…', c: 1 }],
              why: 'Läuft, alles gut, super = bien. Geht so, muss ja, na ja = regular.' }
          ]
        },

        {
          id: 'n3', dificultad: 'Medio', titulo: '¿Qué respondes?',
          descripcion: 'Elige la respuesta natural.',
          ejercicios: [
            opc('Tu amigo: "Hast du Lust auf Pizza?"', ['Na klar, gern!', 'Auf Wiederhören!', 'Ich bin Pizza.', 'Nein, ich heiße Pizza.'], 'Na klar, gern! = ¡claro, con gusto!'),
            opc('Tu amigo: "Ich habe die Prüfung bestanden!"', ['Krass, glückwunsch!', 'Auf Wiedersehen!', 'Ich verstehe nicht.', 'Wie bitte, Frau Müller?'], 'Krass/Mega + Glückwunsch = ¡felicidades!'),
            opc('Tu amigo: "Wie geht\'s?"', ['Läuft. Und dir?', 'Ich bin Läuft.', 'Wie geht es Ihnen?', 'Danke, bitte schön.'], 'Entre amigos: respuesta corta + "Und dir?".'),
            opc('"Hast du keinen Hunger?" – quieres decir "sí, sí tengo".', ['Doch!', 'Ja, nein!', 'Nein!', 'Kein!'], 'Doch contradice una pregunta negativa.'),
            opc('Un amigo se retrasa y dice "Sorry!". Respondes…', ['Kein Problem!', 'Guten Tag!', 'Ich möchte zahlen.', 'Auf Wiedersehen!'], 'Kein Problem / Kein Ding = no pasa nada.'),
            opc('Tu jefa te saluda por la mañana. ¿Cuál es adecuado?', ['Guten Morgen!', 'Na, Alter?', 'Digga!', 'Hä?'], 'Con jefe o profesor: registro neutro-formal.'),
            opc('Un desconocido en una tienda de Hamburgo te dice "Moin!". Es…', ['Un saludo normal.', 'Un insulto.', 'Una pregunta de precio.', 'Una despedida solo por la noche.'], 'Moin vale como saludo a cualquier hora en el norte.')
          ]
        },

        {
          id: 'n4', dificultad: 'Medio', titulo: 'Forma hablada',
          descripcion: 'Escribe la versión corta que se oye en la calle.',
          ejercicios: [
            { t: 'escribir', p: 'Forma hablada de "Wie geht es dir?" →', ok: ['Wie geht\'s', 'Wie gehts'], why: 'es se junta con geht: wie geht\'s.' },
            { t: 'escribir', p: 'Forma hablada de "Ich habe" →', ok: ['Ich hab'], why: 'Se pierde la -e final: ich hab.' },
            { t: 'escribir', p: 'Forma hablada de "Hast du Zeit?" →', ok: ['Haste Zeit'], why: 'hast + du → haste.' },
            { t: 'escribir', p: 'Forma hablada de "Kannst du mir helfen?" →', ok: ['Kannste mir helfen'], why: 'kannst + du → kannste.' },
            { t: 'escribir', p: 'Forma hablada de "nicht" →', ok: ['nich'], why: 'La t final casi no se oye: nich.' },
            { t: 'escribir', p: 'Forma hablada de "Das ist gut." →', ok: ['Das is gut'], why: 'ist → is.' },
            { t: 'escribir', p: 'Forma hablada de "Ich weiß es nicht." →', ok: ['Keine Ahnung', 'Weiß nich'], why: 'Keine Ahnung (ni idea) o Weiß nich.' },
            opc('¿Qué significa "Gehn wir?"', ['¿Vamos?', '¿Ven aquí?', '¿Quién ve?', '¿Dónde vamos?'], 'gehn = gehen: ¿vamos?')
          ]
        },

        {
          id: 'n5', dificultad: 'Difícil', titulo: 'Ordena el diálogo',
          descripcion: 'Pon las líneas en el orden en que sucedieron.',
          ejercicios: [
            dialogo('quedar con un amigo', ['Hast du morgen Zeit?', 'Ja, warum?', 'Wollen wir ins Kino gehen?', 'Gern! Wann fängt der Film an?', 'Um halb acht.'],
              'Pregunta → respuesta → propuesta → aceptación + pregunta → hora.'),
            dialogo('en la panadería', ['Guten Morgen! Was darf es sein?', 'Vier Brötchen, bitte.', 'Sonst noch etwas?', 'Nein, danke. Was kostet das?', 'Zwei Euro.'],
              'Saludo → pedido → ¿algo más? → no + precio → respuesta.'),
            dialogo('en la calle', ['Entschuldigung, wie komme ich zum Bahnhof?', 'Gehen Sie geradeaus.', 'Ist es weit?', 'Nein, nur fünf Minuten.', 'Vielen Dank!'],
              'Disculpe + pregunta → indicación → ¿lejos? → no → gracias.'),
            dialogo('conocerse', ['Hallo! Ich bin Tim. Und du?', 'Ich heiße Nayeli.', 'Woher kommst du?', 'Aus Honduras. Und du?', 'Aus Köln.'],
              'Presentarse → nombre → origen → respuesta + vuelta → respuesta.')
          ]
        },

        {
          id: 'n6', dificultad: 'Experto', titulo: 'Registro correcto',
          descripcion: 'Una situación, una frase: ¿cuál encaja?',
          ejercicios: [
            opc('Escribes un correo formal a una empresa. El final es…', ['Mit freundlichen Grüßen', 'Bis dann, Alter', 'LG und HDL', 'Tschö!'], 'Correo formal: Mit freundlichen Grüßen (MfG).'),
            opc('Escribes a una amiga cercana por WhatsApp. El final es…', ['LG', 'Hochachtungsvoll', 'Mit freundlichen Grüßen', 'Sehr geehrte Damen und Herren'], 'LG = liebe Grüße, perfecto entre amigos.'),
            opc('Hablas por teléfono con la empresa y terminas…', ['Auf Wiederhören!', 'Tschö!', 'Moin!', 'Digga!'], 'Por teléfono: Auf Wiederhören (no "Wiedersehen": no os veis).'),
            opc('Quieres decir que algo es genial, en una charla con amigos.', ['Das ist mega!', 'Das ist ungenügend.', 'Das ist ein Problem.', 'Das ist verboten.'], 'mega = genial, informal.'),
            opc('¿Qué frase NO usarías con tu profesora?', ['Na, Alter, alles klar?', 'Guten Tag, Frau Müller.', 'Wie geht es Ihnen?', 'Danke, bis morgen.'], 'Alter y "Na, alles klar?" son para amigos.'),
            opc('Dices "Ich hab keinen Bock." ¿Cómo suena?', ['Informal y directo: no tienes ganas.', 'Muy formal.', 'Una despedida.', 'Un cumplido.'], 'Bock haben = tener ganas. Muy coloquial.')
          ]
        }
      ]
    }
  });
})();
