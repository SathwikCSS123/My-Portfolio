import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: "Growthmate Infotech",
    role: "Frontend Developer Intern",
    duration: "2024",
    description:
      "Worked on frontend development for real-world applications focused on local area networking solutions.",
    logo: "/growthmate.png"
  },
  {
    company: "Cantilever Labs",
    role: "ML Intern",
    duration: "2024",
    description:
      "Gained hands-on experience in Machine Learning and Data Science using Python, TensorFlow, and CNN. Built a Sports Prediction project.",
    logo: "/cantiliver.png"
  },
  {
    company: "Salesforce",
    role: "Summer Intern",
    duration: "2024",
    description:
      "Completed summer internship program gaining exposure to Salesforce ecosystem and industry-level project cycles.",
    logo: "/Salesforce.png"
  },
  {
    company: "Google",
    role: "AIML Virtual Intern",
    duration: "2023",
    description:
      "Participated in Google's AIML virtual internship to explore AI/ML technologies and gain practical exposure to tools and practices.",
    logo: "/google.png"
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
          Internship Highlights
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-16 h-16 object-contain rounded-lg bg-white p-1 mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{exp.company}</h3>
              <p className="text-md text-indigo-500">{exp.role} | {exp.duration}</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
