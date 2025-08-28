
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ministries from '../data/ministries.json'
import events from '../data/events.json'
import LazyImage from '../components/LazyImage'

export default function MinistryDetail(){
  const { slug } = useParams()
  const m = ministries.find(x => x.slug === slug)
  
  if(!m) return (
    <section className="section">
      <div className="container">
        <div className="text-center py-12">
          <h1 className="font-heading text-h1 mb-4">Ministry Not Found</h1>
          <p className="text-body mb-6">The ministry you're looking for doesn't exist.</p>
          <Link to="/ministries" className="btn">Back to Ministries</Link>
        </div>
      </div>
    </section>
  )

  // Filter events that might be related to this ministry
  const relatedEvents = events.filter(e => 
    e.title.toLowerCase().includes(m.category.toLowerCase()) ||
    e.description.toLowerCase().includes(m.category.toLowerCase())
  ).slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{m.name} - Annaville Seventh-day Adventist Church</title>
        <meta name="description" content={m.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sand to-surface py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                {m.category}
              </div>
              <h1 className="font-heading text-h1 mb-6">{m.name}</h1>
              <p className="text-body text-lg mb-6">{m.description}</p>
              <div className="flex flex-wrap gap-4 text-muted">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🕒</span>
                  <span>{m.meeting}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📍</span>
                  <span>{m.where}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👥</span>
                  <span>{m.ages}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <LazyImage 
                src={m.image} 
                alt={`${m.name} at Annaville SDA Church`}
                className="w-full h-80 rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* What We Do */}
              <div>
                <h2 className="font-heading text-h2 mb-6">What We Do</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {m.activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-sand rounded-lg">
                      <span className="text-primary text-xl">✓</span>
                      <span className="text-body">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              {relatedEvents.length > 0 && (
                <div>
                  <h2 className="font-heading text-h2 mb-6">Upcoming Events</h2>
                  <div className="grid gap-4">
                    {relatedEvents.map(e => (
                      <Link 
                        key={e.slug} 
                        to={`/events/${e.slug}`}
                        className="block p-6 bg-white border border-subtle rounded-lg hover:shadow-md transition-shadow"
                      >
                        <h3 className="font-heading text-h3 mb-2">{e.title}</h3>
                        <p className="text-muted mb-2">{e.date} • {e.time}</p>
                        <p className="text-body">{e.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              <div>
                <h2 className="font-heading text-h2 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {m.faq.map((item, index) => (
                    <details key={index} className="group">
                      <summary className="cursor-pointer p-6 bg-white border border-subtle rounded-lg hover:bg-sand/50 transition-colors list-none">
                        <div className="flex items-center justify-between">
                          <h3 className="font-heading text-h3 text-ink">{item.question}</h3>
                          <span className="text-primary text-xl group-open:rotate-180 transition-transform">▼</span>
                        </div>
                      </summary>
                      <div className="p-6 bg-sand/30 rounded-b-lg border-t-0 border border-subtle">
                        <p className="text-body text-ink leading-relaxed">{item.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Contact Information */}
              <div className="bg-white border border-subtle rounded-lg p-6">
                <h3 className="font-heading text-h3 mb-4">Get Involved</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-ink mb-2">Ministry Leader</h4>
                    <p className="text-body">{m.leader}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-ink mb-2">Contact</h4>
                    <div className="space-y-2">
                      <a 
                        href={`mailto:${m.contact.email}`}
                        className="block text-primary hover:text-primaryHover transition-colors"
                      >
                        📧 {m.contact.email}
                      </a>
                      <a 
                        href={`tel:${m.contact.phone.replace(/\D/g, '')}`}
                        className="block text-primary hover:text-primaryHover transition-colors"
                      >
                        📞 {m.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-ink mb-2">Meeting Details</h4>
                    <p className="text-body">{m.meeting}</p>
                    <p className="text-muted text-sm">{m.where}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="btn w-full">
                    Contact Ministry Leader
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white border border-subtle rounded-lg p-6">
                <h3 className="font-heading text-h3 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link 
                    to="/ministries" 
                    className="block text-primary hover:text-primaryHover transition-colors"
                  >
                    ← Back to All Ministries
                  </Link>
                  <Link 
                    to="/events" 
                    className="block text-primary hover:text-primaryHover transition-colors"
                  >
                    View All Events
                  </Link>
                  <Link 
                    to="/visit" 
                    className="block text-primary hover:text-primaryHover transition-colors"
                  >
                    Plan Your Visit
                  </Link>
                </div>
              </div>

              {/* Related Ministries */}
              <div className="bg-white border border-subtle rounded-lg p-6">
                <h3 className="font-heading text-h3 mb-4">Other Ministries</h3>
                <div className="space-y-3">
                  {ministries
                    .filter(ministry => ministry.slug !== m.slug)
                    .slice(0, 3)
                    .map(ministry => (
                      <Link 
                        key={ministry.slug}
                        to={`/ministries/${ministry.slug}`}
                        className="block p-3 bg-sand rounded-lg hover:bg-sand/80 transition-colors"
                      >
                        <h4 className="font-medium text-ink">{ministry.name}</h4>
                        <p className="text-muted text-sm">{ministry.meeting}</p>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
