'use client'

import { useEffect, useRef } from 'react'
import Logo from './Logo'

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
          <p>Where creativity meets code, and innovation drives custom solutions</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Custom Development Excellence</h3>
            <p>
              At Midnight Studios INTL, we specialize in creating custom digital solutions that push the boundaries of what's possible. 
              Our team of skilled developers and designers combines cutting-edge technology with creative vision to deliver 
              iOS apps, Android applications, FiveM servers, and custom software that exceed expectations. 
              We don't just build software – we craft experiences that make a difference.
            </p>
            <div className="stats" ref={statsRef}>
              <div className="stat">
                <h4>50+</h4>
                <p>Mobile Apps</p>
              </div>
              <div className="stat">
                <h4>25+</h4>
                <p>FiveM Servers</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Custom Code</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="faith-tech-symbol">
                <Logo size="large" showTagline={true} />
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
