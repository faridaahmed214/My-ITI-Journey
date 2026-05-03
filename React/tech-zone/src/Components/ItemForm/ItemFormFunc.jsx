import React from 'react';
import './ItemForm.css';

const ItemFormFunc = () => {
  return (
    <div className="item-form-container">
      <h2 className="form-title">&gt; ADD_NEW_ENTRY.exe</h2>
      <form className="tech-form">
        <div className="form-group full-width">
          <label>Title</label>
          <input type="text" placeholder="Enter post title..." />
        </div>
        
        <div className="form-group">
          <label>Slug</label>
          <input type="text" placeholder="e.g. new-tech-post" />
        </div>
        
        <div className="form-group">
          <label>Category</label>
          <input type="text" placeholder="e.g. AI Software" />
        </div>
        
        <div className="form-group full-width">
          <label>Image URL</label>
          <input type="text" placeholder="https://images.unsplash.com/photo-..." />
        </div>
        
        <div className="form-group full-width">
          <label>Tags (comma separated)</label>
          <input type="text" placeholder="Tech, AI, Future" />
        </div>
        
        <div className="form-group full-width">
          <label>Description</label>
          <textarea rows="4" placeholder="Enter detailed description..."></textarea>
        </div>
        
        <button type="button" className="submit-btn">[ INIT_SUBMIT ]</button>
      </form>
    </div>
  );
};

export default ItemFormFunc;
