

import React, { useState } from "react";
import Logo from "./Images/Allsmart.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isApplianceOpen, setApplianceOpen] = useState(false);
  const [isCookingOpen, setCookingOpen] = useState(false);
  const [isLaundryOpen, setLaundryOpen] = useState(false);
  const [isDishwashersOpen, setDishwashersOpen] = useState(false);
  const [isCoolingOpen, setCoolingOpen] = useState(false);
  const [isCoffeeMachinesOpen, setCoffeeMachinesOpen] = useState(false);

  const handleServicesMouseEnter = () => {
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setServicesOpen(false);
  };

  const handleApplianceMouseEnter = () => {
    setApplianceOpen(true);
  };

  const handleApplianceMouseLeave = () => {
    setApplianceOpen(false);
  };

  const handleCookingMouseEnter = () => {
    setCookingOpen(true);
  };

  const handleCookingMouseLeave = () => {
    setCookingOpen(false);
  };

  const handleLaundryMouseEnter = () => {
    setLaundryOpen(true);
  };

  const handleLaundryMouseLeave = () => {
    setLaundryOpen(false);
  };

  const handleDishwashersMouseEnter = () => {
    setDishwashersOpen(true);
  };

  const handleDishwashersMouseLeave = () => {
    setDishwashersOpen(false);
  };

  const handleCoolingMouseEnter = () => {
    setCoolingOpen(true);
  };

  const handleCoolingMouseLeave = () => {
    setCoolingOpen(false);
  };

  const handleCoffeeMachinesMouseEnter = () => {
    setCoffeeMachinesOpen(true);
  };

  const handleCoffeeMachinesMouseLeave = () => {
    setCoffeeMachinesOpen(false);
  };

  return (
    <div className="border">
      <nav>
        <div className="logo">
          <Link to="/">
            <img
              src={Logo}
              alt="Profile"
              style={{ width: "30px", height: "32px" }}
            />
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" id="search"placeholder="Search" />
          <button type="button">Search</button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleApplianceMouseEnter}
            onMouseLeave={handleApplianceMouseLeave}
          >
            <Link >Appliance</Link>
            {isApplianceOpen && (
              <ul className="dropdown-menu">
                <li
                  className="dropdown"
                  onMouseEnter={handleCookingMouseEnter}
                  onMouseLeave={handleCookingMouseLeave}
                >
                  <Link to="/appliance/cooking-baking">Cooking & Baking</Link>
                  {isCookingOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/appliance/cooking-baking/ovens-steam-cooking">
                          Ovens Steam cooking
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/cooking-baking/hobs-cooktops">
                          Hobs and cooktops
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/cooking-baking/kitchen-hoods">
                          Kitchen Hoods
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/cooking-baking/microwaves">
                          Microwaves
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/cooking-baking/accessories">
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/cooking-baking/hob-product-finder">
                          Hob product finder
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="dropdown"
                  onMouseEnter={handleLaundryMouseEnter}
                  onMouseLeave={handleLaundryMouseLeave}
                >
                  <Link to="/appliance/laundry-care">Laundry Care&nbsp;&nbsp;</Link>
                  {isLaundryOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/appliance/laundry-care/washing-machines">
                          Washing Machines
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/laundry-care/clothes-dryers">
                          Clothes Dryers
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/laundry-care/washer-dryer-machines">
                          Washer dryer machines
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/laundry-care/accessories">
                          Accessories&nbsp;&nbsp;
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/laundry-care/washing-machine-product-finder">
                          Washing machine product finder
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="dropdown"
                  onMouseEnter={handleDishwashersMouseEnter}
                  onMouseLeave={handleDishwashersMouseLeave}
                >
                  <Link to="/appliance/dishwashers">Dishwashers &nbsp;&nbsp;&nbsp;</Link>
                  {isDishwashersOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/appliance/dishwashers/built-in-dishwashers">
                          Built-in Dishwashers
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/dishwashers/freestanding-dishwashers">
                          Freestanding Dishwashers
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="dropdown"
                  onMouseEnter={handleCoolingMouseEnter}
                  onMouseLeave={handleCoolingMouseLeave}
                >
                  <Link to="/appliance/cooling">Cooling&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                  {isCoolingOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/appliance/cooling/built-in-fridges-freezers">
                          Built-in Fridges and Freezers
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/cooling/freestanding-fridges-freezers">
                          Freestanding Fridges and Freezers
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/cooling/wine-fridges">
                          Wine Fridges
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/cooling/accessories">
                          Accessories&nbsp;&nbsp;&nbsp;
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="dropdown"
                  onMouseEnter={handleCoffeeMachinesMouseEnter}
                  onMouseLeave={handleCoffeeMachinesMouseLeave}
                >
                  <Link to="/appliance/coffee-machines">Coffee Machines</Link>
                  {isCoffeeMachinesOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/appliance/coffee-machines/built-in-coffee-machines">
                          Built-in Coffee Machines
                        </Link>
                      </li>
                      <li>
                        <Link to="/appliance/coffee-machines/other">
                          Other&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <Link>Customer Services</Link>
            {isServicesOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/review">Review&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Link>
                </li>
                <li>
                  <Link to="/warranty">Warranty&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Link>
                </li>
                <li>
                  <Link to="/services/supportcenter">Support Center</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/Profile" className="Profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

