import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-orange-600 text-white px-6 py-4 flex justify-between items-center shadow-lg backdrop-blur-md bg-opacity-90"
    >
      {/* Brand */}
      <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide">
        <span className="text-orange-400">Sadiq</span> Shaik
      </h1>

      {/* Desktop Links */}
      <div className="hidden sm:flex gap-6 text-base sm:text-lg font-medium">
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

      {/* Mobile Menu Icon */}
      <div className="sm:hidden">
        {open ? (
          <FiX size={24} onClick={() => setOpen(false)} className="cursor-pointer" />
        ) : (
          <FiMenu size={24} onClick={() => setOpen(true)} className="cursor-pointer" />
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center gap-4 py-4 sm:hidden"
          >
            {["Home", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-orange-400"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
