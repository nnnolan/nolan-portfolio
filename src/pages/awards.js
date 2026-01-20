import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="🏆">
<p></p>
    <h4>2025</h4>
    <ul>
      <li>Treasurer of Mizzou Space Prgoram, I am currently balancing a ~45k budget through lots of disruption. I am continuing to work on our competition rockets too! </li>
      <li>Competed in Mizzou's 2025 Hackathon, <i>Tigerhacks</i>, submitting <a target="_blank" rel="noopener noreferrer" a href="https://lexiconstellation.us/">Lexiconstellation</a>, a web tool developed for crossword constructors to help with clueing, fills, and construction. I won best use of Generative AI! ✏️📰🤖</li>
    </ul>

    <h4>2024</h4>
    <ul>
      <li>Competed with <a  target="_blank" rel="noopener noreferrer" a href="https://www.instagram.com/mizzouspace/?hl=e">Mizzou Space Program</a>  in the Argonia Cup, a two-day rocketry competition for collegiate rocketry clubs.
      We launched a two-stage rocket, containing 150 golf balls as a payload, as described by the competiton rules. We spent ~6 months planning, wiring, building, and working on other shenangins for the Baker Dozen.</li>
    </ul>

      <h4>2023</h4>
      <ul>
        <li>MO FBLA State Qualification in Computer Programming and Coding, Computer Problem Solving, & Cybersecurity.
        Ultimately only participated in Programming and Coding, taking a nice 5th in the state, qualifying for Nationals 🏄‍♂️ 
        
        Didn't break in top fifteen for final heats, but no worries. Still learned tons and enjoyed my self. Check the archivial <i><a href="https://github.com/NatFletch/FBLA-Programming-2023"> here.</a></i></li>
        <li> NKCH Give Life Scholarship Award Receptient, wrote a ~500 word essay on the importance of donating life, and gave a speech infront of the board of North Kansas City Hospital.
        </li>
      </ul>



    </Layout> 
  )
  }

export const Head = () => <Seo title= "accolades"/>

export default AboutPage
