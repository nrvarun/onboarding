import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledUserSetupWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 140px 0;
`;

export const StyledUserSetupContent = styled.section`
  background: #ffffff;
  box-shadow: 0px 6px 32px rgba(0, 82, 204, 0.05);
  border-radius: 8px;
  padding: 32px;
  margin: auto;
  width: 100%;
`;

export const StyledUserSetupFormWrapper = styled.div`
  padding: 60px 100px;
`;

export const StyledFormCTA = styled(Button)`
  &,
  &:hover {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    background: #0052cc;
    border-radius: 8px;
    padding: 16px 18px;
    border: none;
    cursor: pointer;
  }
`;

export const StyledFormFieldItem = styled.div`
  margin: 0 0 32px 0;
`;

export const StyledFormFieldHeading = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #000000;
  margin: 0 0 32px 0;
`;

export const StyledFormFieldDivider = styled.div`
  background: rgba(0, 82, 204, 0.4);
  opacity: 0.2;
  border-radius: 1.5px;
  height: 4px;
  width: 100%;
  display: block;
  margin: 48px 0 32px 0;
`;

export const StyledFormInvoiceItem = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(136, 136, 136, 0.2);
  border-radius: 8px 8px 0 0;
  padding: 16px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const StyledFormInvoiceItemContent = styled.div`
  padding: 24px 32px;
  border: 1px solid rgba(136, 136, 136, 0.2);
  border-radius: 0 0 8px 8px;

  p {
    margin: 0;
    text-align: right;
    font-weight: 600;
    font-size: 15px;
    line-height: 150%;
  }
`;

export const StyledTermsWrapper = styled.div`
  background: #ffffff;
  border: 1px solid rgba(136, 136, 136, 0.4);
  border-radius: 8px;
`;

export const StyledTermsHeader = styled.header`
  background: #ffffff;
  border: 1px solid rgba(136, 136, 136, 0.4);
  border-radius: 8px 8px 0px 0px;
  padding: 16px;
  background: #f2f9ff;

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #1c1c1c;
    margin: 0;
  }
`;

export const StyledTermsContent = styled.div`
  background: #ffffff;
  border: 1px solid rgba(136, 136, 136, 0.4);
  border-radius: 0px 0px 8px 8px;
  padding: 16px;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #1c1c1c;
  }
`;

export const StyledTermsContentScroller = styled.div`
  height: 192px;
  overflow: auto;
`;

export const StyledFormFieldError = styled.p`
  font-weight: 700 !important;
  font-size: 14px !important;
  line-height: 25px !important;
  color: #d32f2f !important;
  margin: 0 0 12px 0;
`;

export const StyledWorkHoursWrapper = styled.section`
  background: #ffffff;
  padding: 36px 56px;
  border: 1px solid rgba(136, 136, 136, 0.2);
  border-radius: 8px;
`;

export const StyledLeaveDaysWrapper = styled(StyledWorkHoursWrapper)`
  padding: 36px 120px;
`;

export const StyledWorkHoursHeading = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #1c1c1c;
  margin: 0 0 48px 0;
`;

export const StyledFormSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledWorkFieldTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1c1c1c;
`;

export const StyledWorkFieldSelectTitle = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #1c1c1c;
  margin: 0 0 8px 0;

  span {
    color: #eb4747;
  }
`;

export const StyledHolidayWrapper = styled.div`
  position: relative;
`;

export const StyledHolidayList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const StyledHolidayListItem = styled.li`
  margin: 0 0 24px 0;
`;

export const StyledSuccessWrapper = styled.section`
  padding: 16px;

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #000000;
  }

  img {
    width: 56px;
    height: 56px;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #1c1c1c;
    margin: 0 0 24px 0;
  }
`;

export const StyledBranchList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 48px 0 0 0;

  li {
    margin: 0 0 16px 0;

    &:last-child {
      margin: 0 0 48px 0;
    }
  }
`;

export const StyledUserSetupDeleteBtn = styled(Button)`
  background: rgba(0, 82, 204, 0.1);
  border: 1px solid #0052cc;
  border-radius: 4px;
  padding: 8px;
  min-width: 24px;
  margin: 8px 0 12px 0;
`;

export const StyledCompanyLogoUploadWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  max-width: 183px;
  max-height: 183px;
  margin: 0 auto;
`;

export const StyledCompanyLogoUploadItem = styled.div`
  max-width: 180px;
`;

export const StyledCompanyLogoUploadContent = styled.div`
  padding: 70px;
  background: #f8fcff;
  opacity: 0.7;
  border: 0.957265px dashed rgba(136, 136, 136, 0.4);
  border-radius: 50%;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledCompanyLogoUploadAddBtn = styled(Button)`
  &,
  &:hover {
    position: absolute;
    top: 10px;
    right: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    min-width: 40px;
    background: #0052cc;

    input {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
    }

    svg {
      fill: #ffffff;
    }
  }
`;

export const StyledUserAvatarWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  width: 183px;
  height: 183px;
  margin: 0 auto;

  img {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const StyledUserAvatarImage = styled.div`
  overflow: hidden;
`;
