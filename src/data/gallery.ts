import { IMAGES } from './images'

export interface GalleryItem {
  id: string
  src: string
  alt: string
  caption: string
  /** Tailwind grid placement for the editorial layout (md and up). */
  span: string
}

// Layout is a 4-column asymmetric grid on desktop; items stack in two columns on mobile.
export const GALLERY: GalleryItem[] = [
  {
    id: 'g-chicken-biryani',
    src: IMAGES.chickenBiryani,
    alt: 'Chicken biryani served in a copper vessel',
    caption: 'Chicken Biryani',
    span: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2',
  },
  {
    id: 'g-dosa',
    src: IMAGES.dosa,
    alt: 'Golden South Indian dosa with chutneys',
    caption: 'Dosa',
    span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
  },
  {
    id: 'g-spices',
    src: IMAGES.spices,
    alt: 'Fresh herbs and whole spices',
    caption: 'Herbs and Spices',
    span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-2',
  },
  {
    id: 'g-curries',
    src: IMAGES.curries,
    alt: 'Rich Indian curries in serving bowls',
    caption: 'Indian Curries',
    span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
  },
  {
    id: 'g-mutton-biryani',
    src: IMAGES.muttonBiryani,
    alt: 'Mutton biryani with aromatic rice',
    caption: 'Mutton Biryani',
    span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
  },
  {
    id: 'g-meal',
    src: IMAGES.meal,
    alt: 'Traditional South Indian meal on a banana leaf',
    caption: 'South Indian Meals',
    span: 'col-span-2 row-span-1 md:col-span-2 md:row-span-1',
  },
  {
    id: 'g-kitchen',
    src: IMAGES.kitchen,
    alt: 'Traditional Indian food preparation',
    caption: 'From Our Kitchen',
    span: 'col-span-2 row-span-1 md:col-span-1 md:row-span-1',
  },
]
