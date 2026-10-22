/* ============================================================
   data/entrenamiento-vocabulario.js — Entrenamiento de vocabulario
   ------------------------------------------------------------
   Todos los niveles son automáticos: se arman al azar con el
   vocabulario de TODAS las lecciones (esencial, Colonia, Kapitel 1
   y 2, ciudad y direcciones). Cada intento es distinto.
   ============================================================ */

DE.registrarLeccion({
  id: 'entrena-vocabulario',
  titulo: 'Entrenamiento: vocabulario',
  icono: 'jugar',
  grupo: 'Domina el tema',
  color: 'naranja',
  resumen: 'Cinco niveles aleatorios con todo tu vocabulario: significados, artículos y escritura.',
  vista: 'entrenador',

  datos: {
    intro: 'Las preguntas salen al azar de todas las palabras de la guía, con sus dibujos cuando los tienen. ' +
           'Repite los niveles las veces que quieras: nunca son iguales. Meta: 100 %.',

    niveles: [
      {
        id: 'n1', dificultad: 'Fácil', titulo: 'Alemán → español',
        descripcion: 'Ves la palabra alemana y eliges su significado.',
        auto: { tipo: 'de-es', n: 15 }
      },
      {
        id: 'n2', dificultad: 'Básico', titulo: 'Español → alemán',
        descripcion: 'Ves el significado y eliges la palabra alemana con su artículo correcto.',
        auto: { tipo: 'es-de', n: 15 }
      },
      {
        id: 'n3', dificultad: 'Medio', titulo: 'El artículo de cada palabra',
        descripcion: 'La misma práctica de der / die / das, con vocabulario de toda la guía.',
        auto: { tipo: 'articulo', n: 20 }
      },
      {
        id: 'n4', dificultad: 'Avanzado', titulo: 'Escribe la palabra',
        descripcion: 'Teclea la palabra alemana con su artículo y su mayúscula.',
        auto: { tipo: 'escribir-de', n: 12 }
      },
      {
        id: 'n5', dificultad: 'Experto', titulo: 'Artículo escrito, sin opciones',
        descripcion: 'Escribe tú el artículo (der, die o das) de sustantivos al azar.',
        auto: { tipo: 'articulo-escribir', n: 20 }
      }
    ]
  }
});
