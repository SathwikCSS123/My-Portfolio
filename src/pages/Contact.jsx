import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-800 min-h-screen flex items-center justify-center"
    >
      <motion.div
        className="max-w-xl w-full bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        {/* Social / Contact Icons */}
        <motion.div
          className="flex justify-center gap-8 mb-10 text-indigo-600 dark:text-indigo-400 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.linkedin.com/in/sathwik-paggilla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-800 dark:hover:text-indigo-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SathwikCSS123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-800 dark:hover:text-indigo-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:svkskt4466@gmail.com"
            aria-label="Email"
            className="hover:text-indigo-800 dark:hover:text-indigo-300 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+919440095320"
            aria-label="Phone"
            className="hover:text-indigo-800 dark:hover:text-indigo-300 transition"
          >
            <FaPhone />
          </a>
          <a
            href="https://instagram.com/sathwik._.03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-indigo-800 dark:hover:text-indigo-300 transition"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {submitted && (
          <motion.p
            className="mb-6 text-green-600 dark:text-green-400 text-center font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thank you for your message! I will get back to you soon.
          </motion.p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-500 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}

export default Contact
