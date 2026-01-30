/* ---------- PAGE WRAPPER ---------- */
import {
  motion,
} from "framer-motion";
export default function Page({ children }) {
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
