import { StyledLogo } from "Layout/authlayout.style";
import React from "react";
import { Link } from "react-router-dom";
import {
  StyledSuccessCard,
  StyledSuccessCardContent,
  StyledSuccessContent,
  StyledSuccessWrapper,
} from "./regsuccess.style";

type Props = {};

const RegisterSuccess = (props: Props) => {
  return (
    <StyledSuccessWrapper>
      <StyledSuccessContent>
        <article>
          <StyledLogo src="/images/logo.svg" alt="logo" />
          <StyledSuccessCard>
            <h1>
              👋 <span>Thank you for choosing HiKi!</span>
            </h1>
            <StyledSuccessCardContent>
              <img src="/images/success-tick.svg" alt="success" />

              <h2>Registration Successful</h2>
              <h3>30 days free trial</h3>
              <h4>We have emailed you an activation link with instructions.</h4>
              <p>
                Your free trial ends in<span>15 days</span>.
              </p>
              <p>
                If you have any queries, please write to us at{" "}
                <span>
                  <a href="mailto:xyz@asd.com">help@hiki.com</a>
                </span>
              </p>
              <p>
                Go to
                <span>
                  <Link to="/">Login</Link>
                </span>
              </p>
            </StyledSuccessCardContent>
          </StyledSuccessCard>
        </article>
      </StyledSuccessContent>
    </StyledSuccessWrapper>
  );
};

export default RegisterSuccess;
