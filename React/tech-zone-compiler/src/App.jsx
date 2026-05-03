import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ItemForm from './Components/ItemForm/ItemForm';
import Posts from './Components/Posts/Posts';
import Slider from './Components/Slider/Slider';
import './App.css';

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading, error } = useFetch('/data.json');

  useEffect(() => {
    if (data?.posts) {
      setPosts(data.posts);
    }
  }, [data]);

  // The React Compiler will automatically memoize this filtered list!
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // The React Compiler will ensure this function reference stays stable!
  const toggleForm = () => {
    setIsFormOpen(prev => !prev);
  };

  const handleAddPost = (newPost) => {
    setPosts(prev => [newPost, ...prev]);
    setIsFormOpen(false);
  };

  return (
    <div className="app-container">
      <Navbar onSearch={setSearchTerm} />
      <Slider />
      <Posts posts={filteredPosts} isLoading={isLoading} error={error} />
      
      {isFormOpen && (
        <div className="modal-overlay" onClick={toggleForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={toggleForm}>&times;</button>
            <ItemForm onAddPost={handleAddPost} />
          </div>
        </div>
      )}
      
      <button 
        className={`floating-btn ${isFormOpen ? 'open' : ''}`} 
        onClick={toggleForm}
        title={isFormOpen ? "Close Form" : "Add New Entry"}
      >
        +  
      </button>

      <Footer/>
    </div>
  );
};

export default App;
