# Deutsch Ilustrado 🇩🇪

Guía interactiva para aprender alemán desde cero (nivel A1–A2), con **infografías
tipo mapa mental**, **pronunciación en audio**, vocabulario, frases reales,
flashcards y quiz.

Hecha con **HTML, CSS y JavaScript puro**: sin frameworks, sin dependencias,
sin compilación. Funciona abriendo `index.html`, incluso sin conexión (el audio
tiene sus matices: ver más abajo).

---

## Cómo usarla

**Opción 1 — doble clic.** Abre `index.html` en Chrome, Edge o Safari. Ya está.

**Opción 2 — servidor local** (recomendado si vas a modificar el código, evita el
caché agresivo del navegador):

```bash
# Con Python (ya instalado en el equipo)
python -m http.server 8080
# luego abre http://localhost:8080
```

### Audio: cómo conseguir pronunciación alemana de verdad

La guía no usa archivos MP3: sintetiza la voz con la *Web Speech API* del
navegador. Eso implica que **la calidad depende de las voces que tenga tu
equipo**, y conviene saberlo:

| Situación | Qué se oye |
|---|---|
| Voz alemana instalada en Windows | Alemán correcto, **también sin conexión**. Lo ideal. |
| Chrome o Edge + internet, sin voz instalada | Alemán correcto con la voz de red *Google Deutsch*. Necesita conexión. |
| **Brave**, sin voz instalada | Nada: Brave **bloquea las voces de red de Google** por privacidad y solo usa las de Windows. |
| Sin voz alemana y sin conexión | El navegador leería el alemán con **voz inglesa**: pronunciación falsa. |

**Salvaguarda:** en los dos últimos casos la guía **no reproduce el audio**, para
no enseñar una pronunciación equivocada. Muestra un recuadro rojo en *Alfabeto y
pronunciación* y en *Practicar* explicando cómo arreglarlo, con un botón por si
aun así quieres oírlo (queda claramente marcado como "sonará en inglés").

Windows **no** trae la voz alemana de serie. Para instalarla en **Windows 10**:
*Configuración → Hora e idioma → Voz → Administrar voces → Agregar voces →
Alemán (Alemania)*. En **Windows 11**: *Configuración → Hora e idioma → Idioma y
región → Agregar idioma → Deutsch (Deutschland)*, marcando **Voz**. Después cierra
el navegador **por completo** y vuelve a abrirlo: las voces solo se detectan al
arrancar.

Mientras no la tengas, guíate por la **transcripción fonética en español** que
acompaña a cada palabra y frase: está pensada justo para eso.

---

## Publicarla en internet (y usarla desde el móvil)

Al ser un sitio estático sin backend ni compilación, **GitHub Pages** la sirve
tal cual y gratis. Una vez publicada tendrás una URL tipo
`https://TU-USUARIO.github.io/deutsch-ilustrado/` que se abre desde cualquier
teléfono.

**Paso 1 — crear el repositorio vacío en GitHub.** Git no lo crea solo: si haces
`push` a un repositorio que no existe, GitHub responde *"repository not found"*.
Ve a <https://github.com/new>, ponle de nombre `deutsch-ilustrado`, márcalo
**Public** y **no** añadas README ni .gitignore (ya los hay aquí).

**Paso 2 — conectar y subir.** Sustituye `mi-usuario` por tu nombre de usuario
real de GitHub:

```bash
git remote add origin https://github.com/mi-usuario/deutsch-ilustrado.git
git push -u origin main
```

**Paso 3 — activar Pages.** En el repositorio: **Settings → Pages → Source:
Deploy from a branch → `main` / `/ (root)` → Save**. En un par de minutos la URL
está viva.

> Si te equivocas con la URL, no pasa nada: `git remote remove origin` y vuelves
> a empezar por el paso 2.

> El repositorio debe ser **público** para usar Pages con una cuenta gratuita.
> El contenido son apuntes de alemán, así que no hay nada sensible; aun así,
> tenlo en cuenta antes de publicar.

### Se instala como una app

La guía incluye un **web app manifest** y un **service worker**, así que en el
móvil (o en el escritorio) puedes usar *Añadir a pantalla de inicio* / *Instalar*
y queda como una aplicación más: icono propio, nombre "Deutsch" y a pantalla
completa, sin barra del navegador.

Y una vez abierta con conexión, **funciona sin conexión**: el service worker
guarda los 54 archivos de la guía en la caché del navegador (unos 480 KB). Se
puede estudiar en el metro sin datos. El progreso se guarda en ese navegador, de
forma independiente al del ordenador.

### Llevar el progreso de un dispositivo a otro

El progreso vive en el `localStorage` del navegador, así que **cada navegador y
cada dispositivo tiene el suyo** (incluso `file://` y la versión publicada son
almacenamientos distintos). No hay cuentas ni servidor, a propósito.

Para pasarlo, el botón **Llevar a otro dispositivo** del menú lateral ofrece dos
vías:

- **Código**: un texto corto (unos 200 caracteres) que copias y te mandas por
  mensaje; en el otro dispositivo lo pegas y pulsas *Aplicar código*.
- **Archivo JSON**: descarga y carga. Sirve además de copia de seguridad, útil
  porque Safari en iPhone borra este almacenamiento tras 7 días sin visitas.

Al importar se **fusiona**, nunca se reemplaza: se unen las lecciones y las
favoritas de ambos lados y se conserva el mejor resultado del quiz, así que
puedes sincronizar en cualquier dirección sin perder nada. Solo viaja el
aprendizaje; el tema, la velocidad de voz y el permiso de audio se quedan en
cada aparato porque dependen de él.

> Al modificar, añadir o renombrar archivos hay que actualizar la lista
> `RECURSOS` de [`sw.js`](sw.js) y subir el número de `VERSION`; si no, los
> navegadores que ya tengan la guía cacheada seguirán sirviendo la versión
> antigua. El service worker solo se activa sobre `http(s)`: abriendo
> `index.html` con doble clic (`file://`) se ignora sin dar error.

**Audio en el móvil:** igual que en el escritorio, depende de que el teléfono
tenga voz alemana.
- *Android*: Ajustes → Accesibilidad → Texto a voz → motor de Google → Instalar
  datos de voz → **Deutsch**.
- *iPhone*: Ajustes → Accesibilidad → Contenido hablado → Voces → **Alemán**.

Si falta, la guía lo detecta y te lo dice en el recuadro de audio, igual que en
el ordenador.

---

## Qué incluye

| Sección | Contenido |
|---|---|
| **Alfabeto y pronunciación** | 26 letras + Ä Ö Ü ß, con **dos audios por tarjeta**: el nombre de la letra (para deletrear) y una palabra de ejemplo. Vocales largas/cortas, diptongos, `sch`/`ch`/`sp`/`st`, la `r` alemana, acentuación y trabalenguas. |
| **Los tres géneros** | der/die/das, artículos definidos e indefinidos, cómo deducir el género por su terminación, plurales. |
| **Los 4 casos** | Nominativ, Akkusativ, Dativ, Genitiv. Tabla maestra, preposiciones que rigen cada caso y pronombres. |
| **Verbos regulares** | Terminaciones, método de conjugación, usos, irregularidades ortográficas, `sein` y `haben`. |
| **Verbos con prefijo** | Separables vs. inseparables, participios, orden de la frase. |
| **Números, hora y fecha** | Cardinales, la "regla del revés", ordinales, fechas, la hora (incluida la trampa de *halb vier*), precios. |
| **Adjetivos** | Cuándo declinan y cuándo no, las tres declinaciones, orden de varios adjetivos, comparativo y superlativo. |
| **Vocabulario esencial** | 172 palabras en 11 temas, cada sustantivo con su artículo, filtro por categoría y favoritas. |
| **Vocabulario nuevo: Köln** | 58 palabras de la tarea sobre Köln, con audio, traducción, plural y **dos pronunciaciones**: la del curso y una "fácil", con guiones y notas de los sonidos difíciles. |
| **Vocabulario nuevo: Kapitel 1** | 47 palabras de saludos, países, idiomas y "Deutsch international", cada una con **dibujo**, audio, traducción, **dos pronunciaciones** y una **oración de ejemplo** que también lleva las dos pronunciaciones. |
| **Vocabulario nuevo: Kapitel 2** | 71 palabras de hobbys, lugares, quedar con alguien, profesiones, trabajo, objetos y direcciones en la ciudad, con el mismo formato (dibujo, audio, ejemplo y doble pronunciación). |
| **Domina el tema** | Sección nueva con ocho lecciones: teoría a fondo de **der, die, das**, de **ein, eine, kein, keine** y de **direcciones**; el vocabulario de ciudad y direcciones (36 palabras con dibujo, ejemplo y doble pronunciación); y cuatro entrenamientos por niveles (ver abajo). |
| **Verbos** | **Verbos nuevos y conjugación** (64 verbos con dibujo, audio, doble pronunciación, ejemplo y tabla de conjugación con las formas irregulares en rojo), **Conjugación: todas las reglas** (terminaciones, cambios de vocal, sein/haben, modales, separables, errores típicos) y un entrenamiento de 7 niveles. |
| **Libro · Kapitel 3 / 4 / 5** | Transcripción de las páginas del libro (Kap. 3: pp. 30–37 · Kap. 4: pp. 44–53 · Kap. 5: pp. 54–56). Por capítulo: **vocabulario** con pronunciación y pronunciación fácil, **el libro paso a paso** (diálogos y textos con traducción plegable, recuadros G / [!] / "Gut gesagt" y "kurz und klar") y un **entrenamiento** con ejercicios al estilo del libro. Cada parte lleva etiqueta [LIBRO] o [EXTRA]. Donde la foto cortaba el texto se indica con […]. |
| **Hablar y escribir** | Entrenamiento para **formar oraciones**, 8 **conversaciones** reales con traducción plegable, **alemán real** (saludos regionales, reacciones, forma hablada, palabras de amigos, con aviso de registro) y su entrenamiento. |
| **Vocabulario: el tiempo** | Días, meses, estaciones, partes del día, la hora, frecuencia y ordinales (60 palabras con doble pronunciación). |
| **Examen de la semana** | Guía del examen y seis entrenadores (hora con relojes, fechas/ordinales/meses/estaciones, números, der-die-das + ein/kein con cajas de colores, direcciones con planos al azar y simulacros mixtos). Todo se genera al azar. |
| **Frases para conversar** | 88 expresiones reales en 10 situaciones (saludos, restaurante, compras, viaje, trámites, emergencias…), con transcripción fonética. |
| **Practicar** | Flashcards (mazo completo, por tema o solo tus favoritas ★) y quiz de 10 preguntas barajadas de un banco de 30. |

Otras funciones: buscador global (atajo `/`), tema claro/oscuro, control de
velocidad de la voz, progreso guardado en el navegador, y las láminas se pueden
imprimir con `Ctrl+P` para colgarlas en la pared.

---

## Estructura del proyecto

```
Curso german/
├── index.html                  Único HTML: cascarón de la aplicación
├── manifest.webmanifest        Metadatos para instalarla como app
├── sw.js                       Service worker: funciona sin conexión
├── README.md
└── assets/
    ├── icons/                  Icono en SVG y PNG (192, 512, apple-touch)
    ├── css/
    │   ├── tokens.css          Variables de diseño (colores, tipos, temas)
    │   ├── base.css            Reset, tipografía y utilidades
    │   ├── layout.css          Barra superior, menú lateral, vista
    │   ├── components.css      Botones, tarjetas, tablas, flashcards, quiz
    │   └── infografia.css      El "mapa mental": núcleo, tarjetas de colores
    └── js/
        ├── core/
        │   ├── app.js          Espacio de nombres DE + registro de lecciones
        │   ├── store.js        Persistencia (localStorage)
        │   ├── voz.js          Síntesis de voz alemana
        │   ├── dom.js          Ayudantes de HTML (siempre con escape)
        │   ├── pictogramas.js  Dibujos SVG del vocabulario (DE.pic) y banderas
        │   ├── mapa.js         Planos de ciudad: simulación de rutas y dibujo SVG (DE.mapa)
        │   └── router.js       Enrutado por hash (#/leccion)
        ├── data/               CONTENIDO: una lección por archivo
        │   ├── pronunciacion.js  generos.js  casos.js
        │   ├── verbos-regulares.js  verbos-separables.js
        │   ├── numeros.js  adjetivos.js
        │   ├── vocabulario.js  vocabulario-koeln.js  frases.js  quiz.js
        │   ├── vocabulario-kap1.js  vocabulario-kap2.js  vocabulario-direcciones.js
        │   ├── dominio-articulos.js  dominio-ein-kein.js  dominio-direcciones.js   (teoría)
        │   ├── entrenamiento-articulos.js  entrenamiento-ein-kein.js
        │   ├── entrenamiento-direcciones.js  entrenamiento-vocabulario.js   (ejercicios)
        ├── views/              CÓMO SE DIBUJA cada tipo de lección
        │   ├── panel-voz.js    Recuadro con el estado real del audio
        │   ├── infografia.js   Motor de láminas (lo usan casi todas)
        │   ├── alfabeto.js  vocabulario.js  vocabulario-pron.js  frases.js
        │   ├── entrenador.js   Motor de ejercicios por niveles
        │   ├── practica.js  inicio.js  buscador.js
        └── main.js             Arranque: menú, tema, buscador, audio
```

### La idea de la arquitectura

**Datos separados de presentación.** Un archivo de `data/` no contiene ni una
línea de HTML: solo describe *qué* se enseña. Un archivo de `views/` no contiene
contenido: solo sabe *cómo* dibujar una estructura de datos. Por eso ampliar el
curso es escribir datos, no maquetar.

Los scripts son clásicos (sin `type="module"`) a propósito: los módulos ES no
funcionan al abrir un archivo con `file://`, y aquí importa que la guía se pueda
abrir con doble clic. Todo cuelga de un único objeto global, `DE`.

---

## Añadir una lección nueva

1. Crea `assets/js/data/mi-tema.js`:

```js
DE.registrarLeccion({
  id: 'mi-tema',                       // ruta: #/mi-tema
  titulo: 'Mi tema',
  icono: 'libro',                      // nombre del catálogo de iconos
  grupo: 'Gramática esencial',         // sección del menú
  color: 'azul',
  resumen: 'Una línea que explica la lección.',
  vista: 'infografia',
  datos: {
    titulo: 'MI TEMA',
    subtitulo: 'mein Thema',
    cinta: 'La idea en cinco palabras',
    resumen: 'Un párrafo corto.',
    tarjetas: [
      {
        n: 1, color: 'verde', icono: 'idea', titulo: '¿Qué es?',
        bloques: [
          { tipo: 'texto', texto: 'Explicación.' },
          { tipo: 'ejemplos', items: [
            { de: 'Guten Tag!', fon: 'GU-ten taac', es: '¡Buenos días!' }
          ]},
          { tipo: 'aviso', icono: 'alerta', texto: 'Ojo con esto.' }
        ]
      }
    ]
  }
});
```

2. Añade la etiqueta `<script src="assets/js/data/mi-tema.js"></script>` en
   `index.html`, junto a las demás de `data/`.

Listo: aparece en el menú, en la portada, en el buscador y en la barra de progreso.

### Tipos de bloque disponibles

| Tipo | Uso |
|---|---|
| `texto` | Un párrafo. |
| `lista` | Viñetas. `estilo`: `corazon`, `estrella`, `check`. Los items pueden ser texto o `{de, es}`. |
| `ejemplos` | Pares alemán/español con audio. Admite `fon` (fonética). |
| `tabla` | `encabezados` + `filas`. Una celda `{de:'…'}` se vuelve palabra con audio. |
| `aviso` | Recuadro de atención con emoji. |
| `caja` | Agrupa varios bloques bajo un subtítulo. |

Colores de tarjeta: `morado`, `verde`, `azul`, `naranja`, `rosa`, `turquesa`,
`rojo`, `indigo`, `lima`.

### Iconos

La interfaz no usa emojis: todos los iconos son SVG de trazo definidos en
[`assets/js/core/iconos.js`](assets/js/core/iconos.js). Heredan el color y el
tamaño del texto que los rodea (`stroke: currentColor`), así que se adaptan
solos al tema claro/oscuro y al color de cada tarjeta.

```js
DE.icono('idea')             // <svg class="ico">…</svg>
DE.icono('libro', 'ico-lg')  // con clase de tamaño
DE.iconos.catalogo()         // lista de nombres disponibles
```

### Entrenamiento por niveles

La sección **Domina el tema** usa el motor [`views/entrenador.js`](assets/js/views/entrenador.js). Cada lección de entrenamiento es un archivo de datos con una lista de `niveles`; cada nivel tiene sus `ejercicios` o es **automático** (`auto: { tipo, n }`) y se arma al azar con todo el vocabulario de la guía.

Tipos de ejercicio: `opcion`, `escribir`, `ordenar` (también con `piezas` para ordenar líneas de un diálogo), `mapa` (`modo: 'lugar'` o `'describir'`), `clasificar` (arrastrar a cajas de colores), `unir` (emparejar columnas) y `completar` (huecos dentro de un texto). Un nivel puede mezclar `ejercicios` escritos a mano con `auto`; los tipos automáticos (`hora-*`, `num-*`, `ordinal`, `mes-*`, `conj-*`, `ein-kein`, `art-akk`, `mapa-azar`, `clasificar-articulos`…) viven en [`core/generadores.js`](assets/js/core/generadores.js) y se combinan con `tipo: 'mixto'`. Un nivel se **domina con 90 % o más a la primera**; los fallos se explican (campo `why`) y se repasan al final. La mejor nota de cada nivel se guarda en `DE.store` (`dominio`) y viaja con la copia de progreso.

En los planos (`core/mapa.js`) la respuesta no se escribe a mano: se **calcula** simulando los pasos (`g`, `l`, `r`) sobre una cuadrícula de 4 × 4 cruces. Un ejercicio de mapa solo necesita `mapa`, `inicio:[c,r]`, `dir`, `pasos` y `lado`.

**Niveles que se desbloquean.** Un nivel se abre al dominar el anterior (90 % o más a la primera). El progreso que ya tenías sigue abierto, y el botón «Abrir todos los niveles» desactiva el bloqueo.

**Práctica ilimitada.** [`core/generadores-vocab.js`](assets/js/core/generadores-vocab.js) fabrica ejercicios nuevos en cada intento desde el vocabulario (`v-traducir`, `v-articulo`, `v-plural`, `v-completar`, `v-ordenar`, `v-escuchar`, `v-unir`, `v-frase-es`, `v-clasificar`). Se limitan a un capítulo con `fuente: ['k3-vocabulario']` y a categorías con `categorias: [...]`. `DE.nivelesVocab({ fuente, desde })` añade de golpe seis niveles de práctica a un entrenador. Un nivel también admite `banco` (ejercicios extra) y `partida` (cuántos se sortean en cada intento).

Para comprobar todo el banco a la vez: `DE.entrenador.validar(ejercicio)` devuelve `null` si el ejercicio es correcto.

### Colores de los artículos

[`core/articulos.js`](assets/js/core/articulos.js) colorea solo, en toda la página, los artículos: **der rojo · die azul · das verde · plural morado**. Mira el género real del sustantivo en el vocabulario (por eso *den Käse* sale rojo y *die Hotels* morado). Para excluir un trozo: `data-sin-color`.

### Fotos propias en las palabras

[`core/fotos.js`](assets/js/core/fotos.js) deja poner una foto en cada palabra del vocabulario con pronunciación y en los ejercicios. Prioridad: (1) tu foto guardada en el navegador (IndexedDB), que puedes pegar con Ctrl + V, subir, hacer con la cámara, elegir entre sugerencias de Openverse o cargar en bloque con "Cargar carpeta de fotos"; (2) los archivos de [`assets/img/palabras/`](assets/img/palabras/) nombrados `palabra-sin-articulo.jpg`; (3) el dibujo de la guía. Las fotos del navegador no viajan con la copia de progreso.

### Pictogramas del vocabulario

Las palabras de `vocabulario-kap1.js` y `vocabulario-kap2.js` llevan un dibujo propio, definido en [`assets/js/core/pictogramas.js`](assets/js/core/pictogramas.js). Se pide por nombre en el campo `visual` de cada palabra:

```js
DE.pic('koffer')     // dibujo de una maleta
DE.pic('flag:at')    // bandera de Austria
DE.pic('lang:EN')    // burbuja de diálogo con "EN"
```

Son SVG de trazo con relleno suave del color de la categoría, así que también se adaptan al tema claro/oscuro. Si un nombre no tiene dibujo propio, se usa el icono del mismo nombre de `DE.icono()`.

En el HTML estático basta con `<span data-icono="buscar"></span>`: `main.js` lo
rellena al arrancar. Si se pide un icono que no existe, se dibuja `info` y se
avisa por consola. Hay alias en español (`atencion`, `truco`, `dinero`,
`salud`…) para no tener que recordar el nombre exacto.

---

## Compatibilidad

Chrome, Edge, Firefox y Safari actuales. El audio requiere `speechSynthesis`
(todos menos Firefox en Linux sin voces instaladas). Diseño adaptado a móvil,
tablet y escritorio, con tema oscuro automático según el sistema.

## Créditos

Contenido gramatical basado en el temario estándar A1–A2 del *Goethe-Institut*.
La escritura fonética en español sigue la convención de *Alemán para Dummies*
(Christensen & Fox, Berlitz): se lee tal como se escribe y la sílaba tónica va
en MAYÚSCULAS.
