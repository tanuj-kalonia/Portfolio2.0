import React from 'react';
import { motion } from "framer-motion"
import { images } from '../../constants';
import AppWrapper from '../../Wrapper/AppWrap';
import "./Header.scss";

const scaleVariant = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }} className=''>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Tanuj Kalonia</h1>
            </div>
          </div>

          <div className='tag-cmp'>
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img className=' my-pic' src={images.profile} alt="profile" />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile-circle"
          className="overlay-circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.react, images.sass, images.javascript, images.cpp, images.git].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circles" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapper(Header, 'home');
