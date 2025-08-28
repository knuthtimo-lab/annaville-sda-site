
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer id="footer" role="contentinfo" className="bg-sand border-t border-subtle mt-12">
      <div className="container grid md:grid-cols-3 gap-8 py-16">
        <div>
          <h3 className="font-heading text-h3 mb-4">Annaville Seventh-day Adventist Church</h3>
          <p className="text-body mb-2">2710 Violet Rd<br/>Corpus Christi, TX 78410</p>
          <p className="mb-2">
            <a href="tel:+13612415501" className="text-primary underline hover:text-primaryHover">
              Call (361) 241-5501
            </a>
          </p>
          <p className="mb-2">
            <a href="https://maps.google.com/?q=2710+Violet+Rd,+Corpus+Christi,+TX+78410" 
               className="text-primary underline hover:text-primaryHover">
              Get Directions
            </a>
          </p>
          <p className="text-muted text-small">Sabbath School 9:30 AM • Divine Worship 11:00 AM</p>
          
          {/* Leadership Information */}
          <div className="mt-6 text-small text-muted">
            <p><strong>Pastor:</strong> Matt McMearty</p>
            <p><strong>Head Elder:</strong> Regena Simms</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-heading text-h3 mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-body hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-body hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/resources" className="text-body hover:text-primary transition-colors">Resources</Link></li>
            <li><Link to="/prayer-requests" className="text-body hover:text-primary transition-colors">Prayer Requests</Link></li>
            <li><Link to="/calendar" className="text-body hover:text-primary transition-colors">Calendar</Link></li>
            <li><Link to="/beliefs" className="text-body hover:text-primary transition-colors">Our Beliefs</Link></li>
            <li><Link to="/contact" className="text-body hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-heading text-h3 mb-4">Newsletter</h3>
          <p className="text-body mb-4">
            If you would like to receive our newsletter please fill out the form below.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="footer-newsletter-name" className="block text-sm font-medium text-ink mb-2">
                Name:
              </label>
              <input
                id="footer-newsletter-name"
                type="text"
                className="w-full border border-subtle rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="footer-newsletter-email" className="block text-sm font-medium text-ink mb-2">
                Email Address:
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                className="w-full border border-subtle rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <button type="submit" className="btn w-full">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-subtle py-6">
        <div className="container flex flex-wrap items-center gap-4 justify-between">
          <div className="text-small text-muted">
            © {year} Annaville Seventh-day Adventist Church. All rights reserved.
          </div>
          <div className="text-small flex gap-6">
            <Link className="text-muted hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
            <Link className="text-muted hover:text-primary transition-colors" to="/terms">Terms of Use</Link>
            <Link className="text-muted hover:text-primary transition-colors" to="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
