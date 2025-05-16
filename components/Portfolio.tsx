"use client"

import { useState } from "react"

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "UI/UX KaKlelly",
      category: "UI/UX",
      description:
        "Designed a visually appealing and user-friendly interface for Karkelly.rw, focusing on responsive layouts, intuitive navigation, and engaging user experiences.",
      link: "https://www.figma.com/proto/dA01grWsZ5KM4hXNDa7T23/KARKELLY-COMPANY-Ltd?node-id=1115-4&node-type=canvas&t=pVsBr5Ct71mG6MSD-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
      image: "images/karkelly.png", 
    },
    {
      id: 2,
      title: "KarKelly",
      category: "Frontend",
      description:
        "Developed Karkelly.rw's responsive frontend using React and Tailwind CSS, ensuring seamless performance, cross-browser compatibility, and interactive features for all devices.",
      link: "https://karkelly.rw/",
      image:  "images/karkelly.png", 
    },
    {
      id: 5,
      title: "UI/UX Kigali events",
      category: "UI/UX",
      description:
        "Designed an intuitive and visually appealing interface for Kigali Events, ensuring users can effortlessly explore and book events with ease.",
      link: "https://www.figma.com/proto/tjVq7WgpbsHqUwMXLiKMDv/KIGALI-Events?node-id=247-81&node-type=canvas&t=4QYx4sPK7TFpAGME-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      image: "images/KFM.png", // Replace with actual image path
    },
    {
      id: 6,
      title: "UI/UX Kigali Fashion Market",
      category: "UI/UX",
      description:
        "Designed a sleek and modern interface for Kigali Fashion Market, emphasizing easy navigation and an engaging experience for fashion enthusiasts.",
      link: "https://www.figma.com/proto/J51MSVYbLm84ncX1gPwlQa/Untitled?node-id=6-2&node-type=canvas&t=Bhdo3KDc14XfymJ3-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      image: "images/KFM.png" , // Replace with actual image path
    },
    {
      id: 3,
      title: "UI/UX Oldfox",
      category: "UI/UX",
      description:
        "Crafted a serene and user-focused design for OldFox, ensuring seamless navigation and aesthetic appeal for religious tourism enthusiasts.",
      link: "https://www.figma.com/proto/8ELKFp3NJSDYQo8zWOELnQ/Exodus?t=pVsBr5Ct71mG6MSD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=129-95&starting-point-node-id=52%3A9",
      image: "images/oldfox.png"  , // Replace with actual image path
    },
    {
      id: 4,
      title: "Oldfox",
      category: "Frontend",
      description:
        "Developed OldFox's responsive frontend with React and Tailwind CSS, ensuring optimal performance, interactivity, and a user-friendly experience for religious tourism.",
      link: "https://www.oldfoxtours.com/",
      image: "images/oldfox.png",  // Replace with actual image path
    },
  
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold border-2 border-gray-800 px-8 py-2">PORTFOLIO</h2>
        </div>

        {/* Filter Buttons */}
        <div data-aos="fade-up" className="flex justify-center flex-wrap gap-4 mb-12">
          {["All", "UI/UX", "Frontend"].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gray-800 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className="relative overflow-hidden h-80 group rounded-lg shadow-md"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm line-clamp-3">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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
