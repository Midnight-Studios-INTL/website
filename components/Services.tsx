'use client'

import { useEffect, useRef } from 'react'
import { Card, Text, Title, Container, Grid, Stack, Group, Badge, Accordion, ThemeIcon, Box } from '@mantine/core'

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
      <Container size="xl" py={100}>
        <Stack align="center" gap="xl" mb={60}>
          <Title order={2} size="h1" ta="center" c="white">
            Our Services
          </Title>
          <Text size="lg" c="dimmed" ta="center" maw={600}>
            Custom development solutions for iOS, Android, FiveM, and beyond
          </Text>
        </Stack>

        <Grid ref={servicesRef}>
          {services.map((service, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                shadow="sm"
                padding="xl"
                radius="md"
                withBorder
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  height: '100%',
                  transition: 'all 0.3s ease',
                }}
                className="service-card"
              >
                <Stack align="center" gap="md">
                  <ThemeIcon
                    size={80}
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: 'red', to: 'pink' }}
                  >
                    <i className={`${service.icon} text-2xl`}></i>
                  </ThemeIcon>
                  <Title order={3} size="h4" ta="center" c="white">
                    {service.title}
                  </Title>
                  <Text size="sm" c="dimmed" ta="center">
                    {service.description}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        {/* Mantine Accordion for Detailed Services */}
        <Stack gap="xl" mt={60}>
          <Title order={3} size="h2" ta="center" c="white">
            Detailed Service Information
          </Title>
          
          <Accordion 
            variant="separated"
            radius="md"
            chevronPosition="right"
            maw={800}
            mx="auto"
            styles={{
              item: {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                minHeight: '80px', // Fixed height for stability
              },
              control: {
                padding: '1.5rem',
                minHeight: '80px', // Fixed height for control
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
              },
              content: {
                padding: '0 1.5rem 1.5rem 1.5rem',
                minHeight: '200px', // Fixed minimum height for content
              },
            }}
          >
            <Accordion.Item value="ios">
              <Accordion.Control>
                <Group gap="md">
                  <ThemeIcon size="lg" radius="xl" variant="gradient" gradient={{ from: 'red', to: 'pink' }}>
                    <i className="fab fa-apple"></i>
                  </ThemeIcon>
                  <div>
                    <Text fw={600} c="white">iOS App Development</Text>
                    <Text size="sm" c="dimmed">Native iOS applications with SwiftUI</Text>
                  </div>
                </Group>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md" style={{ minHeight: '180px' }}>
                  <Text c="dimmed" size="sm" lh={1.6}>
                    We create stunning native iOS applications using the latest SwiftUI framework and Swift programming language. 
                    Our apps are optimized for performance, accessibility, and user experience.
                  </Text>
                  <Grid>
                    <Grid.Col span={6}>
                      <Text fw={600} mb="sm" c="white" size="sm">Technologies:</Text>
                      <Stack gap="xs">
                        {['SwiftUI & UIKit', 'Core Data & CloudKit', 'Combine & Async/Await', 'Core ML & Vision'].map((tech) => (
                          <Text key={tech} size="xs" c="dimmed">• {tech}</Text>
                        ))}
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Text fw={600} mb="sm" c="white" size="sm">Features:</Text>
                      <Stack gap="xs">
                        {['App Store optimization', 'Push notifications', 'In-app purchases', 'Offline functionality'].map((feature) => (
                          <Text key={feature} size="xs" c="dimmed">• {feature}</Text>
                        ))}
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="android">
              <Accordion.Control>
                <Group gap="md">
                  <ThemeIcon size="lg" radius="xl" variant="gradient" gradient={{ from: 'red', to: 'pink' }}>
                    <i className="fab fa-android"></i>
                  </ThemeIcon>
                  <div>
                    <Text fw={600} c="white">Android App Development</Text>
                    <Text size="sm" c="dimmed">Native Android applications with Kotlin</Text>
                  </div>
                </Group>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md" style={{ minHeight: '180px' }}>
                  <Text c="dimmed" size="sm" lh={1.6}>
                    Build powerful Android applications using Kotlin and Jetpack Compose. 
                    We ensure your app works seamlessly across all Android devices and versions.
                  </Text>
                  <Grid>
                    <Grid.Col span={6}>
                      <Text fw={600} mb="sm" c="white" size="sm">Technologies:</Text>
                      <Stack gap="xs">
                        {['Kotlin & Jetpack Compose', 'Room Database', 'Retrofit & OkHttp', 'Firebase Integration'].map((tech) => (
                          <Text key={tech} size="xs" c="dimmed">• {tech}</Text>
                        ))}
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Text fw={600} mb="sm" c="white" size="sm">Features:</Text>
                      <Stack gap="xs">
                        {['Material Design 3', 'Background services', 'Camera & sensors', 'Google Play optimization'].map((feature) => (
                          <Text key={feature} size="xs" c="dimmed">• {feature}</Text>
                        ))}
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="fivem">
              <Accordion.Control>
                <Group gap="md">
                  <ThemeIcon size="lg" radius="xl" variant="gradient" gradient={{ from: 'red', to: 'pink' }}>
                    <i className="fas fa-gamepad"></i>
                  </ThemeIcon>
                  <div>
                    <Text fw={600} c="white">FiveM Development</Text>
                    <Text size="sm" c="dimmed">Custom FiveM servers and scripts</Text>
                  </div>
                </Group>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md" style={{ minHeight: '180px' }}>
                  <Text c="dimmed" size="sm" lh={1.6}>
                    Create immersive FiveM roleplay servers with custom scripts, frameworks, and unique gameplay experiences. 
                    We build everything from basic resources to complex server systems.
                  </Text>
                  <Grid>
                    <Grid.Col span={6}>
                      <Text fw={600} mb="sm" c="white" size="sm">Services:</Text>
                      <Stack gap="xs">
                        {['Custom resource development', 'Server configuration', 'Database integration', 'Anti-cheat systems'].map((service) => (
                          <Text key={service} size="xs" c="dimmed">• {service}</Text>
                        ))}
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Text fw={600} mb="sm" c="white" size="sm">Frameworks:</Text>
                      <Stack gap="xs">
                        {['ESX & QBCore', 'vRP & Custom', 'MySQL & MongoDB', 'Discord integration'].map((framework) => (
                          <Text key={framework} size="xs" c="dimmed">• {framework}</Text>
                        ))}
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="web">
              <Accordion.Control>
                <Group gap="md">
                  <ThemeIcon size="lg" radius="xl" variant="gradient" gradient={{ from: 'red', to: 'pink' }}>
                    <i className="fas fa-code"></i>
                  </ThemeIcon>
                  <div>
                    <Text fw={600} c="white">Custom Web Development</Text>
                    <Text size="sm" c="dimmed">Full-stack web applications</Text>
                  </div>
                </Group>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="md" style={{ minHeight: '180px' }}>
                  <Text c="dimmed" size="sm" lh={1.6}>
                    Develop modern web applications with React, Next.js, and Node.js. 
                    We create responsive, fast, and SEO-optimized websites that deliver exceptional user experiences.
                  </Text>
                  <Grid>
                    <Grid.Col span={6}>
                      <Text fw={600} mb="sm" c="white" size="sm">Frontend:</Text>
                      <Stack gap="xs">
                        {['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                          <Text key={tech} size="xs" c="dimmed">• {tech}</Text>
                        ))}
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Text fw={600} mb="sm" c="white" size="sm">Backend:</Text>
                      <Stack gap="xs">
                        {['Node.js & Express', 'PostgreSQL & MongoDB', 'REST & GraphQL APIs', 'Authentication & Security'].map((tech) => (
                          <Text key={tech} size="xs" c="dimmed">• {tech}</Text>
                        ))}
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Stack>
      </Container>
    </section>
  )
}
