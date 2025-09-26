import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ideal Labs - Cross-Chain Randomness & Timelock for Web3',
  description: 'The coordination layer enabling verifiable randomness and timelocked transactions across any blockchain. Built for protocol developers and Web3 gaming.',
  keywords: 'blockchain, randomness, timelock, web3, gaming, polkadot, drand, VRaaS',
  authors: [{ name: 'Ideal Labs' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}