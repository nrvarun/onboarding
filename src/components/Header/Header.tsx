import { Avatar, Badge, Button, Container, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";

import {
  StyledHeaderFlexCenterWrapper,
  StyledHeaderAvatarContent,
  StyledHeaderWrapper,
  StyledNotificationBtn,
} from "./header.style";

type Props = {
  firstTimeUser?: boolean;
  fullWidth?: boolean;
};

const Header = ({ firstTimeUser, fullWidth = false }: Props) => {
  return (
    <StyledHeaderWrapper>
      <Container maxWidth={fullWidth ? false : "xl"}>
        <Grid container spacing="2">
          <Grid item xs={3} alignContent="center">
            <img src="/images/logo.svg" alt="hiki" />
          </Grid>
          <Grid item xs={9} textAlign="right">
            <StyledHeaderFlexCenterWrapper>
              {!firstTimeUser && (
                <StyledNotificationBtn
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <img src="/images/icons/bell.svg" alt="notifications" />
                  </Badge>
                </StyledNotificationBtn>
              )}
              <StyledHeaderFlexCenterWrapper>
                <Avatar
                  sx={{ bgcolor: blue[300] }}
                  alt="Remy Sharp"
                  src="/images/avatar.png"
                >
                  B
                </Avatar>
                <StyledHeaderAvatarContent>
                  <h3>Andrew</h3>
                  <p>
                    Last seen: <span>12 Nov 2022</span>
                  </p>
                </StyledHeaderAvatarContent>
              </StyledHeaderFlexCenterWrapper>
            </StyledHeaderFlexCenterWrapper>
          </Grid>
        </Grid>
      </Container>
    </StyledHeaderWrapper>
  );
};

export default Header;
