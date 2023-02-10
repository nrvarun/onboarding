import { CheckBox, CheckCircle } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { StyledFormCTAOutlined } from "Styles/Global";

import {
  StyledFormCTA,
  StyledFormFieldDivider,
  StyledFormFieldError,
  StyledUserSetupFormWrapper,
  StyledWorkFieldSelectTitle,
  StyledWorkFieldTitle,
  StyledWorkHoursHeading,
  StyledWorkHoursWrapper,
} from "../usersetup.style";

export type FormStepProps = {
  activeStep: number;
  nextStep: () => void;
  updateForm: (values: any) => void;
  prevStep: () => void;
};

const LeavePolicy = ({ activeStep, nextStep, updateForm }: FormStepProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      maxPDLeaves: "",
      paidLeavesEnabled: false,
      sickLeaves: "",
      sickLeavesEnabled: false,
      lossOfPayLeaves: "",
      lossOfPayLeavesEnabled: false,
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
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={10}>
            <StyledWorkHoursWrapper>
              <StyledWorkHoursHeading>Leave Policy</StyledWorkHoursHeading>
              <Grid
                container
                alignItems={"center"}
                justifyContent="center"
                marginBottom={4}
              >
                <Grid xs={4} item>
                  <StyledWorkFieldTitle>Paid leaves</StyledWorkFieldTitle>
                </Grid>
                <Grid xs={4} item>
                  <Controller
                    name="paidLeavesEnabled"
                    control={control}
                    defaultValue={false}
                    render={({ field, fieldState }) => {
                      return (
                        <Grid container alignItems="center">
                          <Switch {...field} />
                          <p>{field.value ? "Yes" : "No"}</p>
                        </Grid>
                      );
                    }}
                  />
                </Grid>
                <Grid xs={4} item>
                  <StyledWorkFieldSelectTitle>
                    Maximum PD leaves <span>*</span>
                  </StyledWorkFieldSelectTitle>
                  <Controller
                    name="maxPDLeaves"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        select
                        error={fieldState.isDirty && field.value === ""}
                        helperText={
                          fieldState.error && (
                            <StyledFormFieldError>
                              Select one option
                            </StyledFormFieldError>
                          )
                        }
                        {...field}
                        placeholder="Select days..."
                      >
                        <MenuItem value={1}>One day</MenuItem>
                        <MenuItem value={2}>Two Days</MenuItem>
                        <MenuItem value={3}>Three Days</MenuItem>
                      </TextField>
                    )}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                alignItems={"center"}
                justifyContent="center"
                marginBottom={4}
              >
                <Grid xs={4} item>
                  <StyledWorkFieldTitle>Sick Leaves</StyledWorkFieldTitle>
                </Grid>
                <Grid xs={4} item>
                  <Controller
                    name="sickLeavesEnabled"
                    control={control}
                    defaultValue={false}
                    render={({ field, fieldState }) => {
                      return (
                        <Grid container alignItems="center">
                          <Switch {...field} />
                          <p data-value={field.value}>
                            {field.value ? "Yes" : "No"}
                          </p>
                        </Grid>
                      );
                    }}
                  />
                </Grid>
                <Grid xs={4} item>
                  <StyledWorkFieldSelectTitle>
                    Maximum Sick leaves <span>*</span>
                  </StyledWorkFieldSelectTitle>
                  <Controller
                    name="sickLeaves"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        select
                        error={fieldState.isDirty && field.value === ""}
                        helperText={
                          fieldState.error && (
                            <StyledFormFieldError>
                              Select one option
                            </StyledFormFieldError>
                          )
                        }
                        {...field}
                        placeholder="Select days..."
                      >
                        <MenuItem value={1}>One day</MenuItem>
                        <MenuItem value={2}>Two Days</MenuItem>
                        <MenuItem value={3}>Three Days</MenuItem>
                      </TextField>
                    )}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                alignItems={"center"}
                justifyContent="center"
                marginBottom={4}
              >
                <Grid xs={4} item>
                  <StyledWorkFieldTitle>
                    Loss of Pay leaves
                  </StyledWorkFieldTitle>
                </Grid>
                <Grid xs={4} item>
                  <Controller
                    name="lossOfPayLeavesEnabled"
                    control={control}
                    defaultValue={false}
                    render={({ field, fieldState }) => {
                      return (
                        <Grid container alignItems="center">
                          <Switch {...field} />
                          <p data-value={field.value}>
                            {field.value ? "Yes" : "No"}
                          </p>
                        </Grid>
                      );
                    }}
                  />
                </Grid>
                <Grid xs={4} item>
                  <StyledWorkFieldSelectTitle>
                    Maximum Loss of Pay leaves <span>*</span>
                  </StyledWorkFieldSelectTitle>
                  <Controller
                    name="lossOfPayLeaves"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        select
                        error={fieldState.isDirty && field.value === ""}
                        helperText={
                          fieldState.error && (
                            <StyledFormFieldError>
                              Select one option
                            </StyledFormFieldError>
                          )
                        }
                        {...field}
                        placeholder="Select days..."
                      >
                        <MenuItem value={1}>One day</MenuItem>
                        <MenuItem value={2}>Two Days</MenuItem>
                        <MenuItem value={3}>Three Days</MenuItem>
                      </TextField>
                    )}
                  />
                </Grid>
              </Grid>
            </StyledWorkHoursWrapper>

            <StyledFormFieldDivider />

            <Grid container spacing={2}>
              <Grid item xs={4}>
                <StyledFormCTAOutlined>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="#0052CC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Previous
                </StyledFormCTAOutlined>
              </Grid>
              <Grid item xs={4} textAlign="center" alignItems="center">
                <Button type="button" onClick={nextStep}>
                  skip
                </Button>
              </Grid>
              <Grid item xs={4}>
                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                  <StyledFormCTA type="submit">
                    Next
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </StyledFormCTA>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </StyledUserSetupFormWrapper>
  );
};

export default LeavePolicy;
