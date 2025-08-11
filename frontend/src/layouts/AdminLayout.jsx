
import AdminNavbar from "../components/AdminNavbar";
import { Outlet, useLocation} from "react-router-dom";

export default function AdminLayout(){
    const location = useLocation()
    const hideNavbar = location.pathname === "/admin/login";
    return (
        <>
            {!hideNavbar && <AdminNavbar />}
            <Outlet />
        </>
    );
};