import CustomInputLabel from "components/CustomInputLabel";

import { Link } from "react-router-dom";

import { Divider, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import AuthLayout from "Layout/AuthLayout";

import {
  StyledFormCTA,
  StyledFormField,
  StyledSignupText,
  StyledTermsText,
} from "Styles/Global";
import { StyledForgotPasswordLink } from "./signin.style";
import { FormEvent, useState } from "react";

type Props = {};

const SignIn = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
  };

  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
  });

  return (
    <AuthLayout title="Login to Hiki Account">
      <form name="login" onSubmit={handleSubmit}>
        <StyledFormField>
          <CustomInputLabel text="Username *" />
          <TextField
            id="username"
            label=""
            required
            aria-required
            fullWidth
            name="username"
            placeholder="Type username..."
            value={formInput.username}
            variant="outlined"
            onChange={(ev) =>
              setFormInput((state) => {
                return {
                  ...state,
                  username: ev.target.value,
                };
              })
            }
          />
        </StyledFormField>
        <StyledFormField>
          <CustomInputLabel text="Password *" />
          <TextField
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            label=""
            required
            aria-required
            fullWidth
            placeholder="Type password..."
            variant="outlined"
            value={formInput.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(ev) =>
              setFormInput((state) => {
                return {
                  ...state,
                  password: ev.target.value,
                };
              })
            }
          />
        </StyledFormField>
        <StyledForgotPasswordLink>
          <Link to="/forgot-password">
            <p>Forgot password</p>
          </Link>
        </StyledForgotPasswordLink>

        <StyledFormCTA fullWidth type="submit">
          Login
        </StyledFormCTA>

        <StyledTermsText>
          By registering, you are agreeing to HiKi{" "}
          <Link to="/terms-conditions">
            <span>terms and conditions</span>.
          </Link>
        </StyledTermsText>

        <Divider variant="middle" />

        <StyledSignupText>
          Don’t have an account?{" "}
          <Link to="/register">
            <span>Sign Up</span>.
          </Link>
        </StyledSignupText>
      </form>
    </AuthLayout>
  );
};

export default SignIn;
