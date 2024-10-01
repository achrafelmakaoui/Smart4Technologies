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
    name: "Abdelilah Zaari ",
    designation: "Software Developer and Project Manager",
    content: (
      <p>
        Visionary developer and <Highlight>project manager</Highlight> at S4T, leading hydrogen tools globally,
        <Highlight>shaping the future</Highlight> of sustainable energy.
      </p>
    ),
  },
  {
    id: 1,
    name: "Abderrahmane Ait El Mouddene",
    designation: "Big Data and IoT Specialist",
    content: (
      <p>
        Masters student in <Highlight>Big Data and IoT</Highlight>, visionary developer at S4T,
        <Highlight>shaping sustainable energy</Highlight> with hydrogen tools globally.
      </p>
    ),
  },
  {
    id: 2,
    name: "Achraf El Makaoui",
    designation: "Frontend Developer",
    content: (
      <p>
        Innovative <Highlight>Frontend developer</Highlight> with expertise in building interfaces.
        <Highlight>Licensed in Big Data</Highlight>, combining skills to deliver impactful solutions.
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
