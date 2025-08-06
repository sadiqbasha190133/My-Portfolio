
import { useState } from "react";
import { API } from "../api";

export default function ProjectUploadForm() {

  const [form, setForm] = useState({name:"", description:"", tech_stack:"", github_link:"", demo_link:""})
  const [status, setStatus] = useState("")

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]:e.target.value})
  }

  const handleProjectSubmit = async (e) => {
    e.preventDefault()
    setStatus("")
    try{
      const res = await API.post("/project/create", form)
      if (res){
        console.log(res)
        setStatus("Project Uploaded Successfully ✅")
      }

    }
    catch(err){
      console.log(err)
      setStatus(err.response?.data?.detail || "Error creating project")
    }

  }
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleProjectSubmit}>
        <p
        className={`text-center ${
                status.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
        >
          {status}
        </p>
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Project Details
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Name*
          </label>
          <input
            type="text"
            placeholder="Enter Project name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Description*
          </label>
          <textarea
            type="text"
            placeholder="Provide Project Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            name="description"
            value={form.description}
            onChange={handleChange}
          >
          </textarea>
        </div>

        {/* Project Tech Stack */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Tech Stack Used
          </label>
           <input
            type="text"
            placeholder="Paste Project Link"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            name="tech_stack"
            value={form.tech_stack}
            onChange={handleChange}
          />
        </div>

        {/* Project Github Link Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Project Github Link*
          </label>
           <input
            type="text"
            placeholder="Paste Project Link"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            name="github_link"
            value={form.github_link}
            onChange={handleChange}
          />
        </div>

        {/* Project Demo Link Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Project Demo Link
          </label>
           <input
            type="text"
            placeholder="Paste Project Link"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            name=""
            value={form.demo_link}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Upload Project Details
        </button>
      </form>
    </div>
  );
}
