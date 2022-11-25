import "../styles/expertise.css";

import corporate from "../images/home-icons/corporate.svg";
import personal from "../images/home-icons/personal.svg";
import education from "../images/home-icons/education.svg";
import family from "../images/home-icons/family.svg";
import bankruptcy from "../images/home-icons/bankruptcy.svg";
import realestate from "../images/home-icons/realestate.svg";

import { useInView } from "react-intersection-observer";

export default function Expertise() {
  const { ref: expertise, inView: isIntersecting } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    trackVisibility: true,
  });

  let animate = isIntersecting ? "intersecting" : "";
  return (
    <>
      <section ref={expertise} className={`expertise ${animate}`}>
        <div className="container">
          <div className="expertise-content">
            <p className="sign-name center ">&#9866; What we Do &#9866;</p>
            <h2 className="heading center ">Our Practice Area</h2>

            <div className="expertise-cards">
              {/* Card-1 */}
              <div className="e-card">
                <div className="card-icon">
                  <img src={corporate} alt="" />
                </div>
                <div className="card-text">
                  <p className="title">Corporate Law</p>
                  <p className="card-text">
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
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
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
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
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
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
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
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
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
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
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
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
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
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
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
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
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
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
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
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
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
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
                    This is a sample Text. Only small description Here. This is
                    a sample Text. Only a small description Here. This is a
                    sample Text. Only a small description Here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
