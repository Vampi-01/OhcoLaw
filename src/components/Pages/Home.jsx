import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "../../styles/general.css";
import "../../styles/home.css";

import corporate from "../../assets/icons/corporate.svg";
import personal from "../../assets/icons/personal.svg";
import education from "../../assets/icons/education.svg";
import family from "../../assets/icons/family.svg";
import bankruptcy from "../../assets/icons/bankruptcy.svg";
import realestate from "../../assets/icons/realestate.svg";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const { ref: sec1, inView: isIntersectingSec1 } = useInView({
    rootMargin: "0px 0px",
    triggerOnce: true,
  });
  let intersectSec1 = isIntersectingSec1 ? "intersecting" : "";
  const { ref: sec2, inView: isIntersectingSec2 } = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });
  let intersectSec2 = isIntersectingSec2 ? "intersecting" : "";
  const { ref: sec3, inView: isIntersectingSec3 } = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });
  let intersectSec3 = isIntersectingSec3 ? "intersecting" : "";

  return (
    <>
      {loading ? (
        <div className="loader-container" loader="page">
          <h1 className="heading" loader_heading="true">
            Home
          </h1>
          {/* <div className="spinner"></div> */}
          <div className="bar" loader="page">
            <div className="progress" loader="page"></div>
          </div>
        </div>
      ) : (
        <div className="home-wrapper">
          {/* Section-1 */}

          {/* Section-1 Content */}

          <section ref={sec1} className={`h-sec-1 ${intersectSec1}`}>
            <div className="container">
              <div className="h-sec-1-content">
                <h2 className="heading">Need Any Help?</h2>
                <h1 className="m-heading">We make the difference</h1>
                <div>
                  <p className="text">
                    The journey of thousand miles starts with a single step.
                  </p>
                </div>
                <div>
                  <Link to="/about">
                    <button className="btn btn-cta">Explore Our firm</button>
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
