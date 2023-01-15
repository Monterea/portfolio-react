import styled from "styled-components";
import landingPageBackgroundDark from "../../assets/pictures/landingPage/landingPageBackgroundDark.jpg";
import * as palette from "../../App.mainStyles";

export const PageContainer = styled.div`
  top: 55px;
  position: relative;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-image: url(${landingPageBackgroundDark});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    min-height: 80vh;
    padding-top: 80px;
  }
`;
export const HeaderWhite = styled.div`
  padding: 35px;
  width: 100%;
  justify-self: center;
  text-align: center;
  padding: 15px;
`;
export const H2White = styled.h2`
  color: ${palette.white};
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  padding: 3px;
  padding-bottom: 10px;
  text-shadow: 5px 5px 10px #f5a100;
`;
export const CaruselsContainer = styled.div`
  color: ${palette.darkBlue};
  top: 55px;
  position: relative;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${palette.lightBlue};
  //background-color: ${palette.white};
`;
