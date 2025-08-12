import { useState, useEffect } from "react";
import { API } from "../api";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Needed for internal navigation

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="border rounded-lg shadow p-4 hover:shadow-lg"
        >
          <h2 className="text-xl font-bold text-orange-600">{project.name}</h2>

          <p className="text-gray-600 leading-relaxed mt-2">{project.title_description}</p>

          <Link
            to={`/projects/${project.id}`}
            className="mt-4 inline-block text-grey-800 hover:underline font-serif font-bold"
          >
            View Complete Project →
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
