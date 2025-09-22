'use client'

import { useEffect, useRef } from 'react'

export default function WhoWeAre() {
  const foundersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up')
        }
      })
    }, { threshold: 0.1 })

    const founderCards = foundersRef.current?.querySelectorAll('.founder-card')
    founderCards?.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const founders = [
    {
      name: 'Zacharia Johnson',
      role: 'Founder & Lead Developer',
      description: 'Christ-inspired tech designer, coder, and app developer specializing in iOS, Android, and web development. Passionate about creating technology solutions that honor God while serving His people.',
      skills: ['iOS Development', 'Android Development', 'Web Development', 'UI/UX Design', 'Database Design'],
      image: '👨‍💻'
    },
    {
      name: 'Lee',
      role: 'Co-Founder & FiveM Specialist',
      description: 'Expert FiveM script writer and web designer with a heart for creating immersive gaming experiences and custom server solutions. Dedicated to building communities through innovative technology.',
      skills: ['FiveM Scripting', 'Web Design', 'Server Management', 'Lua Programming', 'Community Building'],
      image: '👨‍🎮'
    }
  ]

  return (
    <section id="who-we-are" className="who-we-are">
      <div className="container">
        <div className="section-header">
          <h2>Who We Are</h2>
          <p>Meet the passionate developers behind Midnight Studios INTL</p>
        </div>
        <div className="founders-grid" ref={foundersRef}>
          {founders.map((founder, index) => (
            <div key={index} className="founder-card">
              <div className="founder-image">
                <div className="founder-avatar">
                  <span className="avatar-emoji">{founder.image}</span>
                </div>
                <div className="founder-glow"></div>
              </div>
              <div className="founder-content">
                <h3 className="founder-name">{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
                <p className="founder-description">{founder.description}</p>
                <div className="founder-skills">
                  {founder.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="team-mission">
          <div className="mission-content">
            <h3>Our Mission</h3>
            <p>
              Together, we combine our technical expertise with our faith to create digital solutions that not only 
              meet your needs but also honor God. Whether it's a mobile app, FiveM server, or custom web application, 
              we approach every project with excellence, integrity, and a heart to serve.
            </p>
            <div className="mission-verse">
              <i className="fas fa-quote-left"></i>
              <span>"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." - Colossians 3:23</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
