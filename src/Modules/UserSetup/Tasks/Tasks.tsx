import { AddCircleOutlined, Task } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { StyledFormCTA, StyledFormCTAOutlined } from "Styles/Global";

import {
  StyledFormFieldDivider,
  StyledUserSetupFormWrapper,
} from "../usersetup.style";
import TaskEntry from "./TaskEntry";
import { StyledTasksListWrapper } from "./tasks.style";
import TasksWrapper from "./TasksWrapper";

export type FormStepProps = {
  activeStep: number;
  nextStep: () => void;
  updateForm: (values: any) => void;
};

const grid = 8;

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const generateTasks = (type: string) => {
  let tasks = [];

  for (let i = 0; i < 10; i++) {
    tasks.push({
      id: `${i}`,
      title: `${type} task ${i + 1}`,
    });
  }

  return tasks;
};

const Tasks = (props: FormStepProps) => {
  const [mainTasks, setMainTasks] = useState(generateTasks("Main"));
  const [subTasks, setSubTasks] = useState(generateTasks("Sub"));
  const [subSubTasks, setSubSubTasks] = useState(generateTasks("Sub-sub"));

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    if (result.destination.index === result.source.index) {
      return;
    }

    const items = Array.from(mainTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMainTasks(items);
  }

  return (
    <StyledUserSetupFormWrapper fullWidth>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TasksWrapper
            title="Main Task"
            taskTitle="Add New Main task"
            type="main"
          >
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="mainList">
                {(provided) => (
                  <StyledTasksListWrapper>
                    <ul
                      className="mainList"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {mainTasks.map(({ id, title }, index) => {
                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <TaskEntry
                                  title={title}
                                  selected
                                  id={id}
                                  index={index}
                                />
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </ul>
                  </StyledTasksListWrapper>
                )}
              </Droppable>
            </DragDropContext>
          </TasksWrapper>
        </Grid>
        <Grid item xs={4}>
          <TasksWrapper
            title="Sub Task"
            taskTitle="Add New Sub Task"
            type="sub"
          >
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="subList">
                {(provided) => (
                  <StyledTasksListWrapper>
                    <ul
                      className="subList"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {subTasks.map(({ id, title }, index) => {
                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <TaskEntry
                                  title={title}
                                  selected
                                  id={id}
                                  index={index}
                                />
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </ul>
                  </StyledTasksListWrapper>
                )}
              </Droppable>
            </DragDropContext>
          </TasksWrapper>
        </Grid>
        <Grid item xs={4}>
          <TasksWrapper
            title="Sub-Sub Task"
            taskTitle="Add New Sub-Sub Task"
            type="Sub-Sub"
          >
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="subSubList">
                {(provided) => (
                  <StyledTasksListWrapper>
                    <ul
                      className="subSubList"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {subSubTasks.map(({ id, title }, index) => {
                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <TaskEntry
                                  title={title}
                                  selected
                                  id={id}
                                  index={index}
                                />
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </ul>
                  </StyledTasksListWrapper>
                )}
              </Droppable>
            </DragDropContext>
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
