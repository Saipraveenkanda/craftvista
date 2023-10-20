import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import React from "react";
import { ModeNight, PeopleAlt, Person2 } from "@mui/icons-material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../Store/themeSlice";

const Sidebar = () => {
  const modeObj = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  return (
    <Box
      flex={1}
      bgcolor={"background.default"}
      p={2}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <Box position="fixed">
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Refresh Feed" />
              <RefreshIcon fontSize="small" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/store">
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="CraftVista Store" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/user/friends">
              <ListItemIcon>
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/user/settings">
              <ListItemIcon>
                <Person2 />
              </ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem> */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) =>
                  dispatch(
                    setTheme(modeObj.mode === "light" ? "dark" : "light")
                  )
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
