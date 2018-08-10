import React from 'react';

const footer = () => (
  <footer className="footer">
    <div className="footer-logo-box">
      <img
        src={require('../img/logo-green-2x.png')}
        alt="Full logo"
        className="footer-logo"
      />
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer-navigation">
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-link">
                Company
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Contact us
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Careers
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        <p className="footer-copyright">
          Built by
          <a href="#" className="footer-link">
            Jonas Schmedtmann
          </a>for his online course
          <a href="#" className="footer-link">
            advance css and sass
          </a>. Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to
          use this webpage for personal and commercial use, but not to claim it
          as your down design a credit to the original author is of course
          highly appreciated!
        </p>
      </div>
    </div>
  </footer>
);

export default footer;
