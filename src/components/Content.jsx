import Home from "./Pages/Home";
import About from "./pages/About";

import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Expertise from "./pages/Expertise";
import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
export default function Content() {
  return (
    <>
      <div className="content bg">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/expertise" element={<Expertise />} />
        </Routes>
      </div>
    </>
  );
}
