import PostItem from '../PostItem/PostItem';
import './Posts.css';

const Posts = ({ posts = [], isLoading = false, error = null }) => {
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
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Posts;
