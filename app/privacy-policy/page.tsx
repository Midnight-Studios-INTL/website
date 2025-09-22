'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Container, Title, Text, Box, List, Stack } from '@mantine/core'

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </Title>
            <Text size="lg" ta="center" opacity={0.9}>
              Last updated: {new Date().toLocaleDateString()}
            </Text>
          </Container>
        </Box>

        <Container size="lg" py="80px">
          <Stack gap="xl">
            <Box>
              <Title order={2} mb="md">1. Information We Collect</Title>
              <Text mb="md">
                We collect information you provide directly to us, such as when you:
              </Text>
              <List withPadding>
                <List.Item>Fill out our contact forms</List.Item>
                <List.Item>Subscribe to our newsletter</List.Item>
                <List.Item>Request a quote or consultation</List.Item>
                <List.Item>Communicate with us via email or phone</List.Item>
              </List>
              <Text mt="md">
                This may include your name, email address, phone number, company information, 
                and any other details you choose to provide.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">2. How We Use Your Information</Title>
              <Text mb="md">We use the information we collect to:</Text>
              <List withPadding>
                <List.Item>Provide, maintain, and improve our services</List.Item>
                <List.Item>Process transactions and send related information</List.Item>
                <List.Item>Send technical notices, updates, and support messages</List.Item>
                <List.Item>Respond to your comments and questions</List.Item>
                <List.Item>Send marketing communications (with your consent)</List.Item>
              </List>
            </Box>

            <Box>
              <Title order={2} mb="md">3. Information Sharing</Title>
              <Text>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share your information 
                in the following circumstances:
              </Text>
              <List withPadding mt="md">
                <List.Item>With service providers who assist us in operating our website</List.Item>
                <List.Item>When required by law or to protect our rights</List.Item>
                <List.Item>In connection with a business transfer or acquisition</List.Item>
              </List>
            </Box>

            <Box>
              <Title order={2} mb="md">4. Data Security</Title>
              <Text>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">5. Cookies and Tracking</Title>
              <Text>
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences. Some features may not 
                function properly if cookies are disabled.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">6. Your Rights</Title>
              <Text mb="md">You have the right to:</Text>
              <List withPadding>
                <List.Item>Access and update your personal information</List.Item>
                <List.Item>Request deletion of your personal information</List.Item>
                <List.Item>Opt-out of marketing communications</List.Item>
                <List.Item>Request a copy of your data</List.Item>
              </List>
            </Box>

            <Box>
              <Title order={2} mb="md">7. Contact Us</Title>
              <Text>
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at privacy@midnightstudios.com or through our contact page.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">8. Changes to This Policy</Title>
              <Text>
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </Text>
            </Box>
          </Stack>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
