/* ============================================================
   data/slang.js — Cómo se habla de verdad
   ------------------------------------------------------------
   Lo que no sale en el manual: saludos regionales, reacciones,
   palabras de jóvenes y el alemán hablado (contracciones).
   Cada bloque indica el registro: ¿con quién se puede decir?
   El slang cambia rápido: usa lo básico y observa a tus amigos.
   ============================================================ */

DE.registrarLeccion({
  id: 'slang',
  titulo: 'Alemán real: lo que se dice de verdad',
  icono: 'mensaje',
  grupo: 'Hablar y escribir',
  color: 'rosa',
  resumen: 'Saludos regionales, reacciones, palabras de amigos y el alemán hablado, con aviso de cuándo usarlos.',
  vista: 'infografia',

  datos: {
    titulo: 'Alemán real',
    subtitulo: 'lo que no sale en el manual',
    cinta: 'Con amigos sí · con el jefe no',
    resumen: 'Para entender conversaciones reales. Para HABLAR, empieza por lo suave (Moin, Na klar, Echt?, Mega) y deja lo fuerte hasta que lo oigas mucho.',

    tarjetas: [
      {
        n: 1, color: 'azul', icono: 'globo', titulo: 'Saludos según la región', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'tabla', encabezados: ['Se dice', 'Dónde', 'Significa'], filas: [
            ['Hallo / Hi / Hey', 'Toda Alemania', 'hola (con amigos: Hi / Hey)'],
            ['Moin (Moin Moin)', 'Norte', 'hola a cualquier hora (a veces también adiós)'],
            ['Servus', 'Baviera y Austria', 'hola y adiós, informal'],
            ['Grüß Gott', 'Baviera y Austria', 'hola, algo más formal'],
            ['Grüezi', 'Suiza', 'hola (formal)'],
            ['Tschüss / Tschö', 'Toda Alemania (Tschö: más coloquial, sobre todo oeste y norte)', 'adiós'],
            ['Bis später / Bis dann', 'Toda Alemania', 'hasta luego'],
            ['Mach\'s gut!', 'Toda Alemania', 'cuídate (despedida cálida)']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Moin vale a cualquier hora; "Guten Morgen" solo por la mañana. Si oyes "Moin" en el sur, probablemente viene alguien del norte.' }
        ]
      },
      {
        n: 2, color: 'verde', icono: 'personas', titulo: '"¿Cómo estás?" de verdad', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'texto', texto: 'El libro dice "Wie geht es Ihnen?". Entre amigos:' },
          { tipo: 'ejemplos', items: [
            { de: 'Na? Alles klar?', es: '¿Qué tal? ¿Todo bien? (saludo muy informal)' },
            { de: 'Wie geht\'s?', es: '¿Cómo estás? (con du)' },
            { de: 'Läuft.', es: 'Va bien. (todo funciona)' },
            { de: 'Muss ja.', es: 'Tirando. (respuesta típica algo irónica)' },
            { de: 'Geht so.', es: 'Regular.' },
            { de: 'Alles gut, und dir?', es: 'Todo bien, ¿y tú?' }
          ]},
          { tipo: 'aviso', icono: 'atencion', texto: '"Wie geht\'s?" es una pregunta de verdad: se espera una respuesta corta, no un "bien" mecánico. Con el jefe: "Wie geht es Ihnen?".' }
        ]
      },
      {
        n: 3, color: 'naranja', icono: 'rayo', titulo: 'Reacciones', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'tabla', encabezados: ['Se dice', 'Significa', 'Registro'], filas: [
            ['Echt? / Wirklich?', '¿en serio?', 'neutro'],
            ['Krass!', '¡brutal! ¡increíble!', 'informal'],
            ['Mega! / Super!', '¡genial!', 'informal'],
            ['Cool! / Nice!', '¡genial! (anglicismos)', 'informal'],
            ['Geil!', '¡genial! (muy juvenil)', 'solo amigos'],
            ['Quatsch!', '¡tonterías!', 'informal'],
            ['Na klar! / Klar!', '¡claro!', 'neutro'],
            ['Genau! / Stimmt!', '¡exacto! / ¡es verdad!', 'neutro'],
            ['Ach so!', '¡ah, ya!', 'neutro'],
            ['Hä?', '¿eh?', 'solo amigos'],
            ['Doch!', '¡sí! (contradice una negación)', 'neutro'],
            ['Jein', 'sí y no (ja + nein)', 'informal'],
            ['Mal gucken / schauen', 'ya veremos', 'informal'],
            ['Kein Problem / Kein Ding', 'no hay problema', 'informal'],
            ['Passt schon', 'está bien, no pasa nada', 'informal (sur)']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Doch es la respuesta a una pregunta NEGATIVA: "Hast du keinen Hunger?" – "Doch!" = ¡sí que tengo!' }
        ]
      },
      {
        n: 4, color: 'morado', icono: 'musica', titulo: 'Planes y ganas', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'ejemplos', items: [
            { de: 'Hast du Bock auf Kino?', es: '¿Tienes ganas de ir al cine? (informal)' },
            { de: 'Ich habe keinen Bock.', es: 'No tengo ganas. (informal; ojo: Bock es der → keinen)' },
            { de: 'Ich habe Lust auf Pizza.', es: 'Me apetece pizza. (más neutro que Bock)' },
            { de: 'Wollen wir was machen?', es: '¿Hacemos algo?' },
            { de: 'Lass uns chillen.', es: 'Vamos a relajarnos.' },
            { de: 'Wir hängen oft zusammen ab.', es: 'Solemos pasar el rato juntos. (abhängen)' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: '"Lust haben auf + Akkusativ" y "Bock haben auf + Akkusativ" significan "tener ganas de". Bock = más juvenil.' }
        ]
      },
      {
        n: 5, color: 'rojo', icono: 'personas', titulo: 'Cómo llamar a la gente', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'tabla', encabezados: ['Se dice', 'Significa', 'Ojo'], filas: [
            ['Alter', 'tío, colega (¡no es "viejo"!)', 'solo amigos; con desconocidos suena a pelea'],
            ['Digga', 'tío, colega', 'jóvenes; originario de Hamburgo'],
            ['der Kumpel', 'colega, amigo', 'neutro'],
            ['der Kollege', 'compañero de trabajo', 'neutro'],
            ['der Typ', 'el tío, el tipo', 'informal'],
            ['die Leute', 'la gente', 'neutro']
          ]},
          { tipo: 'aviso', icono: 'alerta', texto: 'Trampa: "mein Freund" puede ser mi novio o mi amigo. Para dejar claro: "mein Kumpel / ein Freund von mir" (amigo) o "mein fester Freund" (novio).' }
        ]
      },
      {
        n: 6, color: 'turquesa', icono: 'tipografia', titulo: 'Escrito vs. hablado', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'texto', texto: 'La gente "se come" letras. En el examen escribe la forma completa; para entender, necesitas reconocer la corta:' },
          { tipo: 'tabla', encabezados: ['Escrito', 'Hablado', 'Español'], filas: [
            ['Wie geht es dir?', 'Wie geht\'s?', '¿cómo estás?'],
            ['Ich habe', 'Ich hab', 'tengo'],
            ['Hast du Zeit?', 'Haste Zeit?', '¿tienes tiempo?'],
            ['Kannst du mir helfen?', 'Kannste mir helfen?', '¿puedes ayudarme?'],
            ['Das ist gut.', 'Das is gut.', 'eso está bien'],
            ['nicht', 'nich', 'no'],
            ['ein / eine', '\'n / \'ne', 'un / una'],
            ['Gehen wir?', 'Gehn wir?', '¿vamos?'],
            ['Ich weiß nicht.', 'Weiß nich.', 'no sé'],
            ['Es gibt', 'Es gibt\'s / Gibt\'s', 'hay'],
            ['Ich weiß es nicht.', 'Keine Ahnung.', 'ni idea']
          ]}
        ]
      },
      {
        n: 7, color: 'amarillo', icono: 'prohibido', titulo: 'Palabrotas suaves (aviso)', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'texto', texto: 'Las oirás en la calle y en series. Para ti: entiéndelas y no las uses hasta estar seguro del contexto.' },
          { tipo: 'tabla', encabezados: ['Palabra', 'Fuerza', 'Qué es'], filas: [
            ['Mist!', 'suave', 'rayos, caramba (casi inocente)'],
            ['Mensch!', 'suave', '¡hombre! (sorpresa o enfado leve)'],
            ['Verdammt!', 'media', 'maldición'],
            ['Scheiße!', 'fuerte', 'vulgar: se oye mucho, pero no con profesores, jefes ni desconocidos']
          ]},
          { tipo: 'aviso', icono: 'alerta', texto: 'Con extranjeros que hablan con acento, una palabrota mal puesta suena más fuerte de lo que crees. Mejor decir "Mist!" o "Oh nein!".' }
        ]
      },
      {
        n: 8, color: 'azul', icono: 'mensaje', titulo: 'Mensajes y WhatsApp', etiqueta: 'EXTRA',
        bloques: [
          { tipo: 'tabla', encabezados: ['Abreviatura', 'Significa', 'Cuándo'], filas: [
            ['LG', 'liebe Grüße', 'informal, final de mensaje'],
            ['VG', 'viele Grüße', 'informal o semiformal'],
            ['MfG', 'Mit freundlichen Grüßen', 'correos formales'],
            ['HDL', 'hab dich lieb', 'familia y amigos'],
            ['Jo / Joa', 'sí (muy relajado)', 'amigos'],
            ['Nö', 'no (muy relajado)', 'amigos']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Regla de oro: con alguien a quien dices Sie, ni abreviaturas ni slang. Con alguien a quien dices du y que habla así, puedes copiar su estilo.' }
        ]
      }
    ]
  }
});
