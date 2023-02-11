import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import { StyledCustomInputLabel } from "components/CustomInputLabel/custominputlabel.style";
import React from "react";
import {
  StyledFormFieldDivider,
  StyledFormFieldItem,
  StyledFormInvoiceItem,
  StyledFormInvoiceItemContent,
  StyledUserSetupFormWrapper,
} from "../usersetup.style";
import { useForm, Controller } from "react-hook-form";
import TopBanner from "../TopBanner";
import { StyledFormCTA, StyledFormCTAOutlined } from "Styles/Global";
import { CheckCircle } from "@mui/icons-material";

export type FormStepProps = {
  activeStep: number;
  nextStep: () => void;
  updateForm: (values: any) => void;
  prevStep: () => void;
};

const Invoice = ({ prevStep, nextStep, updateForm }: FormStepProps) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      invoiceTemplate: "template1",
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
            <TopBanner title="Choose an invoice template. This will be sent to all your customers." />
            <StyledFormFieldItem>
              <Controller
                name="invoiceTemplate"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Grid container width={"100%"}>
                    <RadioGroup
                      row
                      {...field}
                      style={{
                        width: "100%",
                      }}
                    >
                      <Grid item xs={6}>
                        <FormControlLabel
                          labelPlacement="top"
                          value="template1"
                          control={
                            <Radio
                              style={{
                                marginTop: -56,
                                marginRight: -80,
                              }}
                              checkedIcon={<CheckCircle />}
                            />
                          }
                          label={
                            <div>
                              <StyledFormInvoiceItem>
                                <img
                                  src="/images/invoice.png"
                                  alt="The first template"
                                />
                              </StyledFormInvoiceItem>
                              <StyledFormInvoiceItemContent>
                                <p>Template 1</p>
                              </StyledFormInvoiceItemContent>
                            </div>
                          }
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormControlLabel
                          labelPlacement="top"
                          value="template2"
                          control={
                            <Radio
                              style={{
                                marginTop: -56,
                                marginRight: -80,
                              }}
                              checkedIcon={<CheckCircle />}
                            />
                          }
                          label={
                            <div>
                              <StyledFormInvoiceItem>
                                <img
                                  src="/images/invoice.png"
                                  alt="The first template"
                                />
                              </StyledFormInvoiceItem>
                              <StyledFormInvoiceItemContent>
                                <p>Template 2</p>
                              </StyledFormInvoiceItemContent>
                            </div>
                          }
                        />
                      </Grid>
                    </RadioGroup>
                  </Grid>
                )}
              />
            </StyledFormFieldItem>

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

export default Invoice;
