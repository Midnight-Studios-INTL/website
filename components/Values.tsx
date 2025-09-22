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
      icon: 'fas fa-cross',
      title: 'Christ-Centered',
      description: 'Every project begins and ends with prayer. We seek God\'s guidance in all our work and strive to honor Him in everything we do.',
      verse: '"Whatever you do, work at it with all your heart, as working for the Lord." - Colossians 3:23'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Integrity',
      description: 'We conduct business with complete honesty and transparency, building lasting relationships based on trust and mutual respect.',
      verse: '"The integrity of the upright guides them." - Proverbs 11:3'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'We embrace cutting-edge technology while maintaining our Christian values, always seeking better ways to serve our clients.',
      verse: '"I can do all things through Christ who strengthens me." - Philippians 4:13'
    },
    {
      icon: 'fas fa-heart',
      title: 'Service',
      description: 'We serve our clients with excellence, treating every project as an opportunity to make a positive impact for God\'s kingdom.',
      verse: '"Serve wholeheartedly, as if you were serving the Lord." - Ephesians 6:7'
    }
  ]

  return (
    <section id="values" className="values">
      <div className="container">
        <div className="section-header">
          <h2>Our Core Values</h2>
          <p>The principles that guide everything we do at Midnight Studios INTL</p>
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
