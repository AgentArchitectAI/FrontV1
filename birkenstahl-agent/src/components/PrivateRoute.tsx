import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const { loading, authenticated } = useAuth();

  if (loading) {
    return <div className="p-8 text-center text-gray-400">Cargando...</div>; 
  }

  return authenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
