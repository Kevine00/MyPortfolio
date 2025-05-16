"use client"

import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-radial from-gray-100 to-gray-300">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold border-2 border-gray-800 px-8 py-2">CONTACT</h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-700">
            Feel free to reach out to me for collaborations, project inquiries, or just to say hello. I'm always open to
            discussing new projects and opportunities.
          </p>
        </div>

        <form data-aos="fade-up" data-aos-delay="300" className="max-w-3xl mx-auto" onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-gray-800 bg-transparent outline-none transition-colors"
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-gray-800 bg-transparent outline-none transition-colors"
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-gray-800 bg-transparent outline-none transition-colors"
            />
          </div>

          <div className="mb-8">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-gray-800 bg-transparent outline-none transition-colors resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="border-2 border-gray-800 bg-gray-800 text-white px-8 py-3 hover:bg-transparent hover:text-gray-800 transition-colors duration-300"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
