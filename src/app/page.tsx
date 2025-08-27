'use client'

import Header from '@/src/components/Header'
import Hero from '@/src/components/Hero'
import Features from '@/src/components/Features'
import UseCases from '@/src/components/UseCases'
import Developer from '@/src/components/Developer'
import Footer from '@/src/components/Footer'
import BackgroundAnimation from '@/src/components/BackgroundAnimation'

import './globals.css';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundAnimation />
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <Developer />
      <Footer />
    </main>
  )
}