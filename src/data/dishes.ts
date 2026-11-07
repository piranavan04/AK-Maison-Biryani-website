import { IMAGES, type Photo } from './images'

export type DishCategory = 'Biryani' | 'South Indian' | 'Non-Veg Specials'

export interface Dish {
  id: string
  name: string
  category: DishCategory
  description: string
  photo: Photo
  /** Optional. Leave undefined until prices are confirmed; the card hides it. */
  price?: string
}

// Every dish has its own photograph; none of these are reused in the hero, story or gallery.
export const DISHES: Dish[] = [
  {
    id: 'chicken-dum-biryani',
    name: 'Chicken Dum Biryani',
    category: 'Biryani',
    description:
      'Long-grain basmati and spiced chicken sealed in the pot and slow-cooked on dum, so every grain carries the aroma.',
    photo: IMAGES.chickenDum,
  },
  {
    id: 'mutton-biryani',
    name: 'Mutton Biryani',
    category: 'Biryani',
    description:
      'Tender bone-in mutton folded through saffron rice, mint and crisp onions. A dish made for sharing and savouring.',
    photo: IMAGES.muttonBiryani,
  },
  {
    id: 'masala-dosa',
    name: 'Crispy Masala Dosa',
    category: 'South Indian',
    description:
      'A golden, paper-crisp dosa wrapped around spiced potato masala, served with sambar and fresh chutneys.',
    photo: IMAGES.masalaDosa,
  },
  {
    id: 'idli-sambar',
    name: 'Idli and Sambar',
    category: 'South Indian',
    description:
      'Soft, steamed rice cakes with coconut chutney and a warm, tangy lentil sambar. A South Indian morning classic.',
    photo: IMAGES.idli,
  },
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken',
    category: 'Non-Veg Specials',
    description:
      'Marinated in yoghurt and bold spices, then fired until smoky, charred at the edges and juicy within.',
    photo: IMAGES.tandoori,
  },
  {
    id: 'chicken-65',
    name: 'Chicken 65',
    category: 'Non-Veg Specials',
    description:
      'Fiery, crisp-fried chicken tossed with curry leaves, green chilli and garlic. The perfect starter.',
    photo: IMAGES.chicken65,
  },
  {
    id: 'chicken-curry',
    name: 'Traditional Chicken Curry',
    category: 'Non-Veg Specials',
    description:
      'A home-style gravy of roasted spices and onions, simmered slowly and made to be mopped up to the last drop.',
    photo: IMAGES.chickenCurry,
  },
  {
    id: 'mutton-curry',
    name: 'Mutton Curry',
    category: 'Non-Veg Specials',
    description:
      'Slow-cooked mutton in a deep, peppery masala, rich with whole spices and finished with fresh coriander.',
    photo: IMAGES.muttonCurry,
  },
  {
    id: 'south-indian-thali',
    name: 'South Indian Thali',
    category: 'South Indian',
    description:
      'A generous spread of rice, curries, poriyal and accompaniments, the way a South Indian table is meant to be enjoyed.',
    photo: IMAGES.thali,
  },
]
