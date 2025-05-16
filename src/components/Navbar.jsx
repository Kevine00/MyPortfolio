"use client"

import { useState, useEffect } from "react"
import { Link } from "react-scroll"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
          <div className="text-white text-2xl font-bold">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="white" />
              <path d="M15 15H25M15 20H25M15 25H25" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 cursor-pointer transition-colors"
          >
            ABOUT ME
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 cursor-pointer transition-colors"
          >
            SKILLS
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 cursor-pointer transition-colors"
          >
            PORTFOLIO
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 cursor-pointer transition-colors"
          >
            CONTACT
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              ABOUT ME
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              SKILLS
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              PORTFOLIO
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
