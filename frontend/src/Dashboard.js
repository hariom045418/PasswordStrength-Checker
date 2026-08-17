import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={bgStyle}>
      <div style={overlayStyle}>

        {/* 🔥 IMPORTANT FIX */}
        <div style={{ paddingTop: "100px", textAlign: "center" , width: "100%" }}>

          <h1>👋 Welcome, User</h1>
          <p>Manage your password security like a pro 🔐</p>

          <div style={cardContainer}>

            <div style={cardStyle} onClick={() => navigate("/generator")}>
              <h3>🔐 Password Generator</h3>
              <p>Create ultra-strong passwords</p>
            </div>

            <div style={cardStyle} onClick={() => navigate("/meter")}>
              <h3>📊 Strength Checker</h3>
              <p>Analyze password security</p>
            </div>

          </div>

          <div style={tipsStyle}>
            <h3>💡 Security Tips</h3>
            <ul>
              <li>Use at least 8–12 characters</li>
              <li>Include uppercase, numbers & symbols</li>
              <li>Avoid common passwords</li>
              <li>Never reuse passwords</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

// 🔥 styles

const bgStyle = {
  minHeight: "100vh",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87')",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const overlayStyle = {
  minHeight: "100vh",
  background: "rgba(0,0,0,0.75)",
  color: "white"
};

const cardContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginTop: "40px"
};

const cardStyle = {
  background: "rgba(255,255,255,0.1)",
  padding: "25px",
  borderRadius: "15px",
  width: "220px",
  cursor: "pointer",
  backdropFilter: "blur(10px)"
};

const tipsStyle = {
  marginTop: "50px",
  background: "rgba(255,255,255,0.1)",
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "500px",
  marginInline: "auto"
};