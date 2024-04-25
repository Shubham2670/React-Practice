import axios from "axios";
import React, { useState } from "react";

const Formdata = () => {
  const [data, setData] = useState({
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5007", type: "Powdered Sugar" },
      { id: "5006", type: "Chocolate with Sprinkles" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleBatterChange = (e, index) => {
    const { name, value } = e.target;
    const updatebatters = [...data.batters.batter];
    updatebatters[index] = { ...updatebatters, [name]: value };
    setData({ ...data, batters: { batter: updatebatters } });
  };
  const handletoppingChange = (e, index) => {
    const { name, value } = e.target;
    const updatetopping = [...data.topping];
    updatetopping[index] = { ...updatetopping, [name]: value };
    setData({ ...data, topping: updatetopping });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:3007/posts";
    const formdata = new FormData();
    formdata.append("id", data.id);
    formdata.append("type", data.type);
    formdata.append("name", data.name);
    formdata.append("ppu", data.ppu);
    data.batters.batter.map((batter, index) => {
      return (
        formdata.append(`batters.batter[${index}].id`, batter.id),
        formdata.append(`batters.batter[${index}].type`, batter.type)
      );
    });
    data.topping.map((topping, index) => {
      return (
        formdata.append(`topping[${index}].id`, topping.id),
        formdata.append(`topping[${index}].type`, topping.type)
      );
    });
    axios
      .post(url, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },body:formdata
      })
      .then((res) => {
        console.log(res.data)})
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <form>
        <label>ID</label>
        <input
          type="text"
          name="id"
          value={data.id}
          placeholder="Enter Id Here"
          onChange={handleChange}
        />

        <label>Type</label>
        <input
          type="text"
          name="type"
          value={data.type}
          placeholder="Enter Type Here"
          onChange={handleChange}
        />

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Enter Name Here"
          onChange={handleChange}
        />

        <label>Price Per Unit(PPU)</label>
        <input
          type="text"
          name="ppu"
          value={data.ppu}
          placeholder="Enter Name Here"
          onChange={handleChange}
        />

        <label>Batters</label>
        {data.batters.batter.map((batter, index) => {
          return (
            <div key={index}>
              <label>ID</label>
              <input
                type="text"
                name={batter.id}
                value={batter.id}
                onChange={(e) => {
                  handleBatterChange(e, index);
                }}
              />

              <label>Type</label>
              <input
                type="text"
                name={batter.type}
                value={batter.type}
                onChange={(e) => {
                  handleBatterChange(e, index);
                }}
              />
            </div>
          );
        })}

        <label>Toppings:</label>
        {data.topping.map((topping, index) => {
          return (
            <div key={index}>
              <label>ID</label>
              <input
                type="text"
                name={topping.id}
                value={topping.id}
                onChange={(e) => handletoppingChange(e, index)}
              />
              <label>Type</label>
              <input
                type="text"
                name={topping.type}
                value={topping.type}
                onChange={(e) => handletoppingChange(e, index)}
              />
            </div>
          );
        })}

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Formdata;
