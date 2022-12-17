import React, { useState, useEffect } from 'react';
import landingImg from '../images/landing/landing.jpg';
import landingImgMobile from '../images/landing/landing-mobile.jpg';

const Landing = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 480);

    const updateImg = () => {
        setIsLargeScreen(window.innerWidth > 480)
    }

    useEffect(() => {
        window.addEventListener('resize', updateImg);
        return () => {
            window.removeEventListener('resize', updateImg);
        }
    })

    return (
        <div className='landing-container'>
            <div className='landing-img-relative'>
                {isLargeScreen ? (
                    <img className='landing-img' src={landingImg} alt='Caio Ribeiro on movie set, watching scene from movie being acted out in front of him' />
                ) : (
                    <img className='landing-img' src={landingImgMobile} alt='Caio Ribeiro on movie set, watching scene from movie being acted out in front of him' />
                )}
                <h2 className='landing-text'>
                    <span className='caio-name'>
                    Caio Ribeiro <br />
                    </span>
                    <span className='caio-title'>
                    Writer & Director
                    </span>
                </h2>
                <div className='gradient-bottom'></div>
            </div>
        </div>
    )
}

export default Landing