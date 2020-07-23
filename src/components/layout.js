import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const title = data.site.siteMetadata.title
  return (
    <div className="container">
      <Header title={title} />
      <main className="margin-bottom">{children}</main>
      <footer>
        <h5>Weaved with magic by Gandalf the Grey</h5>
      </footer>
    </div>
  )
}

export default Layout
