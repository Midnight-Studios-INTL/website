'use client'

import Navigation from '@/components/Navigation'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import { Container, Title, Text, Grid, Card, Button, Box, Stack, Group, Badge, Divider, ThemeIcon, List, Center, Accordion, Tabs } from '@mantine/core'
import { IconCode, IconPalette, IconDeviceMobile, IconRocket, IconDatabase, IconCloud, IconShield, IconHeadset, IconClock, IconCheck, IconStar, IconTrendingUp, IconBulb, IconTarget } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

export default function ServicesPage() {
  const router = useRouter()

  const serviceCategories = [
    {
      value: 'web-development',
      label: 'Web Development',
      icon: <IconCode size="1rem" />,
      description: 'Modern, responsive websites and web applications'
    },
    {
      value: 'mobile-development',
      label: 'Mobile Development',
      icon: <IconDeviceMobile size="1rem" />,
      description: 'iOS and Android mobile applications'
    },
    {
      value: 'design',
      label: 'UI/UX Design',
      icon: <IconPalette size="1rem" />,
      description: 'User-centered design and user experience'
    },
    {
      value: 'consulting',
      label: 'Tech Consulting',
      icon: <IconBulb size="1rem" />,
      description: 'Strategic technology consulting and planning'
    }
  ]

  const webServices = [
    {
      title: 'Custom Web Applications',
      description: 'Tailored web solutions built with modern frameworks like React, Next.js, and Vue.js',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure'],
      price: 'Starting at $2,500',
      icon: <IconCode size="2rem" color="#e94560" />
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing and inventory management',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Admin Dashboard'],
      price: 'Starting at $5,000',
      icon: <IconRocket size="2rem" color="#e94560" />
    },
    {
      title: 'Content Management Systems',
      description: 'Easy-to-use CMS solutions for managing your website content',
      features: ['User-Friendly Interface', 'Multi-User Access', 'Content Scheduling', 'Media Management'],
      price: 'Starting at $3,000',
      icon: <IconDatabase size="2rem" color="#e94560" />
    }
  ]

  const mobileServices = [
    {
      title: 'Native iOS Apps',
      description: 'High-performance iOS applications built with Swift and SwiftUI',
      features: ['App Store Ready', 'Native Performance', 'iOS Design Guidelines', 'Push Notifications'],
      price: 'Starting at $8,000',
      icon: <IconDeviceMobile size="2rem" color="#e94560" />
    },
    {
      title: 'Native Android Apps',
      description: 'Robust Android applications using Kotlin and Jetpack Compose',
      features: ['Google Play Ready', 'Material Design', 'Offline Support', 'Background Sync'],
      price: 'Starting at $8,000',
      icon: <IconDeviceMobile size="2rem" color="#e94560" />
    },
    {
      title: 'Cross-Platform Apps',
      description: 'Single codebase apps for both iOS and Android using React Native',
      features: ['Code Reusability', 'Faster Development', 'Consistent UI', 'Cost Effective'],
      price: 'Starting at $6,000',
      icon: <IconRocket size="2rem" color="#e94560" />
    }
  ]

  const designServices = [
    {
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging and intuitive experiences',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      price: 'Starting at $1,500',
      icon: <IconPalette size="2rem" color="#e94560" />
    },
    {
      title: 'Brand Identity',
      description: 'Complete brand identity including logo, colors, and visual guidelines',
      features: ['Logo Design', 'Color Palette', 'Typography', 'Brand Guidelines'],
      price: 'Starting at $1,000',
      icon: <IconTarget size="2rem" color="#e94560" />
    },
    {
      title: 'Design Systems',
      description: 'Comprehensive design systems for consistent user experiences',
      features: ['Component Library', 'Style Guide', 'Design Tokens', 'Documentation'],
      price: 'Starting at $2,500',
      icon: <IconShield size="2rem" color="#e94560" />
    }
  ]

  const consultingServices = [
    {
      title: 'Technology Strategy',
      description: 'Strategic planning to align technology with business goals',
      features: ['Technology Audit', 'Roadmap Planning', 'Architecture Review', 'Best Practices'],
      price: 'Starting at $200/hour',
      icon: <IconBulb size="2rem" color="#e94560" />
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation consulting and implementation',
      features: ['Process Analysis', 'Technology Selection', 'Change Management', 'Training'],
      price: 'Starting at $5,000',
      icon: <IconTrendingUp size="2rem" color="#e94560" />
    },
    {
      title: 'Security Consulting',
      description: 'Comprehensive security assessment and implementation',
      features: ['Security Audit', 'Vulnerability Assessment', 'Compliance Review', 'Implementation'],
      price: 'Starting at $3,000',
      icon: <IconShield size="2rem" color="#e94560" />
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Consultation',
      description: 'We start with a free consultation to understand your needs, goals, and vision for the project.'
    },
    {
      step: '02',
      title: 'Proposal & Planning',
      description: 'We create a detailed proposal with timeline, milestones, and pricing based on your requirements.'
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Our team works on creating your solution with regular updates and feedback sessions.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Thorough testing ensures your solution works perfectly across all devices and platforms.'
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'We launch your solution and provide ongoing support to ensure continued success.'
    }
  ]

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer comprehensive support packages including maintenance, updates, security patches, and technical support. We also provide training for your team.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We work with modern technologies including React, Next.js, Node.js, Python, mobile frameworks like React Native, and cloud platforms like AWS and Vercel.'
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely! We specialize in integrating with existing systems and can work with your current technology stack to ensure seamless integration.'
    },
    {
      question: 'Do you offer maintenance packages?',
      answer: 'Yes, we offer flexible maintenance packages including regular updates, security monitoring, performance optimization, and 24/7 support options.'
    }
  ]

  return (
    <main>
      <Navigation />
      <div style={{ marginTop: '70px' }}>
        <Services />
        
        {/* Service Categories */}
        <Box py="80px" style={{ backgroundColor: '#0a0a0a' }}>
          <Container size="xl">
            <Stack align="center" gap="xl">
              <Title order={2} size="2.5rem" ta="center" c="white">
                Our Service Categories
              </Title>
              <Text size="lg" ta="center" c="dimmed" maw="600px">
                We offer comprehensive technology solutions across multiple domains
              </Text>
              
              <Tabs defaultValue="web-development" variant="pills" style={{ width: '100%' }}>
                <Tabs.List justify="center" mb="xl">
                  {serviceCategories.map((category) => (
                    <Tabs.Tab key={category.value} value={category.value} leftSection={category.icon}>
                      {category.label}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>

                <Tabs.Panel value="web-development">
                  <Grid gutter="xl">
                    {webServices.map((service, index) => (
                      <Grid.Col key={index} span={{ base: 12, md: 4 }}>
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
                          <Stack gap="md" h="100%">
                            <ThemeIcon size="xl" radius="xl" style={{ backgroundColor: '#e9456020', color: '#e94560' }}>
                              {service.icon}
                            </ThemeIcon>
                            <Title order={3} c="white">{service.title}</Title>
                            <Text c="dimmed" style={{ flex: 1 }}>{service.description}</Text>
                            <List size="sm" c="dimmed">
                              {service.features.map((feature, i) => (
                                <List.Item key={i} icon={<IconCheck size="0.8rem" color="#e94560" />}>
                                  {feature}
                                </List.Item>
                              ))}
                            </List>
                            <Badge size="lg" style={{ backgroundColor: '#e94560', color: 'white' }}>
                              {service.price}
                            </Badge>
                            <Button
                              variant="light"
                              onClick={() => router.push('/contact')}
                              style={{ backgroundColor: '#e9456020', color: '#e94560', border: 'none' }}
                            >
                              Get Quote
                            </Button>
                          </Stack>
                        </Card>
                      </Grid.Col>
                    ))}
                  </Grid>
                </Tabs.Panel>

                <Tabs.Panel value="mobile-development">
                  <Grid gutter="xl">
                    {mobileServices.map((service, index) => (
                      <Grid.Col key={index} span={{ base: 12, md: 4 }}>
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
                          <Stack gap="md" h="100%">
                            <ThemeIcon size="xl" radius="xl" style={{ backgroundColor: '#e9456020', color: '#e94560' }}>
                              {service.icon}
                            </ThemeIcon>
                            <Title order={3} c="white">{service.title}</Title>
                            <Text c="dimmed" style={{ flex: 1 }}>{service.description}</Text>
                            <List size="sm" c="dimmed">
                              {service.features.map((feature, i) => (
                                <List.Item key={i} icon={<IconCheck size="0.8rem" color="#e94560" />}>
                                  {feature}
                                </List.Item>
                              ))}
                            </List>
                            <Badge size="lg" style={{ backgroundColor: '#e94560', color: 'white' }}>
                              {service.price}
                            </Badge>
                            <Button
                              variant="light"
                              onClick={() => router.push('/contact')}
                              style={{ backgroundColor: '#e9456020', color: '#e94560', border: 'none' }}
                            >
                              Get Quote
                            </Button>
                          </Stack>
                        </Card>
                      </Grid.Col>
                    ))}
                  </Grid>
                </Tabs.Panel>

                <Tabs.Panel value="design">
                  <Grid gutter="xl">
                    {designServices.map((service, index) => (
                      <Grid.Col key={index} span={{ base: 12, md: 4 }}>
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
                          <Stack gap="md" h="100%">
                            <ThemeIcon size="xl" radius="xl" style={{ backgroundColor: '#e9456020', color: '#e94560' }}>
                              {service.icon}
                            </ThemeIcon>
                            <Title order={3} c="white">{service.title}</Title>
                            <Text c="dimmed" style={{ flex: 1 }}>{service.description}</Text>
                            <List size="sm" c="dimmed">
                              {service.features.map((feature, i) => (
                                <List.Item key={i} icon={<IconCheck size="0.8rem" color="#e94560" />}>
                                  {feature}
                                </List.Item>
                              ))}
                            </List>
                            <Badge size="lg" style={{ backgroundColor: '#e94560', color: 'white' }}>
                              {service.price}
                            </Badge>
                            <Button
                              variant="light"
                              onClick={() => router.push('/contact')}
                              style={{ backgroundColor: '#e9456020', color: '#e94560', border: 'none' }}
                            >
                              Get Quote
                            </Button>
                          </Stack>
                        </Card>
                      </Grid.Col>
                    ))}
                  </Grid>
                </Tabs.Panel>

                <Tabs.Panel value="consulting">
                  <Grid gutter="xl">
                    {consultingServices.map((service, index) => (
                      <Grid.Col key={index} span={{ base: 12, md: 4 }}>
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
                          <Stack gap="md" h="100%">
                            <ThemeIcon size="xl" radius="xl" style={{ backgroundColor: '#e9456020', color: '#e94560' }}>
                              {service.icon}
                            </ThemeIcon>
                            <Title order={3} c="white">{service.title}</Title>
                            <Text c="dimmed" style={{ flex: 1 }}>{service.description}</Text>
                            <List size="sm" c="dimmed">
                              {service.features.map((feature, i) => (
                                <List.Item key={i} icon={<IconCheck size="0.8rem" color="#e94560" />}>
                                  {feature}
                                </List.Item>
                              ))}
                            </List>
                            <Badge size="lg" style={{ backgroundColor: '#e94560', color: 'white' }}>
                              {service.price}
                            </Badge>
                            <Button
                              variant="light"
                              onClick={() => router.push('/contact')}
                              style={{ backgroundColor: '#e9456020', color: '#e94560', border: 'none' }}
                            >
                              Get Quote
                            </Button>
                          </Stack>
                        </Card>
                      </Grid.Col>
                    ))}
                  </Grid>
                </Tabs.Panel>
              </Tabs>
            </Stack>
          </Container>
        </Box>

        {/* Process Section */}
        <Box py="80px" style={{ backgroundColor: '#000000' }}>
          <Container size="xl">
            <Stack align="center" gap="xl">
              <Title order={2} size="2.5rem" ta="center" c="white">
                Our Development Process
              </Title>
              <Text size="lg" ta="center" c="dimmed" maw="600px">
                We follow a proven methodology to deliver exceptional results on time and within budget.
              </Text>
              
              <Grid gutter="xl" mt="xl">
                {process.map((step, index) => (
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
                          {step.step}
                        </Badge>
                        <Title order={3} ta="center" size="h4" c="white">
                          {step.title}
                        </Title>
                        <Text ta="center" c="dimmed" size="sm" style={{ flex: 1 }}>
                          {step.description}
                        </Text>
                      </Stack>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Box py="80px" style={{ backgroundColor: '#0a0a0a' }}>
          <Container size="lg">
            <Stack align="center" gap="xl">
              <Title order={2} size="2.5rem" ta="center" c="white">
                Frequently Asked Questions
              </Title>
              <Text size="lg" ta="center" c="dimmed" maw="600px">
                Have questions? We've got answers. If you don't see your question here, feel free to contact us.
              </Text>
              
              <Accordion variant="separated" radius="md" style={{ width: '100%' }}>
                {faqs.map((faq, index) => (
                  <Accordion.Item key={index} value={`faq-${index}`}>
                    <Accordion.Control>
                      <Text fw={600} size="lg" c="white">{faq.question}</Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text c="dimmed">{faq.answer}</Text>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
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
                  Let's discuss your project requirements and create something amazing together.
                </Text>
                <Group>
                  <Button
                    size="lg"
                    onClick={() => router.push('/contact')}
                    style={{ backgroundColor: 'white', color: '#e94560' }}
                  >
                    Get Free Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => router.push('/portfolio')}
                    style={{ borderColor: 'white', color: 'white' }}
                  >
                    View Our Work
                  </Button>
                </Group>
              </Stack>
            </Card>
          </Container>
        </Box>
      </div>
      <Footer />
    </main>
  )
}
