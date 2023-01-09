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
            Ribeiro rescues the remains of a 1978 film adaptation of Borges’ <span className='italic'>The Intruder</span>, butchered by the sensors during Argentina’s “Dirty War” (1978-83). Ribeiro discovers that the director’s demise was the result of her transposing the literary classic, about an 1860s peasant woman enslaved and murdered by two gaucho brothers, with the real stories of her contemporary political prisoners enslaved during the Argentinian dictatorship.
            </p>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Branded;