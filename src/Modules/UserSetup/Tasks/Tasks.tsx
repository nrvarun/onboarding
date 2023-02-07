import { AddCircleOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { StyledFormCTA, StyledFormCTAOutlined } from "Styles/Global";

import {
  StyledFormFieldDivider,
  StyledUserSetupFormWrapper,
} from "../usersetup.style";
import TaskEntry from "./TaskEntry";
import { StyledTaskAddBtn, StyledTasksList } from "./tasks.style";
import TasksWrapper from "./TasksWrapper";

export type FormStepProps = {
  activeStep: number;
  nextStep: () => void;
  updateForm: (values: any) => void;
};

const Tasks = (props: FormStepProps) => {
  return (
    <StyledUserSetupFormWrapper fullWidth>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <TasksWrapper title="Main Task">
            <StyledTaskAddBtn>
              <AddCircleOutlined fontSize="small" /> Add New Main task
            </StyledTaskAddBtn>
            <StyledTasksList>
              <li>
                <TaskEntry title="Service Type" selected />
              </li>
              <li>
                <TaskEntry title="Service Type" />
              </li>
              <li>
                <TaskEntry title="Service Type" />
              </li>
            </StyledTasksList>
          </TasksWrapper>
        </Grid>
        <Grid item xs={4}>
          <TasksWrapper title="Sub Task">
            <StyledTaskAddBtn>
              <AddCircleOutlined fontSize="small" /> Add New Sub task
            </StyledTaskAddBtn>
            <StyledTasksList>
              <li>
                <TaskEntry title="Service Type" selected />
              </li>
              <li>
                <TaskEntry title="Service Type" />
              </li>
              <li>
                <TaskEntry title="Service Type" />
              </li>
            </StyledTasksList>
          </TasksWrapper>
        </Grid>
        <Grid item xs={4}>
          <TasksWrapper title="Sub-Sub Task">
            <StyledTaskAddBtn>
              <AddCircleOutlined fontSize="small" /> Add New Sub-Sub task
            </StyledTaskAddBtn>
            <StyledTasksList>
              <li>
                <TaskEntry title="Service Type" selected />
              </li>
              <li>
                <TaskEntry title="Service Type" />
              </li>
              <li>
                <TaskEntry title="Service Type" />
              </li>
            </StyledTasksList>
          </TasksWrapper>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10}>
          <StyledFormFieldDivider />
        </Grid>
        <Grid item xs={5}>
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
        <Grid item xs={5}>
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
    </StyledUserSetupFormWrapper>
  );
};

export default Tasks;
