import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { useSelector } from 'react-redux';
import useFetch from './hooks/useFetch';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import ArticleDetails from './Pages/ArticleDetails/ArticleDetails';
import Store from './Pages/Store/Store';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import PublicRoute from './Components/ProtectedRoute/PublicRoute';
import './App.css';

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const theme = useSelector((state) => state.theme.theme);

  const { data, isLoading, error } = useFetch('/data.json');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  useEffect(() => {
    if (data?.posts) {
      setPosts(data.posts);
    }
  }, [data]);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleForm = () => {
    setIsFormOpen(prev => !prev);
  };

  const handleAddPost = (newPost) => {
    setPosts(prev => [newPost, ...prev]);
    setIsFormOpen(false);
    toast.success('Transmission uploaded to network!');
  };

  const showNavbar = location.pathname !== '/login' && location.pathname !== '/signup';

  return (
    <div className="app-container">
      <Toaster position="top-right" richColors />
      {showNavbar && <Navbar onSearch={setSearchTerm} />}
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Home 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filteredPosts={filteredPosts}
                isLoading={isLoading}
                error={error}
                isFormOpen={isFormOpen}
                toggleForm={toggleForm}
                handleAddPost={handleAddPost}
              />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="/article/:id" element={<ProtectedRoute><ArticleDetails /></ProtectedRoute>} />
        <Route path="/store" element={<ProtectedRoute><Store /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      </Routes>
      {showNavbar && <Footer/>}
    </div>
  );
};

export default App;



