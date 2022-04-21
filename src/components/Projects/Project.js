import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

// Swiper styles 
import './styles.css';

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
        <>
        <Wrapper>
          <motion.div
            className='img-box'
            variants={fade}
            initial='hidden'
            ref={element}
            animate={controls}
          >
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src={data.allContentfulProject.edges[0].node.image[0].localFile.childImageSharp.fixed.src}
                  alt='installation'
                  placeholder='tracedSVG'
                  width={600}
                  className='border-radius-50' />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={data.allContentfulProject.edges[0].node.image[1].localFile.childImageSharp.fixed.src}
                  alt='installation'
                  placeholder='tracedSVG'
                  width={600}
                  className='border-radius-50' />
              </SwiperSlide>
            </Swiper>
          </motion.div>
          <div className='txt-box'>
            <h1>{data.allContentfulProject.edges[0].node.name}</h1>
            <p>Specialized Craft</p>
          </div>
        </Wrapper>
        <Wrapper>
          <motion.div
            className='img-box'
            variants={fade}
            initial='hidden'
            ref={element}
            animate={controls}
          >
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src={data.allContentfulProject.edges[1].node.image[0].localFile.childImageSharp.fixed.src}
                  alt='installation'
                  placeholder='tracedSVG'
                  width={600}
                  className='border-radius-50' />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={data.allContentfulProject.edges[1].node.image[1].localFile.childImageSharp.fixed.src}
                  alt='installation'
                  placeholder='tracedSVG'
                  width={600}
                  className='border-radius-50' />
              </SwiperSlide>
            </Swiper>
          </motion.div>
          <div className='txt-box'>
            <h1>{data.allContentfulProject.edges[0].node.name}</h1>
            <p>Specialized Craft</p>
          </div>
        </Wrapper>
        </>
      )
    }} />
  )
};

const Wrapper = styled.div`
min-height: calc(100vh - 5rem);
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
h1, p{
  display:flex;
  justify-content:center;
}
.txt-box {
  height:50vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.img-box {
  width:100%;
}
.swiper {
  max-width:38em;
}

@media (min-width: 800px) {
  display:flex;
  flex-direction:row;
  width:100%;
  margin:0 5em;
  .txt-box {
    width:50%;
  }
  .img-box {
    width:50%;
  }
}
`

export default Project;
