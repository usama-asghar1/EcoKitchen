/*
Want to make a clickable button that will take the user to the additem page
This should stay in the bottom right of the screen and be visible at all times
it should also have a certain degree of transparency so that it does not block the view of the user

*/

import React from "react";
import { Link } from "react-router-dom";

function AddItemButton() {
  return (
    <div id="add-item-button-container">
      <Link className="link" to="/additem">
        <button className="add-item-button ">+</button>
      </Link>
    </div>
  );
}

export default AddItemButton;
