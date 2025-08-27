'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const features = [
  {
    icon: '🎲',
    title: 'Verifiable Randomness-as-a-Service',
    description: 'Tamper-proof, publicly verifiable randomness powered by drand bridge. Perfect for lotteries, leader elections, NFT drops, and Web3 gaming mechanics.',
    details: [
      'Cryptographically secure random beacon',
      'Publicly verifiable signatures',
      'Sub-second latency across chains',
      'Perfect for gaming and DeFi protocols'
    ]
  },
  {
    icon: '⏰',
    title: 'Timelocked Transactions',
    description: 'Execute transactions at precise future times with cryptographic guarantees. Enable sealed-bid auctions, MEV-proof transactions, and time-gated game mechanics.',
    details: [
      'Cryptographic time-release encryption',
      'No central authority required',
      'Precise timing guarantees',
      'Ideal for auctions and fair launches'
    ]
  },
  {
    icon: '🔗',
    title: 'Cross-Chain Integration',
    description: 'Deploy across any parachain or network with minimal changes. Coordinate across ecosystems using XCM without sacrificing security or speed.',
    details: [
      'XCM-native implementation',
      'Multi-chain SDK support',
      'Minimal integration effort',
      'Maintained security guarantees'
    ]
  }
]

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0)

  return (
    <section id="products" className="section-padding bg-bg-card/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Products</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Everything you need for trustless coordination across chains
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card cursor-pointer transition-all duration-300 ${
                  selectedFeature === index ? 'border-primary shadow-lg shadow-primary/20' : ''
                }`}
                onClick={() => setSelectedFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Details */}
          <motion.div
            key={selectedFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div className="text-5xl mb-6">{features[selectedFeature].icon}</div>
            <h3 className="text-2xl font-bold mb-4">{features[selectedFeature].title}</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              {features[selectedFeature].description}
            </p>
            <ul className="space-y-3">
              {features[selectedFeature].details.map((detail, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  <span className="text-text-secondary">{detail}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/docs" className="text-primary font-semibold hover:text-accent transition-colors">
                Learn more →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}