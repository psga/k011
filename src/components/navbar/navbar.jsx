import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Navbar = ({ siteTitle, latestSlug }) => {
  return (
    <nav className="w-100 ma0 ph2 pb2 pt1 bg-black overflow-hidden f7 f6-l ">
      <div className="flex flex-row pa4 ma0">
        <div className="fl mr-auto">
          <Link
            to="/"
            className="no-underline white-90   hover-white-50"
            style={{
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            {siteTitle}
          </Link>
        </div>
        <div className="fr ml-auto">
          <div className="flex flex-row">
            <a href="https://pusu.ga" className="no-underline white-80 hover-white-50">
              About
            </a>
            <p className="white mv0 f6 mh2">|</p>
            <Link
              to={latestSlug}
              className="no-underline white-90  hover-white-50"
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
