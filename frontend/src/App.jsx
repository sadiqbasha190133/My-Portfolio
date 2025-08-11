import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import UsersLayout from "./layouts/UsersLayout";

//User Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

//Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProjectUploadForm from "./pages/ProjectUploadForm";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectUpdate from "./pages/ProjectUpdate";
import AdminProjects from "./pages/AdminProjects";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route element={<UsersLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/login" element={<AdminLogin/>} />
          <Route path="/admin/dashboard" element={<AdminDashboard/>} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/upload-project/" element={<ProjectUploadForm />} />
          <Route path="/admin/projects/update/:id" element={<ProjectUpdate />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
