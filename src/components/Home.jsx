/* ---------- HOME (PHOTO ONLY HERE) ---------- */
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import { useRef } from "react";
import profile from "/src/assets/photo_2026-01-29_03-56-00.jpg";
import Page from "./Page";
import MagneticButton from "./MagneticButton";


export default function Home() {
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
          <Link to="/My-portfolio/projects">
            <MagneticButton>View Projects ↓</MagneticButton>
          </Link>
        </div>
      </motion.section>
    </Page>
  );
}