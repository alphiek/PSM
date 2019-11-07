import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetaData = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              fb
              insta
              email
            }
            handle
          }
        }
      }
    `
  )
  return site.siteMetadata
}
