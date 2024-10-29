import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import React from "react"
import ResponsiveHeader from "./responsive-header"

const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 260,
        padding: `1.45rem 1.0875rem`,
        textAlign: `center`
      }}
    >
      <div style={{ margin: 0 }}>
        <ResponsiveHeader level={1} maxSize={2} minScreenSize={800}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          <StaticImage src="../images/Logo.png" alt='Sporty Sam Logo' layout="fullWidth"></StaticImage>
        </Link>
        </ResponsiveHeader>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
