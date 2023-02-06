import {
  AddAPhotoOutlined,
  RemoveCircleOutlineRounded,
} from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import { StyledCustomInputLabel } from "components/CustomInputLabel/custominputlabel.style";
import { useState } from "react";

import { useForm, Controller, useFieldArray } from "react-hook-form";
import { StyledFormCTAOutlined } from "Styles/Global";
import {
  StyledBranchList,
  StyledCompanyLogoUploadAddBtn,
  StyledCompanyLogoUploadContent,
  StyledCompanyLogoUploadWrapper,
  StyledFormCTA,
  StyledFormFieldHeading,
  StyledFormFieldItem,
  StyledUserAvatarImage,
  StyledUserAvatarWrapper,
  StyledUserSetupFormWrapper,
} from "../usersetup.style";
import BranchItem from "./BranchItem";

export type FormStepProps = {
  activeStep: number;
  nextStep: () => void;
  updateForm: (values: any) => void;
};

type FormValues = {
  gstNumber: "";
  companyName: "";
  mainBranchName: "";
  mainBranchAddress: "";
  branches: {
    name: "";
    address: "";
  }[];
};

const Company = ({ activeStep, nextStep, updateForm }: FormStepProps) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      companyName: "",
      mainBranchName: "",
      mainBranchAddress: "",
      gstNumber: "",
      branches: [{ name: "", address: "" }],
    },
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "branches",
  });

  const onSubmit = (values: any) => {
    updateForm(values);
    nextStep();
  };

  const resetImage = () => {
    setSelectedImage(null);
  };

  return (
    <StyledUserSetupFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={12}>
          <Grid item xs={4}>
            <StyledCompanyLogoUploadWrapper>
              {selectedImage ? (
                <StyledUserAvatarWrapper>
                  <StyledUserAvatarImage>
                    <img src={selectedImage} alt="user avatar" />
                  </StyledUserAvatarImage>
                  <StyledCompanyLogoUploadAddBtn onClick={resetImage}>
                    <RemoveCircleOutlineRounded />
                  </StyledCompanyLogoUploadAddBtn>
                </StyledUserAvatarWrapper>
              ) : (
                <StyledCompanyLogoUploadContent>
                  <img src="/images/upload-logo.png" alt="company logo" />
                  <StyledCompanyLogoUploadAddBtn>
                    <input
                      type="file"
                      accept="image/*"
                      name="myImage"
                      onChange={(event: any) => {
                        setSelectedImage(
                          URL.createObjectURL(event.target.files[0])
                        );
                      }}
                    />
                    <AddAPhotoOutlined />
                  </StyledCompanyLogoUploadAddBtn>
                </StyledCompanyLogoUploadContent>
              )}
            </StyledCompanyLogoUploadWrapper>
          </Grid>
          <Grid item xs={8}>
            <StyledFormFieldItem>
              <Controller
                name="companyName"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledCustomInputLabel>
                      Company Name <span>*</span>
                    </StyledCustomInputLabel>
                    <TextField
                      style={{
                        width: "100%",
                      }}
                      helperText={
                        fieldState.error && "Company name is required"
                      }
                      error={fieldState.error ? true : false}
                      placeholder="Company Name..."
                      {...field}
                    />
                  </>
                )}
              />
            </StyledFormFieldItem>
            <StyledFormFieldItem>
              <Controller
                name="gstNumber"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledCustomInputLabel>
                      GST Number <span>*</span>
                    </StyledCustomInputLabel>
                    <TextField
                      style={{
                        width: "100%",
                      }}
                      helperText={fieldState.error && "GST Number is required"}
                      error={fieldState.error ? true : false}
                      placeholder="GST Number..."
                      {...field}
                    />
                  </>
                )}
              />
            </StyledFormFieldItem>
            <StyledFormFieldHeading>
              Locations <span>*</span>
            </StyledFormFieldHeading>
            <StyledFormFieldItem>
              <Controller
                name="mainBranchName"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <>
                    <StyledCustomInputLabel>
                      Main Branch Name <span>*</span>
                    </StyledCustomInputLabel>
                    <TextField
                      style={{
                        width: "100%",
                      }}
                      helperText={fieldState.error && "Branch Name is required"}
                      error={fieldState.error ? true : false}
                      placeholder="Branch Name..."
                      {...field}
                    />
                  </>
                )}
              />
            </StyledFormFieldItem>
            <StyledFormFieldItem>
              <Controller
                name="mainBranchAddress"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <TextField
                    style={{
                      width: "100%",
                    }}
                    multiline
                    rows={1}
                    helperText={
                      fieldState.error && "Branch Address is required"
                    }
                    error={fieldState.error ? true : false}
                    placeholder="Branch Address*"
                    {...field}
                  />
                )}
              />
            </StyledFormFieldItem>

            <StyledBranchList>
              {fields.map((field, index) => {
                return (
                  <li key={field.id}>
                    <BranchItem
                      item={field}
                      id={index}
                      onDelete={remove}
                      control={control}
                    />
                  </li>
                );
              })}
              <li>
                <StyledFormCTAOutlined
                  minwidth="auto"
                  fullWidth
                  type="button"
                  onClick={() => {
                    append({
                      name: "",
                      address: "",
                    });
                  }}
                >
                  + Add Branch
                </StyledFormCTAOutlined>
              </li>
            </StyledBranchList>

            <Grid container justifyContent="flex-end">
              <StyledFormCTA type="submit">
                Next
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
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
                </span>
              </StyledFormCTA>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </StyledUserSetupFormWrapper>
  );
};

export default Company;
