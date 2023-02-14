import React from "react";
import { Link } from "react-router-dom";
const NavbarItem = ({ title, to }) => {
  return (
    <li className="NavbarItem">
      <Link className="navbarElem" to={to}>
        {title}
      </Link>
    </li>
  );
};

export default NavbarItem;
