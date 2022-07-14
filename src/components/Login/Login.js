import * as React from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputField from "components/InputField/InputField";
import { Typography, Box } from "@mui/material";
import { signInData, signUpData } from "data/LoginData";

export default function Login({ isVisible }) {
  const [open, setOpen] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [data, setData] = React.useState(signInData);
  React.useEffect(() => {
    setOpen(isVisible);
  }, [isVisible]);
  React.useEffect(() => {
    if (isSignUp === true) {
      setData(signUpData);
    } else {
      setData(signInData);
    }
  }, [isSignUp]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ textAlign: "center" }}
      >
        <Box
          sx={{
            border: "2px solid grey",
            borderRadius: "2%",
          }}
        >
          <br />
          <Typography variant="caption" sx={{ letterSpacing: "1.2px", fontWeight: 700 }}>
            {data.topHeading}
          </Typography>
          <DialogTitle id="alert-dialog-title" sx={{ color: "common.white" }}>
            {data.heading}
          </DialogTitle>
          <DialogContent>
            <InputField type="email" />
            <br />
            {isSignUp === true ? (
              <>
                <InputField type="text" />
                <br />
              </>
            ) : null}

            <InputField type="password" />
          </DialogContent>
          <DialogActions sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
            <Button variant="contained" sx={{ width: "95%", margin: "auto" }}>
              {data.btnText}
            </Button>

            <Typography
              variant="caption"
              sx={{
                textAlign: "left",
                marginBottom: 1,
                width: "95%",
                marginTop: "1%",
              }}
            >
              {data.bottomText}{" "}
              <Typography
                variant="caption"
                //   color="primary"
                sx={{
                  textAlign: "left",
                  marginBottom: 1,
                  width: "95%",
                  marginTop: "1%",
                  color: "common.white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setIsSignUp(!isSignUp);
                }}
              >
                {data.lastAction} -&gt;
              </Typography>
            </Typography>
            <br />
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}

InputField.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
