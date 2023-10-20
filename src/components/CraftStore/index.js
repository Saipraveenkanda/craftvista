import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Fab,
  Grid,
  // Input,
  Modal,
  Stack,
  // TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../Home/Navbar";
import Sidebar from "../Home/Sidebar";
import StoreItem from "../StoreItem";
import FilterListIcon from "@mui/icons-material/FilterList";
import axios from "axios";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const CraftStore = (props) => {
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    getStoreItems();
  }, []);

  const getStoreItems = async () => {
    const response = await axios.get("http://localhost:3001/api/store");
    const data = response.data;
    if (response.statusText === "OK") {
      setStoreItems(data);
    }
  };
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar />
      <Stack direction={"row"}>
        <Sidebar />
        <Divider orientation="vertical" flexItem />
        <Box flex={5} bgcolor={"background.default"} color={"text.primary"}>
          <Typography
            variant="h3"
            color="primary"
            fontWeight={400}
            textAlign="center"
          >
            Welcome to Craft Vista Store!
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            Discover the heart and soul of our community through our local
            handcrafted treasures. Each item tells a unique story. Enjoy
            exploring and finding something truly special.
          </Typography>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              component="a"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Recent Items
            </Typography>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button variant="outlined">Filter</Button>
              <Button variant="outlined" endIcon={<FilterListIcon />}>
                Sort By
              </Button>
              <Button variant="outlined">Clear Filters</Button>
            </ButtonGroup>
          </Toolbar>

          <Grid
            container
            // direction={{ xs: "column", md: "row", lg: "row", sm: "row" }}
            // spacing={{ xs: 2, md: 6 }}
            p={2}
            // flexWrap={"wrap"}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            {storeItems.map((eachItem) => (
              <StoreItem key={eachItem["_id"]} itemDetails={eachItem} />
            ))}
          </Grid>
        </Box>
      </Stack>
      <Tooltip
        title="Sell your item"
        sx={{
          position: "fixed",
          bottom: 40,
          left: { xs: "calc(20%)", md: 30, sm: "35%" },
        }}
      >
        <Fab variant="extended" color="warning">
          <ControlPointIcon sx={{ mr: 2 }} />
          Sell your product
        </Fab>
      </Tooltip>
      <Modal
        open={false}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          width={500}
          height={300}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" textAlign="center">
            Create Post
          </Typography>
          <Box>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default CraftStore;
