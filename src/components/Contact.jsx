import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-20 px-6 
        bg-gradient-to-br from-gray-50 to-blue-50 
        dark:from-gray-900 dark:to-blue-950 
        transition-colors duration-700
      "
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center mb-14 text-gray-900 dark:text-gray-100"
      >
        Let’s Connect 💬
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            p-8 rounded-2xl shadow-lg
            bg-white/80 dark:bg-gray-800/80 
            border border-gray-200 dark:border-gray-700 
            backdrop-blur-md
          "
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">
            Let’s build something awesome together!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-500" />
              <a
                href="raunaque14@gmail.com"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition text-gray-700 dark:text-gray-300"
              >
                raunaque14@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-blue-500" />
              <a
                href="tel:+919223456789"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition text-gray-700 dark:text-gray-300"
              >
                +91 9223456789
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-500" />
              <span className="hover:text-blue-600 dark:hover:text-blue-400 transition text-gray-700 dark:text-gray-300">
                Asansol, West Bengal, India
              </span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            bg-white dark:bg-gray-900
            rounded-2xl border border-gray-200 dark:border-gray-700 
            p-8 shadow-xl dark:shadow-[0_0_15px_rgba(0,0,0,0.6)]
            space-y-5 transition-all duration-700
          "
        >
          <input
            type="text"
            placeholder="Your Name"
            className="
              w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
              bg-gray-50 dark:bg-gray-800
              text-gray-900 dark:text-gray-100 
              placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition
            "
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="
              w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
              bg-gray-50 dark:bg-gray-800
              text-gray-900 dark:text-gray-100 
              placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition
            "
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="
              w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
              bg-gray-50 dark:bg-gray-800
              text-gray-900 dark:text-gray-100 
              placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition
            "
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full bg-gradient-to-r from-blue-500 to-indigo-600 
              hover:from-blue-600 hover:to-indigo-700 
              text-white font-semibold py-3 rounded-lg 
              shadow-lg hover:shadow-xl 
              transition
            "
          >
            ✉️ Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
