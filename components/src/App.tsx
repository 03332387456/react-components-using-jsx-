import React from "react";
import "./App.css";
import Button from "./buttoncomp/Button";
import Card from "./cardcompo/Card";
import Table from "./tablecompo/Table";
import Select from "./selectcompo/Select";

const buttons = ["button1", "button2", "button3"];

let cardarr = [
  {
    name: "Ahsan",
    id: 1,
    isAdmin: true,
    city: "Karachi",
    age: 15,
    inst: "SAIMS",
  },
  {
    name: "ALi",
    id: 2,
    isAdmin: true,
    city: "Karachi",
    age: 15,
    inst: "SAIMS",
  },
  {
    name: "moiz",
    id: 3,
    isAdmin: true,
    city: "Karachi",
    age: 15,
    inst: "SAIMS",
  },
];

let tableData = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
  {
    userId: 1,
    id: 11,
    title: "vero rerum temporibus dolor",
    completed: true,
  },
  {
    userId: 1,
    id: 12,
    title: "ipsa repellendus fugit nisi",
    completed: true,
  },
  {
    userId: 1,
    id: 13,
    title: "et doloremque nulla",
    completed: false,
  },
  {
    userId: 1,
    id: 14,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true,
  },
  {
    userId: 1,
    id: 15,
    title: "ab voluptatum amet voluptas",
    completed: true,
  },
  {
    userId: 1,
    id: 16,
    title: "accusamus eos facilis sint et aut voluptatem",
    completed: true,
  },
  {
    userId: 1,
    id: 17,
    title: "quo laboriosam deleniti aut qui",
    completed: true,
  },
  {
    userId: 1,
    id: 18,
    title: "dolorum est consequatur ea mollitia in culpa",
    completed: false,
  },
  {
    userId: 1,
    id: 19,
    title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    completed: true,
  },
  {
    userId: 1,
    id: 20,
    title: "ullam nobis libero sapiente ad optio sint",
    completed: true,
  },
  {
    userId: 2,
    id: 21,
    title: "suscipit repellat esse quibusdam voluptatem incidunt",
    completed: false,
  },
  {
    userId: 2,
    id: 22,
    title: "distinctio vitae autem nihil ut molestias quo",
    completed: true,
  },
  {
    userId: 2,
    id: 23,
    title: "et itaque necessitatibus maxime molestiae qui quas velit",
    completed: false,
  },
];

function App() {
  return (
    <div className="App">
      <b>Buttons Component</b>
      <Button buttons={buttons} />

      <b className="cb">cards Component</b>
      {cardarr.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}

      <b>Table components</b>
      {tableData.map((data, index) => (
        <Table key={index} {...data} />
      ))}

      <b>Select components</b>
      <Select
        getValue={(e) => {
          console.log(e);
        }}
        label="Gender"
        options={[
          {
            value: "male",
            displayName: "Male",
          },
          {
            value: "female",
            displayName: "Female",
          },
        ]}
      />
    </div>
  );
}

export default App;
