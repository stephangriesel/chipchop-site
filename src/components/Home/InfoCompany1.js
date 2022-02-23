import React from 'react'
import Title from '../Globals/Title'
import styled from 'styled-components'

export default function Info() {
    return (
        <Background>
            <section className="py-5 info-section">
                <div className="container"></div>
                <Title title="WHY CHIPCHOP"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                    <p className="lead text-muted mb-5">
                        Furniture is a funny subject. Many people believe that filling their home with white cubes will make it seem larger and more clutter free. But then their personal space often turns out a little cold and then they would have wanted something more creative. 
                        </p>
                        <p className="lead text-muted mb-5">
                        Now let’s look beyond the products and consider the process. Decorating your interior should be fun, right? While the IKEAs of this world make some great stuff for all budgets, their shopping experience is not fit for everyone, let alone couples ;-)
                        </p>
                    </div>
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
    box-shadow:  13px 13px 26px #d4d4d4, 
             -13px -13px 26px #ffffff;
    margin:10px;
}

@media (min-width: 800px) {
.info-section {
    height:40vh;
    margin:50px 20px;
}
}
`
