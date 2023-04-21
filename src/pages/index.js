import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="🧙‍♂️🃏">
      <h1>nolan pestano</h1>
      <p>Hello World! I am Nolan Pestano, and this is my page.</p>
      <p> I am currently a high schooler at Smithville High, but I plan on attending Mizzou this fall. I am also currently interning with UGA Finance's backend process team in KC, MO.</p>
      <p> I enjoy Oxford Commas, Chess, Python, and Good Coffee, among other things. Above all, I love life and love being a nerd.</p>
      <StaticImage
        alt= "Summer Night by Winslow Homer, a personal favorite"
        src= "../images/homer.jpg"
        />

    <p></p>
    

  
      <p> Find my resume <a href="src/components/resume.pdf"donwload>here! 🚀</a></p>



    </Layout>
  )
}

export const Head = () => <Seo title= "home"/>

export default IndexPage