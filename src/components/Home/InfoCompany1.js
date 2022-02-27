import React from 'react'
import Title from '../Globals/Title'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const getAboutWhy = graphql`
{
    allContentfulAbout {
    edges {
      node {
        whyBlock1 {
          internal {
            content
          }
        }
        whyBlock2 {
          internal {
            content
          }
        }
        whyTitle
      }
    }
  }
  }
`

export default function Info() {
    return (
        <StaticQuery query={getAboutWhy} render={data => {
            console.log("test data:", data)
            return (
                <Background>
                    <section className="py-5 info-section">
                        <div className="container"></div>
                        <Title title={data.allContentfulAbout.edges[0].node.whyTitle}></Title>
                        <div className="row">
                            <div className="col-10 col-sm-8 mx-auto text-center">
                                <p className="lead text-muted mb-5">
                                    {data.allContentfulAbout.edges[0].node.whyBlock1.internal.content}
                                </p>
                                <p className="lead text-muted mb-5">
                                    {data.allContentfulAbout.edges[0].node.whyBlock2.internal.content}
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
    box-shadow:  13px 13px 26px #d4d4d4, 
             -13px -13px 26px #ffffff;
    margin:10px;
}

@media (min-width: 800px) {
.info-section {
    height:40vh;
    margin:50px 20px;
}
}
`
