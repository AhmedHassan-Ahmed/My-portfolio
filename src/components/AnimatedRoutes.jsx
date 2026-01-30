/* ---------- ROUTES ---------- */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
export default function AnimatedRoutes({ setModalOpen }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/My-portfolio/" element={<Home />} />
        <Route
          path="/My-portfolio/skills"
          element={<Skills setModalOpen={setModalOpen} />}
        />
        <Route path="/My-portfolio/projects" element={<Projects />} />
        <Route path="/My-portfolio/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
