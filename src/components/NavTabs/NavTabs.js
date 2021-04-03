import React from "react";
// import { Link as HashLink, useLocation } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function NavTabs() {
    const location = useLocation();
  
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <HashLink to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </HashLink>
        </li>
        <li className="nav-item">
        </li>
        <li className="nav-item">
          <HashLink className={location.pathname === "/#search" ? "nav-link active" : "nav-link"} smooth to="/search">Search</HashLink>
        </li>
        <li className="nav-item">
          <HashLink
            to="/contact"
            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </HashLink>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;
  