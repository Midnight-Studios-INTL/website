'use client'

import { Button, Container, Stack, Title, Text, Group, Box, Image } from '@mantine/core'
import Logo from './Logo'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <Container size="xl" py={150}>
        <Stack align="center" gap="xl">
          <Stack align="center" gap="lg" maw={800}>
            <Group gap="md" p="md" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50px',
              backdropFilter: 'blur(10px)',
            }}>
              <Logo size="small" showTagline={false} />
              <Text size="sm" c="white" fw={500}>Custom Development Solutions</Text>
            </Group>
            
            <Title order={1} size="h1" ta="center" c="white" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e94560 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Where <span style={{ color: '#e94560' }}>Code</span> Meets{' '}
              <span style={{ color: '#e94560' }}>Creativity</span>
            </Title>
            
            <Text size="lg" c="dimmed" ta="center" maw={600}>
              Midnight Studios INTL specializes in custom iOS/Android app development, FiveM server creation, 
              and bespoke software solutions. We craft digital experiences that push boundaries and exceed expectations.
            </Text>
            
            <Group gap="md" mt="xl">
              <Button 
                color="red"
                size="lg"
                radius="xl"
                onClick={() => scrollToSection('contact')}
                style={{ fontWeight: 600 }}
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline"
                color="red"
                size="lg"
                radius="xl"
                onClick={() => scrollToSection('services')}
                style={{ 
                  borderColor: '#e94560',
                  color: 'white',
                  fontWeight: 600,
                }}
              >
                Our Services
              </Button>
            </Group>
          </Stack>
          
          <Box mt="xl">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center"
              alt="Code on screen"
              w={300}
              h={200}
              radius="md"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
              }}
              className="hero-tech-image"
            />
          </Box>
        </Stack>
      </Container>
    </section>
  )
}
