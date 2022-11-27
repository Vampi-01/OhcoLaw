import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/general.css";
import "../styles/about.css";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <h1 className="heading">OHCO LAW.</h1>
          <div className="spinner"></div>
          <p className="ad">
            Created By <br />
          </p>
          <span className="ad-name">
            Abdullah <br /> dev.vampi@gmail.com
          </span>
        </div>
      ) : (
        <div className="about-section"></div>
      )}{" "}
    </>
  );
}
