
import React from 'react'
import { Link } from 'react-router-dom'
import { track, events } from '../utils/analytics'
import LazyImage from './LazyImage'

export function TextHero(){
  const scrollToServiceTimes = () => {
    const element = document.getElementById('service-times')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    track(events.CTA_CLICK, { label: 'service_times' })
  }

  return (
    <section className="relative bg-gradient-to-br from-sand to-surface">
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content on the Left */}
          <div className="order-1 lg:order-1">
            <h1 className="font-heading text-h1 mb-8">Welcome to Annaville Seventh-day Adventist Church</h1>
            <p className="text-ink text-body mb-10">The Annaville SDA Church offers worship services for members, non-members, or anyone interested in learning more about practical Christian living from the Word of God.</p>
            <div className="mb-10 text-muted text-small">Sabbath School 9:30 AM • Divine Worship 11:00 AM • 2710 Violet Rd</div>
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/visit" 
                className="btn" 
                onClick={() => track(events.CTA_CLICK, { label: 'plan_visit' })}
                data-cta="plan_visit"
              >
                Plan Your Visit
              </Link>
              <button 
                className="btn-outline" 
                onClick={scrollToServiceTimes}
                data-cta="service_times"
              >
                See Service Times
              </button>
            </div>
          </div>
          
          {/* Large Hero Image on the Right */}
          <div className="order-2 lg:order-2">
            <LazyImage 
              src="/assets/hero_golden_hour.png" 
              alt="Annaville SDA Church building during golden hour with people walking on the path" 
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Safe photo hero variant with dim overlay; H1 remains text-first
export function PhotoHeroSafe(){
  const scrollToServiceTimes = () => {
    const element = document.getElementById('service-times')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    track(events.CTA_CLICK, { label: 'service_times' })
  }

  return (
    <section className="relative">
      <LazyImage src="/assets/hero_golden_hour.png" alt="Annaville SDA Church building during golden hour" className="absolute right-0 top-8 w-1/4 h-full" />
      <div className="absolute right-0 top-8 w-1/4 h-full bg-black/40" aria-hidden="true"></div>
      <div className="relative container py-40 text-white">
        <h1 className="font-heading text-h1 mb-8">Welcome to Annaville Seventh-day Adventist Church</h1>
        <p className="text-white text-body mb-10">The Annaville SDA Church offers worship services for members, non-members, or anyone interested in learning more about practical Christian living from the Word of God.</p>
        <div className="mb-10 text-white/90 text-small">Sabbath School 9:30 AM • Divine Worship 11:00 AM • 2710 Violet Rd</div>
        <div className="flex flex-wrap gap-6">
          <Link 
            to="/visit" 
            className="btn"
            data-cta="plan_visit"
          >
            Plan Your Visit
          </Link>
          <button 
            className="btn-outline text-white border-white hover:bg-white/10" 
            onClick={scrollToServiceTimes}
            data-cta="service_times"
          >
            See Service Times
          </button>
        </div>
      </div>
    </section>
  )
}
