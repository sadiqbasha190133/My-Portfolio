import { useState, useEffect } from "react";
import { API } from "../api";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Needed for internal navigation

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");
        setProjects(res.data)
      }
      catch (e) {
        console.log(e)
      }
      finally {
        setloading(false)
      }
    };
    fetchProjects();

  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="h-12 w-12 border-4 border-t-4 border-gray-200 border-t-orange-600 rounded-full animate-spin"></div>
        <div className="text-orange-600 font-serif font-bold">Please wait projects are loading...</div>
      </div>
    );
  }

  if (!projects) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Projects are not found.
      </div>
    );
  }

  return (
    <>
      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
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
      <div className="flex justify-center items-center h-40">
        <p className="text-2xl text-gray-800 font-bold text-center">
          𝑀𝑜𝓇𝑒 𝓅𝓇𝑜𝒿𝑒𝒸𝓉𝓈 𝒶𝓇𝑒 𝒸𝑜𝓂𝒾𝓃𝑔 𝓈𝑜𝑜𝓃...
        </p>
      </div>

    </>
  );
}
