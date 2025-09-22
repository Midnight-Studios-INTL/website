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
          <h2>About Us</h2>
          <p>We're passionate about creating digital solutions that make a difference</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Innovation Meets Excellence</h3>
            <p>
              With over 5 years of experience in digital design and development, we've helped 
              hundreds of businesses transform their online presence. Our team combines creativity 
              with technical expertise to deliver solutions that not only look great but perform exceptionally.
            </p>
            <div className="stats" ref={statsRef}>
              <div className="stat">
                <h4>150+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>98%</h4>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat">
                <h4>24/7</h4>
                <p>Support Available</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <i className="fas fa-users"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
