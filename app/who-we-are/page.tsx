import Navigation from '@/components/Navigation'
import WhoWeAre from '@/components/WhoWeAre'
import Footer from '@/components/Footer'

export default function WhoWeArePage() {
  return (
    <main>
      <Navigation />
      <div style={{ marginTop: '70px' }}>
        <WhoWeAre />
      </div>
      <Footer />
    </main>
  )
}
