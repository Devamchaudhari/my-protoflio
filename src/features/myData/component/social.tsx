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
            <a href="https://stackoverflow.com/users/17909143/chaudhari-devam">
              <img src={stakeOverflowImage} alt="javascript" />
            </a>
          </div>
          <div className="mr--20">
            <a href="https://github.com/Devamchaudhari">
              <img src={github} alt="typescript" />
            </a>
          </div>
          <div className="mr--20">
            <a href="https://dev.to/chaudharidevam">
              <img src={devImage} alt="reactJs" />
            </a>
          </div>
          <div className="mr--20">
            <a href="https://codepen.io/your-work">
              <img src={codePenImage} alt="html5" />
            </a>
          </div>
          <div className="mr--20">
            <a href="https://dribbble.com/ChaudhariDevam">
              <img src={dribbleImage} alt="css3" />
            </a>
          </div>
          <div className="mr--20">
            <a href="https://www.behance.net/devamchaud7cf7">
              <img src={behanceImage} alt="sass" />
            </a>
          </div>
          <div className="mr--20">
            <a href="https://www.linkedin.com/in/devam-chaudhari-537ba7134/">
              <img src={linkedInImage} alt="bootstrap" />
            </a>
          </div>
          <div className="mr--20">
            <a href="https://medium.com/@devamchaudhari40">
              <img src={mediumImage} alt="webpack" />
            </a>
          </div>
          <div className="mr--20">
            <a href="https://twitter.com/ChaudhariDevam">
              <img src={twitterImage} alt="nodejs" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
