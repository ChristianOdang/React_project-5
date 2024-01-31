import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered is: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <input type="submit" />
    </form>
  );
}

export default App;
