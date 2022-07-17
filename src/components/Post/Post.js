import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Typography,
  Box,
  Button,
  CardHeader,
  Avatar,
  IconButton,
  Grid,
} from "@mui/material";
import InputField from "components/InputField/InputField";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

import MessageIcon from "@mui/icons-material/Message";
import { red } from "@mui/material/colors";
import moment from "moment";

function Post({ avatar, name, icon, post }) {
  return (
    <Box
      sx={{
        marginTop: "5%",
        border: "1px solid grey",
        borderRadius: "10px",
        background: "#27292d",
        padding: "3%",
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatar} />}
        title={
          <Typography variant="h6" sx={{ marginBottom: -0.4 }}>
            {name}
          </Typography>
        }
        // subheader="September 14, 2016"
        subheader={
          <Typography variant="caption" sx={{ color: "#7f8084" }}>
            {moment().startOf("hour").fromNow()}
          </Typography>
        }
      />
      <Grid
        container
        spacing={1}
        sx={{ background: "#131319", padding: "4%", borderRadius: "10px" }}
      >
        <Grid item xs={12} sm={1.2} sx={{ textAlign: "right" }}>
          <Avatar sx={{ bgcolor: "#27292d" }} aria-label="recipe">
            {/* <MessageIcon sx={{ color: "common.white", padding: "4px" }} /> */}
            {icon}
          </Avatar>
        </Grid>
        <Grid item xs={12} sm={10.8}>
          <Typography
            variant="body"
            sx={{ color: "#7f8084", textAlign: "right", paddingLeft: "2" }}
          >
            {post}
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography variant="caption" sx={{ color: "#7f8084", marginTop: "3%" }}>
          <ModeCommentOutlinedIcon sx={{ mr: 1, my: -1 }} /> 24 comments
        </Typography>
      </Box>
    </Box>
  );
}

Post.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
};

export default Post;
