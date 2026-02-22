'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: 'Cafe POS System',
    description: 'Cafe POS is a web-based point of sale system designed with a modern UI. It supports two main functionalities: a self-ordering system for customers and an admin dashboard for store management.',
    tech: ['Vue.js', 'Elysia', 'Cloudflare Workers', 'SQLite', 'Vercel'],
    // bg: '#f5e642',
    image: '/images/web_1.png', // ✅ เพิ่มตรงนี้
    live: 'https://cafepos-system.vercel.app/',
    source: 'https://github.com/JIGS4W/cafe-pos-system',
  },
  {
    name: 'task_manager',
    description: 'Real-time collaborative task management app with drag-and-drop boards.',
    tech: ['React', 'Node.js', 'Socket.io'],
    bg: '#2563eb',
    image: '',
    textColor: '#fff',
    live: '#',
    source: '#',
  },
  {
    name: 'ai_chatbot',
    description: 'AI-powered chatbot with streaming responses and conversation history.',
    tech: ['Next.js', 'OpenAI', 'PostgreSQL'],
    bg: '#f472b6',
    live: '#',
    source: '#',
  },
  {
    name: 'weather_dashboard',
    description: 'Beautiful weather dashboard with animated charts and location-based data.',
    tech: ['React', 'FastAPI', 'Redis'],
    bg: '#e9e7e1',
    live: '#',
    source: '#',
  },
]

export default function Work() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length)
  const next = () => setCurrent((c) => (c + 1) % projects.length)

  const project = projects[current]

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-6xl md:text-8xl tracking-widest">WORK</h2>
          <div className="w-16 h-[3px] bg-black mt-2" />
        </motion.div>

        {/* Project carousel */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-4 md:gap-8"
        >
          {/* Prev arrow */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-10 h-10 border-[3px] border-black bg-[#e9e7e1] shadow-brutal-sm font-bold flex items-center justify-center hover-lift text-xl"
          >
            ◁
          </button>

          {/* Card */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 border-[3px] border-black shadow-brutal-lg overflow-hidden"
          >
          {/* Image area */}
          <div
            className="h-52 md:h-64 relative flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: project.bg || '#e9e7e1' }}
          >
            {project.image ? (
              <>
                {/* รูป */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/20" />
              </>
            ) : (
              <>
                {/* fallback: ตัวอักษร */}
                <span
                  className="font-display text-4xl md:text-6xl tracking-widest opacity-20"
                  style={{ color: project.textColor || '#0a0a0a' }}
                >
                  {project.name.toUpperCase().slice(0, 2)}
                </span>
              </>
            )}

            {/* Corner number (มีอันเดียวพอ!) */}
            <div className="absolute top-3 left-3 font-mono text-xs border-[2px] border-black bg-white px-2 py-0.5 shadow-brutal-sm z-10">
              {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </div>
          </div>

            {/* Info area */}
            <div className="bg-[#2d2d2d] text-white p-6">
              <h3 className="font-mono font-bold text-lg mb-2">{project.name}</h3>
              <p className="font-mono text-xs text-white/60 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex gap-2 flex-wrap mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="relative font-mono text-xs border-[2px] border-white/40 px-2 py-0.5 text-white/80
                              transition-all duration-300
                              after:content-[''] after:absolute after:left-0 after:bottom-0
                              after:w-0 after:h-[2px] after:bg-white
                              after:transition-all after:duration-300
                              hover:after:w-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="border-t border-white/20 pt-3 flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-white/60 hover:text-white hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  live
                </a>
                
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-white/60 hover:text-white hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  source
                </a>
              </div>
            </div>
          </motion.div>

          {/* Next arrow */}
          <button
            onClick={next}
            className="flex-shrink-0 w-10 h-10 border-[3px] border-black bg-[#e9e7e1] shadow-brutal-sm font-bold flex items-center justify-center hover-lift text-xl"
          >
            ▷
          </button>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 border-[2px] border-black transition-colors ${
                i === current ? 'bg-black' : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
