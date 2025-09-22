import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Container, Title, Text, Box, Stack, Alert } from '@mantine/core'
import { IconAlertTriangle } from '@tabler/icons-react'

export default function DisclaimerPage() {
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
              Disclaimer
            </Title>
            <Text size="lg" ta="center" opacity={0.9}>
              Important information about our services and limitations
            </Text>
          </Container>
        </Box>

        <Container size="lg" py="80px">
          <Stack gap="xl">
            <Alert
              icon={<IconAlertTriangle size="1rem" />}
              title="Important Notice"
              color="yellow"
              variant="light"
            >
              Please read this disclaimer carefully before using our services. By engaging with our 
              services, you acknowledge that you have read and understood this disclaimer.
            </Alert>

            <Box>
              <Title order={2} mb="md">1. Service Information</Title>
              <Text>
                The information provided on this website and through our services is for general 
                informational purposes only. While we strive to provide accurate and up-to-date 
                information, we make no representations or warranties of any kind, express or implied, 
                about the completeness, accuracy, reliability, suitability, or availability of the 
                information, products, services, or related graphics contained on this website.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">2. Professional Advice</Title>
              <Text>
                Our services are not intended to replace professional advice. Any information provided 
                should not be considered as professional, legal, financial, or technical advice. 
                We recommend consulting with qualified professionals for specific advice related to 
                your particular situation.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">3. Project Outcomes</Title>
              <Text>
                While we strive to deliver high-quality results, we cannot guarantee specific outcomes 
                or results from our services. Project success depends on various factors including 
                client cooperation, market conditions, and external factors beyond our control. 
                Results may vary based on individual circumstances.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">4. Third-Party Services</Title>
              <Text>
                Our services may involve third-party platforms, tools, or services. We are not 
                responsible for the availability, functionality, or terms of service of these 
                third-party services. Any issues arising from third-party services are the 
                responsibility of the respective service providers.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">5. Limitation of Liability</Title>
              <Text>
                To the fullest extent permitted by law, Midnight Studios shall not be liable for any 
                direct, indirect, incidental, special, consequential, or punitive damages, including 
                but not limited to loss of profits, data, or business opportunities, arising from 
                or in connection with our services.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">6. Intellectual Property</Title>
              <Text>
                All intellectual property rights in our services, including but not limited to 
                copyrights, trademarks, and trade secrets, remain our property. Clients retain 
                rights to work products created specifically for them, subject to the terms of 
                our service agreements.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">7. Confidentiality</Title>
              <Text>
                We maintain strict confidentiality regarding client information and projects. 
                However, we reserve the right to use anonymized project information for 
                portfolio purposes and marketing materials, unless otherwise specified in 
                our service agreements.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">8. Force Majeure</Title>
              <Text>
                We shall not be liable for any failure or delay in performance due to circumstances 
                beyond our reasonable control, including but not limited to acts of God, natural 
                disasters, war, terrorism, labor disputes, or government actions.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">9. Changes to Services</Title>
              <Text>
                We reserve the right to modify, suspend, or discontinue any part of our services 
                at any time without prior notice. We shall not be liable for any consequences 
                resulting from such changes.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">10. Governing Law</Title>
              <Text>
                This disclaimer shall be governed by and construed in accordance with applicable 
                laws. Any disputes arising from this disclaimer or our services shall be subject 
                to the exclusive jurisdiction of the courts in our jurisdiction.
              </Text>
            </Box>

            <Box>
              <Title order={2} mb="md">11. Contact Information</Title>
              <Text>
                If you have any questions about this disclaimer, please contact us at 
                legal@midnightstudios.com or through our contact page.
              </Text>
            </Box>
          </Stack>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
