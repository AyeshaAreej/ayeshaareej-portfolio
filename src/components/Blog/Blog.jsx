import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import blogPosts from "../../data/blogPosts";

const Blog = () => (
  <Container fluid className="home-about-section" id="blog">
    <Container>
      <h1 className="project-heading">Latest <strong className="yellow">Writing</strong></h1>
      <Row>
        {blogPosts.map((p) => (
          <Col xs={12} sm={6} lg={4} key={p.title} className="cert-col">
            <div className="blog-card">
              {p.date && <small>{p.date}</small>}
              <h5>{p.title}</h5>
              <p>{p.excerpt}</p>
              <div className="chip-row">{p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
              {p.link && <Button variant="primary" href={p.link} target="_blank" rel="noopener noreferrer" style={{ marginTop: "14px" }}>Read</Button>}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </Container>
);

export default Blog;
