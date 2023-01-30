import Header from "components/Header";
import React from "react";
import { StyledAppLayoutWrapper } from "./applayout.style";

type Props = {
  fluidHeader: boolean;
  firstTimeUser: boolean;
  children?: React.ReactNode;
};

const AppLayout = ({ fluidHeader, firstTimeUser, children }: Props) => {
  return (
    <StyledAppLayoutWrapper>
      <Header fullWidth={fluidHeader} firstTimeUser={firstTimeUser} />
      <div>{children}</div>
    </StyledAppLayoutWrapper>
  );
};

export default AppLayout;
