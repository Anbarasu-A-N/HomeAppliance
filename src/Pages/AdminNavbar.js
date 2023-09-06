import React from "react";
import Logo from "./Images/Allsmart.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const AdminNavbar = () => {


  return (
    <div className="border">
      <nav>
        <div className="logo">
          <Link to="/adminhome">
            <img
              src={Logo}
              alt="Profile"
              style={{ width: "30px", height: "32px" }}
            />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/adminhome">Home</Link>
          </li>
          <li>
            <Link to="/updates">Updates from Customers</Link>
          </li>
          <li>
            <Link to="/admincontactus">Contact To Customer</Link>
          </li>
          
          <li>
            <Link to="/customerreviews" >
              Customers Review
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
