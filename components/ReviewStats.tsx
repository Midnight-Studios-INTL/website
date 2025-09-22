'use client'

import { useState, useEffect } from 'react'
import { Container, Title, Text, Grid, Card, Stack, Group, ThemeIcon, Skeleton, Alert } from '@mantine/core'
import { IconStar, IconUsers, IconAward, IconTrendingUp, IconAlertCircle } from '@tabler/icons-react'
import { supabase, ReviewStats as ReviewStatsType } from '@/lib/supabase'

export default function ReviewStats() {
  const [stats, setStats] = useState<ReviewStatsType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      setLoading(true)
      
      // Get total reviews count
      const { count: totalReviews, error: reviewsError } = await supabase
        .from('reviews')
        .select('*', { count: 'exact', head: true })
        .eq('is_approved', true)

      if (reviewsError) throw reviewsError

      // Get average rating
      const { data: ratingData, error: ratingError } = await supabase
        .from('reviews')
        .select('rating')
        .eq('is_approved', true)

      if (ratingError) throw ratingError

      const averageRating = ratingData && ratingData.length > 0 
        ? ratingData.reduce((sum, review) => sum + review.rating, 0) / ratingData.length 
        : 0

      // Get unique project types count
      const { data: projectData, error: projectError } = await supabase
        .from('reviews')
        .select('project_type')
        .eq('is_approved', true)

      if (projectError) throw projectError

      const uniqueProjects = new Set(projectData?.map(review => review.project_type) || []).size

      // Calculate client satisfaction (percentage of 5-star reviews)
      const fiveStarReviews = ratingData?.filter(review => review.rating === 5).length || 0
      const clientSatisfaction = ratingData && ratingData.length > 0 
        ? Math.round((fiveStarReviews / ratingData.length) * 100) 
        : 0

      setStats({
        total_reviews: totalReviews || 0,
        average_rating: Math.round(averageRating * 10) / 10, // Round to 1 decimal
        total_projects: uniqueProjects,
        client_satisfaction: clientSatisfaction
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load statistics')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Grid gutter="xl">
        {[...Array(4)].map((_, index) => (
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
                <Skeleton height={40} width={40} radius="xl" />
                <Skeleton height={32} width={80} />
                <Skeleton height={16} width={120} />
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    )
  }

  if (error) {
    return (
      <Alert icon={<IconAlertCircle size="1rem" />} color="red" variant="light">
        {error}
      </Alert>
    )
  }

  const statItems = [
    {
      number: stats?.total_reviews || 0,
      label: 'Client Reviews',
      icon: <IconUsers size="2rem" color="#e94560" />
    },
    {
      number: `${stats?.average_rating || 0}/5`,
      label: 'Average Rating',
      icon: <IconStar size="2rem" color="#e94560" />
    },
    {
      number: stats?.total_projects || 0,
      label: 'Project Types',
      icon: <IconAward size="2rem" color="#e94560" />
    },
    {
      number: `${stats?.client_satisfaction || 0}%`,
      label: 'Client Satisfaction',
      icon: <IconTrendingUp size="2rem" color="#e94560" />
    }
  ]

  return (
    <Grid gutter="xl">
      {statItems.map((stat, index) => (
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
  )
}
