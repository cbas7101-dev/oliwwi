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
  wholesalePrice: string;
  extra?: string;
  color: 'rose' | 'pink' | 'peach' | 'lilac' | 'aqua';
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phoneDisplay: string | null;
  phoneInternational: string | null;
  schedule: string;
}

export const products: Product[] = [
  {
    id: 'tinta-labial-ushas',
    brand: 'USHAS',
    name: 'Tinta labial larga duración USHAS',
    category: 'Maquillaje',
    unitPrice: '$2.00',
    wholesalePrice: '$1.50 c/u',
    extra: 'Caja x24: $30',
    color: 'rose'
  },
  {
    id: 'desmaquillante-rosas-ushas',
    brand: 'USHAS',
    name: 'Desmaquillante de Rosas USHAS',
    category: 'Skincare',
    unitPrice: '$3.50',
    wholesalePrice: '$2.90 c/u',
    extra: 'Caja x12: $26',
    color: 'pink'
  },
  {
    id: 'dr-althea-345',
    brand: 'Dr. Althea',
    name: '345 Crema Hidratante (gel)',
    category: 'Skincare coreano',
    unitPrice: '$37.00',
    wholesalePrice: '$33.00 c/u',
    color: 'peach'
  },
  {
    id: 'dr-althea-147',
    brand: 'Dr. Althea',
    name: 'Crema 147',
    category: 'Skincare coreano',
    unitPrice: '$36.00',
    wholesalePrice: '$33.00 c/u',
    color: 'lilac'
  },
  {
    id: 'boj-protector-solar',
    brand: 'Beauty of Joseon',
    name: 'Protector Solar (arroz + probióticos)',
    category: 'Skincare coreano',
    unitPrice: '$26.00',
    wholesalePrice: '$21.50 c/u',
    color: 'peach'
  },
  {
    id: 'boj-aqua-fresh',
    brand: 'Beauty of Joseon',
    name: 'Protector Solar Aqua Fresh (arroz + B5)',
    category: 'Skincare coreano',
    unitPrice: '$26.00',
    wholesalePrice: '$22.50 c/u',
    color: 'aqua'
  },
  {
    id: 'manteca-unicornio',
    brand: 'Cuidado corporal',
    name: 'Manteca Corporal “Caca de Unicornio”',
    category: 'Cuidado corporal',
    unitPrice: '$11.00',
    wholesalePrice: '$9.20 c/u',
    extra: 'Aromas: chicle / espuma de colores',
    color: 'lilac'
  },
  {
    id: 'kit-cebolla',
    brand: 'Cuidado capilar',
    name: 'Kit Shampoo + Acondicionador de Cebolla',
    category: 'Cuidado capilar',
    unitPrice: '$60 kit / $30 solo shampoo',
    wholesalePrice: '$25.00 c/u',
    color: 'rose'
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
    address: '[pendiente]',
    phoneDisplay: '098 440 3580',
    phoneInternational: '593984403580',
    schedule: '[pendiente]'
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
