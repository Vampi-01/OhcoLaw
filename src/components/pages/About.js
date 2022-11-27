import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/general.css";
import "../styles/about.css";

export default function About() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
