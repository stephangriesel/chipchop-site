import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import { StaticQuery, graphql } from 'gatsby'

const getAboutCoreValues = graphql`
{
  allContentfulCoreValues {
    edges {
      node {
        coreValuesBlock2title
        coreValuesBlock2 {
          coreValuesBlock2
        }
        coreValuesBlock3 {
          coreValuesBlock3
        }
        coreValuesBlock3title
        coreValuesBlock4 {
          coreValuesBlock4
        }
        coreValuesBlock4title
        coreValuesBlock5title
        coreValuesBlock6 {
          coreValuesBlock6
        }
        coreValuesBlock6title
        coreValuesBlock5 {
          coreValuesBlock5
        }
      }
    }
  }
}
`

export default function Info() {
  return (
    <StaticQuery query={getAboutCoreValues} render={data => {
      console.log("test data:", data)
      return (
        <Background>
          <section className="py-5 info-section">
            <div className="container"></div>
            <div className="row">
              <div className="col-10 col-sm-8 mx-auto text-center">
                <div className="lead text-muted mb-5">
                  <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                      <motion.p
                        className='flex-column'
                        ref={ref}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      >

                        <span className="number">{data.allContentfulCoreValues.edges[0].node.coreValuesBlock2title}</span>
                        {data.allContentfulCoreValues.edges[0].node.coreValuesBlock2.coreValuesBlock2}
                      </motion.p>
                    )}
                  </InView>
                  <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                      <motion.p
                        className='flex-column'
                        ref={ref}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      >

                        <span className="number">{data.allContentfulCoreValues.edges[0].node.coreValuesBlock3title}</span>
                        {data.allContentfulCoreValues.edges[0].node.coreValuesBlock3.coreValuesBlock3}
                      </motion.p>
                    )}
                  </InView>
                  <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                      <motion.p
                        className='flex-column'
                        ref={ref}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      >

                        <span className="number">{data.allContentfulCoreValues.edges[0].node.coreValuesBlock4title}</span>
                        {data.allContentfulCoreValues.edges[0].node.coreValuesBlock4.coreValuesBlock4}
                      </motion.p>
                    )}
                  </InView>
                  <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                      <motion.p
                        className='flex-column'
                        ref={ref}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      >

                        <span className="number">{data.allContentfulCoreValues.edges[0].node.coreValuesBlock5title}</span>
                        {data.allContentfulCoreValues.edges[0].node.coreValuesBlock5.coreValuesBlock5}
                      </motion.p>
                    )}
                  </InView>
                  <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                      <motion.p
                        className='flex-column'
                        ref={ref}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      >

                        <span className="number">{data.allContentfulCoreValues.edges[0].node.coreValuesBlock6title}</span>
                        {data.allContentfulCoreValues.edges[0].node.coreValuesBlock6.coreValuesBlock6}
                      </motion.p>
                    )}
                  </InView>
                </div>
              </div>
            </div>
          </section>
        </Background>
      )
    }} />
  )
}

const Background = styled.section`
.btn-pink {
  color: var(--mainWhite);
  border-color: var(--mainPink) solid;
  background-color: var(--mainGrey);
}
.btn-pink:hover {
  background: var(--mainPink);
  color: var(--mainGrey);
  border-color: var(--mainPink) solid;
  -webkit-transition: ease-in 0.5s;
  transition: ease-in 0.5s;
}
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

.flex-column {
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  margin:3em 0;
  .number {
    background-color:var(--mainPink);
    display:flex;
    align-items:center;
    justify-content:center;
    border:0px solid #000;
    font-size:1em;
    padding:0.5em;
    margin:0.5em;
    transform:rotate(-0deg);
    border-radius:10px;
    -webkit-box-shadow: 15px 17px 28px -19px #4B5B5A; 
    box-shadow: 15px 17px 28px -19px #4B5B5A;
  }
}

@media (min-width: 800px) {
.info-section {
    height:100%;
    margin:50px 20px;
}
}
`
