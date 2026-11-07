import { IMAGES } from './images'

export interface Dish {
  id: string
  name: string
  description: string
  image: string
  /** Optional. Leave undefined until prices are confirmed; the card hides it. */
  price?: string
}

export const DISHES: Dish[] = [
  {
    id: 'chicken-biryani',
    name: 'Authentic Chicken Biryani',
    description:
      'Fragrant long-grain rice layered with tender chicken and slow-infused spices, served in the traditional way.',
    image: IMAGES.chickenBiryani,
  },
  {
    id: 'mutton-biryani',
    name: 'Mutton Biryani',
    description:
      'Rich, deeply spiced mutton folded through aromatic rice. A dish made for sharing and savouring.',
    image: IMAGES.muttonBiryani,
  },
  {
    id: 'dosa',
    name: 'South Indian Dosa',
    description:
      'Golden, crisp-edged dosa rolled around a warm filling, served with chutneys and sambar.',
    image: IMAGES.dosa,
  },
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken',
    description:
      'Marinated in bold spices and fired until smoky, charred at the edges and juicy within.',
    image: IMAGES.tandoori,
  },
  {
    id: 'south-indian-meals',
    name: 'Traditional South Indian Meals',
    description:
      'A generous banana-leaf spread of rice, curries and accompaniments, the way a South Indian table is meant to be enjoyed.',
    image: IMAGES.meal,
  },
  {
    id: 'indian-curries',
    name: 'Signature Indian Curries',
    description:
      'Slow-simmered gravies with layered spice and depth, made to be mopped up with every last bite.',
    image: IMAGES.curries,
  },
]
