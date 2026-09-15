import logoImage from "@/imports/My_logo.png";

const Logo = () => (
  <img src={logoImage} alt="Dev Ola logo" style={{ height: "36px", width: "auto", display: "block", filter: "brightness(0) invert(1)" }} />
);

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--black)", color: "#fff", padding: "4rem 2rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="footer-grid">
          {/* Brand */}
          <div>
            <Logo />
            <p style={{ marginTop: "1.25rem", color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: "280px" }}>
              Product Designer &amp; Frontend Developer crafting intuitive digital experiences from Lagos, Nigeria.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-ola", target: "_blank", rel:"noopener noreferrer", svg: <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                { label: "WhatsApp", href: "https://wa.me/+2349132696440", target: "_blank", rel:"noopener noreferrer", svg: ( <svg width="18" height="18" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.59 5.96L0 24l6.29-1.65a11.88 11.88 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.44ZM12.05 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.28C2.16 6.44 6.59 2 12.04 2c2.64 0 5.12 1.03 6.98 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.43 9.9-9.86 9.9Zm5.42-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/> </svg> )},
                { label: "Facebook", href: "https://www.facebook.com/DevOla01", target: "_blank", rel:"noopener noreferrer", svg: <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                //{ label: "TikTok",  svg: (<svg width="18" height="18" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77V2h-3.45v13.67a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6.05.87.14v-3.5a6.36 6.36 0 1 0 5.48 6.3V8.63a8.28 8.28 0 0 0 4.84 1.55V6.73c-.36 0-.72-.01-1.07-.04Z" /> </svg> ), },
              ].map(({ label, href, target, rel, svg }) => (
                <a key={label} href={href} aria-label={label} target={target} rel={rel} className="social-icon" style={{ background: "rgba(255,255,255,0.1)" }}>
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>
              Navigation
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "About", href: "#about" },
                { label: "Process", href: "#process" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNav(href); }}
                  style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500, transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>
              Services
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["UI/UX Design", "Frontend Dev", "Prototyping", "Design Systems", "Consulting"].map((s) => (
                <span key={s} style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", fontWeight: 500 }}>{s}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>
              Let's Work
            </h4>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Available for freelance projects and full-time roles.
            </p>
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
              style={{ fontSize: "0.85rem", padding: "0.65rem 1.4rem" }}
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", margin: 0 }}>
            © 2026 Dev. Ola. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", margin: 0 }}>
            Designed &amp; Built by <span style={{ color: "var(--orange)", fontWeight: 700 }}>Dev. Ola (Ibnul-Arobiyy)</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
