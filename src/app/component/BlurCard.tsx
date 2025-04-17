import React from "react";
import "./blurCard.css";

export default function BlurCard({ children }) {
  return (
    <div className="card-wrapper">
      <div className="blur-background" />
      <div className="blur-card">
        <h2>Frosty Vibes</h2>
        <p>This is a translucent, blurred card component!</p>
      </div>
    </div>
  );
}
