import React from "react";
import { Link } from "react-router-dom";
// import {Briefcase} from "react-feather";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./style.css";

function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="light">
        <Navbar.Brand>
          <Link to="/">
            {/* <Briefcase width={40} height={40} className="mr-1" alt="Home" loading="lazy"/> */}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle id="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-end">
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link h5 mb-0 link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link h5 mb-0 link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link h5 mb-0 link">
                Contact
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
