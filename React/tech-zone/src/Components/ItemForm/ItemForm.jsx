import React, { PureComponent } from 'react';
import './ItemForm.css';

class ItemForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      slug: '',
      category: '',
      image: '',
      tags: '',
      description: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, slug, category, image, tags, description } = this.state;
    
    // Process tags from comma separated string
    const processedTags = tags.split(',').map(tag => tag.trim()).filter(tag => tag);

    const newPost = {
      id: Date.now().toString(),
      title: title || 'Untitled Post',
      slug: slug || 'untitled-post',
      category: category || 'Uncategorized',
      image: image || 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: processedTags.length > 0 ? processedTags : ['New'],
      description: description || 'No description provided.',
      author: 'Admin User',
      published_at: new Date().toISOString()
    };

    if (this.props.onAddPost) {
      this.props.onAddPost(newPost);
    }
    
    // Reset form
    this.setState({
      title: '',
      slug: '',
      category: '',
      image: '',
      tags: '',
      description: ''
    });
  };

  render() {
    const { title, slug, category, image, tags, description } = this.state;

    return (
      <div className="item-form-container">
        <h2 className="form-title">&gt; ADD_NEW_ENTRY.exe</h2>
        <form className="tech-form" onSubmit={this.handleSubmit}>
          <div className="form-group full-width">
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Enter post title..." required />
          </div>
          
          <div className="form-group">
            <label>Slug</label>
            <input type="text" name="slug" value={slug} onChange={this.handleChange} placeholder="e.g. new-tech-post" />
          </div>
          
          <div className="form-group">
            <label>Category</label>
            <input type="text" name="category" value={category} onChange={this.handleChange} placeholder="e.g. AI Software" />
          </div>
          
          <div className="form-group full-width">
            <label>Image URL</label>
            <input type="text" name="image" value={image} onChange={this.handleChange} placeholder="https://images.unsplash.com/photo-..." />
          </div>
          
          <div className="form-group full-width">
            <label>Tags (comma separated)</label>
            <input type="text" name="tags" value={tags} onChange={this.handleChange} placeholder="Tech, AI, Future" />
          </div>
          
          <div className="form-group full-width">
            <label>Description</label>
            <textarea name="description" value={description} onChange={this.handleChange} rows="4" placeholder="Enter detailed description..."></textarea>
          </div>
          
          <button type="submit" className="submit-btn">[ INIT_SUBMIT ]</button>
        </form>
      </div>
    );
  }
}

export default ItemForm;
