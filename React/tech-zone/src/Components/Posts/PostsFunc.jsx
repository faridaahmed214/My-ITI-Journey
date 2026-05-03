import React from 'react';
import './Posts.css';

const staticPosts = [
  {
    id: 1,
    title: "Understanding React 18 Concurrent Mode",
    description: "Dive deep into the new concurrency features of React 18, including useTransition and Suspense. Optimize your apps for better user experience.",
    author: "Tech Ninja",
    published_at: "2026-04-28T10:00:00Z",
    tags: ["React", "Performance"]
  },
  {
    id: 2,
    title: "Mastering CSS Grid and Flexbox",
    description: "A comprehensive guide to building complex, responsive layouts using modern CSS techniques. Stop floating and start gridding.",
    author: "UI Wizard",
    published_at: "2026-04-29T12:00:00Z",
    tags: ["CSS", "Design"]
  },
  {
    id: 3,
    title: "Building Scalable Node.js Microservices",
    description: "Learn architecture patterns and best practices for developing microservices with Node.js and Docker to handle high traffic loads.",
    author: "Backend Guru",
    published_at: "2026-04-30T10:00:00Z",
    tags: ["Node.js", "Architecture"]
  }
];

const PostsFunc = () => {
  return (
    <section className="posts-section">
      <div className="posts-header">
        <h2>{'<'}Latest Transmissions{'>'}</h2>
        <div className="terminal-cursor">_</div>
      </div>
      <div className="posts-grid">
        {staticPosts.map(post => (
          <div key={post.id} className="post-card">
            {post.image && (
              <div className="post-card-image">
                <img src={post.image} alt={post.title} />
              </div>
            )}
            <div className="post-card-header">
              <h3>{post.title}</h3>
            </div>
            <div className="post-card-body">
              <p>{post.description}</p>
            </div>
            <div className="post-card-footer">
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="post-tag">#{tag}</span>
                ))}
              </div>
              <div className="post-meta">
                <span className="post-author">@{post.author.replace(' ', '_').toLowerCase()}</span>
                <span className="post-date">
                  {new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostsFunc;
