import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="margin-navbar">
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container-fluid">
            <a className="navbar-brand" href="./">
              Talita Alves
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav header">
                <Link to="/" className="nav-link">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/#"
                    id="home"
                    title="Homepage"
                  >
                    Home
                  </a>
                </Link>
                <Link to="/about" className="nav-link">
                  <a className="nav-link" href="/#" title="About Talita Alves">
                    About
                  </a>
                </Link>
                <Link className="nav-link" to="./projects">
                  <a
                    className="nav-link"
                    href="./projects.html"
                    title="Projects of Talita Alves"
                  >
                    Projects
                  </a>
                </Link>
                <Link className="nav-link" to="./contacts">
                  <a
                    className="nav-link"
                    href="./contactme.html"
                    title="Contact Talita Alves"
                  >
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
