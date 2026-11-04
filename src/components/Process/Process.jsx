import React from "react";
import { Container } from "react-bootstrap";
import "./Process.css";

// Edit the steps here.
const steps = [
  { n: "01", title: "Analyse", text: "Dig into the requirements, the business workflow and the constraints before building anything." },
  { n: "02", title: "Architect", text: "Plan the data model, the integrations and where AI actually helps, so the system fits how the business runs." },
  { n: "03", title: "Build", text: "Develop the product or automation in small pieces and check each one against real data." },
  { n: "04", title: "Test and harden", text: "Test end to end, find the gaps, and add error handling and monitoring so failures show up instead of hiding." },
  { n: "05", title: "Ship and support", text: "Deploy to production, document how it works, and keep improving it after launch." },
];

const Process = () => (
  <Container fluid className="home-about-section" id="process">
    <Container>
      <span className="process-tag">METHODOLOGY</span>
      <h1 className="process-heading">How I deliver</h1>
      <div className="process-grid">
        {steps.map((s) => (
          <div className="process-card" key={s.n}>
            <div className="process-num">{s.n}</div>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </Container>
  </Container>
);

export default Process;
