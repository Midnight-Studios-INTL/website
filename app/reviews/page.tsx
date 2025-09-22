'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ReviewStats from '@/components/ReviewStats'
import ReviewDisplay from '@/components/ReviewDisplay'
import ReviewForm from '@/components/ReviewForm'
import { Container, Title, Text, Box, Stack, Tabs, Button } from '@mantine/core'
import { IconMessageCircle, IconPlus, IconStar } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ReviewsPage() {
  const router = useRouter()
  const [refreshReviews, setRefreshReviews] = useState(0)

  return (
    <main>
      <Navigation />
      <div style={{ marginTop: '70px' }}>
        {/* Hero Section */}
        <Box
          style={{
            background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
            padding: '80px 0',
            color: 'white',
          }}
        >
          <Container size="xl">
            <Stack align="center" gap="xl">
              <Title order={1} size="3rem" ta="center">
                Client Reviews
              </Title>
              <Text size="lg" ta="center" opacity={0.9} maw="600px">
                Real feedback from our satisfied clients. See what they have to say about working with Midnight Studios INTL.
              </Text>
            </Stack>
          </Container>
        </Box>

        {/* Review Stats */}
        <Box py="80px" style={{ backgroundColor: '#0a0a0a' }}>
          <Container size="xl">
            <Stack align="center" gap="xl">
              <Title order={2} size="2.5rem" ta="center" c="white">
                Our Performance
              </Title>
              <Text size="lg" ta="center" c="dimmed" maw="600px">
                Statistics based on real client feedback and reviews.
              </Text>
              <ReviewStats />
            </Stack>
          </Container>
        </Box>

        {/* Reviews and Submit */}
        <Box py="80px" style={{ backgroundColor: '#000000' }}>
          <Container size="xl">
            <Stack align="center" gap="xl">
              <Title order={2} size="2.5rem" ta="center" c="white">
                Share Your Experience
              </Title>
              <Text size="lg" ta="center" c="dimmed" maw="600px">
                Help others by sharing your experience working with us.
              </Text>
              
              <Tabs defaultValue="reviews" variant="pills" style={{ width: '100%' }}>
                <Tabs.List justify="center" mb="xl">
                  <Tabs.Tab value="reviews" leftSection={<IconMessageCircle size="1rem" />}>
                    View All Reviews
                  </Tabs.Tab>
                  <Tabs.Tab value="submit" leftSection={<IconPlus size="1rem" />}>
                    Submit Your Review
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="reviews">
                  <ReviewDisplay limit={9} showLoadMore={true} />
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

        {/* CTA Section */}
        <Box py="80px" style={{ backgroundColor: '#0a0a0a' }}>
          <Container size="xl">
            <Box 
              style={{
                background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
                padding: '3rem',
                borderRadius: '15px',
                textAlign: 'center'
              }}
            >
              <Stack align="center" gap="xl">
                <Title order={2} size="2.5rem" c="white">
                  Ready to Work With Us?
                </Title>
                <Text size="lg" c="white" maw="600px">
                  Join our satisfied clients and experience the difference of working with a faith-driven technology team.
                </Text>
                <Button
                  size="lg"
                  onClick={() => router.push('/contact')}
                  style={{ backgroundColor: 'white', color: '#e94560' }}
                >
                  Start Your Project
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </div>
      <Footer />
    </main>
  )
}
