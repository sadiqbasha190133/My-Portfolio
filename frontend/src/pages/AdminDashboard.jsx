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

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-700">Admin Dashboard</h1>
      <p>Welcome! Here you can manage your portfolio.</p>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
