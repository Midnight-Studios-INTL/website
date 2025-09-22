import Navigation from '@/components/Navigation'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <main>
      <Navigation />
      <div style={{ marginTop: '70px' }}>
        <Services />
      </div>
      <Footer />
    </main>
  )
}
