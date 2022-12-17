import React, { useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className='scroll-btn-no-display'>
            <FaAngleDoubleUp 
                onClick={ scrollTop } 
                style={{display: visible ? 'inline' : 'none'}} 
                className='scroll-top-btn' />
        </button>
    )
}

export default ScrollButton;