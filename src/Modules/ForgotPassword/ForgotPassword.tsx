import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

import CustomInputLabel from "components/CustomInputLabel";
import AuthLayout from "Layout/AuthLayout";

import {
  StyledFormCTA,
  StyledFormField,
  StyledSignupText,
} from "Styles/Global";

import { FormEvent, useState } from "react";

type Props = {};

const ForgotPassword = (props: Props) => {
  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    alert("violaaa");
  };

  const [formInput, setFormInput] = useState({
    email: "",
  });

  return (
    <AuthLayout
      title="Forgot Password"
      desc="Enter your email address you are using for account below & we will send you a password reset link "
    >
      <form name="forgot-password" onSubmit={handleSubmit}>
        <StyledFormField>
          <CustomInputLabel text="Email Address *" />
          <TextField
            id="email"
            type="email"
            label=""
            required
            aria-required
            fullWidth
            placeholder="Type email..."
            variant="outlined"
            value={formInput.email}
            onChange={(ev) =>
              setFormInput((state) => {
                return {
                  ...state,
                  email: ev.target.value,
                };
              })
            }
          />
        </StyledFormField>
        <StyledFormCTA type="submit">Submit</StyledFormCTA>
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
