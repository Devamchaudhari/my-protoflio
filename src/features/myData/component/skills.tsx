import React from 'react';
import SkillsImage from '../../../assets/images/skillsImage.png';
import jsImage from '../../../assets/images/skills/js.png';
import tsImage from '../../../assets/images/skills/ts.png';
import htmlImage from '../../../assets/images/skills/html5.png';
import cssImage from '../../../assets/images/skills/css3.png';
import reactJsImage from '../../../assets/images/skills/reactjs.png';
import sassImage from '../../../assets/images/skills/sass.png';
import bootStrapImage from '../../../assets/images/skills/bootstrap.png';
import webpackImage from '../../../assets/images/skills/webpack.png';
import nodeJsImage from '../../../assets/images/skills/nodejs.png';
import firebaseImage from '../../../assets/images/skills/firebase.png';
import adobeXdImage from '../../../assets/images/skills/adobeXd.png';
import figmaImage from '../../../assets/images/skills/figma.png';
const Skills = () => {
  return (
    <div className="skills-box d-flex">
      <div className="intro-image-wrapper">
        <img src={SkillsImage} alt="skills" className="intro-image" />
      </div>
      <div className="intro-content">
        <p className="intro-title mt--30">Skills</p>
        <div className="d-flex flex-wrap mt--30 gap-15 skill-icon-container">
          <div className="mr--20">
            <img src={jsImage} alt="javascript" />
          </div>
          <div className="mr--20">
            <img src={tsImage} alt="typescript" />
          </div>
          <div className="mr--20">
            <img src={reactJsImage} alt="reactJs" />
          </div>
          <div className="mr--20">
            <img src={htmlImage} alt="html5" />
          </div>
          <div className="mr--20">
            <img src={cssImage} alt="css3" />
          </div>
          <div className="mr--20">
            <img src={sassImage} alt="sass" />
          </div>
          <div className="mr--20">
            <img src={bootStrapImage} alt="bootstrap" />
          </div>
          <div className="mr--20">
            <img src={webpackImage} alt="webpack" />
          </div>
          <div className="mr--20">
            <img src={nodeJsImage} alt="nodejs" />
          </div>
          <div className="mr--20">
            <img src={firebaseImage} alt="firebase" />
          </div>
          <div className="mr--20">
            <img src={adobeXdImage} alt="adobeXD" />
          </div>
          <div className="mr--20">
            <img src={figmaImage} alt="figma" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
