import { useState } from "react";
import cvImage from "@/imports/cv.jpg";

const ToolCircle = () => (
  <div style={{
    position: "relative",
    width: "clamp(320px, 42vw, 520px)",
    height: "clamp(320px, 42vw, 520px)",
    flexShrink: 0,
  }}>
    {/* Main orange circle */}
    <div style={{
      position: "absolute", inset: 0,
      borderRadius: "50%",
      background: "var(--orange)",
    }} />
    {/* Concentric rings */}
    {[78, 60, 42].map((pct, i) => (
      <div key={i} style={{
        position: "absolute",
        top: `${(100 - pct) / 2}%`,
        left: `${(100 - pct) / 2}%`,
        width: `${pct}%`,
        height: `${pct}%`,
        borderRadius: "50%",
        border: "1.5px solid rgba(255,255,255,0.4)",
        pointerEvents: "none",
      }} />
    ))}

    {/* Pen tool icon center */}
    <div style={{
      position: "absolute",
      top: "50%", left: "50%",
      transform: "translate(-20%, -20%)",
      width: "30%",
      opacity: 0.9,
    }}>
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55 10 L70 25 L35 60 L20 65 L25 50 Z" fill="white" fillOpacity="0.9"/>
        <path d="M55 10 L70 25 L65 30 L50 15 Z" fill="#C4A882"/>
        <path d="M20 65 L18 73 L26 71 Z" fill="white" fillOpacity="0.6"/>
      </svg>
    </div>

    {/* Floating tech badges */}
    {/* JS - bottom left */}
    <div style={{
      position: "absolute",
      bottom: "18%", left: "2%",
      width: "56px", height: "56px",
      background: "#F7DF1E",
      borderRadius: "10px",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 900, fontSize: "1rem", color: "#000",
      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      animation: "float 3s ease-in-out infinite",
    }}>JS</div>

    {/* HTML5 - top left */}
    <div style={{
  position: "absolute",
  top: "33%",
  left: "8%",
  padding: "0.5rem",
  transform: "translateX(-50%)",
  width: "52px",
  height: "52px",
  background: "#E34F26",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  fontSize: "0.85rem",
  color: "#fff",
  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
  animation: "float 3.5s ease-in-out infinite",
  animationDelay: "0.5s",
}}>
  HTML5
</div>

    {/* CSS3 - top center */}
    <div style={{
      position: "absolute",
      top: "8%", left: "50%", transform: "translateX(-50%)",
      width: "52px", height: "52px",
      background: "#264de4",
      borderRadius: "10px",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 900, fontSize: "0.85rem", color: "#fff",
      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      animation: "float 3.5s ease-in-out infinite",
      animationDelay: "0.5s",
    }}>CSS3</div>

    {/* Bootstrap - bottom middle */}
    <div style={{ 
  position: "absolute", 
  bottom: "5%", 
  left: "45%", 
  width: "52px", 
  height: "52px", 
  background: "#7952B3", 
  borderRadius: "50%", 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center", 
  boxShadow: "0 4px 16px rgba(0,0,0,0.3)", 
  animation: "float 4s ease-in-out infinite", 
  animationDelay: "1s", 
}}> 
  <svg width="30" height="30" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg" > 
    <path d="M5.062 3.935c-.343 0-.624.28-.624.624v.13h1.197c1.55 0 2.59.718 2.59 1.842 0 .658-.31 1.193-.82 1.532.56.333.91.873.91 1.56 0 1.2-1.07 1.965-2.68 1.965H4.44v.13c0 .344.28.624.624.624h2.78c1.91 0 3.22-.98 3.22-2.493 0-.847-.42-1.55-1.12-1.94.58-.4.92-1.02.92-1.76 0-1.42-1.2-2.214-3.06-2.214H5.062ZM5.635 7.14V5.53h1.12c.96 0 1.45.35 1.45 1.03 0 .68-.49 1.03-1.45 1.03h-1.12v-.45Zm0 3.48V8.26h1.2c1.02 0 1.54.38 1.54 1.14 0 .76-.52 1.22-1.54 1.22h-1.2Z"/> </svg> 
</div>

    {/* React - bottom center */}
    <div style={{
      position: "absolute",
      bottom: "18%", left: "75%",
      width: "52px", height: "52px",
      background: "#20232a",
      borderRadius: "50%",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
      animation: "float 4s ease-in-out infinite",
      animationDelay: "1s",
    }}>
      <svg width="30" height="30" viewBox="0 0 80 80" fill="none">
        <ellipse cx="40" cy="40" rx="38" ry="14" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(0 40 40)"/>
        <ellipse cx="40" cy="40" rx="38" ry="14" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(60 40 40)"/>
        <ellipse cx="40" cy="40" rx="38" ry="14" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(120 40 40)"/>
        <circle cx="40" cy="40" r="5" fill="#61DAFB"/>
      </svg>
    </div>

    {/* Figma - right */}
    <div style={{
      position: "absolute",
      top: "30%", right: "-2%",
      width: "52px", height: "52px",
      background: "#fff",
      borderRadius: "10px",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      animation: "float 3.8s ease-in-out infinite",
      animationDelay: "1.5s",
    }}>
      <svg width="28" height="28" viewBox="0 0 38 56" fill="none">
        <rect x="1" y="1" width="17" height="17" rx="8.5" fill="#FF7262"/>
        <rect x="20" y="1" width="17" height="17" rx="8.5" fill="#1ABCFE"/>
        <rect x="1" y="20" width="17" height="17" rx="8.5" fill="#0ACF83"/>
        <rect x="1" y="39" width="17" height="17" rx="8.5" fill="#FF7262"/>
        <circle cx="28.5" cy="28.5" r="8.5" fill="#A259FF"/>
      </svg>
    </div>
  </div>
);

export default function Hero() {

  const [showCV, setShowCV] = useState(false);
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        padding: "70px 2rem 0",
        display: "flex",
        alignItems: "center",
        maxWidth: "1280px",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "3rem",
        marginBottom: "0",
        gap: "3rem",
        justifyContent: "space-between",
      }}
    >
      {/* Left content */}
      <div style={{ flex: 1, maxWidth: "680px" }} className="animate-fade-in-left">
        <p style={{
          fontSize: "1rem",
          fontWeight: 600,
          color: "#444",
          marginBottom: "0.75rem",
          lineHeight: 1.5,
        }}>
          I am Dev Ola,{" "}
          <span style={{ color: "var(--orange)", fontWeight: 700 }}>a Product Designer &amp; Frontend Developer</span>
        </p>

        <h1 style={{
          fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
          fontWeight: 900,
          lineHeight: 1.0,
          color: "var(--black)",
          margin: "0 0 1.5rem",
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
        }}>
          I Design &amp;<br />Build Digital<br />Experiences
        </h1>

        <p style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "var(--orange)",
          marginBottom: "2.5rem",
          letterSpacing: "0.01em",
        }}>
          From idea → UX → UI → Code → Product
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            className="btn-primary"
            onClick={() => setShowCV(true)}
          >
            Check my CV
          </button>

          <a
            href="#projects"
            className="btn-outline"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            View my projects
          </a>
        </div>

        {/* Social icons */}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "3rem" }}>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-ola", target: "_blank", rel:"noopener noreferrer", svg: <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
            {  label: "WhatsApp",  href: "https://wa.me/+2349132696440", target: "_blank", rel:"noopener noreferrer", svg: ( <svg width="18" height="18" fill="white"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"> <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.59 5.96L0 24l6.29-1.65a11.88 11.88 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.44ZM12.05 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.28C2.16 6.44 6.59 2 12.04 2c2.64 0 5.12 1.03 6.98 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.43 9.9-9.86 9.9Zm5.42-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/> </svg> ) },
            { label: "Facebook", href: "https://www.facebook.com/DevOla01", target: "_blank", rel:"noopener noreferrer", svg: <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
            //{ label: "Tiktok", href: "#", target: "_blank", rel:"noopener noreferrer", svg: <svg width="18" height="18" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77V2h-3.45v13.67a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6.05.87.14v-3.5a6.36 6.36 0 1 0 5.48 6.3V8.63a8.28 8.28 0 0 0 4.84 1.55V6.73c-.36 0-.72-.01-1.07-.04Z"/> </svg> },
          ].map(({ label, href, target, rel, svg }) => (
            <a key={label} href={href} aria-label={label} target={target} rel={rel} className="social-icon">
              {svg}
            </a>
          ))}
        </div>
      </div>

      {/* Right: Tool circle */}
      <div className="animate-fade-in-right" style={{ display: "flex", justifyContent: "flex-end" }}>
        <ToolCircle />
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero { flex-direction: column; padding-top: 100px; padding-bottom: 3rem; align-items: flex-start; gap: 2rem; }
          #hero > div:last-child { align-self: center; }
        }
        @media (max-width: 480px) {
          #hero > div:last-child > div { width: min(88vw, 320px) !important; height: min(88vw, 320px) !important; }
        }
      `}</style>

      {showCV && (
        <div
          className="cv-overlay"
          onClick={() => setShowCV(false)}
        >
          <div
            className="cv-popup"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="cv-popup-header">
              <div>
                <h3>My CV</h3>
                <p>Curriculum Vitae</p>
              </div>

              <button
                type="button"
                className="cv-close"
                onClick={() => setShowCV(false)}
                aria-label="Close CV"
              >
                ×
              </button>
            </div>

            {/* CV */}
            <div className="cv-popup-body">
              <img
                src={cvImage}
                alt="My CV"
                className="cv-image"
              />
            </div>

            {/* Download */}
            <div className="cv-popup-footer">
              <a
                href={cvImage}
                download="Ola-CV.jpg"
                className="cv-download"
              >
                Download CV ↓
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
