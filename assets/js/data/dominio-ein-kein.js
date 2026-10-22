/* ============================================================
   data/dominio-ein-kein.js — ein, eine, kein, keine a fondo
   ============================================================ */

DE.registrarLeccion({
  id: 'dominio-ein-kein',
  titulo: 'ein, eine, kein, keine a fondo',
  icono: 'documento',
  grupo: 'Domina el tema',
  color: 'verde',
  resumen: 'Un, una, ningún, ninguna: la fórmula exacta, el plural y los errores reales más comunes.',
  vista: 'infografia',

  datos: {
    titulo: 'ein · eine · kein · keine',
    subtitulo: 'Decir "hay" y "no hay"',
    cinta: 'kein = k + ein: la misma palabra con un "no" delante',
    resumen: 'Cuatro palabras que parecen muchas y en realidad son una sola con dos formas. ' +
             'Aquí aprendes cuándo va cada una, cómo se niega sin errores y qué hacer con el plural.',

    tarjetas: [
      {
        n: 1, color: 'morado', icono: 'idea', titulo: 'La idea: una palabra, dos formas',
        bloques: [
          { tipo: 'texto', texto: 'Imagina que ein es una puerta abierta y kein es la misma puerta con un candado delante: la k. Todo lo que aprendas de ein vale para kein. Solo hay que añadir la k al principio para decir "ningún / ninguna".' },
          { tipo: 'tabla', encabezados: ['Palabra', 'Afirmar (un/una)', 'Negar (ningún/a)'], filas: [
            ['der-palabra', { de: 'ein' }, { de: 'kein' }],
            ['die-palabra', { de: 'eine' }, { de: 'keine' }],
            ['das-palabra', { de: 'ein' }, { de: 'kein' }],
            ['Plural', 'sin artículo', { de: 'keine' }]
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'Solo existen dos finales: sin -e (ein, kein) para der y das; con -e (eine, keine) para die y para todo plural negativo.' }
        ]
      },
      {
        n: 2, color: 'azul', icono: 'diana', titulo: 'Cómo elegir en 3 pasos',
        bloques: [
          { tipo: 'lista', estilo: 'corazon', items: [
            'Paso 1: ¿la palabra está en plural? Entonces: afirmar = sin artículo; negar = keine.',
            'Paso 2: si es singular, ¿cuál es su artículo? der o das → ein / kein.',
            'Paso 3: si el artículo es die → eine / keine.'
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Das ist ein Hotel.', es: 'das Hotel → ein' },
            { de: 'Das ist eine Bank.', es: 'die Bank → eine' },
            { de: 'Das ist kein Bahnhof.', es: 'der Bahnhof → kein' },
            { de: 'Das ist keine Schule.', es: 'die Schule → keine' },
            { de: 'Das sind Autos.', es: 'plural → sin artículo' },
            { de: 'Das sind keine Autos.', es: 'plural negativo → keine' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Memoria rápida: der y das comparten llave (ein / kein). Solo die, y todo plural negativo, usan la llave con -e.' }
        ]
      },
      {
        n: 3, color: 'naranja', icono: 'ubicacion', titulo: 'ist o sind: el verbo también se entera',
        bloques: [
          { tipo: 'texto', texto: 'Si el sustantivo es singular, el verbo es ist. Si es plural, sind. El verbo debe coincidir con el sustantivo: no se puede decir "Das sind ein Fahrrad".' },
          { tipo: 'tabla', encabezados: ['Singular', 'Plural'], filas: [
            [{ de: 'Das ist ein Auto.' }, { de: 'Das sind Autos.' }],
            [{ de: 'Das ist keine Uhr.' }, { de: 'Das sind keine Uhren.' }],
            [{ de: 'Das ist ein Foto.' }, { de: 'Das sind Fotos.' }],
            [{ de: 'Das ist kein Buch.' }, { de: 'Das sind keine Bücher.' }]
          ]},
          { tipo: 'aviso', icono: 'lapiz', texto: 'Ojo con la ortografía: sind lleva d al final. Es un error frecuente escribir "sin" (que es otra palabra o parte de otra).' }
        ]
      },
      {
        n: 4, color: 'turquesa', icono: 'mensaje', titulo: 'Contraste: no es X, es Y',
        bloques: [
          { tipo: 'texto', texto: 'El contraste más natural en A1 es "no es X, es Y". En alemán se dice igual: Das ist kein Restaurant, das ist ein Café. Fíjate en la coma y en que repites das ist.' },
          { tipo: 'ejemplos', items: [
            { de: 'Das ist kein Restaurant, das ist ein Café.', es: 'No es un restaurante, es una cafetería.' },
            { de: 'Das ist keine Straßenbahn, das ist ein Bus.', es: 'No es un tranvía, es un autobús.' },
            { de: 'Das ist kein Turm, das ist eine Brücke.', es: 'No es una torre, es un puente.' }
          ]},
          { tipo: 'aviso', icono: 'ojo', texto: 'Aquí el artículo de cada sustantivo es independiente. Mira el primero (Restaurant = das → kein), y luego el segundo (Café = das → ein). Cada uno por separado.' }
        ]
      },
      {
        n: 5, color: 'rosa', icono: 'ubicacion', titulo: 'Decir qué hay y qué no hay en una ciudad',
        bloques: [
          { tipo: 'texto', texto: 'Este molde, sencillo y sin errores, sirve para describir cualquier ciudad: In X ist / sind …, aber kein / keine …' },
          { tipo: 'ejemplos', items: [
            { de: 'In Berlin ist ein Park, aber kein Strand.', es: 'En Berlín hay un parque, pero no hay playa.' },
            { de: 'In San Pedro Sula sind Hotels, aber keine Berge.', es: 'En San Pedro Sula hay hoteles, pero no montañas.' },
            { de: 'In Köln ist eine Brücke, aber keine Burg.', es: 'En Colonia hay un puente, pero no un castillo.' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Con ist va un sustantivo singular; con sind, uno plural. Si dudas, elige un sustantivo singular y usa ist: es más fácil.' }
        ]
      },
      {
        n: 6, color: 'rojo', icono: 'prohibido', titulo: 'kein o nicht: no los mezcles',
        bloques: [
          { tipo: 'texto', texto: 'En español "no" sirve para todo. En alemán hay dos: kein niega SUSTANTIVOS con ein/eine o sin artículo; nicht niega todo lo demás (verbos, adjetivos, lugares). Para elegir, pregúntate: ¿lo que niego es un sustantivo sin artículo definido?' },
          { tipo: 'tabla', encabezados: ['Qué niegas', 'Usa', 'Ejemplo'], filas: [
            ['un sustantivo (ein / sin artículo)', 'kein / keine', { de: 'Ich habe kein Auto.' }],
            ['un adjetivo', 'nicht', { de: 'Das Hotel ist nicht groß.' }],
            ['un verbo', 'nicht', { de: 'Ich arbeite nicht.' }],
            ['un sustantivo con der / die / das', 'nicht', { de: 'Das ist nicht der Bahnhof.' }]
          ]},
          { tipo: 'aviso', icono: 'ojo', texto: 'Error clásico: traducir "no es un hotel" como "Das ist nicht ein Hotel". En alemán se dice Das ist kein Hotel. Cuando oigas "no es un/una …", piensa kein / keine.' }
        ]
      },
      {
        n: 7, color: 'indigo', icono: 'ojo', titulo: 'Errores reales de práctica y su arreglo',
        bloques: [
          { tipo: 'texto', texto: 'Estos errores salieron de ejercicios reales. Mira el porqué de cada uno: casi siempre es lo mismo, elegir el artículo sin comprobar el género.' },
          { tipo: 'tabla', encabezados: ['Escrito', 'Correcto', 'Por qué'], filas: [
            ['kein Straßenbahn', { de: 'keine Straßenbahn' }, 'die Bahn → keine'],
            ['eine Bus', { de: 'ein Bus' }, 'der Bus → ein'],
            ['keine Turm', { de: 'kein Turm' }, 'der Turm → kein'],
            ['keine Theater', { de: 'kein Theater' }, 'das Theater → kein'],
            ['Das sind ein Fahrrad', { de: 'Das ist ein Fahrrad' }, 'singular → ist'],
            ['Das sin keine Fotos', { de: 'Das sind keine Fotos' }, 'sind lleva d'],
            ['Buckere', { de: 'Bücher' }, 'Umlaut + -er'],
            ['eine ins Kino', { de: 'ein Kino' }, 'ins = in das; aquí no va']
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'Antes de escribir ein / eine / kein / keine, haz siempre la misma pregunta: ¿qué artículo tiene esta palabra? Si no lo sabes, búscalo en el vocabulario. Cinco segundos evitan el error.' }
        ]
      },
      {
        n: 8, color: 'lima', icono: 'audio', titulo: 'Cómo suenan',
        bloques: [
          { tipo: 'tabla', encabezados: ['Palabra', 'Curso', 'Fácil'], filas: [
            ['ein', 'ain', 'AIN (ei = "ai")'],
            ['eine', 'AI-ne', 'AI-ne (e final breve)'],
            ['kein', 'kain', 'KAIN (k como en "casa")'],
            ['keine', 'KAI-ne', 'KAI-ne']
          ]},
          { tipo: 'aviso', icono: 'ojo', texto: 'Ojo con ei = "ai" (Eis = "ais") y ie = "i" larga (Bier = "bia"). Si los mezclas, ein y eine se confunden con otras palabras.' }
        ]
      },
      {
        n: 9, color: 'verde', icono: 'estrella', titulo: 'Más adelante (adelanto)',
        bloques: [
          { tipo: 'texto', texto: 'Cuando uses ein / kein como OBJETO de un verbo (Ich habe …, Es gibt …), las palabras der cambian: ein → einen, kein → keinen. Las die, das y el plural quedan igual. No lo necesitas todavía; por ahora quédate con ist / sind y no habrá error.' },
          { tipo: 'ejemplos', items: [
            { de: 'Ich habe einen Bruder.', es: 'Tengo un hermano. (der Bruder → einen)' },
            { de: 'Ich habe keinen Bruder.', es: 'No tengo hermano.' },
            { de: 'Ich habe eine Schwester.', es: 'Tengo una hermana. (die → igual)' },
            { de: 'Ich habe kein Auto.', es: 'No tengo coche. (das → igual)' }
          ]}
        ]
      }
    ]
  }
});
