import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      logo: file(absolutePath: { regex: "/na-autopilocie-logo.png/" }) {
        childImageSharp {
          fluid(maxWidth: 880) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const logo = data?.logo?.childImageSharp?.fluid

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">
          <Image
            fluid={logo}
            alt={title}
            className="logo"
          />
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Zbudowane za pomocą Gatsby przez
        {` `}
        <a href="https://miloszsobczak.pl">Miłosz Sobczak</a>
      </footer>
    </div>
  )
}

export default Layout
