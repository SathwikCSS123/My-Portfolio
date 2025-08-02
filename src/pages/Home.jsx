
// src/pages/Home.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-100 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm{' '}
          <span className="text-indigo-600 dark:text-indigo-400">Sathwik Paggilla</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 max-w-xl mx-auto"
        >
          I'm an AI/ML enthusiast passionate about leadership, innovation, and building impactful tech solutions. I actively engage in organizing workshops, mentoring peers, and driving collaborative projects beyond the classroom.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition"
          >
            Contact Me
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full flex items-center gap-2 hover:bg-indigo-100 dark:hover:bg-gray-800 transition"
          >
            <FaDownload /> Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home