import Hero from './sections/Hero'
import News from './sections/News'
import Products from './sections/Products'
import About from './sections/About'
import Contact from './sections/Contact'
import BackToTop from '../components/BackToTop'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Global Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background-image.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section id="home">
        <Hero />
      </section>

      <section id="news">
        <News />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <BackToTop />
    </main>
  )
}
