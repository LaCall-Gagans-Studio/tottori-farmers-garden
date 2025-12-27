import Hero from './sections/Hero'
import News from './sections/News'
import Products from './sections/Products'
import Restaurant from './sections/Restaurant'
import About from './sections/About'
import Contact from './sections/Contact'
import BackToTop from '../components/BackToTop'
// import Image from 'next/image'

import Footer from '../components/Footer'

export default function Page() {
  return (
    <main
      id="main-scroll-container"
      className="relative h-screen overflow-y-scroll overflow-x-hidden scroll-smooth font-mikachan"
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
        className="snap-start h-screen md:h-[130vh] w-full relative z-0"
        style={{ margin: 0, padding: 0 }}
      >
        <Hero />
      </section>

      {/* News Section: Covers the Hero section */}
      <section
        id="news"
        className="min-h-screen w-full relative z-10 bg-white flex flex-col justify-center overflow-hidden"
      >
        <News />
      </section>

      {/* Other sections follow normally */}
      <section id="products" className="min-h-screen w-full relative z-10 bg-[#e6d5c1]">
        <Products />
      </section>

      <section id="restaurant" className="min-h-screen w-full relative z-10 bg-white">
        <Restaurant />
      </section>

      <section id="about" className="min-h-screen w-full relative z-10 bg-[#e6d5c1]">
        <About />
      </section>

      <section id="contact" className="min-h-screen w-full relative z-10 bg-[#e6d5c1]">
        <Contact />
      </section>

      <div className="relative z-10">
        <Footer />
      </div>

      <BackToTop />
    </main>
  )
}
