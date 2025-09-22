'use client'

import { useEffect, useRef } from 'react'

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateCounters = () => {
      const counters = statsRef.current?.querySelectorAll('.stat h4')
      counters?.forEach(counter => {
        const target = parseInt(counter.textContent || '0')
        const increment = target / 100
        let current = 0
        
        const updateCounter = () => {
          if (current < target) {
            current += increment
            counter.textContent = Math.ceil(current) + (counter.textContent?.includes('%') ? '%' : '+')
            requestAnimationFrame(updateCounter)
          } else {
            counter.textContent = target + (counter.textContent?.includes('%') ? '%' : '+')
          }
        }
        
        updateCounter()
      })
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters()
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Midnight Studios INTL</h2>
          <p>Where technology meets faith, and innovation serves a higher purpose</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Faith-Driven Innovation</h3>
            <p>
              At Midnight Studios INTL, we believe that technology should serve God's purposes. 
              Our team of Christian developers and designers combines cutting-edge technical expertise 
              with unwavering faith to deliver solutions that not only meet your business needs but 
              also honor our Creator. We've helped ministries, Christian businesses, and organizations 
              worldwide leverage technology for Kingdom impact.
            </p>
            <div className="stats" ref={statsRef}>
              <div className="stat">
                <h4>200+</h4>
                <p>Ministry Projects</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Christ-Centered</p>
              </div>
              <div className="stat">
                <h4>24/7</h4>
                <p>Prayer & Support</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="faith-tech-symbol">
                <i className="fas fa-cross"></i>
                <div className="circuit-pattern">
                  <div className="circuit-line"></div>
                  <div className="circuit-line"></div>
                  <div className="circuit-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
