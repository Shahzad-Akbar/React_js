import { useState } from 'react'
import petLogo from './assets/petcaart-logo.jpg'
import { Dribbble, Instagram, Linkedin, Mail } from 'lucide-react'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    mobile: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Form submitted successfully!')
  }

  const handleNotifyClick = (e) => {
    e.preventDefault()
    setShowForm(true)
  }

  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center">
      {showForm ? (
        <div className="w-full max-w-md bg-gray-100 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">Get Notified</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (

        <div className="w-full max-w-md h-full flex flex-col justify-between items-center px-4 py-6">

          <img src={petLogo} alt="PetCaart Logo" className="w-40 md:w-52 object-contain" />

          <div className="flex flex-col justify-center items-center flex-1 text-center">
            <div className="mb-4 text-4xl">👍</div>

            <div className="space-y-2 mb-6">
              <p className="uppercase font-bold text-gray-600 tracking-wide">We&apos;re still</p>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Cooking Our Website.</h1>
              <p className="text-gray-600">We are going to launch our website very soon.</p>
              <p className="text-gray-600">Stay tuned.</p>
            </div>

            <form onSubmit={handleNotifyClick}>
              <button
                type="submit"
                className="bg-gray-900 text-white py-2 pr-6 pl-3 rounded-full flex items-center gap-5 hover:bg-gray-800"
              >
                <Mail className="bg-white text-blue-600 w-9 h-9 p-2 rounded-full" />
                <span>Notify Me</span>
                <span>›</span>
              </button>
            </form>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <Dribbble className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
