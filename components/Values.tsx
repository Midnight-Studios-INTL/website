'use client'

import { useEffect, useRef } from 'react'

export default function Values() {
  const valuesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up')
        }
      })
    }, { threshold: 0.1 })

    const valueCards = valuesRef.current?.querySelectorAll('.value-card')
    valueCards?.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: 'fas fa-code',
      title: 'Custom Development',
      description: 'We write every line of code from scratch, ensuring your project is unique, optimized, and tailored to your specific needs.',
      verse: '"Excellence is not a skill, it\'s an attitude." - Ralph Marston'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Client Partnership',
      description: 'We work closely with our clients throughout the entire development process, ensuring transparency and collaboration at every step.',
      verse: '"The best way to find out if you can trust somebody is to trust them." - Ernest Hemingway'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'We stay ahead of the curve with the latest technologies and development practices, always pushing the boundaries of what\'s possible.',
      verse: '"Innovation distinguishes between a leader and a follower." - Steve Jobs'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Quality & Performance',
      description: 'Every project is built with performance and scalability in mind, ensuring your solution grows with your business needs.',
      verse: '"Quality is not an act, it is a habit." - Aristotle'
    }
  ]

  return (
    <section id="values" className="values">
      <div className="container">
        <div className="section-header">
          <h2>Our Core Values</h2>
          <p>The principles that drive our development process and client relationships</p>
        </div>
        <div className="values-grid" ref={valuesRef}>
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">
                <i className={value.icon}></i>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <div className="verse">
                <i className="fas fa-quote-left"></i>
                <span>{value.verse}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
