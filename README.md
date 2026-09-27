# TP1 — Grupo N°3 - G.O.O.D_TEAM

Sitio web de presentación del equipo para el Trabajo Práctico 1 de la materia Tecnologías de la Comunicación. El sitio presenta al grupo, a cada integrante individualmente y el proceso de desarrollo en una bitácora.

**URL publicada (Vercel):** [https://tp-1-ifts-29-frontend-grupo3.vercel.app](https://tp-1-ifts-29-frontend-grupo3.vercel.app/)

## Integrantes

| Nombre | GitHub |
|---|---|
| Ignacio Tomás Humphreys | [github.com/Ignacio-Humphreys](https://github.com/Ignacio-Humphreys) |
| Lihue Anker Díaz | [github.com/AnkerYeray](https://github.com/AnkerYeray) |
| Cristel Nazarena Frías | [github.com/CristelFrias](https://github.com/CristelFrias) |
| Lucas Federico De Diego | [github.com/lucasfedericodd](https://github.com/lucasfedericodd) |
| David Sebastian Giordano Rodriguez | [github.com/Sebastian1601](https://github.com/Sebastian1601) |

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 (variables CSS, Flexbox, Grid, media queries)
- JavaScript vanilla (sin frameworks ni librerías)
- [Google Fonts](https://fonts.google.com/): Space Grotesk (títulos) + Inter (texto)
- Publicado con [Vercel](https://vercel.com)

## Estructura de archivos

```
/
├── index.html               # Portada: nombre del equipo, propósito y listado de integrantes
├── perfil-humphreys.html    # Perfil individual — Ignacio Tomás Humphreys
├── perfil-diaz.html         # Perfil individual — Lihue Anker Díaz
├── perfil-frias.html        # Perfil individual — Cristel Nazarena Frías
├── perfil-de-diego.html     # Perfil individual — Lucas Federico De Diego
├── perfil-giordano.html     # Perfil individual — David Sebastian Giordano Rodriguez
├── bitacora.html            # Registro del proceso de desarrollo
├── css/
│   └── style.css            # Hoja de estilos única, compartida por todas las páginas
├── js/
│   ├── main.js               # Menú responsive, submenú de perfiles y modo claro/oscuro
│   └── perfil.js             # "Revelar un dato random" (sección "Sobre mí" de cada perfil)
├── img/
│   ├── Peliculas/             # Portadas de las películas favoritas de cada integrante
│   ├── Discos/                # Portadas de los discos favoritos de cada integrante
│   └── Propias/                # Fotos de perfil (avatar) de cada integrante
└── README.md
```

## Guía de estilos

El sitio tiene **modo claro** (por defecto) y **modo oscuro** (toggle 🌙/☀️ en el header), ambos definidos como variables CSS.

**Paleta — modo claro (por defecto)**

| Uso | Color |
|---|---|
| Fondo principal | `#f4f6fb` |
| Fondo secundario / header | `#e9edf6` |
| Tarjetas | `#ffffff` |
| Primario (violeta) | `#6d5efc` |
| Acento | `#0891a8` |
| Texto principal | `#101728` |
| Texto secundario | `#5b6780` |
| Bordes | `#dbe1ef` |

**Paleta — modo oscuro**

| Uso | Color |
|---|---|
| Fondo principal | `#0f172a` |
| Fondo secundario / header | `#16213a` |
| Tarjetas | `#1b2a4a` |
| Primario (violeta) | `#6d5efc` |
| Acento (cian) | `#22d3ee` |
| Texto principal | `#f8fafc` |
| Texto secundario | `#94a3b8` |
| Bordes | `#2a3a5c` |

**Tipografía:** Space Grotesk (`--font-title`) para títulos y encabezados; Inter (`--font-body`) para texto de lectura. Ambas cargadas desde Google Fonts.

**Iconografía:** emojis nativos (📍 🎬 💿 🔗 ✨ 🌙 ☀️) usados como iconos livianos, sin dependencias externas.

**Personalización por perfil:** cada integrante puede sumar su propio estilo dentro de su página sin afectar al resto del sitio, agregando una clase al `<body>` (ej. `body.perfil-ignacio`) y sobreescribiendo variables/selectores puntuales en `css/style.css` o en un `<style>` propio dentro de su HTML. El perfil de Ignacio Humphreys, por ejemplo, usa un modo oscuro propio en negro y rojo con bordes rectos "cortados" (`clip-path`), en vez del violeta/cian y las esquinas redondeadas del resto del sitio.

## Funciones de JavaScript

### Portada (`index.html` + `js/main.js`)

- **Menú hamburguesa responsive**: por debajo de los 900px el menú de navegación se colapsa detrás de un botón ☰ que lo despliega/oculta (`hamburger.addEventListener('click', ...)`).
- **Modo claro / oscuro** (presente en todas las páginas, `js/main.js`): un botón 🌙/☀️ alterna el atributo `data-theme="dark"` en `<html>`, que sobreescribe las variables CSS de color. La preferencia se guarda en `localStorage` y, si el usuario nunca la cambió, se respeta `prefers-color-scheme` del sistema. Un pequeño script inline en el `<head>` de cada página aplica el tema guardado antes de pintar, para evitar el parpadeo (flash) del tema por defecto.
- **Buscador dinámico de integrantes** (`filtrarIntegrantes()`): a medida que se escribe en el campo de búsqueda, filtra en vivo las tarjetas de integrantes por nombre o habilidad, y actualiza un contador de resultados. No recarga la página ni depende de un botón de "buscar".


### Cada perfil individual (`js/perfil.js`)

- **"Revelar un dato random"** (`revelarDato()`): en la sección "Sobre mí" de cada perfil, un botón muestra/oculta un dato curioso personal sin recargar la página, alternando la clase `visible` sobre el texto.


## Diseño adaptable (responsive)

El sitio se probó en los tres breakpoints obligatorios:

- **1200px** (desktop): grilla de integrantes en 3 columnas, perfil en 3 columnas de información.
- **900px** (tablet): grilla en 2 columnas, menú colapsado detrás del botón hamburguesa.
- **400px** (mobile): todo en 1 columna, encabezado de perfil apilado verticalmente, botones centrados.

## Uso de IA y criterio de privacidad

- **Herramienta y modelo utilizado:** Claude (Anthropic) con su modelo Sonnet 5 (plan gratuito), usado dentro de la interfaz de chat de Claude. Adicionalmente, se consultó a Google Antigravity por algunas correcciones básicas de formateo de texto.
- **Experiencia previa del equipo con IA:** En particular, hemos utilizado IA en proyectos anteriores de frontend/backend/ingeniería para acelerar la escritura de texto o normalizar funciones o métodos para que todos funcionen de la misma manera. De manera más individual, Ignacio trabaja con Claude Pro en la diaria, principalmente con los modelos Sonnet y Fable. 
- **Qué se usó para generar:**
  - Estructura completa de archivos (HTML y CSS) a partir de la consigna del TP1 provista por la cátedra. Los mismos con información en todos sus sectores que indican [COMPLETAR] para ser reemplazados por datos reales y personalizados.
  - Boilerplate de las 5 páginas de perfil a partir de una plantilla común.
  - Redacción inicial de esta documentación README, también dejando la mayor parte de los puntos a [COMPLETAR]. Dicho readme fue utilizado como guía para generar este README final.
- **Avatares:** Inicialmente, cada avatar simplemente tenía las iniciales del integrante en vez de una foto. Cada integrante reemplazó dicho placeholder inicial por su propia foto de perfil (ver `img/Propias/`), recortada y centrada con `object-fit: cover` dentro del círculo del avatar. No se usaron imágenes generadas por IA para los avatares.
- **Qué revisó y adaptó el equipo con criterio propio:**
  - Cada uno de nosotros completó su perfil particular, dándole los estilos que queríamos para hacerlos más individuales y característicos a nuestros gustos, hobbies, experiencias y habilidades particulares.
  - **Anker** hizo el primer mockup en figma que utilizamos como base para arrancar con la construcción del sitio junto con el chequeo de accesibilidad.
  - **Ignacio** hizo el primer commit con el formato base del sitio que luego fue mutando con el pasar de los días con las inserciones de todos los participantes + reescritura del readme.
  - **Cristel** se encargó de la revisión de múltiples errores y detalles que iban surgiendo a través de las distintas versiones y commits realizados.
  - **Lucas** se encargó principalmente de la sección de bitácora del sitio, siguiendo los cambios en las ideas y armado del sitio que íbamos teniendo como equipo.
  - **Sebastián** se encargó del chequeo de errores y formato de múltiples líneas de html y css. 

## Evolución (próximos TPs)

- Para las próximas entregas, se pueden agregar animaciones y transiciones al sitio para hacerlo más atractivo. Adicionalmente, podemos revisar los detalles de accesibilidad para mejorarlos con descripciones de fotos o para la lectura automática.
