import { DeleteOutlined } from "@mui/icons-material";
import { Grid, Switch, TextField } from "@mui/material";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import CustomInputLabel from "components/CustomInputLabel";
import { StyledCustomInputLabel } from "components/CustomInputLabel/custominputlabel.style";
import { Controller } from "react-hook-form";
import {
  StyledFormSwitchWrapper,
  StyledUserSetupDeleteBtn,
} from "../usersetup.style";

import { StyledHolidayItemWrapper } from "./holidayitem.style";

type Props = {
  id: number;
  onDelete?: () => void;

  control?: any;
  item?: object;
};

const HolidayItem = ({ id, onDelete, control }: Props) => {
  return (
    <StyledHolidayItemWrapper>
      <Grid container spacing={2} alignItems="end">
        <Grid item xs={12}>
          <h1>{`Holiday - ${id + 1}`}</h1>
        </Grid>
        <Grid item xs={3}>
          <CustomInputLabel text="Day" />
          <Controller
            name={`holiday.${id}.day`}
            control={control}
            render={({ field, fieldState }) => (
              <DesktopDatePicker
                label={""}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={fieldState.error ? true : false}
                    helperText={fieldState.error && "Date is required"}
                  />
                )}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={3}>
          <Controller
            name={`holiday.${id}.name`}
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <>
                <StyledCustomInputLabel>
                  Name of the Holiday
                </StyledCustomInputLabel>
                <TextField
                  style={{
                    width: "100%",
                  }}
                  helperText={fieldState.error && "Holiday name is required"}
                  error={fieldState.error ? true : false}
                  {...field}
                />
              </>
            )}
          />
        </Grid>
        <Grid item xs={2}>
          <Controller
            name={`mandatory${id}`}
            control={control}
            defaultValue={false}
            render={({ field, fieldState }) => {
              return (
                <StyledFormSwitchWrapper>
                  <Switch {...field} />
                  <p>Mandatory</p>
                </StyledFormSwitchWrapper>
              );
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Controller
            name={`optional${id}`}
            control={control}
            defaultValue={false}
            render={({ field, fieldState }) => {
              return (
                <StyledFormSwitchWrapper>
                  <Switch {...field} />
                  <p>Optional</p>
                </StyledFormSwitchWrapper>
              );
            }}
          />
        </Grid>
        <Grid item xs={2} justifyContent="center" alignItems="center">
          <StyledUserSetupDeleteBtn onClick={onDelete}>
            <DeleteOutlined />
          </StyledUserSetupDeleteBtn>
        </Grid>
      </Grid>
    </StyledHolidayItemWrapper>
  );
};

export default HolidayItem;
