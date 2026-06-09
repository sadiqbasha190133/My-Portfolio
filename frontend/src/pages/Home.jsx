import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[Poppins]">

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-orange-600 text-white min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20">
            🚀 Full Stack Developer
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, Welcome to My Portfolio 👋
            <br />
            <br />
            I'm <span className="text-orange-400">Shaik Sadiq Basha</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            A Full Stack Developer Crafting Ideas into Meaningful Digital Experiences
          </p>

          <p className="mt-4 text-gray-400 max-w-2xl">
            Explore my portfolio to discover my projects, technical skills,
            and the journey behind my growth as a developer.
          </p>

          {/* <Link
            to="/projects"
            className="mt-8 inline-block px-7 py-3 bg-orange-500 hover:bg-orange-400 rounded-lg text-lg font-semibold transition-all shadow-lg hover:scale-105"
          >
            View My Work →
          </Link> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center mt-6 md:mt-0"
        >
          <img
            src="https://i.ibb.co/n8gnSHZ8/sadiq-portfolio-photo1.jpg"
            alt="Sadiq portrait"
            className="rounded-full shadow-lg w-60 h-60 object-cover border-4 border-orange-400"
          />
        </motion.div>
      </section>



      {/* ABOUT ME */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
          }
        }}
        className="p-8 md:p-12 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-50 flex flex-col md:flex-row items-center gap-12 rounded-3xl shadow-sm border border-orange-100/50"
      >
        {/* Left Column: Image with dynamic hover scale */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
          }}
          className="relative group flex-shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-yellow-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <img
            src="https://i.ibb.co/j9W91mVP/about-me.jpg"
            alt="About me"
            className="relative z-10 rounded-2xl shadow-xl w-full max-w-xs md:w-80 h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
          />
        </motion.div>

        {/* Right Column: Text & Content Grid */}
        <div className="flex-1 space-y-6">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Who Am I?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a Computer Science & Engineering graduate (2025) from RGUKT RK-Valley, specializing in
              high-concurrency backend architectures and responsive, state-managed frontend interfaces.
              I bridge the gap between intricate data workflows and intuitive user experiences.
            </p>
          </motion.div>

          {/* The Visual Booster: Key Stats / Value Pillars Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
          >
            <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-orange-200/40 shadow-sm">
              <h3 className="font-bold text-sm tracking-wider uppercase mb-1 text-orange-600">
                Core Engine
              </h3>
              <p className="text-gray-600 text-sm">
                React.js, FastAPI, Django, and modern MERN architectures.
              </p>
            </div>

            <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-orange-200/40 shadow-sm">
              <h3 className="font-bold text-sm tracking-wider uppercase mb-1 text-orange-600">
                Development Focus
              </h3>
              <p className="text-gray-600 text-sm">
                Dynamic REST APIs, secure system design, and AI-driven platforms.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="border-t border-orange-200/60 pt-4"
          >
            <p className="text-gray-600 leading-relaxed italic text-sm">
              <span className="font-semibold text-gray-800 not-italic">When I'm not coding —</span> you'll find me playing chess, exploring science-fiction worlds, discovering music, and experimenting with side projects that fuel creativity and continuous learning.
            </p>
          </motion.div>
        </div>
      </motion.section>


      {/* SKILLS SECTION */}

      <section className="p-8 bg-gradient-to-r from-cyan-50 to-green-50">
        <h2 className="text-3xl font-bold text-black mb-6 text-center"> My Skillset</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { skill_name: "HTML", icon: "https://i.ibb.co/j9tt2j2x/html-5-svgrepo-com.png" },
            { skill_name: "CSS", icon: "https://i.ibb.co/pvgQxF1f/css-3-svgrepo-com.png" },
            { skill_name: "Javascript", icon: "https://i.ibb.co/Mkmrd9Zt/javascript-svgrepo-com.png" },
            { skill_name: "React", icon: "https://i.ibb.co/sdwwDtdw/react-svgrepo-com.png" },
            { skill_name: "Python", icon: "https://i.ibb.co/gMFy1yJm/python-svgrepo-com.png" },
            { skill_name: "Django", icon: "https://i.ibb.co/35jMpxNK/django-svgrepo-com.png" },
            { skill_name: "FastAPI", icon: "https://i.ibb.co/0yfpmHtS/fastapi-svgrepo-com.png" },
            { skill_name: "Node", icon: "https://i.ibb.co/dsLjrFr6/nodejs-icon-svgrepo-com.png" },
            { skill_name: "MySQL", icon: "https://i.ibb.co/SDL5dgBf/mysql-svgrepo-com.png" },
            { skill_name: "Postgres", icon: "https://i.ibb.co/b5DTFLS5/postgresql-logo-svgrepo-com.png" },
            { skill_name: "MongoDB", icon: "https://i.ibb.co/ynQkDBzS/mongodb-svgrepo-com.png" },
            { skill_name: "Git", icon: "https://i.ibb.co/k2xL68Zw/git-svgrepo-com.png" },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition flex flex-col items-center"
            >
              <img src={skill.icon} alt={skill.skill_name} className="w-12 h-12" />
              <p className="font-semibold text-gray-700 mt-2">{skill.skill_name}</p>
            </div>
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-8 md:p-12 bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50 flex flex-col md:flex-row items-center gap-12 rounded-2xl shadow-sm"
      >
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Featured Engineering
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            I specialize in architecting high-performance, responsive web applications across the full stack. Focusing on clean UI/UX, optimized backend databases, and scalable logic, my notable work includes:
          </p>

          <ul className="space-y-4 mb-8 text-gray-700">
            <li className="flex flex-col gap-1">
              <span className="font-bold text-gray-900 text-lg">
                🚀 Dynamic Portfolio (This Site)
              </span>
              <span className="text-gray-600 pl-6 border-l-2 border-orange-400 text-sm">
                A self-contained portfolio built with React and FastAPI featuring a secure admin portal to dynamically manage and update projects data in real-time.
              </span>
            </li>

            <li className="flex flex-col gap-1">
              <span className="font-bold text-gray-900 text-lg">
                🤖 YouTube AI Transcript Generator
              </span>
              <span className="text-gray-600 pl-6 border-l-2 border-orange-400 text-sm">
                An AI-driven platform leveraging language models and the MERN stack to extract, process, and summarize complex video content.
              </span>
            </li>

            <li className="flex flex-col gap-1">
              <span className="font-bold text-gray-900 text-lg">
                🔒 Digital Outpass System
              </span>
              <span className="text-gray-600 pl-6 border-l-2 border-orange-400 text-sm">
                An automated, enterprise-grade workflow solution utilizing REST APIs to securely track and authorize student permissions.
              </span>
            </li>

            <li className="flex flex-col gap-1">
              <span className="font-bold text-gray-900 text-lg">
                🏨 Oyo Rooms Architecture Clone
              </span>
              <span className="text-gray-600 pl-6 border-l-2 border-orange-400 text-sm">
                A high-traffic hotel booking system engineered with Django, MySQL, and server-side caching techniques for low-latency searching.
              </span>
            </li>
          </ul>

          <Link
            to="/projects"
            className="inline-block px-6 py-3 font-semibold bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-400 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Explore Full Portfolio
          </Link>
        </div>

        <div className="w-full md:w-auto flex justify-center">
          <img
            src="https://i.ibb.co/ycyy6ytL/Software-development-programming-language-coding-Premium-Vector.jpg"
            alt="Software engineering architecture illustration"
            className="rounded-2xl shadow-lg w-full max-w-sm md:w-96 h-auto object-cover border border-white/50"
          />
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-8 bg-gradient-to-r from-teal-50 via-blue-50 to-cyan-50 flex flex-col md:flex-row items-center gap-8"
      >
        <img
          src="https://www.rguktrkv.ac.in/images/rkvlogo.png"
          alt="IIT RK-Valley Image"
          className="rounded-lg shadow-md w-80 h-auto object-cover mr-10"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="border-l-4 border-orange-500 pl-4">
              <strong>B.Tech in Computer Science</strong> - RGUKT IIIT RK-Valley (2021-2025)
              <br />
              CGPA <span className="font-bold">8.1</span>
            </li>
            <li className="border-l-4 border-orange-500 pl-4">
              <strong>Intermediate</strong> - RGUKT IIIT RK-Valley (2019-2021)
              <br />
              CGPA <span className="font-bold">9.5</span>
            </li>
            <li className="border-l-4 border-orange-500 pl-4">
              <strong>High School</strong> - Zilla Parishad High School - 2019 (Gorantla, 515231)
              <br />
              GPA <span className="font-bold">10</span>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* RESUME */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-8 bg-orange-50 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">My Resume</h2>
        <p className="text-gray-600">
          You can view or download my latest resume below.
        </p>
        <a
          href="https://drive.google.com/file/d/1bvjpp-P1OmN5izJPuYwLiJ13OFIZdLxK/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-3 bg-orange-500 hover:bg-orange-400 rounded-lg text-white font-semibold transition-all"
        >
          View Resume
        </a>
      </motion.section>

      {/*Acknowledgement*/}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-8 bg-gradient-to-r from-teal-50 via-blue-50 to-cyan-50 text-center"
      >
        <p className="font-bold text-black text-xl font-sans"> Thank you very much for visiting my portfolio...❤️</p>
      </motion.section>


      {/* FOOTER */}
      <footer className="p-6 bg-gray-900 text-white text-center">
        <p className="mb-4">Connect with me:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center mb-4">
          <a href="https://x.com/TheNameISADiQ" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            X (Twitter)
          </a>
          <a href="https://www.linkedin.com/in/shaik-sadiq-basha/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            LinkedIn
          </a>
          <a href="https://github.com/sadiqbasha190133/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            GitHub
          </a>
          <a href="mailto:sadiq.dev66@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            sadiq.dev66@gmail.com
          </a>
          <a href="tel:+919618460979" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            +91 9618460979
          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Sadiq Shaik. All rights reserved.</p>
      </footer>

    </div>
  );
}