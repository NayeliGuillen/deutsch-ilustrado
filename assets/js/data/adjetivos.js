/* ============================================================
   data/adjetivos.js — Posición y declinación del adjetivo
   ============================================================ */

DE.registrarLeccion({
  id: 'adjetivos',
  titulo: 'Adjetivos',
  icono: 'paleta',
  grupo: 'Gramática esencial',
  color: 'indigo',
  resumen: 'Cuándo lleva terminación, cuándo no, y el orden dentro de la frase.',
  vista: 'infografia',

  datos: {
    titulo: 'Los adjetivos',
    subtitulo: 'Adjektive',
    cinta: 'Antes del sustantivo: declina',
    resumen: 'La regla más simple del alemán: si el adjetivo va DELANTE del sustantivo, lleva terminación. Si va detrás del verbo, no lleva nada.',

    tarjetas: [
      {
        n: 1, color: 'morado', icono: 'idea', titulo: 'La regla de oro',
        bloques: [
          { tipo: 'texto', texto: 'A diferencia del español, en alemán el adjetivo calificativo va SIEMPRE delante del sustantivo. Y solo entonces se declina.' },
          { tipo: 'ejemplos', items: [
            { de: 'Das Auto ist neu.', es: 'El coche es nuevo. → sin terminación' },
            { de: 'Das neue Auto', es: 'El coche nuevo → con terminación' }
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'Detrás del verbo (sein, werden, bleiben) el adjetivo NUNCA cambia. Es la posición más fácil: úsala al principio.' }
        ]
      },
      {
        n: 2, color: 'verde', icono: 'libro', titulo: 'Con artículo definido',
        bloques: [
          { tipo: 'texto', texto: 'Tras der/die/das el adjetivo casi siempre acaba en -e o -en. Se llama "declinación débil".' },
          { tipo: 'tabla', encabezados: ['Caso', 'Masc.', 'Fem.', 'Neutro', 'Plural'], filas: [
            ['Nom.', 'der gute', 'die gute', 'das gute', 'die guten'],
            ['Akk.', 'den guten', 'die gute', 'das gute', 'die guten'],
            ['Dat.', 'dem guten', 'der guten', 'dem guten', 'den guten']
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Truco: solo hay -e en las tres casillas del nominativo singular (y el acusativo fem./neutro). Todo lo demás es -en.' }
        ]
      },
      {
        n: 3, color: 'azul', icono: 'libro', titulo: 'Con artículo indefinido',
        bloques: [
          { tipo: 'texto', texto: 'Tras ein/eine/kein/mein el adjetivo carga con la información del género, porque "ein" no la muestra.' },
          { tipo: 'tabla', encabezados: ['Caso', 'Masc.', 'Fem.', 'Neutro'], filas: [
            ['Nom.', 'ein guter', 'eine gute', 'ein gutes'],
            ['Akk.', 'einen guten', 'eine gute', 'ein gutes'],
            ['Dat.', 'einem guten', 'einer guten', 'einem guten']
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Ein guter Freund hilft immer.', es: 'Un buen amigo siempre ayuda.' },
            { de: 'Ich habe ein neues Auto.', es: 'Tengo un coche nuevo.' }
          ]}
        ]
      },
      {
        n: 4, color: 'naranja', icono: 'sol', titulo: 'Sin artículo',
        bloques: [
          { tipo: 'texto', texto: 'Sin artículo, el adjetivo toma la terminación del artículo definido (der → -er, das → -es…). Es la declinación "fuerte".' },
          { tipo: 'ejemplos', items: [
            { de: 'schönes Wetter', es: 'buen tiempo' },
            { de: 'kaltes Wasser', es: 'agua fría' },
            { de: 'guter Wein', es: 'buen vino' },
            { de: 'interessante Bücher', es: 'libros interesantes' }
          ]},
          { tipo: 'aviso', icono: 'ubicacion', texto: 'Aparece mucho con comidas, bebidas y materias incontables: Ich trinke schwarzen Kaffee.' }
        ]
      },
      {
        n: 5, color: 'rosa', icono: 'documento', titulo: 'Resumen rápido',
        bloques: [
          { tipo: 'tabla', encabezados: ['Situación', 'Qué pasa'], filas: [
            ['Detrás del verbo', 'sin terminación'],
            ['Con der/die/das', '-e o -en'],
            ['Con ein/mein/kein', 'la terminación del artículo definido'],
            ['Sin artículo', 'la terminación del artículo definido']
          ]},
          { tipo: 'aviso', icono: 'checkCirculo', texto: 'Regla mnemotécnica: la terminación de género aparece UNA sola vez, en el artículo o en el adjetivo. Nunca en los dos, nunca en ninguno.' }
        ]
      },
      {
        n: 6, color: 'turquesa', icono: 'numeros', titulo: 'Orden con varios adjetivos',
        bloques: [
          { tipo: 'lista', estilo: 'estrella', items: [
            '1. Opinión: schön, gut, hässlich',
            '2. Tamaño: groß, klein',
            '3. Edad: neu, alt, jung',
            '4. Forma: rund, eckig',
            '5. Color: rot, blau, schwarz',
            '6. Origen/material: deutsch, hölzern'
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'ein schönes, großes, neues, rotes, deutsches Auto', es: 'un bonito, grande, nuevo, rojo coche alemán' }
          ]},
          { tipo: 'aviso', icono: 'idea', texto: 'Todos los adjetivos de la serie llevan la MISMA terminación.' }
        ]
      },
      {
        n: 7, color: 'indigo', icono: 'grafico', titulo: 'Comparativo y superlativo',
        bloques: [
          { tipo: 'tabla', encabezados: ['Grado', 'Forma', 'Ejemplo'], filas: [
            ['Positivo', 'adjetivo', { de: 'schnell' }],
            ['Comparativo', '+ -er', { de: 'schneller' }],
            ['Superlativo', 'am + -sten', { de: 'am schnellsten' }]
          ]},
          { tipo: 'ejemplos', items: [
            { de: 'Anna ist schneller als Tom.', es: 'Anna es más rápida que Tom.' },
            { de: 'Anna ist so schnell wie Tom.', es: 'Anna es tan rápida como Tom.' },
            { de: 'Anna ist am schnellsten.', es: 'Anna es la más rápida.' }
          ]},
          { tipo: 'aviso', icono: 'alerta', texto: 'Irregulares imprescindibles: gut → besser → am besten; viel → mehr → am meisten; gern → lieber → am liebsten.' }
        ]
      },
      {
        n: 8, color: 'rojo', icono: 'paleta', titulo: 'Adjetivos más usados',
        bloques: [
          { tipo: 'ejemplos', items: [
            { de: 'groß / klein', es: 'grande / pequeño' },
            { de: 'gut / schlecht', es: 'bueno / malo' },
            { de: 'neu / alt', es: 'nuevo / viejo' },
            { de: 'schön / hässlich', es: 'bonito / feo' },
            { de: 'teuer / billig', es: 'caro / barato' },
            { de: 'schnell / langsam', es: 'rápido / lento' },
            { de: 'warm / kalt', es: 'cálido / frío' },
            { de: 'einfach / schwierig', es: 'fácil / difícil' }
          ]}
        ]
      },
      {
        n: 9, color: 'lima', icono: 'lapiz', titulo: '¡A practicar!',
        bloques: [
          { tipo: 'texto', texto: 'Completa mentalmente con la terminación correcta y compruébalo escuchando:' },
          { tipo: 'ejemplos', items: [
            { de: 'der rote Ball', es: '1. Auto (rojo) → das rot__ Auto → das rote Auto' },
            { de: 'ein kleines Haus', es: '2. Casa (pequeña) → ein klein__ Haus' },
            { de: 'ein schöner Tag', es: '3. Día (bonito) → ein schön__ Tag' },
            { de: 'mein interessantes Buch', es: '4. Mi libro (interesante)' }
          ]}
        ]
      }
    ]
  }
});
