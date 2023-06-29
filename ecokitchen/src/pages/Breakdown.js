import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  PieController,
  ArcElement,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { supabase } from "../components/supabase/supabaseClient.js";

// register required controllers and elementss
Chart.register(PieController, ArcElement, CategoryScale, Tooltip, Legend);

// breakdown
function Breakdown() {
  const chartRef = useRef(null);
  const myChart = useRef(null); // Keep reference to the chart instance

  // State to store the information about the most common wasted item
  const [mostCommonItemInfo, setMostCommonItemInfo] = useState({
    name: "",
    cost: 0,
    quantity: 0,
  });

  async function fetchData() {
    const response = await supabase.auth.getUser();
    const user = response.data.user.id;
    if (!user) return;

    const wastedFoodNames = await supabase
      .from("wasted_items")
      .select("name, cost, quantity")
      .eq("user_id", user);

    return wastedFoodNames;
  }

  async function processWastedFoodNames() {
    const wastedFoodNames = await fetchData();

    if (!wastedFoodNames) return;

    const wastedFoodCounts = {};
    const cumulativeCosts = {};
    const cumulativeQuantities = {};

    for (let i = 0; i < wastedFoodNames.data.length; i++) {
      const item = wastedFoodNames.data[i];
      const name = item.name;
      const cost = parseFloat(item.cost) || 0;
      const quantity = parseFloat(item.quantity) || 0;

      wastedFoodCounts[name] = (wastedFoodCounts[name] || 0) + 1;
      cumulativeCosts[name] = (cumulativeCosts[name] || 0) + cost;
      cumulativeQuantities[name] = (cumulativeQuantities[name] || 0) + quantity;
    }

    // Convert wastedFoodCounts into an array
    const entries = Object.entries(wastedFoodCounts);

    // Sort the array based on counts in descending order
    entries.sort((a, b) => b[1] - a[1]);

    // Take the top 6 entries
    const topSixEntries = entries.slice(0, 6);

    const labels = topSixEntries.map((entry) => entry[0]);
    const data = topSixEntries.map((entry) => entry[1]);

    let mostCommonItem = labels[0];

    let maxCount = 0;

    for (const name in wastedFoodCounts) {
      const count = wastedFoodCounts[name];

      if (count > maxCount) {
        maxCount = count;
        mostCommonItem = name;
      }
    }

    setMostCommonItemInfo({
      name: mostCommonItem,
      cost: cumulativeCosts[mostCommonItem],
      quantity: cumulativeQuantities[mostCommonItem],
    });

    return {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            "#DF8B7F",
            "#4B86E0",
            "#F5DA67",
            "#225F5D",
            "#e5a012",
            "#5B3F49",
          ],
        },
      ],
    };
  }

  /* eslint-disable react-hooks/exhaustive-deps */
  // Declare an effect that runs when the component mounts.
  // The empty array as a second argument means this effect will run once, like componentDidMount.
  useEffect(() => {
    // Define an immediately invoked async function
    // This is used because useEffect cannot be async itself, so we define an async function inside it.
    (async () => {
      // Await the result from the asynchronous function processWastedFoodNames and store it in chartData
      const chartData = await processWastedFoodNames();

      // Check if chartData has data and if the canvas reference (chartRef) is available
      if (chartData && chartRef.current) {
        // If a chart instance already exists, destroy it to free up resources
        if (myChart.current) {
          myChart.current.destroy();
        }

        // Create a new chart instance and assign it to myChart reference.
        // chartRef.current is the canvas element where the chart will be rendered.
        myChart.current = new Chart(chartRef.current, {
          type: "pie", // Set the chart type to Pie
          data: chartData, // Provide the data to the chart

          // Options for customizing the chart's appearance and behavior
          options: {
            plugins: {
              // Custom plugin to add labels to the pie chart segments.
              // afterDraw is an event that fires after the chart has been drawn
              afterDraw: (chart) => {
                // Get the rendering context of the canvas (required for drawing)
                const ctx = chart.ctx;

                // Loop through each dataset in the chart
                chart.data.datasets.forEach((dataset, i) => {
                  // Get metadata for this dataset
                  const meta = chart.getDatasetMeta(i);

                  // Check if the dataset is visible (not hidden)
                  if (!meta.hidden) {
                    // Loop through each data point in the dataset
                    meta.data.forEach((element, index) => {
                      // Get the tooltip position of the current data point (center of the pie slice)
                      const position = element.tooltipPosition();

                      // Get the label corresponding to this data point
                      const label = chart.data.labels[index];

                      // Set the text color to black
                      ctx.fillStyle = "black";

                      // Draw the label text at the calculated position
                      ctx.fillText(label, position.x, position.y);
                    });
                  }
                });
              },
            },
          },
        });
      }
    })();

    // This function will be executed when the component unmounts.
    // It is used for cleanup purposes.
    return () => {
      // If a chart instance exists, destroy it to free up resources
      if (myChart.current) {
        myChart.current.destroy();
      }
    };
  }, []); // The empty array means that this useEffect will only run once, when the component mounts.

  /* eslint-enable react-hooks/exhaustive-deps */
  /* Saynab was here */
  return (
    <div>
      <div>
        <div style={{ width: "90%", height: "auto" }}>
          <canvas className="pie-chart" ref={chartRef}></canvas>
        </div>
        <div id="breakdown-information-container">
          <div className="breakdown-text">
            <ul id="breakdown-details">
              <li>The food that you've thrown away the most is </li>

              <li className="important-text"> {mostCommonItemInfo.name}</li>

              <li>The total cost of wasting this food is </li>

              <li className="important-text">
                {/* £{mostCommonItemInfo.cost.toFixed(2)}{" "} */}
              </li>

              <li>The total quantity that you've thrown away is </li>

              <li className="important-text">{mostCommonItemInfo.quantity} </li>

              <li>
                To find out how to reduce your{" "}
                <span className="less-important-text">
                  {mostCommonItemInfo.name} waste{" "}
                </span>
              </li>

              <li className="button-text">
                <a
                  className="search_breakdown_btn"
                  href={`https://stopfoodwaste.ie/foods/${mostCommonItemInfo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Learn more about reducing ${mostCommonItemInfo.name} food waste`}
                >
                  click here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the Breakdown component so that it can be used in other files.
export default Breakdown;
