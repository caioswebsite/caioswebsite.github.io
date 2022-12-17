import React from 'react';
import caioBio from '../images/bio/caio-bio.jpg';

const Bio = () => {
  return (
    <div className='bio-container'>
        <img className='bio-img' src={caioBio} alt='Black and white photograph of Caio Ribeiro from the shoulders up, with background of train behind him.'/>
        <div className='bio-text-wrapper'>
          <h2 className='bio-about-me'>About Me</h2>
          <p className='bio-text'>
              Caio Ribeiro is a native of Brazil. After completing film school in New York, he pursued a career as a director of photography. Throughout the 1990s, he shot multiple heavy metal and hip-hop videos for the likes of <span className='italic'>Brutal Truth</span>, <span className='italic'>Main Source</span>, <span className='italic'>Lords Of The Underground</span>, and others, achieving broad recognition with the breakthrough video "Shook Ones" by <span className='italic'>Mob Deep</span>.
              <br />
              <br />
              In the mid 1990s, Caio started to write and direct narrative films. His first short film, <span className='italic'>Ballad for Two Lovers</span>, won the an award for Best Director at the Brussels Film Festival in Belgium in 1999.
              <br />
              <br />
              Caio's first feature film, <span className='italic'>Sometime in August</span>, was named an official selection at the Los Angeles Independent Film Festival, the Florida Independent Film Festival, and nominated for Best American Independent Film of 1999.
              <br />
              <br />
              From 1999 to 2004, Caio wrote and served as director of photography for two World War II films, <span className='italic'>Last Letters from Monte Rosa</span> and <span className='italic'>The Fallen</span>. Both films were winners of multiple awards and distributed internationally. In 2007, Caio started working on <span className='italic'>The Realm</span>, a series that pays homage to <span className='italic'>The Twilight Zone</span>.
          </p>
        </div>
    </div>
  )
}

export default Bio;