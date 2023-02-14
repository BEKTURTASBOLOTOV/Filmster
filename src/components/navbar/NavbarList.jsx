import React from "react";
import NavbarItem from "./NavbarItem";
import NavElems from "./NavElems";
import "../../App.css";

const NavbarList = () => {
  const navbarElem = NavElems.map((item) => {
    return <NavbarItem key={item.title} {...item} />;
  });
  return (
    <div className="navbar">
      <ul className="NavbarList">{navbarElem}</ul>
    </div>
  );
};

export default NavbarList;
