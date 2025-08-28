import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEOHead({ 
  title, 
  description, 
  keywords = '', 
  image = '/assets/og-image.jpg',
  url = '',
  type = 'website',
  publishedAt = '',
  modifiedAt = '',
  author = 'Annaville Seventh-day Adventist Church'
}) {
  const siteUrl = 'https://annavillesda.org' // Replace with your actual domain
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Annaville Seventh-day Adventist Church" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#7E0F14" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          <meta property="article:published_time" content={publishedAt} />
          <meta property="article:modified_time" content={modifiedAt} />
          <meta property="article:author" content={author} />
        </>
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'WebPage',
          "name": title,
          "description": description,
          "url": fullUrl,
          "image": fullImageUrl,
          "publisher": {
            "@type": "Organization",
            "name": "Annaville Seventh-day Adventist Church",
            "url": siteUrl,
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/logo.png`
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": fullUrl
          },
          ...(type === 'article' && {
            "datePublished": publishedAt,
            "dateModified": modifiedAt,
            "author": {
              "@type": "Person",
              "name": author
            }
          })
        })}
      </script>
    </Helmet>
  )
}
