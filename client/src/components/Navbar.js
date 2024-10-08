import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./Navbar.css";
import { assets } from "../assets/assets";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("logout successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <nav>
        <NavLink className="navbar-brand" to="/">
          <span className="head1">SearchAI</span>
        </NavLink>

        <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
          <li>
            <NavLink
              to="/home"
              smooth={true}
              offset={-250}
              duration={500}
              className="head1"
            >
              Home
            </NavLink>
          </li>
          {loggedIn ? (
            <>
              <li>
                <NavLink to="/" p={1} className="head1">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  onClick={handleLogout}
                  p={1}
                  className="head"
                >
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/register" p={1} className="head1">
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" p={1} className="head1">
                  Sign In
                </NavLink>
              </li>
            </>
          )}

          <li>
            <div className="quote_btn-container">
              <NavLink to="tel:+919424575042" className="head1">
                <i className="fa fa-phone" aria-hidden="true" />
                <span>Call : +91 9424575042</span>
              </NavLink>
            </div>
          </li>
        </ul>
        <img
          src={assets.menu_icon}
          alt=""
          className="menu-icon"
          onClick={toggleMenu}
        />
      </nav>
      {/* nav e */}
    </div>
  );
};

export default Navbar;
