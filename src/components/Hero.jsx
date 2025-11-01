import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      
      <motion.img
        src="/logo.jpeg"
        alt="Profile"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -12, 0], 
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="w-60 h-60 rounded-full object-cover shadow-lg border-3 border-blue-400 mb-6"
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-3"
      >
        Hi, I’m <span className="text-blue-500">Raunaque</span> 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="text-lg md:text-2xl max-w-xl text-gray-700 dark:text-gray-500"
      >
        A passionate Web Developer who loves building responsive, modern, and
        interactive web experiences.
      </motion.p>

      <motion.a
        href="/Md_Raunaque_Resume.pdf"
        download
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        📄 Download Resume
      </motion.a>
    </section>
  );
}
