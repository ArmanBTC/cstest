import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          FIRANY
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={"#"}>
                Gluwna
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"#"}>
                Contac
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"#"}>
                Galeria
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"#"}>
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
