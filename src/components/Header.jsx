import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {logoutUser} from '../redux/loginSlice'

const Header = () => {
  const {userName} = useSelector( state => state.login )
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutUser())
  }
  return (
    <header>
      <nav>
        <div id="left">
          <span id="logo-hdr" className="font-bold text-xl capitalize">
            {userName}
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
          <button onClick={handleLogOut} >Logout</button>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
