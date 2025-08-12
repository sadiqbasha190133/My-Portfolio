import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-orange-600 text-white px-8 py-4 flex justify-between items-center shadow-lg backdrop-blur-md bg-opacity-90"
    >
      {/* Brand */}
      <h1 className="text-2xl font-extrabold tracking-wide">
        <span className="text-orange-400">Sadiq</span> Shaik
      </h1>

      {/* Links */}
      <div className="flex gap-8 text-lg font-medium">
        {["Home", "Projects", "Contact"].map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="relative group"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
