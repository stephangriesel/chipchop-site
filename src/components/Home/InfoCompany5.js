import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import { StaticQuery, graphql } from 'gatsby'

const getAboutApproach = graphql`
{
  allContentfulApproach {
    edges {
      node {
        approachBlock2 {
          approachBlock2
        }
        approachBlock2title
        approachBlock3 {
          approachBlock3
        }
        approachBlock3title
        approachBlock4 {
          approachBlock4
        }
        approachBlock4title
        approachBlock5 {
          approachBlock5
        }
        approachBlock5title
        approachBlock6 {
          approachBlock6
        }
        approachBlock6title
        approachBlock7 {
          approachBlock7
        }
        approachBlock7title
      }
    }
  }
}
`

export default function Info() {

  return (
    <StaticQuery query={getAboutApproach} render={data => {
      // console.log("test data:", data)
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
                    <span className="number">1</span>
                    <span className="bold">{data.allContentfulApproach.edges[0].node.approachBlock2title}</span>
                    {data.allContentfulApproach.edges[0].node.approachBlock2.approachBlock2}
                  </motion.p>
                )}
              </InView>
              <InView threshold={0.25} triggerOnce>
                {({ ref, inView }) => (
                  <motion.p
                    ref={ref}
                    className='flex-column'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="number">2</span>
                    <span className="bold">{data.allContentfulApproach.edges[0].node.approachBlock3title}</span>
                    {data.allContentfulApproach.edges[0].node.approachBlock3.approachBlock3}
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
                    <span className="number">3</span>
                    <span className="bold">{data.allContentfulApproach.edges[0].node.approachBlock4title}</span>
                    {data.allContentfulApproach.edges[0].node.approachBlock4.approachBlock4}
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
                <span className="number">4</span>
                <span className="bold">{data.allContentfulApproach.edges[0].node.approachBlock5title}</span>
                    {data.allContentfulApproach.edges[0].node.approachBlock5.approachBlock5}
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
                <span className="number">5</span>
                <span className="bold">{data.allContentfulApproach.edges[0].node.approachBlock6title}</span>
                    {data.allContentfulApproach.edges[0].node.approachBlock6.approachBlock6}
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
                <span className="number">6</span>
                <span className="bold">{data.allContentfulApproach.edges[0].node.approachBlock7title}</span>
                    {data.allContentfulApproach.edges[0].node.approachBlock7.approachBlock7}
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
  .number {
    background-color:var(--mainPink);
    display:flex;
    align-items:center;
    justify-content:center;
    border:0px solid #000;
    font-size:1.5em;
    width:50px;
    height:50px;
    padding:1em;
    margin:1em;
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
