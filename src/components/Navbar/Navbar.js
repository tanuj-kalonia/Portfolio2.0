import React from "react";
import { images } from "../../constants/index";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";


const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  const navItems = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className="app__navbar">

      <div className="app__navbar-logo">
        <img src={images.logo} alt="Logo" />
      </div>

      <ul className="app__navbar-links">
        {navItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {
          toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />

              <ul >
                {navItems.map((item) => (
                  <li key={item}>
                    <a onClick={() => setToggle(false)} href={`#${item}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
