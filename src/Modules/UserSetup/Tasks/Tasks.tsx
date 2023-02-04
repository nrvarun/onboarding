import { Grid } from "@mui/material";

import { StyledUserSetupFormWrapper } from "../usersetup.style";

export type FormStepProps = {
  activeStep: number;
  nextStep: () => void;
  updateForm: (values: any) => void;
};

const Tasks = (props: FormStepProps) => {
  return (
    <StyledUserSetupFormWrapper>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12}></Grid>
      </Grid>
    </StyledUserSetupFormWrapper>
  );
};

export default Tasks;
