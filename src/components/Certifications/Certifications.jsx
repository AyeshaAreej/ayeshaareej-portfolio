import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCertificate, FaAward, FaTrophy, FaGraduationCap } from "react-icons/fa";

/*
  variant="plain": icon cards, no pictures
  variant="image": cards with a picture on top
  Put images in public/certifications/ using the file names below. A missing
  image falls back to the icon, so nothing breaks while you add them.
*/
const certifications = [
  { title: "n8n Certified Workflow Professional", issuer: "n8n", year: "2025", file: "n8n.png", Icon: FaCertificate },
  { title: "Internship Completion Certificate (Team Lead)", issuer: "Pak-Thai Digital Innovation Lab, NUST", year: "2026", file: "internship.png", Icon: FaGraduationCap },
  { title: "Full Stack React", issuer: "Coursera", year: "2022", file: "react-coursera.png", Icon: FaCertificate },
  { title: "Advanced SQL & DB", issuer: "Coursera", year: "2020", file: "sql-coursera.png", Icon: FaCertificate },
];
const achievements = [
  { title: "Talent Hunt Scholarship", issuer: "Sukkur IBA University", year: "2018 – 2022", file: "scholarship.png", Icon: FaAward },
  { title: "IEEE PSYWSC'19 Organizer", issuer: "IEEE", year: "2019", file: "ieee.png", Icon: FaTrophy },
  { title: "Student of the Year Award", issuer: "APS Shikarpur", year: "2017", file: "student-of-the-year.png", Icon: FaTrophy },
];

const Card = ({ item, variant }) => {
  const [broken, setBroken] = React.useState(false);
  const { Icon } = item;
  const showImage = variant === "image" && !broken;
  return (
    <div className="cert-card">
      {variant === "image" && (
        <div className="cert-media">
          {showImage ? (
            <img src={process.env.PUBLIC_URL + "/certifications/" + item.file} alt={item.title} onError={() => setBroken(true)} />
          ) : (
            <Icon className="cert-media-icon" />
          )}
        </div>
      )}
      <div className="cert-body">
        {variant === "plain" && <div className="cert-badge"><Icon /></div>}
        <div>
          <h5>{item.title}</h5>
          <div className="yellow">{item.issuer}</div>
          <small>{item.year}</small>
        </div>
      </div>
    </div>
  );
};

const Group = ({ title, items, variant }) => (
  <>
    <h3 className="cert-group-title">{title}</h3>
    <Row>
      {items.map((i) => (
        <Col xs={12} sm={6} lg={variant === "image" ? 4 : 6} key={i.title} className="cert-col">
          <Card item={i} variant={variant} />
        </Col>
      ))}
    </Row>
  </>
);

const Certifications = ({ variant = "plain" }) => (
  <Container fluid className="home-about-section" id="certifications">
    <Container>
      <h1 className="project-heading">Certifications & <strong className="yellow">Achievements</strong></h1>
      <Group title="Certifications" items={certifications} variant={variant} />
      <Group title="Achievements" items={achievements} variant={variant} />
    </Container>
  </Container>
);

export default Certifications;
