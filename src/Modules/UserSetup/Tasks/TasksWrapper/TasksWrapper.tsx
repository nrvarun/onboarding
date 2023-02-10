import {
  AddCircleOutlined,
  CancelOutlined,
  CheckCircleOutlineOutlined,
  RemoveCircleOutline,
} from "@mui/icons-material";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import { StyledCustomInputLabel } from "components/CustomInputLabel/custominputlabel.style";
import { log } from "console";
import { StyledFormFieldItem } from "Modules/UserSetup/usersetup.style";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyledTaskAddBtn } from "../tasks.style";
import { StyledTaskHeader, StyledTaskWrapper } from "./taskswrapper.style";

type Props = {
  title: string;
  taskTitle: string;
  type: string;
  children?: React.ReactNode;
};

const TasksWrapper = ({ title, children, taskTitle, type }: Props) => {
  const [toggleAddTask, setToggleAddTask] = useState(false);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      title: "",
    },
    mode: "all",
  });

  const toggleMainTask = () => {
    setToggleAddTask((state) => !state);
  };

  const onSubmit = (values: any) => {
    console.log("add new task");
  };

  return (
    <StyledTaskWrapper>
      <StyledTaskHeader>
        <h2>{title}</h2>
      </StyledTaskHeader>
      <StyledTaskAddBtn onClick={toggleMainTask}>
        <AddCircleOutlined fontSize="small" /> {taskTitle || "Add task"}
      </StyledTaskAddBtn>
      {toggleAddTask && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledFormFieldItem>
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <Grid container spacing={1} marginTop={1}>
                  <Grid item xs={8}>
                    <TextField
                      style={{
                        width: "100%",
                      }}
                      helperText={fieldState.error && "Name is required"}
                      error={fieldState.error ? true : false}
                      placeholder="Enter name"
                      {...field}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <IconButton
                      color="primary"
                      style={{
                        minWidth: "auto",
                      }}
                    >
                      <AddCircleOutlined />
                    </IconButton>
                    <IconButton
                      color="primary"
                      onClick={toggleMainTask}
                      style={{
                        minWidth: "auto",
                      }}
                    >
                      <CancelOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              )}
            />
          </StyledFormFieldItem>
        </form>
      )}
      {children}
    </StyledTaskWrapper>
  );
};

export default TasksWrapper;
