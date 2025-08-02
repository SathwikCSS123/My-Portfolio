import React from 'react'
import { motion } from 'framer-motion'

const certifications = [
    {
    title: 'AWS - Cloud Practitioner',
    issuer: 'Amazon Web Services',
  },
  {
    title: 'ServiceNow Micro-Certification',
    issuer: 'ServiceNow',
  },
  {
    title: 'Oracle Certified Professional',
    issuer: 'Oracle',
  },
  {
    title: "LLM's DeeplearningAI",
    issuer: 'DeepLearning.AI',
  },
  {
    title: 'Microsoft Certified: Data Analyst Associate',
    issuer: 'Microsoft',
  },
  {
    title: 'What Is Generative AI?',
    issuer: 'Google Cloud',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-12">
          Certifications
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Issued by {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
