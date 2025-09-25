'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

// Sample team data - replace with your actual team information
const teamMembers = [
  {
    name: "Carlos Montoya",
    role: "",
    bio: "",
    image: "/carlos.jpg",
    linkedin: "https://www.linkedin.com/in/cmonvel/",
    github: "https://github.com/carloskiron"
  },
  {
    name: "Juan Girini",
    role: "", 
    bio: "",
    image: "/juan.jpg", // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/juan-girini/",
    github: "https://github.com/juangirini"
  },
  {
    name: "Tony Riemer",
    role: "",
    bio: "",
    image: "./tony.jpg",
    linkedin: "https://www.linkedin.com/in/tony-riemer/",
    github: "https://github.com/driemworks"
  },
  {
    name: "Coleman Irby",
    role: "",
    bio: "",
    image: "./coleman.jpg",
    linkedin: "https://www.linkedin.com/in/coleman-irby-229b13103/",
    github: "https://github.com/colemanirby"
  }
]

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <section id="team" className="section-padding bg-bg-card/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Core Team</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              className="bg-gray-900/50 rounded-xl border border-border p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Profile Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium mb-4">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-4">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  )
}