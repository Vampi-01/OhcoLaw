import "../styles/general.css";
import "../styles/about.css";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <h1 className="heading">OHCO LAW.</h1>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="about-section"></div>
      )}{" "}
    </>
  );
}
