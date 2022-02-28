import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import { StaticQuery, graphql } from 'gatsby'

const getAboutWhy = graphql`
{
    allContentfulAbout {
    edges {
      node {
        whyBlock3 {
          internal {
            content
          }
        }
        whyBlock4 {
          internal {
            content
          }
        }
      }
    }
  }
  }
`

export default function Info() {
    return (
        <StaticQuery query={getAboutWhy} render={data => {
            // console.log("test data:", data)
            return (
                <Background>
                    <section className="py-5 info-section">
                        <div className="container"></div>
                        <div className="row">
                            <InView threshold={0.25} triggerOnce>
                                {({ ref, inView }) => (
                                    <motion.div
                                        className="col-10 col-sm-8 mx-auto text-center"
                                        ref={ref}
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <p className="lead text-muted mb-5">
                                            {data.allContentfulAbout.edges[0].node.whyBlock3.internal.content}
                                        </p>
                                        <p className="lead text-muted mb-5">
                                            {data.allContentfulAbout.edges[0].node.whyBlock4.internal.content}
                                        </p>
                                    </motion.div>
                                )}
                            </InView>
                        </div>
                    </section>
                </Background>
            )
        }} />
    )
}

const Background = styled.section`
.info-section {
    /* background:rgba(236,236,236,0.5); */
    height:100%;
    display:flex;
    align-items:center;
    align-content:center;
    justify-content:center;
    flex-direction:column;
    /* border-radius:80px; */
    margin:50px;
    box-shadow:  13px 13px 26px #d4d4d4, 
             -13px -13px 26px #ffffff;
}

@media (min-width: 800px) {
.info-section {
    height:100%;
    margin:50px 20px;
}
}
`
