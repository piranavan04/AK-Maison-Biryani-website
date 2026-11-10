/**
 * AK Maison Biryani: the complete menu, transcribed from the restaurant's printed menu cards.
 *
 * Single source of truth for BOTH the Menu section and the Signature Flavours slider.
 * - Dish names, descriptions and prices live here, in English and French side by side, so a dish
 *   can be edited in one place. Prices are plain numbers-as-text exactly as printed ("12.99").
 * - Category titles and introductions live in the translation files under menu.categories.<id>.
 * - Photos: /public/images/menu/<folder>/ (stock, see CREDITS.md) and /public/images/menu/card/
 *   (cropped from the restaurant's own menu cards). A dish without a photo appears as a text row.
 * - A dish with no description on the printed card simply has none (nothing is invented).
 */
import type { Photo } from './images'

export type Diet = 'veg' | 'non-veg'
export type DishTag = 'signature' | 'spicy' | 'sharing'

/** Text in both site languages. */
export interface Localized {
  en: string
  fr: string
}

export interface MenuDish {
  id: string
  diet: Diet
  tags?: DishTag[]
  /** Price exactly as printed on the menu card, e.g. "12.99". */
  price: string
  /** Second price for the Thali (lunch = price, dinner = priceDinner). */
  priceDinner?: string
  name: Localized
  description?: Localized
  photo?: Photo
}

export interface MenuCategory {
  /** Also the translation key: menu.categories.<id>.name / .tab / .description */
  id: string
  dishes: MenuDish[]
}

// ---------- photo helpers ----------
const stock = (folder: string, slug: string, width: number, height: number, position?: string): Photo => ({
  src: `/images/menu/${folder}/${slug}-960.webp`,
  srcSet: [480, 960, 1440].map((w) => `/images/menu/${folder}/${slug}-${w}.webp ${w}w`).join(', '),
  width,
  height,
  altKey: 'menu.photoAlt',
  position,
})
const card = (slug: string, width: number, height: number, position?: string): Photo => ({
  src: `/images/menu/card/${slug}.webp`,
  width,
  height,
  altKey: 'menu.photoAlt',
  position,
})
/** Photos that live outside /menu (older folders). */
const other = (path: string, width: number, height: number, position?: string): Photo => ({
  src: `/images/${path}-960.webp`,
  srcSet: [480, 960, 1440].map((w) => `/images/${path}-${w}.webp ${w}w`).join(', '),
  width,
  height,
  altKey: 'menu.photoAlt',
  position,
})

export const PHOTOS = {
  samosa: stock('starters', 'vegetable-samosa', 1440, 960),
  pakora: card('pakora', 310, 230),
  chickenPakora: stock('starters', 'chicken-pakoda', 1440, 960),
  onionBhaji: stock('starters', 'onion-pakoda', 1440, 1800),
  chicken65: other('non-veg/chicken-65', 1440, 894),
  lentilSoup: card('lentil-soup', 285, 245),
  vegBiryani: stock('biryani', 'vegetable-biryani', 1440, 940),
  chickenBiryani: stock('biryani', 'chicken-dum-biryani', 1440, 1640, '50% 35%'),
  goatBiryani: stock('biryani', 'mutton-biryani', 1440, 960),
  biryaniCard: card('biryani-card', 444, 270),
  biryaniPlatter: stock('biryani', 'biryani-family-platter', 1440, 960),
  butterChicken: stock('chicken', 'butter-chicken', 1440, 960),
  tikkaMasala: stock('chicken', 'chicken-tikka-masala', 1440, 960),
  chickenKadai: stock('chicken', 'chicken-karahi', 1440, 1440),
  chickenCurry: stock('chicken', 'home-style-chicken-curry', 1440, 1152),
  lambCurry: card('lamb-curry', 400, 360),
  muttonCurry: stock('mutton', 'mutton-masala', 1440, 1920, '50% 45%'),
  beefDeviled: card('beef-deviled', 425, 340),
  dalTadka: stock('vegetarian', 'dal-tadka', 1440, 960),
  palakPaneer: card('palak-paneer', 343, 326),
  dalMakhani: card('dal-makhani', 308, 363),
  alooGobi: card('aloo-gobi', 343, 295),
  butterShrimp: card('butter-shrimp', 568, 452),
  halfTandoori: card('tandoori-chicken-card', 290, 215),
  chickenTikka: stock('chicken', 'chicken-tikka', 1440, 960),
  seekhKebab: card('seekh-kebab', 355, 230),
  tandooriShrimp: card('tandoori-shrimp', 345, 240),
  plainDosa: stock('south-indian', 'plain-dosa', 1440, 1794, '50% 40%'),
  gheeDosa: other('gallery/ghee-roast-dosa', 1440, 1080),
  masalaDosa: stock('south-indian', 'masala-dosa', 1440, 1068, '50% 60%'),
  masalaDosaCard: card('masala-dosa-card', 540, 445),
  coneDosa: other('gallery/cone-dosa', 1440, 960),
  ravaDosa: stock('south-indian', 'rava-dosa', 1440, 1101),
  idli: stock('south-indian', 'idli-sambar', 1440, 1494),
  kottu: card('kottu', 668, 355),
  naan: stock('starters', 'butter-naan', 1440, 1920),
  garlicNaan: card('garlic-naan', 480, 274),
  tikkaRoll: card('tikka-roll', 560, 304),
  mangoLassi: stock('beverages', 'mango-lassi', 1440, 2160, '50% 45%'),
  gulabJamun: card('gulab-jamun', 275, 302),
  thali: card('thali', 536, 410),
} as const

const L = (en: string, fr: string): Localized => ({ en, fr })
/** Same text in both languages (proper names such as "Gobi Manchurian"). */
const S = (text: string): Localized => ({ en: text, fr: text })

export const MENU: MenuCategory[] = [
  {
    id: 'appetizers',
    dishes: [
      { id: 'samosa', diet: 'veg', price: '4.49', name: S('Samosa (2)'), photo: PHOTOS.samosa,
        description: L('Indian patties stuffed with peas & potatoes', 'Galettes indiennes farcies aux petits pois et pommes de terre') },
      { id: 'chicken-samosa', diet: 'non-veg', price: '6.99', name: L('Chicken Samosa (2)', 'Samosa au poulet (2)'),
        description: L('Triangle shaped patties stuffed with unique mince of chicken', 'Galettes triangulaires farcies d’un hachis de poulet unique') },
      { id: 'chana-samosa-chaat', diet: 'veg', price: '6.99', name: S('Chana Samosa Chaat'),
        description: L('Indian patties served with chickpeas & homemade sauces', 'Galettes indiennes servies avec pois chiches et sauces maison') },
      { id: 'veg-pakora', diet: 'veg', price: '4.99', name: L('Mixed Vegetable Pakora', 'Pakora légumes'), photo: PHOTOS.pakora,
        description: L('Fresh mix vegetables mixed in gram flour & spices, then deep-fried', 'Mélange de légumes frais mélangés à de la farine de pois chiches et des épices, puis frits') },
      { id: 'chicken-pakora', diet: 'non-veg', price: '10.99', name: L('Chicken Pakora', 'Pakora au poulet'), photo: PHOTOS.chickenPakora,
        description: L('Boneless chicken marinated with gram flour & deep-fried tender', 'Poulet désossé mariné à la farine de pois chiches et tendre frit') },
      { id: 'onion-bhaji', diet: 'veg', price: '5.99', name: S('Onion Bhaji'), photo: PHOTOS.onionBhaji,
        description: L('Crispy onion fritters', 'Beignets d’oignons croustillants') },
      { id: 'gobi-manchurian', diet: 'veg', price: '7.99', name: S('Gobi Manchurian'),
        description: L('Crispy fried cauliflower coated with flour & homemade spice, sautéed with soya sauce', 'Chou-fleur frit croustillant enrobé de farine et d’épices maison, sauté à la sauce soja') },
      { id: 'lentil-soup', diet: 'veg', price: '3.99', name: L('Lentil Soup', 'Soupe aux lentilles'), photo: PHOTOS.lentilSoup },
      { id: 'chicken-lentil-soup', diet: 'non-veg', price: '5.99', name: L('Chicken Lentil Soup', 'Soupe poulet et lentilles'),
        description: L('Yellow lentil soup cooked with shredded chicken', 'Soupe de lentilles jaunes cuite avec du poulet effiloché') },
      { id: 'aloo-tikki-chaat', diet: 'veg', price: '6.99', name: S('Aloo Tikki Chaat'),
        description: L('Potato patties served with chickpeas & chutney', 'Galettes de pommes de terre servies avec pois chiches et chutney') },
      { id: 'paneer-pakora', diet: 'veg', price: '9.99', name: S('Paneer Pakora'),
        description: L('Crispy cottage cheese fritters with chutney', 'Beignets de fromage blanc croustillant au chutney') },
      { id: 'chicken-65', diet: 'non-veg', price: '13.99', name: L('Chicken 65', 'Poulet 65'), photo: PHOTOS.chicken65,
        description: L('Pieces of chicken marinated in a blend of spices and yogurt, then fried', 'Morceaux tendres de poulet marinés dans un mélange d’épices et de yaourt, puis frits à la perfection') },
      { id: 'chicken-lollipop', diet: 'non-veg', price: '11.99', name: L('Chicken Lollipop', 'Poulet lollipop'),
        description: L('Fried chicken drumettes, coated in a flavorful batter', 'Pilons de poulet marinés et frits, enrobés d’une pâte savoureuse') },
      { id: 'butter-chicken-poutine', diet: 'non-veg', price: '11.99', name: L('Butter Chicken Poutine', 'Poutine poulet au beurre') },
      { id: 'chilli-fries', diet: 'veg', price: '11.99', name: L('Chilli Fries', 'Frites au chilli') },
    ],
  },
  {
    id: 'biryani-rice',
    dishes: [
      { id: 'veg-biryani', diet: 'veg', tags: ['signature'], price: '12.99', name: L('Veg Biryani', 'Biryani légumes'), photo: PHOTOS.vegBiryani },
      { id: 'chicken-biryani', diet: 'non-veg', tags: ['signature'], price: '14.99', name: L('Chicken Biryani', 'Biryani poulet'), photo: PHOTOS.chickenBiryani },
      { id: 'lamb-biryani', diet: 'non-veg', tags: ['signature'], price: '16.99', name: L('Lamb Biryani', 'Biryani agneau') },
      { id: 'goat-biryani', diet: 'non-veg', tags: ['signature'], price: '17.99', name: L('Goat Biryani', 'Biryani chèvre'), photo: PHOTOS.goatBiryani },
      { id: 'shrimp-biryani', diet: 'non-veg', tags: ['signature'], price: '15.99', name: L('Shrimp Biryani', 'Biryani crevette') },
      { id: 'veg-fried-rice', diet: 'veg', price: '12.99', name: L('Veggie Fried Rice', 'Riz frit aux légumes') },
      { id: 'chicken-fried-rice', diet: 'non-veg', price: '14.99', name: L('Chicken Fried Rice', 'Riz frit au poulet') },
      { id: 'steam-rice', diet: 'veg', price: '4.99', name: L('Steamed Rice', 'Riz vapeur') },
      { id: 'jeera-rice', diet: 'veg', price: '4.99', name: L('Jeera Rice', 'Riz jeera') },
      { id: 'lemon-rice', diet: 'veg', price: '4.99', name: L('Lemon Rice', 'Riz citron') },
      { id: 'peas-onion-rice', diet: 'veg', price: '4.99', name: L('Peas & Onion Rice', 'Riz pois et oignon') },
    ],
  },
  {
    id: 'chicken',
    dishes: [
      { id: 'chicken-curry', diet: 'non-veg', price: '13.99', name: L('Chicken Curry', 'Cari au poulet'), photo: PHOTOS.chickenCurry,
        description: L('Boneless chicken cooked in almond & onion-based sauce', 'Poulet désossé cuit dans une sauce à base d’amandes et d’oignons') },
      { id: 'butter-chicken', diet: 'non-veg', price: '14.99', name: L('Butter Chicken', 'Poulet au beurre'), photo: PHOTOS.butterChicken,
        description: L('Tandoori chicken tikka cooked in cashew nut, tomato based creamy butter sauce', 'Poulet tikka tandoori cuit à la noix de cajou, sauce crémeuse au beurre à base de tomate') },
      { id: 'chicken-tikka-masala', diet: 'non-veg', price: '14.99', name: L('Chicken Tikka Masala', 'Poulet tikka masala'), photo: PHOTOS.tikkaMasala,
        description: L('Tandoori chicken tikka, bell pepper, onion, ginger cooked in Indian traditional spice', 'Poulet tikka tandoori, poivron, oignon, gingembre cuit dans une épice traditionnelle indienne') },
      { id: 'chicken-korma', diet: 'non-veg', price: '14.99', name: L('Chicken Korma', 'Poulet korma'),
        description: L('Boneless chicken cooked with fruit cocktail, cashew nut & onion based sauce', 'Poulet désossé cuit avec un cocktail de fruits, une sauce à base de noix de cajou et d’oignon') },
      { id: 'mughlai-chicken', diet: 'non-veg', price: '14.99', name: L('Mughlai Chicken', 'Poulet mughlai'),
        description: L('Marinated chicken cubes cooked in yogurt, cashew nut, milk & various spices', 'Cubes de poulet marinés cuits dans du yogourt, noix de cajou, lait et diverses épices') },
      { id: 'chicken-vindaloo', diet: 'non-veg', price: '14.99', name: L('Chicken Vindaloo', 'Poulet vindaloo'),
        description: L('Boneless chicken cooked in Goan special spicy sauce', 'Poulet désossé cuit dans une sauce épicée spéciale de Goa') },
      { id: 'chicken-madrasi', diet: 'non-veg', price: '14.99', name: L('Chicken Madrasi', 'Poulet madrasi'),
        description: L('Chicken cooked in onion & coconut powder', 'Poulet cuit dans l’oignon et la poudre de noix de coco') },
      { id: 'chicken-kadai', diet: 'non-veg', price: '14.99', name: L('Chicken Kadai', 'Poulet kadai'), photo: PHOTOS.chickenKadai,
        description: L('Boneless chicken sautéed in onion, bell pepper & home-made curry sauce', 'Poulet désossé sauté aux oignons, poivrons et sauce curry maison') },
      { id: 'chicken-jalfrezi', diet: 'non-veg', price: '14.99', name: L('Chicken Jalfrezi', 'Poulet jalfrezi'),
        description: L('Cube chicken sautéed in onion, bell pepper & tangy tomato sauce', 'Cube de poulet sauté aux oignons, poivrons et sauce tomate acidulée') },
      { id: 'chicken-saag', diet: 'non-veg', price: '14.99', name: L('Chicken Saag', 'Poulet saag'),
        description: L('Boneless chicken cooked with spinach & Indian spice', 'Poulet désossé cuit avec épinards et épices indiennes') },
      { id: 'chilli-chicken', diet: 'non-veg', price: '14.99', name: L('Chilli Chicken', 'Poulet chilli'),
        description: L('Fried chicken, onion, bell pepper, ginger sautéed in soya sauce', 'Poulet frit, oignon, poivron, gingembre sauté à la sauce soja') },
    ],
  },
  {
    id: 'lamb',
    dishes: [
      { id: 'lamb-curry', diet: 'non-veg', price: '15.99', name: L('Lamb Curry', 'Cari agneau'), photo: PHOTOS.lambCurry,
        description: L('Boneless lamb cooked in almond & onion-based sauce', 'Agneau désossé cuit dans une sauce à base d’amandes et d’oignons') },
      { id: 'lamb-korma', diet: 'non-veg', price: '15.99', name: L('Lamb Korma', 'Agneau korma'),
        description: L('Boneless lamb cooked with fruit cocktail, cashew nut & onion based sauce', 'Agneau désossé cuit avec cocktail de fruits, sauce à base de noix de cajou et d’oignon') },
      { id: 'lamb-kadai', diet: 'non-veg', price: '15.99', name: L('Lamb Kadai', 'Agneau kadai'),
        description: L('Boneless lamb sautéed in onion, bell pepper & home-made curry sauce', 'Agneau désossé sauté dans une sauce aux oignons, poivrons et curry') },
      { id: 'lamb-jalfrezi', diet: 'non-veg', price: '15.99', name: L('Lamb Jalfrezi', 'Agneau jalfrezi'),
        description: L('Cube lamb sautéed in onion, bell pepper & tangy tomato sauce', 'Cube d’agneau sauté aux oignons, poivrons et sauce tomate acidulée') },
      { id: 'lamb-vindaloo', diet: 'non-veg', price: '14.99', name: L('Lamb Vindaloo', 'Agneau vindaloo'),
        description: L('Boneless lamb cooked in Goan special spicy sauce', 'Agneau désossé cuit dans une sauce épicée spéciale de Goa') },
      { id: 'lamb-saag', diet: 'non-veg', price: '15.99', name: L('Lamb Saag', 'Agneau saag'),
        description: L('Boneless lamb cooked with spinach & Indian spice', 'Agneau désossé cuit avec épinards et épices indiennes') },
      { id: 'mutton-curry', diet: 'non-veg', price: '15.99', name: L('Mutton Curry', 'Cari mouton'), photo: PHOTOS.muttonCurry,
        description: L('Tender mutton cooked in a curry sauce with onions, tomatoes, ginger, garlic, and spices', 'Mouton tendre mijoté dans une sauce au curry avec oignons, tomates, gingembre, ail et épices') },
      { id: 'beef-deviled', diet: 'non-veg', price: '15.99', name: L('Beef Deviled', 'Bœuf deviled'), photo: PHOTOS.beefDeviled,
        description: L('Tender beef cooked with onions, garlic, chili peppers, and spicy sauce', 'Bœuf tendre sauté avec des oignons, de l’ail, des piments et une sauce épicée') },
    ],
  },
  {
    id: 'vegetables',
    dishes: [
      { id: 'mix-veg-curry', diet: 'veg', price: '11.99', name: L('Mix Vegetable Curry', 'Cari aux légumes'),
        description: L('Fresh mix vegetables cooked with onion, tomato, and Indian spice', 'Mélange de légumes frais cuits avec oignons, tomates et épices indiennes') },
      { id: 'veg-korma', diet: 'veg', price: '12.99', name: L('Vegetable Korma', 'Korma végétarien'),
        description: L('Fresh mixed vegetables cooked in fruit cocktail & creamy cashew sauce', 'Mélange de légumes frais cuits dans un cocktail de fruits et une sauce crémeuse aux noix de cajou') },
      { id: 'veg-vindaloo', diet: 'veg', price: '12.99', name: L('Vegetable Vindaloo', 'Vindaloo aux légumes'),
        description: L('Mixed vegetables cooked in Goan special spicy sauce', 'Légumes mélangés cuits dans une sauce épicée spéciale de Goa') },
      { id: 'veg-jalfrezi', diet: 'veg', price: '12.99', name: L('Vegetable Jalfrezi', 'Jalfrezi aux légumes'),
        description: L('Mixed vegetables, green peppers, onion cooked with tomato based tangy sauce', 'Légumes variés, poivrons verts, oignons cuits avec une sauce piquante à base de tomate') },
      { id: 'kadai-paneer', diet: 'veg', price: '14.99', name: S('Kadai Paneer'),
        description: L('Cottage cheese cooked with onion, green pepper & ginger sauce', 'Fromage cottage cuit avec sauce aux oignons, poivrons verts et gingembre') },
      { id: 'chilli-paneer', diet: 'veg', price: '14.99', name: S('Chilli Paneer'),
        description: L('Cottage cheese, green pepper, onion sautéed with soya sauce, ginger, garlic', 'Fromage cottage, poivron vert, oignon sauté à la sauce soja, gingembre, ail') },
      { id: 'palak-paneer', diet: 'veg', price: '13.99', name: S('Palak Paneer'), photo: PHOTOS.palakPaneer,
        description: L('Home made cottage cheese & fresh spinach cooked in Indian style', 'Fromage cottage fait maison et épinards frais cuits à l’indienne') },
      { id: 'saag-aloo', diet: 'veg', price: '12.99', name: S('Saag Aloo'),
        description: L('Fresh spinach & potato', 'Épinards et pommes de terre frais') },
      { id: 'chana-masala', diet: 'veg', price: '12.99', name: S('Chana Masala'),
        description: L('Chickpeas cooked in onion & tomato sauce', 'Pois chiches cuits dans une sauce à l’oignon et à la tomate') },
      { id: 'chana-saag', diet: 'veg', price: '11.99', name: S('Chana Saag'),
        description: L('Chickpeas with fresh spinach', 'Pois chiches aux épinards frais') },
      { id: 'dal-makhani', diet: 'veg', price: '11.99', name: S('Dal Makhani'), photo: PHOTOS.dalMakhani,
        description: L('Black lentil cooked authentic Indian style', 'Lentilles noires cuites à l’indienne authentique') },
      { id: 'dal-tadka', diet: 'veg', price: '11.99', name: S('Dal Tadka'), photo: PHOTOS.dalTadka,
        description: L('Yellow lentil cooked Indian style', 'Lentilles jaunes cuites à l’indienne') },
      { id: 'aloo-gobi', diet: 'veg', price: '12.99', name: S('Aloo Gobi'), photo: PHOTOS.alooGobi,
        description: L('Potato & cauliflower sautéed with onion, tomato, garlic sauce', 'Pommes de terre et chou-fleur sautés avec oignon, tomate, sauce à l’ail') },
      { id: 'okra-dopiaza', diet: 'veg', price: '12.99', name: S('Okra Dopiaza'),
        description: L('Fresh okra cooked in Indian spices', 'Gombos frais cuits dans des épices indiennes') },
    ],
  },
  {
    id: 'seafood',
    dishes: [
      { id: 'shrimp', diet: 'non-veg', price: '15.99', name: L('Shrimp', 'Crevette'),
        description: L('Shrimp/basa fillet cooked in almond & onion-based curry sauce', 'Filet de crevettes/basa cuit dans une sauce au curry à base d’amandes et d’oignons') },
      { id: 'butter-shrimp', diet: 'non-veg', price: '16.99', name: L('Butter Shrimp', 'Crevette au beurre'), photo: PHOTOS.butterShrimp,
        description: L('Tomato based cashew nut creamy sauce', 'Sauce crémeuse à la noix de cajou à base de tomate') },
      { id: 'shrimp-saag', diet: 'non-veg', price: '16.99', name: L('Shrimp Saag', 'Crevette saag'),
        description: L('Shrimp cooked with fresh spinach in Indian style', 'Crevettes cuites avec des épinards frais à l’indienne') },
      { id: 'shrimp-deviled', diet: 'non-veg', price: '16.99', name: L('Shrimp Deviled', 'Crevette deviled') },
    ],
  },
  {
    id: 'tandoori',
    dishes: [
      { id: 'half-tandoori-chicken', diet: 'non-veg', price: '15.99', name: L('½ Tandoori Chicken', '½ poulet tandoori'), photo: PHOTOS.halfTandoori,
        description: L('Marinated chicken roasted in clay oven', 'Poulet mariné rôti au four d’argile') },
      { id: 'chicken-tikka', diet: 'non-veg', price: '12.99', name: L('Chicken Tikka', 'Poulet tikka'), photo: PHOTOS.chickenTikka,
        description: L('Boneless chicken marinated with yogurt-based sauce & roasted in clay oven', 'Poulet désossé mariné avec une sauce à base de yogourt et rôti au four d’argile') },
      { id: 'malai-kebab', diet: 'non-veg', price: '13.99', name: S('Malai Kebab'),
        description: L('Boneless tender chicken cubes marinated with yogurt, cheese, and cream, cooked in clay oven', 'Cubes de poulet tendres désossés marinés avec du yogourt, du fromage et de la crème, cuits au four d’argile') },
      { id: 'lamb-seekh-kebab', diet: 'non-veg', price: '14.99', name: L('Lamb Seekh Kebab', 'Agneau seekh kebab'), photo: PHOTOS.seekhKebab,
        description: L('Minced lamb mixed with Indian spices & served with onion & bell pepper', 'Agneau haché mélangé avec des épices indiennes et servi avec oignon et poivron') },
      { id: 'tandoori-shrimp', diet: 'non-veg', price: '18.99', name: L('Tandoori Shrimp', 'Crevette tandoori'), photo: PHOTOS.tandooriShrimp,
        description: L('Clay oven roasted jumbo shrimp served with sautéed vegetables, rice, or naan', 'Crevettes géantes rôties au four d’argile servies avec légumes sautés, riz ou naan') },
      { id: 'tandoori-mixed-grill', diet: 'non-veg', tags: ['sharing'], price: '24.99', name: L('Tandoori Mixed Grill', 'Grillade mixte tandoori'),
        description: L('2 tikka, 2 malai kebab, 2 seekh kebab, 2 shrimp, 1 chicken leg served with sautéed vegetables, rice, or naan', '2 tikka, 2 malai kebab, 2 seekh kebab, 2 crevettes, 1 cuisse de poulet servis avec légumes sautés, riz ou naan') },
    ],
  },
  {
    id: 'dosa',
    dishes: [
      { id: 'plain-dosa', diet: 'veg', price: '9.99', name: L('Plain Dosa', 'Dosa nature'), photo: PHOTOS.plainDosa },
      { id: 'ghee-dosa', diet: 'veg', price: '9.99', name: S('Ghee Dosa'), photo: PHOTOS.gheeDosa },
      { id: 'masala-dosa', diet: 'veg', price: '12.99', name: S('Masala Dosa'), photo: PHOTOS.masalaDosaCard },
      { id: 'paneer-dosa', diet: 'veg', price: '12.99', name: S('Paneer Dosa') },
      { id: 'chicken-dosa', diet: 'non-veg', price: '14.99', name: L('Chicken Dosa', 'Dosa au poulet') },
      { id: 'egg-dosa', diet: 'non-veg', price: '13.99', name: L('Egg Dosa', 'Dosa à l’œuf') },
      { id: 'onion-uttahapam', diet: 'veg', price: '9.99', name: S('Onion Uttahapam'),
        description: L('Rice flour pancakes cooked with onions, coriander and spices', 'Galettes de farine de riz cuites avec oignons, coriandre et épices') },
      { id: 'idli-sambar', diet: 'veg', price: '7.99', name: S('Idli Sambar (2)'), photo: PHOTOS.idli },
    ],
  },
  {
    id: 'kottu-roti',
    dishes: [
      { id: 'chicken-kottu', diet: 'non-veg', price: '14.99', name: L('Chicken Kottu', 'Kottu poulet'), photo: PHOTOS.kottu },
      { id: 'shrimp-kottu', diet: 'non-veg', price: '15.99', name: L('Shrimp Kottu', 'Kottu crevette') },
      { id: 'mutton-kottu', diet: 'non-veg', price: '15.99', name: L('Mutton Kottu', 'Kottu mouton') },
      { id: 'beef-kottu', diet: 'non-veg', price: '15.99', name: L('Beef Kottu', 'Kottu bœuf') },
      { id: 'cuttlefish-kottu', diet: 'non-veg', price: '15.99', name: L('Cuttlefish Kottu', 'Kottu seiche') },
    ],
  },
  {
    id: 'breads',
    dishes: [
      { id: 'naan', diet: 'veg', price: '2.99', name: S('Naan'), photo: PHOTOS.naan },
      { id: 'garlic-naan', diet: 'veg', price: '3.99', name: L('Garlic Naan', 'Naan à l’ail'), photo: PHOTOS.garlicNaan },
      { id: 'paratha', diet: 'veg', price: '2.50', name: S('Paratha') },
    ],
  },
  {
    id: 'naan-roll',
    dishes: [
      { id: 'paneer-potato-roll', diet: 'veg', price: '6.99', name: L('Paneer Potato Roll', 'Roulé paneer et pommes de terre') },
      { id: 'chicken-tikka-roll', diet: 'non-veg', price: '6.99', name: L('Chicken Tikka Roll', 'Roulé au poulet tikka'), photo: PHOTOS.tikkaRoll },
      { id: 'lamb-kabab-roll', diet: 'non-veg', price: '7.99', name: L('Lamb Kabab Roll', 'Roulé agneau kabab') },
    ],
  },
  {
    id: 'sides',
    dishes: [
      { id: 'cucumber-raita', diet: 'veg', price: '3.99', name: L('Cucumber Raita', 'Raïta au concombre') },
      { id: 'green-salad', diet: 'veg', price: '5.99', name: L('Green Salad', 'Salade verte'),
        description: L('(onion, tomato, cucumber)', '(oignon, tomate, concombre)') },
      { id: 'pickle-sauces', diet: 'veg', price: '3.99', name: L('Pickle, green sauce, tamarind sauce', 'Pickle, sauce verte, sauce tamarin') },
      { id: 'mango-chutney', diet: 'veg', price: '3.99', name: L('Mango Chutney', 'Chutney à la mangue') },
    ],
  },
  {
    id: 'drinks',
    dishes: [
      { id: 'mango-lassi', diet: 'veg', price: '4.99', name: L('Mango Lassi', 'Lassi à la mangue'), photo: PHOTOS.mangoLassi },
      { id: 'salted-lassi', diet: 'veg', price: '4.99', name: L('Salted Lassi', 'Lassi salé') },
      { id: 'sweet-lassi', diet: 'veg', price: '4.99', name: L('Sweet Lassi', 'Lassi sucré') },
      { id: 'bottled-water', diet: 'veg', price: '2.99', name: L('Bottled Water', 'Eau') },
      { id: 'perrier', diet: 'veg', price: '4.99', name: L('Perrier Sparkling Water', 'Eau pétillante Perrier') },
      { id: 'soft-drink', diet: 'veg', price: '2.49', name: L('Soft Drink', 'Boisson gazeuse') },
    ],
  },
  {
    id: 'desserts',
    dishes: [
      { id: 'rasmalai', diet: 'veg', price: '4.99', name: S('Rasmalai (2)') },
      { id: 'gulab-jamun', diet: 'veg', price: '4.99', name: S('Gulab Jamun'), photo: PHOTOS.gulabJamun },
      { id: 'kulfi', diet: 'veg', price: '4.99', name: S('Kulfi') },
      { id: 'kerssari', diet: 'veg', price: '4.99', name: S('Kerssari') },
    ],
  },
  {
    id: 'thali',
    dishes: [
      { id: 'thali-chicken-curry', diet: 'non-veg', price: '12.99', priceDinner: '14.99', name: L('Chicken Curry', 'Cari au poulet') },
      { id: 'thali-butter-chicken', diet: 'non-veg', price: '12.99', priceDinner: '14.99', name: L('Butter Chicken', 'Poulet au beurre'), photo: PHOTOS.thali },
      { id: 'thali-lamb-curry', diet: 'non-veg', price: '14.99', priceDinner: '16.99', name: L('Lamb Curry', 'Cari agneau') },
      { id: 'thali-veggie', diet: 'veg', price: '11.99', priceDinner: '13.99', name: L('Veggie', 'Végé') },
    ],
  },
]

export const MENU_DISH_COUNT = MENU.reduce((n, c) => n + c.dishes.length, 0)

const BY_ID = new Map(MENU.flatMap((c) => c.dishes.map((d) => [d.id, d] as const)))
export function findDish(id: string): MenuDish {
  const dish = BY_ID.get(id)
  if (!dish) throw new Error(`Unknown menu dish: ${id}`)
  return dish
}
