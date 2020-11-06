import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import './SocialNetWork.css';


const SocialNetWork = () => {
    return (
        <div>
        <a href="https://www.facebook.com/tayyaba.rahman.56" target='_blank'>
            <FontAwesomeIcon 
                className='social-btn' 
                icon={faFacebook} 
            />
        </a>
        <a href="https://www.linkedin.com/in/snigdha-hassan-8796851b4/" target='_blank'>
            <FontAwesomeIcon 
                className='social-btn' 
                icon={faLinkedinIn}
            />
        </a>
        <a href="https://github.com/snigdha2010" target='_blank'>
            <FontAwesomeIcon 
                className='social-btn' 
                icon={faGithub}
            />
        </a>
    </div>
    );
};

export default SocialNetWork;