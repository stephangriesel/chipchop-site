import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';
import img from '../../images/projects/project-nieuw-west.jpg'

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
                {/* Slider main container */}
                {/* <div class="swiper"> */}
                    {/* Additional required wrapper */}
                    {/* <div class="swiper-wrapper"> */}
                        {/* Slides */}
                        {/* <div class="swiper-slide"> */}
                            <img
                                src={img}
                                alt='installation'
                                placeholder='tracedSVG'
                                width={600}
                                className='border-radius-50' />
                        {/* </div> */}
                    {/* </div> */}
                    {/* If we need pagination */}
                    {/* <div class="swiper-pagination"></div> */}

                    {/* If we need navigation buttons */}
                    {/* <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div> */}

                    {/* If we need scrollbar */}
                    {/* <div class="swiper-scrollbar"></div> */}
                {/* </div> */}
            </motion.div>
        </div>
    );
};

export default SkillsOne;
