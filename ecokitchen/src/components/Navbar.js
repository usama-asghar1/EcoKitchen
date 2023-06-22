import { BiHomeAlt } from "react-icons/bi";
import { BiFridge } from "react-icons/bi";
import { BiListCheck } from "react-icons/bi";
import { BiBarChartAlt } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";
import {Link, useLocation } from "react-router-dom"

import '../App.css'


export default function Navbar() {
  const location = useLocation();
  
    const getIconColor = (path) => {
      return location.pathname === path ? 'navbar-icon-blue' : 'navbar-icon-grey';
    };
  
    return (
      <div className="navbar-container" data-testid="navbar">
        {/* Home icon */}
        <Link className="link" to="/HomePage">
          <div className={`navbar-icon ${getIconColor('/HomePage')}`}>
            <BiHomeAlt className="navbar-icon-image" />
            <span className="navbar-icon-name">Home</span>
          </div>
        </Link>
  
        {/* Fridge icon */}
        <Link className="link" to="/Food">
          <div className={`navbar-icon ${getIconColor('/Food')}`}>
            <BiFridge className="navbar-icon-image" />
            <span className="navbar-icon-name">Food</span>
          </div>
        </Link>
  
        {/* Recipes icon */}
        <Link className="link" to="/Recipes">
          <div className={`navbar-icon ${getIconColor('/Recipes')}`}>
            <BiBookOpen className="navbar-icon-image" />
            <span className="navbar-icon-name">Recipes</span>
          </div>
        </Link>
  
        {/* Shopping icon */}
        <Link className="link" to="/Shopping">
          <div className={`navbar-icon ${getIconColor('/Shopping')}`}>
            <BiListCheck className="navbar-icon-image" />
            <span className="navbar-icon-name">Shopping</span>
          </div>
        </Link>
  
        {/* Breakdown icon */}
        <Link className="link" to="/Breakdown">
          <div className={`navbar-icon ${getIconColor('/Breakdown')}`}>
            <BiBarChartAlt className="navbar-icon-image" />
            <span className="navbar-icon-name">Breakdown</span>
          </div>
        </Link>
      </div>
    );
  }
  