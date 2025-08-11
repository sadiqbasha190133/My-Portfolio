
import { useEffect, useState } from "react";
import { API } from "../api";
import { useParams } from "react-router-dom";

export default function ProjectUploadForm() {
  const { id } = useParams()
  const [form, setForm] = useState({})
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async() =>{
        try{
            const res = await API.get(`/projects/${id}`)
            setForm(res.data)
        }
        catch (err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }; fetchProject()
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-lg">
                Loading project details...
            </div>
        );
    }

//   if (!project) {
//     return(
//         <div className="flex justify-center items-center h-screen text-red-500">
//             Project not found.
//         </div>
//     );
//   }

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]:e.target.value})
  }

  const handleProjectSubmit = async (e) => {
    e.preventDefault()
    setStatus("")

    const imageObjects = form.images 
    .split("\n")
    .map(url => url.trim())
    .filter(url => url)
    .map(url => ({image_url: url}))

    const payload = {
      name: form.name,
      title_description: form.title_description,
      description: form.description,
      tech_stack: form.tech_stack,
      demo_link: form.demo_link,
      github_link: form.github_link,
      images: imageObjects
    };

    try{
      const res = await API.put(`/projects/update/${id}`, payload)
      if (res){
        console.log(res)
        setStatus("Project Updated Successfully ✅")

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
          Editing: {form.name}
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

        {/* Title Description Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Title Description*
          </label>
          <textarea
            type="text"
            placeholder="Provide Project Ttile Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            name="title_description"
            value={form.title_description}
            onChange={handleChange}
          >
          </textarea>
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
            name="demo_link"
            value={form.demo_link}
            onChange={handleChange}
          />
        </div>

         <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Image URLs (one per line)
          </label>
          <textarea
            placeholder="Enter all url`s "
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            name="images"
            value={form.images}
            onChange={handleChange}
            rows={4}
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
