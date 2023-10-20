import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import StoreIcon from "@mui/icons-material/Store";
import { styled } from "@mui/styles";
import { Mail, Notifications } from "@mui/icons-material";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")({
  backgroundColor: "#ffffff",
  padding: "0 0 0 10px",
  borderRadius: 5,
  width: "40%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Icons = styled(Box)({
  display: { xs: "none", sm: "block" },
  alignItems: "center",
  gap: "20px",
});

const Userbox = styled(Box)({
  alignItems: "center",
  gap: "10px",
});

const NavBar = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onHandleLogout = () => {
    Cookies.remove("jwtToken");
    navigate("/login");
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          component="a"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Craft Vista
        </Typography>
        <StoreIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." color="text.primary" fullWidth />
          <Button variant="contained" color="warning">
            Search
          </Button>
        </Search>
        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <Userbox sx={{ display: { xs: "flex", sm: "none" } }}>
          <Avatar
            onClick={(e) => setOpen(true)}
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography variant="span">Praveen</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem component="a" href="/user/settings">
          Profile
        </MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={onHandleLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
