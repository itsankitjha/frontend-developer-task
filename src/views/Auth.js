import { Avatar, Box } from "@mui/material";
import Login from "components/Login/Login";
import React from "react";
import loginIcon from "assets/icons/loginIcon.png";

function Auth() {
  return (
    <Box sx={{ paddingTop: "5%" }}>
      <Avatar sx={{ margin: "auto" }} variant="square" src={loginIcon} />
      <Login isVisible />
    </Box>
  );
}

export default Auth;
