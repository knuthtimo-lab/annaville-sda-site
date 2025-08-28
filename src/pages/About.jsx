
    import React from 'react'
    import { Helmet } from 'react-helmet-async'
    import { Link } from 'react-router-dom'
    import StaticMap from '../components/StaticMap'

    export default function About() {
      return (
        <>
          <Helmet>
            <title>About Us - Annaville Seventh-day Adventist Church</title>
            <meta name="description" content="Learn about Annaville SDA Church in Corpus Christi, Texas. Our mission, location, and service times." />
          </Helmet>

          <section className="section">
            <div className="container">
              <h1 className="font-heading text-h1 mb-16">About Us</h1>
              
              <div className="grid lg:grid-cols-2 gap-24 items-start">
                <div>
                  <h2 className="font-heading text-h2 mb-10">Our Mission</h2>
                  <p className="text-body mb-12">
                    To know Jesus, grow in faith, and serve our community.
                  </p>
                  
                  <p className="text-body mb-12">
                    We are a welcoming Seventh-day Adventist congregation in Annaville.
                  </p>
                  
                  <h3 className="font-heading text-h3 mb-8">Service Times</h3>
                  <div className="space-y-8 mb-12">
                    <div className="p-8 bg-sand rounded-xl">
                      <h4 className="font-semibold text-ink mb-3">Sabbath School</h4>
                      <p className="text-body">Begins at 9:30 a.m. each Saturday</p>
                    </div>
                    <div className="p-8 bg-sand rounded-xl">
                      <h4 className="font-semibold text-ink mb-3">Divine Worship</h4>
                      <p className="text-body">Begins at 11:00 a.m. each Saturday</p>
                    </div>
                    <div className="p-8 bg-sand rounded-xl">
                      <h4 className="font-semibold text-ink mb-3">Potluck Fellowship Dinner</h4>
                      <p className="text-body">Immediately following worship services. Visitors are encouraged to stay and fellowship.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="font-heading text-h2 mb-10">Location</h2>
                  <p className="text-body mb-10">
                    We are located at 2710 Violet Road in Corpus Christi, Texas.
                  </p>
                  <p className="text-body mb-12">
                    Click on the link below to see a map to our church location.
                  </p>
                  
                  <div className="space-y-8 mb-12">
                    <a 
                      href="https://maps.google.com/?q=2710+Violet+Rd,+Corpus+Christi,+TX+78410" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline block text-center"
                    >
                      View Map of 2710 Violet Rd, Corpus Christi, TX 78410
                    </a>
                    <a 
                      href="https://maps.google.com/directions?q=2710+Violet+Rd,+Corpus+Christi,+TX+78410" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline block text-center"
                    >
                      Get Driving Directions
                    </a>
                  </div>
                  
                  <StaticMap />
                </div>
              </div>
            </div>
          </section>
        </>
      )
    }
