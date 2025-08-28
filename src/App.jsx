
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileStickyBar from './components/MobileStickyBar'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip links for accessibility */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
        <a href="#main" className="block bg-primary text-white px-4 py-2 rounded focus:ring-2 focus:ring-primary focus:ring-offset-2">
          Skip to main content
        </a>
        <a href="#navigation" className="block bg-primary text-white px-4 py-2 rounded focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-2">
          Skip to navigation
        </a>
        <a href="#footer" className="block bg-primary text-white px-4 py-2 rounded focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-2">
          Skip to footer
        </a>
      </div>
      <Header />
      <main id="main" role="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  )
}
