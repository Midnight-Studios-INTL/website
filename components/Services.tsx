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
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies, optimized for ministry and business growth.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that connect your community and amplify your message.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services that grow with your ministry or business needs.'
    },
    {
      icon: 'fas fa-database',
      title: 'Data Management',
      description: 'Secure, efficient data systems that help you make informed decisions and serve your community better.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and maintain trust with your community.'
    },
    {
      icon: 'fas fa-praying-hands',
      title: 'Ministry Tech',
      description: 'Specialized technology solutions for churches, ministries, and Christian organizations.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Solutions</h2>
          <p>Technology solutions that serve God's purposes and advance your mission</p>
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
