import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';
import { StaticQuery, graphql } from 'gatsby';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Import Swiper styles
// import "./styles/swiper.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

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
        <div className='two-column'>
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
        </div>
      )
    }} />
  )
};

export default Project;
