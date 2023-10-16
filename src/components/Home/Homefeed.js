import { Box } from "@mui/material";
import Post from "./Post";
import React from "react";

const Homefeed = (props) => {
  return (
    <Box flex={4} bgcolor={"background.default"} p={2}>
      <Post />
    </Box>
  );
};

export default Homefeed;
