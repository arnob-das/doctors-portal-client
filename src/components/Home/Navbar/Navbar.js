import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul style={{marginTop: '20px', marginRight: '20px'}} className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link ms-5 active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5 active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5 active" aria-current="page" href="#">
                  Dental Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5 text-white active" aria-current="page" href="#">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5 text-white active" aria-current="page" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5 text-white active" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
