import { DeleteOutlineOutlined } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import { StyledCustomInputLabel } from "components/CustomInputLabel/custominputlabel.style";
import React from "react";
import { Controller } from "react-hook-form";
import {
  StyledFormFieldItem,
  StyledUserSetupDeleteBtn,
} from "../usersetup.style";

type Props = {
  id: number;
  control: any;
  item: object;
  onDelete: () => void;
};

const BranchItem = ({ control, id, item, onDelete }: Props) => {
  return (
    <div>
      <StyledFormFieldItem>
        <Controller
          name={`branches.${id}.name`}
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <Grid container xs={12}>
              <Grid item xs={12}>
                <Grid container xs={12}>
                  <Grid item xs={6}>
                    <StyledCustomInputLabel>
                      Branch Name <span>*</span>
                    </StyledCustomInputLabel>
                  </Grid>
                  <Grid item xs={6} textAlign="right">
                    <StyledUserSetupDeleteBtn onClick={onDelete}>
                      <DeleteOutlineOutlined fontSize="small" />
                    </StyledUserSetupDeleteBtn>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{
                    width: "100%",
                  }}
                  helperText={fieldState.error && "Branch Name is required"}
                  error={fieldState.error ? true : false}
                  placeholder="Branch Name..."
                  {...field}
                />
              </Grid>
            </Grid>
          )}
        />
      </StyledFormFieldItem>
      <StyledFormFieldItem>
        <Controller
          name={`branches.${id}.address`}
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              style={{
                width: "100%",
              }}
              multiline
              rows={1}
              helperText={fieldState.error && "Branch Address is required"}
              error={fieldState.error ? true : false}
              placeholder="Branch Address*"
              {...field}
            />
          )}
        />
      </StyledFormFieldItem>
    </div>
  );
};

export default BranchItem;
