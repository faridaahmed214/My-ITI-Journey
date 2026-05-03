import { PureComponent } from 'react';
import axios from 'axios';
import './Posts.css';

class Posts extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true,
      error: null
    };
  }


  render() {
    const { posts, isLoading, error } = this.props;
    
    return (
      <section className="posts-section">
        <div className="posts-header">
          <h2>{'<'}Latest Transmissions{'>'}</h2>
          <div className="terminal-cursor">_</div>
        </div>
        
        {isLoading && <div className="terminal-cursor" style={{textAlign: 'center', margin: '2rem 0'}}>Loading Data..._</div>}
        {error && <div style={{color: '#ff3333', textAlign: 'center', margin: '2rem 0'}}>[ ERROR ]: {error}</div>}
        
        {!isLoading && !error && (
          <div className="posts-grid">
            {posts.map(post => (
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
        )}
      </section>
    );
  }
}

export default Posts;
