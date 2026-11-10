// Single place to update restaurant details, navigation and social links.

export const SITE = {
  name: 'AK Maison Biryani',
  addressLines: ['431 Boul. Henri Bourassa East', 'Montreal, Quebec, H3L 1C5'],
  phoneDisplay: '514-858-0505',
  phoneHref: 'tel:+15148580505',
  // Do not add opening hours until the restaurant confirms them.
} as const

export const MAPS_QUERY = '431 Boul. Henri Bourassa East, Montreal, Quebec H3L 1C5'
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`

export interface NavItem {
  /** Translation key, e.g. 'nav.home' */
  labelKey: string
  href: string
  /** Section ids that should highlight this nav item. */
  sections: string[]
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'nav.home', href: '#home', sections: ['home'] },
  { labelKey: 'nav.story', href: '#story', sections: ['story'] },
  { labelKey: 'nav.menu', href: '#menu', sections: ['signature', 'menu', 'why'] },
  { labelKey: 'nav.gallery', href: '#gallery', sections: ['gallery'] },
  { labelKey: 'nav.contact', href: '#contact', sections: ['visit', 'contact'] },
]

export const SECTION_IDS = ['home', 'story', 'signature', 'menu', 'why', 'gallery', 'visit', 'contact']

export interface SocialLink {
  label: string
  /** Leave empty until the real profile URL is known. */
  url: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', url: '' },
  { label: 'Facebook', url: '' },
  { label: 'TikTok', url: '' },
]
