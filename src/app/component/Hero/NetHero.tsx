// NetflixHero.jsx
import React from "react";
import "./NetHero.css";

export default function NetflixHero() {
  return (
    <div className="net-hero">
      <div className="hero-content">
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Starts at $7.99. Cancel anytime.</p>
        <div className="cta">
          <input type="email" placeholder="Email address" />
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
