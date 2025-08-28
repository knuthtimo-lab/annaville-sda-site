import React from 'react'
import { track, events as ga } from '../utils/analytics'

export default function StaticMap() {
  return (
    <section aria-labelledby="mapTitle">
      <h2 id="mapTitle" className="sr-only">Location Map</h2>
      <div className="rounded-xl shadow-card bg-surface p-8 max-w-xl">
        <iframe 
          title="Google Map" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          className="w-full h-[320px] rounded-lg" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.1234567890123!2d-97.3964!3d27.8006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8668516b6c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2s2710%20Violet%20Rd%2C%20Corpus%20Christi%2C%20TX%2078410!5e0!3m2!1sen!2sus!4v1234567890123"
        />
        <div className="mt-8">
          <a 
            className="btn-outline" 
            href="https://maps.google.com/?q=2710+Violet+Rd,+Corpus+Christi,+TX+78410" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => track(ga.CTA_CLICK, { label: 'open_google_maps' })}
            data-cta="open_google_maps"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
