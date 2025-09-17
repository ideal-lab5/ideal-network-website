'use client'

import { motion } from 'framer-motion'
import { Gamepad2, Building2, DollarSign, Palette } from 'lucide-react'

const useCases = [
  {
    icon: Gamepad2,
    title: 'Web3 Gaming',
    description: 'Enables fair loot drops, transparent matchmaking, and the creation of unique digital assets for games.',
    examples: ['Fair loot drops', 'Proactive Anti-Cheat Mechanisms', 'Unruggable Asset Swaps', 'Procedural generation of unique worlds or items']
  },
  {
    icon: Building2,
    title: 'DAO Governance',
    description: 'Brings verifiable fairness and transparency to decentralized autonomous organizations (DAOs).',
    examples: ['Committee selection', 'Randomized voting', 'Proposal ordering', 'Fair representation in governance']
  },
  {
    icon: DollarSign,
    title: 'DeFi Protocols',
    description: 'Creates a foundation for more transparent and secure decentralized financial applications.',
    examples: ['On-chain candle auctions', 'Fair liquidations', 'MEV-resistant trades', 'Lottery protocols']
  },
  {
    icon: Palette,
    title: 'NFT Projects',
    description: 'Ensures fairness in asset distribution and provides tools for verifiable, on-chain trait generation.',
    examples: ['Fair mint queues', 'Verifiable trait randomization', 'Transparent reveal mechanics', 'Airdrop selection']
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Fairness</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Stop front-running, ensure provably fair outcomes, and enable secure conditional execution for all dApps.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-text-secondary mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div
                      key={exampleIndex}
                      className="text-sm text-text-muted bg-bg-dark/50 px-3 py-2 rounded-md"
                    >
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
