/* ============================================================
   data/vocabulario.js — Léxico esencial por temas
   ------------------------------------------------------------
   Los sustantivos SIEMPRE se guardan con su artículo: es la
   única forma sensata de memorizarlos.
   ============================================================ */

DE.registrarLeccion({
  id: 'vocabulario',
  titulo: 'Vocabulario esencial',
  icono: 'libros',
  grupo: 'Vocabulario y uso',
  color: 'lima',
  resumen: 'Las palabras del día a día, con su artículo y su audio.',
  vista: 'vocabulario',

  datos: {
    intro: 'Filtra por tema o busca una palabra. Pulsa el altavoz para oírla y la estrella ' +
           'para guardarla en tu repaso: las favoritas aparecen luego en las flashcards.',

    categorias: [
      {
        id: 'personas', titulo: 'Personas y familia', icono: 'personas', color: 'rosa',
        palabras: [
          { de: 'der Mann', es: 'el hombre', gen: 'der' },
          { de: 'die Frau', es: 'la mujer', gen: 'die' },
          { de: 'das Kind', es: 'el niño/la niña', gen: 'das' },
          { de: 'der Vater', es: 'el padre', gen: 'der' },
          { de: 'die Mutter', es: 'la madre', gen: 'die' },
          { de: 'die Eltern', es: 'los padres', gen: 'die' },
          { de: 'der Sohn', es: 'el hijo', gen: 'der' },
          { de: 'die Tochter', es: 'la hija', gen: 'die' },
          { de: 'der Bruder', es: 'el hermano', gen: 'der' },
          { de: 'die Schwester', es: 'la hermana', gen: 'die' },
          { de: 'die Großmutter', es: 'la abuela', gen: 'die' },
          { de: 'der Großvater', es: 'el abuelo', gen: 'der' },
          { de: 'der Freund', es: 'el amigo / novio', gen: 'der' },
          { de: 'die Freundin', es: 'la amiga / novia', gen: 'die' },
          { de: 'das Mädchen', es: 'la chica', gen: 'das' },
          { de: 'der Junge', es: 'el chico', gen: 'der' }
        ]
      },
      {
        id: 'comida', titulo: 'Comida y bebida', icono: 'cafe', color: 'naranja',
        palabras: [
          { de: 'das Brot', es: 'el pan', gen: 'das' },
          { de: 'das Brötchen', es: 'el panecillo', gen: 'das' },
          { de: 'die Butter', es: 'la mantequilla', gen: 'die' },
          { de: 'der Käse', es: 'el queso', gen: 'der' },
          { de: 'das Fleisch', es: 'la carne', gen: 'das' },
          { de: 'der Fisch', es: 'el pescado', gen: 'der' },
          { de: 'das Gemüse', es: 'la verdura', gen: 'das' },
          { de: 'das Obst', es: 'la fruta', gen: 'das' },
          { de: 'der Apfel', es: 'la manzana', gen: 'der' },
          { de: 'die Kartoffel', es: 'la patata', gen: 'die' },
          { de: 'das Wasser', es: 'el agua', gen: 'das' },
          { de: 'der Kaffee', es: 'el café', gen: 'der' },
          { de: 'der Tee', es: 'el té', gen: 'der' },
          { de: 'das Bier', es: 'la cerveza', gen: 'das' },
          { de: 'der Wein', es: 'el vino', gen: 'der' },
          { de: 'die Milch', es: 'la leche', gen: 'die' },
          { de: 'der Zucker', es: 'el azúcar', gen: 'der' },
          { de: 'das Salz', es: 'la sal', gen: 'das' },
          { de: 'das Frühstück', es: 'el desayuno', gen: 'das' },
          { de: 'das Mittagessen', es: 'la comida', gen: 'das' },
          { de: 'das Abendessen', es: 'la cena', gen: 'das' }
        ]
      },
      {
        id: 'casa', titulo: 'La casa', icono: 'inicio', color: 'verde',
        palabras: [
          { de: 'das Haus', es: 'la casa', gen: 'das' },
          { de: 'die Wohnung', es: 'el piso/apartamento', gen: 'die' },
          { de: 'das Zimmer', es: 'la habitación', gen: 'das' },
          { de: 'die Küche', es: 'la cocina', gen: 'die' },
          { de: 'das Bad', es: 'el baño', gen: 'das' },
          { de: 'das Schlafzimmer', es: 'el dormitorio', gen: 'das' },
          { de: 'die Tür', es: 'la puerta', gen: 'die' },
          { de: 'das Fenster', es: 'la ventana', gen: 'das' },
          { de: 'der Tisch', es: 'la mesa', gen: 'der' },
          { de: 'der Stuhl', es: 'la silla', gen: 'der' },
          { de: 'das Bett', es: 'la cama', gen: 'das' },
          { de: 'der Schrank', es: 'el armario', gen: 'der' },
          { de: 'die Lampe', es: 'la lámpara', gen: 'die' },
          { de: 'der Schlüssel', es: 'la llave', gen: 'der' }
        ]
      },
      {
        id: 'ciudad', titulo: 'Ciudad y transporte', icono: 'ubicacion', color: 'azul',
        palabras: [
          { de: 'die Stadt', es: 'la ciudad', gen: 'die' },
          { de: 'die Straße', es: 'la calle', gen: 'die' },
          { de: 'der Bahnhof', es: 'la estación de tren', gen: 'der' },
          { de: 'der Flughafen', es: 'el aeropuerto', gen: 'der' },
          { de: 'der Zug', es: 'el tren', gen: 'der' },
          { de: 'der Bus', es: 'el autobús', gen: 'der' },
          { de: 'das Auto', es: 'el coche', gen: 'das' },
          { de: 'das Fahrrad', es: 'la bicicleta', gen: 'das' },
          { de: 'die Bank', es: 'el banco', gen: 'die' },
          { de: 'die Apotheke', es: 'la farmacia', gen: 'die' },
          { de: 'der Supermarkt', es: 'el supermercado', gen: 'der' },
          { de: 'das Krankenhaus', es: 'el hospital', gen: 'das' },
          { de: 'die Post', es: 'la oficina de correos', gen: 'die' },
          { de: 'das Hotel', es: 'el hotel', gen: 'das' },
          { de: 'die Fahrkarte', es: 'el billete', gen: 'die' }
        ]
      },
      {
        id: 'tiempo', titulo: 'Tiempo y calendario', icono: 'calendario', color: 'turquesa',
        palabras: [
          { de: 'der Montag', es: 'el lunes', gen: 'der' },
          { de: 'der Dienstag', es: 'el martes', gen: 'der' },
          { de: 'der Mittwoch', es: 'el miércoles', gen: 'der' },
          { de: 'der Donnerstag', es: 'el jueves', gen: 'der' },
          { de: 'der Freitag', es: 'el viernes', gen: 'der' },
          { de: 'der Samstag', es: 'el sábado', gen: 'der' },
          { de: 'der Sonntag', es: 'el domingo', gen: 'der' },
          { de: 'heute', es: 'hoy' },
          { de: 'morgen', es: 'mañana' },
          { de: 'gestern', es: 'ayer' },
          { de: 'die Woche', es: 'la semana', gen: 'die' },
          { de: 'der Monat', es: 'el mes', gen: 'der' },
          { de: 'das Jahr', es: 'el año', gen: 'das' },
          { de: 'der Morgen', es: 'la mañana', gen: 'der' },
          { de: 'der Abend', es: 'la tarde-noche', gen: 'der' },
          { de: 'die Nacht', es: 'la noche', gen: 'die' }
        ]
      },
      {
        id: 'cuerpo', titulo: 'Cuerpo y salud', icono: 'corazon', color: 'rojo',
        palabras: [
          { de: 'der Kopf', es: 'la cabeza', gen: 'der' },
          { de: 'das Auge', es: 'el ojo', gen: 'das' },
          { de: 'die Hand', es: 'la mano', gen: 'die' },
          { de: 'der Arm', es: 'el brazo', gen: 'der' },
          { de: 'das Bein', es: 'la pierna', gen: 'das' },
          { de: 'der Rücken', es: 'la espalda', gen: 'der' },
          { de: 'der Bauch', es: 'la barriga', gen: 'der' },
          { de: 'der Zahn', es: 'el diente', gen: 'der' },
          { de: 'der Arzt', es: 'el médico', gen: 'der' },
          { de: 'die Schmerzen', es: 'los dolores', gen: 'die' },
          { de: 'krank', es: 'enfermo' },
          { de: 'gesund', es: 'sano' },
          { de: 'die Medizin', es: 'la medicina', gen: 'die' }
        ]
      },
      {
        id: 'trabajo', titulo: 'Trabajo y estudio', icono: 'maletin', color: 'indigo',
        palabras: [
          { de: 'die Arbeit', es: 'el trabajo', gen: 'die' },
          { de: 'das Büro', es: 'la oficina', gen: 'das' },
          { de: 'der Lehrer', es: 'el profesor', gen: 'der' },
          { de: 'die Lehrerin', es: 'la profesora', gen: 'die' },
          { de: 'der Student', es: 'el estudiante', gen: 'der' },
          { de: 'die Schule', es: 'la escuela', gen: 'die' },
          { de: 'die Universität', es: 'la universidad', gen: 'die' },
          { de: 'das Buch', es: 'el libro', gen: 'das' },
          { de: 'der Computer', es: 'el ordenador', gen: 'der' },
          { de: 'das Handy', es: 'el móvil', gen: 'das' },
          { de: 'die Prüfung', es: 'el examen', gen: 'die' },
          { de: 'der Termin', es: 'la cita', gen: 'der' },
          { de: 'der Chef', es: 'el jefe', gen: 'der' },
          { de: 'das Geld', es: 'el dinero', gen: 'das' }
        ]
      },
      {
        id: 'colores', titulo: 'Colores', icono: 'paleta', color: 'morado',
        palabras: [
          { de: 'rot', es: 'rojo' },
          { de: 'blau', es: 'azul' },
          { de: 'gelb', es: 'amarillo' },
          { de: 'grün', es: 'verde' },
          { de: 'schwarz', es: 'negro' },
          { de: 'weiß', es: 'blanco' },
          { de: 'grau', es: 'gris' },
          { de: 'braun', es: 'marrón' },
          { de: 'orange', es: 'naranja' },
          { de: 'rosa', es: 'rosa' },
          { de: 'lila', es: 'morado' }
        ]
      },
      {
        id: 'verbos', titulo: 'Verbos imprescindibles', icono: 'rayo', color: 'verde',
        palabras: [
          { de: 'sein', es: 'ser / estar' },
          { de: 'haben', es: 'tener' },
          { de: 'werden', es: 'llegar a ser' },
          { de: 'machen', es: 'hacer' },
          { de: 'gehen', es: 'ir (a pie)' },
          { de: 'fahren', es: 'ir (en vehículo)' },
          { de: 'kommen', es: 'venir' },
          { de: 'sehen', es: 'ver' },
          { de: 'sprechen', es: 'hablar' },
          { de: 'sagen', es: 'decir' },
          { de: 'essen', es: 'comer' },
          { de: 'trinken', es: 'beber' },
          { de: 'wohnen', es: 'vivir/residir' },
          { de: 'arbeiten', es: 'trabajar' },
          { de: 'lernen', es: 'aprender' },
          { de: 'verstehen', es: 'entender' },
          { de: 'kaufen', es: 'comprar' },
          { de: 'brauchen', es: 'necesitar' },
          { de: 'wissen', es: 'saber' },
          { de: 'können', es: 'poder' },
          { de: 'müssen', es: 'deber/tener que' },
          { de: 'wollen', es: 'querer' },
          { de: 'mögen', es: 'gustar' },
          { de: 'dürfen', es: 'tener permiso' }
        ]
      },
      {
        id: 'preguntas', titulo: 'Palabras interrogativas', icono: 'pregunta', color: 'rosa',
        palabras: [
          { de: 'wer', es: '¿quién?' },
          { de: 'was', es: '¿qué?' },
          { de: 'wo', es: '¿dónde?' },
          { de: 'wohin', es: '¿a dónde?' },
          { de: 'woher', es: '¿de dónde?' },
          { de: 'wann', es: '¿cuándo?' },
          { de: 'warum', es: '¿por qué?' },
          { de: 'wie', es: '¿cómo?' },
          { de: 'wie viel', es: '¿cuánto?' },
          { de: 'welcher', es: '¿cuál?' },
          { de: 'wem', es: '¿a quién? (dativo)' },
          { de: 'wen', es: '¿a quién? (acusativo)' }
        ]
      },
      {
        id: 'conectores', titulo: 'Conectores y palabras clave', icono: 'enlace', color: 'lima',
        palabras: [
          { de: 'und', es: 'y' },
          { de: 'oder', es: 'o' },
          { de: 'aber', es: 'pero' },
          { de: 'denn', es: 'pues/porque' },
          { de: 'weil', es: 'porque (envía el verbo al final)' },
          { de: 'wenn', es: 'si / cuando' },
          { de: 'dass', es: 'que' },
          { de: 'auch', es: 'también' },
          { de: 'nicht', es: 'no' },
          { de: 'kein', es: 'ningún/ninguna' },
          { de: 'schon', es: 'ya' },
          { de: 'noch', es: 'todavía' },
          { de: 'sehr', es: 'muy' },
          { de: 'ein bisschen', es: 'un poco' },
          { de: 'natürlich', es: 'naturalmente' },
          { de: 'vielleicht', es: 'quizás' }
        ]
      }
    ]
  }
});
