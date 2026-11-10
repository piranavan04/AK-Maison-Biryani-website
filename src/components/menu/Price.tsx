import { useTranslation } from 'react-i18next'
import type { MenuDish } from '../../data/menu'
import { useLoc } from '../../i18n/useLoc'

/**
 * A dish's printed price. Thali dishes have two (lunch and dinner), shown side by side with a
 * tiny label; every other dish shows a single price. Same numbers in both languages.
 */
export function Price({ dish, className = '' }: { dish: MenuDish; className?: string }) {
  const { t } = useTranslation()
  const { price } = useLoc()

  if (dish.priceDinner) {
    return (
      <span className={`flex shrink-0 items-end gap-4 text-right ${className}`}>
        {[
          { label: t('menu.priceLunch'), value: dish.price },
          { label: t('menu.priceDinner'), value: dish.priceDinner },
        ].map((p) => (
          <span key={p.label} className="flex flex-col items-end leading-tight">
            <span className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-gold/80">{p.label}</span>
            <span>{price(p.value)}</span>
          </span>
        ))}
      </span>
    )
  }
  return <span className={`shrink-0 ${className}`}>{price(dish.price)}</span>
}
