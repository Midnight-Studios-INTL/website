import Navigation from '@/components/Navigation'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { Container, Title, Text, Box, Grid, Card, Stack } from '@mantine/core'
import { IconPhone, IconMail, IconMapPin, IconClock } from '@tabler/icons-react'

export default function ContactUsPage() {
  return (
    <main>
      <Navigation />
      <div style={{ marginTop: '70px' }}>
        <Box
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '80px 0',
            color: 'white',
          }}
        >
          <Container size="xl">
            <Title order={1} size="3rem" ta="center" mb="md">
              Contact Us
            </Title>
            <Text size="lg" ta="center" opacity={0.9}>
              Get in touch with our team for your next project
            </Text>
          </Container>
        </Box>

        <Container size="xl" py="80px">
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="lg">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack align="center" gap="md">
                    <IconPhone size="2rem" color="#667eea" />
                    <Title order={3} ta="center">Phone</Title>
                    <Text ta="center" c="dimmed">
                      +1 (555) 123-4567
                    </Text>
                    <Text ta="center" size="sm" c="dimmed">
                      Monday - Friday, 9AM - 6PM EST
                    </Text>
                  </Stack>
                </Card>

                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack align="center" gap="md">
                    <IconMail size="2rem" color="#667eea" />
                    <Title order={3} ta="center">Email</Title>
                    <Text ta="center" c="dimmed">
                      hello@midnightstudios.com
                    </Text>
                    <Text ta="center" size="sm" c="dimmed">
                      We'll respond within 24 hours
                    </Text>
                  </Stack>
                </Card>

                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack align="center" gap="md">
                    <IconMapPin size="2rem" color="#667eea" />
                    <Title order={3} ta="center">Office</Title>
                    <Text ta="center" c="dimmed">
                      123 Digital Street<br />
                      Tech City, TC 12345
                    </Text>
                    <Text ta="center" size="sm" c="dimmed">
                      Visit by appointment only
                    </Text>
                  </Stack>
                </Card>

                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack align="center" gap="md">
                    <IconClock size="2rem" color="#667eea" />
                    <Title order={3} ta="center">Business Hours</Title>
                    <Text ta="center" c="dimmed">
                      Monday - Friday: 9AM - 6PM<br />
                      Saturday: 10AM - 4PM<br />
                      Sunday: Closed
                    </Text>
                  </Stack>
                </Card>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Contact />
            </Grid.Col>
          </Grid>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
