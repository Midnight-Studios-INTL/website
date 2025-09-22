'use client'

import { useState, useEffect } from 'react'
import { Burger, Group, Button, Container, Stack, Drawer, ScrollArea, Box } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useRouter, usePathname } from 'next/navigation'
import Logo from './Logo'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [opened, { toggle, close }] = useDisclosure(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateToPage = (path: string) => {
    router.push(path)
    close()
  }

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Who We Are', path: '/who-we-are' },
    { label: 'Work', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' },
  ]

  return (
    <Box
      component="header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        height: '70px',
      }}
    >
      <Container size="xl" h="100%">
        <Group justify="space-between" h="100%">
          {/* Logo */}
          <Logo size="medium" showTagline={false} />

          {/* Desktop Navigation */}
          <Group gap="md" visibleFrom="sm">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="subtle"
                color="gray"
                size="sm"
                radius="xl"
                onClick={() => navigateToPage(item.path)}
                style={{
                  color: 'white',
                  fontWeight: 500,
                  backgroundColor: pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              color="red"
              size="sm"
              radius="xl"
              onClick={() => navigateToPage('/contact')}
              style={{
                fontWeight: 600,
              }}
            >
              Get Started
            </Button>
          </Group>

          {/* Mobile Menu Button */}
          <Burger
            opened={opened}
            onClick={toggle}
            color="white"
            size="sm"
            hiddenFrom="sm"
          />
        </Group>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="sm"
        styles={{
          content: {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
          },
          header: {
            backgroundColor: 'transparent',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <ScrollArea h="100%">
          <Stack gap="md" p="md">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="subtle"
                color="gray"
                size="lg"
                radius="xl"
                onClick={() => navigateToPage(item.path)}
                style={{
                  color: 'white',
                  fontWeight: 500,
                  justifyContent: 'flex-start',
                  backgroundColor: pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              color="red"
              size="lg"
              radius="xl"
              onClick={() => navigateToPage('/contact')}
              style={{
                fontWeight: 600,
                marginTop: '1rem',
              }}
            >
              Get Started
            </Button>
          </Stack>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}