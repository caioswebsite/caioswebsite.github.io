import React from 'react';
import ballad from '../images/productions/ballad/ballad.jpeg';
import brussels from '../images/reviews-awards/ballad/Brussels-Short-Film-Festival.png';
import williams from '../images/reviews-awards/ballad/Williamsburg-Film-Festival.png';

const Ballad = () => {
  return (
    <div className='production-card'>
      <h2 className='production-title'>Ballad for Two Lovers</h2>
      <div className='production-container'>
        <div className='production-wrapper'>
          <a href='https://vimeo.com/manage/videos/86161571' target="_blank" rel="noreferrer">
            <img className='production-img' src={ballad} alt='movie still from Ballad for Two Lovers production, showing a man and woman in laying in bed in profile view, looking downward; links to video on vimeo.com' />
          </a>
          <div className='production-description-container'>
            <p className='production-description-text'>
              A man contemplates about love, life, and death while photographing his latest lover, who he's sure is about to give him the boot.
            </p>
            <p className='production-selected'>Selected in</p>
            <div className='production-festivals-images'>
              <a href='https://bsff.be/en/' target="_blank" rel="noreferrer">
                <img className='production-selected-img' src={brussels} alt='logo of the Brussels Short Film Festival' />
              </a>
              <a href='https://wff5.tripod.com/' target="_blank" rel="noreferrer">
                <img className='production-selected-img' src={williams} alt='logo of the Williamsburg Film Festival' />
              </a>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Ballad;