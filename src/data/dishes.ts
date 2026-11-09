import { IMAGES, type Photo } from './images'

export type DishCategory = 'Biryani' | 'South Indian' | 'Non-Veg Specials'

export interface Dish {
  /** Also the translation key: signature.dishes.<id>.name / .description */
  id: string
  /** Translated via signature.categories.<category> */
  category: DishCategory
  photo: Photo
  /** Optional. Leave undefined until prices are confirmed; the card hides it. */
  price?: string
}

// Every dish has its own photograph; none of these are reused in the hero, story or gallery.
export const DISHES: Dish[] = [
  {
    id: 'chicken-dum-biryani',
    category: 'Biryani',
    photo: IMAGES.chickenDum,
  },
  {
    id: 'mutton-biryani',
    category: 'Biryani',
    photo: IMAGES.muttonBiryani,
  },
  {
    id: 'masala-dosa',
    category: 'South Indian',
    photo: IMAGES.masalaDosa,
  },
  {
    id: 'idli-sambar',
    category: 'South Indian',
    photo: IMAGES.idli,
  },
  {
    id: 'tandoori-chicken',
    category: 'Non-Veg Specials',
    photo: IMAGES.tandoori,
  },
  {
    id: 'chicken-65',
    category: 'Non-Veg Specials',
    photo: IMAGES.chicken65,
  },
  {
    id: 'chicken-curry',
    category: 'Non-Veg Specials',
    photo: IMAGES.chickenCurry,
  },
  {
    id: 'mutton-curry',
    category: 'Non-Veg Specials',
    photo: IMAGES.muttonCurry,
  },
  {
    id: 'south-indian-thali',
    category: 'South Indian',
    photo: IMAGES.thali,
  },
]
