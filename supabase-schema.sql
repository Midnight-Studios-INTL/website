-- Create reviews table
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  project_type VARCHAR(50) NOT NULL,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX idx_reviews_approved ON reviews(is_approved);
CREATE INDEX idx_reviews_rating ON reviews(rating);
CREATE INDEX idx_reviews_created_at ON reviews(created_at);

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to approved reviews
CREATE POLICY "Allow public read access to approved reviews" ON reviews
  FOR SELECT USING (is_approved = true);

-- Create policy to allow public insert for new reviews
CREATE POLICY "Allow public insert for new reviews" ON reviews
  FOR INSERT WITH CHECK (true);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_reviews_updated_at
  BEFORE UPDATE ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample approved reviews
INSERT INTO reviews (name, email, rating, title, content, project_type, is_approved) VALUES
('Sarah Johnson', 'sarah@techstart.com', 5, 'Exceptional Web Development', 'Midnight Studios transformed our digital presence completely. Their attention to detail and Christian values made the entire process smooth and trustworthy. Highly recommend!', 'Web Development', true),
('Michael Chen', 'michael@digitalsolutions.com', 5, 'Outstanding Mobile App', 'Working with a team that shares our values was refreshing. The quality of work exceeded our expectations. The mobile app they built for us is flawless.', 'Mobile Development', true),
('Emily Rodriguez', 'emily@growthco.com', 5, 'Professional and Reliable', 'Professional, reliable, and faith-driven. They delivered our project on time and within budget. The team was communicative throughout the entire process.', 'UI/UX Design', true),
('David Thompson', 'david@innovate.com', 5, 'Amazing E-commerce Solution', 'The e-commerce platform they built for us has increased our sales by 300%. Their technical expertise and business understanding is unmatched.', 'E-commerce', true),
('Lisa Wang', 'lisa@startup.com', 5, 'Perfect Digital Transformation', 'They helped us modernize our entire business process. The team was patient, understanding, and delivered beyond our expectations.', 'Digital Transformation', true);
