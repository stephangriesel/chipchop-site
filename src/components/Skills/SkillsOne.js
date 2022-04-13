import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';
import img1 from '../../images/projects/project-nieuw-west1.jpg'


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
                <img
                    src={img1}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={600}
                    className='border-radius-50' />
            </motion.div>
        </div>
    );
};

export default SkillsOne;
