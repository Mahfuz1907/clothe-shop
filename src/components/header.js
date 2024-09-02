import React from 'react';
import { NavLink } from 'react-router-dom';


function header() {
  return (
    <div className="container fixed-top">
      <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top">
        <div className="container bg-white text-success">
            <div className="col-sm-2">
                <a href="shop-logo" className="navbar-brand"><img src="/assets/image/logo.png" className="rounded img-fluid" alt="Shop Logo" height="120px" width="120px" /></a>
            </div>
            <div className="col-sm-8">
                <button className="navbar-toggler bg-success" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav nav nav-tabs nav-justified bg-success" style={{ width: '100%' }}>
        <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active text-success' : 'nav-link text-white'}
            >
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/categories" 
              className={({ isActive }) => isActive ? 'nav-link active text-success' : 'nav-link text-white'}
            >
              CATEGORIES
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/rating" 
              className={({ isActive }) => isActive ? 'nav-link active text-success' : 'nav-link text-white'}
            >
              RATING
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/order" 
              className={({ isActive }) => isActive ? 'nav-link active text-success' : 'nav-link text-white'}
            >
              ORDER
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/login" 
              className={({ isActive }) => isActive ? 'nav-link active text-success' : 'nav-link text-white'}
            >
              LOGIN 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/register" 
              className={({ isActive }) => isActive ? 'nav-link active text-success' : 'nav-link text-white'}
            >
              REGISTER
            </NavLink>
          </li>
        </ul>
    </div>
                
            </div>
            <div className="col-sm-2">
                <a href='https://www.facebook.com/profile.php?id=61561467827129' className="navbar-brand"><img src="/assets/image/palestine.png" className="rounded img-fluid float-end" alt="Free Palestine Logo" height="120px" width="120px" /></a>
            </div>
        </div>        
    </nav>
    </div>
  );
}

export default header;