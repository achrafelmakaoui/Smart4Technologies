"use client";
import React from "react";
import { CardStack } from "./CardStack";
import "./CardStack.css"; // Import the CSS file

export function CardStackDemo() {
  return (
    <div className="card-stack-demo-container">
      <CardStack items={CARDS} />
    </div>
  );
}

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        A visionary hydrogen <Highlight>expert pioneering</Highlight> sustainable energy solutions, 
        known for <Highlight>innovative strategies</Highlight> and deep expertise in hydrogen systems.
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        A visionary hydrogen <Highlight>expert pioneering</Highlight> sustainable energy solutions, 
        known for <Highlight>innovative strategies</Highlight> and deep expertise in hydrogen systems.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        A visionary hydrogen <Highlight>expert pioneering</Highlight> sustainable energy solutions, 
        known for <Highlight>innovative strategies</Highlight> and deep expertise in hydrogen systems.
      </p>
    ),
  },
  {
    id: 3,
    name: "Achraf El Makaoui",
    designation: "Web Developer",
    content: (
      <p>
        A visionary hydrogen <Highlight>expert pioneering</Highlight> sustainable energy solutions, 
        known for <Highlight>innovative strategies</Highlight> and deep expertise in hydrogen systems.
      </p>
    ),
  },
];

function Highlight({ children, className }) {
  return (
    <span className={`highlight ${className || ""}`}>
      {children}
    </span>
  );
}
