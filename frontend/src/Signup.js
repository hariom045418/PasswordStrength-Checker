import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const signup = async () => {
    const res = await axios.post("http://localhost:5000/signup", data);

    if (res.data === "Signup Success") {
      alert("✅ Account Created");
      navigate("/login");
    } else {
      alert(res.data);
    }
  };

  return (
    <div style={bgStyle}>
      <div style={overlayStyle}>
        <div style={cardStyle}>

          <h2>📝 Signup</h2>

          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <button onClick={signup} style={btnStyle}>
            Create Account
          </button>

          <p style={{ marginTop: "10px" }}>
            Already have an account?{" "}
            <Link to="/login" style={linkStyle}>Login</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

// same styles reuse karo (copy from Login.js)
const bgStyle = {
  minHeight: "100vh",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const overlayStyle = {
  minHeight: "100vh",
  width: "100%",
  background: "rgba(0,0,0,0.85)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const cardStyle = {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(15px)",
  padding: "35px",
  borderRadius: "18px",
  textAlign: "center",
  color: "white",
  width: "320px",
  boxShadow: "0 0 25px rgba(0,255,255,0.2)"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "none"
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(to right,#00c6ff,#0072ff)",
  border: "none",
  color: "white",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold"
};

const linkStyle = {
  color: "#00c6ff",
  textDecoration: "none"
};