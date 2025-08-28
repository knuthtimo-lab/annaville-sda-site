
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { track, events } from '../utils/analytics'

const navItems = [
  { to:'/about', label:'ABOUT US' },
  { to:'/services', label:'SERVICES' },
  { to:'/resources', label:'RESOURCES' },
  { to:'/prayer-requests', label:'PRAYER REQUESTS' },
  { to:'/calendar', label:'CALENDAR' },
  { to:'/beliefs', label:'OUR BELIEFS' },
]

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header role="banner" className="z-50 bg-white/90 backdrop-blur border-b border-subtle">
      <nav id="navigation" aria-label="Main navigation" className="container flex items-center justify-between h-20">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-4 font-heading text-lg font-semibold tracking-tight text-ink leading-tight">
            <img 
              src="/assets/favicon.ico.gif" 
              alt="Annaville SDA Church Logo" 
              className="w-20 h-20 rounded-lg"
            />
            <span>
              Annaville Seventh-day<br />Adventist Church
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <NavLink 
              key={item.to} 
              to={item.to} 
              className={({isActive})=>`text-sm font-medium transition-colors ${isActive?'text-primary font-semibold':'text-ink hover:text-primary'}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            className="btn text-sm px-4 py-2" 
            onClick={()=>track(events.CTA_CLICK,{label:'contact'})}
          >
            Contact Us
          </Link>
        </div>
        <button 
          aria-label="Open menu" 
          className="md:hidden btn-ghost" 
          onClick={()=>setOpen(true)}
        >
          <span aria-hidden className="text-3xl">☰</span>
        </button>
      </nav>

      {open && (
        <div role="dialog" aria-modal="true" className="md:hidden fixed inset-0 bg-black/30" onClick={()=>setOpen(false)}>
          <div className="absolute top-0 right-0 w-[80%] h-full bg-white shadow-level1 p-8" onClick={e=>e.stopPropagation()}>
            <div className="flex justify-between items-center mb-12">
              <span className="font-heading text-h2">Menu</span>
              <button className="btn-ghost" onClick={()=>setOpen(false)} aria-label="Close menu">✕</button>
            </div>
            <ul className="space-y-6">
              {navItems.map(item => (
                <li key={item.to}>
                  <NavLink 
                    to={item.to} 
                    onClick={()=>setOpen(false)} 
                    className={({isActive})=>`block py-5 text-body ${isActive?'text-primary font-semibold':'text-ink hover:text-primary'}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link 
                  to="/contact" 
                  className="btn w-full" 
                  onClick={()=>{setOpen(false); track(events.CTA_CLICK,{label:'contact'})}}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
