# Evviva Nutrition

Sitio web de Evviva Nutrition, migrado de WordPress a Astro.js, con Storyblok como CMS y desplegado en Vercel.

**Sitio en vivo:** https://www.evvivanutrition.com/

## Trabajo realizado

- Migración del sitio de WordPress a Astro.js.
- Adaptación del diseño y los componentes de la plantilla a la identidad y los contenidos de Evviva Nutrition.
- Integración de Storyblok para gestionar páginas, artículos y bloques de contenido.
- Configuración del despliegue en Vercel.

## Tecnologías

Astro.js, Storyblok, Tailwind CSS y Vercel.

## Desarrollo local

Requiere Node.js y acceso al espacio de Storyblok del proyecto.

1. Instala las dependencias con `npm install`.
2. Crea un archivo `.env` con `STORYBLOK_TOKEN` y el token de acceso del espacio de Storyblok. No lo subas al repositorio.
3. Ejecuta `npm run dev`.

Para activar la vista previa de Storyblok, añade `STORYBLOK_IS_PREVIEW=yes` al archivo `.env`. Sin esta opción, el sitio se genera de forma estática.

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con HTTPS. |
| `npm run build` | Genera la versión de producción. |
| `npm run preview` | Previsualiza la compilación local. |

## Créditos

Basado en la plantilla [Bigspring Light Astro de Themefisher](https://github.com/themefisher/bigspring-light-astro), distribuida bajo licencia MIT. Se conserva el aviso de licencia original en [LICENSE](./LICENSE).
