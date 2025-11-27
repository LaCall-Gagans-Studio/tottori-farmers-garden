import Hero from './sections/Hero'
import News from './sections/News'
import Products from './sections/Products'
import About from './sections/About'
import Contact from './sections/Contact'
import BackToTop from '../components/BackToTop'

export default function Page() {
  return (
    <>
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
    </>
  )
}
