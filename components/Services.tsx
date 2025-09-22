'use client'

import { useEffect, useRef } from 'react'
import { Card, CardBody, CardHeader, Accordion, AccordionItem } from '@heroui/react'

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
            <Card 
              key={index} 
              className="service-card" 
              isHoverable
              isPressable
            >
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="service-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-2xl`}></i>
                </div>
              </CardHeader>
              <CardBody className="text-center pt-0">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-default-500 text-sm leading-relaxed">{service.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* HeroUI Accordion for Detailed Services */}
        <div className="services-accordion mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Detailed Service Information</h3>
          <Accordion 
            variant="bordered" 
            selectionMode="multiple"
            className="max-w-4xl mx-auto"
            itemClasses={{
              base: "py-0 w-full",
              title: "font-normal text-medium",
              trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
              indicator: "text-medium",
              content: "text-small px-2",
            }}
          >
            <AccordionItem 
              key="ios" 
              aria-label="iOS App Development"
              title="iOS App Development"
              subtitle="Native iOS applications with SwiftUI"
              startContent={<i className="fab fa-apple text-2xl text-primary"></i>}
            >
              <div className="space-y-4">
                <p className="text-default-600">
                  We create stunning native iOS applications using the latest SwiftUI framework and Swift programming language. 
                  Our apps are optimized for performance, accessibility, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <ul className="text-sm text-default-500 space-y-1">
                      <li>• SwiftUI & UIKit</li>
                      <li>• Core Data & CloudKit</li>
                      <li>• Combine & Async/Await</li>
                      <li>• Core ML & Vision</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="text-sm text-default-500 space-y-1">
                      <li>• App Store optimization</li>
                      <li>• Push notifications</li>
                      <li>• In-app purchases</li>
                      <li>• Offline functionality</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem 
              key="android" 
              aria-label="Android App Development"
              title="Android App Development"
              subtitle="Native Android applications with Kotlin"
              startContent={<i className="fab fa-android text-2xl text-primary"></i>}
            >
              <div className="space-y-4">
                <p className="text-default-600">
                  Build powerful Android applications using Kotlin and Jetpack Compose. 
                  We ensure your app works seamlessly across all Android devices and versions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <ul className="text-sm text-default-500 space-y-1">
                      <li>• Kotlin & Jetpack Compose</li>
                      <li>• Room Database</li>
                      <li>• Retrofit & OkHttp</li>
                      <li>• Firebase Integration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="text-sm text-default-500 space-y-1">
                      <li>• Material Design 3</li>
                      <li>• Background services</li>
                      <li>• Camera & sensors</li>
                      <li>• Google Play optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem 
              key="fivem" 
              aria-label="FiveM Development"
              title="FiveM Development"
              subtitle="Custom FiveM servers and scripts"
              startContent={<i className="fas fa-gamepad text-2xl text-primary"></i>}
            >
              <div className="space-y-4">
                <p className="text-default-600">
                  Create immersive FiveM roleplay servers with custom scripts, frameworks, and unique gameplay experiences. 
                  We build everything from basic resources to complex server systems.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Services:</h4>
                    <ul className="text-sm text-default-500 space-y-1">
                      <li>• Custom resource development</li>
                      <li>• Server configuration</li>
                      <li>• Database integration</li>
                      <li>• Anti-cheat systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Frameworks:</h4>
                    <ul className="text-sm text-default-500 space-y-1">
                      <li>• ESX & QBCore</li>
                      <li>• vRP & Custom</li>
                      <li>• MySQL & MongoDB</li>
                      <li>• Discord integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem 
              key="web" 
              aria-label="Custom Web Development"
              title="Custom Web Development"
              subtitle="Full-stack web applications"
              startContent={<i className="fas fa-code text-2xl text-primary"></i>}
            >
              <div className="space-y-4">
                <p className="text-default-600">
                  Develop modern web applications with React, Next.js, and Node.js. 
                  We create responsive, fast, and SEO-optimized websites that deliver exceptional user experiences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Frontend:</h4>
                    <ul className="text-sm text-default-500 space-y-1">
                      <li>• React & Next.js</li>
                      <li>• TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• Framer Motion</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend:</h4>
                    <ul className="text-sm text-default-500 space-y-1">
                      <li>• Node.js & Express</li>
                      <li>• PostgreSQL & MongoDB</li>
                      <li>• REST & GraphQL APIs</li>
                      <li>• Authentication & Security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
