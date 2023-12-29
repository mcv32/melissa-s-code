import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const RequireAuth = ({allowedRoles}) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        allowedRoles?.includes(auth?.roles)
            ? <Outlet />
            : auth?.email
            ? <Navigate to="/unauthorized" state={{ from: location}} replace />
            : <Navigate to="/login" state={{from: location}} replace />
    );
}

export default RequireAuth;