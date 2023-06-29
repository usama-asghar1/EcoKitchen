import AddItemButton from "./AddItemButton";
import { BiFridge } from "react-icons/bi";
import { BiListCheck } from "react-icons/bi";
import { BiBarChartAlt } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";
import {Link, useLocation } from "react-router-dom"

import '../App.css'


export default function Navbar({setTitle}) {
  const location = useLocation();
  
    const getIconColor = (path) => {
      return location.pathname === path ? 'navbar-icon-blue' : 'navbar-icon-grey';
    };
  
    return (
      <div className="navbar-container" data-testid="navbar">
        {/* Fridge icon */}
        <Link className="link" to="/Food">
          <div className={`navbar-icon ${getIconColor("/Food")}`}>
            <BiFridge
              className="navbar-icon-image"
              onClick={() => setTitle("Your Kitchen")}
            />
            <span className="navbar-icon-name">Kitchen</span>
          </div>
        </Link>

        {/* Recipes icon */}
        <Link className="link" to="/Recipes">
          <div className={`navbar-icon ${getIconColor("/Recipes")}`}>
            <BiBookOpen
              className="navbar-icon-image"
              onClick={() => setTitle("Recipes")}
            />
            <span className="navbar-icon-name">Recipes</span>
          </div>
        </Link>
        {/* Add item button */}
        <Link className="link" to="/additem">
          <div className={`navbar-icon ${getIconColor("/Shopping")}`}>
            <AddItemButton className="navbar-icon-image" setTitle={setTitle} />
            <span className="navbar-icon-name">Add Item</span>
          </div>
        </Link>

        {/* Shopping icon */}
        <Link className="link" to="/Shopping">
          <div className={`navbar-icon ${getIconColor("/Shopping")}`}>
            <BiListCheck
              className="navbar-icon-image-shopping"
              onClick={() => setTitle("Shopping List")}
            />
            <span className="navbar-icon-name">Shopping</span>
          </div>
        </Link>

        {/* Breakdown icon */}
        <Link className="link" to="/Breakdown">
          <div className={`navbar-icon ${getIconColor("/Breakdown")}`}>
            <BiBarChartAlt
              className="navbar-icon-image"
              onClick={() => setTitle("Cost Breakdown")}
            />
            <span className="navbar-icon-name">Breakdown</span>
          </div>
        </Link>
      </div>
    );
  }
  