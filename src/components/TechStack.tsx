'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const techs = [
  {
    
    category: 'Frontend',
    color: '#f5e642',
    items: ['Next.js', 'React (Basic)', 'Vue', 'Tailwind CSS'],
    icon: '◈',
  },
  {
    category: 'Backend',
    color: '#2563eb',
    textColor: '#fff',
    items: ['Node.js', 'Bun', 'Elysia', 'Express'],
    icon: '◉',
  },
  {
    category: 'Languages',
    color: '#FB923C',
    textColor: '#000000',
    items: ['JavaScript', 'TypeScript', 'Python', 'JAVA'],
    icon: '✦',
  },
  {
    category: 'Database',
    color: '#f472b6',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase'],
    icon: '◆',
  },
  {
    category: 'DevOps',
    color: '#0a0a0a',
    textColor: '#e9e7e1',
    items: ['Docker', 'Git/GitHub', 'Vercel', 'CloudFare'],
    icon: '◎',
  },
  {
    category: 'Tools & AI',
    color: '#22c55e',
    items: ['VS Code', 'Figma', 'Canva', 'AI : ChatGPT, Gemini, Claude'],
    icon: '⬢',
  },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skill" className="py-24 px-6 ">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.div
          ref={ref}
          initial={{ x: -40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          className="mb-16"
        >
          <h2 className="font-display text-6xl md:text-8xl tracking-widest">
            TECH_STACK
          </h2>
          <div className="w-24 h-[3px] bg-black mt-2" />
        </motion.div>

        {/* Grid 3/3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.category}
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {/* ชั้นหลัง (shadow layer) */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-black border-[3px] border-black z-0" />

              {/* กล่องหลัก */}
              <div
                className="relative z-10 border-[3px] border-black p-6 h-full flex flex-col transition-all duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1"
                style={{ backgroundColor: tech.color, color: tech.textColor || '#000' }}
              >
                <div className="text-3xl mb-3">{tech.icon}</div>

                <h3 className="font-display text-2xl tracking-wider mb-4">
                  {tech.category}
                </h3>

                <ul className="space-y-2 font-mono text-sm mt-auto">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-xs opacity-60">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}