import React from 'react';
import ProfileImage from '../../assets/images/Profile.png';
import { RightArrow } from '../../shared/icons/icons';
import '../header.scss';
const Header = () => {
    return (
        <div className="full-width d-flex justify-content-space-between align-items-center">
            <div className="profile  position--absolute" />
            <div className="profile-image-wrapper  position--relative">
                <img src={ProfileImage} alt="profile" className="width--100" />
            </div>
            <div>
                <button className="d-flex align-items-center p--10 mr-20 connect-btn">
                    Let's connect
                    <RightArrow />
                </button>
            </div>
        </div>
    );
};

export default Header;
