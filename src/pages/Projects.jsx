import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Spam Mail Detection Using Naïve Bayes',
    description: 'A classification system using Bayesian networks to detect spam and ham emails. Implements the Naïve Bayes algorithm to classify emails accurately.',
    github: 'https://github.com/SathwikCSS123/SpamMailDetection.git',
    demo: '',
  },
  {
    title: 'CreditCardFraudDetection',
    description: 'This project develops a Logistic Regression model to detect fraudulent credit card transactions. Data preprocessing, EDA, and imbalance handling improve accuracy. Logistic Regression is chosen for its simplicity in binary classification. Emphasis on model coefficients enhances fraud detection and security. The goal is to accurately classify transactions as fraudulent or non-fraudulent, enhancing security by preventing unauthorized account use. The dataset includes transaction details such as amount spent, time, and other key attributes.',
    github: 'https://github.com/SathwikCSS123/CreditCardFraudDetection.git',
    demo: '',
  },
  {
    title: 'Food Waste Reduction App',
    description: 'A MERN-stack application that connects restaurants with NGOs to donate excess food, reducing food wastage and improving community outreach.',
    github: 'https://github.com/SathwikCSS123?tab=repositories',
    demo: 'https://food-waste-app.vercel.app',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
