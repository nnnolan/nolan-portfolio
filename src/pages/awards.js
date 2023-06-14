import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="🏆">
<p></p>

      <h4>2023</h4>
      <ul>
        <li>MO FBLA State Qualification in Computer Programming and Coding, Computer Problem Solving, & Cybersecurity.
        Ultimately only participated in Programming and Coding, taking a nice 5th in the state, qualifying for Nationals 🏄‍♂️</li>

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

export const Head = () => <Seo title= "About Me"/>

export default AboutPage