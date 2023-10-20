import React from "react";
import NavBar from "../Home/Navbar";
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Sidebar from "../Home/Sidebar";
import MessageIcon from "@mui/icons-material/Message";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

const friendsList = [
  {
    name: "Stephen John",
    relation: "best friend",
    imageIcon:
      "https://images.freeimages.com/images/large-previews/b8c/portraits-1058752.jpg?fmt=webp&w=350",
    lastSeen: "1 Hour ago",
  },
  {
    name: "Marie Joseph",
    relation: "close friend",
    imageIcon:
      "https://images.freeimages.com/images/large-previews/bb9/portraits-1-1515656.jpg?fmt=webp&w=350",
    lastSeen: "20 Minutes ago",
  },
  {
    name: "Xavier Ronald",
    relation: "Friend",
    imageIcon:
      "https://images.freeimages.com/images/large-previews/fe4/portraits-1-1486101.jpg?fmt=webp&w=350",
    lastSeen: "10 minutes ago",
  },
  {
    name: "Alexandra",
    relation: "Sister",
    imageIcon:
      "https://images.freeimages.com/images/large-previews/e67/portraits-15-1467394.jpg?fmt=webp&w=350",
    lastSeen: "1 Day ago",
  },
  {
    name: "Mary",
    relation: "Best Friend",
    imageIcon:
      "https://images.freeimages.com/images/large-previews/626/portraits-4-1259192.jpg?fmt=webp&w=350",
    lastSeen: "1 Day ago",
  },
  {
    name: "Robert",
    relation: "Uncle",
    imageIcon:
      " https://images.freeimages.com/images/large-previews/4ae/portraits-1-1259190.jpg?fmt=webp&w=350",
    lastSeen: "7 Days ago",
  },
  {
    name: "Jessica",
    relation: "Crush",
    imageIcon:
      "https://images.freeimages.com/images/large-previews/ecb/atumn-portraits-4-1401891.jpg?fmt=webp&w=350",
    lastSeen: "2 Minutes ago",
  },
  {
    name: "Aunt May",
    relation: "Aunt",
    imageIcon:
      "https://images.freeimages.com/images/large-previews/6db/portraits-5-1486100.jpg?fmt=webp&w=350",
    lastSeen: "40 Minutes ago",
  },
];

const Friends = (props) => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar />
      <Stack direction={"row"}>
        <Sidebar />
        <Divider orientation="vertical" flexItem />
        <Box flex={5} bgcolor={"background.default"} color={"text.primary"}>
          <Stack direction={"column"} spacing={1}>
            <Box
              sx={{
                width: "100%",
                height: "200px",
                backgroundImage:
                  "url('https://i.pinimg.com/736x/b5/de/f2/b5def2b0788733867a55be4181ed4951.jpg')",
                backgroundSize: "cover",
                backgroundPositionY: "-100px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                pl: 4,
              }}
            >
              <Typography variant="h2" fontWeight={600}>
                Friends
              </Typography>
            </Box>

            <Stack direction={"column"} spacing={10}>
              <Box>
                <Typography
                  variant="h5"
                  color="primary"
                  fontWeight={500}
                  ml={2}
                >
                  Your Friends
                </Typography>
                <List
                  sx={{
                    width: "80vw",
                    overflowY: "scroll",
                    "&::-webkit-scrollbar ": {
                      display: "none",
                    },
                  }}
                >
                  {friendsList.map((eachFriend) => (
                    <>
                      <ListItem key={eachFriend.id}>
                        <ListItemAvatar>
                          <Avatar
                            alt={eachFriend.name}
                            src={eachFriend.imageIcon}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={eachFriend.name}
                          secondary={eachFriend.lastSeen}
                        />
                        <Stack direction={"row"} spacing={2}>
                          <Button
                            endIcon={<PersonRemoveIcon />}
                            variant="outlined"
                          >
                            Remove Friend
                          </Button>
                          <Button
                            endIcon={<VideoCallIcon />}
                            variant="outlined"
                            color="warning"
                          >
                            Video Call
                          </Button>
                          <Button
                            endIcon={<MessageIcon />}
                            variant="outlined"
                            color="secondary"
                          >
                            Chat
                          </Button>
                        </Stack>
                      </ListItem>
                      <Divider orientation="horizontal" flexItem />
                    </>
                  ))}
                </List>
              </Box>
              {/* <Divider /> */}
              <Box>
                <Typography
                  variant="h5"
                  color="primary"
                  fontWeight={500}
                  ml={2}
                >
                  Suggested For you
                </Typography>
                <List
                  sx={{
                    width: "80vw",
                    overflowY: "scroll",
                    "&::-webkit-scrollbar ": {
                      display: "none",
                    },
                  }}
                >
                  {friendsList.map((eachFriend) => (
                    <>
                      <ListItem key={eachFriend.id}>
                        <ListItemAvatar>
                          <Avatar
                            alt={eachFriend.name}
                            src={eachFriend.imageIcon}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={eachFriend.name}
                          secondary={eachFriend.lastSeen}
                        />
                        <Button endIcon={<PersonAddIcon />}>
                          Send Request
                        </Button>
                      </ListItem>
                      <Divider orientation="horizontal" flexItem />
                    </>
                  ))}
                </List>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Friends;
