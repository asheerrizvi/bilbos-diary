import React from "react"
import { Link } from "gatsby"

const Header = ({ title }) => {
  return (
    <div className="flex-row margin-top margin-bottom">
      <div className="flex-small three-fourths">
        <h3>
          <Link to={`/`}>{title}</Link>
        </h3>
      </div>
      <div className="flex-small">
        <div className="flex-row">
          <div className="flex-small text-right">
            <h5>
              <Link to={`/blog`}>Blog</Link>
            </h5>
          </div>
          <div className="flex-small">
            <h5>
              <Link to={`/about`}>About</Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
