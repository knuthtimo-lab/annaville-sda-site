import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function PrayerRequests() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    prayerType: '',
    request: '',
    isConfidential: false,
    allowSharing: false
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Prayer request submitted:', formData)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      prayerType: '',
      request: '',
      isConfidential: false,
      allowSharing: false
    })
  }

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Prayer Request Submitted - Annaville Seventh-day Adventist Church</title>
        </Helmet>
        
        <section className="bg-gradient-to-br from-green-500 to-green-600 text-white py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">🙏</div>
              <h1 className="font-heading text-h1 mb-6">Prayer Request Received</h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Thank you for sharing your prayer request with us. Our prayer team has been notified 
                and will be lifting you up in prayer.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
                <h3 className="font-heading text-h3 mb-4">What happens next?</h3>
                <ul className="text-left space-y-3 text-white/90">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">📝</span>
                    <span>Your request has been recorded in our prayer journal</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🙏</span>
                    <span>Our prayer team will begin praying for you immediately</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">💌</span>
                    <span>You'll receive a confirmation email with additional resources</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <span>If you requested follow-up, someone will contact you soon</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn bg-white text-green-600 hover:bg-gray-100"
                >
                  Submit Another Request
                </button>
                <a href="/" className="btn-outline border-white text-white hover:bg-white hover:text-green-600">
                  Return Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Prayer Requests - Annaville Seventh-day Adventist Church</title>
        <meta name="description" content="Submit your prayer requests to our caring community. We believe in the power of prayer and are here to support you in your time of need." />
        <meta name="keywords" content="prayer requests, prayer support, spiritual care, Annaville SDA, prayer ministry" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primaryDeep text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🙏</div>
            <h1 className="font-heading text-h1 mb-6">Prayer Requests</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We believe in the power of prayer and the strength of community. 
              Share your prayer requests with us, and know that you are not alone.
            </p>
          </div>
        </div>
      </section>

      {/* Prayer Request Form Section */}
      <section className="section bg-sand">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="font-heading text-h2 mb-6">Share Your Prayer Request</h2>
                <p className="text-body text-muted">
                  Your request will be shared with our prayer team. All information is kept confidential 
                  unless you specifically allow us to share it with the congregation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-3">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-subtle rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-3">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-subtle rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-3">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-subtle rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="request" className="block text-sm font-medium text-ink mb-3">
                    Your Prayer Request *
                  </label>
                  <textarea
                    id="request"
                    name="request"
                    rows="6"
                    required
                    value={formData.request}
                    onChange={handleInputChange}
                    className="w-full border border-subtle rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Please share your prayer request in detail. What would you like us to pray for?"
                  ></textarea>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <input
                      id="isConfidential"
                      name="isConfidential"
                      type="checkbox"
                      checked={formData.isConfidential}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-primary focus:ring-primary border-subtle rounded"
                    />
                    <label htmlFor="isConfidential" className="text-sm text-muted">
                      Keep this request confidential (only shared with prayer team)
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="allowSharing"
                      name="allowSharing"
                      type="checkbox"
                      checked={formData.allowSharing}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-primary focus:ring-primary border-subtle rounded"
                    />
                    <label htmlFor="allowSharing" className="text-sm text-muted">
                      Allow us to share this request with the congregation (without personal details)
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    className="btn flex-1"
                  >
                    Submit Prayer Request
                  </button>
                  <button
                    type="reset"
                    onClick={() => setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      prayerType: '',
                      request: '',
                      isConfidential: false,
                      allowSharing: false
                    })}
                    className="btn-outline flex-1"
                  >
                    Reset Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
