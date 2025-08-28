import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to:'/about', label:'ABOUT US' },
  { to:'/services', label:'SERVICES' },
  { to:'/resources', label:'RESOURCES' },
  { to:'/prayer-requests', label:'PRAYER REQUESTS' },
  { to:'/calendar', label:'CALENDAR' },
  { to:'/beliefs', label:'OUR BELIEFS' },
]

export default function SidebarNav() {
  return (
    <div className="bg-yellow-100 p-4 min-h-screen w-64">
      <nav className="space-y-2">
        {navItems.map(item => (
          <NavLink 
            key={item.to} 
            to={item.to} 
            className={({isActive}) => `
              block w-full text-left px-4 py-3 text-sm font-bold uppercase
              border border-gray-300 bg-gray-200 hover:bg-gray-300
              ${isActive ? 'bg-gray-400' : ''}
            `}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      
      <div className="mt-6">
        <button className="w-full px-4 py-2 text-sm font-medium text-red-600 bg-yellow-100 border border-red-600 rounded-full hover:bg-red-50">
          Subscribe to our Newsletter &gt;&gt;
        </button>
      </div>
      
      <div className="mt-4">
        <a href="#" className="text-blue-600 underline text-sm">Message Center</a>
      </div>
    </div>
  )
}
