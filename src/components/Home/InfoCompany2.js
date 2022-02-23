import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';

export default function Info() {
    return (
        <Background>
            <section className="py-5 info-section">
                <div className="container"></div>
                <div className="row">
                    <InView threshold={0.25} triggerOnce>
                        {({ ref, inView }) => (
                            <motion.div
                                className="col-10 col-sm-8 mx-auto text-center"
                                ref={ref}
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <p className="lead text-muted mb-5">
                                    Chipchop is not for the cheap. Chipchop is for those who want to have some fun while designing their interior. For those who want imaginative furniture that really celebrates colour, contrast, texture, material and space. And even for those who do not yet know what they want.
                                </p>
                                <p className="lead text-muted mb-5">
                                    We can provide you with design insights, inspiring ideas and project visualisations, all based on your own space and personal taste. We help you make up your mind, custom-make your durable furniture and make sure you get what your interior needs in the end, always with a smile.
                                </p>
                            </motion.div>
                        )}
                    </InView>
                </div>
            </section>
        </Background>
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
