"use client"

import { useState } from "react"

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce UI Design",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000",
      link: "#",
    },
    {
      id: 2,
      title: "Travel App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000",
      link: "#",
    },
    {
      id: 3,
      title: "Dashboard Interface",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
      link: "#",
    },
    {
      id: 4,
      title: "Social Media Platform",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000",
      link: "#",
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1000",
      link: "#",
    },
    {
      id: 6,
      title: "Music App Interface",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
      link: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold border-2 border-gray-800 px-8 py-2">PORTFOLIO</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className="relative overflow-hidden h-64 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
              >
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.category}</p>
                <a
                  href={project.link}
                  className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
