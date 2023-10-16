import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Homefeed from "./Homefeed";
import Rightbar from "./Rightbar";
import Add from "./Add";
import Navbar from "./Navbar";

const Home = (props) => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  console.log(props);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar color={"text.primary"} />
        <Stack direction={"row"} spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Homefeed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
