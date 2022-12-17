import React from 'react';
import august from '../images/productions/august/august.jpeg';
import LA from '../images/reviews-awards/august/LA-Independent-Film-Festival.png';
import paulo from '../images/reviews-awards/august/Sao-Paulo-Internation-Film-Festival.png';
import florida from '../images/reviews-awards/august/Florida-Film-Festival.png';
import hamptons from '../images/reviews-awards/august/Hamptons-International-Film-Festival.jpg';
import rio from '../images/reviews-awards/august/Rio-International-Film-Festival.png';

const August = () => {
  return (
    <div>
      <h2 className='production-title'>Sometime in August</h2>
      <div className='production-container'>
        <div className='production-wrapper'>
          <a href='https://vimeo.com/manage/videos/36978544' target="_blank" rel="noreferrer">
            <img className='production-img' src={august} alt='movie still from Sometime in August production, showing a man and woman leaning against one another, with their backs against the wall; links to video on vimeo.com' />
          </a>
          <div className='production-description-container'>
            <p className='production-description-text'>
              A lonely woman hires a private investigator to find out who she really is.
            </p>
            <p className='production-review'>
              "A rarity in American film" <br />
              - The New York Times
            </p>
            <p className='production-selected'>Selected in</p>
            <div className='production-festivals-images'>
              <a href='http://laiffawards.com/index.html' target="_blank" rel="noreferrer">
                <img className='production-selected-img' src={LA} alt='logo of the Los Angeles Independent Film Festival' />
              </a>
              <a href='http://43.mostra.org/en/home/' target="_blank" rel="noreferrer">
                <img className='production-selected-img' src={paulo} alt='logo of the Sao Paulo International Film Festival' />
              </a>
              <a href='https://www.floridafilmfestival.com/' target="_blank" rel="noreferrer">
                <img className='production-selected-img' src={florida} alt='logo of the Florida Film Festival' />
              </a>
              <a href='https://hamptonsfilmfest.org/' target="_blank" rel="noreferrer">
                <img className='production-selected-img' src={hamptons} alt='logo of the Hamptons International Film Festival' />
              </a>
              <a href='https://www.festivaldorio.com.br/' target="_blank" rel="noreferrer">
                <img className='production-selected-img' src={rio} alt='logo of the Rio International Film Festival' />
              </a>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default August;
