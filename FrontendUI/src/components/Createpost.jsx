import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const CreatePost = ({ onCreatePost }) => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleCreatePost = () => {
    if (username && message) {
      onCreatePost({ username, message });
      setUsername('');
      setMessage('');
    }
  };

  return (
    <div>
      <TextField
        label="Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />
      <br />
      <TextField
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        margin="normal"
        multiline
        rows={4}
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleCreatePost}>
        Create Post
      </Button>
    </div>
  );
};

export default CreatePost;
