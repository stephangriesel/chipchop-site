import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';
import { StaticQuery, graphql } from 'gatsby';
import img from '../../images/projects/project-nieuw-west.jpg'

const getProject = graphql`
{
  allContentfulProject {
    edges {
      node {
        description {
          description
        }
        name
        image {
          localFile {
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
      }
    }
  }
}
`

const Project = () => {
    const [element, controls] = useScroll();
    return (
        <StaticQuery query={getProject} render={data => {
            // console.log("test data:", data)
            return (
                <div className='two-column-alt'>
                    <div className='txt-box'>
                        <h1>{data.allContentfulProject.edges[0].node.name}</h1>
                        <p>Specialized Craft</p>
                    </div>
                    <motion.div
                        className='img-box'
                        variants={fade}
                        initial='hidden'
                        ref={element}
                        animate={controls}
                    >
                        <img
                            src={data.allContentfulProject.edges[0].node.image[0].localFile.childImageSharp.fixed.src}
                            alt='installation'
                            placeholder='tracedSVG'
                            width={600}
                            className='border-radius-50' />
                    </motion.div>
                </div>
            )
        }} />
    )
};

export default Project;
