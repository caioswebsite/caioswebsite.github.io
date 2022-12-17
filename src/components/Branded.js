import React from 'react';
import branded from '../images/productions/branded/branded.jpeg';

const Branded = () => {
  return (
    <div className='production-card'>
      <h2 className='production-title'>Branded by Fire</h2>
      <div className='production-container'>
        <div className='production-wrapper'>
          <a href='https://vimeo.com/manage/videos/765285481' target="_blank" rel="noreferrer">
            <img className='production-img' src={branded} alt='movie still from Branded by Fire production, showing a man sitting at a table, with legs crossed and one hand up in the air, holding onto a rolled up piece of paper; links to video on vimeo.com' />
          </a>
          <div className='production-description-container'>
            <p className='production-description-text'>
              Synopsis
            </p>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Branded;