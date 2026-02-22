'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = ['about', 'skill', 'work', 'contact']

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#e9e7e1] border-b-[3px] border-black"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-mono font-bold text-lg border-brutal px-3 py-1 shadow-brutal-sm bg-white hover-lift inline-block"
        >
          &lt;RP /&gt;
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center border-brutal px-4 py-2 gap-1 shadow-brutal-sm bg-white">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="font-mono text-sm font-bold px-3 py-1 hover:bg-black hover:text-[#e9e7e1] transition-colors duration-150"
            >
              {link}/
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden font-mono font-bold border-brutal px-3 py-1 shadow-brutal-sm bg-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t-[3px] border-black bg-[#e9e7e1]"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="block font-mono font-bold px-6 py-3 border-b-2 border-black hover:bg-black hover:text-[#e9e7e1] transition-colors"
            >
              {link}/
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
