import { useState, useEffect } from "react";
import { API } from "../api";
import { motion } from "framer-motion";

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
          <h2 className="text-xl font-bold">{project.name}</h2>
          <p className="text-gray-600 mt-2">{project.description}</p>
          {project.demo_link ?(
            <a
              href={project.demo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              View Project →
            </a>)
            : project.github_link ?
            (
              <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              View Project →
            </a>
            )
            :
            null
          }

        </motion.div>
      ))}
    </section>
  );
}
