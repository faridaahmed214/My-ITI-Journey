import React from 'react';
import Slider from '../../Components/Slider/Slider';
import Posts from '../../Components/Posts/Posts';
import ItemForm from '../../Components/ItemForm/ItemForm';

const Home = ({ 
  searchTerm, 
  setSearchTerm, 
  filteredPosts, 
  isLoading, 
  error, 
  isFormOpen, 
  toggleForm, 
  handleAddPost 
}) => {
  return (
    <>
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
    </>
  );
};

export default Home;

