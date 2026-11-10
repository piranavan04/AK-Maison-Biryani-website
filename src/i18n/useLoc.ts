import { useTranslation } from 'react-i18next'
import type { Localized } from '../data/menu'

/**
 * Helpers for text that lives in the data files in both languages (the menu).
 * `loc(text)` picks the active language; `price("12.99")` formats a printed price. The price
 * format is the same in both languages so the number never appears to change on switching.
 */
export function useLoc() {
  const { i18n } = useTranslation()
  const lng = i18n.resolvedLanguage === 'fr' ? 'fr' : 'en'
  return {
    lng,
    loc: (text: Localized) => text[lng],
    price: (value: string) => `$${value}`,
  }
}
