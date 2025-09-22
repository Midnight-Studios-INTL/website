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
      description: 'Custom websites and web applications built with modern technologies and best practices.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences across all devices.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.'
    },
    {
      icon: 'fas fa-search',
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive more organic traffic to your website.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Analytics',
      description: 'Data-driven insights to help you understand your users and optimize your digital presence.'
    },
    {
      icon: 'fas fa-headset',
      title: 'Support',
      description: 'Ongoing maintenance and support to keep your digital solutions running smoothly.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive solutions for all your digital needs</p>
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
