/* ============================================================
   data/dominio-direcciones.js — Cómo preguntar y dar direcciones
   ============================================================ */

DE.registrarLeccion({
  id: 'dominio-direcciones',
  titulo: 'Cómo dar direcciones',
  icono: 'brujula',
  grupo: 'Domina el tema',
  color: 'turquesa',
  resumen: 'Preguntar, indicar el camino y entender la respuesta, con método y con mapas.',
  vista: 'infografia',

  datos: {
    titulo: 'Wo ist …?',
    subtitulo: 'Preguntar y dar direcciones',
    cinta: 'Pregunta + camino + dónde queda',
    resumen: 'Toda indicación de camino tiene tres piezas, siempre en el mismo orden. ' +
             'Si las dominas, entiendes y das direcciones sin pensar en la gramática.',

    tarjetas: [
      {
        n: 1, color: 'morado', icono: 'idea', titulo: 'La idea: tres piezas y un GPS',
        bloques: [
          { tipo: 'texto', texto: 'Piensa en un GPS que habla. Primero dice qué hacer ("gire a la izquierda"), luego cuándo ("después") y al final dónde está tu destino ("el café queda a su derecha"). En alemán es exactamente igual.' },
          { tipo: 'tabla', encabezados: ['Pieza', 'Función', 'Ejemplo'], filas: [
            ['1. Pregunta', 'pedir ayuda', { de: 'Entschuldigung, wo ist der Bahnhof?' }],
            ['2. Camino', 'qué hacer', { de: 'Gehen Sie links, dann geradeaus.' }],
            ['3. Destino', 'dónde queda', { de: 'Der Bahnhof ist rechts.' }]
          ]}
        ]
      },
      {
        n: 2, color: 'azul', icono: 'mensaje', titulo: 'Pieza 1: preguntar con educación',
        bloques: [
          { tipo: 'texto', texto: 'Comparo con el español porque aquí la cortesía funciona igual: primero llamas la atención con "disculpe" y después preguntas. En alemán la palabra es Entschuldigung.' },
          { tipo: 'tabla', encabezados: ['Pregunta', 'Significado', 'Cuándo'], filas: [
            [{ de: 'Wo ist …?' }, '¿Dónde está …?', 'la más directa y usada'],
            [{ de: 'Wo ist hier …?' }, '¿Dónde está por aquí …?', 'cuando buscas algo cercano'],
            [{ de: 'Gibt es hier …?' }, '¿Hay por aquí …?', 'no sabes si existe'],
            [{ de: 'Wie komme ich zum / zur …?' }, '¿Cómo llego a …?', 'más natural en la calle']
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Entschuldigung, wo ist die Post?', fon: 'ent-SHUL-di-gung, voo ist dii post', es: 'Disculpe, ¿dónde está correos?' },
            { de: 'Gibt es hier eine Apotheke?', fon: 'gipt es jiia AI-ne a-po-TEE-ke', es: '¿Hay por aquí una farmacia?' },
            { de: 'Wie komme ich zum Bahnhof?', fon: 'vii KO-me ij tsum BAAN-joof', es: '¿Cómo llego a la estación?' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'zum = zu + dem (para palabras der y das): zum Bahnhof, zum Hotel. zur = zu + der (para palabras die): zur Post, zur Schule. Úsalos como frases hechas por ahora.' }
        ]
      },
      {
        n: 3, color: 'verde', icono: 'brujula', titulo: 'Pieza 2: el camino (Sie y du)',
        bloques: [
          { tipo: 'texto', texto: 'Las indicaciones son órdenes amables, igual que en español "Vaya a la izquierda". El verbo va primero y detrás va Sie: Gehen Sie … Esto es la forma formal, la que usarás con desconocidos.' },
          { tipo: 'tabla', encabezados: ['Significa', 'Formal (Sie)', 'Amigos (du)'], filas: [
            ['izquierda', { de: 'Gehen Sie links.' }, { de: 'Geh links.' }],
            ['derecha', { de: 'Gehen Sie rechts.' }, { de: 'Geh rechts.' }],
            ['todo recto', { de: 'Gehen Sie geradeaus.' }, { de: 'Geh geradeaus.' }],
            ['atrás', { de: 'Gehen Sie zurück.' }, { de: 'Geh zurück.' }]
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'En la calle también se oye: Fahren Sie … (si va en coche o autobús), Nehmen Sie die erste Straße links (tome la primera calle a la izquierda). Todas empiezan con el verbo.' }
        ]
      },
      {
        n: 4, color: 'naranja', icono: 'flechaDer', titulo: 'Enlazar pasos: dann y danach',
        bloques: [
          { tipo: 'texto', texto: 'Cada paso se une con dann (luego). Si empiezas la frase con dann, el verbo se queda en segundo lugar: Dann gehen Sie rechts. Nunca "Dann Sie gehen".' },
          { tipo: 'ejemplos', items: [
            { de: 'Gehen Sie links, dann geradeaus.', fon: 'GEE-en sii links, dan gue-raa-de-AUS', es: 'Vaya a la izquierda, luego todo recto.' },
            { de: 'Gehen Sie geradeaus. Dann gehen Sie rechts.', fon: 'GEE-en sii gue-raa-de-AUS. dan GEE-en sii rejts', es: 'Vaya recto. Luego vaya a la derecha.' },
            { de: 'Gehen Sie hier links und dann rechts.', fon: 'GEE-en sii jiia links unt dan rejts', es: 'Vaya aquí a la izquierda y luego a la derecha.' }
          ]},
          { tipo: 'aviso', icono: 'ojo', texto: 'Ojo con dann y den: dann = "luego"; den es un artículo. Suenan casi igual, pero dann lleva a corta y es la palabra de las rutas.' }
        ]
      },
      {
        n: 5, color: 'rosa', icono: 'ubicacion', titulo: 'Pieza 3: dónde queda el destino',
        bloques: [
          { tipo: 'texto', texto: 'La última pieza usa "ist" y la posición. El sustantivo lleva su artículo definido (der, die, das), porque ya es un lugar concreto que ambos conocen.' },
          { tipo: 'ejemplos', items: [
            { de: 'Der Bahnhof ist rechts.', es: 'La estación está a la derecha.' },
            { de: 'Die Post ist links.', es: 'Correos está a la izquierda.' },
            { de: 'Das Hotel ist geradeaus.', es: 'El hotel está todo recto.' },
            { de: 'Da ist die Apotheke.', es: 'Ahí está la farmacia.' }
          ]},
          { tipo: 'tabla', encabezados: ['Palabra', 'Qué señala'], filas: [
            [{ de: 'Da ist …' }, 'ahí está (lo ves cerca)'],
            [{ de: 'Dort ist …' }, 'allí está (más lejos)'],
            [{ de: 'Hier ist …' }, 'aquí está'],
            [{ de: 'neben / gegenüber' }, 'al lado / enfrente']
          ]}
        ]
      },
      {
        n: 6, color: 'rojo', icono: 'prohibido', titulo: 'Trampas para hispanohablantes',
        bloques: [
          { tipo: 'lista', estilo: 'corazon', items: [
            'also NO significa "también" (como el inglés also): significa "entonces". "Also hier links?" = ¿Entonces aquí a la izquierda?',
            'geradeaus es UNA sola palabra. No se escribe "gerade aus".',
            'rechts se parece a la palabra inglesa right (derecha). Si hablas inglés, ya tienes el truco: rechts = right.',
            'links: con tu mano izquierda forma una L con el pulgar y el índice. L de links.',
            'Gehen Sie, con g como en "gato" y la h que NO suena: GE-en.',
            'Der Bahnhof es "la estación" aunque en español sea femenino. Aprende cada lugar con su artículo.'
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'En el día a día también se dice nach links / nach rechts. Gehen Sie nach links suena muy natural y significa lo mismo.' }
        ]
      },
      {
        n: 7, color: 'indigo', icono: 'mensaje', titulo: 'Un diálogo real, de principio a fin',
        bloques: [
          { tipo: 'ejemplos', items: [
            { de: 'Entschuldigung, wo ist der Bahnhof?', es: 'Disculpe, ¿dónde está la estación?' },
            { de: 'Gehen Sie hier geradeaus, dann links.', es: 'Vaya aquí todo recto, luego a la izquierda.' },
            { de: 'Also hier geradeaus und dann links?', es: '¿Entonces aquí todo recto y luego a la izquierda?' },
            { de: 'Ja, genau. Der Bahnhof ist rechts.', es: 'Sí, exacto. La estación está a la derecha.' },
            { de: 'Vielen Dank!', es: '¡Muchas gracias!' },
            { de: 'Gern geschehen!', es: '¡De nada!' }
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'Repetir la indicación con "Also …?" es un truco profesional: confirmas que entendiste y, si te equivocaste, te corrigen en el acto.' }
        ]
      },
      {
        n: 8, color: 'lima', icono: 'audio', titulo: 'Cuando no entiendes (frases de rescate)',
        bloques: [
          { tipo: 'tabla', encabezados: ['Frase', 'Significado'], filas: [
            [{ de: 'Noch einmal, bitte?' }, '¿Otra vez, por favor?'],
            [{ de: 'Langsamer, bitte.' }, 'Más despacio, por favor.'],
            [{ de: 'Ich verstehe nicht.' }, 'No entiendo.'],
            [{ de: 'Ich bin nicht von hier.' }, 'No soy de aquí.'],
            [{ de: 'Können Sie das bitte aufschreiben?' }, '¿Puede escribirlo, por favor?']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Aprenderlas no es rendirse: es lo que hace cualquier hablante de un idioma nuevo. Con estas cinco frases, siempre sales adelante.' }
        ]
      },
      {
        n: 9, color: 'verde', icono: 'diana', titulo: 'Método para leer un plano',
        bloques: [
          { tipo: 'lista', estilo: 'corazon', items: [
            'Ubícate: en el entrenamiento, el punto naranja con flecha eres tú y la flecha indica hacia dónde miras.',
            'Cada palabra (links, rechts, geradeaus) es UNA calle hasta el siguiente cruce.',
            'links y rechts giran respecto a TI, no respecto al mapa. Si miras hacia arriba, links es la izquierda del papel; si miras hacia abajo, links es la derecha del papel.',
            'Después de la última calle, el edificio "links" o "rechts" es el que queda a ese lado del camino.',
            'Comprueba: ¿el nombre del edificio coincide con lo que dice la frase?'
          ]},
          { tipo: 'aviso', icono: 'ojo', texto: 'El error número uno en los mapas: girar pensando en el papel y no en tu dirección. Gira con el cuerpo: imagina que estás de pie en el punto.' }
        ]
      }
    ]
  }
});
