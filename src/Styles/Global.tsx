import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledFormField = styled.div`
  margin: 0 0 2rem 0;
`;

export const StyledFormCTA = styled(Button)`
  &,
  &:hover {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    background: #0052cc;
    border-radius: 4px;
    padding: 16px 18px;
    width: 100%;
    border: none;
    cursor: pointer;
  }
`;

export const StyledTermsText = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #888888 !important;
  text-align: right;

  span {
    font-weight: 600;
    color: #3554d1;
    text-decoration: underline;
  }
`;

export const StyledSignupText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #888888 !important;
  text-align: center;

  span {
    margin: 0 4px;
    color: #3554d1 !important;
    text-decoration: underline;
  }
`;
