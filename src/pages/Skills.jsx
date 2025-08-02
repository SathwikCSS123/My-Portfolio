import React from 'react'
import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaAws,
  FaChartBar,
  FaBrain,
  FaServer,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiDjango,
} from 'react-icons/si'

const skills = [
  { name: 'Python', icon: <FaPython />, color: 'text-yellow-600' },
  { name: 'C', icon: <SiJavascript />, color: 'text-yellow-400' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-400' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-700' },
  { name: 'Django', icon: <SiDjango />, color: 'text-green-700' },
  { name: 'AWS', icon: <FaAws />, color: 'text-orange-400' },
  { name: 'Servicenow', icon: <FaServer />, color: 'text-orange-400' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500' },
  { name: 'Power BI', icon: <FaChartBar />, color: 'text-yellow-500' },
  { name: 'Generative AI', icon: <FaBrain />, color: 'text-purple-500' },
  { name: 'AI & ML', icon: <FaBrain />, color: 'text-pink-500' },  // Added AI & ML
]

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md cursor-pointer"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</div>
              <p className="text-lg text-gray-800 dark:text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
