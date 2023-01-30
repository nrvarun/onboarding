import { Divider, Grid, TextField } from "@mui/material";
import CustomInputLabel from "components/CustomInputLabel";
import AuthLayout from "Layout/AuthLayout";
import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledFormCTA,
  StyledFormField,
  StyledSignupText,
  StyledTermsText,
} from "Styles/Global";

type Props = {};

const SignUp = (props: Props) => {
  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
  };

  const [formInput, setFormInput] = useState({
    firstname: {
      value: "",
      valid: true,
    },
    lastname: {
      value: "",
      valid: true,
    },
    company: {
      value: "",
      valid: true,
    },
    email: {
      value: "",
      valid: true,
    },
    password: {
      value: "",
      valid: true,
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
        setFormInput((state: any) => {
          return {
            ...state,
            email: {
              ...state.email,
              valid: true,
            },
          };
        });
      } else {
        setFormInput((state: any) => {
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
    <AuthLayout title="Create a Hiki Account">
      <form name="login" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CustomInputLabel text="First Name *" />
            <TextField
              id="firstname"
              label=""
              required
              aria-required
              fullWidth
              name="firstname"
              placeholder="Enter Name"
              error={!formInput.firstname.valid ? true : false}
              helperText={
                formInput.firstname.valid ? "" : "Please provide a valid name"
              }
              value={formInput.firstname.value}
              variant="outlined"
              onChange={(ev) =>
                setFormInput((state) => {
                  return {
                    ...state,
                    firstname: {
                      ...state.firstname,
                      value: ev.target.value,
                    },
                  };
                })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <CustomInputLabel text="Last Name *" />
            <TextField
              id="lastname"
              label=""
              required
              aria-required
              fullWidth
              name="lastname"
              placeholder="Enter Name"
              value={formInput.lastname.value}
              error={!formInput.lastname.valid ? true : false}
              helperText={
                formInput.lastname.valid ? "" : "Please provide a valid name"
              }
              variant="outlined"
              onChange={(ev) =>
                setFormInput((state) => {
                  return {
                    ...state,
                    lastname: {
                      ...state.lastname,
                      value: ev.target.value,
                    },
                  };
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInputLabel text="Company Name *" />
            <TextField
              id="company"
              label=""
              required
              aria-required
              fullWidth
              name="company"
              placeholder="Name as per records"
              error={!formInput.company.valid ? true : false}
              helperText={
                formInput.company.valid ? "" : "Please provide a Company name"
              }
              value={formInput.company.value}
              variant="outlined"
              onChange={(ev) =>
                setFormInput((state) => {
                  return {
                    ...state,
                    company: {
                      ...state.company,
                      value: ev.target.value,
                    },
                  };
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInputLabel text="Email ID (this will be username) *" />
            <TextField
              id="email"
              label=""
              required
              aria-required
              fullWidth
              name="email"
              placeholder="Your work email ID"
              value={formInput.email.value}
              error={!formInput.email.valid ? true : false}
              helperText={
                formInput.email.valid ? "" : "Please provide a valid email name"
              }
              variant="outlined"
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
          </Grid>
          <Grid item xs={12}>
            <StyledFormField>
              <CustomInputLabel text="Password *" />
              <TextField
                id="password"
                type="password"
                name="password"
                label=""
                required
                aria-required
                fullWidth
                placeholder="Type password..."
                variant="outlined"
                value={formInput.password.value}
                onChange={(ev) =>
                  setFormInput((state) => {
                    return {
                      ...state,
                      password: {
                        ...state.password,
                        value: ev.target.value,
                      },
                    };
                  })
                }
              />
            </StyledFormField>
          </Grid>
        </Grid>

        <StyledFormCTA fullWidth type="submit">
          Register Now
        </StyledFormCTA>

        <StyledTermsText>
          By registering, you are agreeing to HiKi{" "}
          <Link to="/terms-conditions">
            <span>terms and conditions</span>.
          </Link>
        </StyledTermsText>

        <Divider variant="middle" />

        <StyledSignupText>
          Already have an account?{" "}
          <Link to="/">
            <span>login</span>.
          </Link>
        </StyledSignupText>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
