import React, { useState } from 'react'

const Lightbox = ({ children, src, alt, Wrapper = 'div' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Wrapper onClick={toggleIsOpen}>
            {children}
            {isOpen ?
            <div onClick={toggleIsOpen}>
                <img src={src} alt={alt}/>
            </div>
            : null
            }
        </Wrapper>
    )
}

export default Lightbox