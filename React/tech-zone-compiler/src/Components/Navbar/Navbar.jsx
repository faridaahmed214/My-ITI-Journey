import logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar ({ onSearch }){
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="TechZone Logo" className="logo-img" />
      </div>
      
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="SEARCH_TRANSITIONS..." 
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#system">System</a></li>
        <li><a href="#network">Network</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
