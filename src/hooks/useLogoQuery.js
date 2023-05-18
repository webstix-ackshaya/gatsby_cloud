import { useStaticQuery, graphql } from "gatsby"

export const useLogoQuery = () => {
  const data = useStaticQuery(graphql`
  query useLogoQuery {
    wpMediaItem(mediaDetails: {file: {eq: "webstix_logo.svg"}}) {
      title
      localFile {
        publicURL
      }
    }
  }
  `)
  return data
}
