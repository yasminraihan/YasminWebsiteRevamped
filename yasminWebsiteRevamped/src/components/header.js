import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from './header.module.scss'

const Header = () => (
  <div className={headerStyles.navBar}>
    <div className={headerStyles.logo}></div>
    <div className={headerStyles.navLinks}>
      <Link to="/" className={headerStyles.navLink}>Work</Link>
      <Link to="/about" className={headerStyles.navLink}>About</Link>
    </div >
  </div >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

{/* <a className={headerStyles.navLink}>
<a className={headerStyles.navLink}></a> */}