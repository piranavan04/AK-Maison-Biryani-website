import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { IMAGES, photoProps } from '../data/images'
import { Eyebrow, Ornament } from './Ornament'
import { FoodImage } from './FoodImage'
import { Reveal } from './Reveal'

export function Story() {
  const { t } = useTranslation()
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="relative overflow-hidden bg-cream py-20 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pattern-burgundy absolute inset-0 opacity-[0.045] [mask-image:radial-gradient(ellipse_at_85%_10%,black,transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 size-2/3 border-l-2 border-t-2 border-gold sm:-left-6 sm:-top-6"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 size-2/3 border-b-2 border-r-2 border-gold sm:-bottom-6 sm:-right-6"
            />
            <div className="group relative aspect-[4/5] overflow-hidden bg-burgundy">
              <FoodImage
                {...photoProps(IMAGES.story, t)}
                label={t('story.photoLabel')}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="size-full transition-transform duration-[1400ms] ease-[var(--ease-royal)] group-hover:scale-105"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow tone="burgundy">{t('story.eyebrow')}</Eyebrow>
            <Ornament className="mt-4 !text-royal" />
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="story-title"
              className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-burgundy sm:text-5xl lg:text-[3.4rem]"
            >
              {t('story.titleLead')} <span className="italic text-royal">{t('story.titleAccent')}</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-7 max-w-xl space-y-5 text-base leading-relaxed text-charcoal/80 sm:text-lg">
              <p>{t('story.p1')}</p>
              <p>{t('story.p2')}</p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <a
              href="#why"
              className="btn-gold group mt-10 inline-flex items-center gap-3 rounded-full bg-burgundy px-8 py-4 text-[0.82rem] font-bold uppercase tracking-[0.2em] text-cream transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-royal"
            >
              {t('story.cta')}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
