export const siteConfig = {
  name: 'Oliwwi',
  tagline: 'Maquillaje, skincare coreano y cuidado personal 100% original',
  url: 'https://www.oliwwi.com',
  storeUrl: 'https://tienda.oliwwi.com',
  cartUrl: 'https://tienda.oliwwi.com/cart/',
  accountUrl: 'https://tienda.oliwwi.com/my-account/',
  whatsappBase: 'https://wa.me/593',
};

export const announcementMessages = [
  '✨ Envíos a todo Ecuador — 100% original',
  'Retiro en tienda gratis en 6 ciudades',
  'Pago seguro online o contraentrega',
];

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  image: string;
  description: string;
  /** URL de la categoría en la tienda WooCommerce (verificada) o fallback a /shop/ */
  categoryUrl: string;
}

export const brands: Brand[] = [
  {
    id: 'catrice',
    name: 'Catrice',
    slug: 'catrice',
    logo: '/img/catrice-logo.png',
    image: '/img/brand-catrice.jpg',
    description: 'Maquillaje profesional accesible',
    categoryUrl: `${siteConfig.storeUrl}/product-category/catrice/`,
  },
  {
    id: 'essence',
    name: 'essence',
    slug: 'essence',
    logo: '/img/essence-logo.jpg',
    image: '/img/brand-essence.jpg',
    description: 'Diversión y color para tu rutina',
    categoryUrl: `${siteConfig.storeUrl}/product-category/essence/`,
  },
  {
    id: 'citycolor',
    name: 'City Color',
    slug: 'city-color',
    logo: '/img/citycolor-logo.png',
    image: '/img/brand-citycolor.jpg',
    description: 'Trendy makeup con actitud',
    // TODO: usar `${siteConfig.storeUrl}/product-category/city-color/` cuando la categoría exista en la tienda
    categoryUrl: `${siteConfig.storeUrl}/shop/`,
  },
  {
    id: 'bodycology',
    name: 'Bodycology',
    slug: 'bodycology',
    logo: '/img/bodycology-logo.png',
    image: '/img/brand-bodycology.jpg',
    description: 'Cuidado corporal sensorial',
    // TODO: usar `${siteConfig.storeUrl}/product-category/bodycology/` cuando la categoría exista en la tienda
    categoryUrl: `${siteConfig.storeUrl}/shop/`,
  },
  {
    id: 'yuya',
    name: 'Yuya Cosméticos',
    slug: 'yuya-cosmeticos',
    logo: '/img/yuya-logo.jpg',
    image: '/img/brand-yuya.jpg',
    description: 'Belleza con estilo propio',
    // TODO: usar `${siteConfig.storeUrl}/product-category/yuya-cosmeticos/` cuando la categoría exista en la tienda
    categoryUrl: `${siteConfig.storeUrl}/shop/`,
  },
  {
    id: 'milani',
    name: 'Milani',
    slug: 'milani',
    logo: '/milani.png',
    image: '/milani.png',
    description: 'Maquillaje profesional accesible',
    categoryUrl: `${siteConfig.storeUrl}/product-category/milani/`,
  },
  {
    id: 'beauty-creation',
    name: 'Beauty Creation',
    slug: 'beauty-creation',
    logo: '/beauty-creations-logo.png',
    image: '/beauty-creations-logo.png',
    description: 'Color y creatividad para tu look',
    categoryUrl: `${siteConfig.storeUrl}/product-category/beauty-creation/`,
  },
];

export interface MegaLink {
  label: string;
  href: string;
  logo?: string;
}

export interface MegaColumn {
  heading: string;
  links: MegaLink[];
}

export interface MegaPromo {
  image: string;
  alt: string;
  title: string;
  href: string;
}

export interface NavCategory {
  label: string;
  href: string;
  mega?: {
    columns: MegaColumn[];
    promos?: MegaPromo[];
  };
}

const shopUrl = `${siteConfig.storeUrl}/shop/`;
const ofertasUrl = `${siteConfig.storeUrl}/ofertas/`;
const novedadesUrl = `${siteConfig.storeUrl}/shop/?orderby=date`;

// TODO: cuando la tienda publique las subcategorías, reemplazar los fallback a /shop/
// por sus URLs reales (p. ej. /product-category/skincare-coreano/).
const skincareCoreanoUrl = shopUrl;
const cuidadoCapilarUrl = shopUrl;
const cuidadoCorporalUrl = shopUrl;

const makeupBrands = ['catrice', 'essence', 'milani', 'beauty-creation'];
const personalBrands = ['bodycology', 'yuya', 'citycolor'];

function brandLinks(ids: string[]): MegaLink[] {
  return ids
    .map((id) => brands.find((brand) => brand.id === id))
    .filter((brand): brand is Brand => Boolean(brand))
    .map((brand) => ({ label: brand.name, href: brand.categoryUrl, logo: brand.logo }));
}

export const navCategories: NavCategory[] = [
  {
    label: 'Maquillaje',
    href: shopUrl,
    mega: {
      columns: [
        { heading: 'Por marca', links: brandLinks(makeupBrands) },
        {
          heading: 'Explorar',
          links: [
            { label: 'Todo el maquillaje', href: shopUrl },
            { label: 'Novedades', href: novedadesUrl },
            { label: 'Ofertas', href: ofertasUrl },
          ],
        },
      ],
      promos: [
        {
          image: '/img/promo-maquillaje.jpg',
          alt: 'Promoción de maquillaje',
          title: 'Nueva temporada de color',
          href: shopUrl,
        },
        {
          image: '/img/promo-labios.jpg',
          alt: 'Promoción de labiales',
          title: 'Labios que enamoran',
          href: shopUrl,
        },
      ],
    },
  },
  {
    label: 'Skincare',
    href: shopUrl,
    mega: {
      columns: [
        {
          heading: 'Por categoría',
          links: [
            { label: 'Skincare coreano', href: skincareCoreanoUrl },
            { label: 'Cuidado capilar', href: cuidadoCapilarUrl },
            { label: 'Cuidado corporal', href: cuidadoCorporalUrl },
          ],
        },
        {
          heading: 'Explorar',
          links: [
            { label: 'Ver toda la tienda', href: shopUrl },
            { label: 'Ofertas', href: ofertasUrl },
          ],
        },
      ],
      promos: [
        {
          image: '/img/promo-skincare.jpg',
          alt: 'Promoción de skincare',
          title: 'Tu piel va primero',
          href: shopUrl,
        },
      ],
    },
  },
  {
    // TODO: apuntar a `${siteConfig.storeUrl}/product-category/skincare-coreano/` cuando la categoría exista
    label: 'Skincare Coreano',
    href: skincareCoreanoUrl,
  },
  {
    label: 'Cuidado Personal',
    href: shopUrl,
    mega: {
      columns: [
        { heading: 'Por categoría', links: brandLinks(personalBrands) },
        {
          heading: 'Rituales',
          links: [
            { label: 'Cuidado capilar', href: cuidadoCapilarUrl },
            { label: 'Cuidado corporal', href: cuidadoCorporalUrl },
          ],
        },
      ],
      promos: [
        {
          image: '/img/promo-skincare.jpg',
          alt: 'Promoción de cuidado personal',
          title: 'Tu ritual de cuidado',
          href: shopUrl,
        },
      ],
    },
  },
  {
    label: 'Ofertas',
    href: ofertasUrl,
  },
];

export const brandsMenu: NavCategory = {
  label: 'Marcas',
  href: shopUrl,
  mega: {
    columns: [
      { heading: 'Maquillaje', links: brandLinks(makeupBrands) },
      { heading: 'Cuidado y más', links: brandLinks(personalBrands) },
    ],
  },
};

export const navLinks = [
  { href: siteConfig.url, label: 'Inicio', crossSite: true },
  { href: `${siteConfig.storeUrl}/shop/`, label: 'Tienda' },
  { href: `${siteConfig.storeUrl}/ofertas/`, label: 'Ofertas' },
  { href: `${siteConfig.storeUrl}/nuestras-tiendas/`, label: 'Sucursales' },
  { href: `${siteConfig.storeUrl}/nosotros/`, label: 'Nosotros' },
];

export const benefits = [
  { icon: 'sparkles', title: '100% Originales', desc: 'Productos auténticos y seleccionados' },
  { icon: 'shield', title: 'Pago Seguro', desc: 'Online o contraentrega' },
  { icon: 'message-square', title: 'Pedidos por WhatsApp', desc: 'Directo a tu sucursal favorita' },
  { icon: 'tag', title: 'Precios de Mayoreo', desc: 'Descuentos por volumen' },
  { icon: 'store', title: 'Retiro en Tienda', desc: 'En 6 ciudades del Ecuador' },
];

export const heroSlides = [
  {
    id: 1,
    image: '/img/banner-promo-wide.jpg',
    alt: 'Maquillaje Oliwwi',
    headline: 'Todo lo que amas, más cerca de ti',
    subhead: 'Maquillaje, skincare coreano y cuidado personal 100% original',
    ctaText: 'Comprar online',
    ctaLink: `${siteConfig.storeUrl}/shop/`,
    secondaryText: 'Ver favoritos',
    secondaryLink: '#carousel-favoritos-oliwwi',
  },
  {
    id: 2,
    image: '/img/hero-2.jpg',
    alt: 'Skincare coreano',
    headline: 'Tu skincare, sin vueltas',
    subhead: 'K-beauty, sérums y rutinas para cada tipo de piel',
    ctaText: 'Explorar skincare',
    ctaLink: `${siteConfig.storeUrl}/shop/`,
    secondaryText: 'Ver marcas',
    secondaryLink: '#marcas-heading',
  },
  {
    id: 3,
    image: '/img/banner-secundario.jpg',
    alt: 'Ofertas Oliwwi',
    headline: 'Tus favoritos, mejor precio',
    subhead: 'Descuentos exclusivos en marcas que amas',
    ctaText: 'Ver ofertas',
    ctaLink: `${siteConfig.storeUrl}/ofertas/`,
    secondaryText: 'Más novedades',
    secondaryLink: '#newsletter-heading',
  },
  {
    id: 4,
    image: '/img/hero-4.jpg',
    alt: 'Pedidos por WhatsApp',
    headline: 'Pide por WhatsApp, recoge en tienda',
    subhead: 'Elige tu sucursal y tu pedido llega directo al chat',
    ctaText: 'Elegir sucursal',
    ctaLink: '#sucursales',
    secondaryText: 'Cómo funciona',
    secondaryLink: `${siteConfig.storeUrl}/nosotros/`,
  },
];

export const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/oliwwi_ec', icon: 'instagram' },
  { name: 'TikTok', href: 'https://tiktok.com/@oliwwi_makeup', icon: 'tiktok' },
  { name: 'Facebook', href: 'https://facebook.com/oliwwi', icon: 'facebook' },
];

export const paymentMethods = ['Visa', 'Mastercard', 'American Express', 'PayPal', 'Efectivo', 'Contraentrega'];
