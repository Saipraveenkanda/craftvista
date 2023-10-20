import React from "react";
import NavBar from "../Home/Navbar";
import Sidebar from "../Home/Sidebar";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

const Settings = (props) => {
  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      sx={{ height: "100vh" }}
    >
      <NavBar />
      <Stack direction={"row"}>
        <Sidebar />
        <Divider orientation="vertical" flexItem />
        <Box flex={5}>
          <Box
            sx={{
              display: "flex",
              alignItems: "",
              p: 3,
              //   borderLeft: "1px solid #bfbfbf",
            }}
          >
            <Stack direction={"column"} spacing={2} alignItems={"center"}>
              <Avatar
                sx={{ width: 120, height: 120, textAlign: "center" }}
                alt="Profile Image"
                src="https://i.pinimg.com/564x/90/0f/6b/900f6b7b49c5d20db93e1ba623b9f40e.jpg"
              />
              <Input
                accept="image/*"
                style={{ display: "none" }}
                id="change-profile-image"
                multiple
                type="file"
              />
              <label htmlFor="change-profile-image">
                <Button variant="outlined" color="info">
                  Change image
                </Button>
              </label>
            </Stack>
            <Stack direction="column" spacing={2} ml={4}>
              <Typography
                variant="h4"
                color="primary"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Sai Praveen
              </Typography>
              <Typography
                variant="h5"
                color="primary"
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                Sai Praveen
              </Typography>
              <Typography variant="subtitle2" color="info">
                Hyderabad, India
              </Typography>

              <Button
                variant="contained"
                color="warning"
                sx={{
                  alignSelf: "flex-start",
                  display: { xs: "block", md: "none" },
                }}
              >
                Verify
              </Button>
            </Stack>

            <Tooltip title="Get verified badge">
              <Button
                variant="contained"
                color="warning"
                sx={{
                  ml: 4,
                  alignSelf: "center",
                  display: { xs: "none", md: "block" },
                }}
              >
                Verify your account
              </Button>
            </Tooltip>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: { xs: "90%", lg: "50ch" } },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              placeholder="Change your Username"
            />
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              placeholder="Enter your full name"
            />
            <TextField
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              placeholder="Enter email id"
            />
            <TextField
              id="outlined-basic"
              label="Mobile"
              variant="outlined"
              placeholder="Enter your mobile number "
            />
            <FormControl fullWidth>
              <InputLabel id="gender-select">Gender</InputLabel>
              <Select labelId="gender-select" id="gender-select" label="Age">
                <MenuItem value="Select">Select</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
                <MenuItem value="No mention">Don't want to disclose</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              placeholder="Enter current location "
            />
            <TextField
              id="outlined-basic"
              label="State"
              variant="outlined"
              placeholder="Enter state "
            />
            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              placeholder="Enter country "
            />
            <Button
              variant="contained"
              textAlign="center"
              sx={{ height: "60px" }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Settings;
