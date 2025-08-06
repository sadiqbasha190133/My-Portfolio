import { useState, useEffect } from "react";
import { API } from "../api";
import { motion } from "framer-motion";

export default function About() {
  const [about, setAbout] = useState({});

  useEffect(() => {
    API.get("/about")
      .then((res) => setAbout(res.data))
      .catch((err) => console.error("Error fetching about:", err));
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-8 max-w-3xl mx-auto text-center"
    >
      <h1 className="text-3xl font-bold text-blue-700">{about.name}</h1>
      <p className="text-lg text-gray-500">{about.role}</p>
      <p className="mt-4 text-gray-600">{about.description}</p>
    </motion.section>
  );
}
