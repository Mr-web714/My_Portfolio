import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AirBnb Clone Website",
      desc: "A fully responsive Airbnb-inspired website clone built using nodejs and Ejs featuring dynamic property listings and modern UI components for a seamless booking experience.",
      img: "/Airbnb.png",
      link: "https://full-stack-project-hhqv.onrender.com/",
      code: "https://github.com/Mr-web714/Full-Stack-Project",
    },
    {
      title: "Resume Builder Website",
      desc: "An interactive web app that allows users to create, preview, and download professional resumes instantly using customizable templates.",
      img: "/ResumeBuilder.png",
      link: "https://resume-builder-frontend-wp35.onrender.com/",
      code: "https://github.com/Mr-web714/Resume-Builder-Website",
    },
    {
      title: "Portfolio Website",
      desc: "My personal responsive portfolio built with React and Tailwind CSS.",
      img: "/Portfolio.png",
      link: "https://your-quiz-demo-link.com",
      code: "https://github.com/Mr-web714/My_Portfolio",
    },
    {
      title: "Brain Tumor Classification",
      desc: "A deep learning project using Convolutional Neural Networks (CNNs) to classify brain MRI images into tumor and non-tumor categories with high accuracy.",
      img: "/brain.png",
      link: "https://your-quiz-demo-link.com",
      code: "https://drive.google.com/drive/folders/1d_eSp6NcfaglNw3NAXY65WDkM_d0xrxM?usp=sharing",
    },
    {
      title: "LeaderBoard App with Real-Time Ranking",
      desc: "A real-time leaderboard system using WebSockets to update player rankings instantly, ensuring live and interactive competition tracking",
      img: "/Leaderboard.png",
      link: "https://react-frontend-ixni.onrender.com/",
      code: "https://github.com/Mr-web714/React-Project",
    },
    {
      title: "Blog Website",
      desc: "A full-featured blogging platform built with the MERN stack, enabling users to create, edit, and share blog posts with a rich-text editor and secure authentication",
      img: "/Blog.png",
      link: "https://your-quiz-demo-link.com",
      code: "https://github.com/Mr-web714/Blog-Website",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center mb-12 text-gray-700 dark:text-gray-300"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-4 transition-opacity"
            >
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm mb-4">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white transition"
              >
                🔗 View Project
              </a>
              <br />
              <a
                href={p.code}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white transition"
              >
                🔗 View Project Code
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
