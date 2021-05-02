import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Navbar = ({ siteTitle, latestSlug }) => {
  return (
    <nav className="w-100 ma0 ph4 pb1 pt4 bg-black overflow-hidden f5 f4-ns">
      <div className="flex flex-row pa0 ma0">
        <div className="fl mr-auto">
          <Link
            to="/"
            className="no-underline gray hover-white"
            style={{
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            {siteTitle}
          </Link>
        </div>
        <div className="fr ml-auto f6">
          <div className="flex flex-row ">
            <Link to="/about" className="no-underline gray hover-white">
              About
            </Link>
            <p className="white mv0 mh2">|</p>
            <Link
              to={latestSlug}
              className="no-underline gray hover-white"
            >
              Latest Post
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
  latestSlug: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
