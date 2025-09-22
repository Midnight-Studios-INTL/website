'use client'

import { useState } from 'react'
import { Container, Title, Text, TextInput, Textarea, Select, Button, Box, Stack, Group, Rating, Alert, Card } from '@mantine/core'
import { IconStar, IconCheck, IconAlertCircle } from '@tabler/icons-react'
import { supabase } from '@/lib/supabase'

interface ReviewFormProps {
  onReviewSubmitted?: () => void
}

export default function ReviewForm({ onReviewSubmitted }: ReviewFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    title: '',
    content: '',
    project_type: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const projectTypes = [
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Mobile Development', label: 'Mobile Development' },
    { value: 'UI/UX Design', label: 'UI/UX Design' },
    { value: 'E-commerce', label: 'E-commerce' },
    { value: 'Digital Transformation', label: 'Digital Transformation' },
    { value: 'Consulting', label: 'Consulting' },
    { value: 'Other', label: 'Other' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const { error } = await supabase
        .from('reviews')
        .insert([{
          name: formData.name,
          email: formData.email,
          rating: formData.rating,
          title: formData.title,
          content: formData.content,
          project_type: formData.project_type
        }])

      if (error) throw error

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        rating: 0,
        title: '',
        content: '',
        project_type: ''
      })
      
      if (onReviewSubmitted) {
        onReviewSubmitted()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
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
          <IconCheck size="3rem" color="#e94560" />
          <Title order={3} c="white">Thank You!</Title>
          <Text c="dimmed">
            Your review has been submitted and will be reviewed before being published.
          </Text>
          <Button
            onClick={() => setSubmitted(false)}
            variant="light"
            style={{ backgroundColor: '#e9456020', color: '#e94560', border: 'none' }}
          >
            Submit Another Review
          </Button>
        </Stack>
      </Card>
    )
  }

  return (
    <Card 
      shadow="sm" 
      padding="xl" 
      radius="md" 
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
        border: '1px solid rgba(233, 69, 96, 0.2)'
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
          <Title order={3} c="white">Share Your Experience</Title>
          <Text c="dimmed" size="sm">
            Help others by sharing your experience working with Midnight Studios INTL.
          </Text>

          {error && (
            <Alert icon={<IconAlertCircle size="1rem" />} color="red" variant="light">
              {error}
            </Alert>
          )}

          <Group grow>
            <TextInput
              label="Your Name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              styles={{
                label: { color: 'white' },
                input: { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  border: '1px solid rgba(233, 69, 96, 0.3)',
                  color: 'white'
                }
              }}
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              styles={{
                label: { color: 'white' },
                input: { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  border: '1px solid rgba(233, 69, 96, 0.3)',
                  color: 'white'
                }
              }}
            />
          </Group>

          <Box>
            <Text size="sm" fw={500} c="white" mb="xs">Rating</Text>
            <Rating
              value={formData.rating}
              onChange={(value) => setFormData({ ...formData, rating: value })}
              size="lg"
              count={5}
              emptySymbol={<IconStar size="1.5rem" color="gray" />}
              fullSymbol={<IconStar size="1.5rem" color="#e94560" />}
            />
          </Box>

          <TextInput
            label="Review Title"
            placeholder="Brief title for your review"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            styles={{
              label: { color: 'white' },
              input: { 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                border: '1px solid rgba(233, 69, 96, 0.3)',
                color: 'white'
              }
            }}
          />

          <Select
            label="Project Type"
            placeholder="Select project type"
            data={projectTypes}
            value={formData.project_type}
            onChange={(value) => setFormData({ ...formData, project_type: value || '' })}
            required
            styles={{
              label: { color: 'white' },
              input: { 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                border: '1px solid rgba(233, 69, 96, 0.3)',
                color: 'white'
              }
            }}
          />

          <Textarea
            label="Your Review"
            placeholder="Tell us about your experience working with us..."
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            required
            minRows={4}
            styles={{
              label: { color: 'white' },
              input: { 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                border: '1px solid rgba(233, 69, 96, 0.3)',
                color: 'white'
              }
            }}
          />

          <Button
            type="submit"
            loading={isSubmitting}
            disabled={formData.rating === 0}
            style={{ backgroundColor: '#e94560', color: 'white' }}
          >
            Submit Review
          </Button>
        </Stack>
      </form>
    </Card>
  )
}
