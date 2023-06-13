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
        <span classname='navbar-icons'>
        <BiHomeAlt className='navbar-icons'/>
        Home</span>

     {/* Fridge icon */}
        <span classname='navbar-icons'>
        <BiFridge className='navbar-icons'/>
        Food</span>
    {/* Recipies icon */}

        <Link to={`/recipes`}>
        <div>
        <span classname='navbar-icons'>
        <BiBookOpen className='navbar-icons'/>
        Recipies</span></div>
        </Link>

    {/* Shopping icon */}
        <span classname='navbar-icons'>
        <BiListCheck className='navbar-icons'/>
        Shopping</span>

    {/* Breakdown icon */}
        <span classname='navbar-icons'>
        <BiBarChartAlt className='navbar-icons'/>
        Breakdown</span>
        </div>
)}