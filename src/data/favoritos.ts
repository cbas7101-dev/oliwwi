import type { Product } from './store';

/**
 * Favoritos Oliwwi — curaduría de productos essence con datos reales del
 * catálogo (Catalogos/salida_essence_0226). Las imágenes se sirven localmente
 * porque las de la tienda aún no están publicadas para esta marca.
 */
export const favoritos: Product[] = [
  {
    id: 'essence-lash-princess-01',
    sku: 'ESIM18.017-001-0012',
    brand: 'essence',
    name: 'Máscara de Pestañas Lash Princess False Lash Effect 12ml',
    category: 'Maquillaje',
    unitPrice: '$6.00',
    wholesalePrice: 'Consultar',
    color: 'lilac',
    image: '/img/essence/ESIM18_017-001-0012.png'
  },
  {
    id: 'essence-banana-powder',
    sku: 'ESIM21.001-001-0006',
    brand: 'essence',
    name: 'Polvo Suelto Banana Loose Powder 6g',
    category: 'Maquillaje',
    unitPrice: '$7.00',
    wholesalePrice: 'Consultar',
    color: 'peach',
    image: '/img/essence/ESIM21_001-001-0006.png'
  },
  {
    id: 'essence-hydra-kiss-01',
    sku: 'ESIT01.004-001-0004',
    brand: 'essence',
    name: 'Tinta de Labios Hidratante Hydra Kiss 4ml 01',
    category: 'Maquillaje',
    unitPrice: '$5.00',
    wholesalePrice: 'Consultar',
    color: 'rose',
    image: '/img/essence/ESIT01_004-001-0004.png'
  },
  {
    id: 'essence-make-me-brow-04',
    sku: 'ESIM17.002-003-0004',
    brand: 'essence',
    name: 'Máscara de Cejas Make Me Brow 3.8ml 04',
    category: 'Maquillaje',
    unitPrice: '$5.00',
    wholesalePrice: 'Consultar',
    color: 'aqua',
    image: '/img/essence/ESIM17_002-003-0004.png'
  },
  {
    id: 'essence-matte-mousse-01',
    sku: 'ESIM02.010-001-0016',
    brand: 'essence',
    name: 'Base Natural Matte Mousse 16g 01',
    category: 'Maquillaje',
    unitPrice: '$5.00',
    wholesalePrice: 'Consultar',
    color: 'pink',
    image: '/img/essence/ESIM02_010-001-0016.png'
  },
  {
    id: 'essence-what-the-fake-01',
    sku: 'ESIM38.001-008-0004',
    brand: 'essence',
    name: 'Rellenador de Labios What The Fake! Glass Shine 4.2ml 01',
    category: 'Maquillaje',
    unitPrice: '$5.00',
    wholesalePrice: 'Consultar',
    color: 'rose',
    image: '/img/essence/ESIM38_001-008-0004.png'
  },
  {
    id: 'essence-jelly-blush',
    sku: 'ESIM24.009-001-0001',
    brand: 'essence',
    name: 'Rubor Juicy Bomb Party Jelly Blush 10ml',
    category: 'Maquillaje',
    unitPrice: '$4.00',
    compareAtPrice: '$5.00',
    discountPct: 20,
    wholesalePrice: 'Consultar',
    color: 'pink',
    image: '/img/essence/ESIM24_009-001-0001.png'
  },
  {
    id: 'essence-bouncy-glow-10',
    sku: 'ESIM09.012-001-0004',
    brand: 'essence',
    name: 'Iluminador Bouncy Soft Touch Glow 10 4g',
    category: 'Maquillaje',
    unitPrice: '$5.00',
    wholesalePrice: 'Consultar',
    color: 'peach',
    image: '/img/essence/ESIM09_012-001-0004.png'
  }
];
