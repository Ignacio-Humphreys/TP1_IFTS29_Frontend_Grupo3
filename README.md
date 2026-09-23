# TP1 — [COMPLETAR nombre del equipo]

Sitio web de presentación del equipo para el Trabajo Práctico 1 de la materia Tecnologías de la Comunicación. El sitio presenta al grupo, a cada integrante individualmente y el proceso de desarrollo en una bitácora.

**URL publicada (Vercel):** [COMPLETAR — https://tp1-equipo.vercel.app]

## Integrantes

| Nombre | GitHub |
|---|---|
| Ignacio Tomás Humphreys | [github.com/Ignacio-Humphreys](https://github.com/Ignacio-Humphreys) |
| Díaz | [github.com/AnkerYeray](https://github.com/AnkerYeray) |
| Frías | [github.com/CristelFrias](https://github.com/CristelFrias) |
| De Diego | [github.com/lucasfedericodd](https://github.com/lucasfedericodd) |
| Giordano Rodríguez | [github.com/Sebastian1601](https://github.com/Sebastian1601) |

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
├── perfil-diaz.html         # Perfil individual — Díaz
├── perfil-frias.html        # Perfil individual — Frías
├── perfil-de-diego.html     # Perfil individual — De Diego
├── perfil-giordano.html     # Perfil individual — Giordano Rodríguez
├── bitacora.html            # Registro del proceso de desarrollo
├── css/
│   └── style.css            # Hoja de estilos única, compartida por todas las páginas
├── js/
│   ├── main.js               # Menú responsive + buscador dinámico de integrantes (portada)
│   └── perfil.js             # Widget "elegí mi combo favorito" (todos los perfiles)
├── img/                      # Fotos/avatares de cada integrante [COMPLETAR al reemplazar los avatares con iniciales]
└── README.md
```

## Guía de estilos

**Paleta de colores**

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

**Iconografía:** emojis nativos (📍 🎬 💿 🔗 ✨) usados como iconos livianos, sin dependencias externas.

## Funciones de JavaScript

### Portada (`index.html` + `js/main.js`)

- **Menú hamburguesa responsive**: por debajo de los 900px el menú de navegación se colapsa detrás de un botón ☰ que lo despliega/oculta (`hamburger.addEventListener('click', ...)`).
- **Buscador dinámico de integrantes** (`filtrarIntegrantes()`): a medida que se escribe en el campo de búsqueda, filtra en vivo las tarjetas de integrantes por nombre o habilidad, y actualiza un contador de resultados. No recarga la página ni depende de un botón de "buscar".

[COMPLETAR: agregar captura de pantalla del buscador en acción]

### Cada perfil individual (`js/perfil.js`)

- **"Revelar un dato random"** (`revelarDato()`): en la sección "Sobre mí" de cada perfil, un botón muestra/oculta un dato curioso personal sin recargar la página, alternando la clase `visible` sobre el texto.

[COMPLETAR: agregar captura de pantalla del widget en acción]

## Diseño adaptable (responsive)

El sitio se probó en los tres breakpoints obligatorios:

- **1200px** (desktop): grilla de integrantes en 3 columnas, perfil en 3 columnas de información.
- **900px** (tablet): grilla en 2 columnas, menú colapsado detrás del botón hamburguesa.
- **400px** (mobile): todo en 1 columna, encabezado de perfil apilado verticalmente, botones centrados.

## Uso de IA y criterio de privacidad

- **Herramienta y modelo utilizado:** Claude (Anthropic), plan [COMPLETAR: gratuito/pago], usado dentro de la interfaz de chat de Claude.
- **Experiencia previa del equipo con IA:** [COMPLETAR].
- **Qué se usó para generar:**
  - Estructura completa de archivos (HTML, CSS y JS) a partir de la consigna del TP1 provista por la cátedra.
  - Boilerplate de las 5 páginas de perfil a partir de una plantilla común.
  - Redacción inicial de esta documentación README.
- **Avatares:** se usan iniciales sobre un fondo con gradiente como placeholder en lugar de fotos o imágenes generadas por IA. [COMPLETAR si el equipo decide reemplazarlos por fotos reales o avatares ilustrados, indicar acá qué herramienta y qué criterio de prompt se usó.]
- **Qué revisó y adaptó el equipo con criterio propio:**
  - [COMPLETAR: cada integrante debe completar sus propios datos personales — ciudad, edad, habilidades, películas y discos favoritos — reemplazando los placeholders `[COMPLETAR]`.]
  - [COMPLETAR: ajustes de paleta, contenido del propósito del equipo y entradas reales de la bitácora, escritos por el equipo y no por la IA.]
  - [COMPLETAR: cualquier corrección de bugs o ajuste de diseño hecho manualmente por el equipo.]

## Evolución (próximos TPs)

- [COMPLETAR: qué se planea agregar o mejorar en los siguientes trabajos prácticos — ej. reemplazar avatares por fotos, sumar más interactividad, mejorar accesibilidad, agregar animaciones, etc.]

## Cómo correr el proyecto localmente

No requiere instalación ni build. Alcanza con abrir `index.html` en un navegador, o servirlo con cualquier servidor estático, por ejemplo:

```bash
npx serve .
```
