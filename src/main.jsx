
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Resources from './pages/Resources'
import PrayerRequests from './pages/PrayerRequests'
import Calendar from './pages/Calendar'
import Beliefs from './pages/Beliefs'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import { initAnalytics } from './utils/analytics'
import { initGA, initGTM } from './utils/analytics-config'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    { index:true, element:<Home/> },
    { path:'about', element:<About/> },
    { path:'services', element:<Services/> },
    { path:'resources', element:<Resources/> },
    { path:'prayer-requests', element:<PrayerRequests/> },
    { path:'calendar', element:<Calendar/> },
    { path:'beliefs', element:<Beliefs/> },
    { path:'contact', element:<Contact/> },
    { path:'privacy', element:<Privacy/> },
    { path:'terms', element:<Terms/> }
  ]
}])

// Initialize analytics after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initAnalytics()
  
  // Initialize Google Analytics and GTM
  // Uncomment these lines and add your tracking IDs in analytics-config.js
  // initGA()
  // initGTM()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)
