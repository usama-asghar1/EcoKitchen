import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Donate() {
  <Link to={`/donate}`}></Link>;
  /*
  state that tracks users location (postcode/town)
  -Begin as empty string
  -Users will fill in an input field which will replace the current state 

  State for foodbank data 
  -Will start as empty array
  -Will then be replaced with the data from the foodbank API JSON once called
  
  State for errors
  -Will begin as null
  -Will be replaced with error message depending on what has gone wrong
  */

  const [address, setAddress] = useState("");
  const [foodbankData, setFoodbankData] = useState([]);
  const [error, setError] = useState(null);

  /*
  Now need to make the fetch function which will use our address state to make the intial request to the api
  */

  async function fetchFoodbanks() {
    setError(null);

    const response = await fetch(
      `https://www.givefood.org.uk/api/2/foodbanks/search/?address=${address}`
    );
    console.log(response);

    const data = await response.json();
    console.log(data);
    setFoodbankData(data);
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Please input your address"
        onChange={(e) => setAddress(e.target.value)}
      />
      {foodbankData.length > 0 && <p>{foodbankData[0].name}</p>}
      <button onClick={fetchFoodbanks}>Fetch</button>
    </div>
  );
}

export default Donate;
