/**
 * Anchor scrolling that always lands the target directly under the fixed header.
 *
 * Why not rely on CSS `scroll-padding-top` alone? The header changes height while the page
 * scrolls (it shrinks, and on phones its open menu panel collapses), and images/fonts can shift
 * the page mid-scroll. A fixed offset therefore leaves a strip of the previous section showing
 * on some screens. Here the offset is measured from the real header, and the landing position is
 * corrected once the scroll settles and again after late layout changes.
 */

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Bottom edge of the fixed navigation bar (excluding its collapsed mobile panel). */
export function headerBottom(): number {
  const nav = document.querySelector('header nav')
  return nav ? nav.getBoundingClientRect().bottom : 0
}

/** Keep CSS scroll-padding in step with the real header height (used by browser-native jumps). */
export function watchHeaderHeight(): () => void {
  const nav = document.querySelector('header nav')
  if (!nav) return () => {}
  const apply = () => {
    document.documentElement.style.scrollPaddingTop = `${Math.ceil(headerBottom())}px`
  }
  apply()
  const observer = new ResizeObserver(apply)
  observer.observe(nav)
  return () => observer.disconnect()
}

let cancelCurrent: (() => void) | null = null

/**
 * Scroll so that `target`'s top sits `gap` pixels below the header (and below any extra sticky
 * bar of height `extra`). Smooth unless the visitor prefers reduced motion or `instant` is set.
 */
export function scrollToElement(target: HTMLElement, opts: { extra?: number; gap?: number; instant?: boolean } = {}) {
  cancelCurrent?.()
  const { extra = 0, gap = 0, instant = false } = opts
  const offset = () => headerBottom() + extra + gap
  const delta = () => target.getBoundingClientRect().top - offset()
  const smooth = !instant && !reducedMotion()

  let cancelled = false
  const timers: number[] = []
  const stop = () => {
    cancelled = true
    timers.forEach(window.clearTimeout)
    events.forEach((e) => window.removeEventListener(e, stop))
    if (cancelCurrent === stop) cancelCurrent = null
  }
  // A visitor who grabs the page takes control back.
  const events = ['wheel', 'touchstart', 'keydown', 'mousedown'] as const
  events.forEach((e) => window.addEventListener(e, stop, { passive: true, once: true }))
  cancelCurrent = stop

  const correct = () => {
    if (cancelled) return
    const d = delta()
    if (Math.abs(d) > 1) window.scrollBy({ top: d, behavior: 'instant' })
  }

  window.scrollBy({ top: delta(), behavior: smooth ? 'smooth' : 'instant' })

  // Wait for the smooth scroll to settle (position unchanged for a moment), then correct.
  let last = window.scrollY
  let still = 0
  const poll = () => {
    if (cancelled) return
    const now = window.scrollY
    still = Math.abs(now - last) < 1 ? still + 1 : 0
    last = now
    if (still >= 3 || !smooth) {
      correct()
      // Late layout (images, fonts, collapsing header) can still move things: check twice more (the header's own size animation lasts 500 ms).
      timers.push(window.setTimeout(correct, 650), window.setTimeout(() => (correct(), stop()), 1100))
      return
    }
    timers.push(window.setTimeout(poll, 60))
  }
  timers.push(window.setTimeout(poll, smooth ? 120 : 0))
}

/** Scroll to the element with this id; returns false when it does not exist. */
export function scrollToId(id: string, opts?: Parameters<typeof scrollToElement>[1]): boolean {
  const el = document.getElementById(id)
  if (!el) return false
  scrollToElement(el, opts)
  return true
}
