import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EastIcon from "@mui/icons-material/East";

const typeMapping = {
  email: {
    placeholder: "Enter your Email or Username",
    id: "outlined-email-input",
    label: "Email or Username",
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
};

export default function InputField({ type }) {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
      <FormControl variant="standard" sx={{ width: "30vw" }}>
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
            size="small"
            type={type}
            value={values[type]}
            onChange={handleChange(type)}
            fullWidth
            placeholder={typeMapping[type].placeholder}
          />
        )}
      </FormControl>
    </Box>
  );
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
};
