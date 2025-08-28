// Analytics configuration for Google Analytics and Google Tag Manager
// Replace with your actual tracking IDs

export const analyticsConfig = {
  // Google Analytics 4 Measurement ID
  ga4Id: 'G-XXXXXXXXXX', // Replace with your GA4 ID
  
  // Google Tag Manager Container ID
  gtmId: 'GTM-XXXXXXX', // Replace with your GTM ID
  
  // Google Analytics Universal Analytics (legacy)
  uaId: 'UA-XXXXXXXXX-X', // Replace with your UA ID if needed
  
  // Custom dimensions and metrics
  customDimensions: {
    userType: 'cd1',
    pageType: 'cd2',
    contentCategory: 'cd3'
  },
  
  // Enhanced ecommerce settings
  ecommerce: {
    enabled: false, // Set to true if you have ecommerce
    currency: 'USD'
  },
  
  // Privacy settings
  privacy: {
    anonymizeIp: true,
    respectDoNotTrack: true,
    cookieConsent: true
  }
}

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    // GA4 is already loaded
    return
  }
  
  // Load Google Analytics script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.ga4Id}`
  document.head.appendChild(script)
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  window.gtag = function() {
    window.dataLayer.push(arguments)
  }
  
  window.gtag('js', new Date())
  window.gtag('config', analyticsConfig.ga4Id, {
    anonymize_ip: analyticsConfig.privacy.anonymizeIp,
    page_title: document.title,
    page_location: window.location.href
  })
}

// Initialize Google Tag Manager
export const initGTM = () => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    // GTM is already loaded
    return
  }
  
  // Load GTM script
  const script = document.createElement('script')
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${analyticsConfig.gtmId}');
  `
  document.head.appendChild(script)
  
  // Add GTM noscript fallback
  const noscript = document.createElement('noscript')
  noscript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${analyticsConfig.gtmId}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `
  document.body.insertBefore(noscript, document.body.firstChild)
}

// Enhanced event tracking
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      custom_map: analyticsConfig.customDimensions
    })
  }
}

// Page view tracking
export const trackPageView = (pageTitle, pageLocation) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', analyticsConfig.ga4Id, {
      page_title: pageTitle,
      page_location: pageLocation || window.location.href
    })
  }
}

// Conversion tracking
export const trackConversion = (conversionId, conversionLabel) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `AW-${conversionId}/${conversionLabel}`
    })
  }
}
