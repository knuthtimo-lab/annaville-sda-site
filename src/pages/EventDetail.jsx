
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import events from '../data/events.json'
import { googleCalendarUrl, downloadICS } from '../utils/calendar'
import { track, events as ga } from '../utils/analytics'

export default function EventDetail(){
  const { slug } = useParams()
  const e = events.find(x => x.slug === slug)

  useEffect(()=>{ if (e) track(ga.EVENT_DETAILS_VIEW,{slug:e.slug}) },[slug])

  if(!e) return <section className="section"><div className="container"><p>Event not found.</p></div></section>

  // Parse time from 12-hour format to 24-hour format
  const parseTime = (timeStr) => {
    if (!timeStr) return '10:00'
    const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i)
    if (!match) return '10:00'
    
    let hours = parseInt(match[1])
    const minutes = match[2]
    const period = match[3].toUpperCase()
    
    if (period === 'PM' && hours !== 12) hours += 12
    if (period === 'AM' && hours === 12) hours = 0
    
    return `${hours.toString().padStart(2, '0')}:${minutes}`
  }

  const time24 = parseTime(e.time || '10:00 AM')
  const start = new Date(`${e.date}T${time24}:00`)
  const end = new Date(start.getTime() + 60 * 60 * 1000)

  const jsonLd = {
    "@context":"https://schema.org","@type":"Event","name":e.title,
    "startDate":start.toISOString(),"endDate":end.toISOString(),
    "eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode",
    "location":{"@type":"Place","name":"Annaville SDA Church","address":"2710 Violet Rd, Corpus Christi, TX 78410"},
    "description":e.description
  }

  return (
    <section className="section">
      <Helmet>
        <title>{e.title} | Events</title>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container">
        <h1 className="font-heading text-display30 mb-2">{e.title}</h1>
        <div className="text-muted mb-4">{e.date} • {e.time} • {e.location}</div>
        <p className="text-[16px]">{e.description}</p>
        <div className="mt-4 flex gap-3">
          <a className="btn-ghost underline" target="_blank" rel="noreferrer"
             href={googleCalendarUrl({title:e.title, details:e.description, location:e.location, start, end})}>Add to Google Calendar</a>
          <button className="btn-ghost underline" onClick={()=>downloadICS({title:e.title, details:e.description, location:e.location, start, end, filename:`${e.slug}.ics`})}>Add to Apple Calendar</button>
        </div>
      </div>
    </section>
  )
}
