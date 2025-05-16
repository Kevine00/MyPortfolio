"use client"

import { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import { RiMapPinLine, RiPhoneLine, RiMailLine } from "react-icons/ri"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" })

  // Effect to clear the message after 5 seconds
  useEffect(() => {
    let timeoutId

    if (submitStatus.message) {
      timeoutId = setTimeout(() => {
        setSubmitStatus({ success: false, message: "" })
      }, 5000) // 5 seconds
    }

    // Cleanup function to clear the timeout if component unmounts
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [submitStatus.message])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: false, message: "" })

    // Send the email using EmailJS
    emailjs.sendForm("service_rh2g547", "template_5x67z73", e.target, "HE2xuTro2ETXJgfRn").then(
      (result) => {
        console.log("Email sent:", result.text)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setSubmitStatus({
          success: true,
          message: "Message sent successfully! We'll get back to you soon.",
        })
        setIsSubmitting(false)
      },
      (error) => {
        console.log("Error sending email:", error.text)
        setSubmitStatus({
          success: false,
          message: "Oops, something went wrong. Please try again.",
        })
        setIsSubmitting(false)
      },
    )
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

        <div className="max-w-5xl mx-auto">
          {/* Contact Information */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-200 rounded-full p-4 mb-4">
                <RiMapPinLine className="w-6 h-6 text-gray-800" />
              </div>
              <h3 className="font-bold text-lg mb-1">Address</h3>
              <p className="text-gray-700">Kigali, Rwanda</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-200 rounded-full p-4 mb-4">
                <RiPhoneLine className="w-6 h-6 text-gray-800" />
              </div>
              <h3 className="font-bold text-lg mb-1">Call Us</h3>
              <p className="text-gray-700">+250 783 866 536</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-200 rounded-full p-4 mb-4">
                <RiMailLine className="w-6 h-6 text-gray-800" />
              </div>
              <h3 className="font-bold text-lg mb-1">Email Us</h3>
              <p className="text-gray-700">kevineumubyeyi9@gmail.com</p>
            </div>
          </div>

          {/* Status Message with animation */}
          {submitStatus.message && (
            <div
              data-aos="fade-up"
              className={`mb-8 p-4 max-w-3xl mx-auto text-center rounded-md transition-opacity duration-300 ${
                submitStatus.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Contact Form */}
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
                rows={5}
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-gray-800 bg-transparent outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="border-2 border-gray-800 bg-gray-800 text-white px-8 py-3 hover:bg-transparent hover:text-gray-800 transition-colors duration-300 disabled:bg-gray-500 disabled:border-gray-500 disabled:hover:text-white"
              >
                {isSubmitting ? "Sending..." : "SEND"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
