import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../Store/themeSlice';
import logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar ({ onSearch }){
  const { user, logout } = useAuth();
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="TechZone Logo" className="logo-img" />
        </Link>
      </div>
      
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="SEARCH_TRANSITIONS..." 
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
        <div className="search-icon-wrapper">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {user ? (
          <>
            <li className="user-name">{user.username}</li>
            <li><button onClick={logout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login" className="login-link">Sign In</Link></li>
            <li><Link to="/signup" className="signup-link">Sign Up</Link></li>
          </>
        )}
        <li>
          <button onClick={() => dispatch(toggleTheme())} className="theme-toggle-btn">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

