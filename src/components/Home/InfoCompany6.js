import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

const getAboutApproach = graphql`
{
  allContentfulApproach {
    edges {
      node {
        approachBlock8 {
          approachBlock8
        }
        approachCtaText
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
            <p className="lead text-muted mb-5">
            {data.allContentfulApproach.edges[0].node.approachBlock8.approachBlock8}
            </p>
            <button
              type="submit"
              className="btn btn-pink btn-block text-capitalize mt-5"
            >
              <Link to="/contact"> {data.allContentfulApproach.edges[0].node.approachCtaText}</Link>
            </button>
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

@media (min-width: 800px) {
.info-section {
    height:100%;
    margin:50px 20px;
}
}
`
