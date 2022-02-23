import React from 'react'
import Title from '../Globals/Title'
import styled from 'styled-components'
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';

export default function Info() {
    return (
        <Background>
            <section className="py-5 info-section">
                <div className="container"></div>
                <Title title="our story"></Title>
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
                                    Chipchop Amsterdam was founded in 2015 by Ma­rc Lineham. Yet it was way earlier that the self-taught hobbyist started gaining professional woodworking experience: pretty much at the same time as he started growing his iconic beard. Through his constant delivery of high-quality furniture, bespoke shop displays and stylish interior designs, he kept his customers coming back for more.
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
    margin:50px;
    box-shadow:  13px 13px 26px #d4d4d4, 
             -13px -13px 26px #ffffff;
}

@media (min-width: 800px) {
.info-section {
    height:100%;
    margin:50px 200px;
}
}`
