'use client'

import { useEffect, useRef } from 'react'
import { Image } from '@heroui/react'

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
      description: 'Native iOS application with SwiftUI, featuring custom UI components, payment integration, and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center',
      alt: 'iOS E-Commerce App Interface'
    },
    {
      icon: 'fab fa-android',
      title: 'Android Fitness Tracker',
      description: 'Cross-platform fitness application with custom charts, GPS tracking, and social features built with Kotlin and Jetpack Compose.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center',
      alt: 'Android Fitness Tracker App'
    },
    {
      icon: 'fas fa-gamepad',
      title: 'FiveM Roleplay Server',
      description: 'Custom FiveM server with unique scripts, custom frameworks, and immersive roleplay experiences for 200+ concurrent players.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&crop=center',
      alt: 'FiveM Server Interface'
    },
    {
      icon: 'fas fa-code',
      title: 'Custom Web Application',
      description: 'Full-stack web application with React frontend, Node.js backend, and custom database architecture for business automation.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center',
      alt: 'Web Application Interface'
    },
    {
      icon: 'fas fa-database',
      title: 'Database Migration System',
      description: 'Custom database migration tool with data validation, transformation, and automated backup systems for enterprise clients.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center',
      alt: 'Database Management System'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Cross-Platform App',
      description: 'React Native application with native modules, custom animations, and platform-specific optimizations for iOS and Android.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center',
      alt: 'Cross-Platform Mobile App'
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
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={300}
                  height={200}
                  radius="lg"
                  shadow="md"
                  isBlurred
                  isZoomed
                  className="portfolio-project-image"
                  fallbackSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMUExQTFBIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJvamVjdCBJbWFnZTwvdGV4dD4KPC9zdmc+"
                />
                <div className="portfolio-icon-overlay">
                  <i className={item.icon}></i>
                </div>
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
