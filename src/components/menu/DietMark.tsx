import type { Diet } from '../../data/menu'

/**
 * The familiar Indian food mark: a green dot for vegetarian, a red triangle for non-vegetarian,
 * on a cream square so it stays legible on the dark menu background.
 */
export function DietMark({ diet, className = '' }: { diet: Diet; className?: string }) {
  const veg = diet === 'veg'
  const label = veg ? 'Vegetarian' : 'Non-vegetarian'
  return (
    <span
      role="img"
      aria-label={label}
      title={label}
      className={`grid size-3.5 shrink-0 place-items-center rounded-[3px] border-[1.5px] bg-cream sm:size-4 ${
        veg ? 'border-[#3a8a4b]' : 'border-royal'
      } ${className}`}
    >
      {veg ? (
        <span className="size-1.5 rounded-full bg-[#3a8a4b] sm:size-2" />
      ) : (
        <svg viewBox="0 0 10 9" className="size-2 fill-royal sm:size-2.5">
          <path d="M5 0 10 9H0Z" />
        </svg>
      )}
    </span>
  )
}
