import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={navStyle}>
      <h3>🔐 Security App</h3>

      <div style={{ display: "flex", alignItems: "center" }}>
        {isLogged && (
          <>
            <Link to="/dashboard" style={linkStyle}>Home</Link>
            <Link to="/generator" style={linkStyle}>Generator</Link>
            <Link to="/meter" style={linkStyle}>Checker</Link>
          </>
        )}

        {!isLogged ? (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/signup" style={linkStyle}>Signup</Link>
          </>
        ) : (
          <button onClick={logout} style={logoutBtn}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

const navStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  boxSizing: "border-box",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "15px 30px",
  background: "rgba(0,0,0,0.7)",
  backdropFilter: "blur(10px)",

  color: "white",
  zIndex: 1000
};

const linkStyle = {
  margin: "0 12px",
  color: "white",
  textDecoration: "none",
  transition: "0.3s"
};

const logoutBtn = {
  marginLeft: "10px",
  padding: "6px 12px",
  background: "linear-gradient(to right,#ff4d4d,#ff0000)",
  border: "none",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer"
};