import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-600 text-white p-4 flex justify-between items-center"
    >
      <h1 className="text-xl font-bold">Saadiq Shaik</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/projects" className="hover:text-yellow-300">Projects</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
      </div>
    </motion.nav>
  );
}
