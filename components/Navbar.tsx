"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Logo from "../public/Logo.png"
import { useMediaQuery } from "@/hooks/use-media-query"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setMenuOpen(false)
  }

  // Determine if we should show the white logo
  const showWhiteLogo = scrolled || isMobile

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div onClick={() => scrollToSection("hero")} className="cursor-pointer">
          <div className="text-white text-2xl font-bold">
            <Image
              src={Logo || "/placeholder.svg"}
              alt="Logo"
              width={80}
              height={60}
              className={showWhiteLogo ? "brightness-0 invert" : ""}
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-gray-300 cursor-pointer transition-colors"
          >
            About me
          </div>
          <div
            onClick={() => scrollToSection("skills")}
            className="text-white hover:text-gray-300 cursor-pointer transition-colors"
          >
            Skills
          </div>
          <div
            onClick={() => scrollToSection("portfolio")}
            className="text-white hover:text-gray-300 cursor-pointer transition-colors"
          >
            Portfolio
          </div>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-transparent hover:text-white hover:border-white border border-transparent transition-all duration-300"
          >
            HIRE ME
          </button>
        </div>

       <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            className="w-8 h-8"
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
            <div
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-gray-300 cursor-pointer transition-colors"
            >
              About me
            </div>
            <div
              onClick={() => scrollToSection("skills")}
              className="text-white hover:text-gray-300 cursor-pointer transition-colors"
            >
              Skills
            </div>
            <div
              onClick={() => scrollToSection("portfolio")}
              className="text-white hover:text-gray-300 cursor-pointer transition-colors"
            >
              Portfolio
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-transparent hover:text-white hover:border-white border border-transparent transition-all w-full"
            >
              HIRE ME
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
