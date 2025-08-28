
export const track = (eventName, params = {}) => {
  if (window && window.gtag) {
    window.gtag('event', eventName, params)
  } else {
    console.log('[analytics]', eventName, params)
  }
}

// DataLayer tracking for GA4/GTM
export const DL = (...args) => {
  if (window && window.dataLayer) {
    window.dataLayer.push(...args)
  }
}

export const events = {
  CTA_CLICK: 'cta_click',
  CLICK_TO_CALL: 'click_to_call',
  OPEN_DIRECTIONS: 'open_directions',
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  NEWSLETTER_SIGNUP: 'newsletter_signup',
  EVENT_DETAILS_VIEW: 'event_details_view',
  SERMON_PLAY: 'sermon_play'
}

// Initialize analytics event listeners
export const initAnalytics = () => {
  // CTA tracking
  document.querySelectorAll('[data-cta]').forEach(el => {
    el.addEventListener('click', () => {
      DL({ event: 'cta_click', label: el.dataset.cta })
    })
  })

  // Form tracking
  const visitForm = document.getElementById('visit-form')
  if (visitForm) {
    visitForm.addEventListener('focusin', () => {
      DL({ event: 'form_start', form_id: 'visit_home' })
    }, { once: true })
  }
}
