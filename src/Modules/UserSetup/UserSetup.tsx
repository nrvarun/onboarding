import { Container, Step, StepLabel, Stepper } from "@mui/material";
import AppLayout from "Layout/AppLayout";
import { useState } from "react";
import Bank from "./Bank";
import Company from "./Company";
import Conditions from "./Conditions";
import Holidays from "./Holidays";
import Invoice from "./Invoice";
import LeavePolicy from "./LeavePolicy";
import SetupSuccess from "./SetupSuccess";
import Tasks from "./Tasks";
import {
  StyledUserSetupContent,
  StyledUserSetupWrapper,
} from "./usersetup.style";
import WorkHours from "./WorkHours";

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
  const [formStep, setFormStep] = useState(6);

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
    const actionProps = {
      activeStep: formStep,
      nextStep: nextFormStep,
      prevStep: prevFormStep,
      updateForm: updateUserForm,
    };

    switch (step) {
      case 0:
        return <Company {...actionProps} />;

      case 1:
        return <Bank {...actionProps} />;

      case 2:
        return <Invoice {...actionProps} />;

      case 3:
        return <Conditions {...actionProps} />;

      case 4:
        return <Tasks {...actionProps} />;

      case 5:
        return <WorkHours {...actionProps} />;

      case 6:
        return <LeavePolicy {...actionProps} />;

      case 7:
        return <Holidays {...actionProps} />;

      case 8:
        return <SetupSuccess />;

      default:
        return <Company {...actionProps} />;
    }
  };

  return (
    <AppLayout fluidHeader={true} firstTimeUser>
      <Container>
        <StyledUserSetupWrapper>
          <StyledUserSetupContent>
            <Stepper
              className="custom-stepper"
              alternativeLabel
              activeStep={formStep}
            >
              {steps.map((label, index) => (
                <Step
                  key={label}
                  className={
                    index + 1 === formStep ? "custom-current-step" : ""
                  }
                >
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
