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

      setFoodbankData(data.slice(0, 5));
    } catch (error) {
      setError("Please enter a valid address");
    }
  }

  return (
    <div>
      <h1 className="page-title">Donation</h1>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-search" />
        </span>
        <InputText
          type="text"
          placeholder="Enter location"
          onChange={(e) => setAddress(e.target.value)}
        />

        <Button onClick={fetchFoodbanks} label="Search" />
      </div>

      {foodbankData.map((foodbank, index) => {
        const header = (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 20,
              marginBottom: -28,
            }}
          >
            <h2 style={{ margin: 0 }}>{foodbank.name}</h2>
            <Button
              // icon="pi pi-check"
              // className="p-button-rounded p-button-success"
              // Would be best to use a separate CSS file to style the buttons
              style={{ backgroundColor: "#10a7e6", borderColor: "#10a7e6" }}
              label="View on map"
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${foodbank.address}`
                )
              }
            />
          </div>
        );

        return (
          <Card
            key={index}
            header={header}
            subTitle={`${foodbank.distance_mi} miles away`}
            className="p-shadow-10"
            style={{ marginBottom: "1em" }}
          >
            <p>
              <strong>Address: </strong>
              {foodbank.address}
            </p>
            <p>
              <strong>Phone Number: </strong>
              {foodbank.phone}
            </p>
            {/* <img src={foodbank.urls.map} alt="foodbank map" /> */}
          </Card>
        );
      })}

      {error && <Message severity="error" text={error} />}
    </div>
  );
}

export default Donate;
