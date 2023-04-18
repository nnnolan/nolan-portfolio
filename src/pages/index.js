import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="nolan">
      <p>Hello World! I am Nolan Pestano, and this is my page.</p>
      <p> I am currently a high schooler at Smithville High, but I plan on attending Mizzou this fall. I am also currently intering with UGA Finance in KC, MO.</p>
      <p> I enjoy Oxford Commas, Chess, Python, and Good Coffee, among other things</p>
      <StaticImage
        alt= "Thomas Cole's 'Destruction', the fourth painting in his series 'The Course of Empire.' My personal favorite."
        src= "../images/cole.jpg"
        />

    </Layout>
  )
}

export const Head = () => <Seo title= "Home Page"/>

export default IndexPage