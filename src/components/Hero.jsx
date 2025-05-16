import { Link } from "react-scroll"
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa"

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gradient-radial from-gray-100 to-gray-300 flex flex-col justify-center p-8 md:p-16">
        <div data-aos="fade-right" data-aos-delay="200" className="max-w-lg">
          <h3 className="text-gray-700 text-xl mb-2">Hi, I am</h3>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Your Name</h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">Frontend Developer & UI/UX Designer</h2>

          <div className="flex space-x-4 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <FaDribbble size={20} />
            </a>
          </div>

          <Link to="contact" smooth={true} duration={800}>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105">
              CONTACT ME
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-8 md:p-0 relative overflow-hidden">
        <div data-aos="fade-left" data-aos-delay="400" className="relative z-10">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-removebg-preview%20%281%29-lbdR9hA4DiBBjRmtvScs6tOUXDhJwq.png"
            alt="Profile"
            className="max-h-[80vh] object-contain"
          />
        </div>
        <div className="absolute bottom-8 right-8 text-white text-sm opacity-60 max-w-[200px] text-right">
          "Design is not just what it looks like and feels like. Design is how it works."
        </div>
      </div>
    </section>
  )
}

export default Hero
