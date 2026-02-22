'use client'

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// const text = "Design and build modern web applications with clean UI, smooth UX, and scalable backend systems.";


export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden"
    >
      {/* Decorative shapes */}
      {/* สีฟ้า */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
        className="absolute left-[10%] top-1/3 w-20 h-20 bg-[#2563eb] border-[3px] border-black shadow-brutal hidden md:block"
      />
      {/* สีชมพู */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
        className="absolute right-[10%] top-1/3 w-20 h-20 rounded-full bg-[#f472b6] border-[3px] border-black shadow-brutal hidden md:block"
      />
      {/* สีเหลือง */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4, type: 'spring' }}
        className="absolute right-[10%] bottom-1/4 w-14 h-14 bg-[#f472b6] border-[3px]  border-black shadow-brutal hidden md:block "
        style={{ transform: 'rotate(45deg)' }}
      />

      {/* Badge */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="border-brutal px-4 py-2 bg-white shadow-brutal-sm font-mono text-sm font-bold mb-6"
      >
        HI, I'm rapeeput srisakda
      </motion.div>

      {/* Main title */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="text-center mb-6"
      >
        <h1 className="font-display leading-none tracking-wider">
          <span
            className="block text-[clamp(5rem,14vw,11rem)] text-black font-black"
            style={{ letterSpacing: '0.02em' }}
          >
            FULL STACK
          </span>
          <span
            className="block text-[clamp(4.5rem,12vw,9.5rem)] text-outline"
            style={{ letterSpacing: '0.02em', WebkitTextStroke: '3px #0a0a0a', color: '#e9e7e1' }}
          >
            DEVELOPER
          </span>
        </h1>
      </motion.div>

      {/* Yellow highlight bar + Text */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4, type: 'spring' }}
        className="w-full max-w-lg min-h-[56px] bg-[#f5e642] border-[3px] border-black shadow-brutal mb-8 flex items-center px-4"
      >
        {/* <motion.p className="font-mono text-xs font-bold text-black flex flex-wrap leading-tight"> */}
        <motion.p className="font-mono text-xs md:text-sm text-black text-center leading-tight">
          {"Design and build modern web applications with clean UI, smooth UX, and scalable backend systems."
            .split("")
            .map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.02 * i }}
              >
                {char}
              </motion.span>
            ))}
        </motion.p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <motion.a
          href="https://github.com/JIGS4W " target="_blank" rel="noopener noreferrer"
          whileHover={{ x: -3, y: -3, boxShadow: '9px 9px 0px #0a0a0a', backgroundColor: '#111' }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 font-mono font-bold px-8 py-3 bg-black text-[#e9e7e1] border-[3px] border-black shadow-brutal text-sm tracking-widest uppercase transition-all"
        >
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </motion.a>
        <motion.a
          href="#work"
          whileHover={{ x: -3, y: -3, boxShadow: '9px 9px 0px #0a0a0a' }}
          whileTap={{ scale: 0.97 }}
          className="font-mono font-bold px-8 py-3 bg-white text-black border-[3px] border-black shadow-brutal text-sm tracking-widest uppercase transition-all"
        >
          View Work
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          className="w-0.5 h-8 bg-black"
        />
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
      </motion.div>
    </section>
  )
}
