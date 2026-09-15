import { useReveal } from "../hooks/useReveal";
import image from "@/imports/Profile.png";

// const stats = [
//   { number: "3+", label: "Years Experience" },
//   { number: "20+", label: "Projects Completed" },
//   { number: "15+", label: "Happy Clients" },
//   { number: "100%", label: "Client Satisfaction" },
// ];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} style={{ padding: "5rem 2rem", maxWidth: "1280px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
        className="about-grid"
      >
        {/* Left: Avatar + stats */}
        <div className="reveal-left" style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "flex-start" }}>
          {/* Avatar */}
          <div style={{ position: "relative" }}>
            <div style={{
              width: "clamp(200px, 30vw, 320px)",
              height: "clamp(200px, 30vw, 320px)",
              borderRadius: "50%",
              background: "#e0e0e0",
              overflow: "hidden",
              position: "relative",
            }}>
              <img
                src={image}
                alt="Dev Ola"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            {/* Orange accent ring */}
            <div style={{
              position: "absolute",
              top: "-8px", left: "-8px",
              width: "calc(clamp(200px, 30vw, 320px) + 16px)",
              height: "calc(clamp(200px, 30vw, 320px) + 16px)",
              borderRadius: "50%",
              border: "3px solid var(--orange)",
              opacity: 0.4,
              pointerEvents: "none",
            }} />
          </div>

          {/* Stats */}
          {/* <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", width: "100%" }}>
            {stats.map((s) => (
              <div key={s.label} style={{
                background: "var(--gray)",
                borderRadius: "1rem",
                padding: "1.25rem",
                textAlign: "center",
              }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--orange)" }}>{s.number}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Right: Text content */}
        <div className="reveal-right" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <p style={{ color: "var(--orange)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
              About Me
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "var(--black)", textTransform: "uppercase", letterSpacing: "-0.02em", margin: "0 0 1.5rem", lineHeight: 1.1 }}>
              Hi, I'm Dev Ola
            </h2>
          </div>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444" }}>
            I am a <strong style={{ color: "var(--black)" }}>Product Designer &amp; Frontend Developer</strong> with a passion for crafting beautiful, functional digital experiences. I bridge the gap between design and development, turning ideas into pixel-perfect, code-backed products.
          </p>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444" }}>
            My approach starts with deep user research, moves through wireframes and high-fidelity prototypes in Figma, and ends with clean, performant code in React. Every decision I make is grounded in usability, accessibility, and visual clarity.
          </p>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444" }}>
            I have strong communication skills in <strong>Arabic, English, and Yoruba</strong>, allowing me to communicate effectively with diverse users, teams, and clients. I am also a <strong>memorizer of the Qur’an</strong>, an achievement that has strengthened my discipline, consistency, and commitment to continuous learning. I enjoy bringing creativity, problem-solving, and a user-centered approach into every project I work on.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
            <a href="#" className="btn-primary">Download CV</a>
            <a
              href="#contact"
              className="btn-outline"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-grid > div:first-child {
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
