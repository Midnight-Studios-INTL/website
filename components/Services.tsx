'use client'

import { useEffect, useRef } from 'react'

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up')
        }
      })
    }, { threshold: 0.1 })

    const serviceCards = servicesRef.current?.querySelectorAll('.service-card')
    serviceCards?.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: 'fab fa-apple',
      title: 'iOS App Development',
      description: 'Custom iOS applications built with Swift and SwiftUI. Native performance with modern design patterns and user experience.'
    },
    {
      icon: 'fab fa-android',
      title: 'Android App Development',
      description: 'Native Android apps using Kotlin and Jetpack Compose. Optimized for performance across all Android devices.'
    },
    {
      icon: 'fas fa-gamepad',
      title: 'FiveM Development',
      description: 'Custom FiveM servers, scripts, and resources. Server management, custom frameworks, and unique gameplay experiences.'
    },
    {
      icon: 'fas fa-code',
      title: 'Custom Code Development',
      description: 'Bespoke software solutions tailored to your specific needs. From web applications to desktop software and APIs.'
    },
    {
      icon: 'fas fa-database',
      title: 'Database Design & Management',
      description: 'Custom database architecture, optimization, and management. MySQL, PostgreSQL, MongoDB, and more.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces and user experiences. From wireframes to pixel-perfect implementations.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Custom development solutions for iOS, Android, FiveM, and beyond</p>
        </div>
        <div className="services-grid" ref={servicesRef}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
