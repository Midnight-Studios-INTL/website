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
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      maxWidth="xl"
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

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button 
            variant="light" 
            className="nav-link"
            onClick={() => scrollToSection('hero')}
          >
            Home
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            variant="light" 
            className="nav-link"
            onClick={() => scrollToSection('services')}
          >
            Services
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            variant="light" 
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            variant="light" 
            className="nav-link"
            onClick={() => scrollToSection('who-we-are')}
          >
            Who We Are
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            variant="light" 
            className="nav-link"
            onClick={() => scrollToSection('portfolio')}
          >
            Work
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            variant="light" 
            className="nav-link"
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
            className="btn btn-primary"
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
            className="nav-link w-full justify-start"
            onClick={() => scrollToSection('hero')}
          >
            Home
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            variant="light" 
            className="nav-link w-full justify-start"
            onClick={() => scrollToSection('services')}
          >
            Services
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            variant="light" 
            className="nav-link w-full justify-start"
            onClick={() => scrollToSection('about')}
          >
            About
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            variant="light" 
            className="nav-link w-full justify-start"
            onClick={() => scrollToSection('who-we-are')}
          >
            Who We Are
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            variant="light" 
            className="nav-link w-full justify-start"
            onClick={() => scrollToSection('portfolio')}
          >
            Work
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            variant="light" 
            className="nav-link w-full justify-start"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
