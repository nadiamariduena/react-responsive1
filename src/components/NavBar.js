// type the following if you have the react snippets: rfce
//
//   /* THE Link is going to replace the a tag */
// https://www.npmjs.com/package/@fortawesome/react-fontawesome
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            FLUXUS <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon">
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
