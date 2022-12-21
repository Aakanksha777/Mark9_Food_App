import React, { useState } from "react";
import "./styles.css";

const food = {
  "North-India": [
    { Dish: "Chole-bhature", Average_price: "100" },
    { Dish: "Samose", Average_price: "85" }
  ],
  "South-India": [
    { Dish: "Dosa", Average_price: "200" },
    { Dish: " uttapams", Average_price: "170" }
  ],
  "East-India": [
    { Dish: "Litti Chokha", Average_price: "120" },
    { Dish: " Momos", Average_price: "100" }
  ],
  "West-India": [
    { Dish: "Vada Pav", Average_price: "50" },
    { Dish: "Dhokla", Average_price: "80" }
  ]
};

let foodArray = Object.keys(food);

export default function App() {
  const [selectedAreaFood, setAreaFood] = useState("South-India");

  function foodClicked(food) {
    setAreaFood(food);
  }

  return (
    <div className="App">
      <div className="upper-container">
        <h1>Famous Food 🍟🍔</h1>
        <p>Select Any Indian-Area Food to get started. </p>
        {/* creating button from object  */}
        <div>
          {foodArray.map((food) => (
            <button onClick={() => foodClicked(food)}>{food}</button>
          ))}
        </div>
      </div>
      {/* ---- */}
      <hr />
      <div>
        <ul>
          {food[selectedAreaFood].map((food) => (
            <li key={food.Dish}>
              <div className="foodName">{food.Dish}</div>
              <div className="foodPrice">
                {" "}
                Average price is : {food.Average_price}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
