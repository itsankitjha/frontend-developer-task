import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Typography, Box, Button, IconButton, Backdrop } from "@mui/material";
import InputField from "components/InputField/InputField";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import MessageIcon from "@mui/icons-material/Message";
import Post from "components/Post/Post";
import feedsData from "data/feedsData";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "store/slices/feedSlice";
import { Link } from "react-router-dom";

function Feeds({ name }) {
  const [postText, setPostText] = useState("");
  const { feeds } = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const handlePost = (text) => {
    setPostText(text);
  };
  const handleButtonClick = () => {
    const data = {
      avatar: name.charAt(1),
      name,
      icon: "👋",
      post: postText,
    };
    dispatch(addPost(data));
  };

  return (
    <Container maxWidth="smd" sx={{ paddingTop: 5 }}>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row-reverse" }}>
        <Link to="/app/auth">
          <IconButton sx={{ textAlign: "right" }}>
            <LogoutOutlinedIcon color="primary" />
          </IconButton>
        </Link>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ marginBottom: "2%", fontWeight: 700 }}>
          Hello {name}
        </Typography>
        <Typography variant="body2" sx={{ letterSpacing: "0.8px" }}>
          How are you doing today? Would you like to share something with the <br /> community 😉
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "5%",
          border: "1px solid grey",
          borderRadius: "10px",
          background: "#27292d",
          padding: "3%",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "2%", fontWeight: 700 }}>
          Create Post
        </Typography>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          {/* <MessageIcon sx={{ color: "common.white", mr: 1, my: 1 }} /> */}
          <InputField type="post" maxRows={4} handlePost={handlePost} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Button
            variant="contained"
            sx={{ textAlign: "right", marginTop: "3%", color: "white" }}
            onClick={handleButtonClick}
            disabled={!postText}
          >
            Post
          </Button>
        </Box>
      </Box>
      {feeds.map((el) => (
        <Post name={el.name} avatar={el.avatar} icon={el.icon} post={el.post} />
      ))}
    </Container>
  );
}

Feeds.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Feeds;
