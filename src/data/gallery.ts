import { IMAGES, type Photo } from './images'

export interface GalleryItem {
  /** Also the translation key for the caption: gallery.items.<id> */
  id: string
  photo: Photo
  /** Grid placement. Mobile is a 2-column grid; md and up is a 4-column editorial grid. */
  span: string
}

// Twelve photographs, none repeated elsewhere on the page.
// Spans are balanced so both the 2-column (mobile) and 4-column (tablet/desktop) grids fill
// without gaps (grid-flow-dense handles any leftover cells).
export const GALLERY: GalleryItem[] = [
  { id: 'g-ghee-roast', photo: IMAGES.gGheeRoast, span: 'col-span-2 row-span-2' },
  { id: 'g-spices', photo: IMAGES.gSpices, span: 'col-span-1 row-span-1' },
  { id: 'g-mutton-spread', photo: IMAGES.gMuttonSpread, span: 'col-span-1 row-span-2' },
  { id: 'g-cone-dosa', photo: IMAGES.gConeDosa, span: 'col-span-1 row-span-1' },
  { id: 'g-grill', photo: IMAGES.gGrill, span: 'col-span-2 row-span-1' },
  { id: 'g-pepper-fry', photo: IMAGES.gPepperFry, span: 'col-span-1 row-span-1' },
  { id: 'g-banana-leaf', photo: IMAGES.gBananaLeaf, span: 'col-span-1 row-span-2' },
  { id: 'g-karahi', photo: IMAGES.gKarahi, span: 'col-span-1 row-span-1' },
  { id: 'g-idli-coffee', photo: IMAGES.gIdliCoffee, span: 'col-span-2 row-span-1' },
  { id: 'g-tawa', photo: IMAGES.gTawa, span: 'col-span-1 row-span-1' },
  { id: 'g-chicken-fry', photo: IMAGES.gChickenFry, span: 'col-span-1 row-span-1' },
  { id: 'g-skewers', photo: IMAGES.gSkewers, span: 'col-span-2 row-span-1' },
]
