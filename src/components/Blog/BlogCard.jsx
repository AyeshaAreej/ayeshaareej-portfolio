import React from "react";
import { Link } from "react-router-dom";
import { readTime } from "../../data/blogPosts";

const BlogCard = ({ post }) => (
  <Link to={"/blog/" + post.slug} className="blog-card">
    <div className="blog-cover">
      <img
        src={process.env.PUBLIC_URL + post.image}
        alt={post.title}
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
    </div>
    <div className="blog-card-body">
      <small>{[post.date, readTime(post)].filter(Boolean).join(" · ")}</small>
      <h5>{post.title}</h5>
      <p>{post.excerpt}</p>
      <div className="chip-row">{post.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
      <span className="blog-more">Read more →</span>
    </div>
  </Link>
);

export default BlogCard;
