import { Contact } from './components/Contact'
import { Dishes } from './components/Dishes'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Story } from './components/Story'
import { Visit } from './components/Visit'
import { WhyChoose } from './components/WhyChoose'

export default function App() {
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
        <WhyChoose />
        <Gallery />
        <Visit />
      </main>
      <Contact />
    </>
  )
}
