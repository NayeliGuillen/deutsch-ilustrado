/* ============================================================
   data/entrenamiento-kap4.js — Entrenamiento del capítulo 4
   ------------------------------------------------------------
   Comida, tiendas, Akkusativ, essen/mögen/möchten, precios,
   posición del verbo y comprensión de los textos del libro
   (págs. 44–53). Ocho niveles; 90 % o más para superarlos.
   ============================================================ */

(function () {
  'use strict';

  function op(p, ok, otros, why, extra) {
    var e = { t: 'opcion', p: p, ops: [ok].concat(otros), ok: 0, why: why };
    if (extra) for (var k in extra) e[k] = extra[k];
    return e;
  }
  function sig(de, es, otros, visual) {
    return op('¿Qué significa "' + de + '"?', es, otros, de + ' = ' + es + '.', { visual: visual, foto: de, audio: de });
  }
  function esc(p, ok, why) { return { t: 'escribir', p: p, ok: ok, why: why }; }
  function ord(p, de, extra, why) { return { t: 'ordenar', p: p, ok: de, extra: extra || [], why: why }; }

  DE.registrarLeccion({
    id: 'k4-entrenamiento',
    titulo: 'Kap. 4 · Entrenamiento',
    icono: 'jugar',
    grupo: 'Libro · Kapitel 4',
    color: 'naranja',
    resumen: 'Ocho niveles: comida, tiendas, Akkusativ, mögen/möchten, precios, orden de la frase y textos del libro.',
    vista: 'entrenador',

    datos: {
      intro: 'Ejercicios al estilo del libro (págs. 44–53). Colores: der = rojo · die = azul · das = verde · plural = morado. ' +
             'Supera cada nivel con 90 % o más a la primera.',

      niveles: [

        {
          id: 'n1', dificultad: 'Fácil', titulo: 'Lebensmittel: significado',
          descripcion: 'Las listas del Frühstück, Mittagessen, Kaffee und Kuchen y Abendessen.',
          ejercicios: [
            sig('die Banane', 'el plátano', ['la manzana', 'la naranja', 'la pera'], 'banana'),
            sig('der Orangensaft', 'el jugo de naranja', ['el té', 'la leche', 'el café'], 'vaso'),
            sig('das Müsli', 'el muesli', ['el pan', 'el yogur', 'el huevo'], 'plato'),
            sig('der Joghurt', 'el yogur', ['el queso', 'la leche', 'la mantequilla'], 'vaso'),
            sig('der Käse', 'el queso', ['el jamón', 'la leche', 'el pan'], 'queso'),
            sig('die Marmelade', 'la mermelada', ['la mantequilla', 'la miel', 'el azúcar'], 'pan'),
            sig('das Ei', 'el huevo', ['el queso', 'el pan', 'el pescado'], 'huevo'),
            sig('das Brötchen', 'el panecillo', ['el pastel', 'la galleta', 'la sopa'], 'pan'),
            sig('die Kartoffeln', 'las papas', ['las nueces', 'los tomates', 'los fideos'], 'patata'),
            sig('das Gemüse', 'la verdura', ['la fruta', 'la carne', 'el pescado'], 'verdura'),
            sig('der Essig', 'el vinagre', ['el aceite', 'la sal', 'la pimienta'], 'aceite'),
            sig('das Öl', 'el aceite', ['el vinagre', 'la sal', 'el agua'], 'aceite'),
            sig('das Fleisch', 'la carne', ['el pescado', 'el queso', 'el pan'], 'salchicha'),
            sig('der Kuchen', 'el pastel', ['el pan', 'la galleta', 'la tarta de queso'], 'pastel'),
            sig('die Sahne', 'la nata', ['la leche', 'el yogur', 'la mantequilla'], 'leche'),
            sig('der Keks', 'la galleta', ['el pan', 'el chocolate', 'el azúcar'], 'galleta'),
            sig('der Zucker', 'el azúcar', ['la sal', 'la pimienta', 'la harina'], 'azucar'),
            sig('die Gurke', 'el pepino', ['el tomate', 'la cebolla', 'la lechuga'], 'pepino'),
            sig('der Schinken', 'el jamón', ['el queso', 'la salchicha', 'la carne'], 'jamon'),
            sig('die Wurst', 'el embutido', ['la carne', 'el pescado', 'el huevo'], 'salchicha')
          ]
        },

        {
          id: 'n2', dificultad: 'Básico', titulo: 'Colores: der, die, das, plural',
          descripcion: 'Arrastra cada alimento a su caja de color.',
          ejercicios: [
            { t: 'clasificar', p: 'Frühstück: ¿der, die o das?',
              cajas: [{ etiqueta: 'der', color: 'der' }, { etiqueta: 'die', color: 'die' }, { etiqueta: 'das', color: 'das' }],
              items: [
                { t: 'Orangensaft', c: 0 }, { t: 'Joghurt', c: 0 }, { t: 'Tee', c: 0 }, { t: 'Käse', c: 0 },
                { t: 'Banane', c: 1 }, { t: 'Milch', c: 1 }, { t: 'Marmelade', c: 1 },
                { t: 'Müsli', c: 2 }, { t: 'Ei', c: 2 }, { t: 'Brötchen', c: 2 }
              ],
              why: 'der: Orangensaft, Joghurt, Tee, Käse · die: Banane, Milch, Marmelade · das: Müsli, Ei, Brötchen.' },
            { t: 'clasificar', p: 'Mittagessen: ¿der, die, das o plural?',
              cajas: [{ etiqueta: 'der', color: 'der' }, { etiqueta: 'die', color: 'die' }, { etiqueta: 'das', color: 'das' }, { etiqueta: 'die (plural)', color: 'pl' }],
              items: [
                { t: 'Apfelsaft', c: 0 }, { t: 'Pfeffer', c: 0 }, { t: 'Essig', c: 0 },
                { t: 'Cola', c: 1 },
                { t: 'Salz', c: 2 }, { t: 'Gemüse', c: 2 }, { t: 'Wasser', c: 2 }, { t: 'Öl', c: 2 }, { t: 'Fleisch', c: 2 },
                { t: 'Kartoffeln', c: 3 }
              ],
              why: 'der: Apfelsaft, Pfeffer, Essig · die: Cola · das: Salz, Gemüse, Wasser, Öl, Fleisch · Kartoffeln = plural.' },
            { t: 'clasificar', p: 'Kaffee und Kuchen + Abendessen: ¿der, die o das?',
              cajas: [{ etiqueta: 'der', color: 'der' }, { etiqueta: 'die', color: 'die' }, { etiqueta: 'das', color: 'das' }],
              items: [
                { t: 'Kaffee', c: 0 }, { t: 'Kuchen', c: 0 }, { t: 'Keks', c: 0 }, { t: 'Zucker', c: 0 }, { t: 'Salat', c: 0 }, { t: 'Schinken', c: 0 },
                { t: 'Sahne', c: 1 }, { t: 'Schokolade', c: 1 }, { t: 'Butter', c: 1 }, { t: 'Tomate', c: 1 }, { t: 'Gurke', c: 1 }, { t: 'Suppe', c: 1 }, { t: 'Wurst', c: 1 },
                { t: 'Brot', c: 2 }
              ],
              why: 'Casi todos son der o die. El único das de esta lista es das Brot.' },
            { t: 'clasificar', p: '¿A qué comida del libro pertenece? (pp. 44–45)',
              cajas: [{ etiqueta: 'Frühstück', color: 'naranja' }, { etiqueta: 'Mittagessen', color: 'rojo' }, { etiqueta: 'Kaffee und Kuchen', color: 'morado' }, { etiqueta: 'Abendessen', color: 'verde' }],
              items: [
                { t: 'Müsli', c: 0 }, { t: 'Marmelade', c: 0 }, { t: 'Banane', c: 0 },
                { t: 'Kartoffeln', c: 1 }, { t: 'Gemüse', c: 1 }, { t: 'Fleisch', c: 1 },
                { t: 'Sahne', c: 2 }, { t: 'Keks', c: 2 }, { t: 'Schokolade', c: 2 },
                { t: 'Suppe', c: 3 }, { t: 'Gurke', c: 3 }, { t: 'Schinken', c: 3 }
              ],
              why: 'Según las fotos de las págs. 44–45 del libro.' },
            op('"___ Käse ist gut." (nominativo)', 'Der', ['Die', 'Das', 'Den'], 'Käse es masculino.', { fijo: true }),
            op('"___ Milch ist gut."', 'Die', ['Der', 'Das', 'Den'], 'Milch es femenino.', { fijo: true }),
            op('"___ Brot ist gut."', 'Das', ['Der', 'Die', 'Den'], 'Brot es neutro.', { fijo: true })
          ]
        },

        {
          id: 'n3', dificultad: 'Básico', titulo: 'Geschäfte: ¿dónde compro qué?',
          descripcion: 'Bäckerei, Markt, Metzgerei, Supermarkt (p. 44–45).',
          ejercicios: [
            { t: 'unir', p: 'Une cada tienda con su significado.',
              pares: [['die Bäckerei', 'la panadería'], ['die Metzgerei', 'la carnicería'], ['der Supermarkt', 'el supermercado'], ['der Markt', 'el mercado']],
              why: 'Bäckerei (Bäcker = panadero) · Metzgerei (carne) · Supermarkt · Markt.' },
            { t: 'clasificar', p: '¿Dónde compras estos alimentos?',
              cajas: [{ etiqueta: 'in der Bäckerei', color: 'naranja' }, { etiqueta: 'in der Metzgerei', color: 'rojo' }, { etiqueta: 'auf dem Markt', color: 'verde' }],
              items: [
                { t: 'das Brot', c: 0 }, { t: 'die Brötchen', c: 0 }, { t: 'der Kuchen', c: 0 },
                { t: 'die Wurst', c: 1 }, { t: 'das Fleisch', c: 1 }, { t: 'der Schinken', c: 1 },
                { t: 'das Obst', c: 2 }, { t: 'das Gemüse', c: 2 }, { t: 'die Tomaten', c: 2 }
              ],
              why: 'Panadería: Brot, Brötchen, Kuchen · Carnicería: Wurst, Fleisch, Schinken · Mercado: Obst, Gemüse, Tomaten.' },
            op('"Ich kaufe Brot ___ Bäckerei."', 'in der', ['im', 'auf dem', 'in dem'], 'die Bäckerei → in der.', { fijo: true }),
            op('"Ich kaufe Wurst ___ Metzgerei."', 'in der', ['im', 'auf dem', 'zum'], 'die Metzgerei → in der.', { fijo: true }),
            op('"Ich kaufe Käse ___ Supermarkt."', 'im', ['in der', 'auf dem', 'in die'], 'der Supermarkt → im (in + dem).', { fijo: true }),
            op('"Ich kaufe Eier ___ Markt."', 'auf dem', ['in der', 'im', 'zum'], 'En el mercado (puestos al aire libre): auf dem Markt.', { fijo: true }),
            esc('Escribe: "Compro pan en la panadería."', ['Ich kaufe Brot in der Bäckerei.', 'Ich kaufe Brot in der Bäckerei'], 'Modelo del libro: Ich kaufe Brot in der Bäckerei.'),
            esc('Escribe: "Compro queso en el supermercado."', ['Ich kaufe Käse im Supermarkt.', 'Ich kaufe Käse im Supermarkt'], 'im = in dem (der Supermarkt).'),
            ord('Ordena: Voy al mercado y compro los huevos.', 'Ich gehe zum Markt und kaufe die Eier.', [], 'zum = zu + dem (der Markt).'),
            ord('Ordena: ¿Compras el queso en el supermercado?', 'Kaufst du den Käse im Supermarkt?', [], 'Pregunta sí/no: el verbo primero. den Käse = Akkusativ.')
          ]
        },

        {
          id: 'n4', dificultad: 'Medio', titulo: 'Akkusativ: den, einen, keinen',
          descripcion: 'La tabla de la p. 46: solo el masculino cambia.',
          auto: { tipo: 'art-akk', n: 6 },
          ejercicios: [
            op('"Ich kaufe ___ Käse." (el queso)', 'den', ['der', 'die', 'das'], 'Käse = masculino; objeto directo → den.', { fijo: true }),
            op('"Ich kaufe ___ Brot."', 'das', ['den', 'die', 'der'], 'Brot = neutro: no cambia en Akkusativ.', { fijo: true }),
            op('"Ich kaufe ___ Gurke."', 'die', ['den', 'der', 'das'], 'Gurke = femenino: no cambia.', { fijo: true }),
            op('"Ich kaufe ___ Tomaten."', 'die', ['den', 'der', 'das'], 'Plural: die.', { fijo: true }),
            op('"Wir haben ___ Käse mehr." (ya no queso)', 'keinen', ['kein', 'keine', 'nicht'], 'Käse = masculino; kein → keinen en Akkusativ.', { fijo: true }),
            op('"Wir brauchen ___ Gurke."', 'eine', ['einen', 'ein', 'keinen'], 'Gurke = femenino: eine.', { fijo: true }),
            op('"Wir machen ___ Salat."', 'einen', ['ein', 'eine', 'kein'], 'Salat = masculino: einen.', { fijo: true }),
            op('"Wir kochen ___ Suppe." (negativo)', 'keine', ['kein', 'keinen', 'nicht'], 'Suppe = femenino: keine.', { fijo: true }),
            op('"Wir essen ___ Fleisch."', 'das', ['den', 'die', 'der'], 'Fleisch = neutro.', { fijo: true }),
            op('"Wir kaufen ___ Getränke."', 'die', ['den', 'das', 'der'], 'Getränke = plural → die.', { fijo: true }),
            op('"Ich nehme ___ Schinken."', 'den', ['der', 'die', 'das'], 'Schinken = masculino → den.', { fijo: true }),
            op('"Ich esse ___ Joghurt." (uno)', 'einen', ['ein', 'eine', 'kein'], 'Joghurt = masculino.', { fijo: true }),
            { t: 'completar', p: 'Tabla de la p. 46: completa el Akkusativ.',
              partes: ['Ich kaufe ', { ok: ['den'], ops: ['den', 'der', 'dem'] }, ' Käse. (einen/keinen)\nIch kaufe ', { ok: ['das'], ops: ['das', 'den', 'dem'] }, ' Brot. (ein/kein)\nIch kaufe ',
                { ok: ['die'], ops: ['die', 'den', 'der'] }, ' Gurke. (eine/keine)\nIch kaufe ', { ok: ['die'], ops: ['die', 'den', 'das'] }, ' Tomaten. (–/keine)'],
              why: 'Solo el masculino cambia: der → den.' },
            { t: 'completar', p: 'Una conversación de Mario y Elena.',
              partes: ['Wir haben ', { ok: ['keinen'], ops: ['keinen', 'kein', 'keine'] }, ' Käse mehr.\nIch kaufe ', { ok: ['den'], ops: ['den', 'der', 'das'] }, ' Käse im Supermarkt.\nUnd ich kaufe ',
                { ok: ['die'], ops: ['die', 'den', 'das'] }, ' Eier und ', { ok: ['ein'], ops: ['ein', 'einen', 'eine'] }, ' Brot.'],
              why: 'Käse (masc.) → keinen / den · Eier (plural) → die · Brot (neutro) → ein.' },
            esc('Escribe: "Necesitamos un pepino."', ['Wir brauchen eine Gurke.', 'Wir brauchen eine Gurke'], 'Gurke = femenino → eine.'),
            esc('Escribe: "Ya no tenemos queso."', ['Wir haben keinen Käse mehr.', 'Wir haben keinen Käse mehr'], 'Käse masculino → keinen.')
          ]
        },

        {
          id: 'n5', dificultad: 'Medio', titulo: 'essen · mögen · möchten',
          descripcion: 'Las formas irregulares de la p. 53.',
          auto: { tipo: 'conj-escribir', n: 8, filtro: function (p) { return ['essen', 'mögen', 'möchten', 'nehmen'].indexOf(p.de) >= 0; } },
          ejercicios: [
            op('essen: du ___', 'isst', ['esst', 'esse', 'essen'], 'e → i en du y er: du isst, er isst.', { fijo: true }),
            op('essen: er ___', 'isst', ['esse', 'esst', 'essen'], 'er isst.', { fijo: true }),
            op('essen: ihr ___', 'esst', ['isst', 'esse', 'essen'], 'ihr esst (sin cambio de vocal).', { fijo: true }),
            op('mögen: ich ___', 'mag', ['möge', 'mögt', 'mögen'], 'mag: ö → a en ich/du/er.', { fijo: true }),
            op('mögen: du ___', 'magst', ['mögst', 'mag', 'mögt'], 'du magst.', { fijo: true }),
            op('mögen: ihr ___', 'mögt', ['magt', 'mögen', 'mag'], 'ihr mögt (vuelve la ö).', { fijo: true }),
            op('möchten: du ___', 'möchtest', ['möchtst', 'möchte', 'möchtet'], 'du möchtest (como los modales).', { fijo: true }),
            op('möchten: ich ___ y er ___', 'möchte / möchte', ['möchte / möchtet', 'möchten / möchte', 'möchtest / möchte'], 'ich möchte, er möchte (iguales).', { fijo: true }),
            op('"Ich esse gern Schokolade." equivale a…', 'Ich mag Schokolade.', ['Ich möchte Schokolade nicht.', 'Ich mag nicht Schokolade.', 'Ich möge Schokolade.'], 'esse gern X = mag X (cuadro mögen de la p. 49).'),
            op('Quieres pedir educadamente un té:', 'Ich möchte einen Tee, bitte.', ['Ich mag einen Tee, bitte.', 'Ich möchten einen Tee.', 'Ich möchte Tee bitte nicht.'], 'möchten = quisiera: pedir con educación.'),
            esc('Escribe: "Lina come muesli con leche." (essen: er/sie)', ['Lina isst Müsli mit Milch.', 'Lina isst Müsli mit Milch'], 'er/sie isst.'),
            esc('Escribe: "Wir ___ gerne Fisch." (mögen)', ['mögen', 'Mögen'], 'wir mögen.'),
            { t: 'completar', p: 'Completa con esse / isst / essen / esst.',
              partes: ['Ich ', { ok: ['esse'], ops: ['esse', 'isst', 'essen', 'esst'] }, ' Müsli. Du ', { ok: ['isst'], ops: ['esse', 'isst', 'essen', 'esst'] }, ' Brot. Wir ',
                { ok: ['essen'], ops: ['esse', 'isst', 'essen', 'esst'] }, ' Suppe. Ihr ', { ok: ['esst'], ops: ['esse', 'isst', 'essen', 'esst'] }, ' Nudeln.'],
              why: 'ich esse · du isst · wir essen · ihr esst.' }
          ]
        },

        {
          id: 'n6', dificultad: 'Medio', titulo: 'Im Supermarkt: precios y frases',
          descripcion: 'Preise sprechen, wechseln, "Sonst noch etwas?" y diálogos (p. 47).',
          auto: { tipo: 'num-precio', n: 6 },
          ejercicios: [
            esc('Di el precio: 0,99 €', ['neunundneunzig Cent'], 'En el libro: 0,99 Euro → neunundneunzig Cent.'),
            esc('Di el precio: 1,09 €', ['ein Euro neun'], 'En el libro: 1,09 Euro → ein Euro neun.'),
            esc('Di el precio: 2,20 €', ['zwei Euro zwanzig'], 'En el libro: 2,20 Euro → zwei Euro zwanzig.'),
            esc('Di el precio: 18,65 € (como en la caja del libro)', ['achtzehn Euro fünfundsechzig'], '18 = achtzehn; 65 = fünfundsechzig (unidad + und + decena).'),
            op('"Wer kommt dran?" significa…', '¿Quién es el siguiente?', ['¿Quién viene?', '¿Quién paga?', '¿Quién cocina?'], 'dran kommen = tener el turno.'),
            op('Te piden algo más. "Sonst noch etwas?" significa…', '¿Algo más?', ['¿Es todo?', '¿Dónde está?', '¿Cuánto cuesta?'], 'Sonst noch etwas? = ¿algo más?'),
            op('Quieres saber si es todo. Preguntas…', 'Ist das alles?', ['Was kostet das?', 'Wer kommt dran?', 'Wie bitte?'], 'Ist das alles?'),
            op('Quieres saber dónde está el arroz:', 'Entschuldigung, wo finde ich Reis?', ['Entschuldigung, was kostet Reis?', 'Wo ich Reis finde?', 'Reis wo ist finden?'], 'Wo finde ich …?'),
            op('"Das macht dann 18,65 Euro." Alguien…', 'dice el total a pagar', ['pide un precio', 'pregunta dónde está algo', 'pide una bolsa'], 'Das macht … = eso hace (el total).'),
            op('Quieres cambiar dinero para el carrito:', 'Können Sie wechseln, bitte?', ['Können Sie kaufen, bitte?', 'Wechseln Sie können?', 'Ich kann Wechseln.'], 'wechseln = cambiar monedas.'),
            ord('Ordena: ¿Cuánto cuesta el jugo de naranja?', 'Wie viel kostet der Orangensaft?', [], 'Pregunta con palabra interrogativa: Wie viel + verbo + sujeto.'),
            ord('Ordena: Quisiera un trozo de Emmental.', 'Ich möchte ein Stück Emmentaler, bitte.', [], 'möchte en 2ª posición.'),
            { t: 'completar', p: 'Completa el diálogo (p. 47, dialog 3).',
              partes: ['Verkäufer: ', { ok: ['Was'], ops: ['Was', 'Wer', 'Wo'] }, ' möchten Sie?\nKunde: Ich ', { ok: ['möchte'], ops: ['möchte', 'möchten', 'möchtest'] }, ' ein Stück Emmentaler, bitte.\nVerkäufer: ',
                { ok: ['Sonst'], ops: ['Sonst', 'Noch', 'Dann'] }, ' noch etwas?\nKunde: Ja, ich ', { ok: ['nehme'], ops: ['nehme', 'nimm', 'nehmen'] }, ' noch 150 Gramm Schinken.\nVerkäufer: Ist das ',
                { ok: ['alles'], ops: ['alles', 'alle', 'allen'] }, '?'],
              why: 'Was möchten Sie? · Ich möchte … · Sonst noch etwas? · ich nehme · Ist das alles?' }
          ]
        },

        {
          id: 'n7', dificultad: 'Difícil', titulo: 'Posición 2 y frases largas',
          descripcion: 'El verbo siempre en posición 2 (p. 49 y p. 53).',
          ejercicios: [
            ord('Ordena: Lina come muesli por la mañana.', 'Lina isst morgens Müsli.', [], 'Sujeto + verbo (pos. 2) + tiempo + objeto.'),
            ord('Ordena (empieza con "Morgens"): Por la mañana come Lina muesli.', 'Morgens isst Lina Müsli.', [], 'Al empezar con "morgens", el sujeto va detrás del verbo.'),
            ord('Ordena: Por la noche cocino pescado a menudo.', 'Am Abend koche ich oft Fisch.', [], 'Am Abend en posición 1 → verbo en 2ª: koche ich.'),
            ord('Ordena: El fin de semana comemos juntos.', 'Am Wochenende essen wir zusammen.', [], 'Am Wochenende (pos. 1), essen (pos. 2).'),
            ord('Ordena: A mediodía casi nunca comemos nada.', 'Mittags essen wir meistens nichts.', [], 'Mittags (pos. 1) + essen (pos. 2).'),
            ord('Ordena: En el desayuno como dos panecillos.', 'Zum Frühstück esse ich zwei Brötchen.', [], 'Zum Frühstück (pos. 1) + esse (pos. 2).'),
            ord('Ordena: Me gusta la comida asiática.', 'Ich mag asiatisches Essen.', [], 'mag en posición 2.'),
            ord('Ordena: Por la tarde a veces como un trozo de chocolate.', 'Nachmittags esse ich manchmal ein Stück Schokolade.', [], 'Nachmittags (1) + esse (2) + ich.'),
            esc('Reescribe empezando con "Heute": "Ich esse Pizza."', ['Heute esse ich Pizza.', 'Heute esse ich Pizza'], 'Con Heute en pos. 1: verbo y luego ich.'),
            esc('Reescribe empezando con "Abends": "Wir essen Brot."', ['Abends essen wir Brot.', 'Abends essen wir Brot'], 'Abends + verbo + wir.'),
            op('¿Cuál frase es correcta?', 'Mittags esse ich einen Döner.', ['Mittags ich esse einen Döner.', 'Ich mittags esse einen Döner.', 'Mittags einen Döner esse ich.'], 'El verbo debe ir en posición 2, siempre.'),
            op('¿Cuál frase es correcta?', 'Abends koche ich oft Fisch.', ['Abends ich koche oft Fisch.', 'Ich abends koche oft Fisch.', 'Abends oft koche ich Fisch.'], 'Abends (1) + koche (2).')
          ]
        },

        {
          id: 'n8', dificultad: 'Difícil', titulo: 'Comprensión de los textos del libro',
          descripcion: 'Was essen Sie? (p. 49) y Koch am Bodensee (p. 51).',
          ejercicios: [
            op('Familie Hepp: ¿qué come Lina por la mañana?', 'Müsli mit Milch', ['Brot mit Käse', 'ein Brötchen', 'Nudeln'], 'Lina isst Müsli mit Milch.'),
            op('Familie Hepp: ¿qué come Nikolaj al mediodía en el trabajo?', 'nur ein Brötchen', ['Nudeln', 'eine Suppe', 'Fleisch'], 'Nikolaj isst in der Arbeit nur ein Brötchen.'),
            op('Maria Hepp come en la cantina…', 'oft Nudeln oder eine Suppe', ['immer Pizza', 'nur Brötchen', 'nichts'], 'Ich esse in der Kantine oft Nudeln oder eine Suppe.'),
            op('Familie Hepp: ¿a qué hora comen todos juntos por la noche?', 'um sieben', ['um sechs', 'um acht', 'um halb sechs'], 'Abends um sieben essen wir dann alle zusammen.'),
            op('Text de Lars/Ben: ¿a qué hora está despierto de lunes a viernes?', 'um halb sechs', ['um sechs', 'um sieben', 'um halb sieben'], 'Ich bin schon um halb sechs wach.'),
            op('Text de Lars/Ben: ¿qué come a media mañana?', 'oft noch einen Joghurt', ['Obst', 'Kuchen', 'Brot'], 'Vormittags esse ich dann oft noch einen Joghurt.'),
            op('Text de Lars/Ben: ¿qué le gusta a Lars?', 'Brötchen mit Marmelade', ['Obst', 'Joghurt', 'Suppe'], 'Lars mag Brötchen mit Marmelade.'),
            op('Emma: ¿qué hace el fin de semana por la mañana?', 'Sie schläft lang.', ['Sie frühstückt mit Freunden.', 'Sie kocht Fisch.', 'Sie arbeitet.'], 'Am Wochenende frühstücke ich am Morgen nicht – ich schlafe lang.'),
            op('Emma: ¿qué compra al mediodía?', 'einen Döner oder eine Pizza', ['Brötchen', 'Sushi', 'Fisch'], 'Mittags kaufe ich einen Döner oder eine Pizza.'),
            op('Emma: ¿qué mag?', 'asiatisches Essen', ['Brötchen', 'Obst', 'Kuchen'], 'Ich mag asiatisches Essen, lecker!'),
            op('Max Schmidt: ¿dónde trabaja?', 'in einem Restaurant in Konstanz', ['in einer Bäckerei', 'in einer Schule', 'in einem Supermarkt'], 'Restaurant „Esszimmer“ in der Altstadt von Konstanz.'),
            op('Max Schmidt: ¿cuánto tiempo lleva trabajando allí?', 'seit zwei Jahren', ['seit einem Jahr', 'seit drei Jahren', 'seit zwei Monaten'], 'Er arbeitet seit zwei Jahren als Koch.'),
            op('Max Schmidt: ¿qué hace Paula?', 'Sie macht das Dessert.', ['Sie bereitet den Fisch zu.', 'Sie kauft Gemüse.', 'Sie ist die Chefin.'], 'Paula, eine Kollegin, macht das Dessert.'),
            op('Max Schmidt: ¿de dónde viene el pescado?', 'aus dem Bodensee', ['aus dem Meer', 'aus dem Supermarkt', 'aus Frankreich'], 'Fische frisch aus dem Bodensee.'),
            op('Max Schmidt: ¿qué NO es bueno de su trabajo?', 'die Arbeitszeiten', ['das Team', 'die Kollegen', 'kreativ sein'], 'Und die Arbeitszeiten sind nicht toll.'),
            op('Max Schmidt: ¿cuándo trabaja normalmente?', 'von 6 bis 15 Uhr oder von 13 bis 22 Uhr', ['von 8 bis 16 Uhr', 'nur am Wochenende', 'von 9 bis 12 Uhr'], 'Normalerweise von 6 bis 15 Uhr oder von 13 bis 22 Uhr.')
          ]
        },

        {
          id: 'n9', dificultad: 'Medio', titulo: 'Wörter lernen: grupos y parejas',
          descripcion: 'La estrategia de la p. 50 convertida en juego.',
          ejercicios: [
            { t: 'clasificar', p: 'Mindmap "Essen und Trinken": ¿a qué rama pertenece cada palabra?',
              cajas: [{ etiqueta: 'Lebensmittel', color: 'verde' }, { etiqueta: 'Getränke', color: 'azul' }, { etiqueta: 'Geschäfte', color: 'naranja' }, { etiqueta: 'Mahlzeiten', color: 'morado' }],
              items: [
                { t: 'das Brot', c: 0 }, { t: 'der Käse', c: 0 }, { t: 'das Ei', c: 0 },
                { t: 'das Wasser', c: 1 }, { t: 'der Tee', c: 1 }, { t: 'die Cola', c: 1 },
                { t: 'die Bäckerei', c: 2 }, { t: 'der Supermarkt', c: 2 },
                { t: 'das Frühstück', c: 3 }, { t: 'das Abendessen', c: 3 }
              ],
              why: 'Lebensmittel = alimentos · Getränke = bebidas · Geschäfte = tiendas · Mahlzeiten = comidas del día.' },
            { t: 'unir', p: 'Une las parejas que van juntas (10b del libro).',
              pares: [['das Brot und', 'die Brötchen'], ['das Salz und', 'der Pfeffer'], ['der Essig und', 'das Öl'], ['der Kaffee und', 'der Kuchen'], ['Obst und', 'Gemüse'], ['Essen und', 'Trinken']],
              why: 'Brot und Brötchen (libro) · Salz und Pfeffer · Essig und Öl · Kaffee und Kuchen · Obst und Gemüse · Essen und Trinken.' },
            { t: 'clasificar', p: 'Wortgruppen (10c del libro): ¿Zeit, Arbeit/Freizeit, Gruß o Gegensatz?',
              cajas: [{ etiqueta: 'Zeit', color: 'azul' }, { etiqueta: 'Arbeit & Freizeit', color: 'naranja' }, { etiqueta: 'Begrüßung / Höflichkeit', color: 'verde' }],
              items: [
                { t: 'der Morgen', c: 0 }, { t: 'der Abend', c: 0 }, { t: 'die Woche', c: 0 }, { t: 'das Wochenende', c: 0 }, { t: 'Montag', c: 0 }, { t: 'Sonntag', c: 0 },
                { t: 'die Arbeit', c: 1 }, { t: 'der Beruf', c: 1 }, { t: 'das Hobby', c: 1 }, { t: 'der Film', c: 1 }, { t: 'das Kino', c: 1 },
                { t: 'hallo', c: 2 }, { t: 'tschüss', c: 2 }, { t: 'bitte', c: 2 }, { t: 'danke', c: 2 }
              ],
              why: 'Una posible agrupación (el libro deja que tú decidas). Alternativas: alt–neu, links–rechts como opuestos; essen–trinken como verbos.' },
            { t: 'unir', p: 'Une los opuestos.',
              pares: [['alt', 'neu'], ['links', 'rechts'], ['hallo', 'tschüss'], ['Frau', 'Herr'], ['essen', 'trinken']],
              why: 'alt ≠ neu · links ≠ rechts · hallo ≠ tschüss · Frau ≠ Herr; essen y trinken van juntos (comer/beber).' },
            op('Una buena manera de aprender vocabulario según el libro es…', 'en grupos temáticos, en parejas y con asociaciones libres', ['solo copiando 20 veces', 'solo con traducción', 'una lista alfabética'], 'Wörter lernen: thematische Gruppen/Mindmaps, Paare, freie Assoziationen.')
          ]
        }

      ]
    }
  });
})();
