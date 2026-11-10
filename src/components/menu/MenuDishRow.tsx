import type { MenuDish } from '../../data/menu'
import { useLoc } from '../../i18n/useLoc'
import { DietMark } from './DietMark'
import { Price } from './Price'

/**
 * A dish without a photograph: the same diet mark, serif name, gold hairline and price as the
 * photo cards, set as a menu line (name … price) with the description beneath. No box.
 */
export function MenuDishRow({ dish }: { dish: MenuDish }) {
  const { loc } = useLoc()
  return (
    <article className="group flex items-start gap-2.5 sm:gap-3">
      <DietMark diet={dish.diet} className="mt-[0.42rem] sm:mt-[0.5rem]" />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <h4 className="font-display text-[1.12rem] font-semibold leading-snug text-cream transition-colors duration-300 group-hover:text-saffron sm:text-[1.4rem]">
            {loc(dish.name)}
          </h4>
          <span
            aria-hidden="true"
            className="min-w-3 flex-1 translate-y-[-0.2em] border-b border-dotted border-gold/45"
          />
          <Price dish={dish} className="font-display text-base font-semibold text-saffron sm:text-xl" />
        </div>
        {dish.description && (
          <p className="mt-1 text-[0.8rem] leading-relaxed text-cream/65 sm:text-[0.9rem]">{loc(dish.description)}</p>
        )}
      </div>
    </article>
  )
}
