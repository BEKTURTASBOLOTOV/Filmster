import React from "react";
import NavbarItem from "./NavbarItem";
// import NavbarButton from "./NavbarButton";
import { Link } from "react-router-dom";
import NavElems from "./NavElems";

const NavbarList = () => {
  const navbarElem = NavElems.map((item) => {
    return <NavbarItem key={item.title} {...item} />;
  });
  return (
    <div className="navbar">
      <Link to="/" className="navbarTitle logo">
        <h1 className="navbarName">Filmster</h1>
      </Link>
      <ul className="NavbarList">{navbarElem}</ul>
      {/* <NavbarButton handleClick={handleClick} /> */}
    </div>
  );
};

export default NavbarList;
