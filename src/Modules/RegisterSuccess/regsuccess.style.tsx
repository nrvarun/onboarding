import styled from "styled-components";

export const StyledSuccessWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
`;

export const StyledSuccessContent = styled.div`
  background-color: #f2f9ff;
  display: flex;
  min-height: 100vh;
  padding: 100px 0;

  article {
    margin: auto;
    text-align: center;
  }
`;

export const StyledSuccessCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 60px 110px;
  margin: 60px 0 0 0;

  h1 {
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    margin: 0 0 40px 0;
  }
`;

export const StyledSuccessCardContent = styled.div`
  max-width: 400px;
  margin: 0 auto;
  color: #1c1c1c;

  h2 {
    margin: 20px 0 0 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.02em;
  }

  h3 {
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    margin: 30px 0;
  }

  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: rgba(136, 136, 136, 0.8);
  }

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin: 0 0 40px 0;

    span {
      margin: 0 4px;
      font-weight: 700;
    }

    a {
      color: #0052cc;
    }
  }
`;
