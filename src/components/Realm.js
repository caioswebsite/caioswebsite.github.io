import React from 'react';
import carrier from '../images/productions/realm/carrier.png';
import guilty from '../images/productions/realm/guilty.png';
import wake from '../images/productions/realm/wake.png';
import when from '../images/productions/realm/when.png';


const Realm = () => {
  return (
    <div className='production-card'>
      <h2 className='production-title'>The Realm</h2>
      <div className='production-container'>
        <div className='production-wrapper'>
        <a href='https://vimeo.com/caioribeiro/therealm1' target="_blank" rel="noreferrer">
          <img className='production-img' src={carrier} alt='movie still from The Realm production, Chapter 1: The Carrier of Time, showing the silhouettes of two individuals with microphones front of them; links to video on vimeo.com' />
        </a>
          <div className='production-description-container'>
            <p className='production-chapter'>Chapter 1: The Carrier of Time
            </p>
            <p className='production-description-text'>
            A controversial thinker wants to take the world by storm with his theory of "might is right", only to watch his personal world burn to ashes, having to rebuild his life alongside the powerless and rejected.
            </p>
          </div>
        </div>
      </div>  
      <div className='production-container'>
        <div className='production-wrapper'>
        <a href='https://vimeo.com/caioribeiro/guiltyascharged' target="_blank" rel="noreferrer">
          <img className='production-img' src={guilty} alt='movie still from The Realm production, Chapter 2: Guilty as Charged, showing two men, one of whom is pointing a gun at something production off screen; links to video on vimeo.com' />
        </a>
          <div className='production-description-container'>
            <p className='production-chapter'>Chapter 2: Guilty as Charged</p>
            <p className='production-description-text'>
            A hit man lies dying in a emergency room, while reconstructing the events of his demise through the memories of his nemesis, who lies mortally wounded by his side.
            </p>
          </div>
        </div>
      </div>  
      <div className='production-container'>
        <div className='production-wrapper'>
        <a href='https://vimeo.com/38289320' target="_blank" rel="noreferrer">
          <img className='production-img' src={wake} alt='movie still from The Realm production, Chapter 3: Wake Up in New York, showing a woman with her eyes closed, with barred windows behind her; links to video on vimeo.com' />
        </a>
          <div className='production-description-container'>
            <p className='production-chapter'>Chapter 3: Wake Up in New York</p>
            <p className='production-description-text'>
            After been released from a mental institution a young woman tries to put her life back together. Little she knows she is bound to relive the events that drove her mad.
            </p>
          </div>
        </div>
      </div>  
      <div className='production-container'>
        <div className='production-wrapper'>
        <a href='https://vimeo.com/38711624' target="_blank" rel="noreferrer">
          <img className='production-img' src={when} alt="movie still from The Realm production, Chapter 4: Where and When, showing a close up of a woman's face in profile view, eyes staring upward; links to video on vimeo.com" />
        </a>
          <div className='production-description-container'>
            <p className='production-chapter'>Chapter 4: Where and When</p>
            <p className='production-description-text'>
            Juliette's husband discovers he has a terminal illness. Given the chance, will she sacrifice an innocent man to save her true love?
            </p>
          </div>
        </div>
      </div>  




    </div>
  )
}

export default Realm;