'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Cross-Chain</span>
            <br />
            <span className="text-slate-100">Randomness & Timelock</span>
            <br />
            <span className="text-cyan-400">for Web3</span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The coordination layer enabling verifiable randomness and timelocked transactions 
            across any blockchain. Built for protocol developers and Web3 gaming.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/docs/quick-start" className="btn-primary text-lg px-8 py-4">
              Start Building
            </Link>
            <Link href="/docs" className="btn-secondary text-lg px-8 py-4">
              View Documentation
            </Link>
          </motion.div>

          <motion.div
            className="mt-16 text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="mb-4">Live on Paseo Testnet • Polkadot Ecosystem</p>
            <div className="flex justify-center space-x-8 text-sm">
              <span>✓ Drand Bridge</span>
              <span>✓ XCM Compatible</span>
              <span>✓ Developer Ready</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}