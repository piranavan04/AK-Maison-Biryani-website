/**
 * Bilingual support (English / Canadian French).
 *
 * - French is the default on a first visit (the restaurant is in Montréal). The browser language
 *   is not used to pick the language.
 * - A language the visitor chooses is saved in localStorage and restored on later visits.
 * - Both translation files are bundled, so the saved language is ready before the first render:
 *   no loading screen and no flash of the other language.
 * - <html lang>, the page title and the meta description follow the active language.
 *
 * Text lives in ./locales/<lang>/translation.json. Keys are identical in both files.
 */
import i18n from 'i18next'
import { flushSync } from 'react-dom'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import fr from './locales/fr/translation.json'

export const LANGUAGES = ['en', 'fr'] as const
export type Language = (typeof LANGUAGES)[number]
export const DEFAULT_LANGUAGE: Language = 'fr'

const STORAGE_KEY = 'akmb-language'
const HTML_LANG: Record<Language, string> = { en: 'en', fr: 'fr-CA' }

const isLanguage = (value: unknown): value is Language => LANGUAGES.includes(value as Language)

function readSavedLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return isLanguage(saved) ? saved : DEFAULT_LANGUAGE
  } catch {
    return DEFAULT_LANGUAGE // storage blocked (private mode, strict settings)
  }
}

function syncDocument() {
  const lng = currentLanguage()
  document.documentElement.lang = HTML_LANG[lng]
  document.title = i18n.t('meta.title')
  document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.t('meta.description'))
}

void i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, fr: { translation: fr } },
  lng: readSavedLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: [...LANGUAGES],
  interpolation: { escapeValue: false }, // React already escapes output
  initAsync: false, // resources are bundled: initialise synchronously, before the first render
  react: { useSuspense: false },
})

syncDocument()
i18n.on('languageChanged', syncDocument)

export function currentLanguage(): Language {
  return isLanguage(i18n.resolvedLanguage) ? i18n.resolvedLanguage : DEFAULT_LANGUAGE
}

/**
 * Switch language instantly (no reload), save the choice, and keep the visitor looking at the
 * same content: French text is often longer, so everything above the viewport can grow. We note
 * where an element in the middle of the screen sits, switch, then scroll by however far it moved.
 */
export function setLanguage(lng: Language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    /* storage unavailable: the switch still works for this visit */
  }
  if (lng === currentLanguage()) return

  const anchor = findScrollAnchor()
  const before = anchor?.getBoundingClientRect().top

  flushSync(() => {
    void i18n.changeLanguage(lng)
  })

  if (anchor && before !== undefined) {
    const correct = () => {
      const delta = anchor.getBoundingClientRect().top - before
      if (Math.abs(delta) > 1) window.scrollBy({ top: delta, behavior: 'instant' })
    }
    correct()
    requestAnimationFrame(correct) // once more after any late layout (fonts, measured bars)
  }
}

/** An element near the middle of the viewport that is not part of a fixed or sticky bar. */
function findScrollAnchor(): HTMLElement | null {
  if (window.scrollY < 4) return null // at the very top: nothing to preserve
  const x = window.innerWidth / 2
  for (const ratio of [0.45, 0.6, 0.3]) {
    for (const el of document.elementsFromPoint(x, window.innerHeight * ratio)) {
      if (el instanceof HTMLElement && !el.closest('header, [data-sticky-bar], [role="dialog"]')) return el
    }
  }
  return null
}

export default i18n
