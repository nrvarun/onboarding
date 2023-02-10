import {
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { StyledCustomInputLabel } from "components/CustomInputLabel/custominputlabel.style";

import { useForm, Controller } from "react-hook-form";
import { StyledFormCTA, StyledFormCTAOutlined } from "Styles/Global";
import TopBanner from "../TopBanner";
import {
  StyledFormFieldDivider,
  StyledFormFieldItem,
  StyledUserSetupFormWrapper,
} from "../usersetup.style";

export type FormStepProps = {
  activeStep: number;
  nextStep: () => void;
  updateForm: (values: any) => void;
  prevStep: () => void;
};

const Bank = ({ activeStep, nextStep, updateForm }: FormStepProps) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      bank: "",
      accountName: "",
      accountNumber: "",
      confirmAccountNumber: "",
      ifsc: "",
      acType: "current",
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
            <TopBanner title="The bank details will be shared with all your customer" />
            <StyledFormFieldItem>
              <Controller
                name="bank"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledCustomInputLabel>Bank*</StyledCustomInputLabel>
                    <TextField
                      style={{
                        width: "100%",
                      }}
                      helperText={fieldState.error && "Bank name is required"}
                      error={fieldState.error ? true : false}
                      placeholder="Select Bank"
                      {...field}
                    />
                  </>
                )}
              />
            </StyledFormFieldItem>
            <StyledFormFieldItem>
              <Controller
                name="accountName"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledCustomInputLabel>
                      Account Name*
                    </StyledCustomInputLabel>
                    <TextField
                      style={{
                        width: "100%",
                      }}
                      helperText={
                        fieldState.error && "Account Name is required"
                      }
                      error={fieldState.error ? true : false}
                      placeholder="Account Name..."
                      {...field}
                    />
                  </>
                )}
              />
            </StyledFormFieldItem>

            <StyledFormFieldItem>
              <Controller
                name="accountNumber"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledCustomInputLabel>
                      Account Number*
                    </StyledCustomInputLabel>
                    <TextField
                      style={{
                        width: "100%",
                      }}
                      helperText={
                        fieldState.error && "Account Number is required"
                      }
                      error={fieldState.error ? true : false}
                      placeholder="As per records"
                      {...field}
                    />
                  </>
                )}
              />
            </StyledFormFieldItem>
            <StyledFormFieldItem>
              <Controller
                name="confirmAccountNumber"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledCustomInputLabel>
                      Confirm Account Number *
                    </StyledCustomInputLabel>
                    <TextField
                      style={{
                        width: "100%",
                      }}
                      helperText={
                        fieldState.error &&
                        "Account Number is not Same, please check!"
                      }
                      error={fieldState.error ? true : false}
                      placeholder="Re-enter the account number"
                      {...field}
                    />
                  </>
                )}
              />
            </StyledFormFieldItem>
            <StyledFormFieldItem>
              <Controller
                name="ifsc"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledCustomInputLabel>IFSC Code*</StyledCustomInputLabel>
                    <TextField
                      style={{
                        width: "100%",
                      }}
                      helperText={fieldState.error && "IFSC Code is required"}
                      error={fieldState.error ? true : false}
                      placeholder="Account Number*"
                      {...field}
                    />
                  </>
                )}
              />
            </StyledFormFieldItem>

            <StyledFormFieldItem>
              <StyledCustomInputLabel>Account Type*</StyledCustomInputLabel>
              <Controller
                name="acType"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <RadioGroup row {...field}>
                    <FormControlLabel
                      value="current"
                      control={<Radio />}
                      label="Current"
                    />
                    <FormControlLabel
                      value="savings"
                      control={<Radio />}
                      label="Savings"
                    />
                  </RadioGroup>
                )}
              />
            </StyledFormFieldItem>

            <StyledFormFieldDivider />

            <Grid container spacing={2}>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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

export default Bank;
