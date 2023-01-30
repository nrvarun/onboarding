import { Container, Step, StepLabel, Stepper } from "@mui/material";
import AppLayout from "Layout/AppLayout";
import { useState } from "react";
import Bank from "./Bank";
import Company from "./Company";
import Invoice from "./Invoice";
import {
  StyledUserSetupContent,
  StyledUserSetupWrapper,
} from "./usersetup.style";

type Props = {};

const steps = [
  "Company Details",
  "Bank Details",
  "Invoice",
  "Conditions",
  "Tasks",
  "Work Hours",
  "Leave Policy",
  "Holidays",
];

const UserSetup = (props: Props) => {
  const [formStep, setFormStep] = useState(2);

  const [formValues, setFormValues] = useState({});

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  const updateUserForm = (values: any) => {
    console.log(values);

    setFormValues((prevValues: any) => ({
      ...prevValues,
      ...values,
    }));
  };

  const renderFormStep = (step: Number) => {
    switch (step) {
      case 0:
        return (
          <Company
            activeStep={formStep}
            nextStep={nextFormStep}
            updateForm={updateUserForm}
          />
        );

      case 1:
        return (
          <Bank
            activeStep={formStep}
            nextStep={nextFormStep}
            updateForm={updateUserForm}
          />
        );

      case 2:
        return (
          <Invoice
            activeStep={formStep}
            nextStep={nextFormStep}
            updateForm={updateUserForm}
          />
        );

      default:
        return (
          <Company
            activeStep={formStep}
            nextStep={nextFormStep}
            updateForm={updateUserForm}
          />
        );
    }
  };

  return (
    <AppLayout fluidHeader={true} firstTimeUser>
      <Container>
        <StyledUserSetupWrapper>
          <StyledUserSetupContent>
            <Stepper alternativeLabel activeStep={0}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {renderFormStep(formStep)}
          </StyledUserSetupContent>
        </StyledUserSetupWrapper>
      </Container>
    </AppLayout>
  );
};

export default UserSetup;
