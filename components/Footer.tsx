'use client'

import Logo from './Logo'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter()

  const navigateToPage = (path: string) => {
    router.push(path)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Logo size="medium" showTagline={true} />
            <p>Where code meets creativity. Building custom iOS/Android apps, FiveM servers, and bespoke software solutions.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => navigateToPage('/')}>Home</a></li>
              <li><a onClick={() => navigateToPage('/about')}>About</a></li>
              <li><a onClick={() => navigateToPage('/services')}>Services</a></li>
              <li><a onClick={() => navigateToPage('/portfolio')}>Portfolio</a></li>
              <li><a onClick={() => navigateToPage('/reviews')}>Reviews</a></li>
              <li><a onClick={() => navigateToPage('/contact')}>Contact</a></li>
              <li><a onClick={() => navigateToPage('/faq')}>FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a onClick={() => navigateToPage('/privacy-policy')}>Privacy Policy</a></li>
              <li><a onClick={() => navigateToPage('/disclaimer')}>Disclaimer</a></li>
              <li><a onClick={() => navigateToPage('/contact-us')}>Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p><i className="fas fa-phone"></i> +1 (555) CODE-123</p>
            <p><i className="fas fa-envelope"></i> hello@midnightstudiosintl.com</p>
            <p><i className="fas fa-globe"></i> Global Development</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Midnight Studios INTL. All rights reserved. | Custom development solutions for iOS, Android, FiveM, and beyond.</p>
        </div>
      </div>
    </footer>
  )
}
