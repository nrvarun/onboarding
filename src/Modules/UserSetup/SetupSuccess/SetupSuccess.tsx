import { Grid } from "@mui/material";
import { StyledFormCTA } from "Styles/Global";
import {
  StyledSuccessWrapper,
  StyledUserSetupFormWrapper,
} from "../usersetup.style";

type Props = {};

const SetupSuccess = (props: Props) => {
  return (
    <StyledUserSetupFormWrapper>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={10} textAlign="center">
          <StyledSuccessWrapper>
            <img src="/images/icons/success.svg" alt="success" />
            <h3>All Done</h3>
            <p>You can Change the above from setting tab</p>
            <StyledFormCTA>Go to dashboard</StyledFormCTA>
          </StyledSuccessWrapper>
        </Grid>
      </Grid>
    </StyledUserSetupFormWrapper>
  );
};

export default SetupSuccess;
