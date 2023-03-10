import React from "react";
import Typography from "@mui/material/Typography";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.length ? (
        posts.map((post) => (
          <div key={post.id}>
            <Typography variant="h6">{post.name}</Typography>
            <Typography>{post.post}</Typography>
          </div>
        ))
      ) : (
        <Typography>No posts available. Create one now!</Typography>
      )}
    </div>
  );
};

export default PostList;
