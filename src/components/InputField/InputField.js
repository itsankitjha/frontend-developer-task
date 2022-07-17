import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EastIcon from "@mui/icons-material/East";
import { isMobile } from "react-device-detect";
import Message from "@mui/icons-material/Message";
import { useDispatch } from "react-redux";
import { setUserData } from "store/slices/authSlice";

export default function InputField({ type, maxRows, isSignUp, handlePost }) {
  const dispatch = useDispatch();
  const typeMapping = {
    email: {
      placeholder: isSignUp ? "Enter your Email" : "Enter your Email or Username",
      id: "outlined-email-input",
      label: isSignUp ? "Email" : "Email or Username",
    },
    password: {
      placeholder: "Enter your password",
      id: "outlined-password-input",
      label: "Password",
    },
    text: {
      placeholder: "Choose a preferred username",
      id: "outlined-text-input",
      label: "Username",
    },
    post: {
      placeholder: "How are you feeling today?",
      type: "text",
      id: "outlined-multiline-static",
      label: "",
    },
  };
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    text: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    if (type === "post") {
      handlePost(event.target.value);
    } else {
      dispatch(setUserData({ [prop]: event.target.value }));
      setValues({ ...values, [prop]: event.target.value });
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 0 } }}>
      <FormControl variant="standard" sx={{ width: isMobile ? "70vw" : "30vw" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="caption" sx={{ textAlign: "left", marginBottom: 1 }}>
            {typeMapping[type].label}
          </Typography>
          {type === "password" ? (
            <Typography variant="caption" sx={{ textAlign: "right", marginBottom: 1 }}>
              Forgot password?
            </Typography>
          ) : null}
        </Box>
        {type === "password" ? (
          <OutlinedInput
            size="small"
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : type}
            value={values[type]}
            onChange={handleChange(type)}
            placeholder={typeMapping[type].placeholder}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <VisibilityOffOutlinedIcon sx={{ color: "text.primary" }} />
                  ) : (
                    <VisibilityOutlinedIcon sx={{ color: "text.primary" }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <TextField
            id={typeMapping[type].id}
            size="large"
            type={type}
            maxRows={maxRows}
            multiline
            sx={{
              background: type === "post" ? "#191920" : "unset",
              borderRadius: 2,
            }}
            value={values[type]}
            onChange={handleChange(type)}
            fullWidth
            placeholder={typeMapping[type].placeholder}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {type === "post" ? <Message sx={{ color: "white" }} /> : null}
                </InputAdornment>
              ),
            }}
          />
        )}
      </FormControl>
    </Box>
  );
}

InputField.defaultProps = {
  maxRows: 1,
  isSignUp: false,
  handlePost: () => {},
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  handlePost: PropTypes.func,
  maxRows: PropTypes.string,
  isSignUp: PropTypes.string,
};
