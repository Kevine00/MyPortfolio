import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.facebook.com/yna.kendrakevine"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/kevy__u/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/umubyeyi-kevine-109ab42a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
