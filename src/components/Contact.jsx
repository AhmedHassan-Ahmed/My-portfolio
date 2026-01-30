 /* ---------- CONTACT ---------- */
 import Page from "./Page";
 import { motion } from "framer-motion";
export default function Contact() {
  return (
    <Page>
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Something Great</h2>
        <p className="text-white/70 mb-12">
          Reach out, explore my work, or connect professionally.
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
           <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500, damping: 50 }}
            href="mailto:ahmedhassan8754321@gmail.com"
            className="px-8 py-4 rounded-2xl bg-red-500 hover:bg-red-400 transition text-white font-semibold"
          >
            📧 Gmail
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500, damping: 50 }}
            href="https://github.com/AhmedHassan-Ahmed"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition"
          >
            🐙 GitHub
          </motion.a>
           <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500, damping: 50 }}
            href="https://www.linkedin.com/in/ahmed-hassan-ahmed-9b3a34376/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition"
          >
            💼 LinkedIn
          </motion.a>
        </div>
      </section>
    </Page>
  );
}