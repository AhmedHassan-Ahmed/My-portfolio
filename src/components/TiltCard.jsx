import {  useRef } from "react";
import { motion } from "framer-motion";
/* ---------- 3D TILT CARD ---------- */
export default function TiltCard({ children, className = "", onClick }) {
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