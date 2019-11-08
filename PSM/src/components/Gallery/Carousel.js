import React from "react"
import styled from "styled-components"
import Swiper from "react-id-swiper"
import Img from "gatsby-image"
import { useGalleryImages } from "../../hooks/useGalleryImages"

export const Carousel = () => {
  const data = useGalleryImages()

  let images =
    data &&
    data.edges.map(({ node }) => (
      <div key={node.id}>
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
          spaceBetween: 20
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    }

  return (
    <Swiper {...params}>
      {images}
    </Swiper>
  )
}

const Image = styled(Img)`
  width: 100%;
  border-radius: 6px;
  background-color: rgba(255,255,255, 0.08);
`
