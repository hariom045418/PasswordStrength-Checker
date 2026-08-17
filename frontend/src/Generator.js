import { useState } from "react";

export default function Generator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generate = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
    let pass = "";

    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(pass);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("✅ Copied to clipboard!");
  };

  return (
    <div style={bgStyle}>
      <div style={overlayStyle}>
        <div style={cardStyle}>
          
          <h2 style={{marginBottom:"10px"}}>🔐 Password Generator</h2>

          {/* Length */}
          <p>Length: {length}</p>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            style={sliderStyle}
            onChange={(e) => setLength(e.target.value)}
          />

          {/* Generate Button */}
          <button onClick={generate} style={btnStyle}>
            Generate Password
          </button>

          {/* Output */}
          {password && (
            <>
              <div style={outputBox}>
                {password}
              </div>

              <button onClick={copyPassword} style={copyBtn}>
                Copy
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

//
// 🔥 STYLES
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

const btnStyle = {
  marginTop: "15px",
  padding: "12px",
  width: "100%",
  background: "linear-gradient(to right,#00c6ff,#0072ff)",
  border: "none",
  color: "white",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold"
};

const copyBtn = {
  marginTop: "10px",
  padding: "10px",
  width: "100%",
  background: "#00c6ff",
  border: "none",
  color: "white",
  borderRadius: "8px",
  cursor: "pointer"
};

const sliderStyle = {
  width: "100%",
  marginTop: "10px",
  accentColor: "#00c6ff"
};

const outputBox = {
  marginTop: "15px",
  padding: "10px",
  background: "rgba(255,255,255,0.15)",
  borderRadius: "8px",
  wordBreak: "break-all"
};