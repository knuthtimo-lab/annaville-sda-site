
import React from 'react'
import { Link } from 'react-router-dom'

export function EventCard({ e }){
  const dt = new Date(e.date)
  const mon = dt.toLocaleString('en', { month:'short' })
  const day = dt.getDate()
  
  // Map specific event names to images
  const getEventImage = (title) => {
    const lowerTitle = title.toLowerCase()
    if (lowerTitle.includes('community sabbath lunch')) {
      return '/assets/potluck.png'
    }
    if (lowerTitle.includes('youth vespers')) {
      return '/assets/youth_vespers.png'
    }
    if (lowerTitle.includes('neighborhood food drive')) {
      return '/assets/family_entry.png'
    }
    if (lowerTitle.includes('potluck') || lowerTitle.includes('lunch') || lowerTitle.includes('dinner')) {
      return '/assets/potluck.png'
    }
    if (lowerTitle.includes('family') || lowerTitle.includes('community')) {
      return '/assets/family_entry.png'
    }
    if (lowerTitle.includes('welcome') || lowerTitle.includes('committee')) {
      return '/assets/welcome_commite.png'
    }
    // Default event image
    return '/assets/potluck.png'
  }
  
  return (
    <article className="card p-10 flex flex-col" style={{aspectRatio:'4/3'}}>
      <div className="flex items-center gap-6 mb-8">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-primary text-white flex items-center justify-center">
          <img 
            src={getEventImage(e.title)} 
            alt={`${e.title} event`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="font-heading text-h3">{e.title}</h3>
          <div className="text-muted text-small mt-2">{e.time} • {e.location}</div>
        </div>
      </div>
      <p className="mt-6 text-body mb-8">{e.description}</p>
      <div className="mt-auto pt-8">
        <Link 
          to={`/events/${e.slug}`} 
          className="btn-outline"
          aria-label={`Event details: ${e.title} on ${mon} ${day}`}
        >
          Details — {e.title}
        </Link>
      </div>
    </article>
  )
}

export function MinistryCard({ m }){
  // Map specific ministry names to images
  const getMinistryImage = (name) => {
    const lowerName = name.toLowerCase()
    if (lowerName === 'children\'s ministry') {
      return '/assets/children_ministry_craft.png'
    }
    if (lowerName === 'youth ministry') {
      return '/assets/youth_vespers.png'
    }
    if (lowerName === 'adult sabbath school') {
      return '/assets/speeking.png'
    }
    if (lowerName === 'women\'s ministry') {
      return '/assets/pray_heart.png'
    }
    if (lowerName === 'men\'s ministry') {
      return '/assets/family_entry.png'
    }
    if (lowerName === 'community outreach') {
      return '/assets/welcome_commite.png'
    }
    // Fallback for other ministries
    if (lowerName.includes('children') || lowerName.includes('kids')) {
      return '/assets/children_ministry_craft.png'
    }
    if (lowerName.includes('youth') || lowerName.includes('vespers')) {
      return '/assets/youth_vespers.png'
    }
    if (lowerName.includes('welcome') || lowerName.includes('committee')) {
      return '/assets/welcome_commite.png'
    }
    if (lowerName.includes('prayer') || lowerName.includes('pray')) {
      return '/assets/pray_heart.png'
    }
    // Default ministry image
    return '/assets/welcome_commite.png'
  }
  
  return (
    <article className="card p-10 flex flex-col">
      <div className="mb-6">
        <img 
          src={getMinistryImage(m.name)} 
          alt={`${m.name} ministry`}
          className="w-full h-80 object-cover rounded-lg mb-4"
          loading="lazy"
        />
        <h3 className="font-heading text-h3">{m.name}</h3>
      </div>
      <div className="text-muted text-small mb-3">{m.meeting}</div>
      <div className="text-small mb-8">Leader: {m.leader}</div>
      <div className="mt-auto pt-8">
        <Link 
          to={`/ministries/${m.slug}`} 
          className="btn-outline"
          aria-label={`Explore ${m.name} ministry`}
        >
          Explore {m.name}
        </Link>
      </div>
    </article>
  )
}

export function SermonCard({ s }){
  return (
    <article className="card p-10 flex flex-col" style={{aspectRatio:'4/3'}}>
      <div className="flex items-center gap-6 mb-8">
        <div className="w-24 h-24 bg-sand rounded-lg overflow-hidden flex items-center justify-center">
          <img 
            src="/assets/speeking.png" 
            alt={`Sermon by ${s.speaker}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="font-heading text-h3">{s.title}</h3>
          <div className="text-muted text-small mt-2">{s.speaker} • {new Date(s.date).toLocaleDateString()}</div>
        </div>
      </div>
      <p className="mt-6 text-body mb-8">{s.summary}</p>
      <div className="mt-auto pt-8">
        <Link 
          to={`/sermons/${s.slug}`} 
          className="btn-outline"
          aria-label={`Watch or listen to ${s.title} by ${s.speaker}`}
        >
          Watch/Listen — {s.title}
        </Link>
      </div>
    </article>
  )
}
