import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Input,
  Modal,
  Snackbar,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  EmojiEmotions,
  PersonAdd,
  Image,
  DateRange,
} from "@mui/icons-material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setPostText,
  setImageUrl,
  setImageUrlLink,
  setVideoUrl,
} from "../../Store/postSlice";
// import { setImageData } from "../../Store/uploadSlice";
import axios from "axios";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = (props) => {
  const [postImage, setPostImage] = useState({ myFile: "" });
  const url = "http://localhost:3001/upload";

  const createPost = async (newImage) => {
    try {
      await axios.post(url, newImage);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   createPost(postImage);
  //   console.log("Uploaded");
  // };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    dispatch(setImageUrl(base64));
  };

  const handleVideoUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    dispatch(setVideoUrl(base64));
  };

  const postObject = useSelector((state) => state.post);
  console.log(postObject);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [snack, setSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const action = (
    <>
      <IconButton size="small" onClick={(e) => setSnack(false)}>
        <CloseIcon />
      </IconButton>
    </>
  );

  const submitPost = async () => {
    const response = await axios.post(
      "http://localhost:3001/api/posts",
      postObject
    );
    const data = await response.data;
    if (response.statusText === "Created") {
      setSnackMessage(data);
      setOpen(false);
      setSnack(true);
    }
  };

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Create new post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal open={open} onClose={(e) => setOpen(false)}>
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
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Typography variant="span" fontWeight={500}>
              {postObject.username}
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind"
            variant="standard"
            fullWidth
            onChange={(e) => dispatch(setPostText(e.target.value))}
          />
          <Stack direction={"row"} gap={2} mt={2} mb={3} alignItems="center">
            <EmojiEmotions color="primary" />

            <Input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={handleFileUpload}
            />
            <label htmlFor="raised-button-file">
              <Image color="secondary" />
            </label>
            {/* <VideoCameraBack color="success" /> */}
            <PersonAdd color="error" />
            <Input
              accept="video/*"
              style={{ display: "none" }}
              id="video-input"
              multiple
              type="file"
              onChange={handleVideoUpload}
            />
            <label htmlFor="video-input">
              <VideoCallIcon color="primary" />
            </label>
            <TextField
              type="text"
              variant="outlined"
              placeholder="Paste Image URL"
              size="small"
              onChange={(e) => {
                dispatch(setImageUrlLink(e.target.value));
              }}
            />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button onClick={submitPost}>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
      <Snackbar
        severity="success"
        open={snack}
        onClose={(e) => setSnack(false)}
        autoHideDuration={2000}
        message={snackMessage}
        action={action}
      />
    </>
  );
};

export default Add;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
