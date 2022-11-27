import "../styles/general.css";
import "../styles/home.css";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import corporate from "../images/home-icons/corporate.svg";
import personal from "../images/home-icons/personal.svg";
import education from "../images/home-icons/education.svg";
import family from "../images/home-icons/family.svg";
import bankruptcy from "../images/home-icons/bankruptcy.svg";
import realestate from "../images/home-icons/realestate.svg";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  const { ref: sec1, inView: isIntersectingSec1 } = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true,
  });
  let intersectSec1 = isIntersectingSec1 ? "intersecting" : "";
  const { ref: sec2, inView: isIntersectingSec2 } = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true,
  });
  let intersectSec2 = isIntersectingSec2 ? "intersecting" : "";
  const { ref: sec3, inView: isIntersectingSec3 } = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true,
  });
  let intersectSec3 = isIntersectingSec3 ? "intersecting" : "";

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <h1 className="heading">OHCO LAW.</h1>
          <p className="loader-text">Please Be Patient</p>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="home-wrapper">
          {/* Section-1 */}

          {/* Section-1 Content */}

          <section ref={sec1} className={`h-sec-1 ${intersectSec1}`}>
            <div className="container">
              <div className="h-sec-1-content">
                <h2 className="heading">Need Any Help?</h2>
                <h1 className="m-heading">We Fight For Right</h1>
                <div>
                  <p className="text">
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
                    sample Text. Only a small description Here.This is a sample
                    Text. Only small description Here. This is a sample Text.
                    Only a small description Here. This is a sample Text. Only a
                    small description Here. This is a sample Text. Only small
                    description Here. This is a sample Text.
                  </p>
                  <p className="text sec-1-text">
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
                    sample Text. Only a small description Here.This is a sample
                    Text.
                  </p>
                </div>
                <div>
                  <Link to="/contact">
                    <button className="btn btn-cta">Contact Us</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section - 2 */}

          <section ref={sec2} className={`h-sec-2 ${intersectSec2}`}>
            <div className="container">
              <div className="h-sec-2-content">
                <h2 className="heading sec-2-text">Welcome Here</h2>
                <div className="sec-2-text-box">
                  <p className="text sec-2-text">
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
                    sample Text. Only a small description Here. This is a sample
                    Text. Only small description Here. This is a sample Text.
                    Only a small description Here. This is a sample Text. Only a
                    small description Here. This is a sample Text. Only small
                    description Here. This is a sample Text. Only a small
                    description Here. This is a sample Text. Only a small
                    description Here. This is a sample Text. Only small
                    description Here. This is a sample Text. Only a small
                    description Here. This is a sample Text. Only a small
                    description Here.
                  </p>
                  <p className="text sec-2-text space-1">
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
                    sample Text. Only a small description Here. This is a sample
                    Text. Only small description Here. This is a sample Text.
                    Only a small description Here. This is a sample Text. Only a
                    small description Here.
                    <p className=" text sec-2-text space ">
                      This is a sample Text. Only small description Here. This
                      is a sample Text. Only a small description Here. This is a
                      sample Text. Only a small description Here. This is a
                      sample Text. Only small description Here. This is a sample
                      Text. Only a small description Here. This is a sample
                      Text. Only a small description Here.
                    </p>
                  </p>
                </div>

                <div className="sign">
                  <p className="sign-name sec-2-text">Hammad Sarwar</p>
                  <p className="sign-post sec-2-text">
                    Senior Advocate OH Law{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section-3 */}

          <section ref={sec3} className={`h-sec-3 ${intersectSec3}`}>
            <div className="container">
              <div className="h-sec-3-content">
                <div className="div">
                  <p className="sign-name center ">
                    &#9866; What we Do &#9866;
                  </p>
                  <h2 className="heading center sec-3-gap">
                    Our Practice Area
                  </h2>
                </div>
                <div className="h-sec-3-cards">
                  {/* Card-1 */}
                  <div className="h-card">
                    <div className="card-icon">
                      <img src={corporate} alt="" />
                    </div>
                    <div className="card-text">
                      <p className="title">Corporate Law</p>
                      <p className="card-text">
                        This is a sample Text. Only small description Here. This
                        is a sample Text. Only a small description Here. This is
                        a sample Text. Only a small description Here.
                      </p>
                    </div>
                  </div>
                  {/* Card-1 */}
                  <div className="h-card">
                    <div className="card-icon">
                      <img src={bankruptcy} alt="" />
                    </div>
                    <div className="card-text">
                      <p className="title">Bankruptcy Law</p>
                      <p className="card-text">
                        This is a sample Text. Only small description Here. This
                        is a sample Text. Only a small description Here. This is
                        a sample Text. Only a small description Here.
                      </p>
                    </div>
                  </div>
                  {/* Card-1 */}
                  <div className="h-card">
                    <div className="card-icon">
                      <img src={education} alt="" />
                    </div>
                    <div className="card-text">
                      <p className="title">Education Law</p>
                      <p className="card-text">
                        This is a sample Text. Only small description Here. This
                        is a sample Text. Only a small description Here. This is
                        a sample Text. Only a small description Here.
                      </p>
                    </div>
                  </div>
                  {/* Card-1 */}
                  <div className="h-card">
                    <div className="card-icon">
                      <img src={personal} alt="" />
                    </div>
                    <div className="card-text">
                      <p className="title">Personal Law</p>
                      <p className="card-text">
                        This is a sample Text. Only small description Here. This
                        is a sample Text. Only a small description Here. This is
                        a sample Text. Only a small description Here.
                      </p>
                    </div>
                  </div>
                  {/* Card-1 */}
                  <div className="h-card">
                    <div className="card-icon">
                      <img src={realestate} alt="" />
                    </div>
                    <div className="card-text">
                      <p className="title">Real Estate Law</p>
                      <p className="card-text">
                        This is a sample Text. Only small description Here. This
                        is a sample Text. Only a small description Here. This is
                        a sample Text. Only a small description Here.
                      </p>
                    </div>
                  </div>
                  {/* Card-1 */}
                  <div className="h-card">
                    <div className="card-icon">
                      <img src={family} alt="" />
                    </div>
                    <div className="card-text">
                      <p className="title">Family Law</p>
                      <p className="card-text">
                        This is a sample Text. Only small description Here. This
                        is a sample Text. Only a small description Here. This is
                        a sample Text. Only a small description Here.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="btn-div center">
                  <Link to="/expertise">
                    <button className="btn">Explore More</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
