import { Button } from "@mui/material";
import styled from "styled-components";

type FormCTAType = {
  fullWidth?: boolean;
  minwidth?: string;
};

export const StyledFormField = styled.div`
  margin: 0 0 2rem 0;
`;

export const StyledFormCTA = styled(Button)<FormCTAType>`
  &,
  &:hover {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    background: #0052cc;
    border-radius: 8px;
    padding: 16px 24px;
    min-width: ${(p) => (p.minwidth ? p.minwidth : "132px")};
    width: ${(p) => (p.fullWidth ? "100%" : "auto")};
    border: none;
    cursor: pointer;
    text-align: center;

    svg {
      margin: 0 0 0 8px;
    }
  }
`;

export const StyledFormCTAOutlined = styled(StyledFormCTA)`
  &,
  &:hover {
    color: #0052cc;
    background: transparent;
    border: 1px solid #0052cc;

    svg {
      margin: 0 8px 0 0;
    }
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
