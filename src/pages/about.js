import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="🏆">
<p></p>
      <h4>2022  </h4>
      <ul>
        <li>Selected as 1/96 Missouri High Schoolers selected to present to NRECA and tour Washington D.C., through a program called Youth Tour</li>
        <li>Two Missouri State Scholastic Writing Awards</li>
            <ul>
              <li><i>On Absurdism</i>: Personal Memoir - Silver Key</li>
              <li><i>America through Gatsby & Flamingos</i>: Critical Essay - Honorable Mention</li>
            </ul>
      </ul>

      <h4>2023</h4>
      <ul>
        <li>MO FBLA State Qualification in Computer Programming and Coding, Computer Problem Solving, & Cybersecurity.
        Ultimately only participated in Programming and Coding, taking a nice 5th in the state.</li>
      </ul>
    </Layout>
  )
  }

export const Head = () => <Seo title= "About Me"/>

export default AboutPage