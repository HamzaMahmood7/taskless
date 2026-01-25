import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// Route to protect other routes (user can only access this routes 'children' routes if they are logged in )
const ProtectedRoute = ({ children }) => {
  const nav = useNavigate();
  const { isLoading, isLoggedIn } = useContext(AuthContext);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!isLoggedIn) {
    nav("/login");
  }

  return children;
};

export default ProtectedRoute;
