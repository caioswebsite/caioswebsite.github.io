import React from 'react';
import letters from '../images/productions/letters/letters.jpeg';
import brooklyn from '../images/reviews-awards/letters/Brooklyn-International-Film-Festival.png';
import moscow from '../images/reviews-awards/letters/Moscow-International-Film-Festival.png';
import breck from '../images/reviews-awards/letters/Breckenridge-Film-Festival.png';
import milan from '../images/reviews-awards/letters/Milan-International-Film-Festival.png';

const Letters = () => {
  return (
    <div className='production-card'>
      <h2 className='production-title'>Last Letters from Monte Rosa</h2>
      <div className='production-container'>
        <div className='production-wrapper'>
          <a href='https://vimeo.com/manage/videos/43221593' target="_blank" rel="noreferrer">
            <img className='production-img' src={letters} alt='movie still from Last Letters of Monte Rosa production, showing two male soldiers surrendering with guns pointed at them; links to video on vimeo.com' />
          </a>
          <div className='production-description-container'>
            <p className='production-description-text'>
              Life through the eyes of doomed soldiers late in WWII.
            </p>
            <p className='production-selected'>Selected in</p>
            <div className='production-festivals-images'>
              <a href='https://www.brooklynfilmfestival.org/' target="_blank" rel="noreferrer">
                <img className='production-selected-img' src={brooklyn} alt='logo of the Brooklyn International Film Festival' />
              </a>
              <a href='https://44.moscowfilmfestival.ru/' target="_blank" rel="noreferrer">
                <img className='production-selected-img' src={moscow} alt='logo of the Moscow International Film Festival' />
              </a>
              <a href='https://breckfilm.org/' target="_blank" rel="noreferrer">
                <img className='production-selected-img' src={breck} alt='logo of the Breckenridge Film Festival' />
              </a>
              <a href='https://www.miffawards.com/pages/index.php?lang=it' target="_blank" rel="noreferrer">
                <img className='production-selected-img' src={milan} alt='logo of the Milan International Film Festival' />
              </a>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Letters;