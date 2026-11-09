import { useTranslation } from 'react-i18next'
import { Eyebrow, Ornament } from './Ornament'
import { Reveal } from './Reveal'

// Text for each reason is in the translation files under why.reasons.<id>.
const REASONS = ['r1', 'r2', 'r3', 'r4'] as const

export function WhyChoose() {
  const { t } = useTranslation()
  return (
    <section
      id="why"
      aria-labelledby="why-title"
      className="relative overflow-hidden bg-wine py-24 text-cream sm:py-32"
    >
      {/* Oversized monogram watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-6 select-none font-display text-[16rem] font-bold leading-none text-gold/[0.06] sm:text-[24rem]"
      >
        AK
      </span>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>{t('why.eyebrow')}</Eyebrow>
          <Ornament className="mt-4" />
          <h2
            id="why-title"
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            {t('why.titleLead')} <span className="italic text-saffron">{t('why.titleAccent')}</span>
          </h2>
        </Reveal>

        <ol className="divide-y divide-gold/25 border-y border-gold/25">
          {REASONS.map((reason, i) => (
            <Reveal as="li" key={reason} delay={i * 90}>
              <div className="group grid grid-cols-[3.2rem_1fr] items-start gap-4 py-8 sm:grid-cols-[5rem_1fr] sm:py-10">
                <span className="font-display text-4xl italic text-gold/70 transition-colors duration-500 group-hover:text-saffron sm:text-5xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-cream sm:text-[1.9rem]">
                    {t(`why.reasons.${reason}.title`)}
                  </h3>
                  <p className="mt-2 max-w-lg text-[0.95rem] leading-relaxed text-cream/70 sm:text-base">
                    {t(`why.reasons.${reason}.text`)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
