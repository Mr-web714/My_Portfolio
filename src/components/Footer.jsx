import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        py-10 px-6 
        bg-gray-100 dark:bg-gray-900 
        text-gray-700 dark:text-gray-300 
        border-t border-gray-200 dark:border-gray-700
        transition-colors duration-700
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center"
      >
        {/* Logo or Name */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          🌐 Md Raunaque
        </h3>

        {/* Social Links */}
        <div className="flex gap-6 mt-2">
          <motion.a
            href="https://github.com/Mr-web714"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            <Github className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/md-raunaque-146782244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="raunaque14@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Divider Line */}
        <div className="w-20 h-[1px] bg-gray-300 dark:bg-gray-700 mt-4"></div>

        {/* Footer Text */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Md Raunaque — Built with using{" "}
          <span className="font-medium text-blue-500">React</span> &{" "}
          <span className="font-medium text-sky-500">Tailwind CSS</span>.
        </p>
      </motion.div>
    </footer>
  );
}
