import { CheckBox, CheckCircle } from "@mui/icons-material";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { StyledFormCTAOutlined } from "Styles/Global";
import TopBanner from "../TopBanner";
import {
  StyledFormCTA,
  StyledFormFieldDivider,
  StyledFormFieldError,
  StyledFormFieldItem,
  StyledTermsContent,
  StyledTermsContentScroller,
  StyledTermsHeader,
  StyledTermsWrapper,
  StyledUserSetupFormWrapper,
} from "../usersetup.style";

export type FormStepProps = {
  activeStep: number;
  nextStep: () => void;
  updateForm: (values: any) => void;
  prevStep: () => void;
};

const Conditions = ({ prevStep, nextStep, updateForm }: FormStepProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      singleCheckbox: false,
      invoiceTemplate: false,
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
            <TopBanner title="Please review and update the terms and conditions which will be shown to your customer. They have to accept them to use the HiKi mobile app" />
            <StyledTermsWrapper>
              <StyledTermsHeader>
                <p>Mention terms and conditions below</p>
              </StyledTermsHeader>
              <StyledTermsContent>
                <StyledTermsContentScroller>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. The
                    standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.{" "}
                  </p>
                </StyledTermsContentScroller>

                <Controller
                  name="invoiceTemplate"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <>
                      <FormControlLabel
                        checked={field.value}
                        control={<Checkbox {...field} />}
                        label="I agree with the Terms and Conditions"
                      />
                      {fieldState.error && fieldState.invalid && (
                        <StyledFormFieldError>
                          Please accept the conditions
                        </StyledFormFieldError>
                      )}
                    </>
                  )}
                />
              </StyledTermsContent>
            </StyledTermsWrapper>

            <StyledFormFieldDivider />

            <Grid container spacing={2}>
              <Grid item xs={6}>
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

export default Conditions;
