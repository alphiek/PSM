import React from "react"
import Swiper from "react-id-swiper"
import { useGalleryImages } from "../../hooks/useGalleryImages"
import { colors } from "../Utils/colors"
import { Image } from './styles'

export const Carousel = () => {
  const data = useGalleryImages()

  let images =
    data &&
    data.edges.map(({ node }) => (
      <div
        style={{
          background: colors.medGrey,
          padding: "1.5rem",
          borderRadius: "8px",
        }}
        key={node.id}
      >
        <Image fluid={node.childImageSharp.fluid} alt="" />
      </div>
    ))

  const params = {
    slidesPerView: 6,
    spaceBetween: 10,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  }

  return <Swiper {...params}>{images}</Swiper>
}
