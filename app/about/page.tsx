import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <div style={{ marginTop: '70px' }}>
        <About />
      </div>
      <Footer />
    </main>
  )
}
