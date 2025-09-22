'use client'

import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Footer from '@/components/Footer'
import { Container, Title, Text, Grid, Card, Button, Box, Stack, Group, Badge, Divider, ThemeIcon, List, Center, Timeline, Avatar, Image } from '@mantine/core'
import { IconHeart, IconShield, IconTarget, IconUsers, IconAward, IconClock, IconBulb, IconRocket, IconCode, IconPalette, IconDeviceMobile, IconDatabase, IconCloud, IconCheck, IconStar, IconTrendingUp, IconCalendar, IconMapPin, IconPhone, IconMail } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

export default function AboutPage() {
  const router = useRouter()

  const teamMembers = [
    {
      name: 'Zachary Johnson',
      role: 'Founder & Lead Developer',
      bio: 'Passionate about creating technology solutions that serve God and help businesses thrive. 10+ years in software development.',
      skills: ['Full-Stack Development', 'Mobile Apps', 'Cloud Architecture', 'Team Leadership'],
      avatar: '👨‍💻',
      experience: '10+ years'
    },
    {
      name: 'Sarah Mitchell',
      role: 'UI/UX Designer',
      bio: 'Creative designer focused on user-centered design and beautiful, functional interfaces that delight users.',
      skills: ['UI/UX Design', 'Brand Identity', 'Prototyping', 'User Research'],
      avatar: '👩‍🎨',
      experience: '7+ years'
    },
    {
      name: 'Michael Chen',
      role: 'Backend Developer',
      bio: 'Backend specialist with expertise in scalable systems, databases, and API development.',
      skills: ['Backend Development', 'Database Design', 'API Development', 'DevOps'],
      avatar: '👨‍🔧',
      experience: '8+ years'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      bio: 'Experienced project manager ensuring smooth delivery and excellent client communication.',
      skills: ['Project Management', 'Agile Methodologies', 'Client Relations', 'Quality Assurance'],
      avatar: '👩‍💼',
      experience: '6+ years'
    }
  ]

  const values = [
    {
      icon: <IconHeart size="2rem" color="#e94560" />,
      title: 'Faith-Driven',
      description: 'Our Christian values guide every decision and project we undertake. We believe in serving others with integrity and excellence.',
      verse: 'Whatever you do, work at it with all your heart, as working for the Lord. - Colossians 3:23'
    },
    {
      icon: <IconShield size="2rem" color="#e94560" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our business dealings and client relationships.',
      verse: 'The integrity of the upright guides them, but the unfaithful are destroyed by their duplicity. - Proverbs 11:3'
    },
    {
      icon: <IconTarget size="2rem" color="#e94560" />,
      title: 'Excellence',
      description: 'We strive for perfection in every line of code, every design, and every interaction with our clients.',
      verse: 'Do you see someone skilled in their work? They will serve before kings. - Proverbs 22:29'
    },
    {
      icon: <IconUsers size="2rem" color="#e94560" />,
      title: 'Service',
      description: 'We serve our clients with dedication and genuine care, treating their success as our own.',
      verse: 'For even the Son of Man did not come to be served, but to serve. - Mark 10:45'
    }
  ]

  const milestones = [
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Midnight Studios INTL was founded with a vision to combine technology excellence with Christian values.',
      icon: <IconRocket size="1.5rem" color="#e94560" />
    },
    {
      year: '2022',
      title: 'First Major Project',
      description: 'Successfully delivered our first enterprise-level web application, establishing our reputation for quality.',
      icon: <IconCode size="1.5rem" color="#e94560" />
    },
    {
      year: '2023',
      title: 'Team Expansion',
      description: 'Grew our team to include specialized designers and developers, expanding our service offerings.',
      icon: <IconUsers size="1.5rem" color="#e94560" />
    },
    {
      year: '2024',
      title: 'Digital Transformation Focus',
      description: 'Launched our digital transformation consulting services, helping businesses modernize their operations.',
      icon: <IconTrendingUp size="1.5rem" color="#e94560" />
    }
  ]

  const technologies = [
    { name: 'React & Next.js', category: 'Frontend', icon: <IconCode size="1.5rem" color="#e94560" /> },
    { name: 'Node.js & Python', category: 'Backend', icon: <IconDatabase size="1.5rem" color="#e94560" /> },
    { name: 'React Native', category: 'Mobile', icon: <IconDeviceMobile size="1.5rem" color="#e94560" /> },
    { name: 'AWS & Vercel', category: 'Cloud', icon: <IconCloud size="1.5rem" color="#e94560" /> },
    { name: 'Figma & Adobe', category: 'Design', icon: <IconPalette size="1.5rem" color="#e94560" /> },
    { name: 'PostgreSQL & MongoDB', category: 'Database', icon: <IconDatabase size="1.5rem" color="#e94560" /> }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: <IconAward size="2rem" color="#e94560" /> },
    { number: '25+', label: 'Happy Clients', icon: <IconUsers size="2rem" color="#e94560" /> },
    { number: '3+', label: 'Years Experience', icon: <IconClock size="2rem" color="#e94560" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <IconStar size="2rem" color="#e94560" /> }
  ]

  return (
    <main>
      <Navigation />
      <div style={{ marginTop: '70px' }}>
        <About />
        
        {/* Team Section */}
        <Box py="80px" style={{ backgroundColor: '#0a0a0a' }}>
          <Container size="xl">
            <Stack align="center" gap="xl">
              <Title order={2} size="2.5rem" ta="center" c="white">
                Meet Our Team
              </Title>
              <Text size="lg" ta="center" c="dimmed" maw="600px">
                Our talented team of developers, designers, and project managers work together to deliver exceptional results.
              </Text>
              
              <Grid gutter="xl" mt="xl">
                {teamMembers.map((member, index) => (
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
                        <Avatar size="xl" radius="xl" style={{ fontSize: '3rem' }}>
                          {member.avatar}
                        </Avatar>
                        <Stack align="center" gap="xs">
                          <Title order={3} ta="center" size="h4" c="white">
                            {member.name}
                          </Title>
                          <Text ta="center" c="#e94560" fw={600}>
                            {member.role}
                          </Text>
                          <Badge size="sm" style={{ backgroundColor: '#e9456020', color: '#e94560' }}>
                            {member.experience}
                          </Badge>
                        </Stack>
                        <Text ta="center" c="dimmed" size="sm" style={{ flex: 1 }}>
                          {member.bio}
                        </Text>
                        <Stack gap="xs" w="100%">
                          {member.skills.map((skill, i) => (
                            <Badge key={i} size="sm" variant="light" style={{ backgroundColor: '#e9456020', color: '#e94560' }}>
                              {skill}
                            </Badge>
                          ))}
                        </Stack>
                      </Stack>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Box>

        {/* Values Section */}
        <Box py="80px" style={{ backgroundColor: '#000000' }}>
          <Container size="xl">
            <Stack align="center" gap="xl">
              <Title order={2} size="2.5rem" ta="center" c="white">
                Our Core Values
              </Title>
              <Text size="lg" ta="center" c="dimmed" maw="600px">
                Our Christian faith and values are the foundation of everything we do at Midnight Studios INTL.
              </Text>
              
              <Grid gutter="xl" mt="xl">
                {values.map((value, index) => (
                  <Grid.Col key={index} span={{ base: 12, md: 6 }}>
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
                          {value.icon}
                        </ThemeIcon>
                        <Title order={3} c="white">{value.title}</Title>
                        <Text c="dimmed" style={{ flex: 1 }}>{value.description}</Text>
                        <Box 
                          style={{ 
                            backgroundColor: 'rgba(255, 215, 0, 0.1)', 
                            borderLeft: '3px solid #ffd700', 
                            padding: '1rem', 
                            borderRadius: '5px' 
                          }}
                        >
                          <Text c="white" size="sm" style={{ fontStyle: 'italic' }}>
                            {value.verse}
                          </Text>
                        </Box>
                      </Stack>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Box>

        {/* Company Timeline */}
        <Box py="80px" style={{ backgroundColor: '#0a0a0a' }}>
          <Container size="xl">
            <Stack align="center" gap="xl">
              <Title order={2} size="2.5rem" ta="center" c="white">
                Our Journey
              </Title>
              <Text size="lg" ta="center" c="dimmed" maw="600px">
                From humble beginnings to becoming a trusted technology partner for businesses worldwide.
              </Text>
              
              <Timeline active={3} bulletSize={24} lineWidth={2} mt="xl" style={{ width: '100%', maxWidth: '800px' }}>
                {milestones.map((milestone, index) => (
                  <Timeline.Item 
                    key={index} 
                    bullet={
                      <ThemeIcon size="xl" radius="xl" style={{ backgroundColor: '#e94560', color: 'white' }}>
                        {milestone.icon}
                      </ThemeIcon>
                    }
                    title={
                      <Group>
                        <Badge size="lg" style={{ backgroundColor: '#e94560', color: 'white' }}>
                          {milestone.year}
                        </Badge>
                        <Title order={3} c="white" size="h4">
                          {milestone.title}
                        </Title>
                      </Group>
                    }
                  >
                    <Text c="dimmed" mt="sm">
                      {milestone.description}
                    </Text>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Stack>
          </Container>
        </Box>

        {/* Technologies Section */}
        <Box py="80px" style={{ backgroundColor: '#000000' }}>
          <Container size="xl">
            <Stack align="center" gap="xl">
              <Title order={2} size="2.5rem" ta="center" c="white">
                Technologies We Use
              </Title>
              <Text size="lg" ta="center" c="dimmed" maw="600px">
                We stay current with the latest technologies to deliver cutting-edge solutions.
              </Text>
              
              <Grid gutter="xl" mt="xl">
                {technologies.map((tech, index) => (
                  <Grid.Col key={index} span={{ base: 6, sm: 4, md: 2 }}>
                    <Card 
                      shadow="sm" 
                      padding="xl" 
                      radius="md" 
                      withBorder 
                      h="100%"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                        border: '1px solid rgba(233, 69, 96, 0.2)',
                        textAlign: 'center'
                      }}
                    >
                      <Stack align="center" gap="md" h="100%">
                        <ThemeIcon size="xl" radius="xl" style={{ backgroundColor: '#e9456020', color: '#e94560' }}>
                          {tech.icon}
                        </ThemeIcon>
                        <Stack align="center" gap="xs">
                          <Text fw={600} c="white" size="sm">
                            {tech.name}
                          </Text>
                          <Badge size="xs" variant="light" style={{ backgroundColor: '#e9456020', color: '#e94560' }}>
                            {tech.category}
                          </Badge>
                        </Stack>
                      </Stack>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Box>

        {/* Stats Section */}
        <Box py="80px" style={{ backgroundColor: '#0a0a0a' }}>
          <Container size="xl">
            <Grid gutter="xl">
              {stats.map((stat, index) => (
                <Grid.Col key={index} span={{ base: 6, md: 3 }}>
                  <Card 
                    shadow="sm" 
                    padding="xl" 
                    radius="md" 
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid rgba(233, 69, 96, 0.2)',
                      textAlign: 'center'
                    }}
                  >
                    <Stack align="center" gap="md">
                      <ThemeIcon size="xl" radius="xl" style={{ backgroundColor: '#e9456020', color: '#e94560' }}>
                        {stat.icon}
                      </ThemeIcon>
                      <Title order={2} size="2.5rem" c="#e94560">
                        {stat.number}
                      </Title>
                      <Text ta="center" c="dimmed" size="sm">
                        {stat.label}
                      </Text>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Mission Statement */}
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
                  Our Mission
                </Title>
                <Text size="lg" c="white" maw="800px" style={{ lineHeight: 1.6 }}>
                  To create innovative technology solutions that honor God while serving our clients with excellence, 
                  integrity, and genuine care. We believe that technology should be a force for good, helping businesses 
                  grow and communities thrive.
                </Text>
                <Box 
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                    padding: '1.5rem', 
                    borderRadius: '10px',
                    maxWidth: '600px'
                  }}
                >
                  <Text c="white" size="lg" style={{ fontStyle: 'italic' }}>
                    "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
                  </Text>
                  <Text c="white" size="sm" mt="sm" ta="right">
                    - Colossians 3:23
                  </Text>
                </Box>
                <Group>
                  <Button
                    size="lg"
                    onClick={() => router.push('/contact')}
                    style={{ backgroundColor: 'white', color: '#e94560' }}
                  >
                    Work With Us
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => router.push('/services')}
                    style={{ borderColor: 'white', color: 'white' }}
                  >
                    Our Services
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
