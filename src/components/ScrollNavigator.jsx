
/* ---------- SCROLL NAVIGATION ---------- */
import { useNavigate, useLocation } from "react-router-dom";
import { useRef,useEffect } from "react";
export default function ScrollNavigator({ disabled }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pages = [
    "/",
    "/skills",
    "/projects",
    "/contact",
    "/",
  ];
  const currentIndex = pages.indexOf(location.pathname);
  const locked = useRef(false);

  useEffect(() => {
    const onWheel = (e) => {
      if (disabled) {
        e.preventDefault();
        return;
      }

      if (locked.current) return;

      if (e.deltaY > 50 && currentIndex < pages.length - 1) {
        locked.current = true;
        navigate(pages[currentIndex + 1]);
        setTimeout(() => (locked.current = false), 900);
      }

      if (e.deltaY < -50 && currentIndex > 0) {
        locked.current = true;
        navigate(pages[currentIndex - 1]);
        setTimeout(() => (locked.current = false), 900);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false }); 
    return () => window.removeEventListener("wheel", onWheel);
  }, [currentIndex, navigate, disabled]);

  return null;
}