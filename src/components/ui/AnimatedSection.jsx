import { motion } from "framer-motion";

export function AnimatedSection({ children, className = "", id }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id={id}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15, // Jeda waktu kemunculan antar elemen di dalamnya
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Komponen item kecil di dalam seksi
export function FadeItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
