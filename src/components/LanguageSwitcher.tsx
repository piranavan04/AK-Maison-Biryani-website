import { useTranslation } from 'react-i18next'
import { LANGUAGES, setLanguage, type Language } from '../i18n/i18n'

interface LanguageSwitcherProps {
  /** 'bar' = compact EN | FR for the navigation bar; 'menu' = full names for the mobile menu. */
  variant?: 'bar' | 'menu'
  className?: string
}

/**
 * EN | FR switcher. Each option is labelled in its own language (lang attribute set), the active
 * one is marked with aria-pressed and the golden-yellow accent. Plain buttons: keyboard friendly.
 */
export function LanguageSwitcher({ variant = 'bar', className = '' }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation()
  const active = i18n.resolvedLanguage as Language

  if (variant === 'menu') {
    return (
      <div
        role="group"
        aria-label={t('language.groupLabel')}
        className={`grid grid-cols-2 gap-1 rounded-full border border-gold/50 p-1 ${className}`}
      >
        {LANGUAGES.map((lng) => {
          const isActive = lng === active
          return (
            <button
              key={lng}
              type="button"
              lang={lng === 'fr' ? 'fr-CA' : 'en'}
              aria-pressed={isActive}
              onClick={() => setLanguage(lng)}
              className={`rounded-full px-4 py-3 text-[0.78rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                isActive ? 'bg-saffron text-wine' : 'text-cream/80 hover:text-saffron'
              }`}
            >
              {t(`language.${lng}`)}
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div
      role="group"
      aria-label={t('language.groupLabel')}
      className={`items-center gap-1 sm:gap-2 xl:gap-2.5 ${className}`}
    >
      {LANGUAGES.map((lng, i) => {
        const isActive = lng === active
        return (
          <span key={lng} className="flex items-center gap-1 sm:gap-2 xl:gap-2.5">
            {i > 0 && <span aria-hidden="true" className="h-3.5 w-px bg-gold/50" />}
            <button
              type="button"
              lang={lng === 'fr' ? 'fr-CA' : 'en'}
              aria-pressed={isActive}
              aria-label={t(`language.${lng}`)}
              title={t(`language.${lng}`)}
              onClick={() => setLanguage(lng)}
              className={`group relative px-1 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] transition-colors duration-300 sm:py-1.5 sm:tracking-[0.2em] ${
                isActive ? 'text-saffron' : 'text-cream/65 hover:text-saffron'
              }`}
            >
              {t(`language.${lng}Short`)}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-saffron transition-transform duration-300 ${
                  isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          </span>
        )
      })}
    </div>
  )
}
