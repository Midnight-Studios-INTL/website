'use client'

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
            <i className="fas fa-cross"></i>
            <span>Christ-Centered Technology</span>
          </div>
          <h1 className="hero-title">
            Where <span className="highlight">Faith</span> Meets 
            <span className="highlight"> Innovation</span>
          </h1>
          <p className="hero-subtitle">
            Midnight Studios INTL delivers cutting-edge technology solutions with Christian values at our core. 
            We build digital experiences that honor God while serving our clients with excellence.
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
              onClick={() => scrollToSection('values')}
            >
              Our Values
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
            <div className="cross-symbol">
              <i className="fas fa-cross"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
