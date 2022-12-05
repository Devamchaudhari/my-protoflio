import React from 'react';
import IntroImage from '../../../assets/images/IntroImage.png';
import SkillsImage from '../../../assets/images/skillsImage.png';
import SocialImage from '../../../assets/images/socialImage.png';
import '../myData.scss';
const MyData = () => {
    return (
        <div className="data-container full-width">
            <div className="intro-box d-flex ">
                <div className="intro-image-wrapper">
                    <img src={IntroImage} alt="intro" className="intro-image" />
                </div>
                <div className="intro-content">
                    <p className="intro-title mt--30 ">Devam Chaudhari</p>
                    <div className="intro-desc-wrapper">
                        <p className="intro-description font-size--20">
                            Hi, I'm Devam, I'm Front-End Developer.
                        </p>
                        <p className="intro-description font-size--20">
                            I'm currently working at Scaletech Solutions P.V.T
                            L.T.D.
                        </p>
                        <p className="intro-description font-size--20">
                            I ❤️ to Code. I'm based in Gujarat, Ahmedabad.
                        </p>
                    </div>
                </div>
            </div>
            <div className="skills-box d-flex">
                <div className="intro-image-wrapper">
                    <img
                        src={SkillsImage}
                        alt="skills"
                        className="intro-image"
                    />
                </div>
                <div className="intro-content">
                    <p className="intro-title mt--30">Skills</p>
                </div>
            </div>
            <div className="social-box d-flex">
                <div className="intro-image-wrapper">
                    <img
                        src={SocialImage}
                        alt="social"
                        className="intro-image"
                    />
                </div>
                <div className="intro-content">
                    <p className="intro-title mt--30">Social</p>
                </div>
            </div>
        </div>
    );
};

export default MyData;
