// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import footerStyles from './footer.module.scss'

const Footer = () => (
    <div className={footerStyles.footer}>
        <p className={footerStyles.footerText}>
            Yasmin Raihan © 2020</p>
    </div>
)

export default Footer

// Header.propTypes = {
//     siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//     siteTitle: ``,
// }