import React from 'react';

import { motion } from "framer-motion";


const MotionWrap = (Compenent, classNames) => function HOC() {
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
            className={`${classNames}`}
        >
            <Compenent />
        </motion.div>
    )
}

export default MotionWrap