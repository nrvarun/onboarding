import React from "react";
import { StyledTaskHeader, StyledTaskWrapper } from "./taskswrapper.style";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const TasksWrapper = ({ title, children }: Props) => {
  return (
    <StyledTaskWrapper>
      <StyledTaskHeader>
        <h2>{title}</h2>
      </StyledTaskHeader>
      {children}
    </StyledTaskWrapper>
  );
};

export default TasksWrapper;
