'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Logo size="medium" showTagline={false} />
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a 
              className="nav-link" 
              onClick={() => scrollToSection('home')}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              onClick={() => scrollToSection('about')}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              onClick={() => scrollToSection('services')}
            >
              Services
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              onClick={() => scrollToSection('about')}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              onClick={() => scrollToSection('who-we-are')}
            >
              Who We Are
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              onClick={() => scrollToSection('portfolio')}
            >
              Work
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}
