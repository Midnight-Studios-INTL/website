'use client'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  showTagline?: boolean
  className?: string
}

export default function Logo({ size = 'medium', showTagline = false, className = '' }: LogoProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  }

  const textSizes = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-2xl'
  }

  return (
    <div className={`logo-container ${className}`}>
      <div className={`logo-icon ${sizeClasses[size]}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Circuit Board M */}
          <g className="circuit-m">
            {/* Left side of M - Purple */}
            <path
              d="M20 20 L20 80 L35 65 L35 35 L20 20 Z"
              fill="url(#purpleGradient)"
              className="circuit-trace"
            />
            {/* Right side of M - Teal */}
            <path
              d="M35 35 L50 20 L65 35 L65 65 L80 80 L80 20 L65 35 Z"
              fill="url(#tealGradient)"
              className="circuit-trace"
            />
            {/* Circuit details */}
            <circle cx="25" cy="30" r="2" fill="#fff" opacity="0.8" />
            <circle cx="30" cy="40" r="1.5" fill="#fff" opacity="0.6" />
            <circle cx="40" cy="30" r="1.5" fill="#fff" opacity="0.6" />
            <circle cx="45" cy="40" r="2" fill="#fff" opacity="0.8" />
            <circle cx="55" cy="30" r="1.5" fill="#fff" opacity="0.6" />
            <circle cx="60" cy="40" r="1.5" fill="#fff" opacity="0.6" />
            <circle cx="70" cy="30" r="2" fill="#fff" opacity="0.8" />
            <circle cx="75" cy="40" r="1.5" fill="#fff" opacity="0.6" />
          </g>
          
          {/* Crescent Moon with Star */}
          <g className="moon-star">
            <path
              d="M50 15 A8 8 0 0 1 50 31 A6 6 0 0 0 50 19 Z"
              fill="#fff"
              className="moon"
            />
            <polygon
              points="50,12 52,16 56,16 53,19 54,23 50,21 46,23 47,19 44,16 48,16"
              fill="#fff"
              className="star"
            />
          </g>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#0891B2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {showTagline && (
        <div className={`logo-text ${textSizes[size]}`}>
          <div className="brand-name">
            <span className="midnight-text">MIDNIGHT</span>
            <span className="studio-text">STUDIO</span>
          </div>
          <div className="intl-text">INTL</div>
          <div className="tagline-text">DESIGN. CODING. & ANIMATE.</div>
        </div>
      )}
    </div>
  )
}
