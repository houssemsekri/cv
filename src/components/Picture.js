import React, { useContext } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Data } from "../context/DataContext";

function Picture(props) {
  const data = useContext(Data).data;
  return (
    <div className=" side-nav__picture-box">
      <div className="icon icon--nav" onClick={props.handleClick}>
        {" "}
        <div className="xd">
          {props.navToggle ? <AiOutlineClose /> : <GiHamburgerMenu />}{" "}
        </div>
      </div>
      <div className="photo">
        <img src={data[0].homeImage} alt="" className="photo__user" />
      </div>
    </div>
  );
}

export default Picture;
