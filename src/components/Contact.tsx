'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'

import emailjs from '@emailjs/browser'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const [loading, setLoading] = useState(false)

  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)

    } catch (err) {
      console.error(err)
      alert('custom toast')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="border-[3px] border-black bg-[#f5e642] shadow-brutal-lg p-8 md:p-12"
        >
          {/* Title */}
          <h2 className="font-display text-5xl md:text-7xl tracking-widest mb-10 text-center">
            contact_me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: contact info */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="font-mono font-bold text-base tracking-widest uppercase border-b-[3px] border-black pb-2">
                Contact Details
              </h3>

              <div className="flex items-start gap-3">
                {/* icon */}
                <div
                  title="Click to copy email"
                  onClick={() => {
                    navigator.clipboard.writeText('rapeeput060448@gmail.com')
                    setCopied(true)
                    setTimeout(() => setCopied(false), 2000)
                  }}
                  className="w-8 h-8 bg-[#2563eb] border-[3px] border-black flex-shrink-0 shadow-brutal-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />
                </div>

                {/* content */}
                <div>
                  <div className="font-mono text-xs text-black/60 mb-0.5">email</div>

                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:rapeeput060448@gmail.com"
                      className="font-mono text-sm font-bold hover:underline"
                    >
                      rapeeput060448@gmail.com
                    </a>

                    {/* 👇 ปุ่ม copy style เดียวกับ icon */}
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('rapeeput060448@gmail.com')
                        setCopied(true)
                        setTimeout(() => setCopied(false), 2000)
                      }}
                      className="px-2 py-0.5 text-[10px] font-mono border-[2px] border-black bg-[#e9e7e1] shadow-brutal-sm  active:translate-y-[1px] transition hover:scale-110 transition-transform"
                    >
                      COPY
                    </button>
                  </div>

                  {/* feedback */}
                  {copied && (
                    <div className="text-green-600 text-xs mt-1 font-mono">
                      ✓ copied!
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#f472b6] border-[3px] border-black flex-shrink-0 shadow-brutal-sm flex items-center justify-center hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={faLocationDot} className="text-black text-sm" />
                </div>
                <div>
                  <div className="font-mono text-xs text-black/60 mb-0.5">location</div>
                  <p className="font-mono text-sm font-bold">Phayao, Nakhon Sawan, TH</p>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h3 className="font-mono font-bold text-base tracking-widest uppercase border-b-[3px] border-black pb-2 mb-4">
                  Socials
                </h3>

                <div className="flex gap-3">
                  
                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/JIGS4W"
                    target="_blank"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 border-[3px] border-black flex items-center justify-center shadow-brutal-sm bg-[#e9e7e1]"
                  >
                    <FaGithub size={18} />
                  </motion.a>

                  {/* Facebook */}
                  <motion.a
                    href="https://www.facebook.com/rapeeputsrisakda.0648"
                    target="_blank"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 border-[3px] border-black flex items-center justify-center shadow-brutal-sm bg-[#1877f2] text-white"
                  >
                    <FaFacebook size={18} />
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href="https://www.instagram.com/mm_depp/"
                    target="_blank"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 border-[3px] border-black flex items-center justify-center shadow-brutal-sm bg-[#f472b6]"
                  >
                    <FaInstagram size={18} />
                  </motion.a>

                </div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.form
              initial={{ x: 30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full border-[3px] border-black bg-white px-4 py-3 font-mono text-sm placeholder:text-black/40 focus:outline-none focus:shadow-brutal transition-shadow"
              />
              <input
                type="email"
                placeholder="mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full border-[3px] border-black bg-white px-4 py-3 font-mono text-sm placeholder:text-black/40 focus:outline-none focus:shadow-brutal transition-shadow"
              />
              <textarea
                placeholder="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full border-[3px] border-black bg-white px-4 py-3 font-mono text-sm placeholder:text-black/40 focus:outline-none focus:shadow-brutal transition-shadow resize-none"
              />

              <motion.button
                type="submit"
                disabled={loading} // 👈 กันกดซ้ำ
                whileHover={{ x: -3, y: -3, boxShadow: '9px 9px 0px #0a0a0a' }}
                whileTap={{ scale: 0.97 }}
                className={`w-full font-mono font-bold py-3 border-[3px] border-black shadow-brutal tracking-widest uppercase text-sm transition-all
                ${loading ? 'bg-gray-400' : submitted ? 'bg-green-500' : 'bg-[#2563eb] text-white'}`}
              >
                {/* {submitted ? '✓ Message Sent!' : 'send message'} */}
                {loading ? 'Sending...' : submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center font-mono text-xs text-black/40 mt-12"
        >
          © 2026 JIGS4W — designed &amp; built with care
        </motion.p>
      </div>
    </section>
  )
}
