import { useReveal } from "../hooks/useReveal";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "I start with research, understanding users, business goals, and the competitive landscape through interviews, surveys, and heuristic analysis.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Define",
    desc: "Synthesizing research into clear problem statements, user personas, and opportunity maps that guide every design decision.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Design",
    desc: "From low-fidelity wireframes to high-fidelity prototypes in Figma, iterating fast with design systems and consistent UI components.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Build",
    desc: "Translating designs into clean, maintainable React components, pixel-perfect, responsive, and optimized for performance.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Test & Iterate",
    desc: "Usability testing, A/B experiments, and feedback loops to continuously refine and improve the product post-launch.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
  },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section id="process" ref={ref} style={{ padding: "5rem 2rem", background: "var(--gray)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <p style={{ color: "var(--orange)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
            How I Work
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 900, color: "var(--black)", textTransform: "uppercase", letterSpacing: "-0.02em", margin: 0 }}>
            My Design Process
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal delay-${(i % 5) + 1}`}
              style={{
                background: "#fff",
                borderRadius: "1.25rem",
                padding: "2rem",
                borderTop: "4px solid var(--orange)",
                transition: "transform 0.25s, box-shadow 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "none";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <span style={{ fontSize: "3rem", fontWeight: 900, color: "var(--orange)", lineHeight: 1 }}>{step.num}</span>
                <div style={{ padding: "0.5rem", background: "rgba(255,51,0,0.08)", borderRadius: "0.75rem" }}>
                  {step.icon}
                </div>
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--black)", marginBottom: "0.75rem" }}>{step.title}</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-muted)", margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
