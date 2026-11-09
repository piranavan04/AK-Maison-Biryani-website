// Every photograph on the site, generated from /public/images (see CREDITS.md there).
// Each entry has responsive WebP sizes, intrinsic dimensions (prevents layout shift),
// translated alt text (key) and an optional focal point used for object-position cropping.

export interface Photo {
  src: string
  srcSet: string
  width: number
  height: number
  /** Translation key for the alt text (see src/i18n/locales). */
  altKey: string
  /** CSS object-position, keeps the food in frame when cropped. */
  position?: string
}

export const IMAGES = {
  story: {
    src: '/images/restaurant/story-copper-feast-960.webp',
    srcSet: '/images/restaurant/story-copper-feast-480.webp 480w, /images/restaurant/story-copper-feast-960.webp 960w, /images/restaurant/story-copper-feast-1440.webp 1440w',
    width: 1440,
    height: 1440,
    altKey: 'images.story',
    position: '40% 50%',
  },
  chickenDum: {
    src: '/images/biryani/chicken-dum-biryani-960.webp',
    srcSet: '/images/biryani/chicken-dum-biryani-480.webp 480w, /images/biryani/chicken-dum-biryani-960.webp 960w, /images/biryani/chicken-dum-biryani-1440.webp 1440w',
    width: 1440,
    height: 2160,
    altKey: 'images.chickenDum',
    position: '50% 35%',
  },
  masalaDosa: {
    src: '/images/south-indian/masala-dosa-960.webp',
    srcSet: '/images/south-indian/masala-dosa-480.webp 480w, /images/south-indian/masala-dosa-960.webp 960w, /images/south-indian/masala-dosa-1440.webp 1440w',
    width: 1440,
    height: 960,
    altKey: 'images.masalaDosa',
    position: '50% 60%',
  },
  idli: {
    src: '/images/south-indian/idli-sambar-960.webp',
    srcSet: '/images/south-indian/idli-sambar-480.webp 480w, /images/south-indian/idli-sambar-960.webp 960w, /images/south-indian/idli-sambar-1440.webp 1440w',
    width: 1440,
    height: 960,
    altKey: 'images.idli',
    position: '60% 50%',
  },
  tandoori: {
    src: '/images/non-veg/tandoori-chicken-960.webp',
    srcSet: '/images/non-veg/tandoori-chicken-480.webp 480w, /images/non-veg/tandoori-chicken-960.webp 960w, /images/non-veg/tandoori-chicken-1440.webp 1440w',
    width: 1440,
    height: 1920,
    altKey: 'images.tandoori',
  },
  chicken65: {
    src: '/images/non-veg/chicken-65-960.webp',
    srcSet: '/images/non-veg/chicken-65-480.webp 480w, /images/non-veg/chicken-65-960.webp 960w, /images/non-veg/chicken-65-1440.webp 1440w',
    width: 1440,
    height: 894,
    altKey: 'images.chicken65',
  },
  chickenCurry: {
    src: '/images/non-veg/chicken-curry-960.webp',
    srcSet: '/images/non-veg/chicken-curry-480.webp 480w, /images/non-veg/chicken-curry-960.webp 960w, /images/non-veg/chicken-curry-1440.webp 1440w',
    width: 1440,
    height: 960,
    altKey: 'images.chickenCurry',
    position: '30% 50%',
  },
  muttonCurry: {
    src: '/images/non-veg/mutton-curry-960.webp',
    srcSet: '/images/non-veg/mutton-curry-480.webp 480w, /images/non-veg/mutton-curry-960.webp 960w, /images/non-veg/mutton-curry-1440.webp 1440w',
    width: 1440,
    height: 1440,
    altKey: 'images.muttonCurry',
  },
  thali: {
    src: '/images/south-indian/south-indian-thali-960.webp',
    srcSet: '/images/south-indian/south-indian-thali-480.webp 480w, /images/south-indian/south-indian-thali-960.webp 960w, /images/south-indian/south-indian-thali-1440.webp 1440w',
    width: 1440,
    height: 1920,
    altKey: 'images.thali',
  },
  gGheeRoast: {
    src: '/images/gallery/ghee-roast-dosa-960.webp',
    srcSet: '/images/gallery/ghee-roast-dosa-480.webp 480w, /images/gallery/ghee-roast-dosa-960.webp 960w, /images/gallery/ghee-roast-dosa-1440.webp 1440w',
    width: 1440,
    height: 1080,
    altKey: 'images.gGheeRoast',
  },
  gConeDosa: {
    src: '/images/gallery/cone-dosa-960.webp',
    srcSet: '/images/gallery/cone-dosa-480.webp 480w, /images/gallery/cone-dosa-960.webp 960w, /images/gallery/cone-dosa-1440.webp 1440w',
    width: 1440,
    height: 960,
    altKey: 'images.gConeDosa',
    position: '40% 50%',
  },
  gGrill: {
    src: '/images/gallery/charred-tandoori-960.webp',
    srcSet: '/images/gallery/charred-tandoori-480.webp 480w, /images/gallery/charred-tandoori-960.webp 960w, /images/gallery/charred-tandoori-1440.webp 1440w',
    width: 1440,
    height: 960,
    altKey: 'images.gGrill',
  },
  gSkewers: {
    src: '/images/gallery/chicken-skewers-960.webp',
    srcSet: '/images/gallery/chicken-skewers-480.webp 480w, /images/gallery/chicken-skewers-960.webp 960w, /images/gallery/chicken-skewers-1440.webp 1440w',
    width: 1440,
    height: 960,
    altKey: 'images.gSkewers',
  },
  gMuttonSpread: {
    src: '/images/gallery/mutton-curry-spread-960.webp',
    srcSet: '/images/gallery/mutton-curry-spread-480.webp 480w, /images/gallery/mutton-curry-spread-960.webp 960w, /images/gallery/mutton-curry-spread-1440.webp 1440w',
    width: 1440,
    height: 2160,
    altKey: 'images.gMuttonSpread',
  },
  gKarahi: {
    src: '/images/gallery/brass-karahi-curry-960.webp',
    srcSet: '/images/gallery/brass-karahi-curry-480.webp 480w, /images/gallery/brass-karahi-curry-960.webp 960w, /images/gallery/brass-karahi-curry-1440.webp 1440w',
    width: 1440,
    height: 801,
    altKey: 'images.gKarahi',
  },
  gPepperFry: {
    src: '/images/gallery/mutton-pepper-fry-960.webp',
    srcSet: '/images/gallery/mutton-pepper-fry-480.webp 480w, /images/gallery/mutton-pepper-fry-960.webp 960w, /images/gallery/mutton-pepper-fry-1440.webp 1440w',
    width: 1440,
    height: 960,
    altKey: 'images.gPepperFry',
  },
  gChickenFry: {
    src: '/images/gallery/chicken-chilli-fry-960.webp',
    srcSet: '/images/gallery/chicken-chilli-fry-480.webp 480w, /images/gallery/chicken-chilli-fry-960.webp 960w, /images/gallery/chicken-chilli-fry-1440.webp 1440w',
    width: 1440,
    height: 960,
    altKey: 'images.gChickenFry',
  },
  gSpices: {
    src: '/images/gallery/traditional-spices-960.webp',
    srcSet: '/images/gallery/traditional-spices-480.webp 480w, /images/gallery/traditional-spices-960.webp 960w, /images/gallery/traditional-spices-1440.webp 1440w',
    width: 1440,
    height: 1015,
    altKey: 'images.gSpices',
  },
  gTawa: {
    src: '/images/gallery/tawa-cooking-960.webp',
    srcSet: '/images/gallery/tawa-cooking-480.webp 480w, /images/gallery/tawa-cooking-960.webp 960w, /images/gallery/tawa-cooking-1440.webp 1440w',
    width: 1440,
    height: 991,
    altKey: 'images.gTawa',
    position: '60% 50%',
  },
  gBananaLeaf: {
    src: '/images/gallery/banana-leaf-meal-960.webp',
    srcSet: '/images/gallery/banana-leaf-meal-480.webp 480w, /images/gallery/banana-leaf-meal-960.webp 960w, /images/gallery/banana-leaf-meal-1440.webp 1440w',
    width: 1440,
    height: 1440,
    altKey: 'images.gBananaLeaf',
  },
  gIdliCoffee: {
    src: '/images/gallery/idli-sambar-coffee-960.webp',
    srcSet: '/images/gallery/idli-sambar-coffee-480.webp 480w, /images/gallery/idli-sambar-coffee-960.webp 960w, /images/gallery/idli-sambar-coffee-1440.webp 1440w',
    width: 1440,
    height: 960,
    altKey: 'images.gIdliCoffee',
  },
  hero: {
    src: '/images/hero/hero-chicken-biryani-960.webp',
    srcSet: '/images/hero/hero-chicken-biryani-480.webp 480w, /images/hero/hero-chicken-biryani-960.webp 960w, /images/hero/hero-chicken-biryani-1024.webp 1024w',
    width: 1024,
    height: 1024,
    altKey: 'images.hero',
  },
  muttonBiryani: {
    src: '/images/biryani/mutton-biryani-960.webp',
    srcSet: '/images/biryani/mutton-biryani-480.webp 480w, /images/biryani/mutton-biryani-960.webp 960w, /images/biryani/mutton-biryani-1024.webp 1024w',
    width: 1024,
    height: 1024,
    altKey: 'images.muttonBiryani',
  },
} satisfies Record<string, Photo>

/** Spreads a photo into <FoodImage> props: src, srcSet, intrinsic size, translated alt, focal point. */
export function photoProps(photo: Photo, t: (key: string) => string) {
  return {
    src: photo.src,
    srcSet: photo.srcSet,
    width: photo.width,
    height: photo.height,
    alt: t(photo.altKey),
    position: photo.position,
  }
}
