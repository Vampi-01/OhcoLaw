import React, { useState, useEffect } from "react";

import "../../styles/general.css";
import "../../styles/about.css";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <h1 className="heading loader">OHCO LAW.</h1>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="about-section"></div>
      )}{" "}
    </>
  );
}