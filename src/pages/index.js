import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial. Hello World!</p>
      <StaticImage
        alt= "Thomas Cole's 'Destruction', the fourth painting in his series 'The Course of Empire.' My personal favorite."
        src= "../images/cole.jpg"
        />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage