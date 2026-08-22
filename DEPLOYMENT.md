# Despliegue y dominios de Oliwwi

## Arquitectura

- `www.oliwwi.com`: proyecto Astro `oliwwi-web` en Vercel.
- `oliwwi.com`: dominio adicional del mismo proyecto Vercel, con redirección a `https://www.oliwwi.com` configurada en **Settings > Domains**.
- `tienda.oliwwi.com`: WordPress/WooCommerce en su hosting independiente.

Los proyectos se mantienen separados porque Astro usa un despliegue estático en Vercel y la tienda necesita PHP, WordPress y su base de datos.

## DNS

Estado comprobado el 22 de agosto de 2026:

- `www.oliwwi.com` es CNAME de `6c0ae62e6aae35b6.vercel-dns-017.com`.
- `oliwwi.com` resuelve a `216.198.79.1` y debe permanecer asociado al mismo proyecto en Vercel.
- `tienda.oliwwi.com` resuelve a `64.90.53.113`, correspondiente al hosting de WordPress.

No se debe apuntar `tienda.oliwwi.com` al proyecto Astro. Cualquier cambio solicitado por Vercel debe tomarse del panel del proyecto, porque Vercel puede asignar valores DNS específicos por dominio.

## Navegación y sesiones

Los enlaces entre ambos hosts usan URLs absolutas y conservan `utm_*`, `gclid` y `fbclid`. El carrito y la sesión no se serializan en la URL: WooCommerce los conserva mediante sus cookies en `tienda.oliwwi.com` cuando el visitante navega a la home y regresa.

`vercel.json` mantiene redirects para rutas históricas como `/tienda`, `/carrito`, `/ofertas`, `/sucursales` y `/nosotros`. Vercel conserva el query string en estos redirects.

## Publicación

1. Ejecutar `npm run check` y `npm run build`.
2. Desplegar `oliwwi-web` en Vercel.
3. Confirmar en **Settings > Domains** que `www.oliwwi.com` sea el dominio principal y que `oliwwi.com` redirija hacia él.
4. Probar los enlaces a tienda, ofertas, sucursales y carrito.
