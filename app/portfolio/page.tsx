import Navigation from '@/components/Navigation'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'

export default function PortfolioPage() {
  return (
    <main>
      <Navigation />
      <div style={{ marginTop: '70px' }}>
        <Portfolio />
      </div>
      <Footer />
    </main>
  )
}
