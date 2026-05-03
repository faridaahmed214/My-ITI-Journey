import { useState } from 'react';
import './ItemForm.css';

const ItemForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');

  const setters = {
    title: setTitle,
    slug: setSlug,
    category: setCategory,
    image: setImage,
    tags: setTags,
    description: setDescription
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (setters[name]) {
      setters[name](value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const processedTags = tags.split(',').map(tag => tag.trim()).filter(tag => tag);

    const newPost = {
      id: Date.now().toString(),
      title,
      slug: slug || title.toLowerCase().replace(/ /g, '-'),
      category,
      image: image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      tags: processedTags,
      description,
      author: 'Current User',
      published_at: new Date().toISOString()
    };

    if (onAddPost) {
      onAddPost(newPost);
    }
    
    setTitle('');
    setSlug('');
    setCategory('');
    setImage('');
    setTags('');
    setDescription('');
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2 className="form-title">NEW_ENTRY_PROTOCOL</h2>
      </div>
      <form onSubmit={handleSubmit} className="entry-form">
        <div className="form-group">
          <label>TITLE</label>
          <input type="text" name="title" value={title} onChange={handleChange} required placeholder="Entry Name..." />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>SLUG</label>
            <input type="text" name="slug" value={slug} onChange={handleChange} placeholder="URL path..." />
          </div>
          <div className="form-group">
            <label>CATEGORY</label>
            <input type="text" name="category" value={category} onChange={handleChange} required placeholder="Tech Sector..." />
          </div>
        </div>

        <div className="form-group">
          <label>IMAGE_URL</label>
          <input type="text" name="image" value={image} onChange={handleChange} placeholder="https://..." />
        </div>

        <div className="form-group">
          <label>TAGS (comma separated)</label>
          <input type="text" name="tags" value={tags} onChange={handleChange} placeholder="ai, web3, system..." />
        </div>

        <div className="form-group">
          <label>DESCRIPTION</label>
          <textarea name="description" value={description} onChange={handleChange} required placeholder="Transmission details..."></textarea>
        </div>

        <button type="submit" className="submit-btn">EXECUTE_SUBMISSION</button>
      </form>
    </div>
  );
};

export default ItemForm;
