import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(1, 1);
  }, [pathname]);
  console.log("pathame " + pathname);

  return null;
}
