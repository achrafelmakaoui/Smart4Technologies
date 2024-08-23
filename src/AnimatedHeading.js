import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from './useScrollAnimation';

const AnimatedHeading = ({ text }) => {
  const { ref, controls, variants } = useScrollAnimation('up', 0.2);

  return (
    <motion.div 
      ref={ref} 
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedHeading;
