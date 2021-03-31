import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

function NavTabs() {
    const location = useLocation();
  
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
        </li>
        <li className="nav-item">
          <NavHashLink className={location.pathname === "/#search" ? "nav-link active" : "nav-link"} smooth to="/search">Search</NavHashLink>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;
  