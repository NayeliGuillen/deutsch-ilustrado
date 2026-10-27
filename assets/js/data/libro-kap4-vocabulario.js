/* ============================================================
   data/libro-kap4-vocabulario.js — Netzwerk neu A1 · Kapitel 4
   ------------------------------------------------------------
   Vocabulario del capítulo 4 "Guten Appetit!" (págs. 44–53):
   las cuatro comidas del día, tiendas, supermercado y precios,
   textos de "Was essen Sie?" y los oficios de la comida.
   ============================================================ */

(function () {
  'use strict';

  /** W(de, es, gen, fon, fonFacil, visual, ejemplo[4], nota, plural) */
  function W(de, es, gen, fon, ff, visual, ej, nota, plural, solo) {
    var p = { de: de, es: es, fon: fon, fonFacil: ff };
    if (gen) p.gen = gen; else p.tipo = 'palabra';
    if (solo) p.soloPlural = true;
    if (plural) p.plural = plural;
    if (visual) p.visual = visual;
    if (nota) p.nota = nota;
    if (ej) {
      p.ejemplo = { de: ej[0], es: ej[1] };
      if (ej[2] && ej[2] !== '…') p.ejemplo.fon = ej[2];
      if (ej[3] && ej[3] !== '…') p.ejemplo.fonFacil = ej[3];
    }
    return p;
  }

  DE.registrarLeccion({
    id: 'k4-vocabulario',
    titulo: 'Kap. 4 · Vocabulario',
    icono: 'libro',
    grupo: 'Libro · Kapitel 4',
    color: 'naranja',
    resumen: 'Frühstück, Mittagessen, Kaffee und Kuchen, Abendessen, tiendas, supermercado, precios y oficios (págs. 44–53).',
    vista: 'vocabulario-pron',

    datos: {
      intro: '[LIBRO] Las listas de las págs. 44–45 (las palabras escritas a mano junto a las fotos) más lo que aparece en los diálogos y textos. ' +
             'Aprende cada palabra con su artículo y su color: der = rojo · die = azul · das = verde · plural = morado.',

      leyenda: [
        { titulo: 'Pronunciación', texto: 'La del curso: vocal larga = letra doble (taac), sílaba tónica en MAYÚSCULAS, j = ch, c = k, ü = "iu", ö = "oe".' },
        { titulo: 'Pronunciación fácil', texto: 'Sílabas con guiones y, entre paréntesis, cómo sale cada sonido difícil.' }
      ],

      categorias: [

        {
          id: 'fruehstueck', titulo: 'Das Frühstück (desayuno)', icono: 'cafe', color: 'amarillo',
          descripcion: '[LIBRO] p. 44. "Zum Frühstück esse ich …"',
          palabras: [
            W('die Banane', 'el plátano, la banana', 'die', 'ba-NAA-ne', 'ba-NA-ne (a larga en el medio)', 'banana', null, 'En ruso es "banan" (ejemplo del libro: palabras parecidas en tu idioma).', 'die Bananen'),
            W('der Orangensaft', 'el jugo de naranja', 'der', 'o-RAN-zhen-zaft', 'o-RAN-zhen-ZAFT (zh como la "sh" pero con voz; s de Saft = "z")', 'vaso',
              ['Ich trinke Orangensaft.', 'Bebo jugo de naranja.', 'ij TRIN-ke o-RAN-zhen-zaft', 'ij TRIN-ke o-RAN-zhen-zaft'], 'Saft = jugo/zumo.'),
            W('das Müsli', 'el muesli', 'das', 'MIUS-li', 'MIUS-li (ü = "iu": labios de u, lengua de i)', 'plato',
              ['Zum Frühstück esse ich Müsli.', 'En el desayuno como muesli.', 'tsum FRIU-shtiuk E-se ij MIUS-li', 'tsum FRIU-shtiuk E-se ij MIUS-li (st = "sht")']),
            W('der Joghurt', 'el yogur', 'der', 'YOO-gurt', 'YO-gurt (j = "y"; o larga)', 'vaso',
              ['Vormittags esse ich einen Joghurt.', 'A media mañana como un yogur.', 'FOR-mi-taaks E-se ij AI-nen YOO-gurt', 'FOR-mi-taks E-se ij AI-nen YO-gurt'], 'Se admite también "der Jogurt".'),
            W('der Tee', 'el té', 'der', 'TEE', 'TEE (e larga)', 'taza'),
            W('die Milch', 'la leche', 'die', 'MILJ', 'MILCH (ch suave después de i: casi una "y" sorda)', 'leche',
              ['Lina isst Müsli mit Milch.', 'Lina come muesli con leche.', 'LII-na ist MIUS-li mit MILJ', 'LI-na ist MIUS-li mit MILCH']),
            W('der Käse', 'el queso', 'der', 'KEE-ze', 'KE-se (ä = "e" larga; s entre vocales = "z")', 'queso',
              ['Ich esse Brot mit Käse.', 'Como pan con queso.', 'ij E-se BROOT mit KEE-ze', 'ij E-se BROT mit KE-se'], 'Plural: die Käse (cambia poco).'),
            W('die Marmelade', 'la mermelada', 'die', 'mar-me-LAA-de', 'mar-me-LA-de (acento en LA)', 'pan',
              ['Brötchen mit Marmelade.', 'Panecillos con mermelada.', 'BROET-jen mit mar-me-LAA-de', 'BRÖT-chen mit mar-me-LA-de'], null, 'die Marmeladen'),
            W('das Ei', 'el huevo', 'das', 'AI', 'AI (ei = "ai")', 'huevo', null, null, 'die Eier'),
            W('das Brötchen', 'el panecillo', 'das', 'BROET-jen', 'BRÖT-chen (ö = "e" con labios de "o"; -chen suave)', 'pan',
              ['Ich kaufe Brötchen in der Bäckerei.', 'Compro panecillos en la panadería.', 'ij KAU-fe BROET-jen in dea be-ke-RAI', 'ij KAU-fe BRÖT-chen in der be-ke-RAI'],
              'Brot + -chen (diminutivo) = "panito". Plural: die Brötchen (igual).', 'die Brötchen')
          ]
        },

        {
          id: 'mittagessen', titulo: 'Das Mittagessen (almuerzo)', icono: 'comida', color: 'rojo',
          descripcion: '[LIBRO] p. 44.',
          palabras: [
            W('der Apfelsaft', 'el jugo de manzana', 'der', 'AP-fel-zaft', 'AP-fel-ZAFT (pf = p y f seguidas)', 'manzana', null, 'Apfel + Saft.'),
            W('die Kartoffeln', 'las patatas / papas', 'die', 'kar-TO-feln', 'kar-TO-feln (acento en TO)', 'patata',
              ['Wir essen Fisch mit Reis oder Kartoffeln.', 'Comemos pescado con arroz o papas.', 'vir E-sen FISH mit RAIS O-da kar-TO-feln', 'vir E-sen FISH mit RAIS O-der kar-TO-feln'], 'Casi siempre en plural: die Kartoffeln.', null, true),
            W('das Salz', 'la sal', 'das', 'ZALTS', 'SALTS (z = "ts"; s inicial = "z")', 'sal'),
            W('der Pfeffer', 'la pimienta', 'der', 'PFE-fa', 'PFE-fer (pf: junta p+f; er final = "a")', 'sal', null, 'Salz und Pfeffer: la pareja de siempre.'),
            W('das Gemüse', 'la verdura', 'das', 'ge-MIU-ze', 'ge-MIU-se (ü = "iu")', 'verdura',
              ['Fisch oder Fleisch mit Gemüse.', 'Pescado o carne con verdura.', 'FISH O-da FLAISH mit ge-MIU-ze', 'FISH O-der FLAISH mit ge-MIU-se'], 'Normalmente no tiene plural.'),
            W('das Wasser', 'el agua', 'das', 'VA-sa', 'VA-ser (w = "v"; er final = "a")', 'agua',
              ['Wir trinken gern Saft und Wasser.', 'Nos gusta beber jugo y agua.', 'vir TRIN-ken guern ZAFT unt VA-sa', 'vir TRIN-ken GUERN ZAFT unt VA-ser']),
            W('der Essig', 'el vinagre', 'der', 'E-sij', 'E-sich (-ig final suena "ich")', 'aceite', null, 'Essig und Öl para la ensalada.'),
            W('das Öl', 'el aceite', 'das', 'OEL', 'ÖL (ö larga: labios de o, di "e")', 'aceite'),
            W('die Cola', 'la cola (refresco)', 'die', 'KOO-la', 'KO-la', 'vaso'),
            W('das Fleisch', 'la carne', 'das', 'FLAISH', 'FLAISH (ei = "ai"; sch = "sh")', 'salchicha',
              ['Mmh, ja, das Fleisch schmeckt sehr gut!', '¡Mmm, sí, la carne sabe muy bien!', 'mm ya das FLAISH shmekt zeea GUUT', 'mm ya das FLAISH SHMEKT ZEER GUUT'])
          ]
        },

        {
          id: 'kaffee', titulo: 'Kaffee und Kuchen', icono: 'cafe', color: 'marron',
          descripcion: '[LIBRO] p. 45. La merienda alemana de la tarde.',
          palabras: [
            W('der Kaffee', 'el café (bebida)', 'der', 'KA-fe', 'KA-fe (acento en la primera sílaba; ee final = "e")', 'taza',
              ['Alle trinken Kaffee und essen Kuchen.', 'Todos beben café y comen pastel.', 'A-le TRIN-ken KA-fe unt E-sen KUU-jen', 'A-le TRIN-ken KA-fe unt E-sen KU-chen'],
              'der Kaffee (bebida) ≠ das Café (el local, ka-FEE).'),
            W('der Kuchen', 'el pastel, la tarta', 'der', 'KUU-jen', 'KU-chen (u larga; ch áspera tras u)', 'pastel', null, null, 'die Kuchen'),
            W('die Sahne', 'la nata, la crema', 'die', 'ZAA-ne', 'SA-ne (s = "z"; a larga)', 'leche'),
            W('die Schokolade', 'el chocolate', 'die', 'sho-ko-LAA-de', 'sho-ko-LA-de (sch = "sh")', 'chocolate',
              ['Ich esse gern Schokolade.', 'Me gusta comer chocolate.', 'ij E-se guern sho-ko-LAA-de', 'ij E-se GUERN sho-ko-LA-de']),
            W('der Keks', 'la galleta', 'der', 'KEEKS', 'KEKS (e larga)', 'galleta', null, null, 'die Kekse'),
            W('der Zucker', 'el azúcar', 'der', 'TSU-ka', 'TSU-ker (z = "ts"; er = "a")', 'azucar')
          ]
        },

        {
          id: 'abendessen', titulo: 'Das Abendessen (cena)', icono: 'comida', color: 'verde',
          descripcion: '[LIBRO] p. 45.',
          palabras: [
            W('die Butter', 'la mantequilla', 'die', 'BU-ta', 'BU-ter (u corta; er = "a")', 'mantequilla'),
            W('das Brot', 'el pan', 'das', 'BROOT', 'BROT (o larga)', 'pan',
              ['Abends essen wir oft Brot, Salat oder eine Suppe.', 'Por la noche comemos pan, ensalada o sopa.', 'AA-bents E-sen vir OFT BROOT za-LAAT O-da AI-ne ZU-pe', 'A-bents E-sen vir OFT BROT sa-LAT O-der AI-ne SU-pe'], null, 'die Brote'),
            W('die Tomate', 'el tomate', 'die', 'to-MAA-te', 'to-MA-te', 'tomate', null, null, 'die Tomaten'),
            W('die Gurke', 'el pepino', 'die', 'GUR-ke', 'GUR-ke (g = "gu")', 'pepino', ['Ich esse keine Gurken.', 'No como pepinos.', 'ij E-se KAI-ne GUR-ken', 'ij E-se KAI-ne GUR-ken'], null, 'die Gurken'),
            W('der Salat', 'la ensalada', 'der', 'za-LAAT', 'sa-LAT (s = "z"; acento final)', 'ensalada',
              ['Möchtest du Salat?', '¿Quieres ensalada?', 'MOEJ-test duu za-LAAT', 'MÖCH-test du sa-LAT'], null, 'die Salate'),
            W('die Suppe', 'la sopa', 'die', 'ZU-pe', 'SU-pe (s = "z"; u corta)', 'sopa', null, null, 'die Suppen'),
            W('die Wurst', 'la salchicha, el embutido', 'die', 'VURST', 'VURST (w = "v")', 'salchicha',
              ['Zum Frühstück esse ich Brötchen mit Butter, Käse und Wurst.', 'En el desayuno como panecillos con mantequilla, queso y embutido.', 'tsum FRIU-shtiuk E-se ij BROET-jen mit BU-ta KEE-ze unt VURST', 'tsum FRIU-shtiuk E-se ij BRÖT-chen mit BU-ter KE-se unt VURST'], null, 'die Würste'),
            W('der Schinken', 'el jamón', 'der', 'SHIN-ken', 'SHIN-ken', 'jamon')
          ]
        },

        {
          id: 'geschaefte', titulo: 'Geschäfte (tiendas)', icono: 'bolsa', color: 'azul',
          descripcion: '[LIBRO] pp. 44–45. Para la pregunta "wo?" se usa: in der / auf dem / im.',
          palabras: [
            W('die Bäckerei', 'la panadería', 'die', 'be-ke-RAI', 'be-ke-RAI (ä = "e"; acento en RAI)', 'panaderia',
              ['Ich kaufe Brot in der Bäckerei.', 'Compro pan en la panadería.', 'ij KAU-fe BROOT in dea be-ke-RAI', 'ij KAU-fe BROT in der be-ke-RAI'], 'Frase del libro (ejercicio 2c): in der Bäckerei.', 'die Bäckereien'),
            W('der Markt', 'el mercado', 'der', 'MARKT', 'MARKT', 'markt',
              ['Ich gehe zum Markt und kaufe die Eier.', 'Voy al mercado y compro los huevos.', 'ij GEE-e tsum MARKT unt KAU-fe dii AI-a', 'ij GUE-e tsum MARKT unt KAU-fe di AI-er'], 'Libro: auf dem Markt (en el mercado).', 'die Märkte'),
            W('die Metzgerei', 'la carnicería', 'die', 'mets-ge-RAI', 'mets-gue-RAI (tz = "ts")', 'salchicha', null, 'Libro: in der Metzgerei. En el norte: die Fleischerei.', 'die Metzgereien'),
            W('der Supermarkt', 'el supermercado', 'der', 'ZUU-pa-markt', 'SU-per-markt (s = "z"; er = "a")', 'carrito',
              ['Kaufst du den Käse im Supermarkt?', '¿Compras el queso en el supermercado?', 'KAUFST duu deen KEE-ze im ZUU-pa-markt', 'KAUFST du den KE-se im SU-per-markt'], 'Libro: im Supermarkt.', 'die Supermärkte')
          ]
        },

        {
          id: 'supermarkt', titulo: 'Einkaufen im Supermarkt', icono: 'bolsa', color: 'turquesa',
          descripcion: '[LIBRO] p. 47 y p. 46. Dinero, bolsa, cantidades y precios.',
          palabras: [
            W('der Einkaufswagen', 'el carrito de la compra', 'der', 'AIN-kaufs-vaa-gen', 'AIN-kaufs-VA-guen (ei = "ai"; w = "v")', 'carrito',
              ['Ich brauche einen Euro für den Einkaufswagen.', 'Necesito un euro para el carrito.', 'ij BRAU-je AI-nen OI-ro fiur deen AIN-kaufs-vaa-gen', 'ij BRAU-che AI-nen OI-ro fiur den AIN-kaufs-VA-guen'], 'Se necesita una moneda de 1 € para desbloquearlo.'),
            W('die Tüte', 'la bolsa', 'die', 'TIU-te', 'TIU-te (ü = "iu")', 'bolsa',
              ['Ich brauche noch eine Tüte, bitte.', 'Necesito también una bolsa, por favor.', 'ij BRAU-je noj AI-ne TIU-te BI-te', 'ij BRAU-che noj AI-ne TIU-te BI-te'], null, 'die Tüten'),
            W('der Kassenzettel', 'el ticket (recibo)', 'der', 'KA-sen-tse-tel', 'KA-sen-TSE-tel (z = "ts")', 'ticket', null, 'Kasse = caja + Zettel = papelito.'),
            W('der Einkaufszettel', 'la lista de la compra', 'der', 'AIN-kaufs-tse-tel', 'AIN-kaufs-TSE-tel', 'libro', null, 'Se escribe en el ejercicio 3b (Mario y Elena).'),
            W('der Euro', 'el euro', 'der', 'OI-ro', 'OI-ro (eu = "oi")', 'moneda', null, null, 'die Euro'),
            W('der Cent', 'el céntimo', 'der', 'SENT', 'SENT (c = "s")', 'moneda', ['99 Cent', '99 céntimos', 'noin-unt-NOIN-tsig SENT', 'NOIN-unt-NOIN-tsig SENT'], null, 'die Cent'),
            W('das Stück', 'el trozo', 'das', 'SHTIUK', 'SHTIUK (st- inicial = "sht"; ü = "iu")', null,
              ['Ich möchte ein Stück Emmentaler, bitte.', 'Quisiera un trozo de Emmental, por favor.', 'ij MOEJ-te ain SHTIUK E-men-taa-la BI-te', 'ij MÖCH-te ain SHTIUK E-men-TA-ler BI-te'], null, 'die Stücke'),
            W('das Gramm', 'el gramo', 'das', 'GRAM', 'GRAM', null, ['Ich nehme noch 150 Gramm Schinken.', 'Me llevo también 150 gramos de jamón.', 'ij NEE-me noj hun-dert-FIUNF-tsig GRAM SHIN-ken', 'ij NE-me noj HUN-dert-FÜNF-tsig GRAM SHIN-ken']),
            W('der Emmentaler', 'el queso Emmental', 'der', 'E-men-taa-la', 'E-men-TA-ler', 'queso', null, 'Queso suizo con agujeros.'),
            W('der Reis', 'el arroz', 'der', 'RAIS', 'RAIS (ei = "ai"; s = s)', 'arroz',
              ['Entschuldigung, wo finde ich Reis?', 'Disculpe, ¿dónde encuentro el arroz?', 'ent-SHUL-di-gung voo FIN-de ij RAIS', 'ent-SHUL-di-gung vo FIN-de ij RAIS'], 'Libro: "Dort rechts."'),
            W('wechseln', 'cambiar (dinero)', null, 'VEK-seln', 'VEK-seln (w = "v"; x = "ks")', null,
              ['Können Sie wechseln, bitte?', '¿Puede cambiarme (dinero), por favor?', 'KOE-nen zii VEK-seln BI-te', 'KÖ-nen si VEK-seln BI-te']),
            W('kosten', 'costar', null, 'KOS-ten', 'KOS-ten', 'moneda',
              ['Was kostet der Apfelsaft?', '¿Cuánto cuesta el jugo de manzana?', 'vas KOS-tet dea AP-fel-zaft', 'vas KOS-tet der AP-fel-ZAFT'], 'Singular: kostet; plural: kosten.'),
            W('teuer', 'caro', null, 'TOI-a', 'TOI-er (eu = "oi")', null,
              ['Das ist aber teuer!', '¡Pero eso es caro!', 'das ist AA-ba TOI-a', 'das ist A-ber TOI-er'], 'Ojo: se escribe teuer, pero "teurer" al comparar.'),
            W('Wer kommt dran?', '¿Quién es el siguiente?', null, 'VEA komt DRAN', 'VER komt DRAN (w = "v")', null, ['Ich, bitte.', 'Yo, por favor.', 'IJ BI-te', 'ICH BI-te'], 'Expresión de cola en tiendas.')
          ]
        },

        {
          id: 'textos', titulo: 'Comida y hábitos (textos p. 48–49)', icono: 'comida', color: 'rosa',
          descripcion: '[LIBRO] Palabras de los textos "Was essen Sie?" y del diálogo de la Grillparty.',
          palabras: [
            W('das Würstchen', 'la salchichita', 'das', 'VIURST-jen', 'VÜRST-chen (ü = "iu"; -chen suave)', 'salchicha',
              ['Möchtet ihr noch ein Würstchen?', '¿Queréis otra salchicha?', 'MOEJ-tet iir noj ain VIURST-jen', 'MÖCH-tet ir noj ain VÜRST-chen'], 'Wurst + -chen.', 'die Würstchen'),
            W('der Apfel', 'la manzana', 'der', 'AP-fel', 'AP-fel', 'manzana', ['Äpfel, Birnen oder Bananen.', 'Manzanas, peras o plátanos.', 'EP-fel BIR-nen O-da ba-NAA-nen', 'EP-fel BIR-nen O-der ba-NA-nen'], null, 'die Äpfel'),
            W('die Birne', 'la pera', 'die', 'BIR-ne', 'BIR-ne', 'manzana', null, null, 'die Birnen'),
            W('die Nudeln', 'los fideos, la pasta', 'die', 'NUU-deln', 'NU-deln', 'nudeln', ['In der Kantine esse ich oft Nudeln.', 'En la cantina como a menudo pasta.', 'in dea kan-TII-ne E-se ij OFT NUU-deln', 'in der kan-TI-ne E-se ij OFT NU-deln'], null, null, true),
            W('der Fisch', 'el pescado', 'der', 'FISH', 'FISH (sch = "sh")', 'pescado', null, null, 'die Fische'),
            W('die Zwiebel', 'la cebolla', 'die', 'TSVII-bel', 'TSVI-bel (zw = "tsv")', 'verdura', null, null, 'die Zwiebeln'),
            W('die Kantine', 'la cantina', 'die', 'kan-TII-ne', 'kan-TI-ne', 'plato', null, 'Comedor de empresa o escuela.', 'die Kantinen'),
            W('das Dessert', 'el postre', 'das', 'de-SER', 'de-SER (palabra francesa)', 'pastel', null, null, 'die Desserts'),
            W('lecker', 'rico, sabroso', null, 'LE-ka', 'LE-ker (er = "a")', null, ['Ja, gerne, die Würstchen sind wirklich lecker.', 'Sí, con gusto, las salchichitas están muy ricas.', 'yaa GER-ne dii VIURST-jen zint VIRK-lij LE-ka', 'ya GUER-ne di VÜRST-chen zint VIRK-lich LE-ker'], 'Palabra cotidiana muy usada.'),
            W('satt', 'lleno (de comer)', null, 'ZAT', 'SAT (s = "z")', null, ['Nein, danke, ich bin satt.', 'No, gracias, estoy lleno.', 'nain DAN-ke ij bin ZAT', 'nain DAN-ke ij bin SAT'], 'Frase para rechazar más comida con educación.'),
            W('gesund', 'sano', null, 'ge-ZUNT', 'gue-SUNT (d final = "t")', null, ['Obst ist gesund.', 'La fruta es sana.', 'OPST ist ge-ZUNT', 'OPST ist gue-SUNT']),
            W('allein', 'solo/a', null, 'a-LAIN', 'a-LAIN (ei = "ai")', null, ['Ich esse allein.', 'Como sola/o.', 'ij E-se a-LAIN', 'ij E-se a-LAIN']),
            W('meistens', 'la mayoría de las veces', null, 'MAIS-tens', 'MAIS-tens', null, ['Mittags essen wir meistens nichts.', 'Al mediodía casi nunca comemos nada.', 'MI-taaks E-sen vir MAIS-tens NIJTS', 'MI-taks E-sen vir MAIS-tens NICHTS']),
            W('manchmal', 'a veces', null, 'MANJ-maal', 'MANCH-mal', null, ['Manchmal mache ich auch Sushi.', 'A veces hago también sushi.', 'MANJ-maal MA-je ij AUJ ZUU-shi', 'MANCH-mal MA-che ij AUCH SU-shi']),
            W('oft', 'a menudo', null, 'OFT', 'OFT', null, ['Am Abend koche ich oft Fisch.', 'Por la noche suelo cocinar pescado.', 'am AA-bent KO-je ij OFT FISH', 'am A-bent KO-che ij OFT FISH']),
            W('gern(e)', 'con gusto, me gusta', null, 'GERN(e)', 'GUERN(e) (g = "gu")', null, ['Ich esse gern Schokolade.', 'Me gusta comer chocolate.', 'ij E-se guern sho-ko-LAA-de', 'ij E-se GUERN sho-ko-LA-de'], 'Con un verbo expresa "me gusta": Ich trinke gern Kaffee.')
          ]
        },

        {
          id: 'tageszeiten', titulo: 'Wann? Las partes del día (adverbios)', icono: 'calendario', color: 'morado',
          descripcion: '[LIBRO] p. 49. La tabla de Maria Hepp: morgens, vormittags, mittags, nachmittags, abends.',
          palabras: [
            W('morgens', 'por la mañana', null, 'MOR-gens', 'MOR-guens', 'sol', ['Morgens esse ich Müsli.', 'Por la mañana como muesli.', 'MOR-guens E-se ij MIUS-li', 'MOR-guens E-se ij MIUS-li'], 'Sinónimo: am Morgen.'),
            W('vormittags', 'a media mañana', null, 'FOR-mi-taaks', 'FOR-mi-taks (v = "f")', 'sol', null, 'Sinónimo: am Vormittag.'),
            W('mittags', 'al mediodía', null, 'MI-taaks', 'MI-taks', 'sol', null, 'Sinónimo: am Mittag.'),
            W('nachmittags', 'por la tarde', null, 'NAAJ-mi-taaks', 'NAJ-mi-taks (ch áspera tras a)', 'sol', null, 'Sinónimo: am Nachmittag.'),
            W('abends', 'por la noche', null, 'AA-bents', 'A-bents', 'luna', null, 'Sinónimo: am Abend.')
          ]
        },

        {
          id: 'berufe', titulo: 'Berufe rund ums Essen (oficios)', icono: 'personas', color: 'verde',
          descripcion: '[LIBRO] p. 51. Los cinco oficios de "Berufswahl leicht gemacht – von A–Z". Forma femenina con -in.',
          palabras: [
            W('der Bäcker', 'el panadero', 'der', 'BE-ka', 'BE-ker (ä = "e")', 'panaderia', null, 'Mujer: die Bäckerin.', 'die Bäcker'),
            W('die Hotelfachfrau', 'la empleada de hotel (oficio)', 'die', 'jo-TEL-faj-frau', 'jo-TEL-faj-frau (ch áspera tras a)', 'cama', null, 'Hombre: der Hotelfachmann.'),
            W('der Koch', 'el cocinero', 'der', 'KOJ', 'KOCH (ch áspera tras o)', 'cocinero', null, 'Mujer: die Köchin. Max Schmidt es Koch en Konstanz.', 'die Köche'),
            W('der Kellner', 'el camarero', 'der', 'KEL-na', 'KEL-ner', 'camarero', null, 'Mujer: die Kellnerin.', 'die Kellner'),
            W('der Landwirt', 'el agricultor', 'der', 'LANT-virt', 'LANT-virt (d final = "t"; w = "v")', 'hoja', null, 'Mujer: die Landwirtin.', 'die Landwirte'),
            W('der Chef', 'el jefe', 'der', 'SHEF', 'SHEF (ch = "sh" en palabra francesa)', 'personas', null, null, 'die Chefs'),
            W('die Kollegin', 'la compañera de trabajo', 'die', 'ko-LEE-gin', 'ko-LE-guin', 'personas', null, 'Hombre: der Kollege.', 'die Kolleginnen'),
            W('die Arbeit', 'el trabajo', 'die', 'AR-bait', 'AR-bait (ei = "ai")', 'herramienta', null, null, null),
            W('der Beruf', 'la profesión', 'der', 'be-RUUF', 'be-RUF', 'herramienta', null, 'Kochen ist mein Beruf, aber auch mein Hobby.', 'die Berufe'),
            W('das Hobby', 'el pasatiempo', 'das', 'JO-bi', 'JO-bi (h aspirada)', 'pelota', null, null, 'die Hobbys'),
            W('der Gast', 'el invitado, el cliente', 'der', 'GAST', 'GAST', 'personas', null, 'Plural: die Gäste.', 'die Gäste')
          ]
        },

        {
          id: 'wg', titulo: 'Die Netzwerk-WG: ¡a hornear!', icono: 'comida', color: 'rosa',
          descripcion: '[LIBRO] p. 52. Lista de la compra de Anna y Luca y la tarde de pastel.',
          palabras: [
            W('das Mehl', 'la harina', 'das', 'MEEL', 'MEL (e larga)', 'pan'),
            W('die Butter', 'la mantequilla', 'die', 'BU-ta', 'BU-ter', 'mantequilla'),
            W('der Apfelkuchen', 'el pastel de manzana', 'der', 'AP-fel-kuu-jen', 'AP-fel-ku-chen', 'pastel', ['Bea und Max machen einen Apfelkuchen.', 'Bea y Max hacen un pastel de manzana.', 'BEE-a unt MAKS MA-jen AI-nen AP-fel-kuu-jen', 'BE-a unt MAKS MA-chen AI-nen AP-fel-ku-chen']),
            W('backen', 'hornear', null, 'BA-ken', 'BA-ken', 'pastel', ['Sie möchten Ihren Lieblingskuchen backen.', 'Quieren hornear su pastel favorito.', 'zii MOEJ-ten II-ren LIIP-lings-kuu-jen BA-ken', 'si MÖCH-ten I-ren LIP-lings-ku-chen BA-ken'], 'ich backe, du bäckst, er bäckt.'),
            W('der Lieblingskuchen', 'el pastel favorito', 'der', 'LIIP-lings-kuu-jen', 'LIP-lings-ku-chen', 'pastel')
          ]
        }

      ]
    }
  });
})();
