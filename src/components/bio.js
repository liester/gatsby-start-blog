/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query Query {
       allMarkdownRemark {
        nodes {
          frontmatter {
            photo {
              childImageSharp {
                gatsbyImageData(width: 500, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `)


  // Set these values by editing "siteMetadata" in gatsby-config.js
    const image = data.allMarkdownRemark?.nodes[0]?.frontmatter.photo.childImageSharp.gatsbyImageData.images.sources[0].srcSet;
    console.log({data})
  console.log({image})
  return (
    <div className="bio">
      <img srcset={image} width={100} height={100}/>
    </div>
  )
}

export default Bio
