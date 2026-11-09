import { CalendarDays, MapPin, Navigation, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { MAPS_DIRECTIONS_URL, MAPS_EMBED_URL, SITE } from '../data/site'
import { Eyebrow, Ornament } from './Ornament'
import { Reveal } from './Reveal'

export function Visit() {
  const { t } = useTranslation()
  return (
    <section
      id="visit"
      aria-labelledby="visit-title"
      className="relative overflow-hidden bg-burgundy py-24 text-cream sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pattern-gold absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_top,black,transparent_75%)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>{t('visit.eyebrow')}</Eyebrow>
            <Ornament className="mt-4" />
            <h2
              id="visit-title"
              className="mt-6 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl"
            >
              {t('visit.titleLead')} <span className="italic text-saffron">{t('visit.titleAccent')}</span>
            </h2>
          </Reveal>

          {/* Grand opening invitation */}
          <Reveal delay={120}>
            <div className="relative mt-9 border border-gold/60 p-6 sm:p-7">
              <span
                aria-hidden="true"
                className="absolute -top-px left-6 -translate-y-1/2 bg-burgundy px-3 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-saffron"
              >
                {t('visit.invited')}
              </span>
              <div className="flex items-start gap-4">
                <CalendarDays className="mt-1 size-6 shrink-0 text-saffron" aria-hidden="true" />
                <div>
                  <p className="font-display text-3xl font-semibold leading-tight text-saffron sm:text-4xl">
                    {t('opening.title')}
                  </p>
                  <p className="mt-1 text-lg text-cream sm:text-xl">
                    {t('opening.dateTime', { date: t('opening.date'), time: t('opening.time') })}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <dl className="mt-9 space-y-6">
              <div className="flex gap-4">
                <dt className="mt-1">
                  <MapPin className="size-5 text-gold" aria-label={t('visit.address')} />
                </dt>
                <dd className="text-lg leading-snug text-cream/90">
                  <address className="not-italic">
                    {SITE.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="mt-1">
                  <Phone className="size-5 text-gold" aria-label={t('visit.phone')} />
                </dt>
                <dd>
                  <a
                    href={SITE.phoneHref}
                    className="link-underline text-lg text-cream/90 transition-colors hover:text-saffron"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-3 rounded-full bg-saffron px-8 py-4 text-[0.82rem] font-bold uppercase tracking-[0.2em] text-wine transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-gold"
              >
                <Navigation className="size-4" aria-hidden="true" />
                {t('visit.directions')}
                <span className="sr-only">{t('visit.directionsNote')}</span>
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-gold/70 px-8 py-4 text-[0.82rem] font-bold uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:border-saffron hover:bg-saffron/10 hover:text-saffron"
              >
                <Phone className="size-4" aria-hidden="true" />
                {t('visit.call')}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 translate-x-3 translate-y-3 border border-gold/50"
          />
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-gold bg-wine lg:aspect-auto lg:h-full lg:min-h-[28rem]">
            <iframe
              title={t('visit.mapTitle')}
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0 grayscale-[35%] sepia-[25%]"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
