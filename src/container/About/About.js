import React from 'react';

import { motion } from "framer-motion"
import { urlFor, client } from "../../client"
import AppWrapper from '../../Wrapper/AppWrap';
import MotionWrapper from "../../Wrapper/MotionWrap"
import "./About.scss";

const About = () => {

  const [abouts, setAbouts] = React.useState([]);

  React.useEffect(() => {
    const query = '*[_type == "abouts"]';
    // * represents every document in your dataset.
    //  To do any useful work this is typically followed by a filter in brackets
    //  First, we filter by document type. Every document in Sanity is required
    //  to have a type, and the type is always in the _type field.

    client.fetch(query)
      .then(data => setAbouts(data));
  }, [])
  // Client fetches query from the database and 
  // it updates the data fetched using state


  return (
    <div className='app__about'>
      <h2 className='head-text'>
        I am a <span>FULL stack</span><br /> developer, <span>My knowledge includes</span>
      </h2>

      <div className='app__profiles'>
        {
          abouts.map((about, index) => {
            return (
              <motion.div
                whileInView={{ opacity: 1 }}
                transition={{ durtion: 0.6, type: 'tween' }}
                className="app__profile-item"
                key={about.title + index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <h2 className='bold-text' style={{ marginTop: 20 }}>
                  {about.title}
                </h2>
                <p className='p-text' style={{ marginTop: 20 }}>
                  {about.description}
                </p>
              </motion.div>
            )
          })
        }
      </div>
    </div>
  );
};

export default AppWrapper(
  MotionWrapper(About, 'app__about'),
  'about',
  'app__whitebg'
);
