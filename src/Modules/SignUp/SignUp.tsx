import { Divider, Grid, TextField } from "@mui/material";
import CustomInputLabel from "components/CustomInputLabel";
import AuthLayout from "Layout/AuthLayout";
import { FormEvent, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  StyledFormCTA,
  StyledFormField,
  StyledSignupText,
  StyledTermsText,
} from "Styles/Global";

type Props = {};

const EMAIL_PATTERN =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUp = (props: Props) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      companyName: "",
      email: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = (values: any) => {
    console.log("signin form submit");
  };

  return (
    <AuthLayout title="Create a Hiki Account">
      <form name="login" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Controller
              name="firstname"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <>
                  <CustomInputLabel text="First Name *" />
                  <TextField
                    fullWidth
                    style={{
                      width: "100%",
                    }}
                    placeholder="Enter Name"
                    variant="outlined"
                    helperText={fieldState.error && "Username is required"}
                    error={fieldState.error ? true : false}
                    {...field}
                  ></TextField>
                </>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="lastname"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <>
                  <CustomInputLabel text="Last Name *" />
                  <TextField
                    fullWidth
                    style={{
                      width: "100%",
                    }}
                    placeholder="Enter Name"
                    variant="outlined"
                    helperText={fieldState.error && "Last Name is required"}
                    error={fieldState.error ? true : false}
                    {...field}
                  ></TextField>
                </>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="companyName"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <>
                  <CustomInputLabel text="Company Name *" />
                  <TextField
                    fullWidth
                    style={{
                      width: "100%",
                    }}
                    placeholder="Enter Name"
                    variant="outlined"
                    helperText={
                      fieldState.error && "Please provide a Company name"
                    }
                    error={fieldState.error ? true : false}
                    {...field}
                  ></TextField>
                </>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInputLabel text="Email *" />
            <Controller
              name="email"
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
          </Grid>
          <Grid item xs={12}>
            <StyledFormField>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <>
                    <CustomInputLabel text="Password *" />
                    <TextField
                      type="password"
                      label=""
                      fullWidth
                      placeholder="Type password..."
                      variant="outlined"
                      {...field}
                      helperText={fieldState.error && "Password is required"}
                      error={fieldState.error ? true : false}
                    />
                  </>
                )}
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
