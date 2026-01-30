import {
  motion,
  useMotionValue,
} from "framer-motion";



/* ---------- MAGNETIC BUTTON ---------- */
export default function MagneticButton({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 500, damping: 50 }}
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