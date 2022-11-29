import { useState } from "react";

import "../styles/general.css";
import { Link, resolvePath, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, onClick }) {
  const resolvedPath = useResolvedPath(to);
  const IsActive = useMatch({ path: resolvedPath.pathname, end: true });

  let current = IsActive ? "current" : null;
  return (
    <li className="nav-item">
      <Link to={to} onClick={onClick} className={`nav-link ${current} `}>
        {children}
      </Link>
    </li>
  );
}

export default function Header() {
  const [close, open] = useState(true);

  function handleClick() {
    open((close) => !close);

    document.body.classList.toggle("no-scroll");
  }
  function handleClick1() {
    open((close) => true);
    document.body.classList.remove("no-scroll");
  }
  window.addEventListener("resize", () => {
    // const winSize = window.width;
    if (window.innerWidth > 500) {
      open((close) => true);
      document.body.classList.remove("no-scroll");
    }
  });

  let clicked = close ? null : "active";

  return (
    <>
      {/* <!-- Header --> */}

      <header id="header" className={`header ${clicked} `}>
        <div className="header-container | flex x-wide y-center">
          <Link to="/" className="logo">
            <span className="lit-logo">OHco Law</span>
          </Link>

          {/* <!-- !: Ham Menu --> */}
          <button
            onClick={handleClick}
            id="menutoggle"
            className="menutoggle"
            aria-label="Main Menu"
          >
            <svg width="35px" height="35px" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
          {/* <!-- !: Ham Menu --> */}

          <nav className="nav">
            <ul className="main-nav-list | flex x-center y-center">
              <CustomLink onClick={handleClick1} to="/">
                Home
              </CustomLink>
              <CustomLink onClick={handleClick1} to="/about">
                About us
              </CustomLink>
              <CustomLink onClick={handleClick1} to="/expertise">
                Expertise
              </CustomLink>
              <CustomLink onClick={handleClick1} to="/team">
                Our Team
              </CustomLink>

              <CustomLink onClick={handleClick1} to="/contact">
                Contact
              </CustomLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
