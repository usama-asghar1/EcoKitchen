import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Message } from "primereact/message";


function Donate() {
  
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

    try {

    const response = await fetch(
      `https://www.givefood.org.uk/api/2/foodbanks/search/?address=${address}`
    );
    
    if (!response.ok) {
      setError("Something went wrong, try again");
      return;
    }

    const data = await response.json();
        
    setFoodbankData(data);

    console.log(data);

    }
    catch (error) {
      setError("Please enter a valid address");
    }

  }




  return (
    <div>

      <InputText
        type="text"
        placeholder="Enter location"
        onChange={(e) => setAddress(e.target.value)}
      />

      <Button onClick={fetchFoodbanks} label="Search" />

      {foodbankData.map((foodbank, index) => {
        return (
          <Card key={index} title={foodbank.name}>
            <p>{foodbank.address}</p>
            <p>{foodbank.phone}</p>
            <p>{foodbank.email}</p>
            <p>{foodbank.website}</p>

          </Card>
        )})}


      

      {error && <Message severity="error"   text={error} /> }

    </div>
  );
}

export default Donate;
