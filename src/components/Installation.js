import React from 'react';
import installation from '../images/installation/installation.jpeg';
import set from '../images/installation/site-pic.jpg';

const Installation = () => {
  return (
    <div className='installation-card'>
      <h2 className='installation-title'>Borges Virtualis</h2>
      <div className='installation-container'>
        <div className='installation-wrapper'>
          <img className='installation-img' src={set} alt='set of Borges Virtualis installation production, showing camera men filming and actors playing their roles'></img>
          <p className='installation-description-text'>
          Borges Virtualis is a <span className='italic'>VR installation</span>, that immerses the <span className='italic'>player</span> into the role of a detective in search of the missing actor/director of a 1978 film adaptation of Borges’ <span className='italic'>The Intruder</span>*. The player journeys from clue to clue of the director disappearance, within the context of Argentina’s “Dirty War”, when 30.000 people went missing in the hands of the reigning dictatorship. The journey ends when the player finds oneself in a contemporary jail cell, under the plight of a victim of police brutality.
          <br />
          <br />
          (*) The story of a 1800s peasant woman, who is enslaved by two brothers who fight over her possession, only to end up being murdered by them.
          </p>
          <a href='https://futureperfect.studio/projects/borges-virtualis' target="_blank" rel="noreferrer">
            <p className='view-installation-here'>Click here to view <span className='italic'>Borges Virtualis</span> project site</p>
          </a>
          <a href='https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=967ea1a7a5&attid=0.1.1&permmsgid=msg-f:1738189090094529470&th=181f49c4a38b3bbe&view=att&disp=inline&saddbat=ANGjdJ_I4Qm7KuEa6gYLfaRkKpcUpIvdo9R-nW8wY5hzYscbwP9nKnmLX95c-aeB6kXnQn8npL2Lo4rz5bBunr9ubHPsC8zS0khzwkS8b7gKPHwnkuc-pHWcGX1bUJPdsQVhzARxj_-wjoRPq6DQJVGtp1SDVbwd_7rwT_Pnoky_1mTt-MAx182_bCORUUzOaQycTTolBJEDYbc__5Kgt_xlgm4oPJvrRX0ZXkI0Q-Et2G43NYfjDzuk92dgnbs2xcn_b9fB0OGxZihBFJpzwCKpOJI8jUJaIPOqhR-FXpj9VdLafRB7Pvb5mrI-PX8FRb0aZPCZoQnuGTcbjQ7MV8H4f9BtU8uTxGtHsAPiFWqzHST-rNia9Pk4WN_i_JeThNAYYufS5ydxsPJRJe936GTdSE8rZoaAVixfSUjwOxEHAskHIwtIqtb2XWrU-W2CVrdKxFYzMZmrTgic76BVLdapOEpWPbsr5m8ms-uv0Xy21AWASVr4DXKjNtS3JNVduFaEBG4maaxpm44cyf3qZ8wa0FNTHIDT15PGrVpVhbfCjCDjIDm-pAOOu5qtWzluWhmGE8tQt8lDzCa-YB0azGBLMJ4yfhP25ArbDKB1Yhblad3SfEEWSXR757uEPQ3SBH6QBlV_FoMZTfgSpy7E5EN5oOnHzPQN8GNnEpP5mWC_nAz0bF2ftZm1R6paolH7zROUimwYtVg3MUlLlEJ762Tu1r31TOg-QdMbI8x2LI-0267wsG8SxKTO7g5FLzJxDLmQzbotkLsSIULcwFVsEgIzHU_CD8a4Ap5l741xo0Fc-nXc1-q_OXtkgtNF56lnvq1mlY5qCiqSHETdMp4BbweLxPfIRPSlU6C_RFY_yoSWQaF9tbg9DkX9o1ToFrOtH59u5P-g_2vVzZlOzuHSZNNqB_fEIeG11QDRfUDh1_2fRU6a_y37WcGU2T__whmSfELu2tKmgPwm7KXP84_MsLEdYOAsKqeUYHKLPzcotloCF5bV3IuZTsLzzhTQsc-HL4_rlmbovB5CjBCXpV5KdqV2mi72x52J-ZXzcFZPng' target="_blank" rel="noreferrer">
            <p className='view-installation-here'>Click here to view <span className='italic'>Borges Virtualis</span> PDF</p>
          </a>
          <a href='https://vimeo.com/manage/videos/760097823' target="_blank" rel="noreferrer">
            <img className='installation-img' src={installation} alt='still from Borges Virtualis production, showing a camera man shooting a scene on a movie set; links to installation proposal video on vimeo.com' />
          </a>
        </div>
      </div>  
    </div>
  )
}
export default Installation;