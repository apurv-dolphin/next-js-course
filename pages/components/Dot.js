/* eslint-disable react/prop-types */
import React from "react";

export default function Dot(props) {
  const { position, opacity } = props;
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#4855aa",
        borderRadius: "50%",
        opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 20,
        height: 20,
        zIndex: 9,
      }}
    />
  );
}

Dot.defaultProps = {
  position: { x: 0, y: 0 }, // Set default position
  opacity: 1, // Set default opacity
};