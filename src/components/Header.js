import React, { useState } from "react";
import Picture from "./Picture";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { AiOutlineClose } from "react-icons/ai";
function Header() {
  const [navToggle, setnavToggle] = useState(false);
  const handleClick = () => {
    setnavToggle(!navToggle);
    console.log(navToggle);
  };
  let navClass;
  if (navToggle) {
    navClass = `side-nav side-nav--open`;
  } else {
    navClass = `side-nav`;
  }

  return (
    <div className={navClass}>
      <Picture handleClick={handleClick} navToggle={navToggle} />
      <Navigation />
      <Footer />
    </div>
  );
}

export default Header;
