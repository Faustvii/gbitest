/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'
import StyledBackgroundSection from './index'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <StyledBackgroundSection>
        <div
          style={{
            height: `100vh`,
            width: `100%`,
            display: `flex`,
            placeContent: `start`,
          }}
        >
          <div
            style={{
              placeSelf: `center`,
              textAlign: `center`,
              color: `#ccc`,
              height: `50vh`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              marginTop: `-5rem`,
            }}
          >
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
              {` & `}
              <a href="https://github.com/timhagn/gatsby-background-image">
                gatsby-background-image
              </a>
            </footer>
          </div>
        </div>
      </StyledBackgroundSection>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
