// AnimatedTooltip.jsx
import React, { useState } from 'react';
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import './AnimatedTooltip.css';
import { Link } from 'react-router-dom';

export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="animated-tooltip-container"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{ translateX, rotate }}
                className="animated-tooltip"
              >
                <div className="animated-tooltip-text">{item.name}</div>
                <div className="animated-tooltip-designation">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="image-container">
            <Link to={item.link}>
              <img
                onMouseMove={handleMouseMove}
                src={item.image}
                alt={item.name}
                className="image"
                loading="lazy"
                title="Team"
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
