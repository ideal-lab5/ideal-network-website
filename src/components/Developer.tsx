'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const codeExamples = {
  // Parachain Runtime Integration - Verifiable Randomness
  randomness: `// Get verifiable randomness from a Parachain runtime
pub struct PulseConsumerImpl;
impl PulseConsumer<Pulse, SubscriptionId, (), ()> for PulseConsumerImpl {
    fn consume_pulse(pulse: Pulse, sub_id: SubscriptionId) -> Result<(), ()> {
        if pulse
            .authenticate(BEACON_PUBKEY.try_into().expect("The public key is well-defined; qed."))
        {
            // Randomness consumption logic goes here.
            log::info!("IDN Consumer: Verified pulse: {:?} with sub id: {:?}", pulse, sub_id);
        } else {
            // This should never happen.
            // If it does, you should immediately pause your subscription and contact Ideal Labs.
            log::error!(
                "IDN Consumer: Unverified pulse ingested: {:?} with sub id: {:?}",
                pulse,
                sub_id
            );
        }

        Ok(())
    }
}`,

  // Cross-chain ink! Smart Contracts
  crossChainInk: `// Cross-chain ink! Smart Contract Integration
use idn_client_contract_lib::{
    ContractPulse, IdnClient, IdnClientImpl, RandomnessReceiver, 
    SubscriptionId, Result, Error
};
use idn_client_contract_lib::Pulse;

// Implement the RandomnessReceiver trait to handle incoming randomness
impl RandomnessReceiver for YourContract {
    fn on_randomness_received(
        &mut self, 
        pulse: ContractPulse,
        subscription_id: SubscriptionId
    ) -> Result<()> {
        let randomness = pulse.rand();
        // Your randomness consumption logic here
        Ok(())
    }
}

// Add to Cargo.toml:
// [dependencies]
// idn-client-contract-lib = { version = "0.1.0", default-features = false }`,

  // Native ink! Smart Contracts on IDN
  nativeInk: `// Native ink! Smart Contracts on the Ideal Network
use idn_contract_lib::ext::IDNEnvironment;

#[ink::contract(env = IDNEnvironment)]
pub mod MyContract {
    use crate::IDNEnvironment;
    
    #[ink(storage)]
    pub struct MyContract {
        random_value: u64,
    }
    
    impl MyContract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self { random_value: 0 }
        }
        
        #[ink(message)]
        pub fn get_random(&mut self) -> u64 {
            // Fetch the latest random value from the runtime
            let random = self.env().extension().random();
            self.random_value = random;
            random
        }
    }
}

// Add to Cargo.toml:
// [dependencies]
// idn-contract-lib = { version = "0.1.0", default-features = false }`,

  // Timelock Encryption for Frontend
  timelock: `// Frontend Timelock Transactions with etf.js
import { etf } from '@ideallabs/etf.js';

async function createTimelockTransaction() {
  // Schedule for round number 123123123123
  const executionRound = 123123123123;
  
  // Encrypt the transaction with a secret seed
  let secretSeed = new TextEncoder().encode('my-secret-seed');
  const delayedTx = await etf.delay(innerCall, executionRound, secretSeed);
  
  // zeroize your seed!
  secretSeed.fill(0);
  
  // Sign and submit the delayed transaction (using @polkadotjs/api)
  await delayedTx.signAndSend(alice, (result) => {
    if (result.status.isInBlock) {
      console.log(\`Delayed transaction submitted in block \${result.status.asInBlock}\`);
    }
  });
  `
}

export default function Developer() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>('randomness')

  const tabs = [
    { key: 'randomness' as const, label: 'VRaaS', icon: '🎲' },
    { key: 'timelock' as const, label: 'Timelock', icon: '⏰' },
    { key: 'crossChainInk' as const, label: 'X-Chain ink!', icon: '🔗' },
    { key: 'nativeInk' as const, label: 'Native ink!', icon: '🔗' }
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
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === tab.key
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
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  )
}