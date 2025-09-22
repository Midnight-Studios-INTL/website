'use client'

import { useEffect, useRef } from 'react'

export default function Portfolio() {
  const portfolioRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up')
        }
      })
    }, { threshold: 0.1 })

    const portfolioItems = portfolioRef.current?.querySelectorAll('.portfolio-item')
    portfolioItems?.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const portfolioItems = [
    {
      icon: 'fas fa-laptop',
      title: 'E-commerce Platform',
      description: 'Modern online store with advanced features and seamless user experience.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile application for financial services.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Corporate Website',
      description: 'Professional website with modern design and excellent performance.'
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Our Work</h2>
          <p>Showcasing some of our recent projects and achievements</p>
        </div>
        <div className="portfolio-grid" ref={portfolioRef}>
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                <i className={item.icon}></i>
              </div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
