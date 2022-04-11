import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';
import img1 from '../../images/projects/project-nieuw-west1.jpg'
import img2 from '../../images/projects/project-nieuw-west2.jpg'
import img3 from '../../images/projects/project-nieuw-west3.jpg'

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
                {/* <div className="swiper"> */}
                    {/* Additional required wrapper */}
                    {/* <div className="swiper-wrapper"> */}
                        {/* Slides */}
                        {/* <div className="swiper-slide"> */}
                            <img
                                src={img1}
                                alt='installation'
                                placeholder='tracedSVG'
                                width={600}
                                className='border-radius-50' />
                        {/* </div> */}
                    {/* </div> */}
                    {/* If we need pagination */}
                    {/* <div class="swiper-pagination"></div> */}

                    {/* If we need navigation buttons */}
                    {/* <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div> */}

                    {/* If we need scrollbar */}
                    {/* <div className="swiper-scrollbar"></div> */}
                {/* </div> */}
            </motion.div>
        </div>
    );
};

export default SkillsOne;
