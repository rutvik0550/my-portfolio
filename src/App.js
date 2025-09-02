import React from "react";
import "./App.css";
import profilePic from "./profile.jpeg"; // ✅ your photo file in src folder

function App() {
  const linkStyle = {
    color: "#ff6b6b",
    fontWeight: "bold",
    textDecoration: "none",
    margin: "0 1rem",
    transition: "color 0.3s",
  };

  const cardStyle = {
    background: "linear-gradient(135deg, #ffffff 0%, #fef3f3 100%)",
    padding: "1.5rem",
    borderRadius: "16px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
    marginBottom: "1.5rem",
  };

  return (
    <div
      className="App"
      style={{
        fontFamily: "Segoe UI, Arial, sans-serif",
        lineHeight: 1.6,
        background: "linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)",
        padding: "1.5rem",
      }}
    >
      {/* 🔹 Header */}
      <header
        style={{
          ...cardStyle,
          border: "3px solid #f8e0e7ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1.5rem",
          maxWidth: "900px",
          margin: "1rem auto",
          background: "linear-gradient(135deg, #ffe7e7 0%, #fff 100%)",
          textAlign: "left",
        }}
      >
        <img
          src={profilePic}
          alt="Rutvik Deshmukh"
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #92d5b2ff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            flexShrink: 0,
          }}
        />
        <div>
          <h1 style={{ fontSize: "1.7rem", margin: 0, color: "#222" }}>Hi, I'm Rutvik Shashank Deshmukh</h1>
          <p style={{ fontSize: "1rem", marginTop: "0.5rem", color: "#444" }}>
            Software Developer | Freelancer
          </p>
        </div>
      </header>

      {/* ✨ About Section */}
      <section
        style={{
          ...cardStyle,
          maxWidth: "900px",
          margin: "1.2rem auto",
          background: "linear-gradient(135deg, #e0ffe0 0%, #ffffff 100%)",
        }}
      >
        <h2 style={{ marginBottom: "0.8rem", color: "#00897b" }}>About Me</h2>
        <p style={{ color: "#333" }}>
          I’m a passionate developer skilled in <strong>Angular</strong>,{" "}
          <strong>React</strong>, <strong>.NET Core</strong>, and <strong>SQL</strong>. I’ve
          worked on projects like <em>CureWell</em> and <em>SkillBridge</em>, and I’m looking to collaborate on freelance
          opportunities in Mumbai or international projects.
        </p>
      </section>

      {/* ✨ Projects Section */}
      <section
        style={{
          ...cardStyle,
          maxWidth: "900px",
          margin: "1.2rem auto",
          background: "linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)",
        }}
      >

        {/* ✅ SkillBridge Project */}
        <div style={{ marginTop: "0.7rem" }}>
          <h3 style={{ margin: "0.5rem 0", color: "#0d47a1" }}>SkillBridge App (Angular + ASP.NET Core + SQLite)</h3>
          <p style={{ marginBottom: "0.3rem", color: "black" }}>
            A modern goal management and skill tracking app with user profiles, built using Angular, ASP.NET Core, and SQLite.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              background: "#fff",
              padding: "0.8rem",
              borderRadius: "10px",
              border: "1px solid #eee",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <strong>Live Frontend:</strong>
            <a
              href="https://skill-bridge-ui-rutvik-deshmukh.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              🔗View UI
            </a>
            <strong>API / Backend:</strong>
            <a
              href="https://skillbridge-rutvik-deshmukh.onrender.com/swagger/index.html"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              🔗Swagger & API Design
            </a>
            <strong>GitHub:</strong>
            <a
              href="https://github.com/rutvik0550/SkillBridge"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              🔗View Code
            </a>
          </div>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <h3 style={{ margin: "0.2rem 0", color: "#0d47a1" }}>CureWell App (Angular + Dotnet core + SQL)</h3>
          <p style={{ marginBottom: "0.3rem", color: "black" }}>
            A healthcare management platform built with Angular, Dotnet core, and SQL.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              background: "#fff",
              padding: "0.8rem",
              borderRadius: "10px",
              border: "1px solid #eee",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <strong>Live Frontend:</strong>
            <a
              href="https://curewell-angular-rutvik-s-deshmukh.vercel.app/viewDoctors"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              🔗View UI
            </a>
            <strong>API / Backend:</strong>
            <a
              href="https://curewell.onrender.com/swagger/index.html"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              🔗Swagger & API Design
            </a>
            <strong>GitHub:</strong>
            <a
              href="https://github.com/rutvik0550/CureWell"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              🔗View Code
            </a>
          </div>
        </div>

      </section>

      {/* ✨ Hire Me Section */}
      <section
        style={{
          ...cardStyle,
          maxWidth: "900px",
          margin: "1.2rem auto",
          background: "linear-gradient(135deg, #fffde7 0%, #ffffff 100%)",
        }}
      >
        <h2 style={{ marginBottom: "0.8rem", color: "#f57c00" }}>connect with me :</h2>
        <p>
          Interested in working with me? I’m open for <strong>Fulltime & freelance</strong> opportunities.
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:rutvik.deshmukh.0550@gmail.com" style={linkStyle}>
            rutvik.deshmukh.0550@gmail.com
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/rutvik-deshmukh-0bb478196"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            linkedin.com/in/rutvik-deshmukh-0bb478196
          </a>
        </p>
      </section>

      {/* ✨ Contact Section */}
      <section
        style={{
          ...cardStyle,
          maxWidth: "900px",
          margin: "1.2rem auto",
          background: "linear-gradient(135deg, #fce4ec 0%, #ffffff 100%)",
        }}
      >
        <h2 style={{ color: "#d81b60" }}>Contact Me</h2>
       <form
          action="https://formspree.io/f/meozgdjw"
          method="POST"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            style={{
              margin: "0.5rem 0",
              padding: "0.7rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            style={{
              margin: "0.5rem 0",
              padding: "0.7rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            style={{
              margin: "0.5rem 0",
              padding: "0.7rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              minHeight: "100px",
            }}
            required
          />
          <button
            type="submit"
            style={{
              background: "linear-gradient(135deg, #ff6b6b, #f94d6a)",
              color: "black",
              padding: "0.8rem",
              border: "none",
              borderRadius: "8px",
              marginTop: "1rem",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Send ⌯⌲
          </button>
        </form>
      </section>

      {/* 🔹 Footer */}
      <footer
        style={{
          background: "linear-gradient(135deg, #6bc2a1ff, #4debf9ff)",
          padding: "1rem",
          color: "black",
          textAlign: "center",
          marginTop: "1.5rem",
          borderRadius: "8px",
        }}
      >
        <p>© {new Date().getFullYear()} Rutvik Deshmukh | All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
