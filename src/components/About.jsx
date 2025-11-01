import { motion } from "framer-motion";
import { Code, Laptop, Rocket } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="
        py-20 px-6 
        bg-gradient-to-b from-white to-gray-50 
        dark:from-gray-900 dark:to-gray-800 
        transition-colors duration-700
      "
    >
     
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-gray-100"
      >
        About Me 👨‍💻
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            bg-white/80 dark:bg-gray-800/80 
            p-8 rounded-2xl shadow-lg 
            border border-gray-200 dark:border-gray-700 
            backdrop-blur-md
          "
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">
            Who am I?
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Hello! I’m <span className="font-semibold">Md Raunaque</span>, a
            passionate <span className="text-blue-500">Web Developer</span> from
            India who enjoys transforming ideas into interactive and beautiful
            digital experiences. My focus is on crafting clean, responsive, and
            user-friendly interfaces with the latest technologies.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I love building things that not only look great but also perform
            seamlessly. My main stack includes{" "}
            <span className="font-medium">
              React.js, Node.js, Express, Next.js and MongoDB
            </span>
            , along with Tailwind CSS and Bootstrap for styling.
          </p>

          <a
            href="#projects"
            className="
              inline-block mt-2 bg-blue-500 text-white px-5 py-2 
              rounded-lg shadow-md hover:bg-blue-600 transition
            "
          >
            💼 View My Work
          </a>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6"
        >
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              p-6 rounded-2xl shadow-lg 
              bg-blue-50 dark:bg-gray-800 
              border border-blue-100 dark:border-gray-700 
              text-center transition
            "
          >
            <Code className="mx-auto mb-3 text-blue-500 w-8 h-8" />
            <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">
              Frontend
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              React, Tailwind, HTML, CSS, Bootstrap, NextJs
            </p>
          </motion.div>

          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              p-6 rounded-2xl shadow-lg 
              bg-green-50 dark:bg-gray-800 
              border border-green-100 dark:border-gray-700 
              text-center transition
            "
          >
            <Laptop className="mx-auto mb-3 text-green-500 w-8 h-8" />
            <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">
              Backend
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Node, Express, MongoDB, MySql
            </p>
          </motion.div>

          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              p-6 rounded-2xl shadow-lg 
              bg-purple-50 dark:bg-gray-800 
              border border-purple-100 dark:border-gray-700 
              text-center transition
            "
          >
            <Rocket className="mx-auto mb-3 text-purple-500 w-8 h-8" />
            <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">
              Soft Skills
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Problem Solving, C, C++, Java, Python, Teamwork, Creativity
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
