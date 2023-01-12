import {
  StyledAuthBannerContainer,
  StyledAuthBannerContent,
  StyledAuthBannerImage,
  StyledAuthBannerShape,
} from "./auth-banner.style";

type Props = {};

const AuthBanner = (props: Props) => {
  return (
    <StyledAuthBannerContainer>
      <StyledAuthBannerShape src="/images/auth-bg-shape.svg" />
      <StyledAuthBannerContent>
        <h1>Try Hiki free for 30 days</h1>
        <StyledAuthBannerImage
          src="/images/auth-banner.png"
          alt="banner chart"
        />
      </StyledAuthBannerContent>
    </StyledAuthBannerContainer>
  );
};

export default AuthBanner;
