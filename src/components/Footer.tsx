import Image from 'next/image'
import Link from 'next/link'

const footerSections = [
  {
    title: 'Developers',
    links: [
      { label: 'Documentation', href: 'https://docs.idealabs.network' },
      { label: 'Examples', href: 'https://docs.idealabs.network' },
      { label: 'GitHub', href: 'https://github.com/ideal-lab5' },
    ]
  },
  {
    title: 'Network',
    links: [
      { label: 'Explorer [Coming Soon!]', href: 'https://app.idealabs.network' },
    ]
  },
  {
    title: 'Community',
    links: [
      { label: 'Discord', href: 'https://discord.gg/phZvQkzU2a' },
      { label: 'Twitter', href: 'https://x.com/Ideallabs0' },
      { label: 'Blog', href: 'https://ideallabs.substack.com' },
      { label: 'Contact', href: 'mailto:hello@idealabs.network' },
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-border">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold gradient-text mb-4 inline-block">
              <Image src="https://github.com/ideal-lab5/logos/blob/main/logo-variants/original-logo.png?raw=true" width={150} height={100} alt="logo" />
            </Link>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Building the coordination layer for Web3 with verifiable randomness and timelock encryption.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-text-primary mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8 text-center text-text-muted">
          <p>&copy; 2025 Ideal Labs. Building the coordination layer for Web3.</p>
        </div>
      </div>
    </footer>
  )
}