"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (isMobile) {
    return (
      <section id="hero" className="min-h-screen bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-removebg-preview%20%281%29-lbdR9hA4DiBBjRmtvScs6tOUXDhJwq.png"
            alt="Profile"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-gray-300 text-xl mb-2">Hi, I am</h3>
          <h1 className="text-4xl font-bold text-white mb-2">UMUBYEYI KEVINE</h1>
          <p className="text-gray-400">Frontend Developer / UI/UX Designer</p>
        </div>

        <div className="absolute right-4 bottom-32 flex flex-col gap-4">
        
          <a
            href="https://github.com/Kevine00"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 p-3 rounded-md hover:bg-white transition-colors"
            aria-label="GitHub"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.49995C19.9988 8.30492 19.5325 7.15726 18.7 6.29995C19.0905 5.26192 19.0545 4.11158 18.6 3.09995C18.6 3.09995 17.5 2.79995 15.1 4.39995C13.0672 3.87054 10.9328 3.87054 8.9 4.39995C6.5 2.79995 5.4 3.09995 5.4 3.09995C4.94548 4.11158 4.90953 5.26192 5.3 6.29995C4.46745 7.15726 4.00122 8.30492 4 9.49995C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/umubyeyi-kevine-109ab42a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 p-3 rounded-md hover:bg-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M6 9H2V21H6V9Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/kevy__u/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 p-3 rounded-md hover:bg-white transition-colors"
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M17.5 6.5H17.51" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    )
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row relative overflow-hidden">
      {/* Left side - gray background */}
      <div className="w-full md:w-1/2 bg-gray-200 flex flex-col justify-center p-8 md:p-16 z-10">
        <div data-aos="fade-right" data-aos-delay="200" className="max-w-lg">
          <h3 className="text-gray-700 text-xl mb-2">Hi, I am</h3>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">UMUBYEYI KEVINE</h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">Frontend Developer & UI/UX Designer</h2>

          <div className="flex space-x-4 mb-8">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 hover:bg-gray-400 p-3 rounded-md transition-all duration-300"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M17.5 6.5H17.51" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://github.com/Kevine00"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 hover:bg-gray-400 p-3 rounded-md transition-all duration-300"
              aria-label="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.49995C19.9988 8.30492 19.5325 7.15726 18.7 6.29995C19.0905 5.26192 19.0545 4.11158 18.6 3.09995C18.6 3.09995 17.5 2.79995 15.1 4.39995C13.0672 3.87054 10.9328 3.87054 8.9 4.39995C6.5 2.79995 5.4 3.09995 5.4 3.09995C4.94548 4.11158 4.90953 5.26192 5.3 6.29995C4.46745 7.15726 4.00122 8.30492 4 9.49995C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/umubyeyi-kevine-109ab42a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 hover:bg-gray-400 p-3 rounded-md transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M6 9H2V21H6V9Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Diagonal divider */}
      <div className="absolute top-0 bottom-0 left-0 right-0 z-0">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200"></div>
          <div
            className="absolute  top-0 right-0 h-full bg-black"
            style={{
              width: "50%",
              clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          ></div>
        </div>
      </div>

      {/* Right side - black background with image */}
      <div className="w-full md:w-1/2 bg-transparent flex items-center justify-center p-8  md:p-0 relative z-10">
        <div data-aos="fade-left" data-aos-delay="400" className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-removebg-preview%20%281%29-lbdR9hA4DiBBjRmtvScs6tOUXDhJwq.png"
            alt="Profile"
            width={500}
            height={500}
            margin-top={200}
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
