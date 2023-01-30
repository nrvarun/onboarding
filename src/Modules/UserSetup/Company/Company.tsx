import { Grid, TextField } from "@mui/material";
import { StyledCustomInputLabel } from "components/CustomInputLabel/custominputlabel.style";

import { useForm, Controller } from "react-hook-form";
import {
  StyledFormCTA,
  StyledFormFieldHeading,
  StyledFormFieldItem,
  StyledUserSetupFormWrapper,
} from "../usersetup.style";

export type FormStepProps = {
  activeStep: number;
  nextStep: () => void;
  updateForm: (values: any) => void;
};

const Company = ({ activeStep, nextStep, updateForm }: FormStepProps) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      companyName: "",
      gstNumber: "",
      mainBranch: "",
      mainBranchAddress: "",
    },
    mode: "all",
  });

  const onSubmit = (values: any) => {
    updateForm(values);
    nextStep();
  };

  return (
    <StyledUserSetupFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={4}>
            image
          </Grid>
          <Grid item xs={8}>
            <StyledFormFieldItem>
              <Controller
                name="companyName"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledCustomInputLabel>
                      Company Name*
                    </StyledCustomInputLabel>
                    <TextField
                      style={{
                        width: "100%",
                      }}
                      helperText={
                        fieldState.error && "Company name is required"
                      }
                      error={fieldState.error ? true : false}
                      placeholder="Company Name..."
                      {...field}
                    />
                  </>
                )}
              />
            </StyledFormFieldItem>
            <StyledFormFieldItem>
              <Controller
                name="gstNumber"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledCustomInputLabel>GST Number*</StyledCustomInputLabel>
                    <TextField
                      style={{
                        width: "100%",
                      }}
                      helperText={fieldState.error && "GST Number is required"}
                      error={fieldState.error ? true : false}
                      placeholder="GST Number..."
                      {...field}
                    />
                  </>
                )}
              />
            </StyledFormFieldItem>
            <StyledFormFieldHeading>Locations*</StyledFormFieldHeading>
            <StyledFormFieldItem>
              <Controller
                name="mainBranch"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledCustomInputLabel>
                      Main Branch Name*
                    </StyledCustomInputLabel>
                    <TextField
                      style={{
                        width: "100%",
                      }}
                      helperText={fieldState.error && "Branch Name is required"}
                      error={fieldState.error ? true : false}
                      placeholder="Branch Name..."
                      {...field}
                    />
                  </>
                )}
              />
            </StyledFormFieldItem>
            <StyledFormFieldItem>
              <Controller
                name="mainBranchAddress"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    style={{
                      width: "100%",
                    }}
                    multiline
                    rows={1}
                    helperText={
                      fieldState.error && "Branch Address is required"
                    }
                    error={fieldState.error ? true : false}
                    placeholder="Branch Address*"
                    {...field}
                  />
                )}
              />
            </StyledFormFieldItem>

            <div
              style={{
                textAlign: "left",
              }}
            >
              <StyledFormCTA type="submit">Next</StyledFormCTA>
            </div>
          </Grid>
        </Grid>
      </form>
    </StyledUserSetupFormWrapper>
  );
};

export default Company;
