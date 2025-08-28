import React from 'react'
import SEOHead from '../components/SEOHead'

export default function Calendar() {
  return (
    <>
      <SEOHead 
        title="Calendar - Annaville Seventh-day Adventist Church"
        description="Church events and calendar"
      />
      
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
          Church Events
          <div className="ml-4 flex space-x-1">
            <div className="w-2 h-2 bg-blue-400"></div>
            <div className="w-2 h-2 bg-blue-400"></div>
            <div className="w-2 h-2 bg-blue-400"></div>
            <div className="w-2 h-2 bg-blue-400"></div>
            <div className="w-2 h-2 bg-blue-400"></div>
          </div>
        </h1>
        
        <h2 className="text-xl font-semibold text-red-600 mb-6">
          Upcoming events:
        </h2>
        
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <p className="text-gray-600 text-center">
            No upcoming events at this time. Please check back later for updates.
          </p>
        </div>
      </div>
    </>
  )
}
