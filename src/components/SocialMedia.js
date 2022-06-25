import React from 'react';
import { BsTwitter, BsInstagram } from "react-icons/bs"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://www.instagram.com/tanuj_kalonia/">
                    <BsInstagram />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/tanuj-kalonia-070628216/">
                    <FaLinkedin />
                </a>
            </div>
            <div>
                <a href="https://twitter.com/kalonia_tanuj">
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a href="https://github.com/Tanuj3662">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}

export default SocialMedia;