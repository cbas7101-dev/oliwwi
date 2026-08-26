import { siteConfig } from './config';

export type ProductCategory =
  | 'Maquillaje'
  | 'Skincare'
  | 'Skincare coreano'
  | 'Cuidado capilar'
  | 'Cuidado corporal';

export interface Product {
  id: string;
  brand: string;
  name: string;
  category: ProductCategory;
  unitPrice: string;
  compareAtPrice?: string;
  discountPct?: number;
  wholesalePrice: string;
  extra?: string;
  color: 'rose' | 'pink' | 'peach' | 'lilac' | 'aqua';
  image?: string;
  /** SKU en WooCommerce: habilita el fallback de búsqueda directa al producto */
  sku?: string;
  /** ID de producto en WooCommerce: habilita add-to-cart nativo (TODO: exportar IDs desde wp-admin) */
  wooProductId?: number;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phoneDisplay: string | null;
  phoneInternational: string | null;
  schedule: string;
}

const brandCategorySlugs: Record<string, string> = {
  Milani: 'milani',
  essence: 'essence',
  Catrice: 'catrice',
  'Beauty Creation': 'beauty-creation',
};

/**
 * URL de "Añadir al carrito" para un producto:
 * 1. Si hay ID de WooCommerce → add-to-cart nativo (agrega de verdad al carrito).
 * 2. Si hay SKU → búsqueda en la tienda (WooCommerce redirige al producto si es
 *    el único resultado; verificado en tienda.oliwwi.com).
 * 3. Si hay categoría de marca verificada → página de la marca.
 * 4. Fallback final → tienda general.
 */
export function addToCartUrl(product: Pick<Product, 'wooProductId' | 'sku' | 'brand'>): string {
  if (product.wooProductId) {
    return `${siteConfig.storeUrl}/cart/?add-to-cart=${product.wooProductId}`;
  }
  if (product.sku) {
    return `${siteConfig.storeUrl}/?s=${encodeURIComponent(product.sku)}&post_type=product`;
  }
  const slug = brandCategorySlugs[product.brand];
  if (slug) {
    return `${siteConfig.storeUrl}/product-category/${slug}/`;
  }
  return `${siteConfig.storeUrl}/shop/`;
}

export const products: Product[] = [
  {
    id: 'tinta-labial-ushas',
    brand: 'USHAS',
    name: 'Tinta labial larga duración USHAS',
    category: 'Maquillaje',
    unitPrice: '$2.00',
    compareAtPrice: '$2.50',
    discountPct: 20,
    wholesalePrice: '$1.50 c/u',
    extra: 'Caja x24: $30',
    color: 'rose',
    image: 'https://placehold.co/400x400/efe3fb/611ac0?text=USHAS+Tinta'
  },
  {
    id: 'desmaquillante-rosas-ushas',
    brand: 'USHAS',
    name: 'Desmaquillante de Rosas USHAS',
    category: 'Skincare',
    unitPrice: '$3.50',
    compareAtPrice: '$4.20',
    discountPct: 17,
    wholesalePrice: '$2.90 c/u',
    extra: 'Caja x12: $26',
    color: 'pink',
    image: 'https://placehold.co/400x400/efe3fb/611ac0?text=USHAS+Desmaquillante'
  },
  {
    id: 'dr-althea-345',
    brand: 'Dr. Althea',
    name: '345 Crema Hidratante (gel)',
    category: 'Skincare coreano',
    unitPrice: '$37.00',
    compareAtPrice: '$42.00',
    discountPct: 12,
    wholesalePrice: '$33.00 c/u',
    color: 'peach',
    image: 'https://placehold.co/400x400/efe3fb/611ac0?text=Dr+Althea+345'
  },
  {
    id: 'dr-althea-147',
    brand: 'Dr. Althea',
    name: 'Crema 147',
    category: 'Skincare coreano',
    unitPrice: '$36.00',
    wholesalePrice: '$33.00 c/u',
    color: 'lilac',
    image: 'https://placehold.co/400x400/efe3fb/611ac0?text=Dr+Althea+147'
  },
  {
    id: 'boj-protector-solar',
    brand: 'Beauty of Joseon',
    name: 'Protector Solar (arroz + probióticos)',
    category: 'Skincare coreano',
    unitPrice: '$26.00',
    compareAtPrice: '$29.00',
    discountPct: 10,
    wholesalePrice: '$21.50 c/u',
    color: 'peach',
    image: 'https://placehold.co/400x400/efe3fb/611ac0?text=BOJ+Protector'
  },
  {
    id: 'boj-aqua-fresh',
    brand: 'Beauty of Joseon',
    name: 'Protector Solar Aqua Fresh (arroz + B5)',
    category: 'Skincare coreano',
    unitPrice: '$26.00',
    wholesalePrice: '$22.50 c/u',
    color: 'aqua',
    image: 'https://placehold.co/400x400/efe3fb/611ac0?text=BOJ+Aqua+Fresh'
  },
  {
    id: 'manteca-unicornio',
    brand: 'Cuidado corporal',
    name: 'Manteca Corporal “Caca de Unicornio”',
    category: 'Cuidado corporal',
    unitPrice: '$11.00',
    compareAtPrice: '$13.50',
    discountPct: 19,
    wholesalePrice: '$9.20 c/u',
    extra: 'Aromas: chicle / espuma de colores',
    color: 'lilac',
    image: 'https://placehold.co/400x400/efe3fb/611ac0?text=Manteca+Unicornio'
  },
  {
    id: 'kit-cebolla',
    brand: 'Cuidado capilar',
    name: 'Kit Shampoo + Acondicionador de Cebolla',
    category: 'Cuidado capilar',
    unitPrice: '$60 kit / $30 solo shampoo',
    compareAtPrice: '$70 kit / $35 solo shampoo',
    discountPct: 14,
    wholesalePrice: '$25.00 c/u',
    color: 'rose',
    image: 'https://placehold.co/400x400/efe3fb/611ac0?text=Kit+Cebolla'
  }
];

export const branches: Branch[] = [
  {
    id: 'ambato',
    name: 'Ambato',
    address: 'Atahualpa y los Shirrys (junto a las 2 gasolineras)',
    phoneDisplay: '096 792 8652',
    phoneInternational: '593967928652',
    schedule: 'Lun–Sáb 9:30am–6pm · Domingo cerrado'
  },
  {
    id: 'otavalo',
    name: 'Otavalo',
    address: 'Calle Bolívar y Juan Montalvo (frente al parque Bolívar)',
    phoneDisplay: '099 327 8588',
    phoneInternational: '593993278588',
    schedule: 'Lun–Sáb 8am–6:30pm · Domingo 9am–5pm'
  },
  {
    id: 'cuenca',
    name: 'Cuenca',
    address: 'Presidente Córdova entre Luis Cordero y Benigno Malo 8-41 (frente al hotel Río Piedra)',
    phoneDisplay: '099 020 1423',
    phoneInternational: '593990201423',
    schedule: 'Lun–Sáb 9am–6:30pm · Domingo 10am–5pm'
  },
  {
    id: 'ibarra',
    name: 'Ibarra',
    address: 'Calle Colón y José Joaquín de Olmedo (diagonal a Todo x $1)',
    phoneDisplay: '095 923 9067',
    phoneInternational: '593959239067',
    schedule: 'Lun–Sáb 9am–6:30pm · Domingo 9am–5pm'
  },
  {
    id: 'riobamba',
    name: 'Riobamba',
    address: 'Gaspar de Villarroel y Juan de la Valle',
    phoneDisplay: '093 954 2412',
    phoneInternational: '593939542412',
    schedule: 'Lun–Sáb 9am–7:30pm · Domingo sin atención'
  },
  {
    id: 'latacunga',
    name: 'Latacunga',
    address: 'Escríbenos para conocer la dirección',
    phoneDisplay: '098 440 3580',
    phoneInternational: '593984403580',
    schedule: 'Horario por confirmar'
  }
];

export const productCategories: Array<'Todos' | ProductCategory> = [
  'Todos',
  'Maquillaje',
  'Skincare',
  'Skincare coreano',
  'Cuidado capilar',
  'Cuidado corporal'
];
