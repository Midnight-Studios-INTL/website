import Navigation from '@/components/Navigation'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <div style={{ marginTop: '70px' }}>
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
