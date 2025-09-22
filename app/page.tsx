'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import ReviewStats from '@/components/ReviewStats'
import ReviewDisplay from '@/components/ReviewDisplay'
import ReviewForm from '@/components/ReviewForm'
import { Container, Title, Text, Grid, Card, Button, Box, Stack, Group, Badge, Divider, ThemeIcon, List, Center, Tabs } from '@mantine/core'
import { IconCode, IconPalette, IconDeviceMobile, IconRocket, IconAward, IconUsers, IconClock, IconShield, IconHeart, IconStar, IconTrendingUp, IconBulb, IconTarget, IconCheck, IconMessageCircle, IconPlus } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const features = [
    {
      icon: <IconCode size="2rem" color="#e94560" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies',
      link: '/services',
      color: '#e94560'
    },
    {
      icon: <IconPalette size="2rem" color="#e94560" />,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that engage your audience',
      link: '/services',
      color: '#e94560'
    },
    {
      icon: <IconDeviceMobile size="2rem" color="#e94560" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      link: '/services',
      color: '#e94560'
    },
    {
      icon: <IconRocket size="2rem" color="#e94560" />,
      title: 'Digital Solutions',
      description: 'Complete digital transformation for your business',
      link: '/services',
      color: '#e94560'
    }
  ]

  const [refreshReviews, setRefreshReviews] = useState(0)

  const values = [
    {
      icon: <IconHeart size="1.5rem" />,
      title: 'Faith-Driven',
      description: 'Our Christian values guide every decision and project we undertake'
    },
    {
      icon: <IconShield size="1.5rem" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency'
    },
    {
      icon: <IconTarget size="1.5rem" />,
      title: 'Excellence',
      description: 'We strive for perfection in every line of code and every design'
    },
    {
      icon: <IconUsers size="1.5rem" />,
      title: 'Service',
      description: 'We serve our clients with dedication and genuine care'
    }
  ]


  return (
    <main>
      <Navigation />
      <Hero />
      
      {/* Real Review Stats Section */}
      <Box py="60px" style={{ backgroundColor: '#0a0a0a' }}>
        <Container size="xl">
          <Stack align="center" gap="xl">
            <Title order={2} size="2.5rem" ta="center" c="white">
              What Our Clients Say
            </Title>
            <Text size="lg" ta="center" c="dimmed" maw="600px">
              Real statistics based on actual client reviews and feedback.
            </Text>
            <ReviewStats />
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py="80px" style={{ backgroundColor: '#000000' }}>
        <Container size="xl">
          <Stack align="center" gap="xl">
            <Title order={2} size="2.5rem" ta="center" c="white">
              What We Do
            </Title>
            <Text size="lg" ta="center" c="dimmed" maw="600px">
              We create digital experiences that help businesses grow and succeed in the modern world.
            </Text>
            
            <Grid gutter="xl" mt="xl">
              {features.map((feature, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                  <Card 
                    shadow="sm" 
                    padding="xl" 
                    radius="md" 
                    withBorder 
                    h="100%"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid rgba(233, 69, 96, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    className="hover:transform hover:-translate-y-2 hover:border-red-500"
                  >
                    <Stack align="center" gap="md" h="100%">
                      <ThemeIcon size="xl" radius="xl" style={{ backgroundColor: feature.color + '20', color: feature.color }}>
                        {feature.icon}
                      </ThemeIcon>
                      <Title order={3} ta="center" size="h4" c="white">
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
                        style={{ backgroundColor: feature.color + '20', color: feature.color, border: 'none' }}
                      >
                        Learn More
                      </Button>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Values Section */}
      <Box py="80px" style={{ backgroundColor: '#0a0a0a' }}>
        <Container size="xl">
          <Stack align="center" gap="xl">
            <Title order={2} size="2.5rem" ta="center" c="white">
              Our Values
            </Title>
            <Text size="lg" ta="center" c="dimmed" maw="600px">
              Our Christian faith and values are the foundation of everything we do.
            </Text>
            
            <Grid gutter="xl" mt="xl">
              {values.map((value, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                  <Card 
                    shadow="sm" 
                    padding="xl" 
                    radius="md" 
                    withBorder 
                    h="100%"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid rgba(233, 69, 96, 0.2)'
                    }}
                  >
                    <Stack align="center" gap="md" h="100%">
                      <ThemeIcon size="xl" radius="xl" style={{ backgroundColor: '#e9456020', color: '#e94560' }}>
                        {value.icon}
                      </ThemeIcon>
                      <Title order={3} ta="center" size="h4" c="white">
                        {value.title}
                      </Title>
                      <Text ta="center" c="dimmed" size="sm" style={{ flex: 1 }}>
                        {value.description}
                      </Text>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Real Reviews Section */}
      <Box py="80px" style={{ backgroundColor: '#000000' }}>
        <Container size="xl">
          <Stack align="center" gap="xl">
            <Title order={2} size="2.5rem" ta="center" c="white">
              Client Reviews
            </Title>
            <Text size="lg" ta="center" c="dimmed" maw="600px">
              Real feedback from our satisfied clients. Share your experience too!
            </Text>
            
            <Tabs defaultValue="reviews" variant="pills" style={{ width: '100%' }}>
              <Tabs.List justify="center" mb="xl">
                <Tabs.Tab value="reviews" leftSection={<IconMessageCircle size="1rem" />}>
                  View Reviews
                </Tabs.Tab>
                <Tabs.Tab value="submit" leftSection={<IconPlus size="1rem" />}>
                  Submit Review
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="reviews">
                <ReviewDisplay limit={6} showLoadMore={true} />
              </Tabs.Panel>

              <Tabs.Panel value="submit">
                <Container size="md">
                  <ReviewForm onReviewSubmitted={() => setRefreshReviews(prev => prev + 1)} />
                </Container>
              </Tabs.Panel>
            </Tabs>
          </Stack>
        </Container>
      </Box>

      {/* Process Section */}
      <Box py="80px" style={{ backgroundColor: '#0a0a0a' }}>
        <Container size="xl">
          <Stack align="center" gap="xl">
            <Title order={2} size="2.5rem" ta="center" c="white">
              Our Process
            </Title>
            <Text size="lg" ta="center" c="dimmed" maw="600px">
              We follow a proven methodology to deliver exceptional results.
            </Text>
            
            <Grid gutter="xl" mt="xl">
              {[
                { step: '01', title: 'Discovery', description: 'We learn about your business, goals, and requirements' },
                { step: '02', title: 'Planning', description: 'We create a detailed roadmap and timeline for your project' },
                { step: '03', title: 'Design', description: 'We craft beautiful, user-centered designs and prototypes' },
                { step: '04', title: 'Development', description: 'We build your solution with clean, efficient code' },
                { step: '05', title: 'Testing', description: 'We thoroughly test everything to ensure quality' },
                { step: '06', title: 'Launch', description: 'We deploy your solution and provide ongoing support' }
              ].map((process, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                  <Card 
                    shadow="sm" 
                    padding="xl" 
                    radius="md" 
                    withBorder 
                    h="100%"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid rgba(233, 69, 96, 0.2)'
                    }}
                  >
                    <Stack align="center" gap="md" h="100%">
                      <Badge size="xl" style={{ backgroundColor: '#e94560', color: 'white' }}>
                        {process.step}
                      </Badge>
                      <Title order={3} ta="center" size="h4" c="white">
                        {process.title}
                      </Title>
                      <Text ta="center" c="dimmed" size="sm" style={{ flex: 1 }}>
                        {process.description}
                      </Text>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py="80px" style={{ backgroundColor: '#000000' }}>
        <Container size="xl">
          <Card 
            shadow="lg" 
            padding="xl" 
            radius="md" 
            style={{ 
              background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
              textAlign: 'center'
            }}
          >
            <Stack align="center" gap="xl">
              <Title order={2} size="2.5rem" c="white">
                Ready to Start Your Project?
              </Title>
              <Text size="lg" c="white" maw="600px">
                Let's work together to create something amazing. Contact us today for a free consultation.
              </Text>
              <Group>
                <Button
                  size="lg"
                  onClick={() => router.push('/contact')}
                  style={{ backgroundColor: 'white', color: '#e94560' }}
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => router.push('/about')}
                  style={{ borderColor: 'white', color: 'white' }}
                >
                  Learn More
                </Button>
              </Group>
            </Stack>
          </Card>
        </Container>
      </Box>

      <Footer />
    </main>
  )
}
