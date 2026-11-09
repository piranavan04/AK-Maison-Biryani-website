/**
 * AK Maison Biryani — full menu.
 *
 * SAMPLE CONTENT: these dishes illustrate the design and are meant to be replaced with the
 * restaurant's confirmed menu. This file holds the structure (ids, photos, veg/non-veg, labels,
 * prices); dish and category names and descriptions are in both translation files:
 *   src/i18n/locales/en/translation.json  and  src/i18n/locales/fr/translation.json
 *   under menu.categories.<id> and menu.dishes.<id>.
 * Prices are left blank on purpose: add a `price` (e.g. '$16.95') to any dish and it appears
 * automatically. Photos live in /public/images/menu/<category>/ (credits in /public/images/CREDITS.md).
 */
import type { Photo } from './images'

export type Diet = 'veg' | 'non-veg'
export type DishTag = 'signature' | 'spicy' | 'sharing'

export interface MenuDish {
  /** Also the translation key: menu.dishes.<id>.name / .description / .alt */
  id: string
  diet: Diet
  tags?: DishTag[]
  price?: string
  photo: Photo
}

export interface MenuCategory {
  /** Also the translation key: menu.categories.<id>.name / .tab / .description */
  id: string
  dishes: MenuDish[]
}

export const MENU: MenuCategory[] = [
  {
    id: 'biryani',
    dishes: [
      {
        id: 'chicken-dum-biryani',
        diet: 'non-veg',
        tags: ['signature'],
        photo: {
          src: '/images/menu/biryani/chicken-dum-biryani-960.webp',
          srcSet:
            '/images/menu/biryani/chicken-dum-biryani-480.webp 480w, /images/menu/biryani/chicken-dum-biryani-960.webp 960w, /images/menu/biryani/chicken-dum-biryani-1440.webp 1440w',
          width: 1440,
          height: 1640,
          altKey: 'menu.dishes.chicken-dum-biryani.alt',
        },
      },
      {
        id: 'mutton-biryani',
        diet: 'non-veg',
        tags: ['signature'],
        photo: {
          src: '/images/menu/biryani/mutton-biryani-960.webp',
          srcSet:
            '/images/menu/biryani/mutton-biryani-480.webp 480w, /images/menu/biryani/mutton-biryani-960.webp 960w, /images/menu/biryani/mutton-biryani-1440.webp 1440w',
          width: 1440,
          height: 960,
          altKey: 'menu.dishes.mutton-biryani.alt',
        },
      },
      {
        id: 'egg-biryani',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/biryani/egg-biryani-960.webp',
          srcSet:
            '/images/menu/biryani/egg-biryani-480.webp 480w, /images/menu/biryani/egg-biryani-960.webp 960w, /images/menu/biryani/egg-biryani-1440.webp 1440w',
          width: 1440,
          height: 1383,
          altKey: 'menu.dishes.egg-biryani.alt',
        },
      },
      {
        id: 'vegetable-biryani',
        diet: 'veg',
        photo: {
          src: '/images/menu/biryani/vegetable-biryani-960.webp',
          srcSet:
            '/images/menu/biryani/vegetable-biryani-480.webp 480w, /images/menu/biryani/vegetable-biryani-960.webp 960w, /images/menu/biryani/vegetable-biryani-1440.webp 1440w',
          width: 1440,
          height: 940,
          altKey: 'menu.dishes.vegetable-biryani.alt',
        },
      },
      {
        id: 'chicken-leg-biryani',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/biryani/chicken-leg-biryani-960.webp',
          srcSet:
            '/images/menu/biryani/chicken-leg-biryani-480.webp 480w, /images/menu/biryani/chicken-leg-biryani-960.webp 960w, /images/menu/biryani/chicken-leg-biryani-1440.webp 1440w',
          width: 1440,
          height: 940,
          altKey: 'menu.dishes.chicken-leg-biryani.alt',
        },
      },
      {
        id: 'biryani-family-platter',
        diet: 'non-veg',
        tags: ['sharing'],
        photo: {
          src: '/images/menu/biryani/biryani-family-platter-960.webp',
          srcSet:
            '/images/menu/biryani/biryani-family-platter-480.webp 480w, /images/menu/biryani/biryani-family-platter-960.webp 960w, /images/menu/biryani/biryani-family-platter-1440.webp 1440w',
          width: 1440,
          height: 960,
          altKey: 'menu.dishes.biryani-family-platter.alt',
        },
      },
    ],
  },
  {
    id: 'chicken',
    dishes: [
      {
        id: 'butter-chicken',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/chicken/butter-chicken-960.webp',
          srcSet:
            '/images/menu/chicken/butter-chicken-480.webp 480w, /images/menu/chicken/butter-chicken-960.webp 960w, /images/menu/chicken/butter-chicken-1440.webp 1440w',
          width: 1440,
          height: 960,
          altKey: 'menu.dishes.butter-chicken.alt',
        },
      },
      {
        id: 'chicken-tikka-masala',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/chicken/chicken-tikka-masala-960.webp',
          srcSet:
            '/images/menu/chicken/chicken-tikka-masala-480.webp 480w, /images/menu/chicken/chicken-tikka-masala-960.webp 960w, /images/menu/chicken/chicken-tikka-masala-1440.webp 1440w',
          width: 1440,
          height: 960,
          altKey: 'menu.dishes.chicken-tikka-masala.alt',
        },
      },
      {
        id: 'home-style-chicken-curry',
        diet: 'non-veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/chicken/home-style-chicken-curry-960.webp',
          srcSet:
            '/images/menu/chicken/home-style-chicken-curry-480.webp 480w, /images/menu/chicken/home-style-chicken-curry-960.webp 960w, /images/menu/chicken/home-style-chicken-curry-1440.webp 1440w',
          width: 1440,
          height: 1152,
          altKey: 'menu.dishes.home-style-chicken-curry.alt',
        },
      },
      {
        id: 'chicken-karahi',
        diet: 'non-veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/chicken/chicken-karahi-960.webp',
          srcSet:
            '/images/menu/chicken/chicken-karahi-480.webp 480w, /images/menu/chicken/chicken-karahi-960.webp 960w, /images/menu/chicken/chicken-karahi-1440.webp 1440w',
          width: 1440,
          height: 1440,
          altKey: 'menu.dishes.chicken-karahi.alt',
        },
      },
      {
        id: 'tandoori-chicken',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/chicken/tandoori-chicken-960.webp',
          srcSet:
            '/images/menu/chicken/tandoori-chicken-480.webp 480w, /images/menu/chicken/tandoori-chicken-960.webp 960w, /images/menu/chicken/tandoori-chicken-1440.webp 1440w',
          width: 1440,
          height: 960,
          altKey: 'menu.dishes.tandoori-chicken.alt',
        },
      },
      {
        id: 'chicken-tikka',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/chicken/chicken-tikka-960.webp',
          srcSet:
            '/images/menu/chicken/chicken-tikka-480.webp 480w, /images/menu/chicken/chicken-tikka-960.webp 960w, /images/menu/chicken/chicken-tikka-1440.webp 1440w',
          width: 1440,
          height: 960,
          altKey: 'menu.dishes.chicken-tikka.alt',
        },
      },
    ],
  },
  {
    id: 'mutton',
    dishes: [
      {
        id: 'mutton-masala',
        diet: 'non-veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/mutton/mutton-masala-960.webp',
          srcSet:
            '/images/menu/mutton/mutton-masala-480.webp 480w, /images/menu/mutton/mutton-masala-960.webp 960w, /images/menu/mutton/mutton-masala-1440.webp 1440w',
          width: 1440,
          height: 1920,
          altKey: 'menu.dishes.mutton-masala.alt',
        },
      },
      {
        id: 'mutton-kuzhambu',
        diet: 'non-veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/mutton/mutton-kuzhambu-960.webp',
          srcSet:
            '/images/menu/mutton/mutton-kuzhambu-480.webp 480w, /images/menu/mutton/mutton-kuzhambu-960.webp 960w, /images/menu/mutton/mutton-kuzhambu-1440.webp 1440w',
          width: 1440,
          height: 960,
          altKey: 'menu.dishes.mutton-kuzhambu.alt',
        },
      },
      {
        id: 'mutton-nalli-nihari',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/mutton/mutton-nalli-nihari-960.webp',
          srcSet:
            '/images/menu/mutton/mutton-nalli-nihari-480.webp 480w, /images/menu/mutton/mutton-nalli-nihari-960.webp 960w, /images/menu/mutton/mutton-nalli-nihari-1440.webp 1440w',
          width: 1440,
          height: 1440,
          altKey: 'menu.dishes.mutton-nalli-nihari.alt',
        },
      },
      {
        id: 'mutton-sukka',
        diet: 'non-veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/mutton/mutton-sukka-960.webp',
          srcSet:
            '/images/menu/mutton/mutton-sukka-480.webp 480w, /images/menu/mutton/mutton-sukka-960.webp 960w, /images/menu/mutton/mutton-sukka-1440.webp 1440w',
          width: 1440,
          height: 1440,
          altKey: 'menu.dishes.mutton-sukka.alt',
        },
      },
    ],
  },
  {
    id: 'south-indian',
    dishes: [
      {
        id: 'masala-dosa',
        diet: 'veg',
        tags: ['signature'],
        photo: {
          src: '/images/menu/south-indian/masala-dosa-960.webp',
          srcSet:
            '/images/menu/south-indian/masala-dosa-480.webp 480w, /images/menu/south-indian/masala-dosa-960.webp 960w, /images/menu/south-indian/masala-dosa-1440.webp 1440w',
          width: 1440,
          height: 1068,
          altKey: 'menu.dishes.masala-dosa.alt',
        },
      },
      {
        id: 'plain-dosa',
        diet: 'veg',
        photo: {
          src: '/images/menu/south-indian/plain-dosa-960.webp',
          srcSet:
            '/images/menu/south-indian/plain-dosa-480.webp 480w, /images/menu/south-indian/plain-dosa-960.webp 960w, /images/menu/south-indian/plain-dosa-1440.webp 1440w',
          width: 1440,
          height: 1794,
          altKey: 'menu.dishes.plain-dosa.alt',
        },
      },
      {
        id: 'rava-dosa',
        diet: 'veg',
        photo: {
          src: '/images/menu/south-indian/rava-dosa-960.webp',
          srcSet:
            '/images/menu/south-indian/rava-dosa-480.webp 480w, /images/menu/south-indian/rava-dosa-960.webp 960w, /images/menu/south-indian/rava-dosa-1440.webp 1440w',
          width: 1440,
          height: 1101,
          altKey: 'menu.dishes.rava-dosa.alt',
        },
      },
      {
        id: 'idli-sambar',
        diet: 'veg',
        tags: ['signature'],
        photo: {
          src: '/images/menu/south-indian/idli-sambar-960.webp',
          srcSet:
            '/images/menu/south-indian/idli-sambar-480.webp 480w, /images/menu/south-indian/idli-sambar-960.webp 960w, /images/menu/south-indian/idli-sambar-1440.webp 1440w',
          width: 1440,
          height: 1494,
          altKey: 'menu.dishes.idli-sambar.alt',
        },
      },
      {
        id: 'medu-vada',
        diet: 'veg',
        photo: {
          src: '/images/menu/south-indian/medu-vada-960.webp',
          srcSet:
            '/images/menu/south-indian/medu-vada-480.webp 480w, /images/menu/south-indian/medu-vada-960.webp 960w, /images/menu/south-indian/medu-vada-1440.webp 1440w',
          width: 1440,
          height: 960,
          altKey: 'menu.dishes.medu-vada.alt',
        },
      },
      {
        id: 'podi-idli',
        diet: 'veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/south-indian/podi-idli-960.webp',
          srcSet:
            '/images/menu/south-indian/podi-idli-480.webp 480w, /images/menu/south-indian/podi-idli-960.webp 960w, /images/menu/south-indian/podi-idli-1440.webp 1440w',
          width: 1440,
          height: 960,
          altKey: 'menu.dishes.podi-idli.alt',
        },
      },
    ],
  },
  {
    id: 'vegetarian',
    dishes: [
      {
        id: 'paneer-butter-masala',
        diet: 'veg',
        photo: {
          src: '/images/menu/vegetarian/paneer-butter-masala-960.webp',
          srcSet:
            '/images/menu/vegetarian/paneer-butter-masala-480.webp 480w, /images/menu/vegetarian/paneer-butter-masala-960.webp 960w, /images/menu/vegetarian/paneer-butter-masala-1440.webp 1440w',
          width: 1440,
          height: 2559,
          altKey: 'menu.dishes.paneer-butter-masala.alt',
        },
      },
      {
        id: 'dal-tadka',
        diet: 'veg',
        photo: {
          src: '/images/menu/vegetarian/dal-tadka-960.webp',
          srcSet:
            '/images/menu/vegetarian/dal-tadka-480.webp 480w, /images/menu/vegetarian/dal-tadka-960.webp 960w, /images/menu/vegetarian/dal-tadka-1440.webp 1440w',
          width: 1440,
          height: 960,
          altKey: 'menu.dishes.dal-tadka.alt',
        },
      },
      {
        id: 'chana-bhatura',
        diet: 'veg',
        photo: {
          src: '/images/menu/vegetarian/chana-bhatura-960.webp',
          srcSet:
            '/images/menu/vegetarian/chana-bhatura-480.webp 480w, /images/menu/vegetarian/chana-bhatura-960.webp 960w, /images/menu/vegetarian/chana-bhatura-1440.webp 1440w',
          width: 1440,
          height: 1920,
          altKey: 'menu.dishes.chana-bhatura.alt',
        },
      },
      {
        id: 'aloo-mattar',
        diet: 'veg',
        photo: {
          src: '/images/menu/vegetarian/aloo-mattar-960.webp',
          srcSet:
            '/images/menu/vegetarian/aloo-mattar-480.webp 480w, /images/menu/vegetarian/aloo-mattar-960.webp 960w, /images/menu/vegetarian/aloo-mattar-1440.webp 1440w',
          width: 1440,
          height: 1440,
          altKey: 'menu.dishes.aloo-mattar.alt',
        },
      },
    ],
  },
  {
    id: 'starters',
    dishes: [
      {
        id: 'masala-vada',
        diet: 'veg',
        photo: {
          src: '/images/menu/starters/masala-vada-960.webp',
          srcSet:
            '/images/menu/starters/masala-vada-480.webp 480w, /images/menu/starters/masala-vada-960.webp 960w, /images/menu/starters/masala-vada-1440.webp 1440w',
          width: 1440,
          height: 2157,
          altKey: 'menu.dishes.masala-vada.alt',
        },
      },
      {
        id: 'vegetable-samosa',
        diet: 'veg',
        photo: {
          src: '/images/menu/starters/vegetable-samosa-960.webp',
          srcSet:
            '/images/menu/starters/vegetable-samosa-480.webp 480w, /images/menu/starters/vegetable-samosa-960.webp 960w, /images/menu/starters/vegetable-samosa-1440.webp 1440w',
          width: 1440,
          height: 960,
          altKey: 'menu.dishes.vegetable-samosa.alt',
        },
      },
      {
        id: 'onion-pakoda',
        diet: 'veg',
        photo: {
          src: '/images/menu/starters/onion-pakoda-960.webp',
          srcSet:
            '/images/menu/starters/onion-pakoda-480.webp 480w, /images/menu/starters/onion-pakoda-960.webp 960w, /images/menu/starters/onion-pakoda-1440.webp 1440w',
          width: 1440,
          height: 1800,
          altKey: 'menu.dishes.onion-pakoda.alt',
        },
      },
      {
        id: 'chicken-pakoda',
        diet: 'non-veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/starters/chicken-pakoda-960.webp',
          srcSet:
            '/images/menu/starters/chicken-pakoda-480.webp 480w, /images/menu/starters/chicken-pakoda-960.webp 960w, /images/menu/starters/chicken-pakoda-1440.webp 1440w',
          width: 1440,
          height: 960,
          altKey: 'menu.dishes.chicken-pakoda.alt',
        },
      },
      {
        id: 'malabar-parotta',
        diet: 'veg',
        photo: {
          src: '/images/menu/starters/malabar-parotta-960.webp',
          srcSet:
            '/images/menu/starters/malabar-parotta-480.webp 480w, /images/menu/starters/malabar-parotta-960.webp 960w, /images/menu/starters/malabar-parotta-1440.webp 1440w',
          width: 1440,
          height: 2157,
          altKey: 'menu.dishes.malabar-parotta.alt',
        },
      },
      {
        id: 'butter-naan',
        diet: 'veg',
        photo: {
          src: '/images/menu/starters/butter-naan-960.webp',
          srcSet:
            '/images/menu/starters/butter-naan-480.webp 480w, /images/menu/starters/butter-naan-960.webp 960w, /images/menu/starters/butter-naan-1440.webp 1440w',
          width: 1440,
          height: 1920,
          altKey: 'menu.dishes.butter-naan.alt',
        },
      },
    ],
  },
  {
    id: 'beverages',
    dishes: [
      {
        id: 'filter-coffee',
        diet: 'veg',
        photo: {
          src: '/images/menu/beverages/filter-coffee-960.webp',
          srcSet:
            '/images/menu/beverages/filter-coffee-480.webp 480w, /images/menu/beverages/filter-coffee-960.webp 960w, /images/menu/beverages/filter-coffee-1440.webp 1440w',
          width: 1440,
          height: 2160,
          altKey: 'menu.dishes.filter-coffee.alt',
        },
      },
      {
        id: 'masala-chai',
        diet: 'veg',
        photo: {
          src: '/images/menu/beverages/masala-chai-960.webp',
          srcSet:
            '/images/menu/beverages/masala-chai-480.webp 480w, /images/menu/beverages/masala-chai-960.webp 960w, /images/menu/beverages/masala-chai-1440.webp 1440w',
          width: 1440,
          height: 961,
          altKey: 'menu.dishes.masala-chai.alt',
        },
      },
      {
        id: 'mango-lassi',
        diet: 'veg',
        photo: {
          src: '/images/menu/beverages/mango-lassi-960.webp',
          srcSet:
            '/images/menu/beverages/mango-lassi-480.webp 480w, /images/menu/beverages/mango-lassi-960.webp 960w, /images/menu/beverages/mango-lassi-1440.webp 1440w',
          width: 1440,
          height: 2160,
          altKey: 'menu.dishes.mango-lassi.alt',
        },
      },
      {
        id: 'rose-lassi',
        diet: 'veg',
        photo: {
          src: '/images/menu/beverages/rose-lassi-960.webp',
          srcSet:
            '/images/menu/beverages/rose-lassi-480.webp 480w, /images/menu/beverages/rose-lassi-960.webp 960w, /images/menu/beverages/rose-lassi-1440.webp 1440w',
          width: 1440,
          height: 2160,
          altKey: 'menu.dishes.rose-lassi.alt',
        },
      },
    ],
  },
]
