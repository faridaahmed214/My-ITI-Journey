import { PureComponent } from 'react';
import axios from 'axios';

// Class Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ItemForm from './Components/ItemForm/ItemForm';
import Posts from './Components/Posts/Posts';

// Functional Components
import NavbarFunc from './Components/Navbar/NavbarFunc';
import FooterFunc from './Components/Footer/FooterFunc';
import ItemFormFunc from './Components/ItemForm/ItemFormFunc';
import PostsFunc from './Components/Posts/PostsFunc';

import Slider from './Components/Slider/Slider';
import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false,
      posts: [],
      isLoading: true,
      error: null
    };
  }
    componentDidMount() {
    axios.get('/data.json')
      .then(response => {
        this.setState({
          posts: response.data.posts || [],
          isLoading: false
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        this.setState({
          error: "Failed to load transmissions.",
          isLoading: false
        });
      });
  }
 addNewPost = (post) => {
  this.setState(prevState => ({ posts: [post, ...prevState.posts] }));
};

  toggleForm = () => {
    this.setState(
      prevState => ({ isFormOpen: !prevState.isFormOpen })
    );
  };

  render() {
    const { isFormOpen } = this.state;

    return (
      <div className="app-container">
      
        {/* FUNCTIONAL COMPONENTS D01*/}
        
        {/* <NavbarFunc />
        
        <div className="main-content-layout">
          <div className="form-sidebar">
            <ItemFormFunc />
          </div>
          <div className="posts-content">
            <PostsFunc />
          </div>
        </div>

        <FooterFunc /> */}
        

        {/* CLASS COMPONENTS + MODAL LAYOUT D02 */}
        
        <Navbar />
        <Slider />
        <Posts posts={this.state.posts} isLoading={this.state.isLoading} error={this.state.error} />
        
        {isFormOpen && (
          <div className="modal-overlay" onClick={this.toggleForm}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal-btn" onClick={this.toggleForm}>&times;</button>
              <ItemForm closeForm={this.toggleForm} onAdd={this.addNewPost} />
            </div>
          </div>
        )}
        
        <button 
          className={`floating-btn ${isFormOpen ? 'open' : ''}`} 
          onClick={this.toggleForm}
          title={isFormOpen ? "Close Form" : "Add New Entry"}
        >
          +  
        </button>

        <Footer/>
       
      </div>
    );
  }
}

export default App;
