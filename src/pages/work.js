import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import Footer from "../components/Globals/Footer"
import SkillsOne from '../components/Skills/SkillsOne';
import SkillsTwo from '../components/Skills/SkillsTwo';
import SkillsThree from '../components/Skills/SkillsThree';
import SkillsFour from '../components/Skills/SkillsFour';

// import BackgroundSection from '../components/Globals/BackgroundSection';

const Skills = (props) => {
  const [element, controls] = useScroll();
  return (
    <Wrapper>
      <Layout>
        <SEO title="Skills" />
        <motion.div initial='show' className='skills-wrapper'>
          <div className='overlay'>
            <SkillsOne initial='hidden' ref={element} animate={controls} />
            <SkillsTwo initial='hidden' ref={element} animate={controls} />
            <SkillsThree initial='hidden' ref={element} animate={controls} />
            <SkillsFour initial='hidden' ref={element} animate={controls} />
            <div className='spacer'></div>
          </div>
        </motion.div>
        <Footer />
      </Layout>
    </Wrapper>
  )
};

const Wrapper = styled(motion.main)`
  min-height: calc(100vh - 5rem);
  margin-top: -5rem;
  .skills-wrapper {
    margin: 0 2em;
    margin-top: 12em;
    .image-block {
      /* height: 400px; */
      /* position: relative; */
    }
    .top-box {
      height: 80vh;
      background: rgba(255, 255, 255, 0.8);
      display: flex;
      flex-direction: column;
      .img-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        margin: 2em;
        width: 100%;
        .border-radius-50 {
          border-radius: 50%;
        }
      }
      .txt-box {
        width: 100%;
        display: flex;
        align-self: center;
        text-align:center;
        margin: 2em;
      }
    }
    .two-column {
      /* height: 100vh; */
      display: flex;
      flex-direction: column-reverse;
      position:relative;
      z-index:-2;
      .img-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 100%;
      }
      .img-box::after {
        content:'';
        position:absolute;
        z-index:-6;
        bottom:110px;
        left:80px;
        width:80%;
        height:80%;
        background:#d2e2e2;
      }
      .txt-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align:center;
        margin: 2em 0;
        h3 {
          margin: 0.5rem 2rem;
          /* font-size: 2.25rem; */
        }
        p {
          margin: 0 2rem;
          /* font-size: 1.25rem; */
        }
        ul {
          margin: 0 2rem;
        }
      }
    }
    .two-column-alt {
      /* height: 100vh; */
      position:relative;
      z-index:-3;
      display: flex;
      flex-direction: column-reverse;
      .img-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 100%;
        position: relative;
      }
      .img-box::after {
        content:'';
        position:absolute;
        z-index:-1;
        bottom:-24px;
        left:50px;
        width:80%;
        height:100%;
        background:#eccecc;
      }
      .txt-box {
        text-align:center;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 2em 0;
        align-items:center;
        h3 {
          margin: 0.5rem 2rem;
          /* font-size: 2.25rem; */
        }
        p {
          margin: 0 2rem;
          /* font-size: 1.25rem; */
        }
        ul {
          margin: 0 2rem;
        }
      }
    }
  }

  .spacer {
    margin: 5em 0;
  }

  @media (min-width: 800px) {
    .skills-wrapper {
      .image-block {
      }
      .overlay {
      }
      .overlay::after {
      }
      .top-box {
        display: flex;
        flex-direction: row;
        .img-box {
          width: 50%;
          .border-radius-50 {
            border-radius: 50%;
          }
        }
        .txt-box {
          width: 50%;
          text-align:center;
        }
      }
      .two-column {
        display: flex;
        flex-direction:row-reverse;
        position:relative;
        .img-box {
          width: 50%;
        }
        .img-box::after {
          content:'';
          position:absolute;
          z-index:-1;
          bottom:-30px;
          left:195px;
          width:30%;
          height:100%;
          background:#d2e2e2;
          }
        .txt-box {
          display: flex;
          align-self: center;
          align-items:center;
          text-align:center;
          width: 50%;
        }
      }
      .two-column-alt {
        display: flex;
        flex-direction: row;
        background-color:#FFF; 
        .img-box {
          width: 50%;
        }
        .img-box::after {
        content:'';
        position:absolute;
        z-index:-1;
        bottom:-24px;
        left:75px;
        width:60%;
        height:100%;
        background:#eccecc;
      }
        .txt-box {
          display: flex;
          align-self: center;
          align-items:center;
          text-align:center;
          width: 50%;
        }
      }
    }
  }
`;

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

export default Skills;


