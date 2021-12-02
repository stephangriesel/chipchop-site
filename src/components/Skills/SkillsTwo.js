import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';
import img from '../../images/customfurnituredesign.jpg'

const SkillsOne = () => {
    const [element, controls] = useScroll();
    return (
        <div className='two-column'>
            <div className='txt-box'>
                <h1>CUSTOM FURNITURE DESIGN</h1>
                <p>Made-to-Order</p>
            </div>
            <motion.div
                className='img-box'
                variants={fade}
                initial='hidden'
                ref={element}
                animate={controls}
            >
                <img
                    src={img}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={400}
                    className='border-radius-50' />
            </motion.div>
        </div>
    );
};

export default SkillsOne;
