import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
    return (
      <Layout pageTitle="💼">
        <p>let's talk business 😎🤝</p>
        <ul>
          {
            data.allMdx.nodes.map((node) => (
              <article key={node.id}>
           <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
              </article>
            ))
          }
        </ul>
      </Layout>
    )
  }

  export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
        
      }
    } 
  }
`
export const Head = () => <Seo title="portfolio" />

export default BlogPage