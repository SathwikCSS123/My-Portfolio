import React from 'react'
import { MapPin, Mail, Github, Linkedin, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
        
        {/* Left: Logo & Description */}
        <div>
          <h2 className="text-2xl font-signature text-white mb-2">Sathwik Paggilla</h2>
          <p className="text-sm text-gray-400">
            Your gateway to creative development, innovative solutions, and digital excellence.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact Info + Socials */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Me</h3>

          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} />
            <span>Hyderabad, Telangana, India</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Mail size={16} />
            <a href="mailto:svkskt4466@gmail.com" className="hover:text-white">
              svkskt4466@gmail.com
            </a>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="https://github.com/SathwikCSS123" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/sathwik-paggilla" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Linkedin />
            </a>
            <a href="https://instagram.com/sathwik._.03" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Instagram />
            </a>
            <a href="mailto:svkskt4466@gmail.com" className="hover:text-white">
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © 2025 Sathwik Paggilla. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
