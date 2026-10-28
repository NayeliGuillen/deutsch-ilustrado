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
    resumen: 'Seis niveles que se abren de uno en uno, con más de 90 ejercicios: registro, regiones, reacciones, forma hablada y diálogos.',
    vista: 'entrenador',

    datos: {
      intro: 'Aquí practicas a entender y elegir el registro correcto: ¿con amigos o con alguien a quien dices Sie?',

      niveles: [

        {
          id: 'n1', dificultad: 'Fácil', titulo: 'Une expresión y significado',
          descripcion: 'Reacciones y palabras de todos los días.',
          partida: 12,
          banco: [
            { t: 'unir', p: 'Une cada interjección con su significado.',
              pares: [['Hä?', '¿eh? ¿cómo?'], ['Naja', 'bueno… (duda)'], ['Genau!', '¡exacto!'], ['Ach so!', '¡ah, ya veo!'], ['Mist!', '¡rayos!']],
              why: 'Hä? = ¿eh? · Naja = bueno, pues… · Genau = exacto · Ach so = ah, ya veo · Mist = ¡rayos! (algo salió mal).' },
            { t: 'unir', p: 'Une cada despedida con su significado.',
              pares: [['Tschüss', 'adiós'], ['Bis später', 'hasta luego (más tarde)'], ['Bis morgen', 'hasta mañana'], ['Mach\'s gut!', 'que te vaya bien'], ['Schönen Tag!', '¡que tengas un buen día!']],
              why: 'Tschüss = adiós · Bis später = hasta luego · Bis morgen = hasta mañana · Mach\'s gut = que te vaya bien.' },
            { t: 'unir', p: 'Une cada adjetivo coloquial con su significado.',
              pares: [['lecker', 'rico (comida)'], ['toll', 'genial'], ['blöd', 'tonto, molesto'], ['nervig', 'pesado, molesto'], ['langweilig', 'aburrido']],
              why: 'lecker = rico (solo de comida) · toll = genial · blöd = tonto/molesto · nervig = pesado · langweilig = aburrido.' },
            opc('"Alles klar?" entre amigos significa…', ['¿Todo bien? / ¿Vale?', '¿Quién es claro?', '¿Cuánto cuesta?', '¿Dónde está todo?'], 'Alles klar? = ¿todo bien?, ¿de acuerdo? Respuesta: "Alles klar" o "Alles gut".'),
            opc('"Kein Problem!" se usa para decir…', ['que no pasa nada', 'que quieres la cuenta', 'tu nombre', 'adiós a tu jefe'], 'Kein Problem = no hay problema, no pasa nada.'),
            opc('"Das ist mir egal." significa…', ['Me da igual.', 'Me gusta mucho.', 'No lo sé.', 'Es mi casa.'], 'egal = da igual. Mir ist es egal = me da lo mismo.'),
            opc('¿Qué significa "Mach\'s gut!"?', ['¡Que te vaya bien!', '¡Hazlo mal!', '¡Cierra la puerta!', '¡Ven aquí!'], 'Despedida cariñosa: que te vaya bien.'),
            opc('"Lecker!" se dice de…', ['la comida que está rica', 'una persona tonta', 'la hora', 'un edificio'], 'lecker = rico, solo para comida y bebida.'),
            opc('"Genau!" significa…', ['¡Exacto!', '¡Despacio!', '¡Mira!', '¡Fuera!'], 'Genau = exacto, eso es.')
          ],
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
          partida: 4,
          banco: [
            { t: 'clasificar', p: '¿Formal o informal?',
              cajas: [{ etiqueta: 'formal', color: 'azul' }, { etiqueta: 'informal', color: 'naranja' }],
              items: [{ t: 'Entschuldigen Sie', c: 0 }, { t: 'Könnten Sie mir helfen?', c: 0 }, { t: 'Sehr geehrte Frau Schmidt', c: 0 }, { t: 'Auf Wiederhören', c: 0 },
                      { t: 'Sorry!', c: 1 }, { t: 'Kannst du mir helfen?', c: 1 }, { t: 'Hi Lena', c: 1 }, { t: 'Kein Ding', c: 1 }],
              why: 'Con Sie y fórmulas de carta = formal. Sorry, Hi, Kein Ding y el du = informal.' },
            { t: 'clasificar', p: '¿Hablas con una persona a la que dices Sie o du?',
              cajas: [{ etiqueta: 'Sie (formal)', color: 'azul' }, { etiqueta: 'du (informal)', color: 'naranja' }],
              items: [{ t: 'Wie heißen Sie?', c: 0 }, { t: 'Haben Sie Zeit?', c: 0 }, { t: 'Kommen Sie mit?', c: 0 }, { t: 'Wie heißt du?', c: 1 }, { t: 'Hast du Zeit?', c: 1 }, { t: 'Kommst du mit?', c: 1 }],
              why: 'Sie → verbo en 3ª persona plural (heißen, haben, kommen). du → heißt, hast, kommst.' },
            { t: 'clasificar', p: '¿Qué despedida usas con quién?',
              cajas: [{ etiqueta: 'formal / teléfono', color: 'azul' }, { etiqueta: 'amigos', color: 'naranja' }],
              items: [{ t: 'Auf Wiedersehen', c: 0 }, { t: 'Auf Wiederhören', c: 0 }, { t: 'Schönen Tag noch', c: 0 }, { t: 'Tschüss', c: 1 }, { t: 'Bis später', c: 1 }, { t: 'Mach\'s gut', c: 1 }],
              why: 'Auf Wiedersehen (se ve) / Auf Wiederhören (por teléfono) = formal. Tschüss, Bis später, Mach\'s gut = entre amigos.' },
            { t: 'clasificar', p: '¿Reacción positiva o negativa?',
              cajas: [{ etiqueta: 'positiva', color: 'verde' }, { etiqueta: 'negativa', color: 'rojo' }],
              items: [{ t: 'Super!', c: 0 }, { t: 'Toll!', c: 0 }, { t: 'Klasse!', c: 0 }, { t: 'Prima!', c: 0 }, { t: 'Mist!', c: 1 }, { t: 'So ein Pech!', c: 1 }, { t: 'Schade!', c: 1 }, { t: 'Oh nein!', c: 1 }],
              why: 'Super, toll, klasse, prima = ¡genial! Mist, So ein Pech, Schade, Oh nein = ¡qué mal!' }
          ],
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
          partida: 12,
          banco: [
            opc('Tu amigo: "Danke dir!"', ['Gern geschehen! / Kein Ding.', 'Auf Wiedersehen!', 'Ich bin dir.', 'Guten Appetit!'], 'Gern geschehen / Kein Ding / Bitte = de nada.'),
            opc('Tu amigo: "Tut mir leid!"', ['Kein Problem.', 'Danke, gleichfalls!', 'Guten Morgen!', 'Ich heiße leid.'], 'Kein Problem / Schon gut = no pasa nada.'),
            opc('Tu amigo: "Wollen wir morgen ins Kino?"', ['Gute Idee!', 'Ich esse Kino.', 'Guten Tag, Herr Kino.', 'Wie bitte, ich bin Kino?'], 'Gute Idee! = ¡buena idea!'),
            opc('Alguien pregunta: "Na, wie war\'s?"', ['War super!', 'Ich war Super-Markt.', 'Ja, nein.', 'Kein Wasser.'], 'War super = estuvo genial. (Wie war\'s? = ¿qué tal fue?)'),
            opc('Tu amigo: "Hast du Hunger?" y sí tienes.', ['Ja, total!', 'Nein, ich bin Hunger.', 'Doch nicht!', 'Ich Hunger kein.'], 'Ja, total = sí, muchísimo. Se dice "Ich habe Hunger", no "ich bin".'),
            opc('Tu amigo: "Möchtest du noch einen Kaffee?"', ['Ja, gern!', 'Ja, Kaffee mich.', 'Nein, Kaffee ist du.', 'Guten Tag, Kaffee!'], 'Ja, gern = sí, con gusto.'),
            opc('Alguien: "Alles Gute zum Geburtstag!"', ['Danke schön!', 'Gute Nacht!', 'Bitte sehr, Geburtstag!', 'Ich habe Geburtstag nicht.'], 'Respondes con "Danke!" o "Danke schön!".'),
            opc('Un amigo te llama: "Hallo, hier ist Anna."', ['Hi Anna! Wie geht\'s?', 'Auf Wiedersehen, Anna!', 'Sehr geehrte Anna!', 'Ich bin kein Anna.'], 'Al teléfono entre amigos: Hi + nombre + pregunta.')
          ],
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
          partida: 12,
          banco: [
            { t: 'escribir', p: 'Forma hablada de "Ich gehe" →', ok: ['Ich geh'], why: 'Se pierde la -e final: ich geh.' },
            { t: 'escribir', p: 'Forma hablada de "Was ist das?" →', ok: ['Was is das'], why: 'ist → is.' },
            { t: 'escribir', p: 'Forma hablada de "Was machst du?" →', ok: ['Was machste'], why: 'machst + du → machste.' },
            { t: 'escribir', p: 'Forma hablada de "Weißt du?" →', ok: ['Weißte'], why: 'weißt + du → weißte.' },
            { t: 'escribir', p: 'Forma hablada de "Lass uns gehen" →', ok: ['Lass uns gehn'], why: 'gehen → gehn.' },
            { t: 'escribir', p: 'Forma hablada de "Ich habe keine Ahnung" →', ok: ['Ich hab keine Ahnung'], why: 'habe → hab. "Keine Ahnung" = ni idea.' },
            opc('¿Qué significa "Kannste"?', ['kannst du', 'kann sie', 'können wir', 'konnte er'], 'Kannste = kannst + du.'),
            opc('"nich" en la calle equivale a…', ['nicht', 'nichts', 'nie', 'nein'], 'La t final casi no se pronuncia: nich.'),
            opc('"Ich muss los." significa…', ['Me tengo que ir.', 'Tengo que perder.', 'Tengo que soltarlo.', 'Debo comprar.'], 'los = en marcha. "Ich muss los" = ya me voy.'),
            opc('"Moment mal!" significa…', ['¡Espera un momento!', '¡Hace un mes!', '¡Una vez más!', '¡Ahora mismo!'], 'Moment mal = espera un momento.')
          ],
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
          banco: [
            dialogo('en el café', ['Hallo, einen Kaffee, bitte.', 'Gern. Mit Milch?', 'Ja, bitte.', 'Sonst noch etwas?', 'Nein, danke. Das ist alles.'],
              'Pedido → ¿con leche? → sí → ¿algo más? → no, eso es todo.'),
            dialogo('llamar a un amigo', ['Hallo Max, hier ist Nayeli.', 'Hi Nayeli! Wie geht\'s?', 'Gut, danke. Hast du heute Zeit?', 'Ja, warum?', 'Wollen wir einen Kaffee trinken?'],
              'Te presentas → te saluda → pregunta → ¿por qué? → propuesta.'),
            dialogo('en el supermercado', ['Entschuldigung, wo finde ich Milch?', 'Dort hinten, links.', 'Danke! Und Brot?', 'Das ist neben der Milch.', 'Super, danke schön!'],
              'Pregunta → respuesta → otra pregunta → respuesta → gracias.'),
            dialogo('despedirse', ['Ich muss jetzt los.', 'Schon? Schade!', 'Ja, ich habe noch einen Termin.', 'Okay, bis bald!', 'Tschüss und mach\'s gut!'],
              'Me voy → ¿ya? → motivo → hasta pronto → adiós.')
          ],
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
          partida: 10,
          banco: [
            opc('Tu profesor te pregunta "Wie geht es Ihnen?". Respondes…', ['Danke, gut. Und Ihnen?', 'Läuft, und dir?', 'Muss ja, Alter.', 'Mega!'], 'Con un profesor: Danke, gut. Und Ihnen? (Sie).'),
            opc('Pides un café en un restaurante. ¿Cuál es más educado?', ['Ich hätte gern einen Kaffee, bitte.', 'Kaffee!', 'Gib mir Kaffee.', 'Ich will Kaffee.'], 'Ich hätte gern… / Ich möchte… son corteses. "Ich will" suena brusco.'),
            opc('Termina tu entrevista de trabajo. Te despides…', ['Auf Wiedersehen!', 'Tschö!', 'Ciao, Alter!', 'Bis dann, Digga!'], 'En una entrevista: Auf Wiedersehen, registro formal.'),
            opc('En un SMS a un amigo, "Bis gleich!" significa…', ['Hasta ahora mismo (nos vemos pronto)', 'Hasta el año que viene', 'Hasta nunca', 'Dime la hora'], 'Bis gleich = hasta enseguida.'),
            opc('Quieres llamar la atención de un señor mayor desconocido.', ['Entschuldigung! / Entschuldigen Sie!', 'Hey du!', 'Alter!', 'Digga!'], 'Con desconocidos: Entschuldigung / Entschuldigen Sie.'),
            opc('"Hochachtungsvoll" se usa en…', ['cartas muy formales (hoy algo anticuado)', 'WhatsApp con amigos', 'conversaciones en la calle', 'saludos al teléfono'], 'Hochachtungsvoll = con toda consideración. Hoy se prefiere "Mit freundlichen Grüßen".'),
            opc('Quieres decirle a un amigo que algo es muy bueno.', ['Das ist super!', 'Das ist verboten.', 'Das ist ungenügend.', 'Das ist ein Problem.'], 'super, toll, mega = genial.'),
            opc('Conoces a la madre de tu amigo. ¿Cómo la saludas?', ['Guten Tag, Frau Weber.', 'Na, Alter?', 'Hey, Digga!', 'Hä?'], 'Con adultos que no conoces: Guten Tag + Frau/Herr + apellido.')
          ],
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
