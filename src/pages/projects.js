import React from 'react'
import Projects from '../components/Projects/Project'
import Layout from '../components/layout'
// import SEO from '../components/seo'
import { graphql } from 'gatsby'

const ProjectPage = ({ data }) => (
  <Layout>
    {/* <SEO title="Contact" /> */}
    <Projects />
  </Layout>
);

export const query = graphql`
    {
      img:file(relativePath:{
        eq:"contactus.jpg"
      }){
        childImageSharp{
          fluid(quality:100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    `

export default ProjectPage;


