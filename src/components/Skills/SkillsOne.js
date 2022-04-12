import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import img1 from '../../images/projects/project-nieuw-west1.jpg'
import img2 from '../../images/projects/project-nieuw-west2.jpg'
import img3 from '../../images/projects/project-nieuw-west3.jpg'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const SkillsOne = () => {

    const [element, controls] = useScroll();

    return (
        <div className='two-column-alt'>
            <div className='txt-box'>
                <h1>PROJECT: NIEUW WEST</h1>
                <p>Specialized Craft</p>
            </div>
            <motion.div
                className='img-box'
                variants={fade}
                initial='hidden'
                ref={element}
                animate={controls}
            >
                {/* <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide> */}
                        <img
                            src={img1}
                            alt='installation'
                            placeholder='tracedSVG'
                            width={600}
                            className='border-radius-50' />
                    {/* </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={img2}
                            alt='installation'
                            placeholder='tracedSVG'
                            width={600}
                            className='border-radius-50' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={img3}
                            alt='installation'
                            placeholder='tracedSVG'
                            width={600}
                            className='border-radius-50' />
                    </SwiperSlide> */}
                {/* </Swiper> */}
            </motion.div>
        </div>
    );
};

export default SkillsOne;
