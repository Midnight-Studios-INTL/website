'use client'

import { useEffect, useRef } from 'react'

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
      icon: 'fas fa-church',
      title: 'Church Management System',
      description: 'Comprehensive platform for member management, event planning, and online giving for growing congregations.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Ministry Mobile App',
      description: 'Cross-platform mobile application connecting church members with sermons, events, and community resources.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Christian Education Platform',
      description: 'Online learning management system designed specifically for Christian schools and Bible study programs.'
    },
    {
      icon: 'fas fa-hands-praying',
      title: 'Prayer Request System',
      description: 'Secure platform for managing prayer requests and connecting prayer warriors within the community.'
    },
    {
      icon: 'fas fa-donate',
      title: 'Online Giving Platform',
      description: 'Secure, user-friendly donation system with recurring giving options and detailed reporting for ministries.'
    },
    {
      icon: 'fas fa-bible',
      title: 'Digital Bible Study Tool',
      description: 'Interactive Bible study platform with note-taking, group discussions, and progress tracking features.'
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Our Work</h2>
          <p>Technology solutions that advance God's kingdom and serve His people</p>
        </div>
        <div className="portfolio-grid" ref={portfolioRef}>
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                <i className={item.icon}></i>
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
