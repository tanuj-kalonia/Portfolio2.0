import React, { useState } from 'react'

import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import AppWrapper from '../../Wrapper/AppWrap'
import MotionWrap from '../../Wrapper/MotionWrap'
import { urlFor, client } from '../../client'

import "./Work.scss"

function Work() {
  const domain = ['React', 'Static', 'JavaScript', 'All']

  const [activeFilter, setActiveFilter] = React.useState('All');
  const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([])


  React.useEffect(() => {
    const query = '*[_type == "works" ]'
    client.fetch(query)
      .then(data => {
        setWorks(data)
      })
      .catch(err => {
        console.log(err);
      })

  }, [])

  const handleWorkFilter = (item) => {
    console.log(`clicked item is ${item}`);

    setActiveFilter(item)
    setAnimatedCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setAnimatedCard([{ y: 0, opacity: 1 }])

      if (item === 'All') {
        setFilterWork(works)
      }
      else {
        setFilterWork(
          works.filter((work) => {
            console.log(`each work ${work}`);
            return work.tags.includes(item)
          })
        )
      }
    }, 500)
  }
  console.log(works);
  return (
    <>
      <h2 className='head-text'>My Creative <span>Portfolio </span>Section</h2>
      <div className='app__work-filter'>
        {
          domain.map((item, index) => (
            <div
              onClick={() => handleWorkFilter(item)}
              key={index}
              className={`
                app__work-filter-item 
                app__flex p-text 
                ${activeFilter === item ? 'item-active' : ''}`
              }
            >
              {item}
            </div>
          ))
        }
      </div>

      <motion.div
        animate={animatedCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {
          filterWork.map((work, index) => (
            <div className='app__work-item app__flex' key={index}>
              <div className='app__work-img app_flex'>
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                  whileInView={{ opactiy: [0, 1] }}
                  transtion={{ ease: 'easeInOut', duration: 0.25, staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileInHover={{ scale: [1, 0.9] }}
                      transtion={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileInHover={{ scale: [1, 0.9] }}
                      transtion={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className='app__work-content app__flex'>
                <h4 className='bolt-text'>{work.title}</h4>
                <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>

                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))
        }
      </motion.div>
    </>
  )
}

export default AppWrapper(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__whitebg'
);
