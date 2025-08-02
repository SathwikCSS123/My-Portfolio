import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Geethanjali College Of Engineering and Technology",
    year: "2022 - 2026",
    description:
      "Specialized in Full Stack Development and Artificial Intelligence. Participated in various tech fests and research projects.",
    logo: "/geethanjali.png",
  },
  {
    degree: "Intermediate Education",
    institution: "Sri Chaitanya Junior College",
    year: "2020 - 2022",
    description:
      "Focused on Mathematics, Physics, and Computer Science. Scored 94% overall and developed strong analytical foundations.",
    logo: "/srichaitanya.png",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen px-4 py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
          Education
        </h2>
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center space-x-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="w-16 h-16 object-contain rounded-lg bg-white p-1"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-md text-indigo-500">
                  {edu.institution} | {edu.year}
                </p>
                <p className="mt-3 text-gray-700 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
