import { Box, Stack } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import Homefeed from "./Homefeed";
import Rightbar from "./Rightbar";
import Add from "./Add";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar color={"text.primary"} />
      <Stack direction={"row"} spacing={2} justifyContent="space-between">
        <Sidebar />
        <Homefeed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
};

export default Home;
