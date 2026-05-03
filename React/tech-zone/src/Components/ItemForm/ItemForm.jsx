import { PureComponent } from "react";
import axios from "axios";
import "./ItemForm.css";

class ItemForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      slug: "",
      category: "",
      imageUrl: "",
      tags: "",
      description: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const formattedData = {
      ...this.state,
      tags: typeof this.state.tags === 'string' 
        ? this.state.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        : this.state.tags,
      author: "New_User",
      published_at: new Date().toISOString()
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", formattedData)
      .then((response) => {
        this.props.onAdd(response.data);
        console.log("Success! Server replied:", response.data);
        if (this.props.closeForm) {
          this.props.closeForm();
        }
      })
      .catch((error) => {
        console.error("Error has occurred", error);
      });
  };

  render() {
    return (
      <div className="item-form-container">
        <h2 className="form-title">&gt; ADD_NEW_ENTRY.exe</h2>
        <form className="tech-form" onSubmit={this.handleSubmit}>
          <div className="form-group full-width">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter post title..."
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Slug</label>
            <input
              type="text"
              placeholder="e.g. new-tech-post"
              value={this.state.slug}
              onChange={(e) => this.setState({ slug: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              placeholder="e.g. AI Software"
              value={this.state.category}
              onChange={(e) => this.setState({ category: e.target.value })}
            />
          </div>

          <div className="form-group full-width">
            <label>Image URL</label>
            <input
              type="text"
              placeholder="https://images.unsplash.com/photo-..."
              value={this.state.imageUrl}
              onChange={(e) => this.setState({ imageUrl: e.target.value })}
            />
          </div>

          <div className="form-group full-width">
            <label>Tags (comma separated)</label>
            <input
              type="text"
              placeholder="Tech, AI, Future"
              value={this.state.tags}
              onChange={(e) => this.setState({ tags: e.target.value })}
            />
          </div>

          <div className="form-group full-width">
            <label>Description</label>
            <textarea
              rows="4"
              placeholder="Enter detailed description..."
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            [ INIT_SUBMIT ]
          </button>
        </form>
      </div>
    );
  }
}

export default ItemForm;
