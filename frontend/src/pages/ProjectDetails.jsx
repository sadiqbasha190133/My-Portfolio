import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../api";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get(`/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading project details...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Project not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Title Section */}
      <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
      <p className="text-lg text-gray-600 mb-6">{project.title_description}</p>

      {/* Tech Stack */}
      {project.tech_stack && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <p className="bg-gray-100 px-4 py-2 rounded">{project.tech_stack}</p>
        </div>
      )}

      {/* Image Gallery */}
      {project.images?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Project Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img.image_url}
                alt={`Screenshot ${index + 1}`}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">{project.description}</p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        {project.demo_link && (
          <a
            href={project.demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
          >
            Live Demo
          </a>
        )}
        {project.github_link && (
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}
