import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdminNavbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white p-4 flex justify-between items-center"
    >
      <h1 className="text-xl font-bold">It`s ME</h1>
      <div className="flex gap-6">
        <Link to="/admin/dashboard" className="hover:text-yellow-300">Home</Link>
        <Link to="/admin/projects" className="hover:text-yellow-300">Projects</Link>
      </div>
    </motion.nav>
  );
}
