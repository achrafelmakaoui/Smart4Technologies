import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const useScrollAnimation = (direction = 'up', delay = 0, threshold = 0.2) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the animation every time the element comes into view
    threshold,          // Trigger when a certain percentage of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };

  return { ref, controls, variants };
};
