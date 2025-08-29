import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { Helmet } from "react-helmet"
// import React from "react"



const IndexPage = () => {
  return (

    <Layout pageTitle="🧙‍♂️🃏">
      <Helmet>
        <meta name="icon" href="/src/images/favicon.ico" />
      </Helmet>
      <h1>nolan pestano</h1>
      <p>Hello World! I am Nolan Pestano, and this is my page.</p>
      <p> I am a current student of Computer Science @ the University of Missouri - Columbia. Most recently, I was a co-op with the Intelligent Automation team of Emerson, based in Marshalltown, IA.</p>
      <p> I enjoy live music, the color green, Python, standup comedy, crosswords, and good coffee, among other things. Above all, I love life and I love being a nerd.</p>
      <p><mark><strong>📢 I'm actively seeking an internship position for the summer of 2026! </strong></mark>  I’m eager to contribute, learn, and bring value to your teams. If you know of opportunities or would like to connect, I’d love to hear from you! 🚀</p>

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