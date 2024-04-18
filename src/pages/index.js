import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="🧙‍♂️🃏">
      <h1>nolan pestano</h1>
      <p>Hello World! I am Nolan Pestano, and this is my page.</p>
      <p> I am a current student of Computer Science @ the Univeristy of Missouri - Columbia. Most recently, I was with UGA Finance's backend process team in KC, MO.</p>
      <p> I enjoy Oxford commas, chess, Python, and good coffee, among other things. Above all, I love life and I love being a nerd.</p>
      <StaticImage
        alt= "Summer Night by Winslow Homer, a personal favorite"
        src= "../images/homer.jpg"
        />

    <p></p>
    

  
      <p> Find my resume <a target="_blank" rel="noopener noreferrer"  a href="https://docs.google.com/document/d/1SgYMsyagvNapXt0ukNWNDJh1z5c7UQOULy4TQfihTLg/edit?usp=sharing">here! ⚡</a></p>

 
    </Layout>
  )
}

export const Head = () => <Seo title= "home"/>

export default IndexPage