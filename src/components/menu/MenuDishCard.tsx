import { Expand, Flame, Sparkles, Users } from 'lucide-react'
import type { DishTag, MenuDish } from '../../data/menu'
import { FoodImage } from '../FoodImage'
import { DietMark } from './DietMark'

const TAGS: Record<DishTag, { label: string; icon: typeof Flame; className: string }> = {
  signature: { label: 'Signature', icon: Sparkles, className: 'bg-saffron text-wine' },
  spicy: { label: 'Spicy', icon: Flame, className: 'bg-royal text-cream' },
  sharing: { label: 'For Sharing', icon: Users, className: 'bg-cream text-wine' },
}

interface MenuDishCardProps {
  dish: MenuDish
  onOpen: () => void
}

/**
 * One dish: the photograph leads, with name, diet mark, optional price and description below.
 * Hover (mouse only) zooms the photo, washes it in burgundy and reveals a gold frame and a
 * "View photo" cue. On touch screens everything important is always visible.
 */
export function MenuDishCard({ dish, onOpen }: MenuDishCardProps) {
  return (
    <article className="group">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View a larger photo of ${dish.name}`}
        className="relative block aspect-square w-full overflow-hidden rounded-xl bg-burgundy shadow-[0_18px_40px_-24px_rgb(0_0_0/0.8)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-saffron sm:aspect-[4/3] sm:rounded-2xl"
      >
        <FoodImage
          src={dish.photo.src}
          srcSet={dish.photo.srcSet}
          width={dish.photo.width}
          height={dish.photo.height}
          position={dish.photo.position}
          alt={dish.photo.alt}
          label={dish.name}
          sizes="(min-width: 1280px) 25rem, (min-width: 1024px) 31vw, 46vw"
          className="size-full transition-transform duration-[900ms] ease-[var(--ease-royal)] group-hover:scale-[1.07]"
        />

        {/* Soft base shade so badges stay readable on bright photos */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-wine/35 via-transparent to-transparent"
        />

        {/* Hover: burgundy wash, gold frame and "View photo" cue */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-burgundy/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-3 scale-95 rounded-lg border border-gold/0 transition-[transform,border-color] duration-500 ease-[var(--ease-royal)] group-hover:scale-100 group-hover:border-gold/80 sm:inset-4 sm:rounded-xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-1/2 flex translate-y-1/2 justify-center"
        >
          <span className="flex translate-y-3 items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-cream opacity-0 transition-[opacity,transform] duration-500 ease-[var(--ease-royal)] group-hover:translate-y-0 group-hover:opacity-100">
            <Expand className="size-4 text-saffron" />
            View photo
          </span>
        </span>

        {dish.tags && dish.tags.length > 0 && (
          <span className="absolute left-2 top-2 flex flex-wrap gap-1 sm:left-3 sm:top-3 sm:gap-1.5">
            {dish.tags.map((tag) => {
              const { label, icon: Icon, className } = TAGS[tag]
              return (
                <span
                  key={tag}
                  className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] shadow-sm sm:px-2.5 sm:py-1 sm:text-[0.62rem] ${className}`}
                >
                  <Icon className="size-2.5 sm:size-3" aria-hidden="true" />
                  {label}
                </span>
              )
            })}
          </span>
        )}
      </button>

      <div className="pt-3.5 sm:pt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-2 sm:gap-2.5">
            <DietMark diet={dish.diet} className="mt-[0.3rem] sm:mt-[0.45rem]" />
            <h4 className="font-display text-[1.08rem] font-semibold leading-tight text-cream transition-colors duration-300 group-hover:text-saffron sm:text-2xl">
              {dish.name}
            </h4>
          </div>
          {dish.price && (
            <span className="shrink-0 font-display text-base font-semibold text-saffron sm:text-xl">
              {dish.price}
            </span>
          )}
        </div>
        <span
          aria-hidden="true"
          className="mt-2.5 block h-px w-8 bg-gold/80 transition-[width] duration-500 ease-[var(--ease-royal)] group-hover:w-16 sm:mt-3"
        />
        <p className="mt-2.5 line-clamp-3 text-[0.8rem] leading-relaxed text-cream/70 sm:mt-3 sm:line-clamp-none sm:text-[0.95rem]">
          {dish.description}
        </p>
      </div>
    </article>
  )
}
