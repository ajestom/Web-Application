import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const NameInput = ({ onNameSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Enter your name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default NameInput;
