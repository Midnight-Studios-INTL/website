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
      icon: 'fab fa-apple',
      title: 'iOS E-Commerce App',
      description: 'Native iOS application with SwiftUI, featuring custom UI components, payment integration, and real-time inventory management.'
    },
    {
      icon: 'fab fa-android',
      title: 'Android Fitness Tracker',
      description: 'Cross-platform fitness application with custom charts, GPS tracking, and social features built with Kotlin and Jetpack Compose.'
    },
    {
      icon: 'fas fa-gamepad',
      title: 'FiveM Roleplay Server',
      description: 'Custom FiveM server with unique scripts, custom frameworks, and immersive roleplay experiences for 200+ concurrent players.'
    },
    {
      icon: 'fas fa-code',
      title: 'Custom Web Application',
      description: 'Full-stack web application with React frontend, Node.js backend, and custom database architecture for business automation.'
    },
    {
      icon: 'fas fa-database',
      title: 'Database Migration System',
      description: 'Custom database migration tool with data validation, transformation, and automated backup systems for enterprise clients.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Cross-Platform App',
      description: 'React Native application with native modules, custom animations, and platform-specific optimizations for iOS and Android.'
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Our Work</h2>
          <p>Custom development projects showcasing our expertise in mobile apps, FiveM, and full-stack solutions</p>
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
