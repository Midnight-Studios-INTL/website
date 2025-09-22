'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import { Container, Title, Text, Grid, Card, Button, Box, Stack } from '@mantine/core'
import { IconCode, IconPalette, IconDeviceMobile, IconRocket } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const features = [
    {
      icon: <IconCode size="2rem" color="#667eea" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies',
      link: '/services'
    },
    {
      icon: <IconPalette size="2rem" color="#667eea" />,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that engage your audience',
      link: '/services'
    },
    {
      icon: <IconDeviceMobile size="2rem" color="#667eea" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      link: '/services'
    },
    {
      icon: <IconRocket size="2rem" color="#667eea" />,
      title: 'Digital Solutions',
      description: 'Complete digital transformation for your business',
      link: '/services'
    }
  ]

  return (
    <main>
      <Navigation />
      <Hero />
      
      {/* Overview Section */}
      <Box py="80px" style={{ backgroundColor: '#f8fafc' }}>
        <Container size="xl">
          <Stack align="center" gap="xl">
            <Title order={2} size="2.5rem" ta="center">
              What We Do
            </Title>
            <Text size="lg" ta="center" c="dimmed" maw="600px">
              We create digital experiences that help businesses grow and succeed in the modern world.
            </Text>
            
            <Grid gutter="xl" mt="xl">
              {features.map((feature, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                  <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
                    <Stack align="center" gap="md" h="100%">
                      {feature.icon}
                      <Title order={3} ta="center" size="h4">
                        {feature.title}
                      </Title>
                      <Text ta="center" c="dimmed" size="sm" style={{ flex: 1 }}>
                        {feature.description}
                      </Text>
                      <Button
                        variant="light"
                        size="sm"
                        onClick={() => router.push(feature.link)}
                        fullWidth
                      >
                        Learn More
                      </Button>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>

            <Stack align="center" gap="md" mt="xl">
              <Button
                size="lg"
                onClick={() => router.push('/about')}
                variant="outline"
              >
                Learn More About Us
              </Button>
              <Button
                size="lg"
                color="red"
                onClick={() => router.push('/contact')}
              >
                Start Your Project
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </main>
  )
}
