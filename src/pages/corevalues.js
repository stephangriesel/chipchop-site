import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/Globals/Footer"
import SEO from "../components/seo"


import { Parallax } from 'react-parallax';


import Info7 from '../components/Home/InfoCompany7'
import Info8 from '../components/Home/InfoCompany8'
import Info9 from '../components/Home/InfoCompany9'

const whyPage = ({ data }) => (
  <Layout>
    <SEO title="Core Values" />
    <div style={{ backgroundColor: 'rgba(210,226,226,0.)' }}><Info7 /></div>
    <Parallax
      blur={{ min: -5, max: 0 }}
      bgImage={require('../images/info5.jpg')}
      bgImageAlt="Workbench"
      strength={-200}
      style={{
        height: '680px',
        backgroundColor: '#d2e2e2',
      }}
    >
      <div style={{
        height: '400px',
        backgroundColor: 'rgba(210,226,226,0.)',
        right: '20px'
      }}></div>
    </Parallax>
    <Parallax
      blur={{ min: -15, max: 5 }}
      strength={-100}
      style={{

      }}
    >
    </Parallax>

    <div style={{ backgroundColor: 'rgba(210,226,226,0.)' }}><Info8 /></div>

    <Parallax
      blur={{ min: -5, max: 0 }}
      bgImage={require('../images/info6.jpg')}
      bgImageAlt="Workbench"
      strength={-200}
      style={{
        height: '680px',
        backgroundColor: '#d2e2e2',
      }}
    >
      <div style={{
        height: '400px',
        backgroundColor: 'rgba(210,226,226,0.)',
        right: '20px'
      }}></div>
    </Parallax>
    <Parallax
      blur={{ min: -15, max: 5 }}
      strength={-100}
      style={{

      }}
    >
    </Parallax>

    <div style={{ backgroundColor: 'rgba(210,226,226,0.)' }}><Info9 /></div>

    <Footer />

  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default whyPage
