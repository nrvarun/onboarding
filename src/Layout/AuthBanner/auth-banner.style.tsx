import styled from "styled-components";

export const StyledAuthBannerContainer = styled.section`
  height: 100vh;
  background-color: #1062dd;
  display: flex;
  position: relative;
`;

export const StyledAuthBannerShape = styled.img`
  position: absolute;
  top: -5%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 105%;
  width: 100%;
  z-index: 0;
`;

export const StyledAuthBannerContent = styled.div`
  margin: auto;
  text-align: center;

  h1 {
    color: #ffffff;
    font-weight: 800;
    font-size: 30px;
    line-height: 38px;
  }
`;

export const StyledAuthBannerImage = styled.img`
  max-height: 350px;
`;
