import React from 'react';
import './Footer.css';

const FooterFunc = () => {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="brand-title">TECH_ZONE</h2>
          <p className="brand-tagline">Accessing the future, one byte at a time.</p>
        </div>
        
        <div className="footer-links-section">
          <h3 className="section-title">Terminal Access</h3>
          <div className="footer-links">
            <a href="#logs" className="footer-link"><span className="link-prefix">~</span> System Logs</a>
            <a href="#admin" className="footer-link"><span className="link-prefix">~</span> Admin Terminal</a>
            <a href="#security" className="footer-link"><span className="link-prefix">~</span> Security Protocol</a>
            <a href="#network" className="footer-link"><span className="link-prefix">~</span> Network Status</a>
          </div>
        </div>
        
        <div className="footer-links-section">
          <h3 className="section-title">Comm_Links</h3>
          <div className="social-links">
            <a href="#github" className="social-link" title="GitHub">GH</a>
            <a href="#twitter" className="social-link" title="Twitter">TW</a>
            <a href="#discord" className="social-link" title="Discord">DC</a>
            <a href="#email" className="social-link" title="Secure Comm">EN</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="bottom-content">
          <p className="copyright">&copy; {new Date().getFullYear()} TechZone Core. All rights reserved.</p>
          <p className="version-info">v2.0.4-beta</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterFunc;
