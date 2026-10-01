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
      <p>I am a current student of Computer Science @ the University of Missouri - Columbia. Most recently, I was an intern with US Foods in Chicago IL.</p>
      <p> I enjoy live music, the color green, Python, standup comedy, crosswords, automating the boring stuff, and good coffee, among other things. Above all, I love life and I love being a nerd.</p>
      <p><mark><strong><s></s></strong></mark></p>

      <StaticImage
        alt= "Summer Night by Winslow Homer, a personal favorite"
        src= "../images/homer.jpg"
        />

    <p></p>
    

  
      <p> Find my resume <a target="_blank" rel="noopener noreferrer"  a href="https://docs.google.com/document/d/1KNGEUF1FaMODMbr9-ljyUAblBGJtF3HKY7mL_gBDoIY/edit?usp=sharing">here! ⚡</a></p>

    </Layout>
  )
}

export const Head = () => <Seo title= "home"/>

export default IndexPage