import React from 'react';
import { Link, useLocation } from 'react-router-dom';



function NavBar() {
  const location = useLocation();

  return (
    <div>
      <header>
        <div className="wrap-header zerogrid">
          <div className="row d-flex justify-content-between">
            <div className="col-md-4">
              <Link to="/" className="logo"> {/* Use Link instead of <a> for internal routing */}
                <img src="/images/logo.png" alt="Logo" />
              </Link>
            </div>
            
            <div className="col-md-8">
              <div id="cssmenu">
                <ul>
                  <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                  <li><Link to="/Gallary" className={location.pathname === '/Gallary' ? 'active' : ''}>Gallery</Link></li>
                  {/* <li><a href="archive.html">Blog</a></li>
                  <li><a href="single.html">About</a></li> */}
                  <li><Link to="/Contact" className={location.pathname === '/Contact' ? 'active' : ''}>Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
