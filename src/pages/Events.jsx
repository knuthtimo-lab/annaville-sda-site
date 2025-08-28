
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import events from '../data/events.json'
import { EventCard } from '../components/Cards'

const filters = ['This Month','Next Month','Family','Outreach']

export default function Events(){
  const [active, setActive] = useState('This Month')
  return (
    <section className="section">
      <Helmet><title>Events | Annaville SDA Church</title></Helmet>
      <div className="container">
        <h1 className="font-heading text-display30 mb-10">Events</h1>
        <div className="flex gap-6 mb-12 flex-wrap">
          {filters.map(f => (
            <button key={f} className="chip" aria-pressed={active===f} onClick={()=>setActive(f)}>{f}</button>
          ))}
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {events.map(e => <EventCard key={e.slug} e={e} />)}
        </div>
      </div>
    </section>
  )
}
