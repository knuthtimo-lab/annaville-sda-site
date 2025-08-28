
import React from 'react'
import { Helmet } from 'react-helmet-async'
import sermons from '../data/sermons.json'
import { SermonCard } from '../components/Cards'

export default function Sermons(){
  return (
    <section className="section">
      <Helmet><title>Sermons | Annaville SDA Church</title></Helmet>
      <div className="container">
        <h1 className="font-heading text-display30 mb-4">Sermons</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {sermons.map(s => <SermonCard key={s.slug} s={s} />)}
        </div>
      </div>
    </section>
  )
}
