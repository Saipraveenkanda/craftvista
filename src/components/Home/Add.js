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
  // VideoCameraBack,
  Image,
  DateRange,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { setPostText, setImageUrl } from "../../Store/postSlice";
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

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

const Add = (props) => {
  const postObject = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [snack, setSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  console.log(postObject);

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
    console.log(response);
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
          <Stack direction={"row"} gap={2} mt={2} mb={3}>
            <EmojiEmotions color="primary" />

            <Input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={(e) =>
                dispatch(setImageUrl(URL.createObjectURL(e.target.files[0])))
              }
            />
            <label htmlFor="raised-button-file">
              <Image color="secondary" />
            </label>
            {/* <VideoCameraBack color="success" /> */}
            <PersonAdd color="error" />
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
