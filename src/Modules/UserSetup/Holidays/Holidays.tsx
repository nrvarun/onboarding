import { Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { StyledFormCTA, StyledFormCTAPrev } from "Styles/Global";
import {
  StyledFormFieldDivider,
  StyledHolidayList,
  StyledHolidayListItem,
  StyledHolidayWrapper,
  StyledUserSetupFormWrapper,
} from "../usersetup.style";
import HolidayItem from "./HolidayItem";

export type FormStepProps = {
  activeStep: number;
  nextStep: () => void;
  updateForm: (values: any) => void;
};

const Holidays = ({ activeStep, nextStep, updateForm }: FormStepProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      holiday1Date: "",
      holiday1Name: "",
      holiday2Date: "",
      holiday2Name: "",
    },
    mode: "all",
  });

  const onSubmit = (values: any) => {
    updateForm(values);
    nextStep();
  };

  const onDelete = () => {
    console.log("Deleted");
  };

  return (
    <StyledUserSetupFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <StyledHolidayWrapper>
              <StyledHolidayList>
                <StyledHolidayListItem>
                  <HolidayItem id={1} onDelete={onDelete} control={control} />
                </StyledHolidayListItem>
                <StyledHolidayListItem>
                  <HolidayItem id={2} onDelete={onDelete} control={control} />
                </StyledHolidayListItem>
              </StyledHolidayList>
            </StyledHolidayWrapper>
          </Grid>
        </Grid>
        <StyledFormFieldDivider />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StyledFormCTAPrev>
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
            </StyledFormCTAPrev>
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
      </form>
    </StyledUserSetupFormWrapper>
  );
};

export default Holidays;
