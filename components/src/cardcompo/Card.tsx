type Cardprops = {
  name: string;
  id: number;
  isAdmin: boolean;
  city: string;
  age: number;
  inst: string;
};

import React from "react";

export default function Card(props: Cardprops) {
  const { name, id, isAdmin, city, age, inst } = props;

  return (
    <div className="card">
      <h2>Name: {name}</h2>
      <p>ID: {id}</p>
      <p>Admin: {isAdmin ? "Yes" : "No"}</p>
      <p>City: {city}</p>
      <p>Age: {age}</p>
      <p>Institution: {inst}</p>
    </div>
  );
}
