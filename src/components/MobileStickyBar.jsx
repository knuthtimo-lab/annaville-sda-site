
import React from 'react'
import { Link } from 'react-router-dom'
import { track, events } from '../utils/analytics'

export default function MobileStickyBar(){
  const scrollToVisitForm = () => {
    const element = document.getElementById('visit-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    track(events.CTA_CLICK, { label: 'plan_visit' })
  }

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex justify-around border-t bg-surface p-2 md:hidden">
      <a 
        href="tel:+13612415501" 
        className="flex flex-col items-center gap-1 text-sm focus-ring" 
        aria-label="Call the church"
        onClick={() => track(events.CLICK_TO_CALL, { tel: '3612415501' })}
        data-cta="click_to_call"
      >
        📞 Call
      </a>
      <a 
        href="https://maps.apple.com/?q=2710+Violet+Rd+Corpus+Christi" 
        className="flex flex-col items-center gap-1 text-sm focus-ring"
        onClick={() => track(events.OPEN_DIRECTIONS, { provider: 'maps' })}
        data-cta="open_directions"
      >
        🧭 Directions
      </a>
      <button 
        className="flex flex-col items-center gap-1 text-sm focus-ring" 
        onClick={scrollToVisitForm}
        data-cta="plan_visit"
      >
        📝 Plan Visit
      </button>
    </nav>
  )
}
