import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const Navbar = () => {
  const history = useHistory();

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: authTypes.logout });
    history.replace("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h3 className="navbar-brand" href="#">
            DB App
          </h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="active text-bold"
                  className="nav-link"
                  aria-current="page"
                  to="/mans"
                >
                  Mans
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active text-bold"
                  className="nav-link"
                  to="/women"
                >
                  Womens
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active text-bold"
                  className="nav-link"
                  to="/search"
                >
                  Search
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
