import { findDish, PHOTOS, type MenuDish } from './menu'
import type { Photo } from './images'

/** Signature Flavours groups: translated via signature.categories.<category>. */
export type DishCategory = 'biryani' | 'dosa' | 'kottu'

export interface SignatureDish {
  id: string
  category: DishCategory
  /** The real dish from the menu: name, price and description always match the Menu section. */
  dish: MenuDish
  photo: Photo
}

const pick = (id: string, category: DishCategory, photo: Photo): SignatureDish => ({
  id,
  category,
  dish: findDish(id),
  photo,
})

// Every biryani, dosa and kottu roti on the menu, with its menu price.
// Where the kitchen has no photograph of a specific variety yet, a photograph of the same
// family of dish is used (and several Kottu cards show different framings of the same plate).
export const DISHES: SignatureDish[] = [
  pick('veg-biryani', 'biryani', PHOTOS.vegBiryani),
  pick('chicken-biryani', 'biryani', PHOTOS.chickenBiryani),
  pick('lamb-biryani', 'biryani', PHOTOS.biryaniCard),
  pick('goat-biryani', 'biryani', PHOTOS.goatBiryani),
  pick('shrimp-biryani', 'biryani', PHOTOS.biryaniPlatter),
  pick('plain-dosa', 'dosa', PHOTOS.plainDosa),
  pick('ghee-dosa', 'dosa', PHOTOS.gheeDosa),
  pick('masala-dosa', 'dosa', PHOTOS.masalaDosa),
  pick('paneer-dosa', 'dosa', PHOTOS.masalaDosaCard),
  pick('chicken-dosa', 'dosa', PHOTOS.coneDosa),
  pick('egg-dosa', 'dosa', PHOTOS.ravaDosa),
  pick('chicken-kottu', 'kottu', { ...PHOTOS.kottu, position: '50% 50%' }),
  pick('shrimp-kottu', 'kottu', { ...PHOTOS.kottu, position: '85% 50%' }),
  pick('mutton-kottu', 'kottu', { ...PHOTOS.kottu, position: '15% 50%' }),
  pick('beef-kottu', 'kottu', { ...PHOTOS.kottu, position: '68% 50%' }),
  pick('cuttlefish-kottu', 'kottu', { ...PHOTOS.kottu, position: '32% 50%' }),
]
