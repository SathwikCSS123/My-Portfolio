import React, { useState } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  const scrollToSection = (id) => {
    setNavOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = ['home', 'about', 'projects', 'certifications', 'skills', 'contact']


  return (
    <header className="w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          className="font-s7 text-2xl font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Sathwik Paggilla
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-300 transition cursor-pointer"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-xl text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-300 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* Mobile nav toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleNav}
            className="text-2xl text-black dark:text-white"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      {navOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="block text-lg text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-300 transition cursor-pointer w-full text-left"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-xl text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-300 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar
