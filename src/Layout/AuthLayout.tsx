import { Grid } from "@mui/material";
import AuthBanner from "./AuthBanner";

import {
  StyledAuthContainer,
  StyledAuthContent,
  StyledLogo,
} from "./authlayout.style";

type Props = {
  title: string;
  children: React.ReactNode;
};

const AuthLayout = ({ title = "Login", children }: Props) => {
  return (
    <Grid container spacing={0} minHeight={"100vh"}>
      <Grid xs={5} item height={"100%"}>
        <AuthBanner />
      </Grid>
      <Grid xs={7} item alignItems="center" justifyContent="center">
        <StyledAuthContainer>
          <StyledAuthContent>
            <StyledLogo src="/images/logo.svg" />

            <h1>{title}</h1>
            {children}
          </StyledAuthContent>
        </StyledAuthContainer>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
