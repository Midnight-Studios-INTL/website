'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhoWeAre from '@/components/WhoWeAre'
import Values from '@/components/Values'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import UIExamples from '@/components/UIExamples'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhoWeAre />
      <Values />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
