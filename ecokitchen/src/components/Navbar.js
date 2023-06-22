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
      <div className="navbar-container fixed-bottom">
        <div className="container-fluid">
          <div className="row">
            {/* Home icon */}
            <div className="col">
              <Link className="link" to="/HomePage">
                <div className={`navbar-icon ${getIconColor('/HomePage')}`}>
                  <BiHomeAlt className="navbar-icon-image" />
                  <span className="navbar-icon-name">Home</span>
                </div>
              </Link>
            </div>
    
            {/* Fridge icon */}
            <div className="col">
              <Link className="link" to="/Food">
                <div className={`navbar-icon ${getIconColor('/Food')}`}>
                  <BiFridge className="navbar-icon-image" />
                  <span className="navbar-icon-name">Food</span>
                </div>
              </Link>
            </div>
    
            {/* Recipes icon */}
            <div className="col">
              <Link className="link" to="/Recipes">
                <div className={`navbar-icon ${getIconColor('/Recipes')}`}>
                  <BiBookOpen className="navbar-icon-image" />
                  <span className="navbar-icon-name">Recipes</span>
                </div>
              </Link>
            </div>
    
            {/* Shopping icon */}
            <div className="col">
              <Link className="link" to="/Shopping">
                <div className={`navbar-icon ${getIconColor('/Shopping')}`}>
                  <BiListCheck className="navbar-icon-image" />
                  <span className="navbar-icon-name">Shopping</span>
                </div>
              </Link>
            </div>
    
            {/* Breakdown icon */}
            <div className="col">
              <Link className="link" to="/Breakdown">
                <div className={`navbar-icon ${getIconColor('/Breakdown')}`}>
                  <BiBarChartAlt className="navbar-icon-image" />
                  <span className="navbar-icon-name">Breakdown</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
    }    