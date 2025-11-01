import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ toggleDark, darkMode }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md bg-white/60 dark:bg-gray-900/60
        shadow-md border-b border-gray-200/30 dark:border-gray-700/30
        transition-all duration-300
        text-gray-900 dark:text-gray-100
      "
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#home" className="text-xl font-bold hover:text-blue-500 transition-colors">
          🌐 MyPortfolio
        </a>

        <div className="flex gap-6 items-center">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors ${
                activeSection === item.id
                  ? "text-blue-500 font-semibold"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-500"
              }`}
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={toggleDark}
            className="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
