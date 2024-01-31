import React, { useState } from "react";

function MyForm() {
  const [inputs, setInputs] = useState({});
  const [myCar, setMycar] = useState("Volvo");
  const [textarea, setTextarea] = useState("Type your message here...");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCar = (event) => {
    setMycar(event.target.value);
  };

  const handleText = (event) => {
    setTextarea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type='text'
          name='username'
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Enter your age:
        <input
          type='number'
          name='age'
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <select value={myCar} onChange={handleCar}>
        <option value='Ford'>Ford</option>
        <option value='Volvo'>Volvo</option>
        <option value='Fiat'>Fiat</option>
        <option value='Benz'>Benz</option>
      </select>
      <br></br>
      <textarea value={textarea} onChange={handleText} />

      <input type='submit' />
    </form>
  );
}

export default MyForm;
