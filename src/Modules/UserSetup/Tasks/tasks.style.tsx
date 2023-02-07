import styled from "styled-components";
import { StyledFormCTA } from "Styles/Global";

export const StyledTasksList = styled.ul`
  padding: 0;
  margin: 16px 0 0 0;
  list-style: none;
  background: #f8fcff;
  padding: 12px 8px;

  li {
    margin: 0 0 12px 0;
  }
`;

export const StyledTaskAddBtn = styled(StyledFormCTA)`
  &,
  &:hover {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    margin: 12px 0 0 0;
    width: 100%;
    padding: 8px;

    svg {
      margin: 0 8px 0 0;
    }
  }
`;
