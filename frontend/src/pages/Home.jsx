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
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-orange-400">Sadiq Shaik</span> 👋
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl">
            A passionate Full Stack Developer crafting modern, responsive, and user-friendly applications.
          </p>
          <Link
            to="/projects"
            className="mt-6 inline-block px-6 py-3 bg-orange-500 hover:bg-orange-400 rounded-lg text-lg font-semibold transition-all shadow-lg"
          >
            View My Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center mt-6 md:mt-0"
        >
          <img
            src="https://i.ibb.co/TqRJK8Lp/Digital-nomad-lifestyle-young-man-engaged-with-laptop-in-3d-character-illustration-Premium-AI-genera.jpg"
            alt="Sadiq portrait"
            className="rounded-full shadow-lg w-60 h-60 object-cover border-4 border-orange-400"
          />
        </motion.div>
      </section>

      {/* ABOUT ME */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-8 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-50 flex flex-col md:flex-row items-center gap-8"
      >
        <img
          src="https://i.ibb.co/j9W91mVP/about-me.jpg"
          alt="About me"
          className="rounded-lg shadow-lg w-80 h-auto object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I’m a 2025 graduate who is a passionate and detail-oriented Full Stack Developer with a strong foundation in React.js, Django, Node.js, and modern frontend/backend technologies. 
            I specialize in building responsive, user-friendly, and performance-optimized web applications.<br/><br/>

            In my final year of my B.Tech in Computer Science at RGUKT RK-Valley, I’ve worked on real-world projects like a "Digital-Outpass-System" and a "YouTube-AI-Transcript-Generator", applying skills in MERN stack, REST APIs, PostgreSQL, MongoDB, and Generative AI.
            I enjoy transforming ideas into impactful digital solutions, learning new technologies, and solving complex problems with clean, scalable code. My goal is to contribute to projects that make a difference, while constantly improving my technical expertise and design sense.
            <br/>
            <br/>
            When I’m not coding, you’ll often find me playing chess, listening to music, or doing random fun (and sometimes mad) things that spark creativity and keep life interesting.
          </p>
          {/* <Link
            to="/about"
            className="mt-4 inline-block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition-all"
          >
            Learn More
          </Link> */}
        </div>
      </motion.section>

      {/* SKILLS SECTION */}
      

      <section className="p-8 bg-gradient-to-r from-teal-50 via-blue-50 to-cyan-50">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Skills</h2>
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



      {/* MY WORK */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-8 bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Work</h2>
          <p className="text-gray-600 leading-relaxed">
             specialize in building modern, responsive, and high-performance web applications using technologies like React.js, FastAPI, Django, and the MERN stack.<br/>
              Some of my notable projects include:<br/>

              <span className="font-bold">Digital Outpass System</span> – A secure platform to manage student movement approvals in educational institutions.<br/>

              <span className="font-bold">YouTube AI Transcript Generator – </span>An AI-powered tool that generates accurate transcripts using advanced language models.<br/>

              <span className="font-bold">Oyo Clone – </span> A hotel booking system built with Django, MySQL, and caching techniques.<br/>

              My work focuses on clean UI/UX, optimized backend performance, and delivering real-world, scalable solutions.
          </p>
          <Link
            to="/projects"
            className="mt-4 inline-block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition-all"
          >
            Explore Projects
          </Link>
        </div>
        <img
          src="https://i.ibb.co/ycyy6ytL/Software-development-programming-language-coding-Premium-Vector.jpg"
          alt="My work showcase"
          className="rounded-lg shadow-md w-80 h-auto object-cover"
        />
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-8 bg-gradient-to-r from-teal-50 via-blue-50 to-cyan-50"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
        <ul className="space-y-4 text-gray-600">
          <li className="border-l-4 border-orange-500 pl-4">
            <strong>B.Tech in Computer Science</strong> - RGUKT RK-Valley (2021-2025) 
            <br/>
            CGPA <span className="font-bold">8.0</span>
          </li>
          <li className="border-l-4 border-orange-500 pl-4">
            <strong>Intermediate</strong> - RGUKT RK-Valley
            <br/>
            CGPA <span className="font-bold">9.5</span>
          </li>
          <li className="border-l-4 border-orange-500 pl-4">
            <strong>High School</strong> - Zilla Parishad High School (Gorantla, 515231)
            <br/>
            GPA <span className="font-bold">10</span>
          </li>
        </ul>
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
          href="https://drive.google.com/file/d/14qtv-7OYF6Byo2y_g_sZyTzNzkdmUKcl/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-3 bg-orange-500 hover:bg-orange-400 rounded-lg text-white font-semibold transition-all"
        >
          View Resume
        </a>
      </motion.section>

      {/* FOOTER */}
      <footer className="p-6 bg-gray-900 text-white text-center">
        <p className="mb-4">Connect with me:</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/sadiqbasha190133/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">GitHub</a>
          <a href="https://www.linkedin.com/in/shaik-sadiq-basha/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">LinkedIn</a>
          <a href="https://x.com/TheNameISADiQ" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">X(Twitter)</a>
          <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">shaiksadiqbasha190133@gmail.com</a>
          <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">+91 9618460979</a>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Sadiq Shaik. All rights reserved.</p>
      </footer>
    </div>
  );
}
