import { BiHomeAlt } from "react-icons/bi";
import { BiFridge } from "react-icons/bi";
import { BiListCheck } from "react-icons/bi";
import { BiBarChartAlt } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";
import {Link} from "react-router-dom"

import '../App.css'


export default function Navbar() {
        
   

return (
    <div className='navbar-container'>
    
    {/* Home icon */}
        <Link className="link" to={`/HomePage`}>
        <div className="navbar-icon-name">
        <BiHomeAlt className='navbar-icons'/>
        Home</div>
        </Link>

     {/* Fridge icon */}
        <Link className="link" to={`/Food`}>
        <div classname='navbar-icon-name'>
        <BiFridge className='navbar-icons'/>
        Food</div>
        </Link>

    {/* Recipes icon */}
        <Link className="link" to={`/Recipes`}>
        <div classname='navbar-icon-name'>
        <BiBookOpen className='navbar-icons'/>
        Recipes</div>
        </Link>

    {/* Shopping icon */}
        <Link className="link" to={`/Shopping`}>
        <div classname='navbar-icon-name'>
        <BiListCheck className='navbar-icons'/>
        Shopping</div>
        </Link>

    {/* Breakdown icon */}
        <Link className="link" to={`/Breakdown`}>
        <div classname='navbar-icon-name'>
        <BiBarChartAlt className='navbar-icons'/>
        Breakdown</div>
        </Link>
        
        </div>
)}