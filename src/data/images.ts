// Every photograph on the site, generated from /public/images (see CREDITS.md there).
// Each entry has responsive WebP sizes, intrinsic dimensions (prevents layout shift),
// descriptive alt text and an optional focal point used for object-position cropping.

export interface Photo {
  src: string
  srcSet: string
  width: number
  height: number
  alt: string
  /** CSS object-position, keeps the food in frame when cropped. */
  position?: string
}

export const IMAGES = {
  story: {
    src: '/images/restaurant/story-copper-feast-960.webp',
    srcSet: '/images/restaurant/story-copper-feast-480.webp 480w, /images/restaurant/story-copper-feast-960.webp 960w, /images/restaurant/story-copper-feast-1440.webp 1440w',
    width: 1440,
    height: 1440,
    alt: 'A spread of curries, biryani and naan served in copper vessels',
    position: '40% 50%',
  },
  chickenDum: {
    src: '/images/biryani/chicken-dum-biryani-960.webp',
    srcSet: '/images/biryani/chicken-dum-biryani-480.webp 480w, /images/biryani/chicken-dum-biryani-960.webp 960w, /images/biryani/chicken-dum-biryani-1440.webp 1440w',
    width: 1440,
    height: 2160,
    alt: 'A spoonful of chicken dum biryani lifted from the pot',
    position: '50% 35%',
  },
  masalaDosa: {
    src: '/images/south-indian/masala-dosa-960.webp',
    srcSet: '/images/south-indian/masala-dosa-480.webp 480w, /images/south-indian/masala-dosa-960.webp 960w, /images/south-indian/masala-dosa-1440.webp 1440w',
    width: 1440,
    height: 960,
    alt: 'Crisp masala dosa served with sambar and three chutneys',
    position: '50% 60%',
  },
  idli: {
    src: '/images/south-indian/idli-sambar-960.webp',
    srcSet: '/images/south-indian/idli-sambar-480.webp 480w, /images/south-indian/idli-sambar-960.webp 960w, /images/south-indian/idli-sambar-1440.webp 1440w',
    width: 1440,
    height: 960,
    alt: 'Soft idli on a banana leaf with coconut chutney and dried red chillies',
    position: '60% 50%',
  },
  tandoori: {
    src: '/images/non-veg/tandoori-chicken-960.webp',
    srcSet: '/images/non-veg/tandoori-chicken-480.webp 480w, /images/non-veg/tandoori-chicken-960.webp 960w, /images/non-veg/tandoori-chicken-1440.webp 1440w',
    width: 1440,
    height: 1920,
    alt: 'Tandoori chicken pieces on a black slate with mint chutney',
  },
  chicken65: {
    src: '/images/non-veg/chicken-65-960.webp',
    srcSet: '/images/non-veg/chicken-65-480.webp 480w, /images/non-veg/chicken-65-960.webp 960w, /images/non-veg/chicken-65-1440.webp 1440w',
    width: 1440,
    height: 894,
    alt: 'Chicken 65 tossed with curry leaves and peppers',
  },
  chickenCurry: {
    src: '/images/non-veg/chicken-curry-960.webp',
    srcSet: '/images/non-veg/chicken-curry-480.webp 480w, /images/non-veg/chicken-curry-960.webp 960w, /images/non-veg/chicken-curry-1440.webp 1440w',
    width: 1440,
    height: 960,
    alt: 'Chicken curry served on a banana leaf with soft rice pathiri',
    position: '30% 50%',
  },
  muttonCurry: {
    src: '/images/non-veg/mutton-curry-960.webp',
    srcSet: '/images/non-veg/mutton-curry-480.webp 480w, /images/non-veg/mutton-curry-960.webp 960w, /images/non-veg/mutton-curry-1440.webp 1440w',
    width: 1440,
    height: 1440,
    alt: 'Slow-cooked mutton curry in a steel karahi',
  },
  thali: {
    src: '/images/south-indian/south-indian-thali-960.webp',
    srcSet: '/images/south-indian/south-indian-thali-480.webp 480w, /images/south-indian/south-indian-thali-960.webp 960w, /images/south-indian/south-indian-thali-1440.webp 1440w',
    width: 1440,
    height: 1920,
    alt: 'South Indian thali with rice, curries and accompaniments on a banana leaf',
  },
  gGheeRoast: {
    src: '/images/gallery/ghee-roast-dosa-960.webp',
    srcSet: '/images/gallery/ghee-roast-dosa-480.webp 480w, /images/gallery/ghee-roast-dosa-960.webp 960w, /images/gallery/ghee-roast-dosa-1440.webp 1440w',
    width: 1440,
    height: 1080,
    alt: 'Ghee roast dosa with sambar and coconut chutney on a banana leaf',
  },
  gConeDosa: {
    src: '/images/gallery/cone-dosa-960.webp',
    srcSet: '/images/gallery/cone-dosa-480.webp 480w, /images/gallery/cone-dosa-960.webp 960w, /images/gallery/cone-dosa-1440.webp 1440w',
    width: 1440,
    height: 960,
    alt: 'A cone-shaped dosa served on a steel plate',
    position: '40% 50%',
  },
  gGrill: {
    src: '/images/gallery/charred-tandoori-960.webp',
    srcSet: '/images/gallery/charred-tandoori-480.webp 480w, /images/gallery/charred-tandoori-960.webp 960w, /images/gallery/charred-tandoori-1440.webp 1440w',
    width: 1440,
    height: 960,
    alt: 'Charred tandoori chicken fresh from the grill',
  },
  gSkewers: {
    src: '/images/gallery/chicken-skewers-960.webp',
    srcSet: '/images/gallery/chicken-skewers-480.webp 480w, /images/gallery/chicken-skewers-960.webp 960w, /images/gallery/chicken-skewers-1440.webp 1440w',
    width: 1440,
    height: 960,
    alt: 'Chicken skewers cooking over hot coals',
  },
  gMuttonSpread: {
    src: '/images/gallery/mutton-curry-spread-960.webp',
    srcSet: '/images/gallery/mutton-curry-spread-480.webp 480w, /images/gallery/mutton-curry-spread-960.webp 960w, /images/gallery/mutton-curry-spread-1440.webp 1440w',
    width: 1440,
    height: 2160,
    alt: 'Mutton curry and rice served family style',
  },
  gKarahi: {
    src: '/images/gallery/brass-karahi-curry-960.webp',
    srcSet: '/images/gallery/brass-karahi-curry-480.webp 480w, /images/gallery/brass-karahi-curry-960.webp 960w, /images/gallery/brass-karahi-curry-1440.webp 1440w',
    width: 1440,
    height: 801,
    alt: 'Rich red curry in a brass karahi with fresh coriander',
  },
  gPepperFry: {
    src: '/images/gallery/mutton-pepper-fry-960.webp',
    srcSet: '/images/gallery/mutton-pepper-fry-480.webp 480w, /images/gallery/mutton-pepper-fry-960.webp 960w, /images/gallery/mutton-pepper-fry-1440.webp 1440w',
    width: 1440,
    height: 960,
    alt: 'Mutton pepper fry with curry leaves and dried red chillies',
  },
  gChickenFry: {
    src: '/images/gallery/chicken-chilli-fry-960.webp',
    srcSet: '/images/gallery/chicken-chilli-fry-480.webp 480w, /images/gallery/chicken-chilli-fry-960.webp 960w, /images/gallery/chicken-chilli-fry-1440.webp 1440w',
    width: 1440,
    height: 960,
    alt: 'Chicken chilli fry with whole dried chillies on a black plate',
  },
  gSpices: {
    src: '/images/gallery/traditional-spices-960.webp',
    srcSet: '/images/gallery/traditional-spices-480.webp 480w, /images/gallery/traditional-spices-960.webp 960w, /images/gallery/traditional-spices-1440.webp 1440w',
    width: 1440,
    height: 1015,
    alt: 'Whole spices, turmeric and curry leaves on a dark board',
  },
  gTawa: {
    src: '/images/gallery/tawa-cooking-960.webp',
    srcSet: '/images/gallery/tawa-cooking-480.webp 480w, /images/gallery/tawa-cooking-960.webp 960w, /images/gallery/tawa-cooking-1440.webp 1440w',
    width: 1440,
    height: 991,
    alt: 'Flatbreads being cooked by hand on a large iron tawa',
    position: '60% 50%',
  },
  gBananaLeaf: {
    src: '/images/gallery/banana-leaf-meal-960.webp',
    srcSet: '/images/gallery/banana-leaf-meal-480.webp 480w, /images/gallery/banana-leaf-meal-960.webp 960w, /images/gallery/banana-leaf-meal-1440.webp 1440w',
    width: 1440,
    height: 1440,
    alt: 'A traditional South Indian meal served on a banana leaf',
  },
  gIdliCoffee: {
    src: '/images/gallery/idli-sambar-coffee-960.webp',
    srcSet: '/images/gallery/idli-sambar-coffee-480.webp 480w, /images/gallery/idli-sambar-coffee-960.webp 960w, /images/gallery/idli-sambar-coffee-1440.webp 1440w',
    width: 1440,
    height: 960,
    alt: 'Idli with sambar, chutneys and filter coffee',
  },
  hero: {
    src: '/images/hero/hero-chicken-biryani-960.webp',
    srcSet: '/images/hero/hero-chicken-biryani-480.webp 480w, /images/hero/hero-chicken-biryani-960.webp 960w, /images/hero/hero-chicken-biryani-1024.webp 1024w',
    width: 1024,
    height: 1024,
    alt: 'Chicken dum biryani in a hammered copper handi, lit by warm lanterns',
  },
  muttonBiryani: {
    src: '/images/biryani/mutton-biryani-960.webp',
    srcSet: '/images/biryani/mutton-biryani-480.webp 480w, /images/biryani/mutton-biryani-960.webp 960w, /images/biryani/mutton-biryani-1024.webp 1024w',
    width: 1024,
    height: 1024,
    alt: 'Mutton biryani with saffron rice and mint in a copper handi',
  },
} satisfies Record<string, Photo>

/** Spreads a photo into <FoodImage> props: src, srcSet, intrinsic size, alt and focal point. */
export function photoProps(photo: Photo) {
  return {
    src: photo.src,
    srcSet: photo.srcSet,
    width: photo.width,
    height: photo.height,
    alt: photo.alt,
    position: photo.position,
  }
}
