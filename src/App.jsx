import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./styles/general.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <h1 className="heading " loader_heading="true">
            OHCO LAW.
          </h1>

          <div className="bar">
            <div className="progress"></div>
          </div>
          <p className="greet-loader">Welcome</p>
          <div className="spinner" main-loader="true"></div>
        </div>
      ) : (
        <>
          <Header />
          <Content />
        </>
      )}
    </>
  );
}
