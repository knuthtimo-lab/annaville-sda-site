
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import ministries from '../data/ministries.json'
import { MinistryCard } from '../components/Cards'

const filters = ['Adults','Children','Youth','Men','Women','Outreach']

export default function Ministries(){
  const [active, setActive] = useState('All')
  return (
    <section className="section">
      <Helmet><title>Ministries | Annaville SDA Church</title></Helmet>
      <div className="container">
        <h1 className="font-heading text-display30 mb-10">Ministries</h1>
        <div className="flex gap-6 mb-12 flex-wrap">
          {filters.map(f => (
            <button key={f} className="chip" aria-pressed={active===f} onClick={()=>setActive(f)}>{f}</button>
          ))}
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {ministries.map(m => <MinistryCard key={m.slug} m={m} />)}
        </div>
      </div>
    </section>
  )
}
