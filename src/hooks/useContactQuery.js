import { useStaticQuery, graphql } from "gatsby"

export const useContactQuery = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      wpPage(databaseId: { eq: 64 }) {
        title
        content
        blocks
      }

        wpMediaItem(filename: {eq: "polygon.svg"}) {
          title
          localFile {
            publicURL
          }
        }
    
    }
  `)

  return data
}
