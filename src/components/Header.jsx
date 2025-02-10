import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <div id="left">
          <span id="logo-hdr" className="font-bold text-xl">
            Logo
          </span>
        </div>
        <div id="right" className="flex items-center justify-evenly gap-10">
          <Link to="/" className="p-10">
            Home
          </Link>
          <Link to="/products" className="p-10">
            Products
          </Link>
          <Link to="/cart" >
            <FaCartShopping className="text-xl" />
          </Link>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
