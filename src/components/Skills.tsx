import { useReveal } from "../hooks/useReveal";

const skillCards = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="rgba(255,255,255,0.25)"/>
        <path d="M26 8 L32 14 L18 28 L12 30 L14 24 Z" fill="white" fillOpacity="0.9"/>
        <path d="M26 8 L32 14 L30 16 L24 10 Z" fill="rgba(255,255,255,0.5)"/>
      </svg>
    ),
    title: "DESIGN",
    tags: "UI/UX • Wireframes • Prototypes",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="rgba(255,255,255,0.25)"/>
        <text x="8" y="27" fontSize="16" fontWeight="900" fill="white" fontFamily="monospace">&lt;/&gt;</text>
      </svg>
    ),
    title: "BUILD",
    tags: "HTML • CSS • JavaScript • React",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="rgba(255,255,255,0.25)"/>
        <path d="M20 8 C14 8 10 12 10 17 C10 22 14 25 20 26 C26 25 30 22 30 17 C30 12 26 8 20 8Z" fill="#A855F7"/>
        <circle cx="20" cy="17" r="4" fill="white" fillOpacity="0.9"/>
      </svg>
    ),
    title: "SOLVE",
    tags: "User-focused • Responsive • Scalable",
  },
];

const techStack = [
  { name: "Figma", bg: "#fff", content: (
    <svg width="32" height="32" viewBox="0 0 38 56" fill="none">
      <rect x="1" y="1" width="17" height="17" rx="8.5" fill="#FF7262"/>
      <rect x="20" y="1" width="17" height="17" rx="8.5" fill="#1ABCFE"/>
      <rect x="1" y="20" width="17" height="17" rx="8.5" fill="#0ACF83"/>
      <rect x="1" y="39" width="17" height="17" rx="8.5" fill="#FF7262"/>
      <circle cx="28.5" cy="28.5" r="8.5" fill="#A259FF"/>
    </svg>
  )},
  { name: "React", bg: "#20232a", content: (
    <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="40" rx="38" ry="14" stroke="#61DAFB" strokeWidth="5" fill="none"/>
      <ellipse cx="40" cy="40" rx="38" ry="14" stroke="#61DAFB" strokeWidth="5" fill="none" transform="rotate(60 40 40)"/>
      <ellipse cx="40" cy="40" rx="38" ry="14" stroke="#61DAFB" strokeWidth="5" fill="none" transform="rotate(120 40 40)"/>
      <circle cx="40" cy="40" r="6" fill="#61DAFB"/>
    </svg>
  )},
  { name: "JS", bg: "#F7DF1E", content: <span style={{fontWeight:900,fontSize:"1.1rem",color:"#000"}}>JS</span> },
  { name: "CSS3", bg: "#264de4", content: <span style={{fontWeight:900,fontSize:"0.85rem",color:"#fff"}}>CSS3</span> },
  { name: "HTML5", bg: "#e34c26", content: <span style={{fontWeight:900,fontSize:"0.85rem",color:"#fff"}}>HTML5</span> },
  {  name: "Bootstrap", bg: "#7952B3", content: ( <span style={{ fontWeight: 900, fontSize: "0.85rem", color: "#fff" }}> B </span> ) },
  //{ name: "TypeScript", bg: "#3178c6", content: <span style={{fontWeight:900,fontSize:"0.85rem",color:"#fff"}}>TS</span> },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" ref={ref} style={{ padding: "5rem 2rem", maxWidth: "1280px", margin: "0 auto" }}>
      {/* Header */}
      <div className="reveal" style={{ marginBottom: "1rem" }}>
        <h2 style={{
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
          color: "var(--black)",
          display: "flex",
          flexWrap: "wrap",
          gap: "0 1rem",
          alignItems: "center",
        }}>
          Design It
          <span style={{ color: "var(--orange)", margin: "0 0.25rem" }}>→</span>
          Build It
          <span style={{ color: "var(--orange)", margin: "0 0.25rem" }}>→</span>
          Make It Work
        </h2>
      </div>
      <p className="reveal delay-1" style={{ color: "var(--orange)", fontWeight: 700, fontSize: "1.05rem", marginBottom: "2.5rem" }}>
        I design intuitive experiences and build them into fast, functional products.
      </p>

      {/* Skill cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1.5rem",
        marginBottom: "4rem",
      }}>
        {skillCards.map((card, i) => (
          <div
            key={card.title}
            className={`orange-card reveal delay-${i + 2}`}
            style={{ padding: "2rem", minHeight: "200px", display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {card.icon}
            <h3 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#fff", margin: 0 }}>{card.title}</h3>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", margin: 0, fontWeight: 500 }}>{card.tags}</p>
          </div>
        ))}
      </div>

      {/* From pixels to products */}
      <h2 className="reveal" style={{
        fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "-0.01em",
        color: "var(--black)",
        marginBottom: "1.5rem",
      }}>
        From Pixels to Products.
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        gap: "1rem",
        alignItems: "center",
      }}
        className="pixels-grid"
      >
        <div className="orange-card reveal delay-1" style={{ padding: "2.5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", minHeight: "200px", justifyContent: "center" }}>
          <svg width="56" height="56" viewBox="0 0 38 56" fill="none">
            <rect x="1" y="1" width="17" height="17" rx="8.5" fill="#FF7262"/>
            <rect x="20" y="1" width="17" height="17" rx="8.5" fill="#1ABCFE"/>
            <rect x="1" y="20" width="17" height="17" rx="8.5" fill="#0ACF83"/>
            <rect x="1" y="39" width="17" height="17" rx="8.5" fill="#FF7262"/>
            <circle cx="28.5" cy="28.5" r="8.5" fill="#A259FF"/>
          </svg>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: "1.4rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Figma Design</span>
        </div>

        <div className="reveal delay-2" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem", fontWeight: 900 }}>
          →
        </div>

        <div className="orange-card reveal delay-3" style={{ padding: "2.5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", minHeight: "200px", justifyContent: "center" }}>
          <div style={{ width: "56px", height: "56px", background: "#A855F7", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <span style={{ color: "#fff", fontWeight: 900, fontSize: "1.4rem", letterSpacing: "0.05em", textTransform: "uppercase", textAlign: "center" }}>Live Functionality</span>
        </div>
      </div>

      {/* Tech stack */}
      <div className="reveal delay-4" style={{ marginTop: "4rem" }}>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
          Tech Stack
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {techStack.map((t) => (
            <div
              key={t.name}
              style={{
                width: "56px", height: "56px",
                background: t.bg,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                transition: "transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.12) rotate(-3deg)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0)")}
              title={t.name}
            >
              {t.content}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .pixels-grid {
            grid-template-columns: 1fr !important;
          }
          .pixels-grid > div:nth-child(2) {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
