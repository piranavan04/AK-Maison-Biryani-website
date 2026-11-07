import { Eyebrow, Ornament } from './Ornament'
import { Reveal } from './Reveal'

const REASONS = [
  {
    title: 'Authentic South Indian Cuisine',
    text: 'Biryani, dosa, tandoori and traditional meals, rooted in the flavours of South India.',
  },
  {
    title: 'Rich Traditional Flavours',
    text: 'Layered spices and slow cooking that give every dish its depth and aroma.',
  },
  {
    title: 'Carefully Selected Ingredients',
    text: 'Fresh herbs, whole spices and quality rice, chosen with care for every plate.',
  },
  {
    title: 'Warm Indian Hospitality',
    text: 'A welcome that treats every guest like family, from the first greeting to the last bite.',
  },
]

export function WhyChoose() {
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
          <Eyebrow>The AK Promise</Eyebrow>
          <Ornament className="mt-4" />
          <h2
            id="why-title"
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            Why Choose <span className="italic text-saffron">AK Maison Biryani?</span>
          </h2>
        </Reveal>

        <ol className="divide-y divide-gold/25 border-y border-gold/25">
          {REASONS.map((reason, i) => (
            <Reveal as="li" key={reason.title} delay={i * 90}>
              <div className="group grid grid-cols-[3.2rem_1fr] items-start gap-4 py-8 sm:grid-cols-[5rem_1fr] sm:py-10">
                <span className="font-display text-4xl italic text-gold/70 transition-colors duration-500 group-hover:text-saffron sm:text-5xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-cream sm:text-[1.9rem]">
                    {reason.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-[0.95rem] leading-relaxed text-cream/70 sm:text-base">
                    {reason.text}
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
