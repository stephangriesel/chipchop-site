/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Header from './Globals/Header'
import './bootstrap.min.css';

// Translations
import '../components/Translate/i18n';

const Layout = ({ children }) =>

  <>
    <Header />
    <div className="wrapper">
      {children}
    </div>
  </>


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
