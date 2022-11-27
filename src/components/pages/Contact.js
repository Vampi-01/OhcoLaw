import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/general.css";
import "../styles/contact.css";

import phone from "../images/phone.svg";
import time from "../images/time.svg";
import email from "../images/email.svg";
import location from "../images/location.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";

export default function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  const { ref: secCon, inView: isIntersectingCon } = useInView({
    rootMargin: "0px 0px",
    triggerOnce: true,
  });
  let intersectCON = isIntersectingCon ? "intersecting" : "";
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <h1 className="heading">OHCO LAW.</h1>
          <div className="spinner"></div>
        </div>
      ) : (
        <section ref={secCon} className={`contact ${intersectCON}`}>
          {/* Container */}

          <div className="container">
            <h2 className="heading">Get in Touch</h2>
            {/* Contact Grid */}

            <div className="contact-columns">
              {/* Col-1 */}

              <div className="">
                {/* Contact-form */}

                <div className="contact-form ">
                  {/* Input - Group */}

                  <div className="input-group">
                    <label className="form-label" htmlFor="Name">
                      Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      className="form-input"
                      placeholder="Your Name ..."
                      required
                    />
                  </div>
                  {/* Input - Group */}

                  <div className="input-group">
                    <label className="form-label" htmlFor="Email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      className="form-input"
                      placeholder="Your Email ..."
                      required
                    />
                  </div>
                  {/* Input - Group */}

                  <div className="input-group">
                    <label className="form-label" htmlFor="Phone">
                      Contact Number
                    </label>
                    <input
                      type="number"
                      name="Phone"
                      pattern="[+]{1}[0-9]{11,14}"
                      className="form-input no-arrow"
                      placeholder="Your Contact Number ..."
                      required
                    />
                  </div>
                  {/* Input - Group */}

                  <div className="input-group">
                    <label className="form-label" htmlFor="Org">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="Org"
                      className="form-input"
                      placeholder="Your Organization (Not Required)"
                    />
                  </div>
                  {/* Text - Area */}
                  <div className="input-group">
                    <label className="form-label" htmlFor="Message">
                      Leave a Message
                    </label>
                    <textarea
                      className="text-area"
                      name="Message"
                      cols="25"
                      rows="5"
                      placeholder="How can We help You?"
                    ></textarea>
                  </div>
                  {/* Button */}
                  <div className="input-group">
                    <div className="btn-container | right">
                      <button className="btn">Send</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Col-1 */}
              <div className="">
                <div className="contact-info ">
                  {/* Heading */}
                  <div className="info-content">
                    {/* Info */}

                    <div className="info">
                      <span>
                        <img src={phone} alt="Phone" />
                      </span>
                      <p className="text">
                        0300 - 0000000 , 0300 - 0000000 , 042 - 000000
                      </p>
                    </div>

                    {/* Info */}

                    <div className="info">
                      <span>
                        <img src={email} alt="Phone" />
                      </span>
                      <p className="text">Member@ohcolaw.com</p>
                    </div>

                    {/* Info */}

                    <div className="info">
                      <span>
                        <img src={time} alt="Phone" />
                      </span>
                      <p className="text">Mon-Fri 9 am to 5 pm</p>
                    </div>

                    {/* Info */}

                    <div className="info">
                      <span>
                        <img src={location} alt="Phone" />
                      </span>
                      <p className="text">
                        Street 101 , Block 4 , Main boulevard , Lahore
                      </p>
                    </div>

                    {/* Info */}

                    <div className="social-icon">
                      <p className="text">Follow Us</p>
                      <span className="flex gap">
                        <img className="s-icon" src={facebook} alt="Phone" />
                        <img className="s-icon" src={instagram} alt="Phone" />
                        <img className="s-icon" src={twitter} alt="Phone" />
                      </span>
                    </div>
                  </div>

                  {/* Info End */}
                </div>
              </div>
            </div>
            <div className="map">
              <h2 className="heading">Where To find Us</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d982.9617005265235!2d74.40580573260264!3d31.46487107527035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1669473924724!5m2!1sen!2s"
                width="800"
                height="600"
                AllowFullScreen=""
                loading="lazy"
                ReferrerPolicy="no-referrer-when-downgrade"
                className="g-map"
              ></iframe>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
