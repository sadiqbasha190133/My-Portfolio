import { useState } from "react";
import { API } from "../api";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/contact", form)
      .then(() => setStatus("Message sent successfully!"))
      .catch(() => setStatus("Error sending message."));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-8 max-w-xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-blue-700 text-center">Contact Me</h1>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="border p-2 rounded h-32"
        ></textarea>
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
        {status && <p className="mt-2 text-green-600">{status}</p>}
      </form>
    </motion.section>
  );
}
