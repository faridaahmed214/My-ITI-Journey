import { useState } from 'react';
import './PostItem.css';

const ThumbsUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="vote-icon">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
  </svg>
);

const ThumbsDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="vote-icon">
    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2"></path>
  </svg>
);

const PostItem = ({ post }) => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  const handleUpvote = () => {
    setUpvotes(prev => prev + 1);
  };

  const handleDownvote = () => {
    setDownvotes(prev => prev + 1);
  };

  return (
    <div className="post-card">
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
          {post.tags && post.tags.map(tag => (
            <span key={tag} className="post-tag">#{tag}</span>
          ))}
        </div>
        
        <div className="post-actions">
          <div className="vote-group">
            <button className="vote-btn" onClick={handleUpvote} title="Thumbs Up"><ThumbsUpIcon /></button>
            <span className="vote-count positive">{upvotes}</span>
          </div>
          <div className="vote-group">
            <button className="vote-btn" onClick={handleDownvote} title="Thumbs Down"><ThumbsDownIcon /></button>
            <span className="vote-count negative">{downvotes}</span>
          </div>
        </div>

        <div className="post-meta">
          <span className="post-author">@{post.author ? post.author.replace(' ', '_').toLowerCase() : 'unknown'}</span>
          <span className="post-date">
            {post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Unknown Date'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
