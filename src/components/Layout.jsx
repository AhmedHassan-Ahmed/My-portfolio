

/* ---------- LAYOUT ---------- */
import Stars from "./Stars";
import { NavLink } from "react-router-dom";
import { motion  } from "framer-motion";



export default function Layout({ children }) {
  const navLinkClass = ({ isActive }) =>
    isActive ? "text-blue-500 font-semibold" : "text-white hover:text-blue-400";
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020b2d] to-black" />
      <Stars />

      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"
        animate={{ x: [0, 200, 0], y: [0, 150, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <nav className="relative z-10 flex items-center justify-between px-16 py-6">
        <h1 className="font-bold">Ahmed Hassan Ahmed</h1>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-gray-400 text-sm tracking-wide">
          Made by React
        </h1>

        <div className="flex gap-6">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/skills" className={navLinkClass}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
      </nav>
      <main className="relative z-10">{children}</main>
    </div>
  );
}