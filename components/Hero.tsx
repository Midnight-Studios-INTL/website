'use client'

import { Button, Card, CardBody, Image } from '@heroui/react'
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
            <Button 
              color="primary"
              variant="solid"
              size="lg"
              radius="lg"
              onClick={() => scrollToSection('contact')}
            >
              Start Your Project
            </Button>
            <Button 
              color="primary"
              variant="bordered"
              size="lg"
              radius="lg"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </Button>
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
          
          {/* HeroUI Image Component Showcase */}
          <div className="hero-showcase">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center"
              alt="Code on screen"
              width={300}
              height={200}
              radius="lg"
              shadow="lg"
              isBlurred
              isZoomed
              className="hero-tech-image"
              fallbackSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMUExQTFBIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q29kZSBJbWFnZTwvdGV4dD4KPC9zdmc+"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
