import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="🏆">
<p></p>

    <h4>2024</h4>
    <ul>
      <li>Competed with <a  target="_blank" rel="noopener noreferrer" a href="https://www.instagram.com/mizzouspace/?hl=e">Mizzou Space Program</a>  in the Argonia Cup, a two-day rocketry competition for collegiate rocketry clubs.
      We launched a two-stage rocket, containing 150 golf balls as a payload, as described by the competiton rules. We spent ~6 months planning, wiring, building, and working on other shenangins for the Baker Dozen. Ultimately, one of our parachutes failed and thus we didn't place. 
      </li> 
    </ul>

      <h4>2023</h4>
      <ul>
        <li>MO FBLA State Qualification in Computer Programming and Coding, Computer Problem Solving, & Cybersecurity.
        Ultimately only participated in Programming and Coding, taking a nice 5th in the state, qualifying for Nationals 🏄‍♂️ 
        
        Didn't break in top fifteen for final heats, but no worries. Still learned tons and enjoyed my self. Check the archivial <i><a href="https://github.com/NatFletch/FBLA-Programming-2023"> here.</a></i></li>

        <li> NKCH Give Life Scholarship Award Receptient, wrote a ~500 word essay on the importance of donating life, and gave an impromptu speech infront of the board of North Kansas City Hospital.
        </li>
      </ul>


      <h4>2022  </h4>
      <ul>
        <li>Selected as 1/96 Missouri High Schoolers selected to present to NRECA and tour Washington D.C., through the Youth Tour Program</li>
        <li>Two Missouri State Scholastic Writing Awards</li>
            <ul>
              <li><i><a href="https://drive.google.com/file/d/12GesLN7tlgUXaQe_guOPzmTCGyIZ3pAu/view?usp=sharing">On Absurdism</a></i>: Personal Memoir - Silver Key</li>
              <li><i><a href = "https://drive.google.com/file/d/1lCSWRdkfP9OM6CmaSeVLKwE8r-JMVV-c/view?usp=sharing">America Through Gatsby & Flamingos</a></i>: Critical Essay - Honorable Mention</li>
            </ul>
      </ul>


    </Layout> 
  )
  }

export const Head = () => <Seo title= "accolades"/>

export default AboutPage
