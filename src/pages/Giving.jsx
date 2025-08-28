
    import React from 'react'
    import { Helmet } from 'react-helmet-async'

    export default function Giving() {
      return (
        <>
          <Helmet>
            <title>Giving - Annaville Seventh-day Adventist Church</title>
            <meta name="description" content="Support the mission and ministries of Annaville SDA Church through tithe, offerings, and special projects. Give online securely." />
          </Helmet>

          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-sand to-surface py-20">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-heading text-h1 mb-6">Support Our Mission</h1>
                <p className="text-body text-lg mb-8">
                  Your generous giving enables us to share God's love, serve our community, and support ministries that make a difference in people's lives.
                </p>
                <a 
                  className="btn text-lg px-8 py-4" 
                  href="https://adventistgiving.org/" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Give Online Securely
                </a>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Main Content */}
                <div className="space-y-12">
                  
                  

                  {/* How Funds Are Used */}
                  <div>
                    <h2 className="font-heading text-h2 mb-6">How Your Gifts Are Used</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 bg-sand rounded-lg">
                        <h4 className="font-medium text-ink mb-2">Local Ministry Support</h4>
                        <p className="text-body text-sm">Children's and youth programs, Bible studies, and fellowship activities</p>
                      </div>
                      <div className="p-4 bg-sand rounded-lg">
                        <h4 className="font-medium text-ink mb-2">Community Outreach</h4>
                        <p className="text-body text-sm">Food drives, health screenings, and assistance to families in need</p>
                      </div>
                      <div className="p-4 bg-sand rounded-lg">
                        <h4 className="font-medium text-ink mb-2">Facility Maintenance</h4>
                        <p className="text-body text-sm">Building upkeep, utilities, and creating a welcoming environment</p>
                      </div>
                      <div className="p-4 bg-sand rounded-lg">
                        <h4 className="font-medium text-ink mb-2">Global Mission</h4>
                        <p className="text-body text-sm">Supporting Seventh-day Adventist mission work worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  
                  {/* Online Giving */}
                  <div className="bg-white border border-subtle rounded-lg p-6">
                    <h3 className="font-heading text-h3 mb-4">Give Online</h3>
                    <p className="text-body mb-4">
                      Give securely through our online platform. You can set up recurring gifts, 
                      designate specific funds, and receive instant receipts.
                    </p>
                    <a 
                      className="btn w-full mb-4" 
                      href="https://adventistgiving.org/" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Give Online Now
                    </a>
                    <div className="text-muted text-sm">
                      <p>✓ Secure and encrypted</p>
                      <p>✓ Instant receipts</p>
                      <p>✓ Recurring gifts available</p>
                    </div>
                  </div>

                  {/* Other Giving Methods */}
                  <div className="bg-white border border-subtle rounded-lg p-6">
                    <h3 className="font-heading text-h3 mb-4">Other Ways to Give</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-ink mb-1">In Person</h4>
                        <p className="text-body text-sm">During worship services or at the church office</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-ink mb-1">By Mail</h4>
                        <p className="text-body text-sm">Send checks to: 2710 Violet Rd, Corpus Christi, TX 78410</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-ink mb-1">Bank Transfer</h4>
                        <p className="text-body text-sm">Contact us for bank transfer information</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-white border border-subtle rounded-lg p-6">
                    <h3 className="font-heading text-h3 mb-4">Questions About Giving?</h3>
                    <p className="text-body mb-4">
                      We're here to help with any questions about giving or financial stewardship.
                    </p>
                    <div className="space-y-2">
                      <a 
                        href="mailto:treasurer@annavillesda.org"
                        className="block text-primary hover:text-primaryHover transition-colors"
                      >
                        📧 treasurer@annavillesda.org
                      </a>
                      <a 
                        href="tel:+13612415501"
                        className="block text-primary hover:text-primaryHover transition-colors"
                      >
                        📞 (361) 241-5501
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-16">
                <h2 className="font-heading text-h2 mb-8 text-center">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                  <details className="group">
                    <summary className="cursor-pointer p-6 bg-white border border-subtle rounded-lg hover:bg-sand/50 transition-colors list-none">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-h3 text-ink">Will I receive a receipt for my gifts?</h3>
                        <span className="text-primary text-xl group-open:rotate-180 transition-transform">▼</span>
                      </div>
                    </summary>
                    <div className="p-6 bg-sand/30 rounded-b-lg border-t-0 border border-subtle">
                      <p className="text-body text-ink leading-relaxed">
                        Yes! For online gifts, you'll receive an instant email receipt. For in-person or mailed gifts, 
                        we provide quarterly statements. All gifts are tax-deductible and properly documented for your records.
                      </p>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer p-6 bg-white border border-subtle rounded-lg hover:bg-sand/50 transition-colors list-none">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-h3 text-ink">Can I set up recurring gifts?</h3>
                        <span className="text-primary text-xl group-open:rotate-180 transition-transform">▼</span>
                      </div>
                    </summary>
                    <div className="p-6 bg-sand/30 rounded-b-lg border-t-0 border border-subtle">
                      <p className="text-body text-ink leading-relaxed">
                        Absolutely! You can set up recurring gifts through our online platform for weekly, monthly, 
                        or any frequency that works for you. You can modify or cancel recurring gifts at any time.
                      </p>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer p-6 bg-white border border-subtle rounded-lg hover:bg-sand/50 transition-colors list-none">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-h3 text-ink">How are the funds used?</h3>
                        <span className="text-primary text-xl group-open:rotate-180 transition-transform">▼</span>
                      </div>
                    </summary>
                    <div className="p-6 bg-sand/30 rounded-b-lg border-t-0 border border-subtle">
                      <p className="text-body text-ink leading-relaxed">
                        Tithe supports the worldwide Seventh-day Adventist Church ministry. Offerings support local 
                        church operations, ministries, and community outreach. Special project funds are used for 
                        designated purposes as specified by the donor.
                      </p>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer p-6 bg-white border border-subtle rounded-lg hover:bg-sand/50 transition-colors list-none">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-h3 text-ink">Is online giving secure?</h3>
                        <span className="text-primary text-xl group-open:rotate-180 transition-transform">▼</span>
                      </div>
                    </summary>
                    <div className="p-6 bg-sand/30 rounded-b-lg border-t-0 border border-subtle">
                      <p className="text-body text-ink leading-relaxed">
                        Yes, our online giving platform uses bank-level security with SSL encryption. 
                        Your personal and financial information is protected and never shared with third parties.
                      </p>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="cursor-pointer p-6 bg-white border border-subtle rounded-lg hover:bg-sand/50 transition-colors list-none">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-h3 text-ink">Can I designate my gift for a specific purpose?</h3>
                        <span className="text-primary text-xl group-open:rotate-180 transition-transform">▼</span>
                      </div>
                    </summary>
                    <div className="p-6 bg-sand/30 rounded-b-lg border-t-0 border border-subtle">
                      <p className="text-body text-ink leading-relaxed">
                        Yes! You can designate gifts for specific ministries, projects, or needs. 
                        Contact us if you have a specific purpose in mind, and we'll help you set up the designation.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </>
      )
    }
