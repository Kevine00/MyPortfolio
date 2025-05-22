const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-radial from-gray-100 to-gray-300">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold border-2 border-gray-800 px-8 py-2">ABOUT ME</h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-700 mb-8">
            I'm Kevine UMUBYEYI, a passionate Frontend Developer and UI/UX Designer with a keen eye for detail and a
            love for creating beautiful, functional interfaces. I combine technical skills with creative design thinking
            to build engaging digital experiences that users love.
          </p>

          {/* <a
            href="/Resume.pdf"
            download="Kevine_UMUBYEYI_Resume.pdf"
            className="inline-block border-2 border-gray-800 px-6 py-2 hover:bg-gray-800 hover:text-white transition-all duration-300"
            type="application/pdf"
          >
            RESUME
          </a> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="300" className="text-center">
            <h3 className="text-xl font-bold mb-4 uppercase">Design</h3>
            <p className="text-gray-700">
              Creating visually stunning and intuitive user interfaces that enhance user experience and engagement.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="400" className="text-center">
            <h3 className="text-xl font-bold mb-4 uppercase">Development</h3>
            <p className="text-gray-700">
              Building responsive, performant websites and applications using modern frontend technologies.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="500" className="text-center">
            <h3 className="text-xl font-bold mb-4 uppercase">Maintenance</h3>
            <p className="text-gray-700">
              Ensuring websites remain up-to-date, secure, and optimized for the best possible performance.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="w-16 h-[1px] bg-gray-400"></div>
        </div>
      </div>
    </section>
  )
}

export default About
