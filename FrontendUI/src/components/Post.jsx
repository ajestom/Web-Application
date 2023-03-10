import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const PostInput = ({ onPostSubmit, name }) => {
  const [post, setPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onPostSubmit({ name, post });
    setPost("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Create a new post"
        variant="outlined"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostInput;
