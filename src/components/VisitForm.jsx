import React, { useState } from 'react'
import { track, events as ga } from '../utils/analytics'
import { sendVisitRequest } from '../utils/email'

export default function VisitForm() {
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const showError = (field, show) => {
    setErrors(prev => ({
      ...prev,
      [field]: show
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    const form = e.target
    let isValid = true

    // Validate name
    if (!form.name.value.trim()) {
      showError('name', true)
      isValid = false
    } else {
      showError('name', false)
    }

    // Validate email
    if (!form.email.validity.valid) {
      showError('email', true)
      isValid = false
    } else {
      showError('email', false)
    }

    // Validate message
    if (!form.message.value.trim()) {
      showError('message', true)
      isValid = false
    } else {
      showError('message', false)
    }

    if (!isValid) {
      setIsSubmitting(false)
      return false
    }

    // Track form submission
    track(ga.FORM_SUBMIT, { form_id: 'visit_home' })

    // Prepare form data
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      date: form.date.value || null,
      message: form.message.value.trim(),
      consent: form.consent.checked
    }

    try {
      // Send email
      const result = await sendVisitRequest(formData)
      
      if (result.success) {
        setSubmitStatus('success')
        form.reset()
        setErrors({})
        
        // Show success toast
        const toast = document.createElement('div')
        toast.setAttribute('role', 'status')
        toast.className = 'fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-lg shadow z-50'
        toast.textContent = 'Thanks! We\'ve received your request and will email you soon.'
        document.body.appendChild(toast)
        
        setTimeout(() => {
          if (toast.parentNode) {
            toast.parentNode.removeChild(toast)
          }
        }, 5000)
      } else {
        setSubmitStatus('error')
        throw new Error(result.message)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      // Show error toast
      const toast = document.createElement('div')
      toast.setAttribute('role', 'status')
      toast.className = 'fixed bottom-6 right-6 bg-red-600 text-white px-4 py-3 rounded-lg shadow z-50'
      toast.textContent = 'Sorry, there was an error. Please try again or contact us directly.'
      document.body.appendChild(toast)
      
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast)
        }
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }

    return false
  }

  const handleFocus = () => {
    // Track form start (only once)
    if (!window.formStartTracked) {
      track(ga.FORM_START, { form_id: 'visit_home' })
      window.formStartTracked = true
    }
  }

  return (
    <form 
      id="visit-form" 
      noValidate 
      onSubmit={handleSubmit} 
      aria-describedby="visit-help"
      onFocus={handleFocus}
      className="space-y-8"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-3">
          Your Name *
        </label>
        <input 
          id="name" 
          name="name" 
          type="text"
          required 
          aria-describedby="name-err"
          className={`w-full border rounded-lg px-6 py-4 focus:ring-2 focus:ring-focus focus:border-transparent ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your Name"
        />
        {errors.name && (
          <p id="name-err" className="text-red-600 text-sm mt-3">
            Please enter your name.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-3">
          Your Email *
        </label>
        <input 
          id="email" 
          type="email" 
          name="email" 
          required 
          aria-describedby="email-err"
          className={`w-full border rounded-lg px-6 py-4 focus:ring-2 focus:ring-focus focus:border-transparent ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your Email"
        />
        {errors.email && (
          <p id="email-err" className="text-red-600 text-sm mt-3">
            Please enter a valid email.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-ink mb-3">
          Visit Date (optional)
        </label>
        <input 
          id="date" 
          type="date" 
          name="date" 
          className="w-full border border-gray-300 rounded-lg px-6 py-4 focus:ring-2 focus:ring-focus focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="msg" className="block text-sm font-medium text-ink mb-3">
          Your Message *
        </label>
        <textarea 
          id="msg" 
          name="message" 
          required 
          aria-describedby="msg-err"
          rows={6}
          className={`w-full border rounded-lg px-6 py-4 focus:ring-2 focus:ring-focus focus:border-transparent ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your Message"
        />
        {errors.message && (
          <p id="msg-err" className="text-red-600 text-sm mt-3">
            Please add a short message.
          </p>
        )}
      </div>

      <div className="flex items-start gap-4">
        <input 
          id="consent" 
          type="checkbox" 
          name="consent" 
          className="mt-1 rounded focus:ring-2 focus:ring-focus"
        />
        <label htmlFor="consent" className="text-sm text-ink">
          I consent to be contacted about my visit.
        </label>
      </div>

      <button 
        className="btn w-full" 
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
      
      {submitStatus === 'error' && (
        <p className="text-red-600 text-sm">
          There was an error sending your request. Please try again or contact us directly.
        </p>
      )}
      
      <p id="visit-help" className="text-sm text-muted">
        We'll email directions and parking info within 24 hours.
      </p>
    </form>
  )
}
