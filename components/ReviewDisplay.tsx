'use client'

import { useState, useEffect } from 'react'
import { Container, Title, Text, Grid, Card, Stack, Group, Rating, Skeleton, Alert, Button, Box } from '@mantine/core'
import { IconStar, IconAlertCircle, IconRefresh } from '@tabler/icons-react'
import { supabase, Review } from '@/lib/supabase'

interface ReviewDisplayProps {
  limit?: number
  showLoadMore?: boolean
}

export default function ReviewDisplay({ limit = 6, showLoadMore = true }: ReviewDisplayProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [hasMore, setHasMore] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async (offset = 0) => {
    try {
      if (offset === 0) {
        setLoading(true)
      } else {
        setLoadingMore(true)
      }
      setError('')

      const { data, error: fetchError } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1)

      if (fetchError) throw fetchError

      if (offset === 0) {
        setReviews(data || [])
      } else {
        setReviews(prev => [...prev, ...(data || [])])
      }

      setHasMore((data?.length || 0) === limit)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load reviews')
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }

  const handleLoadMore = () => {
    fetchReviews(reviews.length)
  }

  if (loading) {
    return (
      <Grid gutter="xl">
        {[...Array(limit)].map((_, index) => (
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
                <Group>
                  <Skeleton height={20} width={20} radius="xl" />
                  <Skeleton height={20} width={20} radius="xl" />
                  <Skeleton height={20} width={20} radius="xl" />
                  <Skeleton height={20} width={20} radius="xl" />
                  <Skeleton height={20} width={20} radius="xl" />
                </Group>
                <Skeleton height={60} />
                <Skeleton height={16} width="60%" />
                <Skeleton height={16} width="40%" />
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    )
  }

  if (error) {
    return (
      <Stack gap="md">
        <Alert 
          icon={<IconAlertCircle size="1rem" />} 
          color="red" 
          variant="light"
        >
          {error}
        </Alert>
        <Box ta="center">
          <Button 
            variant="light" 
            size="sm" 
            onClick={() => fetchReviews()}
            leftSection={<IconRefresh size="1rem" />}
          >
            Retry
          </Button>
        </Box>
      </Stack>
    )
  }

  if (reviews.length === 0) {
    return (
      <Box ta="center" py="xl">
        <Title order={3} c="white" mb="md">No Reviews Yet</Title>
        <Text c="dimmed">Be the first to share your experience!</Text>
      </Box>
    )
  }

  return (
    <Stack gap="xl">
      <Grid gutter="xl">
        {reviews.map((review, index) => (
          <Grid.Col key={review.id} span={{ base: 12, md: 4 }}>
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
                <Group>
                  <Rating
                    value={review.rating}
                    readOnly
                    size="sm"
                    emptySymbol={<IconStar size="1rem" color="gray" />}
                    fullSymbol={<IconStar size="1rem" color="#ffd700" />}
                  />
                </Group>
                
                <Text c="dimmed" style={{ flex: 1, fontStyle: 'italic' }}>
                  "{review.content}"
                </Text>
                
                <Box>
                  <Text fw={600} c="white" size="sm">
                    {review.title}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {review.name} • {review.project_type}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {new Date(review.created_at).toLocaleDateString()}
                  </Text>
                </Box>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {showLoadMore && hasMore && (
        <Box ta="center">
          <Button
            variant="light"
            onClick={handleLoadMore}
            loading={loadingMore}
            style={{ backgroundColor: '#e9456020', color: '#e94560', border: 'none' }}
          >
            Load More Reviews
          </Button>
        </Box>
      )}
    </Stack>
  )
}
