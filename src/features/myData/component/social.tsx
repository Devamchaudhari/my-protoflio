import React from 'react';
import SocialImage from '../../../assets/images/socialImage.png';
import behanceImage from '../../../assets/images/socials/behance.png';
import codePenImage from '../../../assets/images/socials/codepen.png';
import devImage from '../../../assets/images/socials/dev.png';
import dribbleImage from '../../../assets/images/socials/dribble.png';
import github from '../../../assets/images/socials/github.png';
import linkedInImage from '../../../assets/images/socials/linkedIn.png';
import mediumImage from '../../../assets/images/socials/medium.png';
import stakeOverflowImage from '../../../assets/images/socials/stakeOverflow.png';
import twitterImage from '../../../assets/images/socials/twitter.png';

const Social = () => {
  return (
    <div className="social-box d-flex">
      <div className="intro-image-wrapper">
        <img src={SocialImage} alt="social" className="intro-image" />
      </div>
      <div className="intro-content">
        <p className="intro-title mt--30">Social</p>
        <div className="d-flex flex-wrap mt--30 gap-15 social-icons-container">
          <div className="mr--20">
            <img src={stakeOverflowImage} alt="javascript" />
          </div>
          <div className="mr--20">
            <img src={github} alt="typescript" />
          </div>
          <div className="mr--20">
            <img src={devImage} alt="reactJs" />
          </div>
          <div className="mr--20">
            <img src={codePenImage} alt="html5" />
          </div>
          <div className="mr--20">
            <img src={dribbleImage} alt="css3" />
          </div>
          <div className="mr--20">
            <img src={behanceImage} alt="sass" />
          </div>
          <div className="mr--20">
            <img src={linkedInImage} alt="bootstrap" />
          </div>
          <div className="mr--20">
            <img src={mediumImage} alt="webpack" />
          </div>
          <div className="mr--20">
            <img src={twitterImage} alt="nodejs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
