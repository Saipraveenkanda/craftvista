import React, { useState } from "react";
import useStyles from "./styles";
import {
  Grid,
  Card,
  Avatar,
  Typography,
  Stack,
  Chip,
  Paper,
  Badge,
  AppBar,
  Toolbar,
  Button,
  Box,
  InputBase,
  CardContent,
  TextField,
  CardActions,
  IconButton,
  CardMedia,
  Fab,
  Tooltip,
  Zoom,
} from "@mui/material";

import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import MailIcon from "@mui/icons-material/Mail";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SearchIcon from "@mui/icons-material/Search";
import AttachmentIcon from "@mui/icons-material/Attachment";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

import { styled, alpha } from "@mui/material/styles";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#263238",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  height: 40,
  color: "#fff",
  fontSize: 20,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("jwtToken");
    navigate("/login");
  };
  const [file, changeFile] = useState();
  const [showPostCard, setPostToggle] = useState(true);
  console.log(file);

  const handleFileChange = (e) => {
    console.log(e.target.files);
    console.log(URL.createObjectURL(e.target.files[0]));
    changeFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleClosePost = () => {
    setPostToggle(false);
  };

  const createPost = () => {
    setPostToggle(true);
  };

  const postCard = () => {
    return (
      <Card>
        <CardContent>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Avatar sx={{ mb: 2, backgroundColor: "darkblue" }}>P</Avatar>
            <IconButton
              size="small"
              sx={{ width: 20, height: 20 }}
              onClick={handleClosePost}
            >
              <CloseIcon className={classes.postCloseBtn} fontSize="medium" />
            </IconButton>
          </Stack>
          {file !== undefined && (
            <CardMedia
              image={file}
              sx={{ height: 400, width: 180 }}
              title="image"
            />
          )}

          <TextField
            id="outlined-multiline-flexible"
            placeholder="Create your first post..."
            multiline
            fullWidth
            rows={3}
            maxCols={20}
          />
        </CardContent>
        <CardActions className={classes.postActions}>
          <Stack direction="row" spacing={3}>
            <Button variant="outlined" component="label">
              <AttachmentIcon />
              <Typography variant="subtitle1" ml={1}>
                File
              </Typography>
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
            <Button variant="outlined" component="label">
              <PhotoCameraIcon />
              <Typography variant="subtitle1" ml={1}>
                Photo
              </Typography>
              <VisuallyHiddenInput type="file" />
            </Button>
            <Button variant="outlined">
              <PinDropIcon />
              <Typography variant="subtitle1" ml={1}>
                Location
              </Typography>
            </Button>
          </Stack>
          <Button variant="contained" color="secondary">
            Post
          </Button>
        </CardActions>
      </Card>
    );
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense" className={classes.toolbarStyle}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Craft Vista
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container direction="row" className={classes.mainContainer}>
        <Grid xl={2} className={classes.sideBar}>
          <Card
            className={classes.profileCard}
            style={{ backgroundColor: "#37474f", color: "#fff" }}
          >
            <Avatar sx={{ width: 120, height: 120, mb: 3 }}>Profile</Avatar>
            <Typography variant="h5" gutterBottom>
              User Name
            </Typography>
            <Stack direction="row" spacing={3}>
              <Chip
                label="39 Followers"
                variant="outlined"
                clickable
                color="primary"
              />
              <Chip
                label="162 Following"
                variant="outlined"
                clickable
                color="primary"
              />
            </Stack>
          </Card>

          <Stack spacing={2} mt={2}>
            <Tooltip
              title="Create a post"
              arrow
              placement="left"
              TransitionComponent={Zoom}
            >
              <Fab
                color="primary"
                aria-label="add"
                sx={{ alignSelf: "center" }}
                onClick={createPost}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
            <Item>
              <DynamicFeedIcon />
              <Typography variant="p" ml={2}>
                News Feed
              </Typography>
            </Item>
            <Item>
              <Badge badgeContent={100} color="primary" max={99}>
                <MailIcon />
              </Badge>
              <Typography variant="p" ml={2}>
                Messages
              </Typography>
            </Item>
            <Item>
              <Badge badgeContent={40} color="secondary" max={100}>
                <Diversity3Icon />
              </Badge>
              <Typography variant="p" ml={2}>
                Friends
              </Typography>
            </Item>
            <Item>
              <ManageAccountsIcon />
              <Typography variant="p" ml={2}>
                Manage Profile
              </Typography>
            </Item>
            <Item>
              <SupportAgentIcon />
              <Typography variant="p" ml={2}>
                Contact Us
              </Typography>
            </Item>
          </Stack>
        </Grid>
        <Grid item xl={8} className={classes.homeContainer}>
          {showPostCard && postCard()}
        </Grid>
        <Grid item xl={2} className={classes.rightContainer}>
          Right side Container
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
