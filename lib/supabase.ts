import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xsguzrmoqofnozjdwhuj.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzZ3V6cm1vcW9mbm96amR3aHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NzI2MzcsImV4cCI6MjA3NDE0ODYzN30.UiXKhwpDSxR82suMPXqTePn2raLFJUl-tDLM1TP14Nw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Review {
  id: string
  name: string
  email: string
  rating: number
  title: string
  content: string
  project_type: string
  is_approved: boolean
  created_at: string
  updated_at: string
}

export interface ReviewStats {
  total_reviews: number
  average_rating: number
  total_projects: number
  client_satisfaction: number
}
