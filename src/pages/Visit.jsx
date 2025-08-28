
    import React from 'react'
    import { Helmet } from 'react-helmet-async'
    export default function PlanYourVisit() {
      return (
        <section className="section">
          <Helmet><title>Plan Your Visit | Annaville SDA Church</title></Helmet>
          <div className="container">
            <h1 className="font-heading text-display30 mb-4">Plan Your Visit</h1>

<p className="text-[16px] mb-4">Tell us you're coming and we’ll greet you. Enjoy worship!</p>
<form className="space-y-3 max-w-xl">
  <div className="visually-hidden" aria-hidden="true">
    <label htmlFor="website2">Do not fill</label>
    <input id="website2" name="website2" type="text" tabIndex="-1" autoComplete="off" />
  </div>
  <div>
    <label htmlFor="name2" className="block">Your Name</label>
    <input id="name2" required className="w-full border rounded-md px-3 py-3" placeholder="Your Name" />
  </div>
  <div>
    <label htmlFor="email2" className="block">Your Email</label>
    <input id="email2" type="email" required className="w-full border rounded-md px-3 py-3" placeholder="Your Email" />
  </div>
  <div>
    <label htmlFor="date2" className="block">Visit Date (optional)</label>
    <input id="date2" type="date" className="w-full border rounded-md px-3 py-3" />
  </div>
  <div>
    <label htmlFor="msg2" className="block">Your Message</label>
    <textarea id="msg2" className="w-full border rounded-md px-3 py-3" placeholder="Your Message"></textarea>
  </div>
  <div className="flex items-start gap-2">
    <input id="consent2" type="checkbox" required className="mt-1" />
    <label htmlFor="consent2" className="text-small">I consent to be contacted about my visit.</label>
  </div>
  <button className="btn w-full">Submit</button>
</form>

          </div>
        </section>
      )
    }
