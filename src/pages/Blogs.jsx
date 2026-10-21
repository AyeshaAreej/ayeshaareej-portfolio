import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import blogPosts from "../data/blogPosts";
import BlogCard from "../components/Blog/BlogCard";

const Blogs = () => (
  <Container fluid className="project-section">
    <Particle />
    <Container>
      <h1 className="project-heading">My <strong className="yellow">Blog</strong></h1>
      <p style={{ color: "white" }}>Notes on AI automation, SaaS and voice AI from things I have built.</p>
      <Row>
        {blogPosts.map((p) => (
          <Col xs={12} sm={6} lg={4} key={p.title} className="blog-col"><BlogCard post={p} /></Col>
        ))}
      </Row>
    </Container>
  </Container>
);

export default Blogs;
