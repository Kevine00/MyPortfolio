"use client"

import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Portfolio from "@/components/Portfolio"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ItBerries from "@/components/ItBerries"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ItBerries />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
