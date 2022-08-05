import React from 'react'
import './LineTop.css'
import {motion, useScroll, useSpring } from 'framer-motion/dist/framer-motion'

const LineTop = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 10,
        damping: 10,
        restDelta: 0.001,
      });
  return (
    <motion.div className="progress-bar" style={{ scaleX }} />
  )
}

export default LineTop