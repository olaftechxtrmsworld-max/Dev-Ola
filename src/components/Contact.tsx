import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", number:"", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_cmsaq6c",
      "template_islbu0j",
      {
        name: form.name,
        number: form.number,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      {
        publicKey: "6lXqIiD7ezDRRNiBA",
      }
    );

    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({
        name: "",
        number: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 4000);

  } catch (error) {
    console.error("Email failed:", error);
    alert("Failed to send message. Please try again.");
  }
};

  return (
    <section id="contact" ref={ref} style={{ padding: "5rem 2rem", background: "var(--gray)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: "3.5rem", textAlign: "center" }}>
          <p style={{ color: "var(--orange)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
            Get In Touch
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 900, color: "var(--black)", textTransform: "uppercase", letterSpacing: "-0.02em", margin: "0 0 1rem" }}>
            Contact Me
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Have a project in mind or want to discuss collaboration? I'd love to hear from you.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", alignItems: "start" }} className="contact-grid">
          {/* Info */}
          <div className="reveal-left" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {[
              {
                label: "Email",
                value: "ibnularobiyy2022@gmail.com",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              },
              {
                label: "Location",
                value: "Lagos, Nigeria",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              },
              {
                label: "Available For",
                value: "Freelance & Full-time",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              },
            ].map(({ label, value, icon }) => (
              <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  width: "48px", height: "48px",
                  background: "var(--orange)",
                  borderRadius: "12px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "0.25rem" }}>{label}</div>
                  <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--black)" }}>{value}</div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "1rem" }}>Follow Me</div>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-ola", target: "_blank", rel:"noopener noreferrer", svg: <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                  //{ label: "Tiktok", href: "#", svg: <svg width="18" height="18" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77V2h-3.45v13.67a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6.05.87.14v-3.5a6.36 6.36 0 1 0 5.48 6.3V8.63a8.28 8.28 0 0 0 4.84 1.55V6.73c-.36 0-.72-.01-1.07-.04Z"/> </svg> },
                  {  label: "WhatsApp",  href: "https://wa.me/+2349132696440", target: "_blank", rel:"noopener noreferrer",  svg: ( <svg width="18" height="18" fill="white"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"> <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.59 5.96L0 24l6.29-1.65a11.88 11.88 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.44ZM12.05 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.28C2.16 6.44 6.59 2 12.04 2c2.64 0 5.12 1.03 6.98 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.43 9.9-9.86 9.9Zm5.42-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/> </svg> ) },
                  { label: "Facebook", href: "https://www.facebook.com/DevOla01", target: "_blank", rel:"noopener noreferrer", svg: <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                ].map(({ label, href, target, rel, svg }) => (
                  <a key={label} href={href} aria-label={label} target={target} rel={rel} className="social-icon">{svg}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            {sent ? (
              <div style={{
                background: "var(--orange)",
                borderRadius: "1.25rem",
                padding: "3rem 2rem",
                textAlign: "center",
                color: "#fff",
              }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Message Sent!</h3>
                <p style={{ opacity: 0.9 }}>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-row">
                  <div>
                    <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#444", display: "block", marginBottom: "0.5rem" }}>Your Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Ahmad Abu Hafs" required className="form-input" />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#444", display: "block", marginBottom: "0.5rem" }}>Phone Number</label>
                    <input name="number" type="tel" value={form.number} onChange={handleChange} placeholder="+2349132696470" className="form-input" />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#444", display: "block", marginBottom: "0.5rem" }}>Email Address</label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="ahmad@email.com" required className="form-input" />
                </div>
                <div>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#444", display: "block", marginBottom: "0.5rem" }}>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="Project Collaboration" required className="form-input" />
                </div>
                <div>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#444", display: "block", marginBottom: "0.5rem" }}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="form-input"
                    style={{ resize: "vertical" }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
