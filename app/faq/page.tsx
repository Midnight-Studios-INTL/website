import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Container, Title, Text, Accordion, Box } from '@mantine/core'

export default function FAQPage() {
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
              Frequently Asked Questions
            </Title>
            <Text size="lg" ta="center" opacity={0.9}>
              Find answers to common questions about our services
            </Text>
          </Container>
        </Box>

        <Container size="lg" py="80px">
          <Accordion variant="separated" radius="md">
            <Accordion.Item value="what-services">
              <Accordion.Control>
                <Text fw={600} size="lg">What services do you offer?</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We offer a comprehensive range of digital services including web development, 
                  mobile app development, UI/UX design, digital marketing, and consulting services. 
                  Our team specializes in creating modern, responsive solutions tailored to your business needs.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="how-long">
              <Accordion.Control>
                <Text fw={600} size="lg">How long does a typical project take?</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Project timelines vary depending on complexity and scope. A simple website typically 
                  takes 2-4 weeks, while complex applications can take 2-6 months. We provide detailed 
                  timelines during our initial consultation and keep you updated throughout the process.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="pricing">
              <Accordion.Control>
                <Text fw={600} size="lg">What are your pricing models?</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We offer flexible pricing options including fixed-price projects, hourly rates, 
                  and retainer agreements. Pricing depends on project scope, complexity, and timeline. 
                  Contact us for a personalized quote based on your specific requirements.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="support">
              <Accordion.Control>
                <Text fw={600} size="lg">Do you provide ongoing support?</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Yes, we offer comprehensive support and maintenance packages. This includes 
                  regular updates, security patches, performance monitoring, and technical support. 
                  We also provide training for your team to manage the solution effectively.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="process">
              <Accordion.Control>
                <Text fw={600} size="lg">What is your development process?</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  Our process follows industry best practices: Discovery & Planning, Design & Prototyping, 
                  Development & Testing, Deployment, and Ongoing Support. We maintain regular communication 
                  and provide progress updates at each stage of the project.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="technologies">
              <Accordion.Control>
                <Text fw={600} size="lg">What technologies do you use?</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>
                  We work with modern technologies including React, Next.js, Node.js, Python, 
                  mobile frameworks like React Native, cloud platforms like AWS and Vercel, 
                  and various databases. We choose the best technology stack for each project's specific needs.
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
