
import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import sermons from '../data/sermons.json'
import { track, events } from '../utils/analytics'

export default function SermonDetail(){
  const { slug } = useParams()
  const s = sermons.find(x => x.slug === slug)
  if(!s) return <section className="section"><div className="container"><p>Sermon not found.</p></div></section>
  const jsonLd = {"@context":"https://schema.org","@type":"AudioObject","name":s.title,"author":s.speaker,"uploadDate":s.date,"description":s.summary}
  return (
    <section className="section">
      <Helmet>
        <title>{s.title} | Sermons</title>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container">
        <h1 className="font-heading text-display30 mb-1">{s.title}</h1>
        <div className="text-muted mb-3">{s.speaker} • {new Date(s.date).toLocaleDateString()}</div>
        <div className="card p-4">
          <p className="mb-2">{s.summary}</p>
          <audio controls className="w-full" onPlay={()=>track(events.SERMON_PLAY,{slug:s.slug})}>
            <source src="/assets/sample.mp3" type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
    </section>
  )
}
