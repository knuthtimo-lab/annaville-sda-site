
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { TextHero } from '../components/Hero'
import VisitForm from '../components/VisitForm'
import StaticMap from '../components/StaticMap'
import { track, events } from '../utils/analytics'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Annaville Seventh-day Adventist Church - Corpus Christi, TX</title>
        <meta name="description" content="Join us for worship services at Annaville SDA Church. Sabbath School 9:30 AM, Divine Worship 11:00 AM. Located at 2710 Violet Rd, Corpus Christi, TX. Welcoming community, family-friendly ministries, and spiritual growth opportunities." />
        <meta name="keywords" content="Seventh-day Adventist, church, Corpus Christi, Texas, worship, Sabbath School, Bible study, community" />
        <meta property="og:title" content="Annaville Seventh-day Adventist Church" />
        <meta property="og:description" content="Join us for worship services at Annaville SDA Church. Sabbath School 9:30 AM, Divine Worship 11:00 AM." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://annavillesda.org" />
        <meta property="og:image" content="https://annavillesda.org/assets/hero_golden_hour.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Annaville Seventh-day Adventist Church" />
        <meta name="twitter:description" content="Join us for worship services at Annaville SDA Church. Sabbath School 9:30 AM, Divine Worship 11:00 AM." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Church",
            "name": "Annaville Seventh-day Adventist Church",
            "alternateName": "Annaville SDA Church",
            "description": "A welcoming Seventh-day Adventist congregation in Corpus Christi, Texas offering worship services, Bible study, and community outreach.",
            "url": "https://annavillesda.org",
            "logo": "https://annavillesda.org/assets/hero_golden_hour.png",
            "image": "https://annavillesda.org/assets/hero_golden_hour.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2710 Violet Rd",
              "addressLocality": "Corpus Christi",
              "addressRegion": "TX",
              "postalCode": "78410",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 27.8006,
              "longitude": -97.3964
            },
            "telephone": "+1-361-241-5501",
            "email": "info@annavillesda.org",
            "openingHours": "Sa 09:30-12:00",
            "serviceType": "Worship Service",
            "sameAs": [
              "https://www.facebook.com/annavillesda",
              "https://www.youtube.com/annavillesda"
            ],
            "hasMap": "https://maps.google.com/?q=2710+Violet+Rd,+Corpus+Christi,+TX+78410",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-361-241-5501",
              "contactType": "customer service",
              "availableLanguage": "English",
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            }
          })}
        </script>
      </Helmet>

      <TextHero />

      {/* Bible Verse Section */}
      <section className="section-sm bg-sand">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="p-10 bg-white rounded-xl shadow-sm">
              <blockquote className="text-center italic text-ink">
                <p className="text-body mb-6">
                  "If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, the holy of the LORD, honorable; and shalt honor him, not doing thine own ways, nor finding thine own pleasure, nor speaking thine own words: Then shalt thou delight thyself in the LORD; and I will cause thee to rise upon the high places of the earth, and feed thee with the heritage of Jacob thy father: for the mouth of the LORD hath spoken it."
                </p>
                <cite className="text-primary font-semibold">Isaiah 58:13 & 14</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="service-times" aria-labelledby="stimes" className="section">
        <div className="container">
          <h2 id="stimes" className="sr-only">Service Times</h2>
          
          {/* Service Times Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-subtle">
              <div className="text-center">
                <h3 className="font-heading text-h3 text-primary mb-4">Sabbath School</h3>
                <div className="text-4xl font-bold text-ink mb-2">9:30 AM</div>
                <p className="text-body text-muted">Bible Study & Discussion</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-subtle">
              <div className="text-center">
                <h3 className="font-heading text-h3 text-primary mb-4">Divine Worship</h3>
                <div className="text-4xl font-bold text-ink mb-2">11:00 AM</div>
                <p className="text-body text-muted">Main Worship Service</p>
              </div>
            </div>
          </div>
          
          {/* Potluck Fellowship Information */}
          <div className="max-w-2xl mx-auto p-8 bg-sand rounded-xl text-center">
            <h3 className="font-heading text-h3 mb-4 text-primary">Potluck Fellowship Dinner</h3>
            <p className="text-body text-ink">
              Immediately following worship services. Visitors are encouraged to stay and fellowship.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <div className="text-center">
            <h2 className="font-heading text-h2 mb-8">Upcoming Events</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-12 rounded-xl shadow-sm border border-subtle">
                <p className="text-body text-muted">
                  No upcoming events at this time. Please check back later for updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="font-heading text-h2 mb-12">Plan Your Visit</h2>
              <p className="text-body mb-12">
                We are located at 2710 Violet Road in Corpus Christi, Texas. 
                Click on the link below to see a map to our church location.
              </p>
              <VisitForm />
            </div>
            <div>
              <h2 className="font-heading text-h2 mb-12">Location</h2>
              <StaticMap />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
