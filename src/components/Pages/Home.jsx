import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "../../styles/general.css";
import "../../styles/home.css";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  const { ref: sec1, inView: isIntersectingSec1 } = useInView({
    threshold: 0.6,
    rootMargin: "200px 0px 0px 0px ",
    triggerOnce: true,
  });
  let intersectSec1 = isIntersectingSec1 ? "intersecting" : "";
  const { ref: sec2, inView: isIntersectingSec2 } = useInView({
    threshold: 0.6,
    rootMargin: "200px 0px 0px 0px ",
    triggerOnce: true,
  });
  let intersectSec2 = isIntersectingSec2 ? "intersecting" : "";
  const { ref: sec3, inView: isIntersectingSec3 } = useInView({
    threshold: 0.6,
    rootMargin: "200px 0px 0px 0px ",
    triggerOnce: true,
  });
  let intersectSec3 = isIntersectingSec3 ? "intersecting" : "";

  return (
    <>
      {loading ? (
        <div className="loader-container" loader="page">
          <h1 className="heading" loader_heading="true" loader="page">
            OHCO LAW
          </h1>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="home-wrapper">
          {/* Section-1 */}

          {/* Section-1 Content */}

          <section ref={sec1} className={`h-sec-1 ${intersectSec1}`}>
            <div className="container flex x-center ">
              <div className="h-sec-1-content ">
                <h1 className="heading center" main-header="true">
                  We make the difference
                </h1>
                <div>
                  <p className="text center">
                    The journey of thousand miles starts with a single step.
                  </p>
                </div>
                <div className="btn-container center">
                  <Link to="/about">
                    <button className="btn">Explore Our firm</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section - 2 */}

          <section ref={sec2} className={`h-sec-2 ${intersectSec2}`}>
            <div className="container">
              <div className="h-sec-2-content">
                <h2 className="heading sec-2-text " main-header="true">
                  Thought Leadership
                </h2>
                <div className="sec-2-text-box">
                  <p className="text ">
                    We contribute meaningfully to the discourses on legal
                    development and trends in the practices and sectors we work
                    in. we actively author articles, create client engagements,
                    engage with regulators and other stake holders to
                    effectively contribute on all matters of legal significance
                    and policy.
                  </p>
                </div>
                <div className="btn-div ">
                  <Link to="/expertise">
                    <button className="btn">Explore More</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section-3 */}

          <section ref={sec3} className={`h-sec-3 ${intersectSec3}`}>
            <div className="container">
              <div className="h-sec-3-content">
                <h2 className="heading" main-header="true">
                  Our Team
                </h2>
                <p className="text">
                  Omer & Hammad is equipped with diverse and competent people.
                  We partner and collaborate with the most leading practitioners
                  in this field.
                </p>
                <div className="btn-container">
                  <Link to="/team">
                    <button className="btn">Explore Our Team</button>
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
