import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

import CustomInputLabel from "components/CustomInputLabel";
import AuthLayout from "Layout/AuthLayout";

import {
  StyledFormCTA,
  StyledFormField,
  StyledSignupText,
} from "Styles/Global";

import { Controller, useForm } from "react-hook-form";

type Props = {};

const EMAIL_PATTERN =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ForgotPassword = (props: Props) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      emailAddrs: "",
    },
    mode: "all",
  });

  const onSubmit = (values: any) => {
    console.log("signin form submit");
  };

  return (
    <AuthLayout
      title="Forgot Password"
      desc="Enter your email address you are using for account below & we will send you a password reset link "
    >
      <form name="forgot-password" onSubmit={handleSubmit(onSubmit)}>
        <StyledFormField>
          <CustomInputLabel text="Email Address *" />
          <Controller
            name="emailAddrs"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: EMAIL_PATTERN,
                message: "Enter a valid email...",
              },
            }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label=""
                  fullWidth
                  placeholder="Type email..."
                  variant="outlined"
                  helperText={fieldState.error && "Enter a valid email..."}
                  error={fieldState.error ? true : false}
                  {...field}
                />
              </>
            )}
          />
        </StyledFormField>
        <StyledFormCTA fullWidth type="submit">
          Submit
        </StyledFormCTA>
      </form>

      <StyledSignupText>
        Back to
        <Link to="/">
          <span>Login</span>
        </Link>
      </StyledSignupText>
    </AuthLayout>
  );
};

export default ForgotPassword;
