// Single place to update restaurant details, navigation and social links.

export const SITE = {
  name: 'AK Maison Biryani',
  tagline: 'South Indian Cuisine',
  addressLines: ['431 Boul. Henri Bourassa East', 'Montreal, Quebec, H3L 1C5'],
  phoneDisplay: '514-858-0505',
  phoneHref: 'tel:+15148580505',
  grandOpening: {
    dateLabel: 'November 11, 2026',
    timeLabel: '11 AM',
    short: '11.11.2026',
  },
  // Do not add regular opening hours until the restaurant confirms them.
} as const

export const MAPS_QUERY = '431 Boul. Henri Bourassa East, Montreal, Quebec H3L 1C5'
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`

export interface NavItem {
  label: string
  href: string
  /** Section ids that should highlight this nav item. */
  sections: string[]
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', sections: ['home'] },
  { label: 'Our Story', href: '#story', sections: ['story'] },
  { label: 'Menu', href: '#menu', sections: ['signature', 'menu', 'why'] },
  { label: 'Gallery', href: '#gallery', sections: ['gallery'] },
  { label: 'Contact', href: '#contact', sections: ['visit', 'contact'] },
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
