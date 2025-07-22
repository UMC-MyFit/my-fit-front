import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
}

export default ProtectedRoute;
