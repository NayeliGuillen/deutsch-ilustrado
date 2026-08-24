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
guarda los 37 archivos de la guía en la caché del navegador (unos 120 KB). Se
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
        │   └── router.js       Enrutado por hash (#/leccion)
        ├── data/               CONTENIDO: una lección por archivo
        │   ├── pronunciacion.js  generos.js  casos.js
        │   ├── verbos-regulares.js  verbos-separables.js
        │   ├── numeros.js  adjetivos.js
        │   ├── vocabulario.js  frases.js  quiz.js
        ├── views/              CÓMO SE DIBUJA cada tipo de lección
        │   ├── panel-voz.js    Recuadro con el estado real del audio
        │   ├── infografia.js   Motor de láminas (lo usan casi todas)
        │   ├── alfabeto.js  vocabulario.js  frases.js
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
