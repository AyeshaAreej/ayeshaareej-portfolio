import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import blogPosts from "../../data/blogPosts";
import BlogCard from "./BlogCard";

const Blog = () => (
  <Container fluid className="home-about-section" id="blog">
    <Container>
      <h1 className="project-heading">Latest <strong className="yellow">Writing</strong></h1>
      <Row>
        {blogPosts.slice(0, 3).map((p) => (
          <Col xs={12} sm={6} lg={4} key={p.title} className="blog-col"><BlogCard post={p} /></Col>
        ))}
      </Row>
      <Button as={Link} to="/blog" variant="primary">View all posts</Button>
    </Container>
  </Container>
);

export default Blog;
