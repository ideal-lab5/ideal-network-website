'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { DOCS_URI } from '../app/constants'

const codeExamples = {
  // Parachain Runtime Integration - Verifiable Randomness
  randomness: `// Get verifiable randomness from a Parachain runtime
pub struct PulseConsumerImpl;
impl PulseConsumer<Pulse, SubscriptionId, (), ()> for PulseConsumerImpl {
    fn consume_pulse(pulse: Pulse, sub_id: SubscriptionId) -> Result<(), ()> {
        let pk = hex::decode(BEACON_PUBKEY);
        if pulse
            .authenticate(pk.try_into().expect("The public key is well-defined; qed."))
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
}`,

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
            let random = self.env().extension().fetch_random();
            self.random_value = random;
            random
        }
    }
}`,

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
}`
}

export default function Developer() {
  const [activeTab, setActiveTab] = useState('randomness')

  const tabs = [
    { key: 'randomness', label: 'VRaaS', icon: '🎲' },
    { key: 'timelock', label: 'Timelock', icon: '⏰' },
    { key: 'crossChainInk', label: 'X-Chain ink!', icon: '⛓️' },
    { key: 'nativeInk', label: 'Native ink!', icon: '🦑' }
  ]

  return (
    <section id="developers" className="py-24 bg-gradient-to-b from-slate-900/20 to-slate-800/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Semi-transparent background container */}
        <div className="bg-slate-900/30 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 lg:p-12 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Simple Developer Experience</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
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
              <h3 className="text-2xl font-bold mb-6 text-white">Quick Integration</h3>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Get started with our SDK to integrate verifiable randomness with any Polkadot
                parachain or ink! smart contract, send MEV-resistant transactions,
                or deploy native contracts on the IDN.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-slate-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>TypeScript and Rust SDKs</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>XCM-native for seamless integration</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Comprehensive documentation & examples</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-200">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Open-Source and Extensible</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={DOCS_URI} target='#' className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center">
                  View SDK Docs
                </a>
                <a href={DOCS_URI} target='#' className="border border-slate-600 hover:border-slate-500 text-slate-200 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors text-center">
                  See Examples
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/60 overflow-hidden shadow-xl"
            >
              {/* Tab Headers */}
              <div className="flex border-b border-slate-700/60 bg-slate-800/40">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 ${activeTab === tab.key
                      ? 'bg-blue-600/20 text-blue-400 border-b-2 border-blue-400'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/40'
                      }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
              {/* Code Content */}
              <div className="p-6 bg-slate-900/60">
                <pre className="text-sm overflow-x-auto max-h-160">
                  <code className="text-slate-300 leading-relaxed font-mono whitespace-pre">
                    {codeExamples[activeTab as keyof typeof codeExamples]}
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}