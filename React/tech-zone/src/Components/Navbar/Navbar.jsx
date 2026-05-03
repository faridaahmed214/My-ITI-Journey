import { PureComponent } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="TechZone Logo" className="logo-img" />
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
}

export default Navbar;
