import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Resources() {
  const networkResources = [
    {
      title: "Adventist Connections",
      description: "Connect with Adventists worldwide",
      url: "https://www.adventist.org",
      icon: "🌐"
    },
    {
      title: "General Conference",
      description: "Official website of the Seventh-day Adventist Church",
      url: "https://www.adventist.org",
      icon: "⛪"
    },
    {
      title: "SDA Yearbook",
      description: "Comprehensive directory of Adventist institutions",
      url: "https://www.adventistyearbook.org",
      icon: "📚"
    },
    {
      title: "Adventist Education Net",
      description: "Educational resources and institutions",
      url: "https://education.adventist.org",
      icon: "🎓"
    },
    {
      title: "Adventist Plusline",
      description: "Professional development and networking",
      url: "https://plusline.org",
      icon: "💼"
    },
    {
      title: "E.G. White Estate",
      description: "Writings and resources from Ellen G. White",
      url: "https://whiteestate.org",
      icon: "✍️"
    },
    {
      title: "TAGnet",
      description: "Technology and communication resources",
      url: "https://tagnet.org",
      icon: "💻"
    },
    {
      title: "Adventist Educational Institutions",
      description: "Schools, colleges, and universities worldwide",
      url: "https://education.adventist.org",
      icon: "🏫"
    },
    {
      title: "Fundamental Beliefs",
      description: "28 Fundamental Beliefs of Seventh-day Adventists",
      url: "https://www.adventist.org/beliefs/",
      icon: "📖"
    },
    {
      title: "SDA Institutions Directory",
      description: "Global directory of Adventist organizations",
      url: "https://www.adventistdirectory.org",
      icon: "🗺️"
    },
    {
      title: "Churches Directory",
      description: "Find Adventist churches near you",
      url: "https://www.adventistdirectory.org",
      icon: "🏛️"
    },
    {
      title: "Open Directory Index",
      description: "Comprehensive Adventist resource index",
      url: "https://dmoz-odp.org/Society/Religion_and_Spirituality/Christianity/Denominations/Seventh-day_Adventist/",
      icon: "📋"
    },
    {
      title: "Yahoo Adventist Index",
      description: "Curated Adventist resources and links",
      url: "https://dir.yahoo.com/Society_and_Culture/Religion_and_Spirituality/Christianity/Denominations/Seventh_day_Adventist/",
      icon: "🔍"
    }
  ]

  const bibleStudyResources = [
    {
      title: "Discover Bible Guides",
      description: "Interactive online Bible study courses",
      url: "https://www.discoveronline.org",
      icon: "🔍"
    },
    {
      title: "Bible Information Online",
      description: "Comprehensive Bible study resources",
      url: "https://www.bibleinfo.com",
      icon: "📖"
    },
    {
      title: "Amazing Facts Study Guides",
      description: "Bible prophecy and truth studies",
      url: "https://www.amazingfacts.org",
      icon: "✨"
    },
    {
      title: "Online Bible",
      description: "Multiple Bible translations and study tools",
      url: "https://www.biblegateway.com",
      icon: "📚"
    },
    {
      title: "Sabbath School Lessons",
      description: "Weekly lesson quarterlies and discussions",
      url: "https://ssnet.org",
      icon: "📅"
    },
    {
      title: "Adventist Information Ministry",
      description: "Evangelistic resources and materials",
      url: "https://www.aims.org",
      icon: "📢"
    },
    {
      title: "Daniel Prophecy Series",
      description: "In-depth study of biblical prophecy",
      url: "https://www.amazingfacts.org/media-library/prophecy",
      icon: "🔮"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Resources - Annaville Seventh-day Adventist Church</title>
        <meta name="description" content="Discover valuable Adventist resources, Bible study materials, and educational content from trusted Seventh-day Adventist organizations worldwide." />
        <meta name="keywords" content="Adventist resources, Bible study, Seventh-day Adventist, General Conference, Ellen White, educational materials" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primaryDeep text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-h1 mb-6">Adventist Resources</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover trusted resources, Bible study materials, and educational content 
              from Seventh-day Adventist organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Network Resources Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-h2 mb-6">Seventh-day Adventist Network Resources</h2>
              <p className="text-body text-muted max-w-3xl mx-auto">
                Connect with official Adventist organizations, educational institutions, and global resources 
                that support our mission and values.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {networkResources.map((resource, index) => (
                <div key={index} className="group">
                  <a 
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-6 rounded-xl shadow-sm border border-subtle hover:shadow-md hover:border-primary transition-all duration-300 h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{resource.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-ink mb-2 group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bible Study Resources Section */}
      <section className="section bg-sand">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-h2 mb-6">Bible Study & Learning Resources</h2>
              <p className="text-body text-muted max-w-3xl mx-auto">
                Deepen your understanding of Scripture with these carefully selected Bible study materials, 
                prophecy resources, and educational content.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bibleStudyResources.map((resource, index) => (
                <div key={index} className="group">
                  <a 
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-6 rounded-xl shadow-sm border border-subtle hover:shadow-md hover:border-primary transition-all duration-300 h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{resource.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-ink mb-2 group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
