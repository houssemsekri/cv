import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Data } from "../context/DataContext";
function Navigation() {
  const loggin = useContext(Data).loggin;
  return (
    <div className="menu">
      <ul className="list">
        <li className="list__item ">
          <NavLink className="list__link" exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink className="list__link" to="/skills" activeClassName="active">
            Experience & Skills
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            className="list__link"
            exact
            to="/portfolios"
            activeClassName="active"
          >
            Projects
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            className="list__link"
            exact
            to="/about"
            activeClassName="active"
          >
            About
          </NavLink>
        </li>

        <li className="list__item">
          <NavLink
            className="list__link"
            exact
            to="/contact"
            activeClassName="active"
          >
            Contact
          </NavLink>
        </li>
        {loggin.isLoggin ? (
          <li className="list__item">
            <NavLink
              className="list__link"
              exact
              to="/admin"
              activeClassName="active"
            >
              Admin
            </NavLink>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default Navigation;
