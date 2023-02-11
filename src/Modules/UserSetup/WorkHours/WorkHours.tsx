import { Grid, TextField, Switch, MenuItem, Button } from "@mui/material";
import CustomInputLabel from "components/CustomInputLabel";

import { useForm, Controller } from "react-hook-form";
import { StyledFormCTAOutlined } from "Styles/Global";

import {
  StyledFormCTA,
  StyledFormFieldDivider,
  StyledFormFieldError,
  StyledFormSwitchWrapper,
  StyledLeaveDaysWrapper,
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

const WorkHours = ({ prevStep, nextStep, updateForm }: FormStepProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      Sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      hoursPerDay: "",
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
          <Grid item xs={8}>
            <StyledLeaveDaysWrapper>
              <StyledWorkHoursHeading>
                Work days in a week
              </StyledWorkHoursHeading>
              <Grid container alignItems={"center"} marginBottom={0}>
                <Grid xs={6} item>
                  <StyledWorkFieldTitle>Sunday</StyledWorkFieldTitle>
                </Grid>
                <Grid xs={6} item>
                  <Controller
                    name="Sunday"
                    control={control}
                    defaultValue={false}
                    render={({ field, fieldState }) => {
                      return (
                        <StyledFormSwitchWrapper>
                          <Switch {...field} />
                          <p>{field.value ? "Working" : "Holiday"}</p>
                        </StyledFormSwitchWrapper>
                      );
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container alignItems={"center"} marginBottom={2}>
                <Grid xs={6} item>
                  <StyledWorkFieldTitle>Monday</StyledWorkFieldTitle>
                </Grid>
                <Grid xs={6} item>
                  <Controller
                    name="monday"
                    control={control}
                    defaultValue={false}
                    render={({ field, fieldState }) => {
                      return (
                        <StyledFormSwitchWrapper>
                          <Switch {...field} />
                          <p>{field.value ? "Working" : "Holiday"}</p>
                        </StyledFormSwitchWrapper>
                      );
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container alignItems={"center"} marginBottom={2}>
                <Grid xs={6} item>
                  <StyledWorkFieldTitle>Tuesday</StyledWorkFieldTitle>
                </Grid>
                <Grid xs={6} item>
                  <Controller
                    name="tuesday"
                    control={control}
                    defaultValue={false}
                    render={({ field, fieldState }) => {
                      return (
                        <StyledFormSwitchWrapper>
                          <Switch {...field} />
                          <p>{field.value ? "Working" : "Holiday"}</p>
                        </StyledFormSwitchWrapper>
                      );
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container alignItems={"center"} marginBottom={2}>
                <Grid xs={6} item>
                  <StyledWorkFieldTitle>Wednesday</StyledWorkFieldTitle>
                </Grid>
                <Grid xs={6} item>
                  <Controller
                    name="wednesday"
                    control={control}
                    defaultValue={false}
                    render={({ field, fieldState }) => {
                      return (
                        <StyledFormSwitchWrapper>
                          <Switch {...field} />
                          <p>{field.value ? "Working" : "Holiday"}</p>
                        </StyledFormSwitchWrapper>
                      );
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container alignItems={"center"} marginBottom={2}>
                <Grid xs={6} item>
                  <StyledWorkFieldTitle>Thursday</StyledWorkFieldTitle>
                </Grid>
                <Grid xs={6} item>
                  <Controller
                    name="thursday"
                    control={control}
                    defaultValue={false}
                    render={({ field, fieldState }) => {
                      return (
                        <StyledFormSwitchWrapper>
                          <Switch {...field} />
                          <p>{field.value ? "Working" : "Holiday"}</p>
                        </StyledFormSwitchWrapper>
                      );
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container alignItems={"center"} marginBottom={2}>
                <Grid xs={6} item>
                  <StyledWorkFieldTitle>Friday</StyledWorkFieldTitle>
                </Grid>
                <Grid xs={6} item>
                  <Controller
                    name="friday"
                    control={control}
                    defaultValue={false}
                    render={({ field, fieldState }) => {
                      return (
                        <StyledFormSwitchWrapper>
                          <Switch {...field} />
                          <p>{field.value ? "Working" : "Holiday"}</p>
                        </StyledFormSwitchWrapper>
                      );
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container alignItems={"center"} marginBottom={2}>
                <Grid xs={6} item>
                  <StyledWorkFieldTitle>Saturday</StyledWorkFieldTitle>
                </Grid>
                <Grid xs={6} item>
                  <Controller
                    name="saturday"
                    control={control}
                    defaultValue={false}
                    render={({ field, fieldState }) => {
                      return (
                        <StyledFormSwitchWrapper>
                          <Switch {...field} />
                          <p>{field.value ? "Working" : "Holiday"}</p>
                        </StyledFormSwitchWrapper>
                      );
                    }}
                  />
                </Grid>
              </Grid>

              <StyledFormFieldDivider />

              <StyledWorkHoursHeading
                style={{
                  marginBottom: 24,
                }}
              >
                Minimum number of hours per day
              </StyledWorkHoursHeading>

              <Grid container spacing={2}>
                <Grid xs={6} item>
                  <StyledWorkFieldTitle>
                    Total number of hours
                  </StyledWorkFieldTitle>
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="hoursPerDay"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        style={{
                          width: "60%",
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
                        <MenuItem value={5}>5hrs</MenuItem>
                        <MenuItem value={6}>6hrs</MenuItem>
                        <MenuItem value={8}>8hrs</MenuItem>
                      </TextField>
                    )}
                  />
                </Grid>
              </Grid>
            </StyledLeaveDaysWrapper>
          </Grid>
          <StyledFormFieldDivider />

          <Grid container spacing={2} xs={10}>
            <Grid item xs={4}>
              <StyledFormCTAOutlined type="button" onClick={prevStep}>
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
      </form>
    </StyledUserSetupFormWrapper>
  );
};

export default WorkHours;
