import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCertificate, FaAward, FaTrophy } from "react-icons/fa";
import certifications from "../../data/certifications";

const achievements = [
  { title: "Talent Hunt Scholarship", issuer: "Sukkur IBA University", year: "2018 – 2022", Icon: FaAward },
  { title: "IEEE PSYWSC'19 Organizer", issuer: "IEEE", year: "2019", Icon: FaTrophy },
  // { title: "Student of the Year Award", issuer: "APS Shikarpur", year: "2017", Icon: FaTrophy },
];

const Slide = ({ item }) => {
  const [broken, setBroken] = React.useState(false);
  return (
    <div className="cert-slide">
      {!broken ? (
        <img
          src={process.env.PUBLIC_URL + "/certifications/" + item.image}
          alt={item.title}
          loading="lazy"
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="cert-fallback"><FaCertificate /></div>
      )}
      <div className="cert-overlay">
        <strong>{item.title}</strong>
        <span>{item.issuer}</span>
        <small>{item.year}</small>
      </div>
    </div>
  );
};

const Certifications = () => {
  // repeat the list so the track is always wider than the screen, then double it for a seamless loop
  const repeat = Math.max(1, Math.ceil(8 / certifications.length));
  const half = Array.from({ length: repeat }, () => certifications).flat();
  return (
    <Container fluid className="home-about-section" id="certifications">
      <Container>
        <h1 className="project-heading">Certifications & <strong className="yellow">Achievements</strong></h1>
        <h3 className="cert-group-title">Certifications</h3>
      </Container>
      <div className="cert-marquee">
        <div className="cert-track" style={{ "--cert-duration": half.length * 6 + "s" }}>
          {[...half, ...half].map((item, i) => (
            <Slide item={item} key={item.title + i} />
          ))}
        </div>
      </div>
      <Container style={{ marginTop: "30px" }}>
        <h3 className="cert-group-title">Achievements</h3>
        <Row>
          {achievements.map(({ title, issuer, year, Icon }) => (
            <Col xs={12} sm={6} lg={6} key={title} className="cert-col">
              <div className="cert-card">
                <div className="cert-body">
                  <div className="cert-badge"><Icon /></div>
                  <div>
                    <h5>{title}</h5>
                    <div className="yellow">{issuer}</div>
                    <small>{year}</small>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Certifications;
