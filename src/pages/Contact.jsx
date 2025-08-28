
    import React, { useState } from 'react'
    import { Helmet } from 'react-helmet-async'

    export default function Contact() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      })

      const [isSubmitting, setIsSubmitting] = useState(false)
      const [submitStatus, setSubmitStatus] = useState(null)

      const departments = [
        { value: '', label: 'Select a Department' },
        { value: 'general', label: 'General Information', email: 'info@annavillesda.org' },
        { value: 'pastor', label: 'Pastoral Care', email: 'pastor@annavillesda.org' },
        { value: 'youth', label: 'Youth Ministry', email: 'youth@annavillesda.org' },
        { value: 'children', label: 'Children\'s Ministry', email: 'children@annavillesda.org' },
        { value: 'outreach', label: 'Community Outreach', email: 'outreach@annavillesda.org' },
        { value: 'treasurer', label: 'Financial/Treasurer', email: 'treasurer@annavillesda.org' },
        { value: 'events', label: 'Events & Activities', email: 'events@annavillesda.org' },
        { value: 'prayer', label: 'Prayer Requests', email: 'prayer@annavillesda.org' }
      ]

      const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
          ...prev,
          [name]: value
        }))
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate form submission
        setTimeout(() => {
          setIsSubmitting(false)
          setSubmitStatus('success')
          setFormData({
            name: '',
            email: '',
            phone: '',
            department: '',
            subject: '',
            message: '',
            preferredContact: 'email'
          })
        }, 2000)
      }

      const selectedDepartment = departments.find(dept => dept.value === formData.department)

      return (
        <>
          <Helmet>
            <title>Contact Us - Annaville Seventh-day Adventist Church</title>
            <meta name="description" content="Contact Annaville SDA Church in Corpus Christi, TX. Get in touch with our pastoral team, ministries, or general inquiries. We're here to help!" />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Church",
                "name": "Annaville Seventh-day Adventist Church",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2710 Violet Rd",
                  "addressLocality": "Corpus Christi",
                  "addressRegion": "TX",
                  "postalCode": "78410"
                },
                "telephone": "+1-361-241-5501",
                "email": "info@annavillesda.org",
                "url": "https://annavillesda.org",
                "openingHours": "Sa 09:30-12:00",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-361-241-5501",
                  "contactType": "customer service",
                  "availableLanguage": "English"
                }
              })}
            </script>
          </Helmet>

          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-sand to-surface py-24">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-heading text-h1 mb-8">Get in Touch</h1>
                <p className="text-body text-lg mb-10">
                  We'd love to hear from you! Whether you have questions, need prayer, 
                  or want to get involved, we're here to help.
                </p>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-24">
                
                {/* Contact Information */}
                <div className="space-y-16">
                  <div>
                    <h2 className="font-heading text-h2 mb-10">Contact Information</h2>
                    <div className="space-y-10">
                      <div className="flex items-start gap-4 p-6 bg-white border border-subtle rounded-lg">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <span className="text-primary text-2xl">📍</span>
                        </div>
                        <div>
                          <h3 className="font-heading text-h3 mb-2">Visit Us</h3>
                          <p className="text-body">
                            2710 Violet Rd<br />
                            Corpus Christi, TX 78410
                          </p>
                          <a 
                            href="https://maps.google.com/?q=2710+Violet+Rd,+Corpus+Christi,+TX+78410"
                            className="text-primary hover:text-primaryHover transition-colors text-sm"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Get Directions →
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-6 bg-white border border-subtle rounded-lg">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <span className="text-primary text-2xl">📞</span>
                        </div>
                        <div>
                          <h3 className="font-heading text-h3 mb-2">Call Us</h3>
                          <p className="text-body">
                            <a 
                              href="tel:+13612415501"
                              className="text-primary hover:text-primaryHover transition-colors"
                            >
                              (361) 241-5501
                            </a>
                          </p>
                          <p className="text-muted text-sm">Available during office hours</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-6 bg-white border border-subtle rounded-lg">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <span className="text-primary text-2xl">✉️</span>
                        </div>
                        <div>
                          <h3 className="font-heading text-h3 mb-2">Email Us</h3>
                          <p className="text-body">
                            <a 
                              href="mailto:info@annavillesda.org"
                              className="text-primary hover:text-primaryHover transition-colors"
                            >
                              info@annavillesda.org
                            </a>
                          </p>
                          <p className="text-muted text-sm">We'll respond within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Times */}
                  <div className="p-6 bg-sand rounded-lg">
                    <h3 className="font-heading text-h3 mb-4">Service Times</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Sabbath School:</span>
                        <span>9:30 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Divine Worship:</span>
                        <span>11:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Office Hours:</span>
                        <span>Mon-Fri 9AM-5PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div>
                    <h3 className="font-heading text-h3 mb-4">Find Us</h3>
                    <iframe 
                      title="Map to Annaville Seventh-day Adventist Church"
                      className="w-full h-64 rounded-lg border border-subtle"
                      loading="lazy"
                      src="https://www.google.com/maps?q=2710+Violet+Rd,+Corpus+Christi,+TX+78410&output=embed"
                      aria-label="Interactive map showing the location of Annaville Seventh-day Adventist Church"
                    />
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="font-heading text-h2 mb-10">Send Us a Message</h2>
                  
                  {submitStatus === 'success' && (
                    <div className="p-8 bg-green-50 border border-green-200 rounded-lg mb-10">
                      <p className="text-green-800">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-ink mb-3">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full border border-subtle rounded-lg px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Your full name"
                          aria-describedby="name-error"
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
                          className="w-full border border-subtle rounded-lg px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="your.email@example.com"
                          aria-describedby="email-error"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-ink mb-3">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border border-subtle rounded-lg px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="(361) 555-0123"
                      />
                    </div>

                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-ink mb-3">
                        Department *
                      </label>
                      <select
                        id="department"
                        name="department"
                        required
                        value={formData.department}
                        onChange={handleInputChange}
                        className="w-full border border-subtle rounded-lg px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      >
                        {departments.map(dept => (
                          <option key={dept.value} value={dept.value}>
                            {dept.label}
                          </option>
                        ))}
                      </select>
                      {selectedDepartment?.email && (
                        <p className="text-sm text-muted mt-2">
                          This will be sent to: {selectedDepartment.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-ink mb-3">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full border border-subtle rounded-lg px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Brief subject of your message"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-ink mb-3">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full border border-subtle rounded-lg px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                        placeholder="Please share your message, question, or prayer request..."
                        aria-describedby="message-help"
                      />
                      <p id="message-help" className="text-sm text-muted mt-2">
                        For prayer requests, please indicate if you'd like us to keep it confidential.
                      </p>
                    </div>

                    <div>
                      <fieldset>
                        <legend className="block text-sm font-medium text-ink mb-3">
                          Preferred Contact Method
                        </legend>
                        <div className="space-y-3">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="email"
                              checked={formData.preferredContact === 'email'}
                              onChange={handleInputChange}
                              className="mr-3"
                            />
                            Email
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="phone"
                              checked={formData.preferredContact === 'phone'}
                              onChange={handleInputChange}
                              className="mr-3"
                            />
                            Phone
                          </label>
                        </div>
                      </fieldset>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn w-full py-5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Discussion Forum Section */}
          <section className="section bg-sand">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-h2 mb-8">Discussion</h2>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Search Section */}
                  <div className="bg-white p-8 rounded-lg border border-subtle">
                    <h3 className="font-heading text-h3 mb-4">SEARCH FOR ARTICLE</h3>
                    <p className="text-body mb-6">
                      Find articles posted to this discussion containing matching words or patterns.
                    </p>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="search-term" className="block text-sm font-medium text-ink mb-2">
                          Search for:
                        </label>
                        <input
                          id="search-term"
                          type="text"
                          className="w-full border border-subtle rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        />
                      </div>
                      <div className="flex gap-4">
                        <button type="submit" className="btn">
                          Start Search
                        </button>
                        <button type="reset" className="btn-outline">
                          Reset
                        </button>
                      </div>
                    </form>
                    <p className="text-sm text-muted mt-6">
                      Last changed: October 28, 2012
                    </p>
                  </div>

                  {/* Contents Section */}
                  <div className="bg-white p-8 rounded-lg border border-subtle">
                    <h3 className="font-heading text-h3 mb-6">CONTENTS</h3>
                    <div className="space-y-3">
                      <div className="text-sm">
                        <a href="#" className="text-primary hover:text-primaryHover font-medium">Jerry Stout</a>
                        <span className="text-muted ml-2">Elvin 27 Feb 2003</span>
                      </div>
                      <div className="text-sm ml-4">
                        <a href="#" className="text-primary hover:text-primaryHover">Re: Jerry Stout</a>
                        <span className="text-muted ml-2">Elvin 27 Feb 2003</span>
                      </div>
                      <div className="text-sm">
                        <a href="#" className="text-primary hover:text-primaryHover font-medium">Shelly Family</a>
                        <span className="text-muted ml-2">Elvin/Wallie 27 Feb 2003</span>
                      </div>
                      <div className="text-sm">
                        <a href="#" className="text-primary hover:text-primaryHover font-medium">Bill & Pat</a>
                        <span className="text-muted ml-2">Scarboroughs 26 Feb 2003</span>
                      </div>
                      <div className="text-sm ml-4">
                        <a href="#" className="text-primary hover:text-primaryHover">Bill & Pat</a>
                        <span className="text-muted ml-2">Elvin 27 Feb 2003</span>
                      </div>
                      <div className="text-sm">
                        <a href="#" className="text-primary hover:text-primaryHover font-medium">Potluck</a>
                        <span className="text-muted ml-2">Wallie 24 Feb 2003</span>
                      </div>
                      <div className="text-sm ml-4">
                        <a href="#" className="text-primary hover:text-primaryHover">Re: Potluck</a>
                        <span className="text-muted ml-2">bob 25 Feb 2003</span>
                      </div>
                      <div className="text-sm ml-4">
                        <a href="#" className="text-primary hover:text-primaryHover">Re: Potluck</a>
                        <span className="text-muted ml-2">bob 25 Feb 2003</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )
    }
