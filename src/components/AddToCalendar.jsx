import React from 'react'
import { googleCalendarUrl, downloadICS } from '../utils/calendar'
import { track, events as ga } from '../utils/analytics'

export default function AddToCalendar() {
  const handleAppleCalendar = () => {
    const now = new Date()
    const nextSat = new Date(now)
    const day = now.getDay()
    const diff = (6 - day + 7) % 7 || 7
    nextSat.setDate(now.getDate() + diff)
    const start = new Date(Date.UTC(nextSat.getFullYear(), nextSat.getMonth(), nextSat.getDate(), 14, 30)) // approx 9:30 CT
    const end = new Date(Date.UTC(nextSat.getFullYear(), nextSat.getMonth(), nextSat.getDate(), 16, 0))
    
    downloadICS({ 
      title: 'Sabbath School', 
      details: 'Weekly Sabbath School at Annaville SDA Church.', 
      location: '2710 Violet Rd, Corpus Christi, TX 78410', 
      start, 
      end, 
      filename: 'sabbath-school.ics' 
    })
    
    track(ga.CTA_CLICK, { label: 'add_to_apple_calendar' })
  }

  const handleGoogleCalendar = () => {
    const nextSaturday = new Date()
    const day = nextSaturday.getDay()
    const diff = (6 - day + 7) % 7 || 7
    nextSaturday.setDate(nextSaturday.getDate() + diff)
    const end = new Date(nextSaturday.getTime() + 90 * 60 * 1000) // 90 minutes later
    
    const url = googleCalendarUrl({
      title: 'Sabbath School',
      details: 'Weekly Sabbath School at Annaville SDA Church.',
      location: '2710 Violet Rd, Corpus Christi, TX 78410',
      start: nextSaturday,
      end: end
    })
    
    window.open(url, '_blank', 'noopener,noreferrer')
    track(ga.CTA_CLICK, { label: 'add_to_google_calendar' })
  }

  return (
    <div className="flex flex-wrap gap-6">
      <button 
        className="chip bg-primary text-white hover:bg-primaryHover focus-ring"
        onClick={handleAppleCalendar}
        aria-label="Add Sabbath School to Apple Calendar"
      >
        📅 Add to Apple Calendar
      </button>
      <button 
        className="chip bg-primaryDeep text-white hover:bg-primaryHover focus-ring"
        onClick={handleGoogleCalendar}
        aria-label="Add Sabbath School to Google Calendar"
      >
        📅 Add to Google Calendar
      </button>
    </div>
  )
}
