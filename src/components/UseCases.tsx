'use client'

import { motion } from 'framer-motion'

const useCases = [
  {
    icon: '🎮',
    title: 'Web3 Gaming',
    description: 'Fair loot drops, matchmaking, tournaments, and automated procedural generation',
    examples: ['Turn-based strategy games', 'NFT battle mechanics', 'Tournament brackets', 'Loot box fairness', 'Unique Identifiers']
  },
  {
    icon: '🏛️',
    title: 'DAO Governance',
    description: 'Leader elections, proposal voting, and fair governance mechanisms',
    examples: ['Committee selection', 'Voting randomization', 'Proposal ordering', 'Fair representation', 'Leader Elections']
  },
  {
    icon: '💰',
    title: 'DeFi Protocols',
    description: 'Sealed-bid auctions, lottery protocols, and MEV-resistant transactions',
    examples: ['Candle auctions', 'Liquidation fairness', 'Yield farming lottery', 'MEV protection']
  },
  {
    icon: '🎨',
    title: 'NFT Projects',
    description: 'Fair drops, reveal mechanics, and randomized trait generation',
    examples: ['Fair mint queues', 'Trait randomization', 'Reveal mechanics', 'Airdrop selection']
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Web3 Gaming & DeFi</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Real-world applications powered by verifiable randomness and precise timing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center group"
            >
              <div className="text-5xl mb-6 group-hover:animate-bounce">{useCase.icon}</div>
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
          ))}
        </div>
      </div>
    </section>
  )
}
