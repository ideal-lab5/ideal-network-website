'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import '../app/globals.css';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700' 
          : 'bg-slate-900/80 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold gradient-text">
            <Image src="https://github.com/ideal-lab5/logos/blob/main/logo-variants/original-logo.png?raw=true" width={150} height={100} alt="logo"/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#products" className="text-slate-300 hover:text-indigo-400 transition-colors">
              Products
            </Link>
            <Link href="#use-cases" className="text-slate-300 hover:text-indigo-400 transition-colors">
              Use Cases
            </Link>
            <Link href="#developers" className="text-slate-300 hover:text-indigo-400 transition-colors">
              Developers
            </Link>
            <Link href="https://docs.idealabs.network" target='#' className="text-slate-300 hover:text-indigo-400 transition-colors">
              Docs
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/docs/quick-start" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-slate-100 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 bg-slate-100 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-slate-100 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-700 bg-slate-900/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              <Link href="#products" className="block text-slate-300 hover:text-indigo-400 transition-colors">
                Products
              </Link>
              <Link href="#use-cases" className="block text-slate-300 hover:text-indigo-400 transition-colors">
                Use Cases
              </Link>
              <Link href="#developers" className="block text-slate-300 hover:text-indigo-400 transition-colors">
                Developers
              </Link>
              <Link href="https://docs.idealabs.network" target='#' className="block text-slate-300 hover:text-indigo-400 transition-colors">
                Docs
              </Link>
              <Link href="/docs/quick-start" className="btn-primary inline-block">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
