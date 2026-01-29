import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";


import cert1 from "./assets/26acd102-1b23-49a0-9c08-7b888c717c74.png";
import cert2 from "./assets/Ahmed Hassan Ahmed_ReactJS Foundations Course_page-0001.jpg";
import cert3 from "./assets/Ahmed Hassan Ahmed_SQL Server Foundations Course (1)_page-0001.jpg";
import cert4 from "./assets/Linux_Unhatched_certificate_ahmedhassan8754321-gmail-com_2d05e6fc-9f10-46ce-89d8-1b6d8f10cc57_page-0001.jpg";
import cert5 from "./assets/AI for Beginners_page-0001.jpg";
import cert6 from "./assets/9757613_9629635_1769307917351_page-0001.jpg";
import profile from "/src/assets/photo_2026-01-29_03-56-00.jpg";

const STARS = Array.from({ length: 80 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: Math.random() * 3 + 2,
}));

function Stars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STARS.map((star, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-70"
          style={{ left: star.left, top: star.top }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: star.duration, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

/* ---------- MAGNETIC BUTTON ---------- */
function MagneticButton({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.button
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      className="px-6 py-3 rounded-xl bg-indigo-500 text-white hover:bg-indigo-400 transition"
    >
      {children}
    </motion.button>
  );
}

/* ---------- 3D TILT CARD ---------- */
function TiltCard({ children, className = "", onClick }) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ref.current.style.transform = `
          rotateX(${-(y / rect.height - 0.5) * 6}deg)
          rotateY(${(x / rect.width - 0.5) * 6}deg)
        `;
      }}
      onMouseLeave={() =>
        (ref.current.style.transform = "rotateX(0) rotateY(0)")
      }
      className={`cursor-pointer bg-white/5 border border-white/10 rounded-2xl p-4 transition ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ---------- LAYOUT ---------- */
function Layout({ children }) {
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
          <NavLink to="/My-portfolio/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/My-portfolio/skills" className={navLinkClass}>
            Skills
          </NavLink>
          <NavLink to="/My-portfolio/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/My-portfolio/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
      </nav>
      <main className="relative z-10">{children}</main>
    </div>
  );
}

/* ---------- PAGE WRAPPER ---------- */
function Page({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
}

/* ---------- HOME (PHOTO ONLY HERE) ---------- */
function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <Page>
      <motion.section
        ref={ref}
        className="max-w-5xl mx-auto px-6 py-40 text-center flex flex-col items-center"
      >
        {/* CENTER IMAGE – HOME ONLY */}
        <motion.img
          src={profile}
          alt="profile"
          className="h-60 mb-12 rounded-full border border-white/30 shadow-xl"
          animate={{
            boxShadow: [
              "0 0 15px rgba(99,102,241,0.4)",
              "0 0 30px rgba(34,211,238,0.6)",
              "0 0 15px rgba(99,102,241,0.4)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* TEXT */}
        <motion.h2 style={{ y }} className="text-5xl font-bold mb-6">
          Hi, I'm Ahmed Hassan
        </motion.h2>

        <motion.p className="text-lg text-white/70 max-w-xl mx-auto">
          🎯 Aspiring Full-Stack Developer with a solid foundation in
          Object-Oriented Programming and frontend development.
        </motion.p>

        <motion.p className="text-lg text-white/70 max-w-xl mx-auto mt-2">
          💼 Completed Technologies & Skills: Python, C, C++, Java, HTML, CSS,
          JavaScript, React, Object-Oriented Programming, and Data Structures.
        </motion.p>

        <div className="mt-12">
          <Link to="/projects">
            <MagneticButton>View Projects ↓</MagneticButton>
          </Link>
        </div>
      </motion.section>
    </Page>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  return (
    <Page>
      <section className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "https://ahmedhassan-ahmed.github.io/Responsive-Landing-Page/",
            "https://ahmedhassan-ahmed.github.io/hospital-project/hospital%20project/homepage/index.html",
            "https://ahmedhassan-ahmed.github.io/React-Tasks-Project/",
            "coming soon",
          ].map((p, index) => (
            <TiltCard key={p}>
              {" "}
              <a href={p}> {index<=2 ? (index===1? "project 2" :index===2? "project 3":  "project 1") : p}</a>
            </TiltCard>
          ))}
          <div className="text-center col-span-full mt-12">
            <Link to="/My-portfolio/skills">
              <MagneticButton>My Skills →</MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </Page>
  );
}

/* ---------- SKILLS ---------- */
function Skills() {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selected]);

const certificates = [
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
];

  return (
    <Page>
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Certificates
        </h3>

        <CertificatesGrid certificates={certificates} onSelect={setSelected} />
      </section>

      <AnimatePresence>
        {selected && (
          <CertificateModal src={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </Page>
  );
}

/* ---------- CERTIFICATES MARQUEE ---------- */
function CertificateModal({ src, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.img
        src={src}
        alt="certificate full"
        className="max-w-full max-h-full rounded-xl shadow-2xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}

/* ---------- CERTIFICATES GRID ---------- */
function CertificatesGrid({ certificates, onSelect }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((src, i) => (
        <TiltCard
          key={i}
          onClick={() => onSelect(src)}
          className="group hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20"
        >
          <div className="relative">
            <img
              src={src}
              alt="certificate"
              className="w-full h-[220px] object-contain rounded-xl"
            />

            <div
              className="
              pointer-events-none
              absolute inset-0
              bg-black/50
              opacity-0
              group-hover:opacity-100
              transition
              flex items-center justify-center
              rounded-xl
            "
            >
              <span className="text-white font-semibold">Click to view</span>
            </div>
          </div>
        </TiltCard>
      ))}
    </div>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <Page>
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Something Great</h2>
        <p className="text-white/70 mb-12">
          Reach out, explore my work, or connect professionally.
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
          <a
            href="mailto:ahmedhassan8754321@gmail.com"
            className="px-8 py-4 rounded-2xl bg-red-500 hover:bg-red-400 transition text-white font-semibold"
          >
            📧 Gmail
          </a>
          <a
            href="https://github.com/AhmedHassan-Ahmed"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition"
          >
            🐙 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-hassan-ahmed-9b3a34376/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition"
          >
            💼 LinkedIn
          </a>
        </div>
      </section>
    </Page>
  );
}

/* ---------- ROUTES ---------- */
function AnimatedRoutes({ setModalOpen }) {
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

/* ---------- SCROLL NAVIGATION ---------- */
function ScrollNavigator({ disabled }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pages = ["/My-portfolio/", "/My-portfolio/skills", "/My-portfolio/projects", "/My-portfolio/contact", "/My-portfolio/"];
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

    window.addEventListener("wheel", onWheel, { passive: false }); // 👈 IMPORTANT
    return () => window.removeEventListener("wheel", onWheel);
  }, [currentIndex, navigate, disabled]);

  return null;
}

/* ---------- APP ---------- */
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <Layout>
        <ScrollNavigator disabled={modalOpen} />
        <AnimatedRoutes setModalOpen={setModalOpen} />
      </Layout>
    </Router>
  );
}
