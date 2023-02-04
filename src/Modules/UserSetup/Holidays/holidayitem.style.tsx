import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledHolidayItemWrapper = styled.article`
  padding: 36px 28px 16px;
  background: #f8fcff;
  border: 1px solid rgba(136, 136, 136, 0.2);
  border-radius: 8px;

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #1c1c1c;
    margin: 0 0 20px 0;
  }
`;

export const StyledHolidayDeleteBtn = styled(Button)`
  background: rgba(0, 82, 204, 0.1);
  border: 1px solid #0052cc;
  border-radius: 4px;
  padding: 8px;
  min-width: 32px;
  margin: 0 0 16px 0;
`;
