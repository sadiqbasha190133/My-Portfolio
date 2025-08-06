import { useState } from "react";
import { API } from "../api";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const res = await API.post("/admin/login", form);
      // Store admin details or token in localStorage
      localStorage.setItem("admin", JSON.stringify(res.data));

      setStatus("Login successful ✅");
      navigate("/admin/dashboard"); // Redirect to admin dashboard
    } catch (err) {
      if (err.response?.data?.detail) {
        setStatus(err.response.data.detail);
      } else {
        setStatus("Error logging in");
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center min-h-screen bg-gray-100"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-blue-700">Admin Login</h1>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Login
          </button>
          {status && (
            <p
              className={`text-center ${
                status.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
}
