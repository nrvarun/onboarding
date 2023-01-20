import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

import CustomInputLabel from "components/CustomInputLabel";
import AuthLayout from "Layout/AuthLayout";

import {
  StyledFormCTA,
  StyledFormField,
  StyledSignupText,
} from "Styles/Global";

import { FormEvent, useEffect, useState } from "react";

type Props = {};

const ForgotPassword = (props: Props) => {
  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
  };

  const [formInput, setFormInput] = useState({
    email: {
      valid: true,
      value: "",
    },
  });

  function validateEmail(email: any, errors: any) {
    let result = true;

    if (!email) {
      result = false;
    } else {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      result = re.test(String(email).toLowerCase());
    }
    return result;
  }

  useEffect(() => {
    if (formInput.email.value !== "") {
      if (validateEmail(formInput.email.value, {})) {
        setFormInput((state) => {
          return {
            ...state,
            email: {
              ...state.email,
              valid: true,
            },
          };
        });
      } else {
        setFormInput((state) => {
          return {
            ...state,
            email: {
              ...state.email,
              valid: false,
            },
          };
        });
      }
    }
  }, [formInput.email]);

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
            value={formInput.email.value}
            error={!formInput.email.valid ? true : false}
            helperText={formInput.email.valid ? "" : "Invalid email address"}
            onChange={(ev) =>
              setFormInput((state) => {
                return {
                  ...state,
                  email: {
                    ...state.email,
                    value: ev.target.value,
                  },
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
