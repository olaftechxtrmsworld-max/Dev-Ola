import { useReveal } from "../hooks/useReveal";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechVibe Studios",
    text: "Dev Ola is a rare talent who bridges design and engineering flawlessly. The products delivered were not only beautiful but technically solid and shipped on time.",
    initials: "SM",
    color: "#FF3300",
  },
  {
    name: "James Okafor",
    role: "Founder, MedCare App",
    text: "Working with Dev was a game-changer. He understood our users deeply and translated that into an interface that actually works. Our onboarding conversion improved by 40%.",
    initials: "JO",
    color: "#1C1C8A",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, EduLearn",
    text: "Exceptional attention to detail and a genuine passion for user experience. Dev's ability to move from wireframes to working code made our sprint cycles incredibly efficient.",
    initials: "PS",
    color: "#0f0f0f",
  },
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section id="testimonials" ref={ref} style={{ padding: "5rem 2rem", background: "var(--black)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <p style={{ color: "var(--orange)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
            Kind Words
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.02em", margin: 0 }}>
            Testimonials
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal delay-${i + 1}`}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1.5rem",
                padding: "2rem",
                transition: "background 0.3s, transform 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,51,0,0.12)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.06)";
                el.style.transform = "none";
              }}
            >
              {/* Quote mark */}
              <div style={{ fontSize: "4rem", color: "var(--orange)", lineHeight: 0.8, marginBottom: "1.5rem", fontWeight: 900 }}>"</div>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", lineHeight: 1.8, margin: "0 0 2rem", fontStyle: "italic" }}>
                {t.text}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{
                  width: "44px", height: "44px",
                  borderRadius: "50%",
                  background: t.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 800, fontSize: "0.9rem",
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>{t.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
