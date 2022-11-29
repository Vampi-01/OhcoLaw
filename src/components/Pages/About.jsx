import { useState, useEffect } from "react";

import "../../styles/general.css";
import "../../styles/about.css";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container " loader="page">
          <h1 className="heading" loader_heading="true" loader="page">
            OHCO Law
          </h1>
          {/* <div className="spinner"></div> */}
          <div className="bar" loader="page">
            <div className="progress" loader="page"></div>
          </div>
        </div>
      ) : (
        <div className="about-section"></div>
      )}{" "}
    </>
  );
}
