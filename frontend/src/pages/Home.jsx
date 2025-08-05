import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen text-center p-8"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-blue-700">
        Hi, I'm <span className="text-yellow-500">Saadiq Shaik</span> 👋
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        A passionate Full Stack Developer crafting modern, responsive, and user-friendly applications.
      </p>
      <a
        href="/projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </motion.section>
  );
}
