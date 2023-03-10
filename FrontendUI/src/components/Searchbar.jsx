import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const SearchInput = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchTerm);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Search for posts"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;
