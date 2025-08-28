import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Services() {
  const services = [
    {
      title: "Sabbath School",
      time: "9:30 AM",
      day: "Saturday",
      description: "Interactive Bible study and discussion groups for all ages. Join us for meaningful conversations about Scripture and practical Christian living.",
      icon: "📖",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Divine Worship",
      time: "11:00 AM", 
      day: "Saturday",
      description: "Our main worship service featuring inspiring music, prayer, and biblical messages that speak to everyday life and spiritual growth.",
      icon: "⛪",
      color: "from-primary to-primaryDeep"
    },
    {
      title: "Potluck Fellowship",
      time: "After Worship",
      day: "Saturday",
      description: "Stay after the service for a delicious meal and warm fellowship. Visitors are especially welcome to join us for this time of community.",
      icon: "🍽️",
      color: "from-green-500 to-green-600"
    }
  ]

  const additionalInfo = [
    {
      title: "Church Bus Service",
      description: "Transportation available for those who need assistance getting to church. Please contact us to arrange pickup.",
      icon: "🚌"
    },
    {
      title: "Family-Friendly Environment",
      description: "Children are welcome in all our services. We also offer age-appropriate activities and care during worship times.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Visitor Welcome",
      description: "First time visiting? We're excited to meet you! Greeters are available to help you feel at home.",
      icon: "🤝"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Services - Annaville Seventh-day Adventist Church</title>
        <meta name="description" content="Join us for Sabbath School at 9:30 AM and Divine Worship at 11:00 AM every Saturday. Experience meaningful fellowship and spiritual growth in a welcoming community." />
        <meta name="keywords" content="worship services, Sabbath School, Divine Worship, fellowship, church services, Annaville SDA" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primaryDeep text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-h1 mb-6">Worship Services</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Join us every Saturday for inspiring worship, meaningful Bible study, and warm fellowship. 
              All are welcome to experience the love of Christ in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-h2 mb-6">Weekly Services</h2>
              <p className="text-body text-muted max-w-3xl mx-auto">
                The Annaville SDA Church offers worship services for members, non-members, or anyone interested 
                in learning more about practical Christian living from the Word of God.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Services Cards */}
              <div className="space-y-8">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-subtle hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-6">
                        <div className={`text-4xl p-3 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading text-h3 text-ink mb-3">{service.title}</h3>
                          <div className="flex items-center gap-4 mb-4">
                            <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                              {service.time}
                            </span>
                            <span className="text-muted text-sm">{service.day}</span>
                          </div>
                          <p className="text-body text-muted leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image Section */}
              <div className="relative">
                <div className="sticky top-8">
                  <img 
                    src="/assets/family_entry.png" 
                    alt="Church bus and family entry - People walking up steps to the church entrance" 
                    className="w-full rounded-xl shadow-lg"
                  />
                  <div className="mt-6 p-6 bg-sand rounded-xl">
                    <h3 className="font-heading text-h3 mb-4 text-primary">Plan Your Visit</h3>
                    <p className="text-body text-muted mb-4">
                      We're located at 2710 Violet Road in Corpus Christi. 
                      Parking is available on-site, and our greeters will help you find your way.
                    </p>
                    <a 
                      href="/contact" 
                      className="btn w-full"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="section bg-sand">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-h2 mb-6">What to Expect</h2>
              <p className="text-body text-muted max-w-3xl mx-auto">
                We want your visit to be comfortable and meaningful. Here's what you can expect when you join us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-subtle">
                    <div className="text-4xl mb-4">{info.icon}</div>
                    <h3 className="font-heading text-h3 mb-4 text-primary">{info.title}</h3>
                    <p className="text-body text-muted leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-12 rounded-xl shadow-sm border border-subtle">
              <h3 className="font-heading text-h3 mb-6">Ready to Join Us?</h3>
              <p className="text-body text-muted mb-8">
                We'd love to welcome you this Saturday! Have questions about our services or need assistance? 
                Don't hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="btn"
                >
                  Contact Us
                </a>
                <a 
                  href="/visit" 
                  className="btn-outline"
                >
                  Plan Your Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
