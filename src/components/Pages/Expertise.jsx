import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import "../../styles/general.css";
import "../../styles/expertise.css";

import corporate from "../../assets/icons/corporate.svg";
import personal from "../../assets/icons/personal.svg";
import education from "../../assets/icons/education.svg";
import family from "../../assets/icons/family.svg";
import bankruptcy from "../../assets/icons/bankruptcy.svg";
import realestate from "../../assets/icons/realestate.svg";

export default function Expertise() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  const { ref: secEx, inView: isIntersectingEx } = useInView({
    rootMargin: "0px 0px",
    triggerOnce: true,
  });
  let intersectSecEX = isIntersectingEx ? "intersecting" : "";
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
        <section ref={secEx} className={`expertise ${intersectSecEX}`}>
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
