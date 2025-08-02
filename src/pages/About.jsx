import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-gray-900"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          I’m Sathwik Paggilla, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I currently serve as Chairperson of IEEE (SSIT) and Secretary of the Robotics Club at Geethanjali College.
        </p>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 text-justify">
          With certifications like AWS Cloud Practitioner and PCEP, I bring hands-on experience from internships at Cantilever Labs (AI/ML projects) and Growthmate Infotech (Frontend Development). I’m skilled in Python, C, JavaScript, and technologies like HTML, CSS, SQL, MongoDB, AWS, and Power BI.
        </p>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 text-justify">
          Passionate about leadership, innovation, and problem-solving, I actively engage in organizing events, mentoring peers, and building impactful tech solutions.
        </p>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 text-justify">
          Outside of academics and work, I have been actively involved in extracurriculars such as organizing workshops and events, mentoring peers, and continuously enhancing my skills in cloud computing and AI domains.
        </p>
      </motion.div>
    </section>
  )
}

export default About
