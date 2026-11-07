import { useEffect } from 'react'
import { Contact } from './components/Contact'
import { Dishes } from './components/Dishes'
import { MenuSection } from './components/menu/MenuSection'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Story } from './components/Story'
import { Visit } from './components/Visit'
import { WhyChoose } from './components/WhyChoose'

export default function App() {
  // Links that arrive with a section anchor (e.g. a QR code to /#menu) open at that section.
  // The browser's own jump happens before React has drawn the page, so it finds nothing;
  // this repeats it once the sections exist, and once more after fonts/images settle,
  // unless the visitor has already started scrolling.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    let userScrolled = false
    const stop = () => (userScrolled = true)
    const jump = () => {
      if (!userScrolled) document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
    const events = ['wheel', 'touchstart', 'keydown', 'mousedown'] as const
    events.forEach((e) => window.addEventListener(e, stop, { once: true, passive: true }))
    jump()
    document.fonts?.ready.then(jump)
    const settle = window.setTimeout(jump, 600)
    return () => {
      window.clearTimeout(settle)
      events.forEach((e) => window.removeEventListener(e, stop))
    }
  }, [])

  return (
    <>
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-saffron focus:px-5 focus:py-2 focus:text-wine"
      >
        Skip to menu
      </a>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Dishes />
        <MenuSection />
        <WhyChoose />
        <Gallery />
        <Visit />
      </main>
      <Contact />
    </>
  )
}
