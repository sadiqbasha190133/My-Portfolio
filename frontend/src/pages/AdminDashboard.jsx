import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (!admin) {
      navigate("/admin/login"); // Redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () =>{
    localStorage.removeItem("admin")
    navigate("/admin/login")
  };

  const handleUploadProject = () =>{
    navigate("/admin/upload-project/")
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-700">Admin Dashboard</h1>
      <p>Welcome! Here you can manage your portfolio.</p>

        <div class = "mt-4">
            <button 
                className="bg-green-600 text-white hover:bg-green-700 px-4 rounded py-2"
                onClick={handleUploadProject}
            >
                Upload Project
            </button>
        </div>


      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
