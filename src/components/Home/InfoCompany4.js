import React from 'react'
// import { Link } from 'gatsby'
import Title from '../Globals/Title'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

const getAboutApproach = graphql`
{
  allContentfulApproach {
    edges {
      node {
        approachTitle
        approachBlock1 {
          approachBlock1
        }
      }
    }
  }
}
`

export default function Info() {
  return (
    <StaticQuery query={getAboutApproach} render={data => {
      console.log("test data:", data)
      return (
    <Background>
      <section className="py-5 info-section">
        <div className="container"></div>
        <Title title={data.allContentfulApproach.edges[0].node.approachTitle}></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="text-muted mb-5">
              <ReactMarkdown>
                {data.allContentfulApproach.edges[0].node.approachBlock1.approachBlock1}
              </ReactMarkdown>
            </p>
          </div>
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
    margin:30px 20px;
}
}
`
