import React from 'react'
import Link from 'next/link'
import { NAVIGATION, SITE_CONFIG } from '@/app/config/constants'

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-warm-gray-2 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href={NAVIGATION.home.href} className="text-xl font-heading font-bold text-gray-3 hover:text-accent-green transition-colors">
              {SITE_CONFIG.name}
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href={NAVIGATION.home.href} className="text-gray-1 hover:text-accent-green px-3 py-2 rounded-md text-sm font-body font-medium transition-colors">
              {NAVIGATION.home.label}
            </Link>
            <Link href={NAVIGATION.about.href} className="text-gray-1 hover:text-accent-green px-3 py-2 rounded-md text-sm font-body font-medium transition-colors">
              {NAVIGATION.about.label}
            </Link>
            <Link href={NAVIGATION.projects.href} className="text-gray-1 hover:text-accent-green px-3 py-2 rounded-md text-sm font-body font-medium transition-colors">
              {NAVIGATION.projects.label}
            </Link>
            <Link href={NAVIGATION.contact.href} className="text-gray-1 hover:text-accent-green px-3 py-2 rounded-md text-sm font-body font-medium transition-colors">
              {NAVIGATION.contact.label}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-1 hover:text-accent-green p-2 rounded-md transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
