'use client'

import { useState, useEffect } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from '@heroui/react'
import Logo from './Logo'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      isBlurred
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo size="medium" showTagline={false} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-1" justify="center">
        <NavbarItem>
          <Button 
            variant="light" 
            color="default"
            size="sm"
            radius="full"
            className="px-4 py-2 min-w-unit-16"
            onClick={() => scrollToSection('hero')}
          >
            Home
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            variant="light" 
            color="default"
            size="sm"
            radius="full"
            className="px-4 py-2 min-w-unit-16"
            onClick={() => scrollToSection('services')}
          >
            Services
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            variant="light" 
            color="default"
            size="sm"
            radius="full"
            className="px-4 py-2 min-w-unit-16"
            onClick={() => scrollToSection('about')}
          >
            About
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            variant="light" 
            color="default"
            size="sm"
            radius="full"
            className="px-4 py-2 min-w-unit-16"
            onClick={() => scrollToSection('who-we-are')}
          >
            Who We Are
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            variant="light" 
            color="default"
            size="sm"
            radius="full"
            className="px-4 py-2 min-w-unit-16"
            onClick={() => scrollToSection('portfolio')}
          >
            Work
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            variant="light" 
            color="default"
            size="sm"
            radius="full"
            className="px-4 py-2 min-w-unit-16"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            color="primary" 
            variant="solid"
            size="sm"
            radius="full"
            className="px-6 py-2 font-semibold"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Button 
            variant="light" 
            color="default"
            size="sm"
            radius="full"
            className="w-full justify-start px-4 py-2"
            onClick={() => scrollToSection('hero')}
          >
            Home
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            variant="light" 
            color="default"
            size="sm"
            radius="full"
            className="w-full justify-start px-4 py-2"
            onClick={() => scrollToSection('services')}
          >
            Services
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            variant="light" 
            color="default"
            size="sm"
            radius="full"
            className="w-full justify-start px-4 py-2"
            onClick={() => scrollToSection('about')}
          >
            About
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            variant="light" 
            color="default"
            size="sm"
            radius="full"
            className="w-full justify-start px-4 py-2"
            onClick={() => scrollToSection('who-we-are')}
          >
            Who We Are
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            variant="light" 
            color="default"
            size="sm"
            radius="full"
            className="w-full justify-start px-4 py-2"
            onClick={() => scrollToSection('portfolio')}
          >
            Work
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            variant="light" 
            color="default"
            size="sm"
            radius="full"
            className="w-full justify-start px-4 py-2"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            color="primary" 
            variant="solid"
            size="sm"
            radius="full"
            className="w-full justify-center px-6 py-2 font-semibold mt-2"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
