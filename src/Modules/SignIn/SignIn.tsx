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
import { Controller, useForm } from "react-hook-form";

type Props = {};

const SignIn = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = (values: any) => {
    console.log("signin form submit");
  };

  return (
    <AuthLayout title="Login to Hiki Account">
      <form name="login" onSubmit={handleSubmit(onSubmit)}>
        <StyledFormField>
          <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <>
                <CustomInputLabel text="Username *" />
                <TextField
                  fullWidth
                  style={{
                    width: "100%",
                  }}
                  helperText={fieldState.error && "Username is required"}
                  error={fieldState.error ? true : false}
                  placeholder="Select Bank"
                  {...field}
                ></TextField>
              </>
            )}
          />
        </StyledFormField>
        <StyledFormField>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <>
                <CustomInputLabel text="Password *" />
                <TextField
                  type={showPassword ? "text" : "password"}
                  label=""
                  fullWidth
                  placeholder="Type password..."
                  variant="outlined"
                  {...field}
                  helperText={fieldState.error && "Password is required"}
                  error={fieldState.error ? true : false}
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
                />
              </>
            )}
          />
        </StyledFormField>
        <div
          style={{
            textAlign: "right",
          }}
        >
          <StyledForgotPasswordLink>
            <Link to="/forgot-password">
              <p>Forgot password</p>
            </Link>
          </StyledForgotPasswordLink>
        </div>

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
