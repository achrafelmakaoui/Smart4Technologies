"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CardStack.css"; // Import the CSS file

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="card-stack">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className={`cardc ${index === 0 ? "card-dark" : ""}`}
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className={index === 0 ? "card-contentt-dark" : "card-contentt"}>
            {card.content}
          </div>
          <div>
            <p className={index === 0 ? "card-name-dark" : "card-name"}>
              {card.name}
            </p>
            <p className={index === 0 ? "card-designation-dark" : "card-designation"}>
              {card.designation}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
