// AppBar.jsx
import React from "react";
import "./HomeAppBar.css";

export default function AppBar() {
  return (
    <header className="appbar">
      <div className="logo">BetterMorals</div>
      <nav className="nav-links">
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
        {/* <a href="#">Case Studies</a> */}
      </nav>
    </header>
  );
}
