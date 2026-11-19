# Portafolio — Gustavo Quiroz

Portafolio personal de **Gustavo Diego Quiroz**, desarrollador backend en formación (Java · Spring Boot · SQL), estudiante de Desarrollo de Software en el Instituto SISE.

## Tecnologías

Sitio **estático**, sin frameworks ni dependencias que instalar:

| Parte | Tecnología | Por qué |
|---|---|---|
| Estructura | HTML5 semántico | Mejor SEO y accesibilidad |
| Estilos | CSS puro con variables | Cambias la paleta en un solo lugar (`:root`) |
| Interacciones | JavaScript puro (ES2020) | Carga rápida, sin librerías |
| Formulario | [Formspree](https://formspree.io) | Envía los mensajes a tu correo sin servidor propio |
| Publicación | Netlify (o GitHub Pages) | Gratis y con HTTPS |

## Arquitectura y carpetas

```
portafolio/
├── index.html            # Página principal: todas las secciones
├── 404.html              # Página de error
├── assets/
│   ├── css/styles.css    # 1) Variables 2) Base 3) Utilidades 4) Componentes 5) Secciones 6) Animaciones
│   ├── js/main.js        # Una función por responsabilidad: menú, scroll, formulario, etc.
│   ├── img/              # Foto, favicon e imagen para redes sociales
│   └── docs/             # Aquí va tu CV en PDF
├── netlify.toml          # Encabezados de seguridad y caché
├── robots.txt
└── README.md
```

**Separación de responsabilidades:** el contenido vive en el HTML (así los buscadores lo leen), el diseño en el CSS y el comportamiento en el JS. No hay JavaScript ni estilos dentro del HTML.

## Funcionalidades

- Menú fijo con resaltado de la sección actual y menú móvil accesible
- Animaciones al hacer scroll (se desactivan si el usuario prefiere menos movimiento)
- Formulario de contacto funcional con validación y protección antispam
- Botón para descargar el CV (se oculta solo si el PDF todavía no existe)
- Botón para volver arriba
- SEO: metaetiquetas, Open Graph y datos estructurados
- Seguridad: Content Security Policy, enlaces externos con `noopener`, encabezados en `netlify.toml`

## Cómo ejecutarlo

No necesita instalación. Opciones:

1. **Más fácil:** abre `index.html` con doble clic.
2. **Recomendado (servidor local):** en VS Code instala la extensión *Live Server* → clic derecho en `index.html` → *Open with Live Server*.
3. **Con Python:**
   ```bash
   python -m http.server 8000
   ```
   y abre http://localhost:8000

## Publicarlo

**Netlify:** entra a netlify.com → *Add new site* → *Import from GitHub* → elige este repositorio → *Deploy*. No hay comando de build.

> Si el repositorio es privado, Netlify igual puede publicarlo; el código sigue privado y la página queda pública.

## Pendientes para completar

- [ ] Agregar el CV en `assets/docs/CV-Gustavo-Quiroz.pdf`
- [ ] Confirmar el ID de Formspree en `index.html` (atributo `action` del formulario)
- [ ] Reemplazar `https://TU-DOMINIO/` en la etiqueta `canonical` cuando tengas la URL final
- [ ] Agregar capturas y detalles de *Live Translate AI*
- [ ] Recomendado: usar una foto real y profesional en `assets/img/gustavo.webp` y `gustavo.jpg` (640×800)

## Cómo agregar un proyecto

Copia un bloque `<article class="project">` dentro de la sección `#proyectos` en `index.html` y cambia el texto. Usa las etiquetas `badge--ok` (funcional), `badge--warn` (en desarrollo) o muévelo a la lista *En planificación* si aún no tiene código.

---

Contacto: [gustavodiego550@gmail.com](mailto:gustavodiego550@gmail.com) · [LinkedIn](https://www.linkedin.com/in/gustavodiegoq) · [GitHub](https://github.com/Gustavobest)
