import { useState } from "react";

export default function Meter() {
  const [password, setPassword] = useState("");

  // Rules
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*]/.test(password);
  const isLength = password.length >= 8;

  const score = [hasLower, hasUpper, hasNumber, hasSymbol, isLength].filter(Boolean).length;

  const levels = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];
  const colors = ["#ff4d4d", "#ff884d", "#ffd24d", "#4da6ff", "#00ffcc"];

  return (
    <div style={bgStyle}>
      <div style={overlayStyle}>
        <div style={cardStyle}>

          <h2 style={{marginBottom:"10px"}}>📊 Password Strength</h2>

          {/* Input */}
          <input
            type="password"
            placeholder="Enter password"
            style={inputStyle}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Progress Bar */}
          <div style={progressBg}>
            <div
              style={{
                ...progressFill,
                width: `${score * 20}%`,
                background: colors[score - 1] || "#ff4d4d"
              }}
            ></div>
          </div>

          <p style={{ marginTop: "10px", fontWeight: "bold" }}>
            {levels[score - 1] || "Very Weak"}
          </p>

          {/* Checklist */}
          <ul style={listStyle}>
            <li style={{ color: hasLower ? "lime" : "red" }}>
              {hasLower ? "✔" : "✖"} Lowercase letter
            </li>
            <li style={{ color: hasUpper ? "lime" : "red" }}>
              {hasUpper ? "✔" : "✖"} Uppercase letter
            </li>
            <li style={{ color: hasNumber ? "lime" : "red" }}>
              {hasNumber ? "✔" : "✖"} Number
            </li>
            <li style={{ color: hasSymbol ? "lime" : "red" }}>
              {hasSymbol ? "✔" : "✖"} Special character
            </li>
            <li style={{ color: isLength ? "lime" : "red" }}>
              {isLength ? "✔" : "✖"} 8+ characters
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}

//
// 🔥 STYLES (same as generator for consistency)
//

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
  width: "340px",
  boxShadow: "0 0 25px rgba(0,255,255,0.2)"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "none"
};

const progressBg = {
  height: "10px",
  background: "#333",
  borderRadius: "5px"
};

const progressFill = {
  height: "10px",
  borderRadius: "5px",
  transition: "0.3s"
};

const listStyle = {
  textAlign: "left",
  marginTop: "15px",
  fontSize: "14px",
  lineHeight: "1.8"
};