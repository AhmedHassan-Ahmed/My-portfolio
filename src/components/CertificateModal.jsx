
/* ---------- CERTIFICATES MARQUEE ---------- */
import { motion } from "framer-motion";
export default function CertificateModal({ src, onClose }) {
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