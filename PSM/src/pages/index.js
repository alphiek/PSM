import React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetaData } from "../hooks/useSiteMetaData"
import Landing from "../components/Landing/Landing"
import { ServicesSection } from "../components/Services/ServicesSection"
import { SkillsSection } from "../components/Skills/SkillsSection"
import { GallerySection } from "../components/Gallery/GallerySection"
import { ContactSection } from "../components/Contact/ContactSection"

const IndexPage = () => {
  const { title, description, siteUrl, handle, social } = useSiteMetaData()
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <link rel="alternate" href={siteUrl} hrefLang="en-CY" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />
        <meta name="description" content={description}></meta>

        <meta property="og:url" content={siteUrl}></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content={title}></meta>
        <meta
          property="og:image"
          content="https://paphosstonemasons.com/images/og.png"
        ></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>
        <meta property="og:description" content={description}></meta>
        <meta property="og:site_name" content="Paphos Stone Masons"></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content={handle}></meta>
        <meta name="twitter:url" content={siteUrl}></meta>
        <meta name="twitter:title" content={title}></meta>
        <meta name="twitter:description" content={description}></meta>
        <meta
          name="twitter:image"
          content="https://paphosstonemasons.com/images/og.png"
        ></meta>

        <script type="application/ld+json">{`
          {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Paphos Stone Masons",
              "description": "${description}",
              "image": "https://paphosstonemasons.com/images/og.png",
              "logo": "https://paphosstonemasons.com/images/logo.png",
              "@id": "${siteUrl}",
              "url": "${siteUrl}",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paphos",
                "addressCountry": "cy"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "23:59"
              },
              "sameAs": [
                "${social.fb}",
                "${social.insta}",
              ],
              "priceRange": "$"
          }
     `}</script>
      </Helmet>
      <div>
        <Landing />
        <ServicesSection />
        <SkillsSection />
        <GallerySection />
        <ContactSection />
      </div>
    </>
  )
}

export default IndexPage
