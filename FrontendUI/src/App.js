import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField, Button, Container, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import Post from "./components/Post";
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: orange,
  },
});

function App() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [searchPhrase, setSearchPhrase] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = { name: name, message: message };
    axios.post("/api/posts", newPost).then((response) => {
      setName("");
      setMessage("");
      setPosts([...posts, response.data]);
    });
  };

  const handleSearch = () => {
    setLoading(true);
    axios.get("/api/posts", { params: { search: searchPhrase } }).then((response) => {
      setLoading(false);
      setPosts(response.data);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Blog
          </Typography>
          <TextField
            label="Search Posts"
            variant="standard"
            size="small"
            value={searchPhrase}
            onChange={(event) => setSearchPhrase(event.target.value)}
          />
          <Button color="inherit" onClick={handleSearch}>
            Search
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create a Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            required
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
            multiline
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Post
          </Button>
        </form>
        <br />
        {loading ? (
          <CircularProgress />
        ) : posts.length ? (
          posts.map((post) => <Post key={post.id} name={post.name} message={post.message} />)
        ) : (
          <Typography>No posts found. Create a post to get started!</Typography>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
