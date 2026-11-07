import { IMAGES, type Photo } from './images'

export interface GalleryItem {
  id: string
  photo: Photo
  caption: string
  /** Grid placement. Mobile is a 2-column grid; md and up is a 4-column editorial grid. */
  span: string
}

// Twelve photographs, none repeated elsewhere on the page.
// Spans are balanced so both the 2-column (mobile) and 4-column (tablet/desktop) grids fill
// without gaps (grid-flow-dense handles any leftover cells).
export const GALLERY: GalleryItem[] = [
  { id: 'g-ghee-roast', photo: IMAGES.gGheeRoast, caption: 'Ghee Roast Dosa', span: 'col-span-2 row-span-2' },
  { id: 'g-spices', photo: IMAGES.gSpices, caption: 'Whole Spices', span: 'col-span-1 row-span-1' },
  { id: 'g-mutton-spread', photo: IMAGES.gMuttonSpread, caption: 'Mutton Curry Feast', span: 'col-span-1 row-span-2' },
  { id: 'g-cone-dosa', photo: IMAGES.gConeDosa, caption: 'Cone Dosa', span: 'col-span-1 row-span-1' },
  { id: 'g-grill', photo: IMAGES.gGrill, caption: 'From the Tandoor', span: 'col-span-2 row-span-1' },
  { id: 'g-pepper-fry', photo: IMAGES.gPepperFry, caption: 'Mutton Pepper Fry', span: 'col-span-1 row-span-1' },
  { id: 'g-banana-leaf', photo: IMAGES.gBananaLeaf, caption: 'Banana Leaf Meal', span: 'col-span-1 row-span-2' },
  { id: 'g-karahi', photo: IMAGES.gKarahi, caption: 'Brass Karahi Curry', span: 'col-span-1 row-span-1' },
  { id: 'g-idli-coffee', photo: IMAGES.gIdliCoffee, caption: 'Idli and Filter Coffee', span: 'col-span-2 row-span-1' },
  { id: 'g-tawa', photo: IMAGES.gTawa, caption: 'Fresh off the Tawa', span: 'col-span-1 row-span-1' },
  { id: 'g-chicken-fry', photo: IMAGES.gChickenFry, caption: 'Chicken Chilli Fry', span: 'col-span-1 row-span-1' },
  { id: 'g-skewers', photo: IMAGES.gSkewers, caption: 'Over the Coals', span: 'col-span-2 row-span-1' },
]
