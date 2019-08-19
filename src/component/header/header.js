import React from "react"
import "./header.css"

const Header = () => (
  <div className="header">
    <div className="header__item" style={{ color: `#333` }}>
      Home
    </div>
    <div className="header__item" style={{ color: `#333` }}>
      Project
    </div>
    <div className="header__item" style={{ color: `#333` }}>
      Blog
    </div>
    <div className="header__item" style={{ color: `#333` }}>
      About
    </div>
  </div>
)

export default Header
