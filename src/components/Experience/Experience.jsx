import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const roles = [
  { role: "Co-founder · Software Engineer", org: "Enumsol, Islamabad", date: "Feb 2023 – Present",
    points: ["Core frontend development of the corporate website with responsive UX.", "Built a high-performance Food Delivery mobile app with React Native and Tailwind CSS.", "Architected workflow automations with n8n, Zapier, Make and Flowise."] },
  { role: "Team Lead (Summer Intern)", org: "Pak-Thai Digital Innovation Lab, SEECS, NUST", date: "Jul 2026 – Sep 2026",
    points: ["Overseeing task allocation, guiding team members and coordinating completion of assigned work.", "Built the TailorConnect app with Flutter, Node.js and MongoDB, managing the project from documentation to deployment, testing and gap fixing."] },
  { role: "Software Engineer", org: "Alta Tech Mark", date: "May 2023 – Aug 2023",
    points: ["Developed an IoT-connected mobile app for plant management with automated watering.", "Engineered a thermal image social media application for specialized image sharing."] },
  { role: "Full-stack Developer (Intern)", org: "MayaLogic", date: "Oct 2022 – Jan 2023",
    points: ["Developed a tailored ERP system for Sun Tech streamlining inventory, finance and HR.", "Built a job hunting platform using the MERN stack and Tailwind CSS."] },
];

const Experience = () => (
  <Container fluid className="home-about-section" id="experience">
    <Container>
      <h1 className="project-heading">Work <strong className="yellow">Experience</strong></h1>
      <Row>
        {roles.map((r) => (
          <Col md={6} key={r.role + r.org} style={{ marginBottom: "24px" }}>
            <div className="timeline-card">
              <h4>{r.role}</h4>
              <div className="yellow">{r.org}</div>
              <small>{r.date}</small>
              <ul>{r.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </Col>
        ))}
      </Row>
      <h1 className="project-heading" style={{ marginTop: "30px" }}><strong className="yellow">Education</strong></h1>
      <Row>
        <Col md={6}><div className="timeline-card"><h4>M.S. Computer Science</h4><div className="yellow">NUST</div></div></Col>
        <Col md={6}><div className="timeline-card"><h4>B.S. Software Engineering</h4><div className="yellow">Sukkur IBA University · Talent Hunt Scholarship (2018–2022)</div></div></Col>
      </Row>
    </Container>
  </Container>
);
export default Experience;
