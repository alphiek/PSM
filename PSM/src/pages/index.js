import React from "react"
import { Helmet } from "react-helmet"
import Landing from "../components/Landing/Landing"
import { ServicesSection } from "../components/Services/ServicesSection"
import { SkillsSection } from "../components/Skills/SkillsSection"
import { GallerySection } from "../components/Gallery/GallerySection"
import { ContactSection } from '../components/Contact/ContactSection'


const IndexPage = () => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
      />
    </Helmet>
    <div>
      <Landing />
      <ServicesSection />
      <SkillsSection />
      <GallerySection />
      <ContactSection />>
    </div>
  </>
)

export default IndexPage
