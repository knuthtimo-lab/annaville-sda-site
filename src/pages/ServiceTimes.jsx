
    import React from 'react'
    import { Helmet } from 'react-helmet-async'
    export default function ServiceTimes() {
      return (
        <section className="section">
          <Helmet><title>Service Times | Annaville SDA Church</title></Helmet>
          <div className="container">
            <h1 className="font-heading text-display30 mb-4">Service Times</h1>

<ul className="text-[16px] list-disc pl-6">
  <li><strong>Sabbath School</strong>: 9:30 AM</li>
  <li><strong>Worship Service</strong>: 11:00 AM</li>
</ul>

          </div>
        </section>
      )
    }
