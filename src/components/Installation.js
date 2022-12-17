import React from 'react';
import installation from '../images/installation/installation.jpeg';

const Installation = () => {
  return (
    <div className='installation-card'>
      <h2 className='installation-title'>Borges Virtualis</h2>
      <div className='installation-container'>
        <div className='installation-wrapper'>
          <p className='installation-description-text'>
            Borges Virtualis is a trans-media installation that takes the audience on a journey, starting with the familiar experience of watching a movie in a theater, to the full VR immersion, into the world of the story and the characters themselves. Borges Virtualis is anchored in a 1978 film adaptation of Borges’ <span className='italic'>The Intruder</span> (The story of an 1800s-era peasant woman, who is enslaved by two brothers who fight over her possession, only to end up being murdered by them).
          </p>
          <br />
          <a href='https://vimeo.com/manage/videos/760097823' target="_blank" rel="noreferrer">
            <img className='installation-img' src={installation} alt='still from Borges Virtualis production, showing a camera man shooting a scene on a movie set; links to installation proposal video on vimeo.com' />
          </a>
        </div>
      </div>  
    </div>
  )
}
export default Installation;