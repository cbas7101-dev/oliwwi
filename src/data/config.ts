export const siteConfig = {
  name: 'Oliwwi',
  tagline: 'Maquillaje, skincare coreano y cuidado personal 100% original',
  url: 'https://www.oliwwi.com',
  storeUrl: 'http://tienda.oliwwi.com',
  whatsappBase: 'https://wa.me/593',
};

export const brands = [
  {
    id: 'catrice',
    name: 'Catrice',
    slug: 'catrice',
    logo: '/img/catrice-logo.png',
    image: '/img/brand-catrice.jpg',
    description: 'Maquillaje profesional accesible',
  },
  {
    id: 'essence',
    name: 'essence',
    slug: 'essence',
    logo: '/img/essence-logo.jpg',
    image: '/img/brand-essence.jpg',
    description: 'Diversión y color para tu rutina',
  },
  {
    id: 'citycolor',
    name: 'City Color',
    slug: 'city-color',
    logo: '/img/citycolor-logo.png',
    image: '/img/brand-citycolor.jpg',
    description: 'Trendy makeup con actitud',
  },
  {
    id: 'bodycology',
    name: 'Bodycology',
    slug: 'bodycology',
    logo: '/img/bodycology-logo.png',
    image: '/img/brand-bodycology.jpg',
    description: 'Cuidado corporal sensorial',
  },
  {
    id: 'yuya',
    name: 'Yuya Cosméticos',
    slug: 'yuya-cosmeticos',
    logo: '/img/yuya-logo.jpg',
    image: '/img/brand-yuya.jpg',
    description: 'Belleza con estilo propio',
  },
];

export const navLinks = [
  { href: '/', label: 'Inicio' },
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
    image: '/img/hero-1.jpg',
    alt: 'Maquillaje Oliwwi',
    headline: 'Todo lo que amas, más cerca de ti',
    subhead: 'Maquillaje, skincare coreano y cuidado personal 100% original',
    ctaText: 'Comprar online',
    ctaLink: `${siteConfig.storeUrl}/shop/`,
    secondaryText: 'Ver favoritos',
    secondaryLink: '#carousel-novedades',
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
    image: '/img/hero-3.jpg',
    alt: 'Ofertas Oliwwi',
    headline: 'Tus favoritos, mejor precio',
    subhead: 'Descuentos exclusivos en marcas que amas',
    ctaText: 'Ver ofertas',
    ctaLink: `${siteConfig.storeUrl}/ofertas/`,
    secondaryText: 'Suscribirme',
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
  { name: 'Instagram', href: 'https://instagram.com/oliwwi', icon: 'instagram' },
  { name: 'TikTok', href: 'https://tiktok.com/@oliwwi', icon: 'tiktok' },
  { name: 'Facebook', href: 'https://facebook.com/oliwwi', icon: 'facebook' },
];