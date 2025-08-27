'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const codeExamples = {
  randomness: `// Get verifiable randomness
import { IdealBeacon } from '@ideal-labs/sdk';

const beacon = new IdealBeacon();

async function getRandomness() {
  const result = await beacon.getLatest();
  return {
    randomness: result.randomness,
    signature: result.signature,
    round: result.round
  };
}

// Use in your game logic
const lootRoll = await getRandomness();
const rarity = determineRarity(lootRoll.randomness);`,
  
  timelock: `// Create timelocked transaction
import { Timelock } from '@ideal-labs/sdk';

async function createSealedBid(bidAmount, revealTime) {
  const timelock = new Timelock();
  
  const encryptedBid = await timelock.encrypt(
    { amount: bidAmount, bidder: address },
    revealTime // Unix timestamp
  );
  
  return await submitToChain(encryptedBid);
}

// Automatically revealed at specified time
const revealedBids = await timelock.getRevealed(auctionId);`,

  integration: `// XCM Cross-chain integration
import { XcmClient } from '@ideal-labs/sdk';

const client = new XcmClient({
  parachain: 'your-parachain-id',
  endpoint: 'wss://your-rpc-endpoint'
});

// Request randomness from another chain
const randomnessRequest = await client.requestRandomness({
  callback: 'your-pallet::random-callback',
  parameters: { gameId: 12345 }
});

// Receive result via XCM message
console.log('Cross-chain randomness:', randomnessRequest.result);`
}

export default function Developer() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>('randomness')

  const tabs = [
    { key: 'randomness' as const, label: 'Randomness', icon: '🎲' },
    { key: 'timelock' as const, label: 'Timelock', icon: '⏰' },
    { key: 'integration' as const, label: 'XCM Integration', icon: '🔗' }
  ]

  return (
    <section id="developers" className="section-padding bg-bg-card/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple Developer Experience</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Integrate verifiable randomness in minutes, not days
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Quick Integration</h3>
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              Get started with our TypeScript SDK or direct XCM calls. Works with any Polkadot 
              parachain and can be extended to other ecosystems.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>TypeScript SDK with full type safety</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>XCM-native for seamless integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Comprehensive documentation & examples</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Active community support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/docs/sdk" className="btn-primary">
                View SDK Docs
              </a>
              <a href="/docs/examples" className="btn-secondary">
                See Examples
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl border border-border overflow-hidden"
          >
            {/* Tab Headers */}
            <div className="flex border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.key
                      ? 'bg-primary/10 text-primary border-b-2 border-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Code Content */}
            <div className="p-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-text-secondary leading-relaxed font-mono">
                  {codeExamples[activeTab]}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary mb-2">{'<1s'}</div>
            <div className="text-text-secondary">Randomness Latency</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
            <div className="text-text-secondary">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">5 min</div>
            <div className="text-text-secondary">Integration Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-text-primary mb-2">24/7</div>
            <div className="text-text-secondary">Developer Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}