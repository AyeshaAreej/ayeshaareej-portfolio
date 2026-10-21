import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, Navigate, useParams } from "react-router-dom";
import Particle from "../components/Particle";
import blogPosts, { readTime } from "../data/blogPosts";

const renderBlock = (b, i) => {
  switch (b.type) {
    case "h2": return <h2 key={i} className="post-h2">{b.text}</h2>;
    case "ul": return <ul key={i}>{b.items.map((x) => <li key={x}>{x}</li>)}</ul>;
    case "ol": return <ol key={i}>{b.items.map((x) => <li key={x}>{x}</li>)}</ol>;
    case "quote": return <blockquote key={i}>{b.text}</blockquote>;
    default: return <p key={i}>{b.text}</p>;
  }
};

const BlogPost = () => {
  console.log("BlogPost component rendered");
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" />;
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="post-wrap">
        <Link to="/blog" className="post-back">← All posts</Link>
        <h1 className="post-title">{post.title}</h1>
        <small className="post-meta">{[post.date, readTime(post)].filter(Boolean).join(" · ")}</small>
        <div className="chip-row" style={{ margin: "14px 0 22px" }}>{post.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
        <img className="post-image" src={process.env.PUBLIC_URL + post.image} alt={post.title} onError={(e) => { e.currentTarget.style.display = "none"; }} />
        <article className="post-body">{post.content.map(renderBlock)}</article>
        {post.link && <Button variant="primary" href={post.link} target="_blank" rel="noopener noreferrer">Discuss on LinkedIn</Button>}
      </Container>
    </Container>
  );
};

export default BlogPost;
