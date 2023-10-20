import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Checkbox,
  Menu,
  MenuItem,
} from "@mui/material";
import axios from "axios";

const Post = (props) => {
  const [posts, setPosts] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await axios.get("http://localhost:3001/api/posts");
    const data = response.data;
    console.log(data);

    if (response.statusText === "OK") {
      setPosts(data.reverse());
    }
  };

  const deletePost = async (post) => {
    const { _id } = post;
    const url = `http://localhost:27017/api/posts/${_id}`;
    const options = {
      method: "DELETE",
      body: JSON.stringify(_id),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      {posts.map((post) => (
        <Card sx={{ marginBottom: 5 }} key={post._id} value={post._id}>
          <CardHeader
            avatar={<Avatar>{post.username[0]}</Avatar>}
            action={
              <IconButton
                aria-label="settings"
                onClick={handleClick}
                id="demo-positioned-menu"
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={post.username}
            subheader={new Date(post.date).toDateString()}
          />
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
          {post.imageUrl !== null && (
            <CardMedia
              component="img"
              height={400}
              src={post.imageUrl === null ? post.imageUrlLink : post.imageUrl}
            />
          )}
          {post.videoUrl !== null ? (
            <video autoPlay="false" loop controls>
              <source src={post.videoUrl} type="video/mp4" />
            </video>
          ) : null}

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.postText}
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton variant="outlined" onClick={() => deletePost(post)}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Post;
