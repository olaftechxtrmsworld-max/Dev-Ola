import { useState, useEffect } from "react";
import logoImage from "@/imports/My_logo.png";

const Logo = () => (
  <img src={logoImage} alt="Dev Ola logo" style={{ height: "36px", width: "auto", display: "block" }} />
);

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(255,255,255,0.96)" : "#fff",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
          transition: "background 0.3s, box-shadow 0.3s",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#hero" onClick={() => handleNav("#hero")} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Logo />
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="hide-mobile">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
              onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Hire Me button */}
        <a
          href="#contact"
          className="btn-primary hide-mobile"
          onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
          style={{ padding: "0.6rem 1.6rem", fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            flexDirection: "column",
            gap: "5px",
            zIndex: 1001,
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          <span style={{
            display: "block", width: "24px", height: "2.5px",
            background: menuOpen ? "var(--orange)" : "var(--black)",
            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            transition: "all 0.3s",
            borderRadius: "2px"
          }} />
          <span style={{
            display: "block", width: "24px", height: "2.5px",
            background: menuOpen ? "var(--orange)" : "var(--black)",
            opacity: menuOpen ? 0 : 1,
            transition: "all 0.3s",
            borderRadius: "2px"
          }} />
          <span style={{
            display: "block", width: "24px", height: "2.5px",
            background: menuOpen ? "var(--orange)" : "var(--black)",
            transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            transition: "all 0.3s",
            borderRadius: "2px"
          }} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{ fontSize: "2rem", fontWeight: 800, color: "var(--black)", textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase" }}
            onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary"
          onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
        >
          Hire Me
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
