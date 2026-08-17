import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLogged = localStorage.getItem("token");

  if (!isLogged) {
    alert("⚠️ Please login first");
    return <Navigate to="/login" replace />;
  }

  return children;
}