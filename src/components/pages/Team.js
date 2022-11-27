import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/general.css";
import "../styles/team.css";

import dp from "../images/profile-images/dp-1.jpg";

export default function Team() {
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
        <div>
          <p>adfsadf</p>
          <div>
            <h1>sadasd</h1>
            <p>dasdad</p>
            <div>
              <p>asdasdasd</p>
            </div>
          </div>
        </div>
      )}
      {/* <section classNameName="team-content">
        <h2 className="heading main-header ">Our team</h2>
        <div className="container">
          <div className="team-card-grid">
            <div className="card">
              <div className="team-img">
                <img className="dp" src={dp} alt="" />
              </div>
              <div className="team-info">
                <p className="text team-name">Julia Anderson</p>
                <p className="text team-post">Advocate</p>
                <p className="text team-name">julie@Ohcolaw.com</p>
              </div>
              <div className="profile-btn">
                <button className="btn profile-btn">Profile</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
