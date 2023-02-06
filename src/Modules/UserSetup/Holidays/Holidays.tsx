import { Grid } from "@mui/material";

import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { StyledFormCTA, StyledFormCTAOutlined } from "Styles/Global";
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

type FormValues = {
  holiday: {
    date: string;
    name: string;
    isMandatory: boolean;
    isOptional: boolean;
  }[];
};

const Holidays = ({ activeStep, nextStep, updateForm }: FormStepProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      holiday: [{ date: "", name: "", isMandatory: false, isOptional: false }],
    },
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "holiday",
  });

  const onSubmit = (values: any) => {
    updateForm(values);
    nextStep();
  };

  return (
    <StyledUserSetupFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <StyledHolidayWrapper>
              <StyledHolidayList>
                {/* <StyledHolidayListItem>
                  <HolidayItem id={1} />
                </StyledHolidayListItem> */}
                {fields.map((field, index) => {
                  return (
                    <StyledHolidayListItem key={field.id}>
                      <HolidayItem
                        item={field}
                        id={index}
                        onDelete={remove}
                        control={control}
                      />
                    </StyledHolidayListItem>
                  );
                })}
              </StyledHolidayList>
            </StyledHolidayWrapper>
          </Grid>
          <Grid item xs={12}>
            <StyledFormCTAOutlined
              minwidth="auto"
              type="button"
              onClick={() => {
                append({
                  date: "",
                  name: "",
                  isMandatory: false,
                  isOptional: false,
                });
              }}
            >
              + Add
            </StyledFormCTAOutlined>
          </Grid>
        </Grid>
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
      </form>
    </StyledUserSetupFormWrapper>
  );
};

export default Holidays;
