import {
  CheckCircle,
  ChevronRight,
  DeleteOutlined,
  DragHandleOutlined,
  EditOutlined,
} from "@mui/icons-material";
import { Grid, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import {
  StyledTaskEditWrapper,
  StyledTaskEntryWrapper,
} from "./taskentry.style";

type Props = {
  id: string;
  index: number;
  title: string;
  onDelete?: () => void;
  onEdit?: () => void;
  selected?: boolean;
};

const TaskEntry = ({ selected = false, title = "", id, index }: Props) => {
  const [isEdit, setEdit] = useState(false);
  const [formTitle, setTitle] = useState(title);

  const toggleEdit = () => {
    setEdit((state) => !state);
  };

  const handleFieldChange = (e: any) => {
    setTitle(e.target.value);
  };

  return (
    <StyledTaskEntryWrapper selected={selected}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <IconButton>
            <DragHandleOutlined htmlColor={selected ? "#0052CC" : ""} />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2} alignItems="center">
            <StyledTaskEditWrapper>
              {!isEdit ? (
                <p title={title}>{title}</p>
              ) : (
                <TextField
                  required
                  name="task-name"
                  variant="standard"
                  onChange={handleFieldChange}
                  value={formTitle}
                />
              )}
            </StyledTaskEditWrapper>
          </Grid>
        </Grid>
        {selected ? (
          <>
            <Grid item xs={1.5} paddingTop={0}>
              {isEdit ? (
                <IconButton onClick={toggleEdit}>
                  <CheckCircle htmlColor="#0052CC" fontSize="small" />
                </IconButton>
              ) : (
                <IconButton onClick={toggleEdit}>
                  <EditOutlined htmlColor="#0052CC" fontSize="small" />
                </IconButton>
              )}
            </Grid>
            <Grid item xs={1.5}>
              <IconButton>
                <DeleteOutlined htmlColor="#0052CC" fontSize="small" />
              </IconButton>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={2}></Grid>
            <Grid item xs={2} justifyContent="center">
              <IconButton>
                <ChevronRight fontSize="small" />
              </IconButton>
            </Grid>
          </>
        )}
      </Grid>
    </StyledTaskEntryWrapper>
  );
};

export default TaskEntry;
