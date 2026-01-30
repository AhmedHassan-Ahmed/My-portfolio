const STARS = Array.from({ length: 80 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: Math.random() * 3 + 2,
}));
import { motion } from "framer-motion";

export default function Stars() {
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