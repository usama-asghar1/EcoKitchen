import { BiHomeAlt } from "react-icons/bi";
import { BiFridge } from "react-icons/bi";
import { BiListCheck } from "react-icons/bi";
import { BiBarChartAlt } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";

import '../App.css'


export default function Navbar() {
        
   

return (
    <div className='navbar-container'>
    <span classname='navbar-icons'>
        <BiHomeAlt className='navbar-icons'/>
        Home</span>
        <span classname='navbar-icons'>
        <BiFridge className='navbar-icons'/>
        Food</span>
        <span classname='navbar-icons'>
        <BiBookOpen className='navbar-icons'/>
        Recipies</span>
        <span classname='navbar-icons'>
        <BiListCheck className='navbar-icons'/>
        Shopping</span>
        <span classname='navbar-icons'>
        <BiBarChartAlt className='navbar-icons'/>
        Breakdown</span>
        </div>
)}