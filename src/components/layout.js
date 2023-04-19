import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <div className={container}>
      <body>
      <div class="content">
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              awards & achievements
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              portfolio
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      </div>

      <div className='flexThisBox'>

      <footer>
        <style></style>
        <p>Nolan Pestano, 2023. Built with 💟, Wilco's <i>Yankee Hotel Foxtrot</i> and ☕.
        <StaticImage

          
          // link to github
          
        alt= "Github Logo"
        src= "../images/github-mark-white.svg"
        /> 
        </p>
      
      </footer>
      </div>
      </body>

    </div>
    
  )
}

export default Layout
