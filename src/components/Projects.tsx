import { useReveal } from "../hooks/useReveal";

const projects = [
  
  {
    id: 1,
    title: "Tajweed Quiz Game",
    category: "Product Design • Frontend Dev",
    desc: "An interactive Tajweed quiz game available in English & Arabic, making Qur’an learning more engaging and enjoyable.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#FF3300",
    link: "https://olaftechxtrmsworld-max.github.io/Tajweed-Quiz-General-Version-/",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect width="60" height="60" rx="16" fill="rgba(255,255,255,0.2)"/>

        {/* Quiz card */}
        <rect x="14" y="10" width="32" height="40" rx="5" fill="white"/>

        {/* Question mark */}
        <path
          d="M24 22.5C24 19.7 26.2 18 29 18C31.8 18 34 19.7 34 22.3C34 24.8 32.5 26 30.5 27.3C28.8 28.4 28 29.3 28 31"
          stroke="#1C1C8A"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle cx="28" cy="36" r="1.8" fill="#FF3300"/>

        {/* Answer lines */}
        <rect x="20" y="40" width="16" height="2.5" rx="1.25" fill="#1C1C8A"/>
        <rect x="23" y="44.5" width="10" height="2.5" rx="1.25" fill="rgba(28,28,138,0.45)"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Fintech Mobile App",
    category: "UX/UI Design",
    desc: "A modern FinTech app designed to make managing money simpler, smarter, and more accessible, helping users take control of their finances with ease.",
    tags: ["Figma", "Prototyping", "User Research"],
    color: "#1C1C8A",
    link: "https://www.figma.com/proto/5X19ScEHFw18TPE2RNxnvd/finTech?node-id=292-219&p=f&viewport=196%2C148%2C0.12&t=TN2a7TDe9qS8q2RL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect width="60" height="60" rx="16" fill="rgba(255,255,255,0.2)"/>

        {/* Wallet */}
        <path
          d="M13 19C13 16.8 14.8 15 17 15H42C44.2 15 46 16.8 46 19V42C46 44.2 44.2 46 42 46H17C14.8 46 13 44.2 13 42V19Z"
          fill="white"
        />

        {/* Wallet top line */}
        <path
          d="M13 21H46"
          stroke="#1C1C8A"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Wallet pocket */}
        <path
          d="M35 27H46V37H35C32.2 37 30 34.8 30 32C30 29.2 32.2 27 35 27Z"
          fill="#1C1C8A"
        />

        {/* Wallet button */}
        <circle cx="37" cy="32" r="2" fill="white"/>

        {/* Growth arrow */}
        <path
          d="M19 38L24 33L28 36L35 28"
          stroke="#FF3300"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M31 28H35V32"
          stroke="#FF3300"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "E-commerce landing page",
    category: "Product Design • UX/UI Design",
    desc: "A fully responsive clothing store designed to make discovering, exploring, and shopping for your favorite looks simple and effortless.",
    tags: ["Figma", "Prototyping", "User Research"],
    color: "#0f0f0f",
    link: "https://www.figma.com/proto/aqHJzz7uoGngaZOuw1zkDb/Landing-page?node-id=15-177&viewport=-80%2C267%2C0.2&t=g3YnnBYNaOIrkfcQ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect width="60" height="60" rx="16" fill="rgba(255,255,255,0.2)"/>

        {/* Shopping Bag */}
        <path
          d="M16 23H44L42 46H18L16 23Z"
          fill="white"
        />

        {/* Bag Handle */}
        <path
          d="M23 23V19C23 15.7 25.7 13 29 13H31C34.3 13 37 15.7 37 19V23"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Bag Top Line */}
        <path
          d="M17 25H43"
          stroke="#1C1C8A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Shopping Tag */}
        <path
          d="M26 30H35L38 34L35 38H26L23 34L26 30Z"
          fill="#1C1C8A"
        />

        {/* Tag Hole */}
        <circle
          cx="34"
          cy="34"
          r="1.5"
          fill="white"
        />

        {/* Orange Accent */}
        <path
          d="M20 42H40"
          stroke="#FF3300"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "E-commerce Website",
    category: "Frontend Development • React",
    desc: "A responsive e-commerce website for OLAFTECH DEALS, featuring gadgets, product browsing, cart functionality, and WhatsApp ordering.",
    tags: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
    color: "#1C1C8A",
    link: "https://olaftech-deals.vercel.app/",
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect
          width="60"
          height="60"
          rx="16"
          fill="rgba(255,255,255,0.2)"
        />

        {/* Shopping Cart */}
        <path
          d="M15 17H19L23 39H43L48 24H21"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Cart Basket */}
        <path
          d="M23 39H43"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Wheels */}
        <circle cx="27" cy="46" r="3" fill="#FF3300" />
        <circle cx="41" cy="46" r="3" fill="#FF3300" />

        {/* Cart Accent */}
        <path
          d="M29 29H42"
          stroke="#1C1C8A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" ref={ref} style={{ padding: "5rem 2rem", background: "var(--gray)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <p style={{ color: "var(--orange)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
            Selected Work
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 900, color: "var(--black)", textTransform: "uppercase", letterSpacing: "-0.02em", margin: 0 }}>
            Projects
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {projects.map((p, i) => (
            
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
            <div
              key={p.id}
              className={`project-card reveal delay-${(i % 4) + 1}`}
              style={{ cursor: "pointer" }}
            >
              {/* Card image area */}
              <div style={{
                background: p.color,
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{ opacity: 0.15, position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 12px)" }} />
                {p.icon}
              </div>
              {/* Card body */}
              <div style={{ padding: "1.5rem" }}>
                <p style={{ color: "var(--orange)", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 0.4rem" }}>
                  {p.category}
                </p>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--black)", margin: "0 0 0.75rem" }}>{p.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 1.25rem" }}>{p.desc}</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: "0.25rem 0.75rem",
                      background: "#e9e9e9",
                      borderRadius: "9999px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#444",
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>
        
        {/* <div className="reveal delay-5" style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="#projects" className="btn-outline">View All Projects</a>
        </div> */}
      </div>
    </section>
  );
}
