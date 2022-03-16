import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        <span className="footer__icon">
          {" "}
          <Link to="/loggin" style={{ Color: "white", textDecoration: "none" }}>
            <i
              className="fa fa-copyright"
              aria-hidden="true"
              style={{ color: "#a4acc4", marginRight: "3px" }}
            ></i>
          </Link>
        </span>
        2020 Houssem Sekri
      </p>
    </footer>
  );
}

export default Footer;
