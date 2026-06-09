import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './ArticleDetails.css';

const ArticleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch('/data.json');
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (data?.posts) {
      const foundPost = data.posts.find(p => p.id.toString() === id);
      setPost(foundPost);
    }
  }, [data, id]);

  if (isLoading) return <div className="loading-screen">Decrypting Transmission...</div>;
  if (error) return <div className="error-screen">Error: {error}</div>;
  if (!post && !isLoading) return <div className="error-screen">Transmission Not Found [404]</div>;

  return (
    <div className="article-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back to Network
      </button>
      
      {post && (
        <article className="article-content">
          <header className="article-header">
            <span className="article-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="article-meta">
              <span className="author">By @{post.author ? post.author.replace(' ', '_').toLowerCase() : 'admin'}</span>
              <span className="date">{new Date(post.published_at).toLocaleDateString()}</span>
            </div>
          </header>

          {post.image && (
            <div className="article-image">
              <img src={post.image} alt={post.title} />
            </div>
          )}

          <div className="article-body">
            <p>{post.content || post.description}</p>
            {!post.content && (
              <p>
                This transmission contains classified data regarding {post.title}. 
                The system has verified the source as {post.author}. 
                Further updates will be broadcasted as they become available.
              </p>
            )}
          </div>

          <footer className="article-footer">
            <div className="tags">
              {post.tags?.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          </footer>
        </article>
      )}
    </div>
  );
};

export default ArticleDetails;

