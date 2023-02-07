import {
  ChevronRight,
  DeleteOutlined,
  DragHandleOutlined,
  EditOutlined,
} from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { StyledTaskEntryWrapper } from "./taskentry.style";

type Props = {
  title: string;
  onDelete?: () => void;
  onEdit?: () => void;
  selected?: boolean;
};

const TaskEntry = ({ selected = false, title }: Props) => {
  return (
    <StyledTaskEntryWrapper selected={selected}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <IconButton>
            <DragHandleOutlined htmlColor={selected ? "#0052CC" : ""} />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <p>{title}</p>
        </Grid>
        {selected ? (
          <>
            <Grid item xs={2}>
              <IconButton>
                <EditOutlined htmlColor="#0052CC" fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item xs={2}>
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
