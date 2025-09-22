'use client'

import Logo from './Logo'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Logo size="small" showTagline={false} />
            <span>Custom Development Solutions</span>
          </div>
          <h1 className="hero-title">
            Where <span className="highlight">Code</span> Meets 
            <span className="highlight"> Creativity</span>
          </h1>
          <p className="hero-subtitle">
            Midnight Studios INTL specializes in custom iOS/Android app development, FiveM server creation, 
            and bespoke software solutions. We craft digital experiences that push boundaries and exceed expectations.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Start Your Project
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="tech-grid">
              <div className="tech-item">
                <i className="fas fa-code"></i>
              </div>
              <div className="tech-item">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="tech-item">
                <i className="fas fa-cloud"></i>
              </div>
              <div className="tech-item">
                <i className="fas fa-database"></i>
              </div>
            </div>
            <div className="logo-symbol">
              <Logo size="large" showTagline={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
