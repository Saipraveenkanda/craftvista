import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
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
} from "@mui/material";
import axios from "axios";

const Post = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await axios.get("http://localhost:3001/api/posts");
    const data = response.data;
    console.log(data);
    setPosts(data.reverse());
  };

  return (
    <>
      {posts.map((eachpost) => (
        <Card sx={{ marginBottom: 5 }} key={eachpost["_id"]}>
          <CardHeader
            avatar={<Avatar>{eachpost.username[0]}</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={eachpost.username}
            subheader={new Date(eachpost.date).toDateString()}
          />
          <CardMedia component="img" height={400} image={eachpost.imageUrl} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {eachpost.postText}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Post;
