import { useReveal } from "../hooks/useReveal";

const experience = [
  {
    period: "2025 – 2026",
    title: "Frontend Development",
    tutor: "Dr. Angela Yu's Bootcamp",
    type: "learning",
    desc: "Learned and applied front-end development skills by building responsive and interactive web experiences using HTML, CSS, and JavaScript. Developed practical projects while improving my understanding of responsive design, user interfaces, and web development.",
  },
  {
    period: "2026",
    title: "UI/UX Design",
    tutor: "Daniel Walter Scott's Bootcamp",
    type: "learning",
    desc: "Completed an intensive 3-month web design learning program, developing practical skills in designing responsive, user-friendly websites and creating engaging digital experiences.",
  },
  {
    period: "2026 – present",
    title: "Junior Product Designer & Frontend Developer",
    tutor: "Freelance",
    type: "work",
    desc: "Designing and building responsive digital products from concept to implementation, creating user flows, wireframes, prototypes, and polished interfaces while bringing designs to life with frontend technologies.",
  },
];

const education = [
  {
    period: "2016 – 2022",
    title: "Secondary School Certificate & Qur’an Memorization",
    tutor: "Daarul-Hikam Academy",
    type: "edu",
    desc: "Completed my secondary school education and obtained my secondary school certificate. Alongside my formal education, I also memorized the Qur’an, developing strong discipline, consistency, and dedication to learning. Currently aspiring to pursue a university degree and further develop my knowledge and skills in technology and design.",
  },
  {
    period: "2015 – 2024",
    title: "Arabic & Islamic Studies",
    tutor: "Daarul-Hikam Academy",
    type: "edu",
    desc: "Studied Arabic language and Islamic studies, developing strong skills in Arabic reading, writing, speaking, and comprehension alongside a solid foundation in Islamic knowledge.",
  },
];

const TimelineItem = ({ item, i }: { item: typeof experience[0]; i: number }) => (
  <div className={`timeline-item reveal delay-${i + 1}`} style={{ paddingLeft: "2rem", borderLeft: "3px solid var(--orange)", paddingBottom: "2rem", position: "relative" }}>
    <div style={{
      position: "absolute", left: "-0.55rem", top: "4px",
      width: "1rem", height: "1rem",
      borderRadius: "50%", background: "var(--orange)",
    }} />
    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--orange)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
      {item.period}
    </span>
    <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--black)", margin: "0.3rem 0 0.2rem" }}>{item.title}</h4>
    <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-muted)", margin: "0 0 0.6rem" }}>{item.tutor}</p>
    <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#555", margin: 0 }}>{item.desc}</p>
  </div>
);

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" ref={ref} style={{ padding: "5rem 2rem", maxWidth: "1280px", margin: "0 auto" }}>
      <div className="reveal" style={{ marginBottom: "3.5rem" }}>
        <p style={{ color: "var(--orange)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
          Background
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 900, color: "var(--black)", textTransform: "uppercase", letterSpacing: "-0.02em", margin: 0 }}>
          Experience &amp; Education
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="exp-grid">
        {/* Work */}
        <div>
          <h3 className="reveal" style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: "2rem", height: "2px", background: "var(--orange)", display: "inline-block" }} />
            Work Experience
          </h3>
          {experience.map((item, i) => <TimelineItem key={i} item={item} i={i} />)}
        </div>

        {/* Education */}
        <div>
          <h3 className="reveal" style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: "2rem", height: "2px", background: "var(--orange)", display: "inline-block" }} />
            Education
          </h3>
          {education.map((item, i) => <TimelineItem key={i} item={item} i={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
