import Hero from './sections/Hero'
import News from './sections/News'
import Products from './sections/Products'
import About from './sections/About'
import Contact from './sections/Contact'
import BackToTop from '../components/BackToTop'
// import Image from 'next/image'

import Footer from '../components/Footer'

export default function Page() {
  return (
    <main
      id="main-scroll-container"
      className="relative h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth font-mikachan"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Global Background Image */}
      {/* <div className="fixed inset-0 -z-10 opacity-50">
        <Image
          src="/background-image.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div> */}

      {/* Hero Section: Fixed to stay behind */}
      <section
        id="home"
        className="snap-start h-screen w-full fixed top-0 left-0 -z-10"
        style={{ margin: 0, padding: 0 }}
      >
        <Hero />
      </section>

      {/* Spacer for Hero to allow scrolling */}
      <div id="hero-spacer" className="snap-start h-screen w-full"></div>

      {/* News Section: Covers the Hero section */}
      <section
        id="news"
        className="snap-start min-h-screen w-full relative z-10 bg-white flex flex-col justify-center overflow-hidden"
      >
        <News />
      </section>

      {/* Other sections follow normally */}
      <section id="products" className="snap-start min-h-screen w-full relative z-10 bg-[#e6d5c1]">
        <Products />
      </section>

      <section id="about" className="snap-start min-h-screen w-full relative z-10 bg-[#e6d5c1]">
        <About />
      </section>

      <section id="contact" className="snap-start min-h-screen w-full relative z-10 bg-[#e6d5c1]">
        <Contact />
      </section>

      <div className="snap-start relative z-10">
        <Footer />
      </div>

      <BackToTop />
    </main>
  )
}
