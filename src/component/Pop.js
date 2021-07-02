import React from 'react'
import {motion, useAnimation} from 'framer-motion'


function Pop() {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

    return (
            <div className="blue">
             <motion.ul
                    className="blueBox"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    >
                    {[0, 1, 2, 3].map((index) => (
                        <motion.li key={index} className="blueBox_item" variants={item} />
                        ))}
                </motion.ul>
            </div>
        
    )
}

export default Pop
