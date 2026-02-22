'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip, faCode, faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto"> 
        <motion.div
          ref={ref}
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="border-[3px] border-black bg-white shadow-brutal-lg p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Image placeholder */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative flex-shrink-0 w-full md:w-56 h-64"
            >
              {/* 🧱 กรอบหลังสุด */}
              <div className="absolute inset-0 border-[3px] border-black bg-[#e9e7e1] shadow-brutal" />

              {/* 🖼️ รูปภาพ */}
              <img
                src="/images/mm_5.jpg"
                alt="profile"
                className="absolute inset-0 w-full h-full object-cover border-[3px] border-black shadow-brutal-sm hover-lift"
              />

              {/* 🟨 กล่องเหลือง (หน้าสุด) */}
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#f5e642] border-t-[3px] border-l-[3px] border-black hover-lift" />
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <motion.h2
                initial={{ x: 30, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-display text-5xl md:text-6xl tracking-wider mb-2"
              >
                WHO AM I?
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.45 }}
                className="space-y-2 font-mono text-sm leading-relaxed"
              >
                <p className="text-black/80">
                  Hi! I'm <strong>Rapeeput Srisakda</strong>, a second-year Software Engineering student based in Phayao, Thailand. 
                  I'm passionate about full-stack development and building modern web applications.
                </p>
                <p className="text-black/80">
                  I enjoy creating clean, user-friendly interfaces and developing 
                  scalable backend systems, while continuously learning new technologies.
                </p>
              </motion.div>

              {/* Info Boxes */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.55 }}
                className="flex gap-4 mt-8 flex-wrap"
              >
                {[
                  {
                    text: 'SE Student @ University of Phayao (67)',
                    color: 'bg-[#60a5fa]', // ฟ้า
                    icon: faGlobe,
                  },
                  {
                    text: 'Web App Developer',
                    color: 'bg-[#f472b6]', // ม่วง
                    icon: faCode,
                  },
                  {
                    text: 'AI & Machine Learning Enthusiast',
                    color: 'bg-[#4ade80]', // เขียว
                    icon: faMicrochip,
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className={`flex items-center gap-2 border-[3px] border-black px-4 py-2 ${item.color} shadow-brutal-sm hover-lift`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-black text-sm" />
                    
                    <div className="font-mono text-xs text-black">
                      {item.text}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.65 }}
                className="flex gap-3 mt-6"
              >
                <a
                  href="https://drive.google.com/file/d/1PnNDh2n7JaVLlzmAaEOitLCT16Nhj6zg/view?usp=sharing"
                  className="font-mono text-xs font-bold px-4 py-2 bg-black text-[#e9e7e1] border-[3px] border-black shadow-brutal-sm hover-lift"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="font-mono text-xs font-bold px-4 py-2 bg-[#f5e642] border-[3px] border-black shadow-brutal-sm hover-lift"
                >
                  Hire Me
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
