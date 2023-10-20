import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Rightbar = (props) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const onClickPostImage = (e) => {
    setImage(e.target.src);
    setOpen(true);
  };
  return (
    <Box
      flex={2}
      bgcolor={"background.default"}
      p={2}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <Box position="fixed" width={400}>
        <Typography variant="h6" fontWeight={200} mb={2}>
          Friends
        </Typography>
        <AvatarGroup
          max={10}
          total={10}
          sx={{ marginBottom: 3, justifyContent: "flex-end", gap: 1 }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/3483771/pexels-photo-3483771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={200} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem
            onClick={(e) => onClickPostImage(e)}
            sx={{ cursor: "pointer" }}
          >
            <img
              src="https://images.pexels.com/photos/4618597/pexels-photo-4618597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Tall majestic palm trees on green hills"
            />
          </ImageListItem>
          <ImageListItem
            onClick={(e) => onClickPostImage(e)}
            sx={{ cursor: "pointer" }}
          >
            <img
              src="https://images.pexels.com/photos/6778296/pexels-photo-6778296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Majestic coniferous trees in forest with path"
            />
          </ImageListItem>
          <ImageListItem
            onClick={(e) => onClickPostImage(e)}
            sx={{ cursor: "pointer" }}
          >
            <img
              src="https://images.pexels.com/photos/13284758/pexels-photo-13284758.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Shiny Water Surface"
            />
          </ImageListItem>
          <ImageListItem
            onClick={(e) => onClickPostImage(e)}
            sx={{ cursor: "pointer" }}
          >
            <img
              src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Majestic coniferous trees in forest with path"
            />
          </ImageListItem>
          <ImageListItem
            onClick={(e) => onClickPostImage(e)}
            sx={{ cursor: "pointer" }}
          >
            <img
              src="https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Majestic coniferous trees in forest with path"
            />
          </ImageListItem>
          <ImageListItem
            onClick={(e) => onClickPostImage(e)}
            sx={{ cursor: "pointer" }}
          >
            <img
              src="https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Majestic coniferous trees in forest with path"
            />
          </ImageListItem>
        </ImageList>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <img src={image} alt="postimages" />
          </Box>
        </Modal>
        <Typography variant="h6" fontWeight={200} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
