'use client'

import { useEffect, useRef } from 'react'
import { Image, Container, Stack, Title, Text, Grid, Card, Group, ThemeIcon, Box } from '@mantine/core'

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
      icon: 'fab fa-apple',
      title: 'iOS & Android App Development',
      description: 'Native iOS and Android applications with custom UI components, payment integration, and real-time features.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center',
      alt: 'iOS & Android App Development'
    },
    {
      icon: 'fab fa-android',
      title: 'App Website Replicator',
      description: 'Custom web application replication services for iOS and Android platforms with modern design and functionality.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center',
      alt: 'App Website Replicator'
    },
    {
      icon: 'fas fa-gamepad',
      title: 'FiveM Roleplay Server',
      description: 'Custom FiveM server with unique scripts, custom frameworks, and immersive roleplay experiences for 200+ concurrent players.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&crop=center',
      alt: 'FiveM Server Interface'
    },
    {
      icon: 'fas fa-code',
      title: 'Custom Web Application',
      description: 'Full-stack web application with React frontend, Node.js backend, and custom database architecture for business automation.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center',
      alt: 'Web Application Interface'
    },
    {
      icon: 'fas fa-database',
      title: 'Database Migration System',
      description: 'Custom database migration tool with data validation, transformation, and automated backup systems for enterprise clients.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center',
      alt: 'Database Management System'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Cross-Platform App',
      description: 'React Native application with native modules, custom animations, and platform-specific optimizations for iOS and Android.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center',
      alt: 'Cross-Platform Mobile App'
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <Container size="xl" py={100}>
        <Stack align="center" gap="xl" mb={60}>
          <Title order={2} size="h1" ta="center" c="white">
            Our Work
          </Title>
          <Text size="lg" c="dimmed" ta="center" maw={600}>
            Custom development projects showcasing our expertise in mobile apps, FiveM, and full-stack solutions
          </Text>
        </Stack>

        <Grid ref={portfolioRef}>
          {portfolioItems.map((item, index) => (
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
                className="portfolio-item"
              >
                <Stack gap="md">
                  <Box pos="relative" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      w="100%"
                      h={200}
                      radius="md"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                      className="portfolio-project-image"
                    />
                    <Box
                      pos="absolute"
                      top="50%"
                      left="50%"
                      style={{
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(233, 69, 96, 0.9)',
                        borderRadius: '50%',
                        width: '60px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                      }}
                      className="portfolio-icon-overlay"
                    >
                      <i className={item.icon} style={{ color: 'white', fontSize: '1.5rem' }}></i>
                    </Box>
                  </Box>
                  
                  <Stack gap="sm">
                    <Title order={3} size="h4" c="white">
                      {item.title}
                    </Title>
                    <Text size="sm" c="dimmed">
                      {item.description}
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  )
}
