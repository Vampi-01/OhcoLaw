import "../styles/expertise.css";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

import corporate from "../images/home-icons/corporate.svg";
import personal from "../images/home-icons/personal.svg";
import education from "../images/home-icons/education.svg";
import family from "../images/home-icons/family.svg";
import bankruptcy from "../images/home-icons/bankruptcy.svg";
import realestate from "../images/home-icons/realestate.svg";

export default function Expertise() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 750);
  }, []);
  const { ref: sec, inView: isIntersecting } = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true,
  });
  let intersectSec = isIntersecting ? "intersecting" : "";
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <h1 className="heading">OHCO LAW.</h1>
          <div className="spinner"></div>
        </div>
      ) : (
        <section ref={sec} className={`expertise ${intersectSec} `}>
          <div className="container">
            <div className="expertise-content">
              <div className="div">
                <p className="sign-name center ">&#9866; What we Do &#9866;</p>
                <h2 className="heading center">Our Practice Area</h2>
              </div>
              <div className="expertise-cards">
                {/* Card-1 */}
                <div className="e-card">
                  <div className="card-icon">
                    <img src={corporate} alt="" />
                  </div>
                  <div className="card-text">
                    <p className="title">Corporate Law</p>
                    <p className="card-text">
                      This is a sample Text. Only small description Here. This
                      is a sample Text. Only a small description Here. This is a
                      sample Text. Only a small description Here.
                    </p>
                  </div>
                </div>
                {/* Card-1 */}
                <div className="e-card">
                  <div className="card-icon">
                    <img src={bankruptcy} alt="" />
                  </div>
                  <div className="card-text">
                    <p className="title">Bankruptcy Law</p>
                    <p className="card-text">
                      This is a sample Text. Only small description Here. This
                      is a sample Text. Only a small description Here. This is a
                      sample Text. Only a small description Here.
                    </p>
                  </div>
                </div>
                {/* Card-1 */}
                <div className="e-card">
                  <div className="card-icon">
                    <img src={education} alt="" />
                  </div>
                  <div className="card-text">
                    <p className="title">Education Law</p>
                    <p className="card-text">
                      This is a sample Text. Only small description Here. This
                      is a sample Text. Only a small description Here. This is a
                      sample Text. Only a small description Here.
                    </p>
                  </div>
                </div>
                {/* Card-1 */}
                <div className="e-card">
                  <div className="card-icon">
                    <img src={personal} alt="" />
                  </div>
                  <div className="card-text">
                    <p className="title">Personal Law</p>
                    <p className="card-text">
                      This is a sample Text. Only small description Here. This
                      is a sample Text. Only a small description Here. This is a
                      sample Text. Only a small description Here.
                    </p>
                  </div>
                </div>
                {/* Card-1 */}
                <div className="e-card">
                  <div className="card-icon">
                    <img src={realestate} alt="" />
                  </div>
                  <div className="card-text">
                    <p className="title">Real Estate Law</p>
                    <p className="card-text">
                      This is a sample Text. Only small description Here. This
                      is a sample Text. Only a small description Here. This is a
                      sample Text. Only a small description Here.
                    </p>
                  </div>
                </div>
                {/* Card-1 */}
                <div className="e-card">
                  <div className="card-icon">
                    <img src={family} alt="" />
                  </div>
                  <div className="card-text">
                    <p className="title">Family Law</p>
                    <p className="card-text">
                      This is a sample Text. Only small description Here. This
                      is a sample Text. Only a small description Here. This is a
                      sample Text. Only a small description Here.
                    </p>
                  </div>
                </div>
                {/* Card-1 */}
                <div className="e-card">
                  <div className="card-icon">
                    <img src={corporate} alt="" />
                  </div>
                  <div className="card-text">
                    <p className="title">Corporate Law</p>
                    <p className="card-text">
                      This is a sample Text. Only small description Here. This
                      is a sample Text. Only a small description Here. This is a
                      sample Text. Only a small description Here.
                    </p>
                  </div>
                </div>
                {/* Card-1 */}
                <div className="e-card">
                  <div className="card-icon">
                    <img src={bankruptcy} alt="" />
                  </div>
                  <div className="card-text">
                    <p className="title">Bankruptcy Law</p>
                    <p className="card-text">
                      This is a sample Text. Only small description Here. This
                      is a sample Text. Only a small description Here. This is a
                      sample Text. Only a small description Here.
                    </p>
                  </div>
                </div>
                {/* Card-1 */}
                <div className="e-card">
                  <div className="card-icon">
                    <img src={education} alt="" />
                  </div>
                  <div className="card-text">
                    <p className="title">Education Law</p>
                    <p className="card-text">
                      This is a sample Text. Only small description Here. This
                      is a sample Text. Only a small description Here. This is a
                      sample Text. Only a small description Here.
                    </p>
                  </div>
                </div>
                {/* Card-1 */}
                <div className="e-card">
                  <div className="card-icon">
                    <img src={personal} alt="" />
                  </div>
                  <div className="card-text">
                    <p className="title">Personal Law</p>
                    <p className="card-text">
                      This is a sample Text. Only small description Here. This
                      is a sample Text. Only a small description Here. This is a
                      sample Text. Only a small description Here.
                    </p>
                  </div>
                </div>
                {/* Card-1 */}
                <div className="e-card">
                  <div className="card-icon">
                    <img src={realestate} alt="" />
                  </div>
                  <div className="card-text">
                    <p className="title">Real Estate Law</p>
                    <p className="card-text">
                      This is a sample Text. Only small description Here. This
                      is a sample Text. Only a small description Here. This is a
                      sample Text. Only a small description Here.
                    </p>
                  </div>
                </div>
                {/* Card-1 */}
                <div className="e-card">
                  <div className="card-icon">
                    <img src={family} alt="" />
                  </div>
                  <div className="card-text">
                    <p className="title">Family Law</p>
                    <p className="card-text">
                      This is a sample Text. Only small description Here. This
                      is a sample Text. Only a small description Here. This is a
                      sample Text. Only a small description Here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      ;
    </>
  );
}
