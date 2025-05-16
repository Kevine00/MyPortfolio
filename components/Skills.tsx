"use client"

import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaBootstrap, FaGlobe, FaCode, FaGithub } from "react-icons/fa"
import { SiTailwindcss, SiCanva, SiAdobephotoshop, SiWordpress, SiFigma, SiRedux, SiVercel } from "react-icons/si"

const Skills = () => {
  const currentSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26] text-5xl mx-auto" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6] text-5xl mx-auto" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E] text-5xl mx-auto" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB] text-5xl mx-auto" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-5xl mx-auto" /> },
    { name: "Git/GitHub", icon: <FaGithub className="text-[#181717] text-5xl mx-auto" /> },
    { name: "SASS", icon: <FaSass className="text-[#CC6699] text-5xl mx-auto" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3] text-5xl mx-auto" /> },
    { name: "Canva", icon: <SiCanva className="text-[#00C4CC] text-5xl mx-auto" /> },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF] text-5xl mx-auto" /> },
    { name: "WordPress", icon: <SiWordpress className="text-[#21759B] text-5xl mx-auto" /> },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E] text-5xl mx-auto" /> },
  ]

  const otherSkills = [
    { name: "UX Design", icon: <FaGlobe className="text-gray-700 text-5xl mx-auto" /> },
    { name: "Responsive", icon: <FaCode className="text-gray-700 text-5xl mx-auto" /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC] text-5xl mx-auto" /> },
    { name: "Deployment & Hosting", icon: <SiVercel className="text-black text-5xl mx-auto" /> },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-radial from-gray-100 to-gray-300">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold border-2 border-gray-800 px-8 py-2">SKILLS</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="200" className="mb-16">
            <h3 className="text-xl font-bold mb-8 text-center uppercase">Using Now:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {currentSkills.map((skill, index) => (
                <div key={index} className="text-center transform transition-transform hover:scale-110">
                  {skill.icon}
                  <p className="mt-2 font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-bold mb-8 text-center uppercase">Other Skills:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {otherSkills.map((skill, index) => (
                <div key={index} className="text-center transform transition-transform hover:scale-110">
                  <div className="flex justify-center">{skill.icon}</div>
                  <p className="mt-2 font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
