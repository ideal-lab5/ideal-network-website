'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Dices, ClipboardClock, Blocks } from 'lucide-react'


const features = [
  {
    icon: Dices,
    title: 'Verifiable Randomness-as-a-Service',
    description: 'Tamper-proof, publicly verifiable randomness powered by Drand. Perfect for lotteries, leader elections, NFT drops, and fair gaming mechanics.',
    details: [
      '• Backed by the Drand Quicknet randomness beacon',
      '• Subscription model with DOT as payment asset',
      '• Fresh verifiable randomness available every 6s',
      '• Ideal for gaming, governance, and DeFi applications'
    ]
  },
  { 
    icon: ClipboardClock , 
    title: 'Timelocked Transactions', 
    description: 'Execute transactions at precise future times with cryptographic guarantees. Enable sealed-bid auctions, eliminate MEV, and enable time-gated game mechanics.',
    details: [
      '• Trustless timelock encryption',
      '• Future-proof coordination without intermediaries',
      '• Predictable, verifiable timing with public randomness powered by Drand.',
      '• Unlocks fair auctions, games, and delayed execution'
    ]
  },
  {
    icon: Blocks,
    title: 'Cross-Chain Integration',
    description: 'Deploy across any parachain or network with minimal changes. Coordinate across ecosystems using XCM without sacrificing security or speed.',
    details: [
      '• XCM-native implementation architecture for parachains',
      '• Lightweight SDK for easy integration',
      '• Minimal integration effort',
      '• Secure, scalable, and ready'
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
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`card cursor-pointer transition-all duration-300 ${selectedFeature === index ? 'border-primary shadow-lg shadow-primary/20' : ''
                    }`}
                  onClick={() => setSelectedFeature(index)}
                >
                  <div className="flex items-start space-x-4">

                    {/* <div className="text-4xl">{feature.icon}</div> */}
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent />
                        {/* <IconComponent className="w-8 h-8 text-primary" /> */}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            }
            )}
          </div>

          {/* Feature Details */}
          <motion.div
            key={selectedFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card"
          >

            {/* <div className="text-5xl mb-6">{features[selectedFeature].icon}</div> */}

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