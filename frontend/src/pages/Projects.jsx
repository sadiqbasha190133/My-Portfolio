import { motion } from "framer-motion";

const projects = [
  { name: "OYO Clone", description: "A hotel booking platform built with MERN stack.", link: "#" },
  { name: "Digital Outpass System", description: "A secure platform for student movement approvals.", link: "#" },
  { name: "YouTube AI Transcript Generator", description: "AI-powered app for transcribing and summarizing videos.", link: "#" },
];

export default function Projects() {
  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="border rounded-lg shadow p-4 hover:shadow-lg"
        >
          <h2 className="text-xl font-bold">{project.name}</h2>
          <p className="text-gray-600 mt-2">{project.description}</p>
          <a href={project.link} className="mt-4 inline-block text-blue-600 hover:underline">
            View Project →
          </a>
        </motion.div>
      ))}
    </section>
  );
}
