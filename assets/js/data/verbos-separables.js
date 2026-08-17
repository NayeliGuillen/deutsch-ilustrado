/* ============================================================
   data/verbos-separables.js — Prefijos separables e inseparables
   ============================================================ */

DE.registrarLeccion({
  id: 'verbos-prefijo',
  titulo: 'Verbos con prefijo',
  icono: 'enlace',
  grupo: 'Gramática esencial',
  color: 'rosa',
  resumen: 'Separables e inseparables: cuándo el prefijo vuela al final de la frase.',
  vista: 'infografia',

  datos: {
    titulo: 'Verbos con prefijo',
    subtitulo: 'trennbar & untrennbar',
    cinta: 'Unos se separan, otros nunca',
    resumen: 'El prefijo cambia por completo el significado del verbo. Lo único que hay que decidir es si se separa o no.',

    tarjetas: [
      {
        n: 1, color: 'morado', icono: 'idea', titulo: '¿Qué son?',
        bloques: [
          { tipo: 'texto', texto: 'Son verbos formados por un prefijo + un verbo base. El prefijo cambia el significado, igual que en español "poner / componer / suponer".' },
          { tipo: 'ejemplos', items: [
            { de: 'stehen', es: 'estar de pie' },
            { de: 'aufstehen', es: 'levantarse (separable)' },
            { de: 'verstehen', es: 'entender (inseparable)' }
          ]}
        ]
      },
      {
        n: 2, color: 'verde', icono: 'tijeras', titulo: 'Separables (trennbar)',
        bloques: [
          { tipo: 'texto', texto: 'En presente y pasado simple el prefijo se va al FINAL de la frase. El acento recae en el prefijo: AUFstehen.' },
          { tipo: 'ejemplos', items: [
            { de: 'Ich stehe um 7 Uhr auf.', es: 'Me levanto a las 7.' },
            { de: 'Wir kaufen im Supermarkt ein.', es: 'Compramos en el supermercado.' },
            { de: 'Der Zug kommt um 8 Uhr an.', es: 'El tren llega a las 8.' }
          ]},
          { tipo: 'aviso', icono: 'ubicacion', texto: 'Prefijos separables típicos: ab-, an-, auf-, aus-, ein-, mit-, nach-, vor-, zu-, zurück-, weg-, fern-.' }
        ]
      },
      {
        n: 3, color: 'azul', icono: 'candado', titulo: 'Inseparables (untrennbar)',
        bloques: [
          { tipo: 'texto', texto: 'El prefijo va SIEMPRE junto al verbo, en todos los tiempos y modos. Nunca se separa. El acento recae en la raíz: verSTEhen.' },
          { tipo: 'ejemplos', items: [
            { de: 'Ich verstehe das Problem.', es: 'Entiendo el problema.' },
            { de: 'Sie besucht ihre Freundin.', es: 'Ella visita a su amiga.' },
            { de: 'Er bekommt ein Geschenk.', es: 'Él recibe un regalo.' }
          ]},
          { tipo: 'aviso', icono: 'estrella', texto: 'Los 7 inseparables que hay que memorizar: be-, emp-, ent-, er-, ge-, ver-, zer-. (miss- y hinter- también).' }
        ]
      },
      {
        n: 4, color: 'naranja', icono: 'estrella', titulo: 'Verbos comunes',
        bloques: [
          { tipo: 'caja', titulo: 'Inseparables', bloques: [
            { tipo: 'ejemplos', items: [
              { de: 'verstehen', es: 'entender — Ich verstehe dich.' },
              { de: 'besuchen', es: 'visitar — Wir besuchen Oma.' },
              { de: 'bekommen', es: 'recibir — Er bekommt Post.' },
              { de: 'erklären', es: 'explicar — Sie erklärt die Regel.' },
              { de: 'gefallen', es: 'gustar — Das gefällt mir.' },
              { de: 'bezahlen', es: 'pagar — Ich bezahle die Rechnung.' }
            ]}
          ]},
          { tipo: 'caja', titulo: 'Separables', bloques: [
            { tipo: 'ejemplos', items: [
              { de: 'aufstehen', es: 'levantarse — Ich stehe auf.' },
              { de: 'einkaufen', es: 'hacer la compra — Ich kaufe ein.' },
              { de: 'anrufen', es: 'llamar por teléfono — Ich rufe dich an.' },
              { de: 'mitkommen', es: 'venir con — Kommst du mit?' },
              { de: 'ausgehen', es: 'salir — Wir gehen aus.' },
              { de: 'zumachen', es: 'cerrar — Mach die Tür zu!' }
            ]}
          ]}
        ]
      },
      {
        n: 5, color: 'rosa', icono: 'reloj', titulo: 'En otros tiempos',
        bloques: [
          { tipo: 'tabla', encabezados: ['Tiempo', 'Separable', 'Inseparable'], filas: [
            ['Presente', { de: 'ich stehe auf' }, { de: 'ich verstehe' }],
            ['Perfekt', { de: 'ich bin aufgestanden' }, { de: 'ich habe verstanden' }],
            ['Futuro', { de: 'ich werde aufstehen' }, { de: 'ich werde verstehen' }]
          ]},
          { tipo: 'aviso', icono: 'alerta', texto: 'En el participio, el separable mete el -ge- EN MEDIO (aufgestanden) y el inseparable NO lleva ge- (verstanden, nunca "geverstanden").' }
        ]
      },
      {
        n: 6, color: 'turquesa', icono: 'pregunta', titulo: 'En preguntas y con modales',
        bloques: [
          { tipo: 'ejemplos', items: [
            { de: 'Stehst du früh auf?', es: '¿Te levantas temprano?' },
            { de: 'Verstehst du mich?', es: '¿Me entiendes?' },
            { de: 'Wann rufst du mich an?', es: '¿Cuándo me llamas?' },
            { de: 'Ich muss früh aufstehen.', es: 'Con modal el verbo va entero al final.' },
            { de: 'Kannst du das erklären?', es: '¿Puedes explicar eso?' }
          ]}
        ]
      },
      {
        n: 7, color: 'indigo', icono: 'brujula', titulo: 'Cómo distinguirlos sin diccionario',
        bloques: [
          { tipo: 'lista', estilo: 'estrella', items: [
            'Escucha el ACENTO: si suena fuerte el prefijo, se separa (ANrufen). Si suena fuerte la raíz, no (verSTEhen).',
            'Los prefijos inseparables no existen como palabra suelta: be-, ver-, ent-…',
            'Los prefijos separables sí son palabras: auf, an, mit, aus, ein… (preposiciones y adverbios).',
            'Algunos son ambiguos y cambian de significado: übersetzen (traducir, inseparable) vs. übersetzen (cruzar en barca, separable).'
          ]}
        ]
      },
      {
        n: 8, color: 'rojo', icono: 'checkCirculo', titulo: 'Estructura de la frase',
        bloques: [
          { tipo: 'texto', texto: 'El verbo conjugado ocupa siempre la POSICIÓN 2 en la oración declarativa. El prefijo separable se va al final, formando un "paréntesis verbal".' },
          { tipo: 'ejemplos', items: [
            { de: 'Ich rufe dich morgen an.', es: 'Te llamo mañana.' },
            { de: 'Morgen rufe ich dich an.', es: 'Mañana te llamo. (el verbo sigue en 2ª posición)' }
          ]},
          { tipo: 'aviso', icono: 'premio', texto: 'Regla de oro: verbo conjugado en 2ª posición, todo lo demás (prefijo, infinitivo, participio) al final.' }
        ]
      }
    ]
  }
});
