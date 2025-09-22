# Supabase Setup Instructions

This website now uses Supabase for real review management instead of fake statistics. Follow these steps to set up your Supabase database.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Enter project details:
   - Name: `midnight-studios-reviews`
   - Database Password: (choose a strong password)
   - Region: (choose closest to your users)
6. Click "Create new project"

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to Settings > API
2. Copy the following values:
   - Project URL
   - Anon public key

## 3. Set Up Environment Variables

1. Create a `.env.local` file in your project root
2. Add the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

## 4. Set Up the Database Schema

1. In your Supabase dashboard, go to the SQL Editor
2. Copy and paste the contents of `supabase-schema.sql`
3. Click "Run" to execute the SQL

This will create:
- A `reviews` table with proper structure
- Row Level Security policies
- Sample data for testing
- Proper indexes for performance

## 5. Configure Row Level Security (RLS)

The schema includes RLS policies that:
- Allow public read access to approved reviews
- Allow public insert for new reviews
- Prevent unauthorized access to unapproved reviews

## 6. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the Reviews page
3. Try submitting a review
4. Check that it appears in your Supabase dashboard
5. Approve the review to see it on the website

## 7. Admin Functions

To manage reviews:
1. Go to your Supabase dashboard
2. Navigate to Table Editor > reviews
3. You can:
   - View all submitted reviews
   - Approve reviews by setting `is_approved` to `true`
   - Edit review content if needed
   - Delete inappropriate reviews

## 8. Customization

You can customize the review system by:
- Modifying the `ReviewStats` component to show different statistics
- Adding more fields to the reviews table
- Implementing email notifications for new reviews
- Adding admin approval workflow

## Security Notes

- The anon key is safe to use in client-side code
- RLS policies ensure only approved reviews are visible
- Email addresses are stored but not displayed publicly
- Consider implementing rate limiting for review submissions

## Troubleshooting

If you encounter issues:
1. Check that your environment variables are set correctly
2. Verify the database schema was created properly
3. Check the Supabase logs for any errors
4. Ensure RLS policies are enabled

For more help, check the [Supabase documentation](https://supabase.com/docs).
