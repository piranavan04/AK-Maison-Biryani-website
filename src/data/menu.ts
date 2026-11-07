/**
 * AK Maison Biryani — full menu.
 *
 * SAMPLE CONTENT: these dishes and descriptions illustrate the design and are meant to be
 * replaced with the restaurant's confirmed menu. Prices are left blank on purpose: add a
 * `price` (e.g. '$16.95') to any dish and it appears automatically. Photos live in
 * /public/images/menu/<category>/ (sources and licences in /public/images/CREDITS.md).
 */
import type { Photo } from './images'

export type Diet = 'veg' | 'non-veg'
export type DishTag = 'signature' | 'spicy' | 'sharing'

export interface MenuDish {
  id: string
  name: string
  description: string
  diet: Diet
  tags?: DishTag[]
  price?: string
  photo: Photo
}

export interface MenuCategory {
  id: string
  /** Full heading shown above the category. */
  name: string
  /** Short label used in the category tabs. */
  tab: string
  description: string
  dishes: MenuDish[]
}

export const MENU: MenuCategory[] = [
  {
    id: 'biryani',
    name: 'Signature Biryani',
    tab: 'Biryani',
    description:
      'Discover the irresistible aroma of traditional biryani, layered with fragrant rice, authentic spices and rich flavours.',
    dishes: [
      {
        id: 'chicken-dum-biryani',
        name: 'Chicken Dum Biryani',
        description: 'Spiced chicken and long-grain basmati sealed in the pot and slow-cooked on dum.',
        diet: 'non-veg',
        tags: ['signature'],
        photo: {
          src: '/images/menu/biryani/chicken-dum-biryani-960.webp',
          srcSet:
            '/images/menu/biryani/chicken-dum-biryani-480.webp 480w, /images/menu/biryani/chicken-dum-biryani-960.webp 960w, /images/menu/biryani/chicken-dum-biryani-1440.webp 1440w',
          width: 1440,
          height: 1640,
          alt: 'Chicken dum biryani in a brass handi with a golden spoon',
        },
      },
      {
        id: 'mutton-biryani',
        name: 'Mutton Biryani',
        description: 'Tender mutton folded through fragrant rice with fried onions, mint and whole spices.',
        diet: 'non-veg',
        tags: ['signature'],
        photo: {
          src: '/images/menu/biryani/mutton-biryani-960.webp',
          srcSet:
            '/images/menu/biryani/mutton-biryani-480.webp 480w, /images/menu/biryani/mutton-biryani-960.webp 960w, /images/menu/biryani/mutton-biryani-1440.webp 1440w',
          width: 1440,
          height: 960,
          alt: 'Mutton biryani on a white plate with a wedge of lime',
        },
      },
      {
        id: 'egg-biryani',
        name: 'Egg Biryani',
        description: 'Saffron-streaked rice layered with masala-coated boiled eggs, served with raita.',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/biryani/egg-biryani-960.webp',
          srcSet:
            '/images/menu/biryani/egg-biryani-480.webp 480w, /images/menu/biryani/egg-biryani-960.webp 960w, /images/menu/biryani/egg-biryani-1440.webp 1440w',
          width: 1440,
          height: 1383,
          alt: 'Egg biryani with onion rings and mint, served with raita',
        },
      },
      {
        id: 'vegetable-biryani',
        name: 'Vegetable Biryani',
        description: 'Seasonal vegetables and basmati cooked together with mint, coriander and crisp onions.',
        diet: 'veg',
        photo: {
          src: '/images/menu/biryani/vegetable-biryani-960.webp',
          srcSet:
            '/images/menu/biryani/vegetable-biryani-480.webp 480w, /images/menu/biryani/vegetable-biryani-960.webp 960w, /images/menu/biryani/vegetable-biryani-1440.webp 1440w',
          width: 1440,
          height: 940,
          alt: 'Vegetable biryani with fried onions and fresh herbs',
        },
      },
      {
        id: 'chicken-leg-biryani',
        name: 'Chicken Leg Piece Biryani',
        description: 'A whole masala-marinated chicken leg buried in spiced biryani rice.',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/biryani/chicken-leg-biryani-960.webp',
          srcSet:
            '/images/menu/biryani/chicken-leg-biryani-480.webp 480w, /images/menu/biryani/chicken-leg-biryani-960.webp 960w, /images/menu/biryani/chicken-leg-biryani-1440.webp 1440w',
          width: 1440,
          height: 940,
          alt: 'Biryani topped with a chicken leg piece, with salan and raita',
        },
      },
      {
        id: 'biryani-family-platter',
        name: 'Biryani Family Platter',
        description: 'A generous sharing platter of biryani with eggs and fresh accompaniments for the whole table.',
        diet: 'non-veg',
        tags: ['sharing'],
        photo: {
          src: '/images/menu/biryani/biryani-family-platter-960.webp',
          srcSet:
            '/images/menu/biryani/biryani-family-platter-480.webp 480w, /images/menu/biryani/biryani-family-platter-960.webp 960w, /images/menu/biryani/biryani-family-platter-1440.webp 1440w',
          width: 1440,
          height: 960,
          alt: 'A large biryani platter with eggs and cucumber on a red cloth',
        },
      },
    ],
  },
  {
    id: 'chicken',
    name: 'Chicken Specials',
    tab: 'Chicken',
    description:
      'A delicious collection of chicken specialities prepared with traditional Indian spices and bold flavours.',
    dishes: [
      {
        id: 'butter-chicken',
        name: 'Butter Chicken',
        description: 'Tandoor-charred chicken in a smooth tomato, butter and cream gravy.',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/chicken/butter-chicken-960.webp',
          srcSet:
            '/images/menu/chicken/butter-chicken-480.webp 480w, /images/menu/chicken/butter-chicken-960.webp 960w, /images/menu/chicken/butter-chicken-1440.webp 1440w',
          width: 1440,
          height: 960,
          alt: 'Butter chicken finished with a swirl of cream',
        },
      },
      {
        id: 'chicken-tikka-masala',
        name: 'Chicken Tikka Masala',
        description: 'Grilled chicken tikka simmered in a rich, gently spiced masala, best with naan.',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/chicken/chicken-tikka-masala-960.webp',
          srcSet:
            '/images/menu/chicken/chicken-tikka-masala-480.webp 480w, /images/menu/chicken/chicken-tikka-masala-960.webp 960w, /images/menu/chicken/chicken-tikka-masala-1440.webp 1440w',
          width: 1440,
          height: 960,
          alt: 'Chicken tikka masala with mint and fresh naan',
        },
      },
      {
        id: 'home-style-chicken-curry',
        name: 'Home-Style Chicken Curry',
        description: 'Bone-in chicken slow-cooked in an onion, tomato and roasted-spice gravy.',
        diet: 'non-veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/chicken/home-style-chicken-curry-960.webp',
          srcSet:
            '/images/menu/chicken/home-style-chicken-curry-480.webp 480w, /images/menu/chicken/home-style-chicken-curry-960.webp 960w, /images/menu/chicken/home-style-chicken-curry-1440.webp 1440w',
          width: 1440,
          height: 1152,
          alt: 'Home-style chicken curry with bone-in pieces',
        },
      },
      {
        id: 'chicken-karahi',
        name: 'Chicken Karahi',
        description: 'Chicken tossed in a hot karahi with tomatoes, ginger, green chilli and coriander.',
        diet: 'non-veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/chicken/chicken-karahi-960.webp',
          srcSet:
            '/images/menu/chicken/chicken-karahi-480.webp 480w, /images/menu/chicken/chicken-karahi-960.webp 960w, /images/menu/chicken/chicken-karahi-1440.webp 1440w',
          width: 1440,
          height: 1440,
          alt: 'Chicken karahi in a black wok with ginger and lime',
        },
      },
      {
        id: 'tandoori-chicken',
        name: 'Tandoori Chicken',
        description: 'Yoghurt-and-spice marinated chicken, roasted until smoky and charred.',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/chicken/tandoori-chicken-960.webp',
          srcSet:
            '/images/menu/chicken/tandoori-chicken-480.webp 480w, /images/menu/chicken/tandoori-chicken-960.webp 960w, /images/menu/chicken/tandoori-chicken-1440.webp 1440w',
          width: 1440,
          height: 960,
          alt: 'Tandoori chicken with lemon slices and red onion',
        },
      },
      {
        id: 'chicken-tikka',
        name: 'Chicken Tikka',
        description: 'Boneless chicken grilled on skewers with peppers and onions.',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/chicken/chicken-tikka-960.webp',
          srcSet:
            '/images/menu/chicken/chicken-tikka-480.webp 480w, /images/menu/chicken/chicken-tikka-960.webp 960w, /images/menu/chicken/chicken-tikka-1440.webp 1440w',
          width: 1440,
          height: 960,
          alt: 'Chicken tikka pieces grilled with peppers and onions',
        },
      },
    ],
  },
  {
    id: 'mutton',
    name: 'Mutton Specials',
    tab: 'Mutton',
    description:
      'Experience rich, slow-cooked mutton delicacies filled with authentic South Indian flavours.',
    dishes: [
      {
        id: 'mutton-masala',
        name: 'Mutton Masala',
        description: 'Mutton cooked low and slow in a thick masala and finished with fresh coriander.',
        diet: 'non-veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/mutton/mutton-masala-960.webp',
          srcSet:
            '/images/menu/mutton/mutton-masala-480.webp 480w, /images/menu/mutton/mutton-masala-960.webp 960w, /images/menu/mutton/mutton-masala-1440.webp 1440w',
          width: 1440,
          height: 1920,
          alt: 'Mutton masala in a pan, topped with coriander',
        },
      },
      {
        id: 'mutton-kuzhambu',
        name: 'Mutton Kuzhambu',
        description: 'A South Indian mutton gravy with curry leaves, black pepper and whole spices.',
        diet: 'non-veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/mutton/mutton-kuzhambu-960.webp',
          srcSet:
            '/images/menu/mutton/mutton-kuzhambu-480.webp 480w, /images/menu/mutton/mutton-kuzhambu-960.webp 960w, /images/menu/mutton/mutton-kuzhambu-1440.webp 1440w',
          width: 1440,
          height: 960,
          alt: 'Mutton kuzhambu with curry leaves, cinnamon and cardamom',
        },
      },
      {
        id: 'mutton-nalli-nihari',
        name: 'Mutton Nalli Nihari',
        description: 'Bone-marrow mutton shanks braised overnight into a silky, spiced stew.',
        diet: 'non-veg',
        photo: {
          src: '/images/menu/mutton/mutton-nalli-nihari-960.webp',
          srcSet:
            '/images/menu/mutton/mutton-nalli-nihari-480.webp 480w, /images/menu/mutton/mutton-nalli-nihari-960.webp 960w, /images/menu/mutton/mutton-nalli-nihari-1440.webp 1440w',
          width: 1440,
          height: 1440,
          alt: 'Mutton nalli nihari with a marrow bone in a copper pot',
        },
      },
      {
        id: 'mutton-sukka',
        name: 'Mutton Sukka',
        description: 'Dry-roasted mutton with pepper, coconut and curry leaves.',
        diet: 'non-veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/mutton/mutton-sukka-960.webp',
          srcSet:
            '/images/menu/mutton/mutton-sukka-480.webp 480w, /images/menu/mutton/mutton-sukka-960.webp 960w, /images/menu/mutton/mutton-sukka-1440.webp 1440w',
          width: 1440,
          height: 1440,
          alt: 'Dry mutton sukka in a small karahi with lemon',
        },
      },
    ],
  },
  {
    id: 'south-indian',
    name: 'South Indian Favourites',
    tab: 'South Indian',
    description:
      'Celebrate the timeless taste of South India with our traditional favourites.',
    dishes: [
      {
        id: 'masala-dosa',
        name: 'Masala Dosa',
        description: 'A crisp golden dosa filled with spiced potato masala, with sambar and chutneys.',
        diet: 'veg',
        tags: ['signature'],
        photo: {
          src: '/images/menu/south-indian/masala-dosa-960.webp',
          srcSet:
            '/images/menu/south-indian/masala-dosa-480.webp 480w, /images/menu/south-indian/masala-dosa-960.webp 960w, /images/menu/south-indian/masala-dosa-1440.webp 1440w',
          width: 1440,
          height: 1068,
          alt: 'Masala dosa on a banana leaf with sambar and chutneys',
        },
      },
      {
        id: 'plain-dosa',
        name: 'Plain Dosa',
        description: 'A thin, paper-crisp rice and lentil cr\u00eape served with sambar and chutney.',
        diet: 'veg',
        photo: {
          src: '/images/menu/south-indian/plain-dosa-960.webp',
          srcSet:
            '/images/menu/south-indian/plain-dosa-480.webp 480w, /images/menu/south-indian/plain-dosa-960.webp 960w, /images/menu/south-indian/plain-dosa-1440.webp 1440w',
          width: 1440,
          height: 1794,
          alt: 'Rolled plain dosa with sambar and coconut chutney',
        },
      },
      {
        id: 'rava-dosa',
        name: 'Rava Dosa',
        description: 'A lacy semolina dosa with cumin and pepper, crisp at the edges.',
        diet: 'veg',
        photo: {
          src: '/images/menu/south-indian/rava-dosa-960.webp',
          srcSet:
            '/images/menu/south-indian/rava-dosa-480.webp 480w, /images/menu/south-indian/rava-dosa-960.webp 960w, /images/menu/south-indian/rava-dosa-1440.webp 1440w',
          width: 1440,
          height: 1101,
          alt: 'Lacy rava dosa on a steel tray with three accompaniments',
        },
      },
      {
        id: 'idli-sambar',
        name: 'Idli and Sambar',
        description: 'Soft steamed rice cakes with a warm lentil sambar.',
        diet: 'veg',
        tags: ['signature'],
        photo: {
          src: '/images/menu/south-indian/idli-sambar-960.webp',
          srcSet:
            '/images/menu/south-indian/idli-sambar-480.webp 480w, /images/menu/south-indian/idli-sambar-960.webp 960w, /images/menu/south-indian/idli-sambar-1440.webp 1440w',
          width: 1440,
          height: 1494,
          alt: 'Idli with a bowl of sambar on a floral plate',
        },
      },
      {
        id: 'medu-vada',
        name: 'Medu Vada',
        description: 'Crisp lentil doughnuts, fluffy inside, with sambar and coconut chutney.',
        diet: 'veg',
        photo: {
          src: '/images/menu/south-indian/medu-vada-960.webp',
          srcSet:
            '/images/menu/south-indian/medu-vada-480.webp 480w, /images/menu/south-indian/medu-vada-960.webp 960w, /images/menu/south-indian/medu-vada-1440.webp 1440w',
          width: 1440,
          height: 960,
          alt: 'Medu vada with sambar, chutney and coffee',
        },
      },
      {
        id: 'podi-idli',
        name: 'Podi Idli',
        description: 'Idli dusted with spiced gunpowder podi and a drizzle of ghee.',
        diet: 'veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/south-indian/podi-idli-960.webp',
          srcSet:
            '/images/menu/south-indian/podi-idli-480.webp 480w, /images/menu/south-indian/podi-idli-960.webp 960w, /images/menu/south-indian/podi-idli-1440.webp 1440w',
          width: 1440,
          height: 960,
          alt: 'Idli topped with podi on a banana leaf',
        },
      },
    ],
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian Delights',
    tab: 'Vegetarian',
    description:
      'Comforting vegetarian curries and dals, slow-cooked with whole spices and fresh herbs.',
    dishes: [
      {
        id: 'paneer-butter-masala',
        name: 'Paneer Butter Masala',
        description: 'Soft paneer in a velvety tomato and butter gravy finished with cream.',
        diet: 'veg',
        photo: {
          src: '/images/menu/vegetarian/paneer-butter-masala-960.webp',
          srcSet:
            '/images/menu/vegetarian/paneer-butter-masala-480.webp 480w, /images/menu/vegetarian/paneer-butter-masala-960.webp 960w, /images/menu/vegetarian/paneer-butter-masala-1440.webp 1440w',
          width: 1440,
          height: 2559,
          alt: 'Paneer butter masala in a brass bowl',
        },
      },
      {
        id: 'dal-tadka',
        name: 'Dal Tadka',
        description: 'Yellow lentils tempered with ghee, cumin, garlic and green chilli.',
        diet: 'veg',
        photo: {
          src: '/images/menu/vegetarian/dal-tadka-960.webp',
          srcSet:
            '/images/menu/vegetarian/dal-tadka-480.webp 480w, /images/menu/vegetarian/dal-tadka-960.webp 960w, /images/menu/vegetarian/dal-tadka-1440.webp 1440w',
          width: 1440,
          height: 960,
          alt: 'Dal tadka with green chilli, onion rings and lemon',
        },
      },
      {
        id: 'chana-bhatura',
        name: 'Chana Masala with Bhatura',
        description: 'Spiced chickpea curry served with puffed, golden bhatura.',
        diet: 'veg',
        photo: {
          src: '/images/menu/vegetarian/chana-bhatura-960.webp',
          srcSet:
            '/images/menu/vegetarian/chana-bhatura-480.webp 480w, /images/menu/vegetarian/chana-bhatura-960.webp 960w, /images/menu/vegetarian/chana-bhatura-1440.webp 1440w',
          width: 1440,
          height: 1920,
          alt: 'Chana masala with golden bhatura',
        },
      },
      {
        id: 'aloo-mattar',
        name: 'Aloo Mattar',
        description: 'Potatoes and green peas in a home-style tomato and onion gravy.',
        diet: 'veg',
        photo: {
          src: '/images/menu/vegetarian/aloo-mattar-960.webp',
          srcSet:
            '/images/menu/vegetarian/aloo-mattar-480.webp 480w, /images/menu/vegetarian/aloo-mattar-960.webp 960w, /images/menu/vegetarian/aloo-mattar-1440.webp 1440w',
          width: 1440,
          height: 1440,
          alt: 'Aloo mattar curry with potatoes and peas',
        },
      },
    ],
  },
  {
    id: 'starters',
    name: 'Starters and Sides',
    tab: 'Starters',
    description:
      'Crisp, spiced bites to begin the meal, and breads to share alongside every curry.',
    dishes: [
      {
        id: 'masala-vada',
        name: 'Masala Vada',
        description: 'Crunchy chana-dal fritters with onion, curry leaves and green chilli.',
        diet: 'veg',
        photo: {
          src: '/images/menu/starters/masala-vada-960.webp',
          srcSet:
            '/images/menu/starters/masala-vada-480.webp 480w, /images/menu/starters/masala-vada-960.webp 960w, /images/menu/starters/masala-vada-1440.webp 1440w',
          width: 1440,
          height: 2157,
          alt: 'A stack of masala vada on a banana leaf',
        },
      },
      {
        id: 'vegetable-samosa',
        name: 'Vegetable Samosa',
        description: 'Flaky pastry filled with spiced potato and peas, with green chutney.',
        diet: 'veg',
        photo: {
          src: '/images/menu/starters/vegetable-samosa-960.webp',
          srcSet:
            '/images/menu/starters/vegetable-samosa-480.webp 480w, /images/menu/starters/vegetable-samosa-960.webp 960w, /images/menu/starters/vegetable-samosa-1440.webp 1440w',
          width: 1440,
          height: 960,
          alt: 'Vegetable samosas with green chilli and chutney',
        },
      },
      {
        id: 'onion-pakoda',
        name: 'Onion Pakoda',
        description: 'Gram-flour fritters with onion and coriander, fried until golden.',
        diet: 'veg',
        photo: {
          src: '/images/menu/starters/onion-pakoda-960.webp',
          srcSet:
            '/images/menu/starters/onion-pakoda-480.webp 480w, /images/menu/starters/onion-pakoda-960.webp 960w, /images/menu/starters/onion-pakoda-1440.webp 1440w',
          width: 1440,
          height: 1800,
          alt: 'Golden onion pakoda with a wedge of lime',
        },
      },
      {
        id: 'chicken-pakoda',
        name: 'Chicken Pakoda',
        description: 'Spiced chicken pieces coated in gram-flour batter and fried crisp.',
        diet: 'non-veg',
        tags: ['spicy'],
        photo: {
          src: '/images/menu/starters/chicken-pakoda-960.webp',
          srcSet:
            '/images/menu/starters/chicken-pakoda-480.webp 480w, /images/menu/starters/chicken-pakoda-960.webp 960w, /images/menu/starters/chicken-pakoda-1440.webp 1440w',
          width: 1440,
          height: 960,
          alt: 'Crisp fried chicken pakoda',
        },
      },
      {
        id: 'malabar-parotta',
        name: 'Malabar Parotta',
        description: 'Flaky, layered flatbread made to tear and dip into every curry.',
        diet: 'veg',
        photo: {
          src: '/images/menu/starters/malabar-parotta-960.webp',
          srcSet:
            '/images/menu/starters/malabar-parotta-480.webp 480w, /images/menu/starters/malabar-parotta-960.webp 960w, /images/menu/starters/malabar-parotta-1440.webp 1440w',
          width: 1440,
          height: 2157,
          alt: 'Layered Malabar parotta with curry leaves and chillies',
        },
      },
      {
        id: 'butter-naan',
        name: 'Butter Naan',
        description: 'Soft, leavened bread from the tandoor, brushed with butter.',
        diet: 'veg',
        photo: {
          src: '/images/menu/starters/butter-naan-960.webp',
          srcSet:
            '/images/menu/starters/butter-naan-480.webp 480w, /images/menu/starters/butter-naan-960.webp 960w, /images/menu/starters/butter-naan-1440.webp 1440w',
          width: 1440,
          height: 1920,
          alt: 'A stack of charred butter naan on a board',
        },
      },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    tab: 'Beverages',
    description:
      'Traditional brews and cooling drinks to round off your meal.',
    dishes: [
      {
        id: 'filter-coffee',
        name: 'Filter Coffee',
        description: 'Slow-dripped coffee decoction with hot frothed milk.',
        diet: 'veg',
        photo: {
          src: '/images/menu/beverages/filter-coffee-960.webp',
          srcSet:
            '/images/menu/beverages/filter-coffee-480.webp 480w, /images/menu/beverages/filter-coffee-960.webp 960w, /images/menu/beverages/filter-coffee-1440.webp 1440w',
          width: 1440,
          height: 2160,
          alt: 'Coffee decoction dripping through a filter',
        },
      },
      {
        id: 'masala-chai',
        name: 'Masala Chai',
        description: 'Black tea simmered with milk, ginger and cardamom, poured into clay cups.',
        diet: 'veg',
        photo: {
          src: '/images/menu/beverages/masala-chai-960.webp',
          srcSet:
            '/images/menu/beverages/masala-chai-480.webp 480w, /images/menu/beverages/masala-chai-960.webp 960w, /images/menu/beverages/masala-chai-1440.webp 1440w',
          width: 1440,
          height: 961,
          alt: 'Masala chai being poured into clay kulhad cups',
        },
      },
      {
        id: 'mango-lassi',
        name: 'Mango Lassi',
        description: 'Chilled yoghurt blended with ripe mango.',
        diet: 'veg',
        photo: {
          src: '/images/menu/beverages/mango-lassi-960.webp',
          srcSet:
            '/images/menu/beverages/mango-lassi-480.webp 480w, /images/menu/beverages/mango-lassi-960.webp 960w, /images/menu/beverages/mango-lassi-1440.webp 1440w',
          width: 1440,
          height: 2160,
          alt: 'Mango lassi in a tall glass with fresh mangoes',
        },
      },
      {
        id: 'rose-lassi',
        name: 'Rose Lassi',
        description: 'Creamy yoghurt with rose syrup, served cold in a clay cup.',
        diet: 'veg',
        photo: {
          src: '/images/menu/beverages/rose-lassi-960.webp',
          srcSet:
            '/images/menu/beverages/rose-lassi-480.webp 480w, /images/menu/beverages/rose-lassi-960.webp 960w, /images/menu/beverages/rose-lassi-1440.webp 1440w',
          width: 1440,
          height: 2160,
          alt: 'Rose lassi topped with rose petals in a clay cup',
        },
      },
    ],
  },
]
