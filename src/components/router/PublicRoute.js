import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";

export default function PublicRoutes() {
    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to="/users" />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}